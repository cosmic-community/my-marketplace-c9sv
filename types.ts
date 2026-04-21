export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    icon_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Restaurant extends CosmicObject {
  type: 'restaurants';
  metadata: {
    name?: string;
    description?: string;
    cuisine_type?: Category;
    logo?: {
      url: string;
      imgix_url: string;
    };
    cover_image?: {
      url: string;
      imgix_url: string;
    };
    address?: string;
    rating?: number;
    delivery_time?: string;
  };
}

export interface MenuItem extends CosmicObject {
  type: 'menu-items';
  metadata: {
    name?: string;
    description?: string;
    price?: number;
    image?: {
      url: string;
      imgix_url: string;
    };
    category?: Category;
    restaurant?: Restaurant;
    available?: boolean;
  };
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    customer_name?: string;
    rating?: number;
    comment?: string;
    restaurant?: Restaurant;
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}