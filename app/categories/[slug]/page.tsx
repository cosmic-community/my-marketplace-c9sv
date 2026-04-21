// app/categories/[slug]/page.tsx
import { getCategory, getRestaurantsByCategory, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import RestaurantCard from '@/components/RestaurantCard'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) notFound()

  const restaurants = await getRestaurantsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)
  const iconImage = category.metadata?.icon_image

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-8">
        {iconImage && (
          <img
            src={`${iconImage.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
            alt={name}
            className="w-20 h-20 rounded-xl object-cover"
          />
        )}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">{name}</h1>
          {description && <p className="text-gray-600 mt-1">{description}</p>}
        </div>
      </div>

      {restaurants.length === 0 ? (
        <p className="text-gray-500">No restaurants in this category yet.</p>
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