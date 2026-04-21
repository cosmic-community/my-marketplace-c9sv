import { getRestaurants, getCategories, getReviews } from '@/lib/cosmic'
import RestaurantCard from '@/components/RestaurantCard'
import CategoryCard from '@/components/CategoryCard'
import ReviewCard from '@/components/ReviewCard'
import Link from 'next/link'

export default async function HomePage() {
  const [restaurants, categories, reviews] = await Promise.all([
    getRestaurants(),
    getCategories(),
    getReviews(),
  ])

  const featuredRestaurants = restaurants.slice(0, 6)
  const recentReviews = reviews.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-500 to-brand-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Delicious Food,<br />Delivered Fast 🍔
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-brand-50">
            Order from your favorite local restaurants
          </p>
          <Link
            href="/restaurants"
            className="inline-block bg-white text-brand-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-50 transition-colors"
          >
            Browse Restaurants
          </Link>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Restaurants */}
      {featuredRestaurants.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured Restaurants</h2>
              <Link href="/restaurants" className="text-brand-600 hover:text-brand-700 font-semibold">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Reviews */}
      {recentReviews.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">What Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}