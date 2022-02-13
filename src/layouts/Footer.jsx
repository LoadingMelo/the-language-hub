import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-sky-700 px-8 py-4 text-center text-sky-100 text-base flex items-center justify-center gap-4">
      <h4>The Language Hub © 2022</h4>
      <span className="hidden md:block">|</span>
      <h4 className="hidden md:block">
        Created by{" "}
        <Link href="https://twitter.com/Psypher1">
          <a
            className="font-bold underline text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            James Midzi
          </a>
        </Link>
      </h4>
    </footer>
  );
}
