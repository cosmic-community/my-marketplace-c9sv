import Link from 'next/link'
import { Restaurant } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const name = getMetafieldValue(restaurant.metadata?.name) || restaurant.title
  const description = getMetafieldValue(restaurant.metadata?.description)
  const deliveryTime = getMetafieldValue(restaurant.metadata?.delivery_time)
  const rating = restaurant.metadata?.rating
  const cuisineType = restaurant.metadata?.cuisine_type
  const coverImage = restaurant.metadata?.cover_image

  return (
    <Link
      href={`/restaurants/${restaurant.slug}`}
      className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="h-48 bg-gray-200 overflow-hidden">
        {coverImage ? (
          <img
            src={`${coverImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">🍽️</div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          {rating && (
            <span className="flex items-center gap-1 text-sm font-semibold text-gray-700 bg-yellow-50 px-2 py-1 rounded">
              ⭐ {rating}
            </span>
          )}
        </div>
        {cuisineType && (
          <span className="inline-block bg-brand-50 text-brand-700 px-2 py-1 rounded text-xs font-semibold mb-2">
            {getMetafieldValue(cuisineType.metadata?.name) || cuisineType.title}
          </span>
        )}
        {description && <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>}
        {deliveryTime && (
          <p className="text-sm text-gray-500">🚴 {deliveryTime}</p>
        )}
      </div>
    </Link>
  )
}