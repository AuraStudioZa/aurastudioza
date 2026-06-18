const ACCEPTED_TYPES = new Set(["image/jpeg", "image/png"]);
const MAX_INPUT_BYTES = 5 * 1024 * 1024;
const MAX_LOGO_WIDTH = 180;
const MAX_HEADSHOT_SIZE = 144;
const TARGET_MAX_BYTES = 120 * 1024;

export type SignatureImageMode = "logo" | "headshot";

export function isAcceptedSignatureImage(file: File): boolean {
  return ACCEPTED_TYPES.has(file.type);
}

function loadImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read image."));
    };
    img.src = url;
  });
}

function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) reject(new Error("Could not encode image."));
        else resolve(blob);
      },
      type,
      quality
    );
  });
}

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Could not read encoded image."));
    reader.readAsDataURL(blob);
  });
}

async function encodeCanvas(
  canvas: HTMLCanvasElement,
  preferPng: boolean
): Promise<string> {
  if (preferPng) {
    const png = await canvasToBlob(canvas, "image/png");
    if (png.size <= TARGET_MAX_BYTES) {
      return blobToDataUrl(png);
    }
  }

  for (const quality of [0.92, 0.85, 0.75, 0.65, 0.55]) {
    const jpeg = await canvasToBlob(canvas, "image/jpeg", quality);
    if (jpeg.size <= TARGET_MAX_BYTES || quality === 0.55) {
      return blobToDataUrl(jpeg);
    }
  }

  const fallback = await canvasToBlob(canvas, "image/jpeg", 0.5);
  return blobToDataUrl(fallback);
}

/** Resize a local JPEG/PNG for embedding in email HTML (data URL). */
export async function processSignatureImageFile(
  file: File,
  mode: SignatureImageMode
): Promise<string> {
  if (!isAcceptedSignatureImage(file)) {
    throw new Error("Please choose a JPEG or PNG file.");
  }
  if (file.size > MAX_INPUT_BYTES) {
    throw new Error("Image is too large. Use a file under 5 MB.");
  }

  const img = await loadImageFromFile(file);
  const maxSize = mode === "headshot" ? MAX_HEADSHOT_SIZE : MAX_LOGO_WIDTH;
  const scale = Math.min(1, maxSize / Math.max(img.width, img.height, 1));
  const width = Math.max(1, Math.round(img.width * scale));
  const height = Math.max(1, Math.round(img.height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not process image.");

  if (mode === "headshot") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
  }

  ctx.drawImage(img, 0, 0, width, height);

  const preferPng = file.type === "image/png" && mode === "logo";
  return encodeCanvas(canvas, preferPng);
}
