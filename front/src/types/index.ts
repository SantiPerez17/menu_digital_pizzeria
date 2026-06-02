export interface SiteConfig {
  restaurantName: string
  phoneNumber: string
  address: string
  openingHours: string
}

export interface MenuItem {
  name: string
  description: string
  ingredients: string[]
  price: number
}

export interface MenuCategory {
  name: string
  items: MenuItem[]
}
