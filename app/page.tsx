import { Metadata } from "next";
import { pagesMetadata } from "./page-metadata";
import { HomePage } from "./home-page";

export const metadata: Metadata = {
  ...pagesMetadata.home,
  openGraph: {
    ...pagesMetadata.home,
    images: [
      {
        url: "https://buildaiweb.com/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "BuildAIWeb Platform Preview",
      },
    ],
  },
};

export default function Page() {
  return <HomePage />;
}
