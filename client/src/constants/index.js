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
        image: '/api/placeholder/400/400',
        images: [
          '/api/placeholder/800/800',
          '/api/placeholder/800/800',
          '/api/placeholder/800/800',
          '/api/placeholder/800/800'
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
        image: '/api/placeholder/400/400',
        images: [
          '/api/placeholder/800/800',
          '/api/placeholder/800/800',
          '/api/placeholder/800/800'
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
        name: 'Men\'s Classic Fit Shirt',
        description: 'Comfortable classic fit shirt for formal and casual occasions.',
        price: 39.99,
        originalPrice: 54.99,
        rating: 4.3,
        reviewCount: 189,
        category: 'Fashion',
        brand: 'StyleMaster',
        image: '/api/placeholder/400/400',
        images: [
          '/api/placeholder/800/800',
          '/api/placeholder/800/800',
          '/api/placeholder/800/800'
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
        image: '/api/placeholder/400/400',
        images: [
          '/api/placeholder/800/800',
          '/api/placeholder/800/800',
          '/api/placeholder/800/800'
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
        rating: 4.6,
        reviewCount: 201,
        category: 'Home & Kitchen',
        brand: 'KitchenPro',
        image: '/api/placeholder/400/400',
        images: [
          '/api/placeholder/800/800',
          '/api/placeholder/800/800',
          '/api/placeholder/800/800'
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
        rating: 4.8,
        reviewCount: 325,
        category: 'Beauty',
        brand: 'GlowUp',
        image: '/api/placeholder/400/400',
        images: [
          '/api/placeholder/800/800',
          '/api/placeholder/800/800'
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
        image: '/api/placeholder/400/400',
        images: [
          '/api/placeholder/800/800',
          '/api/placeholder/800/800',
          '/api/placeholder/800/800'
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
        rating: 4.5,
        reviewCount: 235,
        category: 'Sports',
        brand: 'SportFlex',
        image: '/api/placeholder/400/400',
        images: [
          '/api/placeholder/800/800',
          '/api/placeholder/800/800',
          '/api/placeholder/800/800'
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
      }
]

const categoriesList=[
  { id: 1, name: 'Electronics', icon: '💻', url: '/category/electronics' },
  { id: 2, name: 'Fashion', icon: '👕', url: '/category/fashion' },
  { id: 3, name: 'Home & Kitchen', icon: '🏠', url: '/category/home-kitchen' },
  { id: 4, name: 'Beauty', icon: '💄', url: '/category/beauty' },
  { id: 5, name: 'Toys & Games', icon: '🧸', url: '/category/toys-games' },
  { id: 6, name: 'Sports', icon: '⚽', url: '/category/sports' },
  { id: 7, name: 'Books', icon: '📚', url: '/category/books' },
  { id: 8, name: 'Grocery', icon: '🍎', url: '/category/grocery' }
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

export {productsList, categoriesList, userOrdersData}