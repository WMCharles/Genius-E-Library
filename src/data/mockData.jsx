export const mockCategories = [
    { id: 1, name: 'Travel', description: 'Books about travel and exploration' },
    { id: 2, name: 'Entertainment', description: 'Books for leisure and fun' },
    { id: 3, name: 'Science', description: 'Books about scientific discoveries and topics' },
    { id: 4, name: 'Fiction', description: 'Fictional works and stories' },
    { id: 5, name: 'Art', description: 'Art works and stories' },
];

export const mockBooks = [
    {
        id: 1,
        title: "Vagabonding: An Uncommon Guide to the Art of Long-Term World Travel",
        author: "Rolf Potts",
        category_id: 1, // Travel
        description: "A practical guide to long-term travel, offering insights on embracing a life of adventure and exploration.",
        cover_image: "https://placehold.co/10x10",
        available: true,
        rent_price: 30,
        purchase_price: 2500,
        free: false,
    },
    {
        id: 2,
        title: "Bossypants",
        author: "Tina Fey",
        category_id: 2, // Entertainment
        description: "A humorous memoir by Tina Fey, blending personal anecdotes with reflections on comedy and entertainment.",
        cover_image: "https://placehold.co/10x10",
        available: true,
        rent_price: 20,
        purchase_price: 1800,
        free: false,
    },
    {
        id: 3,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category_id: 3, // Science
        description: "An accessible exploration of cosmology that delves into the origins and structure of the universe.",
        cover_image: "https://placehold.co/10x10",
        available: true,
        rent_price: 25,
        purchase_price: 2200,
        free: false,
    },
    {
        id: 4,
        title: "1984",
        author: "George Orwell",
        category_id: 4, // Fiction
        description: "A dystopian novel exploring the perils of totalitarianism and pervasive government surveillance.",
        cover_image: "https://placehold.co/10x10",
        available: true,
        rent_price: 15,
        purchase_price: 2000,
        free: false,
    },
    {
        id: 5,
        title: "Into the Wild",
        author: "Jon Krakauer",
        category_id: 1, // Travel
        description: "A compelling account of Christopher McCandless's journey into the Alaskan wilderness in search of freedom.",
        cover_image: "https://placehold.co/10x10",
        available: false,
        rent_price: 20,
        purchase_price: 1800,
        free: false,
    },
    {
        id: 6,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category_id: 4, // Fiction
        description: "A timeless classic addressing racial injustice in the American South through the eyes of a young girl.",
        cover_image: "https://placehold.co/10x10",
        available: true,
        rent_price: 18,
        purchase_price: 2100,
        free: false,
    },
];

// src/data/mockAccountData.js
export const mockRentedBooks = [
    {
        id: 1,
        title: "Vagabonding: An Uncommon Guide to the Art of Long-Term World Travel",
        author: "Rolf Potts",
        cover_image: "https://placehold.co/10x10",
        description: "A practical guide to long-term travel, offering insights on embracing adventure.",
    },
    {
        id: 3,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        cover_image: "https://placehold.co/10x10",
        description: "An accessible exploration of cosmology and the structure of the universe.",
    },
    {
        id: 5,
        title: "Into the Wild",
        author: "Jon Krakauer",
        cover_image: "https://placehold.co/10x10",
        description: "An account of Christopher McCandless's journey into the Alaskan wilderness.",
    },
];

export const mockOwnedBooks = [
    {
        id: 2,
        title: "Bossypants",
        author: "Tina Fey",
        cover_image: "https://placehold.co/10x10",
        description: "A humorous memoir blending personal anecdotes with reflections on comedy.",
    },
    {
        id: 4,
        title: "1984",
        author: "George Orwell",
        cover_image: "https://placehold.co/10x10",
        description: "A dystopian novel exploring the perils of totalitarianism and surveillance.",
    },
    {
        id: 6,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        cover_image: "https://placehold.co/10x10",
        description: "A classic addressing racial injustice through the eyes of a young girl.",
    },
];

