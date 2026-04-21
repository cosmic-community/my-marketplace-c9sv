export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-2xl font-bold text-white mb-4">🍔 My Marketplace</div>
        <p className="text-gray-400 mb-4">Delivering delicious food to your door</p>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} My Marketplace. All rights reserved.</p>
      </div>
    </footer>
  )
}