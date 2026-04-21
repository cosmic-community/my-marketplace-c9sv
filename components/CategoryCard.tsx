import Link from 'next/link'
import { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CategoryCard({ category }: { category: Category }) {
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const iconImage = category.metadata?.icon_image

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow text-center group"
    >
      {iconImage ? (
        <img
          src={`${iconImage.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
          alt={name}
          className="w-16 h-16 mx-auto mb-3 rounded-lg object-cover group-hover:scale-110 transition-transform"
        />
      ) : (
        <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center text-4xl">🍴</div>
      )}
      <h3 className="font-semibold text-gray-900">{name}</h3>
    </Link>
  )
}