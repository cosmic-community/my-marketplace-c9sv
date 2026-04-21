import { getReviews } from '@/lib/cosmic'
import ReviewCard from '@/components/ReviewCard'

export default async function ReviewsPage() {
  const reviews = await getReviews()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900">Customer Reviews</h1>
      <p className="text-gray-600 mb-8">{reviews.length} reviews from happy customers</p>

      {reviews.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500">No reviews yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  )
}