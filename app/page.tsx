import { StudioHomePage } from "../components/studio/studio-home-page";
import { homePageMetadata } from "../lib/site-metadata";

export const metadata = homePageMetadata;

export default function HomePage() {
  return <StudioHomePage />;
}
