import { createBucketClient } from '@cosmicjs/sdk'
import { Restaurant, MenuItem, Category, Review, hasStatus } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}

export async function getRestaurants(): Promise<Restaurant[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'restaurants' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Restaurant[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch restaurants')
  }
}

export async function getRestaurant(slug: string): Promise<Restaurant | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'restaurants', slug })
      .depth(1)
    return response.object as Restaurant
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch restaurant')
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Category[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch categories')
  }
}

export async function getCategory(slug: string): Promise<Category | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'categories', slug })
      .depth(1)
    return response.object as Category
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch category')
  }
}

export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-items' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as MenuItem[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch menu items')
  }
}

export async function getMenuItemsByRestaurant(restaurantId: string): Promise<MenuItem[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-items', 'metadata.restaurant': restaurantId })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as MenuItem[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch menu items')
  }
}

export async function getReviews(): Promise<Review[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'reviews' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Review[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch reviews')
  }
}

export async function getReviewsByRestaurant(restaurantId: string): Promise<Review[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'reviews', 'metadata.restaurant': restaurantId })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Review[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch reviews')
  }
}

export async function getRestaurantsByCategory(categoryId: string): Promise<Restaurant[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'restaurants', 'metadata.cuisine_type': categoryId })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Restaurant[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch restaurants')
  }
}