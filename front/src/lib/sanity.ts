import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
  useCdn: true,
})

export const menuQuery = `
  *[_type == "category"] | order(order asc) {
    name,
    "items": *[_type == "pizza" && references(^._id) && available == true] | order(order asc) {
      name,
      description,
      ingredients,
      price
    }
  }
`

export const siteConfigQuery = `
  *[_type == "siteConfig"][0] {
    restaurantName,
    phoneNumber,
    address,
    openingHours
  }
`
