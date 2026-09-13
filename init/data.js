const sampleListings = [
    {
        title: "Beach Villa",
        description: "Beautiful villa near the beach",
        image: {
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
            filename: "Beach-Villa"
        },
        price: 1200,
        location: "Goa",
        country: "India"
    },
    {
        title: "Luxury Beach House",
        description: "Luxury house with an amazing ocean view",
        image: {
            url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
            filename: "Luxury-Beach-House"
        },
        price: 2500,
        location: "Kerala",
        country: "India"
    },
    {
        title: "Mountain Retreat",
        description: "Peaceful villa surrounded by mountains",
        image: {
            url: "https://images.unsplash.com/photo-1544986581-efac024faf62",
            filename: "Mountain-Retreat"
        },
        price: 1800,
        location: "Manali",
        country: "India"
    },
    {
        title: "Modern City Apartment",
        description: "Modern apartment in the heart of the city",
        image: {
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
            filename: "Modern-City-Apartment"
        },
        price: 1500,
        location: "Bangalore",
        country: "India"
    },
    {
        title: "Lake View Villa",
        description: "Beautiful villa with a stunning lake view",
        image: {
            url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
            filename: "Lake-View-Villa"
        },
        price: 2200,
        location: "Udaipur",
        country: "India"
    },
    {
        title: "Royal Palace Stay",
        description: "Traditional royal-style property",
        image: {
            url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6",
            filename: "Royal-Palace-Stay"
        },
        price: 3500,
        location: "Jaipur",
        country: "India"
    },
    {
        title: "Forest Cottage",
        description: "Cozy cottage surrounded by nature",
        image: {
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
            filename: "Forest-Cottage"
        },
        price: 1300,
        location: "Coorg",
        country: "India"
    },
    {
        title: "Luxury Farmhouse",
        description: "Large farmhouse with a private garden",
        image: {
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            filename: "Luxury-Farmhouse"
        },
        price: 2000,
        location: "Hyderabad",
        country: "India"
    },
    {
        title: "Hilltop Villa",
        description: "Amazing sunset view from the hilltop",
        image: {
            url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
            filename: "Hilltop-Villa"
        },
        price: 2800,
        location: "Ooty",
        country: "India"
    },
    {
        title: "Seaside Cottage",
        description: "Small and comfortable cottage near the sea",
        image: {
            url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
            filename: "Seaside-Cottage"
        },
        price: 1100,
        location: "Pondicherry",
        country: "India"
    },

    {
        title: "Beachside Paradise",
        description: "Beautiful stay near the beach",
        image: {
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
            filename: "Beachside-Paradise"
        },
        price: 4500,
        location: "Goa",
        country: "India"
    },
    {
        title: "Mountain View Retreat",
        description: "Peaceful property surrounded by mountains",
        image: {
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
            filename: "Mountain-View-Retreat"
        },
        price: 2800,
        location: "Manali",
        country: "India"
    },
    {
        title: "Luxury City Apartment",
        description: "Modern apartment in the heart of the city",
        image: {
            url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
            filename: "Luxury-City-Apartment"
        },
        price: 3200,
        location: "Bengaluru",
        country: "India"
    },
    {
        title: "Lake View Cottage",
        description: "Cozy cottage with a beautiful lake view",
        image: {
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
            filename: "Lake-View-Cottage"
        },
        price: 3900,
        location: "Udaipur",
        country: "India"
    },
    {
        title: "Forest Cabin",
        description: "Rustic cabin surrounded by lush greenery",
        image: {
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
            filename: "Forest-Cabin"
        },
        price: 2500,
        location: "Coorg",
        country: "India"
    },
    {
        title: "Heritage Haveli",
        description: "Historic haveli with traditional architecture",
        image: {
            url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
            filename: "Heritage-Haveli"
        },
        price: 4200,
        location: "Jodhpur",
        country: "India"
    },
    {
        title: "Luxury Villa",
        description: "Spacious villa with private pool",
        image: {
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
            filename: "Luxury-Villa"
        },
        price: 7500,
        location: "Alibaug",
        country: "India"
    },
    {
        title: "Hilltop Homestay",
        description: "Comfortable homestay with panoramic views",
        image: {
            url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c",
            filename: "Hilltop-Homestay"
        },
        price: 2200,
        location: "Ooty",
        country: "India"
    },
    {
        title: "Modern Beach Villa",
        description: "Stylish villa close to the sea",
        image: {
            url: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1",
            filename: "Modern-Beach-Villa"
        },
        price: 6000,
        location: "Varkala",
        country: "India"
    },
    {
        title: "Cozy Studio",
        description: "Compact and comfortable studio apartment",
        image: {
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
            filename: "Cozy-Studio"
        },
        price: 1800,
        location: "Pune",
        country: "India"
    },
    {
        title: "Royal Heritage Hotel",
        description: "Elegant hotel inspired by Indian royal heritage",
        image: {
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
            filename: "Royal-Heritage-Hotel"
        },
        price: 5000,
        location: "Udaipur",
        country: "India"
    },
    {
        title: "Countryside Farmhouse",
        description: "Relaxing farmhouse surrounded by nature",
        image: {
            url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
            filename: "Countryside-Farmhouse"
        },
        price: 3000,
        location: "Nashik",
        country: "India"
    },
    {
        title: "Snow Mountain Lodge",
        description: "Warm and cozy lodge near snowy mountains",
        image: {
            url: "https://images.unsplash.com/photo-1517825738774-7de9363ef735",
            filename: "Snow-Mountain-Lodge"
        },
        price: 4800,
        location: "Shimla",
        country: "India"
    },
    {
        title: "Riverside Retreat",
        description: "Peaceful stay beside a beautiful river",
        image: {
            url: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
            filename: "Riverside-Retreat"
        },
        price: 2700,
        location: "Rishikesh",
        country: "India"
    },
    {
        title: "Luxury Penthouse",
        description: "Premium penthouse with city skyline views",
        image: {
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
            filename: "Luxury-Penthouse"
        },
        price: 8500,
        location: "Mumbai",
        country: "India"
    },
    {
        title: "Traditional Kerala House",
        description: "Traditional home surrounded by tropical greenery",
        image: {
            url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
            filename: "Traditional-Kerala-House"
        },
        price: 3500,
        location: "Alappuzha",
        country: "India"
    },
    {
        title: "Desert Camp",
        description: "Unique luxury tent experience in the desert",
        image: {
            url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            filename: "Desert-Camp"
        },
        price: 4000,
        location: "Jaisalmer",
        country: "India"
    },
    {
        title: "Garden Villa",
        description: "Beautiful villa with a private garden",
        image: {
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            filename: "Garden-Villa"
        },
        price: 5500,
        location: "Mysore",
        country: "India"
    },
    {
        title: "Ocean View Resort",
        description: "Premium resort overlooking the Arabian Sea",
        image: {
            url: "https://images.unsplash.com/photo-1540541338287-41700207dee6",
            filename: "Ocean-View-Resort"
        },
        price: 6500,
        location: "Kochi",
        country: "India"
    }
];

module.exports = { data: sampleListings };