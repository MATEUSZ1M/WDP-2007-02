const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      oldPrice: 44,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/02qR7yDm/bristique-1.jpg',
      wishlist: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldPrice: 80,
      stars: 2,
      userStars: 3,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/YqfcRBzP/bristique-2.jpg',
      wishlist: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/HWM1Jycd/bristique-3.jpg',
      wishlist: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      userStars: 5,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/sx7kbkdv/bristique-4.jpg',
      wishlist: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/G2W07cfW/bristique-5.jpg',
      wishlist: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      oldPrice: 120,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/02qR7yDm/bristique-1.jpg',
      wishlist: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      userStars: 4,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/YqfcRBzP/bristique-2.jpg',
      wishlist: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/HWM1Jycd/bristique-3.jpg',
      wishlist: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/sx7kbkdv/bristique-4.jpg',
      wishlist: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/G2W07cfW/bristique-5.jpg',
      wishlist: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/02qR7yDm/bristique-1.jpg',
      wishlist: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/YqfcRBzP/bristique-2.jpg',
      wishlist: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/HWM1Jycd/bristique-3.jpg',
      wishlist: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/sx7kbkdv/bristique-4.jpg',
      wishlist: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/G2W07cfW/bristique-5.jpg',
      wishlist: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/02qR7yDm/bristique-1.jpg',
      wishlist: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/YqfcRBzP/bristique-2.jpg',
      wishlist: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/HWM1Jycd/bristique-3.jpg',
      wishlist: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/sx7kbkdv/bristique-4.jpg',
      wishlist: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/G2W07cfW/bristique-5.jpg',
      wishlist: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/02qR7yDm/bristique-1.jpg',
      wishlist: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/YqfcRBzP/bristique-2.jpg',
      wishlist: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/HWM1Jycd/bristique-3.jpg',
      wishlist: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      img: 'https://i.postimg.cc/sx7kbkdv/bristique-4.jpg',
      wishlist: false,
      compare: false,
    },
  ],
  promotion: [
    {
      id: 'sofa',
      name: 'Orange sofa',
      img:
        'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'chair',
      name: 'Gray chairs',
      img:
        'https://images.pexels.com/photos/923192/pexels-photo-923192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 'bed',
      name: 'Bed',
      img:
        'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ],
  cart: {
    products: [],
  },
  device: '',
};

export default initialState;
