import { MenuItem } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const name = getMetafieldValue(item.metadata?.name) || item.title
  const description = getMetafieldValue(item.metadata?.description)
  const price = item.metadata?.price
  const image = item.metadata?.image
  const available = item.metadata?.available !== false

  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-md ${!available ? 'opacity-60' : ''}`}>
      <div className="flex">
        {image && (
          <div className="w-32 h-32 flex-shrink-0 bg-gray-200">
            <img
              src={`${image.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-4 flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-gray-900">{name}</h3>
            {price !== undefined && price !== null && (
              <span className="font-bold text-brand-600 whitespace-nowrap ml-2">
                ${typeof price === 'number' ? price.toFixed(2) : price}
              </span>
            )}
          </div>
          {description && <p className="text-sm text-gray-600 line-clamp-2">{description}</p>}
          {!available && (
            <span className="inline-block mt-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
              Unavailable
            </span>
          )}
        </div>
      </div>
    </div>
  )
}