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
          <Link href="/home" className="text-2xl">
            Home
          </Link>
          <Link href="/work" className="text-2xl">
            Work
          </Link>
        </div>
      </div>
    </header>
  );
}
