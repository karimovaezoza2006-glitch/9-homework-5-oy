const allItems = [
  {
    id: 1,
    name: "React Kitobi",
    category: "books",
    price: 75000,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80",
    description: "React dasturlash bo‘yicha mukammal qo‘llanma."
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    category: "electronics",
    price: 3500000,
    image: "https://avatars.mds.yandex.net/i?id=b6ad26c6f199e29efd6ab1a366a98d8f_l-4614182-images-thumbs&n=13",
    description: "Kuchli va zamonaviy Samsung smartfoni."
  },
  {
    id: 3,
    name: "Nike Sport Krossovka",
    category: "clothes",
    price: 1200000,
    image: "https://avatars.mds.yandex.net/i?id=e40b7a5d96e6f8bd4eb9e13584322042a3f9552c-9686739-images-thumbs&n=13",
    description: "Sport uchun qulay va zamonaviy krossovka."
  },
  {
    id: 4,
    name: "Elektron Kitob",
    category: "books",
    price: 50000,
    image: "https://avatars.mds.yandex.net/i?id=20631466bbb4954cd73ed217d46d018b_l-5306350-images-thumbs&n=13",
    description: "Elektron formatdagi kitoblar to‘plami."
  },
  {
    id: 5,
    name: "MacBook Pro M1",
    category: "electronics",
    price: 7000000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    description: "Kuchli Apple noutbuki."
  },
  {
    id: 6,
    name: "Adidas Futbolka",
    category: "clothes",
    price: 800000,
    image: "https://avatars.mds.yandex.net/i?id=ada049dbcd2dcf592c22b25650e8643f_l-16113796-images-thumbs&n=13",
    description: "Yengil va nafas oluvchi futbolka."
  },
  {
    id: 7,
    name: "JavaScript Kitobi",
    category: "books",
    price: 90000,
    image: "https://s2-goods.ozstatic.by/2000/443/28/101/101028443_0.jpg",
    description: "JavaScript asoslarini o‘rgatuvchi qo‘llanma."
  },
  {
    id: 8,
    name: "iPhone 12",
    category: "electronics",
    price: 4500000,
    image: "https://avatars.mds.yandex.net/get-mpic/1865543/2a0000019305c6c154f2c17eb1bbe338f306/orig",
    description: "Apple’ning sifatli iPhone modeli."
  },
  {
    id: 9,
    name: "Puma Sport Kostyum",
    category: "clothes",
    price: 1500000,
    image: "https://a.lmcdn.ru/product/P/U/PU053EMFRIV5_9291161_1_v1.jpg",
    description: "Yugurish va sport mashg‘ulotlari uchun ideal."
  },
  {
    id: 10,
    name: "Dasturlash Asoslari",
    category: "books",
    price: 60000,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
    description: "Dasturlashni boshlovchilar uchun qo‘llanma."
  },
  {
    id: 11,
    name: "Sony Kamera",
    category: "electronics",
    price: 2200000,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Yuoqori sifatli professional kamera."
  },
  {
    id: 12,
    name: "Zara Ko‘ylak",
    category: "clothes",
    price: 950000,
    image: "https://avatars.mds.yandex.net/i?id=fe4502d934565ddad436da810c9289f73831c4019bfc710d-5083477-images-thumbs&n=13",
    description: "Har kuni kiyishga mos zamonaviy ko‘ylak."
  },
  {
    id: 13,
    name: "HTML & CSS Kitobi",
    category: "books",
    price: 80000,
    image: "https://avatars.mds.yandex.net/i?id=45fadd01c923877bb93aea2a0f847ac6-5185593-images-thumbs&n=13",
    description: "Veb dizayn asoslarini o‘rgatuvchi kitob."
  },
  {
    id: 14,
    name: "Dell Monitor",
    category: "electronics",
    price: 1800000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    description: "Keng ekranli Full HD monitor."
  },
  {
    id: 15,
    name: "Reebok Poyabzal",
    category: "clothes",
    price: 1300000,
    image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=400&q=80",
    description: "Sport uchun maxsus poyabzal."
  },
  {
    id: 16,
    name: "Python Kitobi",
    category: "books",
    price: 85000,
    image: "https://avatars.mds.yandex.net/i?id=20ad8b161bd85ab22622d468055bc3e0_l-4034499-images-thumbs&n=13",
    description: "Pythonni o‘rganish uchun qo‘llanma."
  },
  {
    id: 17,
    name: "Google Pixel 5",
    category: "electronics",
    price: 3000000,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80",
    description: "Google ishlab chiqargan zamonaviy smartfon."
  },
  {
    id: 18,
    name: "H&M Jaket",
    category: "clothes",
    price: 1100000,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    description: "Yozgi va bahorgi engil jaket."
  },
  {
    id: 19,
    name: "Vue.js Kitobi",
    category: "books",
    price: 70000,
    image: "https://pbs.twimg.com/media/FbpSfcYXgAAsC_3.jpg",
    description: "Vue.js bo‘yicha qo‘llanma."
  },
  {
    id: 20,
    name: "Canon Kamera",
    category: "electronics",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    description: "Yuqori aniqlikdagi Canon kamerasi."
  },
  {
    id: 21,
    name: "Levis Jeans",
    category: "clothes",
    price: 900000,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    description: "Sifatli va qulay jinsilar."
  },
  {
    id: 22,
    name: "Angular Kitobi",
    category: "books",
    price: 78000,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    description: "Angular framework bo‘yicha qo‘llanma."
  },
  {
    id: 23,
    name: "HP Noutbuk",
    category: "electronics",
    price: 4000000,
    image: "https://avatars.mds.yandex.net/i?id=87b7b1111061c219c1a19c80cfdcdd94deb346da-5232470-images-thumbs&n=13",
    description: "Kuchli HP noutbuki."
  },
  {
    id: 24,
    name: "Under Armour Krossovka",
    category: "clothes",
    price: 1250000,
    image: "https://avatars.mds.yandex.net/i?id=5b7cb45e74702f5956773365700f1f76_l-4488147-images-thumbs&n=13",
    description: "Sport uchun ideal krossovka."
  },
  {
    id: 25,
    name: "CSS Kitobi",
    category: "books",
    price: 60000,
    image: "https://avatars.mds.yandex.net/i?id=3b8433f715d8574e102cdc7286f4319f83da9cd5-13101691-images-thumbs&n=13",
    description: "CSS bo‘yicha to‘liq qo‘llanma."
  },
  {
    id: 26,
    name: "Asus Gaming Laptop",
    category: "electronics",
    price: 8500000,
    image: "https://avatars.mds.yandex.net/i?id=53cc2b195641bc26c44e7d09b7ef994b0bebe05b-5209846-images-thumbs&n=13",
    description: "O‘yinlar uchun kuchli noutbuk."
  },
  {
    id: 27,
    name: "Cotton Kofta",
    category: "clothes",
    price: 400000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
    description: "Tabiiy matodan yasalgan kofta."
  },
  {
    id: 28,
    name: "TikTok Marketing Kitobi",
    category: "books",
    price: 50000,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80",
    description: "TikTok marketing strategiyalari."
  },
  {
    id: 29,
    name: "Smart TV Samsung",
    category: "electronics",
    price: 5000000,
    image: "https://avatars.mds.yandex.net/i?id=acc3a71f1acbb4ee95df44203b068381_l-4238526-images-thumbs&n=13",
    description: "4K UHD Smart televizor."
  },
  {
    id: 30,
    name: "Winter Jacket",
    category: "clothes",
    price: 1300000,
    image: "https://avatars.mds.yandex.net/i?id=cd190a4e19f0de6eaf9f484ed612fcf70b1d02b5-4314155-images-thumbs&n=13",
    description: "Qalin qishki kurtka."
  },
  {
    id: 31,
    name: "Node.js Kitobi",
    category: "books",
    price: 72000,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
    description: "Server dasturlash uchun qo‘llanma."
  },
  {
    id: 32,
    name: "Bluetooth naushnik",
    category: "electronics",
    price: 320000,
    image: "https://cdn.respublica.ru/uploads/01/00/00/bt/27/61aa64f7fab79182.jpg?1549001230",
    description: "Sifatli simsiz naushnik."
  },
  {
    id: 33,
    name: "Summer Dress",
    category: "clothes",
    price: 600000,
    image: "https://avatars.mds.yandex.net/get-mpic/16462969/2a00000198a342dcc0ec2d4a0a550b5f59d2/optimize",
    description: "Yozgi engil ko‘ylak."
  },
  {
    id: 34,
    name: "MongoDB Kitobi",
    category: "books",
    price: 67000,
    image: "https://avatars.mds.yandex.net/i?id=3f5b78ae8a68c6f61f0b98378a5e96cc5485fc33-13052262-images-thumbs&n=13",
    description: "NoSQL bazalarini o‘rganishga yordam beradi."
  },
  {
    id: 35,
    name: "Sony PlayStation 5",
    category: "electronics",
    price: 9500000,
    image: "https://promo.flashupenergy.ru/build/assets/game_console-D5fbh2ZP.webp",
    description: "O‘yinlar olamining yangi avlodi!"
  },
  {
    id: 36,
    name: "Sport Shorts",
    category: "clothes",
    price: 300000,
    image: "https://avatars.mds.yandex.net/i?id=956c73a317fd5822a01152a11c81c296818300e6-2938367-images-thumbs&n=13",
    description: "Yugurish uchun engil shim."
  },
  {
    id: 37,
    name: "Tailwind CSS Kitobi",
    category: "books",
    price: 70000,
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80",
    description: "Tailwind yordamida dizayn yaratish."
  },
  {
    id: 38,
    name: "Lenovo ThinkPad",
    category: "electronics",
    price: 5200000,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=400&q=80",
    description: "Biznes uchun ideal noutbuk."
  },
  {
    id: 39,
    name: "Adidas Hoodie",
    category: "clothes",
    price: 900000,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=400&q=80",
    description: "Sport uchun issiq hoodie."
  },
  {
    id: 40,
    name: "Bootstrap Kitobi",
    category: "books",
    price: 56000,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80",
    description: "Bootstrap yordamida veb saytlar yaratish."
  },
  {
    id: 41,
    name: "JBL Speaker",
    category: "electronics",
    price: 900000,
    image: "https://avatars.mds.yandex.net/i?id=5a718d487ef58fc798c5f007e1dde6ca_l-5910048-images-thumbs&n=13",
    description: "Kuchli portativ karnay."
  },
  {
    id: 42,
    name: "Casual Kofta",
    category: "clothes",
    price: 350000,
    image: "https://avatars.mds.yandex.net/i?id=4221962deaebdbe87487700b866ec5a6_l-9863357-images-thumbs&n=13",
    description: "Har kuni kiyishga mo‘ljallangan kofta."
  },
  {
    id: 43,
    name: "Database Systems Kitobi",
    category: "books",
    price: 90000,
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80",
    description: "Ma’lumotlar bazasi asoslari."
  },
  {
    id: 44,
    name: "Asus Monitor",
    category: "electronics",
    price: 1600000,
    image: "https://avatars.mds.yandex.net/i?id=b0902f6b259159860a72d4dd352860d9_l-12621680-images-thumbs&n=13",
    description: "Full HD keng monitor."
  },
  {
    id: 45,
    name: "Jogging Pants",
    category: "clothes",
    price: 550000,
    image: "https://avatars.mds.yandex.net/i?id=467b213c299a19520e5627bb4298cd4f_l-16110730-images-thumbs&n=13",
    description: "Sport uchun qulay shim."
  },
  {
    id: 46,
    name: "Linux Kitobi",
    category: "books",
    price: 88000,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    description: "Linux operatsion tizimi asoslari."
  },
  {
    id: 47,
    name: "Drone DJI Mini",
    category: "electronics",
    price: 6800000,
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=400&q=80",
    description: "Kichik, engil va professional dron."
  },
  {
    id: 48,
    name: "Winter Boots",
    category: "clothes",
    price: 1450000,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=400&q=80",
    description: "Qalin qishki etik."
  },
  {
    id: 49,
    name: "Web Dizayn Kitobi",
    category: "books",
    price: 85000,
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80",
    description: "Veb dizayn asoslarini o‘rganuvchilar uchun."
  },
  {
    id: 50,
    name: "Logitech Klaviatura",
    category: "electronics",
    price: 450000,
    image: "https://avatars.mds.yandex.net/i?id=67413147a0de2e1871e37a757df710ac_l-4555798-images-thumbs&n=13",
    description: "Ergonomik, qulay klaviatura."
  }
];

export default allItems;
