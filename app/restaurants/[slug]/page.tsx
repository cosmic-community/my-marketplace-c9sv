// app/restaurants/[slug]/page.tsx
import { getRestaurant, getMenuItemsByRestaurant, getReviewsByRestaurant, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import MenuItemCard from '@/components/MenuItemCard'
import ReviewCard from '@/components/ReviewCard'

export default async function RestaurantPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const restaurant = await getRestaurant(slug)

  if (!restaurant) notFound()

  const [menuItems, reviews] = await Promise.all([
    getMenuItemsByRestaurant(restaurant.id),
    getReviewsByRestaurant(restaurant.id),
  ])

  const name = getMetafieldValue(restaurant.metadata?.name) || restaurant.title
  const description = getMetafieldValue(restaurant.metadata?.description)
  const address = getMetafieldValue(restaurant.metadata?.address)
  const deliveryTime = getMetafieldValue(restaurant.metadata?.delivery_time)
  const rating = restaurant.metadata?.rating
  const cuisineType = restaurant.metadata?.cuisine_type
  const coverImage = restaurant.metadata?.cover_image
  const logo = restaurant.metadata?.logo

  return (
    <div>
      {/* Cover Image */}
      {coverImage && (
        <div className="w-full h-64 md:h-96 relative overflow-hidden bg-gray-200">
          <img
            src={`${coverImage.imgix_url}?w=2400&h=800&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Restaurant Header */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 -mt-20 md:-mt-24 relative z-10">
          {logo && (
            <div className="w-32 h-32 rounded-xl overflow-hidden bg-white shadow-lg border-4 border-white flex-shrink-0">
              <img
                src={`${logo.imgix_url}?w=256&h=256&fit=crop&auto=format,compress`}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{name}</h1>
            {cuisineType && (
              <span className="inline-block bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                {getMetafieldValue(cuisineType.metadata?.name) || cuisineType.title}
              </span>
            )}
            {description && <p className="text-gray-600 mb-3">{description}</p>}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {rating && (
                <span className="flex items-center gap-1">
                  ⭐ <strong>{rating}</strong>
                </span>
              )}
              {deliveryTime && <span>🚴 {deliveryTime}</span>}
              {address && <span>📍 {address}</span>}
            </div>
          </div>
        </div>

        {/* Menu */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Menu</h2>
          {menuItems.length === 0 ? (
            <p className="text-gray-500">No menu items available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </section>

        {/* Reviews */}
        {reviews.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}