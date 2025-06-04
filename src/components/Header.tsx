import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex min-w-full px-30 py-10">
        <div className="flex flex-auto">
          <Link href="/" className="text-4xl font-bold">
            JULES FONTAINE
          </Link>
        </div>
        <div className="flex flex-auto justify-end gap-10">
          <Link href="/home" className="flex items-center text-lg font-base">
            Home
          </Link>
          <Link href="/work" className="flex items-center text-lg font-base">
            Work
          </Link>
        </div>
      </div>
    </header>
  );
}
