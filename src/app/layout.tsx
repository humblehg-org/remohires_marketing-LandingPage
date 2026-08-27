import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleTagManager gtmId="GTM-K736CCFP" />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K736CCFP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
