import { JSX } from "react";
import "./globals.css";

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang="en">
      <body>{children}</body>
      <script
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </html>
  );
};

export default RootLayout;
