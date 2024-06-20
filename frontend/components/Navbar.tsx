"use client";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between p-4 bg-slate-800 text-white">
      <a
        href="/"
        className={
          pathname === "/"
            ? "bg-red-500 px-2 py-1 rounded-full text-white"
            : "hover:text-red-500"
        }
      >
        Home
      </a>
      <ul className="flex flex-row gap-3 items-center">
        <li
          className={
            pathname === "/image-processing"
              ? "bg-red-500 px-2 py-1 rounded-full"
              : "hover:text-red-500"
          }
        >
          <a href="/image-processing">Image Processing</a>
        </li>
        <li
          className={
            pathname === "/video-processing"
              ? "bg-red-500 px-2 py-1 rounded-full"
              : "hover:text-red-500"
          }
        >
          <a href="/video-processing">Video Processing</a>
        </li>
        <li
          className={
            pathname === "/audio-processing"
              ? "bg-red-500  px-2 py-1 rounded-full"
              : "hover:text-red-500"
          }
        >
          <a href="/audio-processing">Audio Processing</a>
        </li>
      </ul>
    </nav>
  );
}
