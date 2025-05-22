import { assets } from "../assets/assets";

const productsList=[
    {
        id: 1,
        name: 'Premium Wireless Headphone',
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.5,
        reviewCount: 256,
        category: 'Electronics',
        brand: 'SoundMaster',
        image: assets.headphone,
        images: [
          assets.headphone,
          assets.headphone2,
        ],
        discount: 20,
        bestseller: true,
        availability: true,
        sizes: ['S', 'M', 'L'],
        seller: 'ElectroWorld'
      },
      {
        id: 2,
        name: 'Smartphone Pro Max',
        price: 899.99,
        originalPrice: 999.99,
        rating: 4.7,
        reviewCount: 478,
        category: 'Electronics',
        brand: 'TechGiant',
        image: assets.smartphone,
        images: [
          assets.smartphone,
          assets.iphone,
        ],
        discount: 10,
        bestseller: true,
        availability: true,
        seller: 'Mobile Hub'
      },
      {
        id: 3,
        name: 'Men\'s Classic Fit TShirt',
        price: 39.99,
        originalPrice: 54.99,
        rating: 3,
        reviewCount: 189,
        category: 'Fashion',
        brand: 'StyleMaster',
        image: assets.tshirt,
        images: [
          assets.tshirt,
          assets.tshirt2,
        ],
        discount: 27,
        bestseller: false,
        availability: true,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        seller: 'FashionHub'
      },
      {
        id: 4,
        name: 'Smart Watch Pro',
        price: 149.99,
        originalPrice: 199.99,
        rating: 4.4,
        reviewCount: 312,
        category: 'Electronics',
        brand: 'FitTech',
        image: assets.watch,
        images: [
          assets.watch,
          assets.watch2,
        ],
        discount: 25,
        bestseller: true,
        availability: true,
        seller: 'GadgetZone'
      },
      {
        id: 5,
        name: 'Non-Stick Cookware Set',
        price: 79.99,
        originalPrice: 129.99,
        rating: 3.9,
        reviewCount: 201,
        category: 'Home-Kitchen',
        brand: 'KitchenPro',
        image: assets.cookware,
        images: [
          assets.cookware,
          assets.cookware2,
        ],
        discount: 38,
        bestseller: false,
        availability: true,
        seller: 'HomeEssentials'
      },
      {
        id: 6,
        name: 'Vitamin C Serum',
        price: 24.99,
        originalPrice: 34.99,
        rating: 2,
        reviewCount: 325,
        category: 'Beauty',
        brand: 'GlowUp',
        image: assets.vitaminC,
        images: [
          assets.vitaminC,
        ],
        discount: 28,
        bestseller: true,
        availability: true,
        seller: 'BeautyWorld'
      },
      {
        id: 7,
        name: 'Wireless Bluetooth Speaker',
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.2,
        reviewCount: 178,
        category: 'Electronics',
        brand: 'SoundMaster',
        image: assets.speaker,
        images: [
          assets.speaker,
        ],
        discount: 25,
        bestseller: false,
        availability: true,
        seller: 'ElectroWorld'
      },
      {
        id: 8,
        name: 'Running Shoes',
        price: 89.99,
        originalPrice: 109.99,
        rating: 3.5,
        reviewCount: 235,
        category: 'Sports',
        brand: 'SportFlex',
        image: assets.shoes,
        images: [
          assets.shoes,
        ],
        discount: 18,
        bestseller: true,
        availability: true,
        sizes: ['7', '8', '9', '10', '11', '12'],
        seller: 'SportsMaster'
      },
      {
        id: 9,
        name: 'Laptop',
        price: 999.99,
        originalPrice: 1249.99,
        rating: 4.5,
        reviewCount: 256,
        category: 'Electronics',
        brand: 'HP',
        image: assets.laptop,
        images: [
          assets.laptop,
          assets.laptop,
        ],
        discount: 20,
        bestseller: true,
        availability: true,
        seller: 'ElectroWorld'
      },
      {
        id: 10,
        name: 'Smartphone 13 Pro ',
        price: 1079.99,
        originalPrice: 1199.99,
        rating: 4.7,
        reviewCount: 478,
        category: 'Electronics',
        brand: 'TechGiant',
        image: assets.iphone,
        images: [
          assets.iphone,
          assets.smartphone,
        ],
        discount: 10,
        bestseller: true,
        availability: true,
        seller: 'Mobile Hub'
      },
      {
        id: 11,
        name: 'Men\'s Classic Fit Shirt',
        price: 46.99,
        originalPrice: 64.99,
        rating: 2.5,
        reviewCount: 185,
        category: 'Fashion',
        brand: 'StyleMaster',
        image: assets.shirt,
        images: [
          assets.shirt,
          assets.shirt,
        ],
        discount: 27,
        bestseller: false,
        availability: true,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        seller: 'FashionHub'
      },
      {
        id: 12,
        name: 'Sliding toy',
        price: 224.99,
        originalPrice: 299.99,
        rating: 4.4,
        reviewCount: 310,
        category: 'Toys-Games',
        brand: 'Toyz',
        image: assets.sliding_toy,
        images: [
          assets.sliding_toy,
          assets.sliding_toy,
        ],
        discount: 25,
        bestseller: true,
        availability: true,
        seller: 'ToysZone'
      },
      {
        id: 13,
        name: 'Dumbles',
        price: 89.99,
        originalPrice: 139.99,
        rating: 3.5,
        reviewCount: 201,
        category: 'sport',
        brand: 'sportos',
        image: assets.dumbles,
        images: [
          assets.dumbles,
          assets.dumbles,
        ],
        discount: 35,
        bestseller: false,
        availability: true,
        seller: 'Sportiers'
      },
      {
        id: 14,
        name: 'Olay Retinol night secum',
        price: 33.99,
        originalPrice: 44.99,
        rating: 1,
        reviewCount: 320,
        category: 'Beauty',
        brand: 'GlowUp',
        image: assets.olay,
        images: [
          assets.olay,
        ],
        discount: 23,
        bestseller: true,
        availability: true,
        seller: 'BeautyWorld'
      },
      {
        id: 15,
        name: 'Books',
        price: 66.99,
        originalPrice: 89.99,
        rating: 4.2,
        reviewCount: 170,
        category: 'books',
        brand: 'bookster',
        image: assets.books2,
        images: [
          assets.books2,
          assets.books,
        ],
        discount: 25,
        bestseller: false,
        availability: true,
        seller: 'BooksWorld'
      },
      {
        id: 16,
        name: 'Atta',
        price: 99.99,
        originalPrice: 119.99,
        rating: 4,
        reviewCount: 230,
        category: 'grocery',
        brand: 'groceryverce',
        image: assets.atta,
        images: [
          assets.atta,
        ],
        discount: 16,
        bestseller: true,
        availability: true,
        seller: 'Groceryworld'
      }
]

const categoriesList=[
  { id: 1, name: 'Electronics', icon: assets.laptop, url: 'electronics' },
  { id: 2, name: 'Fashion', icon: assets.tshirt, url: 'fashion' },
  { id: 3, name: 'Home & Kitchen', icon: assets.home_kitchen, url: 'home-kitchen' },
  { id: 4, name: 'Beauty', icon: assets.lipstick, url: 'beauty' },
  { id: 5, name: 'Toys & Games', icon: assets.toys, url: 'toys-games' },
  { id: 6, name: 'Sports', icon: assets.football, url: 'sports' },
  { id: 7, name: 'Books', icon: assets.books, url: 'books' },
  { id: 8, name: 'Grocery', icon: assets.grocery, url: 'grocery' }
]

const banners = [
  {
  id: 1,
  title: "Summer Collection 2025",
  description: "Get up to 50% off on all summer essentials",
  bgColor: "bg-blue-100",
  textColor: "text-blue-800",
  btnColor: "bg-blue-600",
  image: assets.summer_collections
  },
  {
  id: 2,
  title: "New Electronics Arrivals",
  description: "Latest gadgets with exclusive launch offers",
  bgColor: "bg-purple-100",
  textColor: "text-purple-800",
  btnColor: "bg-purple-600",
  image: assets.electronics
  },
  {
  id: 3,
  title: "Home Decor Sale",
  description: "Transform your space with premium decor",
  bgColor: "bg-green-100",
  textColor: "text-green-800",
  btnColor: "bg-green-600",
  image: assets.home_decore
  }
];

const userAllOrders=[{
  orderId: "ORD-24156789",
  orderDate: "May 19, 2025",
  status: 'Delivered',
  estimatedDelivery: "May 24, 2025",
  total: 220.99,
  products: [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 199.99,
      quantity: 1,
      image: assets.headphone
    }
  ],
  shipping: {
    method: "Standard Shipping",
    cost: 20
  },
  shippingAddress: {
    name: "Test",
    street: "123 Main Street",
    apartment: "Apt 4B",
    city: "City",
    state: "DL",
    zipCode: "10001",
    country: "India"
  },
  billingAddress: {
    name: "Test",
    street: "123 Main Street",
    apartment: "Apt 4B",
    city: "City",
    state: "DL",
    zipCode: "10001",
    country: "India"
  },
}]

export {productsList, categoriesList, banners, userAllOrders}