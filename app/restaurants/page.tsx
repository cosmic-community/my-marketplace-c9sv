import { getRestaurants } from '@/lib/cosmic'
import RestaurantCard from '@/components/RestaurantCard'

export default async function RestaurantsPage() {
  const restaurants = await getRestaurants()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900">All Restaurants</h1>
      <p className="text-gray-600 mb-8">Discover amazing food from {restaurants.length} local restaurants</p>

      {restaurants.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500">No restaurants available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  )
}