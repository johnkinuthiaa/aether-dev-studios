import localFont from "next/font/local";

export const sfPro = localFont({
  src: [
    {
      path: "../../public/fonts/sf-pro/SF-Pro.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro/SF-Pro-Italic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-sf-pro",
  display: "swap",
  adjustFontFallback: false,
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

export const sfMono = localFont({
  src: [
    {
      path: "../../public/fonts/sf-mono/SF-Mono-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-mono/SF-Mono-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-sf-mono",
  display: "swap",
  adjustFontFallback: false,
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});

export const newYork = localFont({
  src: [
    {
      path: "../../public/fonts/new-york/NewYork.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/new-york/NewYorkItalic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-ny",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
});
