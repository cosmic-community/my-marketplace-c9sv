import { Review } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ReviewCard({ review }: { review: Review }) {
  const customerName = getMetafieldValue(review.metadata?.customer_name) || 'Anonymous'
  const comment = getMetafieldValue(review.metadata?.comment)
  const rating = review.metadata?.rating
  const restaurant = review.metadata?.restaurant

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold text-gray-900">{customerName}</div>
        {rating && (
          <div className="flex items-center gap-1 text-yellow-500">
            {'⭐'.repeat(Math.min(5, Math.max(0, Number(rating))))}
          </div>
        )}
      </div>
      {comment && <p className="text-gray-600 mb-3">"{comment}"</p>}
      {restaurant && (
        <p className="text-sm text-gray-500">
          — on {getMetafieldValue(restaurant.metadata?.name) || restaurant.title}
        </p>
      )}
    </div>
  )
}