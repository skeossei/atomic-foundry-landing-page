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
    </html>
  );
};

export default RootLayout;
