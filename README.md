# My Marketplace - Food Delivery

![App Preview](https://imgix.cosmicjs.com/f59dbd80-3dd5-11f1-a269-4f82b499246f-autopilot-photo-1579871494447-9811cf80d66c-1776812458304.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern food delivery marketplace built with Next.js 16 and Cosmic CMS.

## Features

- 🏪 Browse local restaurants with ratings and delivery info
- 🍔 Explore full menus with prices and availability
- 🏷️ Filter by cuisine categories
- ⭐ Read authentic customer reviews
- 📱 Fully responsive design
- ⚡ Server-side rendering for optimal performance

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69e801636323a358bfc4fcfb&clone_repository=69e802336323a358bfc4fd33)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online marketplace with product listings, seller profiles, categories, and customer reviews. User instructions: Food Delivery Service"

### Code Generation Prompt

> Build a Next.js application for an online business called "My Marketplace". The content is managed in Cosmic CMS with the following object types: categories, restaurants, menu-items, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: Food Delivery Service

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites
- Bun or Node.js 18+
- Cosmic account with bucket

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch restaurants with categories
const { objects } = await cosmic.objects
  .find({ type: 'restaurants' })
  .depth(1)

// Fetch menu items for a restaurant
const { objects } = await cosmic.objects
  .find({ type: 'menu-items', 'metadata.restaurant': restaurantId })
  .depth(1)
```

## Cosmic CMS Integration

Uses 4 content types: categories, restaurants, menu-items, and reviews with proper relationship handling via depth parameter.

## Deployment

Deploy to Vercel or Netlify. Set environment variables: COSMIC_BUCKET_SLUG, COSMIC_READ_KEY, COSMIC_WRITE_KEY.

<!-- README_END -->