import { assets } from "../assets/assets";

const productsList=[
    {
        id: 1,
        name: 'Premium Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation and long battery life.',
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.5,
        reviewCount: 256,
        category: 'Electronics',
        brand: 'SoundMaster',
        image: assets.headphone,
        images: [
          assets.headphone,
          assets.headphone,
          assets.headphone,
          assets.headphone
        ],
        discount: 20,
        bestseller: true,
        availability: true,
        specifications: [
          { name: 'Battery Life', value: '30 hours' },
          { name: 'Connectivity', value: 'Bluetooth 5.0' },
          { name: 'Weight', value: '250g' },
          { name: 'Noise Cancellation', value: 'Active' }
        ],
        colors: ['Black', 'White', 'Blue'],
        seller: 'ElectroWorld'
      },
      {
        id: 2,
        name: 'Smartphone Pro Max',
        description: 'Latest smartphone with high-resolution camera and powerful processor.',
        price: 899.99,
        originalPrice: 999.99,
        rating: 4.7,
        reviewCount: 478,
        category: 'Electronics',
        brand: 'TechGiant',
        image: assets.smartphone,
        images: [
          assets.smartphone,
          assets.smartphone,
          assets.smartphone
        ],
        discount: 10,
        bestseller: true,
        availability: true,
        specifications: [
          { name: 'Display', value: '6.7" OLED' },
          { name: 'Processor', value: 'Octa-core' },
          { name: 'Storage', value: '256GB' },
          { name: 'Camera', value: '48MP Triple' }
        ],
        colors: ['Midnight Black', 'Silver', 'Gold'],
        seller: 'Mobile Hub'
      },
      {
        id: 3,
        name: 'Men\'s Classic Fit TShirt',
        description: 'Comfortable classic fit Tshirt for formal and casual occasions.',
        price: 39.99,
        originalPrice: 54.99,
        rating: 3,
        reviewCount: 189,
        category: 'Fashion',
        brand: 'StyleMaster',
        image: assets.tshirt,
        images: [
          assets.tshirt,
          assets.tshirt,
          assets.tshirt
        ],
        discount: 27,
        bestseller: false,
        availability: true,
        specifications: [
          { name: 'Material', value: '100% Cotton' },
          { name: 'Fit', value: 'Classic' },
          { name: 'Care', value: 'Machine Wash' }
        ],
        colors: ['White', 'Blue', 'Black', 'Pink'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        seller: 'FashionHub'
      },
      {
        id: 4,
        name: 'Smart Watch Pro',
        description: 'Track fitness, receive notifications, and monitor health with this premium smartwatch.',
        price: 149.99,
        originalPrice: 199.99,
        rating: 4.4,
        reviewCount: 312,
        category: 'Electronics',
        brand: 'FitTech',
        image: assets.watch,
        images: [
          assets.watch,
          assets.watch,
          assets.watch
        ],
        discount: 25,
        bestseller: true,
        availability: true,
        specifications: [
          { name: 'Display', value: '1.4" AMOLED' },
          { name: 'Battery', value: '7 days' },
          { name: 'Water Resistance', value: '5 ATM' },
          { name: 'Sensors', value: 'Heart Rate, SpO2, Accelerometer' }
        ],
        colors: ['Black', 'Silver', 'Rose Gold'],
        seller: 'GadgetZone'
      },
      {
        id: 5,
        name: 'Non-Stick Cookware Set',
        description: 'Complete cookware set with durable non-stick coating for healthy cooking.',
        price: 79.99,
        originalPrice: 129.99,
        rating: 3.9,
        reviewCount: 201,
        category: 'Home & Kitchen',
        brand: 'KitchenPro',
        image: assets.cookware,
        images: [
          assets.cookware,
          assets.cookware,
          assets.cookware
        ],
        discount: 38,
        bestseller: false,
        availability: true,
        specifications: [
          { name: 'Pieces', value: '10' },
          { name: 'Material', value: 'Aluminum with Non-stick Coating' },
          { name: 'Dishwasher Safe', value: 'Yes' },
          { name: 'Compatible', value: 'All Cooktops including Induction' }
        ],
        colors: ['Black', 'Red'],
        seller: 'HomeEssentials'
      },
      {
        id: 6,
        name: 'Vitamin C Serum',
        description: 'Brightening face serum with antioxidants for radiant skin.',
        price: 24.99,
        originalPrice: 34.99,
        rating: 2,
        reviewCount: 325,
        category: 'Beauty',
        brand: 'GlowUp',
        image: assets.vitaminC,
        images: [
          assets.vitaminC,
          assets.vitaminC
        ],
        discount: 28,
        bestseller: true,
        availability: true,
        specifications: [
          { name: 'Size', value: '30ml' },
          { name: 'Key Ingredients', value: 'Vitamin C, Hyaluronic Acid, Vitamin E' },
          { name: 'Skin Type', value: 'All Skin Types' }
        ],
        seller: 'BeautyWorld'
      },
      {
        id: 7,
        name: 'Wireless Bluetooth Speaker',
        description: 'Portable speaker with deep bass and waterproof design.',
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.2,
        reviewCount: 178,
        category: 'Electronics',
        brand: 'SoundMaster',
        image: assets.speaker,
        images: [
          assets.speaker,
          assets.speaker,
          assets.speaker
        ],
        discount: 25,
        bestseller: false,
        availability: true,
        specifications: [
          { name: 'Battery Life', value: '12 hours' },
          { name: 'Waterproof Rating', value: 'IPX7' },
          { name: 'Connectivity', value: 'Bluetooth 5.0' },
          { name: 'Power', value: '20W' }
        ],
        colors: ['Black', 'Blue', 'Red'],
        seller: 'ElectroWorld'
      },
      {
        id: 8,
        name: 'Running Shoes',
        description: 'Lightweight and comfortable shoes for running and daily workouts.',
        price: 89.99,
        originalPrice: 109.99,
        rating: 3.5,
        reviewCount: 235,
        category: 'Sports',
        brand: 'SportFlex',
        image: assets.shoes,
        images: [
          assets.shoes,
          assets.shoes,
          assets.shoes
        ],
        discount: 18,
        bestseller: true,
        availability: true,
        specifications: [
          { name: 'Material', value: 'Breathable Mesh' },
          { name: 'Sole', value: 'Rubber' },
          { name: 'Closure', value: 'Lace-up' }
        ],
        colors: ['Black/White', 'Blue/Gray', 'Red/Black'],
        sizes: ['7', '8', '9', '10', '11', '12'],
        seller: 'SportsMaster'
      },
      {
        id: 9,
        name: 'Laptop',
        description: 'HP 15, 13th Gen Intel Core i5-1334U Laptop(16GB DDR4, 512GB SSD)',
        price: 1199.99,
        originalPrice: 1249.99,
        rating: 4.5,
        reviewCount: 256,
        category: 'Electronics',
        brand: 'HP',
        image: assets.laptop,
        images: [
          assets.laptop,
          assets.laptop,
          assets.laptop,
          assets.laptop
        ],
        discount: 20,
        bestseller: true,
        availability: true,
        specifications: [
          { name: 'Battery Life', value: '3 hours' },
          { name: 'Connectivity', value: 'Bluetooth 5.0' },
          { name: 'Weight', value: '5kg' },
          { name: 'Front Camera', value: '10 mp' }
        ],
        colors: ['Black', 'White', 'Blue'],
        seller: 'ElectroWorld'
      },
      {
        id: 10,
        name: 'Smartphone 13 Pro ',
        description: 'Latest smartphone with high-resolution camera and powerful processor.',
        price: 999.99,
        originalPrice: 1199.99,
        rating: 4.7,
        reviewCount: 478,
        category: 'Electronics',
        brand: 'TechGiant',
        image: assets.iphone,
        images: [
          assets.iphone,
          assets.iphone,
          assets.iphone
        ],
        discount: 10,
        bestseller: true,
        availability: true,
        specifications: [
          { name: 'Display', value: '6.7" OLED' },
          { name: 'Processor', value: 'Octa-core' },
          { name: 'Storage', value: '256GB' },
          { name: 'Camera', value: '48MP Triple' }
        ],
        colors: ['Midnight Black', 'Silver', 'gray'],
        seller: 'Mobile Hub'
      },
      {
        id: 11,
        name: 'Men\'s Classic Fit Shirt',
        description: 'Comfortable classic fit shirt for formal and casual occasions.',
        price: 49.99,
        originalPrice: 64.99,
        rating: 2.5,
        reviewCount: 185,
        category: 'Fashion',
        brand: 'StyleMaster',
        image: assets.shirt,
        images: [
          assets.shirt,
          assets.shirt,
          assets.shirt
        ],
        discount: 27,
        bestseller: false,
        availability: true,
        specifications: [
          { name: 'Material', value: '100% Cotton' },
          { name: 'Fit', value: 'Classic' },
          { name: 'Care', value: 'Machine Wash' }
        ],
        colors: ['White', 'Blue', 'Black', 'Pink'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        seller: 'FashionHub'
      },
      {
        id: 12,
        name: 'Sliding toy',
        description: 'Sliding toy for children',
        price: 249.99,
        originalPrice: 299.99,
        rating: 4.4,
        reviewCount: 310,
        category: 'Toys',
        brand: 'Toyz',
        image: assets.sliding_toy,
        images: [
          assets.sliding_toy,
          assets.sliding_toy,
          assets.sliding_toy
        ],
        discount: 25,
        bestseller: true,
        availability: true,
        specifications: [
          { name: 'Material', value: 'Solid Plastic' },
        ],
        colors: ['Black', 'Silver', 'Rose Gold'],
        seller: 'ToysZone'
      },
      {
        id: 13,
        name: 'Dumbles',
        description: 'Rubber Encased Hex Dumbbell Weight Set Of 2',
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
          assets.dumbles
        ],
        discount: 35,
        bestseller: false,
        availability: true,
        specifications: [
          { name: 'Pieces', value: '2' },
          { name: 'Material', value: 'Steel with rubber' },
          { name: 'Safe', value: 'Yes' },
        ],
        colors: ['Black', 'Red'],
        seller: 'Sportiers'
      },
      {
        id: 14,
        name: 'Olay Retinol night secum',
        description: 'Brightening face serum with antioxidants for radiant skin.',
        price: 34.99,
        originalPrice: 44.99,
        rating: 1,
        reviewCount: 320,
        category: 'Beauty',
        brand: 'GlowUp',
        image: assets.olay,
        images: [
          assets.olay,
          assets.olay
        ],
        discount: 23,
        bestseller: true,
        availability: true,
        specifications: [
          { name: 'Size', value: '35ml' },
          { name: 'Key Ingredients', value: 'Vitamin C, Hyaluronic Acid, Vitamin E' },
          { name: 'Skin Type', value: 'All Skin Types' }
        ],
        seller: 'BeautyWorld'
      },
      {
        id: 15,
        name: 'Books',
        description: 'Mind Changing books',
        price: 69.99,
        originalPrice: 89.99,
        rating: 4.2,
        reviewCount: 170,
        category: 'books',
        brand: 'bookster',
        image: assets.books2,
        images: [
          assets.books2,
          assets.books2,
          assets.books2
        ],
        discount: 25,
        bestseller: false,
        availability: true,
        specifications: [
          { name: 'Pages', value: 'Soft' },
        ],
        seller: 'BooksWorld'
      },
      {
        id: 16,
        name: 'Atta',
        description: 'Sugar free Atta',
        price: 99.99,
        originalPrice: 119.99,
        rating: 4,
        reviewCount: 230,
        category: 'grocery',
        brand: 'groceryverce',
        image: assets.atta,
        images: [
          assets.atta,
          assets.atta,
          assets.atta
        ],
        discount: 16,
        bestseller: true,
        availability: true,
        specifications: [
          { name: 'Material', value: 'wheat' },
        ],
        seller: 'Groceryworld'
      }
]

const categoriesList=[
  { id: 1, name: 'Electronics', icon: assets.laptop, url: '/category/electronics' },
  { id: 2, name: 'Fashion', icon: assets.tshirt, url: '/category/fashion' },
  { id: 3, name: 'Home & Kitchen', icon: assets.home_kitchen, url: '/category/home-kitchen' },
  { id: 4, name: 'Beauty', icon: assets.lipstick, url: '/category/beauty' },
  { id: 5, name: 'Toys & Games', icon: assets.toys, url: '/category/toys-games' },
  { id: 6, name: 'Sports', icon: assets.football, url: '/category/sports' },
  { id: 7, name: 'Books', icon: assets.books, url: '/category/books' },
  { id: 8, name: 'Grocery', icon: assets.grocery, url: '/category/grocery' }
]

const userOrdersData=[
  {
    id: 'ORD123456789',
    date: '2025-05-01',
    status: 'Delivered',
    total: 239.98,
    items: [
      {
        productId: 1,
        name: 'Premium Wireless Headphones',
        price: 199.99,
        quantity: 1,
        image: '/api/placeholder/100/100'
      },
      {
        productId: 6,
        name: 'Vitamin C Serum',
        price: 24.99,
        quantity: 1,
        image: '/api/placeholder/100/100'
      }
    ],
    address: {
      name: 'John Doe',
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001'
    }
  },
  {
    id: 'ORD987654321',
    date: '2025-04-15',
    status: 'In Transit',
    total: 899.99,
    items: [
      {
        productId: 2,
        name: 'Smartphone Pro Max',
        price: 899.99,
        quantity: 1,
        image: '/api/placeholder/100/100'
      }
    ],
    address: {
      name: 'John Doe',
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001'
    }
  }
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

export {productsList, categoriesList, userOrdersData, banners}