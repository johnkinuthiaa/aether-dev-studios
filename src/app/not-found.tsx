import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="shell section">
      <p className="label-line">{"// 404 //"}</p>
      <h1 className="hero-title">
        <span className="line">
          <span>Page not found.</span>
        </span>
      </h1>
      <p className="hero-subtext">The requested page does not exist or may have moved.</p>
      <Link href="/" className="button-primary">
        Back Home
      </Link>
    </main>
  );
}
