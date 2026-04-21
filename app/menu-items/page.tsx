import { getMenuItems } from '@/lib/cosmic'
import MenuItemCard from '@/components/MenuItemCard'

export default async function MenuItemsPage() {
  const menuItems = await getMenuItems()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900">All Menu Items</h1>
      <p className="text-gray-600 mb-8">Explore {menuItems.length} delicious options</p>

      {menuItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500">No menu items available.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}