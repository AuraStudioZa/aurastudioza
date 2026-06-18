/** Rich clipboard (text/html + text/plain) for pasting into visual email editors. */
export async function copySignatureRich(html: string, plainText: string): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.clipboard?.write) {
    return false;
  }

  try {
    const htmlBlob = new Blob([html], { type: "text/html" });
    const plainBlob = new Blob([plainText], { type: "text/plain" });
    await navigator.clipboard.write([
      new ClipboardItem({
        "text/html": htmlBlob,
        "text/plain": plainBlob,
      }),
    ]);
    return true;
  } catch {
    return false;
  }
}

export async function copySignatureHtmlSource(html: string): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(html);
    return true;
  } catch {
    return false;
  }
}

export async function copySignaturePlain(plainText: string): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(plainText);
    return true;
  } catch {
    return false;
  }
}
