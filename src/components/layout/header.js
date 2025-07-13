import Link from "next/link";

const LINKS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Blog',
    href: '/blog'
  }
]

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center bg-zinc-50 px-24 py-3 mb-4 border-b border-zinc-300 fixed w-full">
      <Link href="/">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
          ulises.io
        </span>
      </Link>

      <nav className="flex items-center space-x-6">
        {LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-blue-600 transition-colors">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}