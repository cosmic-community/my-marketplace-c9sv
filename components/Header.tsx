import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-brand-600 flex items-center gap-2">
          🍔 My Marketplace
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/restaurants" className="text-gray-700 hover:text-brand-600 font-medium">
            Restaurants
          </Link>
          <Link href="/categories" className="text-gray-700 hover:text-brand-600 font-medium">
            Categories
          </Link>
          <Link href="/menu-items" className="text-gray-700 hover:text-brand-600 font-medium">
            Menu
          </Link>
          <Link href="/reviews" className="text-gray-700 hover:text-brand-600 font-medium">
            Reviews
          </Link>
        </nav>
      </div>
    </header>
  )
}