import { ProductItemData } from "../types/index";
const productsData: Array<ProductItemData> = [
  {
    id: 1,
    title: "Apple iPhone SE",
    description:
      'Apple iOS, экран 4.7" IPS (750x1334) 60 Гц, Apple A13 Bionic, ОЗУ 3 ГБ, память 64 ГБ, камера 12 Мп, аккумулятор 1820 мАч, 1 SIM, влагозащита IP67',
    price: 461,
    discountPercentage: 10,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
      "https://content2.onliner.by/catalog/device/main/5967975d9c930761f16487f8b690eb9a.jpeg",
    images: [
      "https://content2.onliner.by/catalog/device/main/5967975d9c930761f16487f8b690eb9a.jpeg",
      "https://content2.onliner.by/catalog/device/main/7671e54f1a7d8bd196e367aa4e24aea9.jpeg",
      "https://content2.onliner.by/catalog/device/main/d9aa5ee1266dd3c2a62ff599e73e3cdc.jpeg",
      "https://content2.onliner.by/catalog/device/main/789ec1f44a610cbc72f9217a86c6addd.jpeg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      'Apple iOS, экран 5.8" AMOLED (1125x2436), Apple A11 Bionic, ОЗУ 3 ГБ, память 64 ГБ, камера 12 Мп, аккумулятор 2716 мАч, 1 SIM, влагозащита IP67',
    price: 899,
    discountPercentage: 20,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
    ],
  },
  {
    id: 3,
    title: "Samsung Galaxy S22 Ultra",
    description:
      'Android, экран 6.8" AMOLED (1440x3088) 120 Гц, Exynos 2200, ОЗУ 12 ГБ, память 512 ГБ, камера 108 Мп, аккумулятор 5000 мАч, 2 SIM, влагозащита IP68',
    price: 1660,
    discountPercentage: 15,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail:
      "https://content2.onliner.by/catalog/device/main/744fbcbfa42e67147fc17995eae160dc.jpeg",
    images: [
      "https://content2.onliner.by/catalog/device/main/744fbcbfa42e67147fc17995eae160dc.jpeg",
      "https://content2.onliner.by/catalog/device/main/d74ad84efd23e48f69175358c3a060b4.jpeg",
      "https://content2.onliner.by/catalog/device/main/07fb31304852257a5e953076036d7238.jpeg",
      "https://content2.onliner.by/catalog/device/main/cc221cc5408338927ca41b6d78d4761b.jpeg",
    ],
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 20,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
    ],
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      'Android, экран 6.1" OLED (1080x2340), HiSilicon Kirin 980, ОЗУ 6 ГБ, память 128 ГБ, поддержка карт памяти, камера 40 Мп, аккумулятор 3650 мАч, 2 SIM, влагозащита IP53',
    price: 499,
    discountPercentage: 10,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg",
    ],
  },
  {
    id: 6,
    title: "MacBook Pro",
    description:
      'Ноутбук 14.2" 3024 x 1964 IPS 120 Гц, Apple M1 Pro (8 ядер), 16 ГБ, SSD 512 ГБ, видеокарта встроенная, Mac OS, цвет крышки серебристый',
    price: 1749,
    discountPercentage: 10,
    rating: 4.57,
    stock: 83,
    brand: "Apple",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
    images: [
      "https://i.dummyjson.com/data/products/6/thumbnail.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg",
    ],
  },
  {
    id: 7,
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    discountPercentage: 5,
    rating: 4.25,
    stock: 50,
    brand: "Samsung",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      "https://i.dummyjson.com/data/products/7/1.jpg",
      "https://i.dummyjson.com/data/products/7/2.jpg",
      "https://i.dummyjson.com/data/products/7/3.jpg",
    ],
  },
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      "https://i.dummyjson.com/data/products/8/1.jpg",
      "https://i.dummyjson.com/data/products/8/2.jpg",
      "https://i.dummyjson.com/data/products/8/3.jpg",
      "https://i.dummyjson.com/data/products/8/4.jpg",
    ],
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    discountPercentage: 10,
    rating: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.png",
      "https://i.dummyjson.com/data/products/9/3.png",
      "https://i.dummyjson.com/data/products/9/4.jpg",
    ],
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    discountPercentage: 5,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    images: [
      "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      "https://i.dummyjson.com/data/products/10/2.jpg",
      "https://i.dummyjson.com/data/products/10/3.jpg",
    ],
  },
  {
    id: 11,
    title: "iPhone 14",
    description:
      'Apple iOS, экран 6.1" OLED (1170x2532) 60 Гц, Apple A15 Bionic, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 12 Мп, 1 SIM, влагозащита IP68',
    price: 959,
    discountPercentage: 5,
    rating: 4.5,
    stock: 83,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
      "https://content2.onliner.by/catalog/device/main/d68e83aa99a0b98f2990da108fdd3eec.jpeg",
    images: [
      "https://content2.onliner.by/catalog/device/main/d68e83aa99a0b98f2990da108fdd3eec.jpeg",
      "https://content2.onliner.by/catalog/device/main/6ecd489aa80e26bb60e39394911d53c5.jpeg",
      "https://content2.onliner.by/catalog/device/main/681c395ac5bba0bd17df80ffb89e4620.jpeg",
    ],
  },
  {
    id: 12,
    title: "iPhone 13",
    description:
      'Apple iOS, экран 6.1" OLED (1170x2532) 60 Гц, Apple A15 Bionic, ОЗУ 4 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 3227 мАч, 1 SIM, влагозащита IP68',
    price: 855,
    discountPercentage: 5,
    rating: 4.5,
    stock: 62,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
      "https://content2.onliner.by/catalog/device/main/b9fefc8c8f96dbc21492792f3a1a502d.jpeg",
    images: [
      "https://content2.onliner.by/catalog/device/main/b9fefc8c8f96dbc21492792f3a1a502d.jpeg",
      "https://content2.onliner.by/catalog/device/main/e54ce5dd0bfe235d1915a0ef4c2817bc.jpeg",
      "https://content2.onliner.by/catalog/device/main/1a20f6e6ebfcdc6a3af05353b5261fb7.jpeg",
      "https://content2.onliner.by/catalog/device/main/4d891ae089200bee9d6fe705b0c39ae1.jpeg",
      "https://content2.onliner.by/catalog/device/main/7463b27f998be03a47590efdb2ef21b1.jpeg",
    ],
  },
  {
    id: 13,
    title: "iPhone 14 Pro",
    description:
      'Apple iOS, экран 6.1" OLED (1179x2556) 120 Гц, Apple A16 Bionic, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 48 Мп, 1 SIM, влагозащита IP68',
    price: 1462,
    discountPercentage: 5,
    rating: 4.5,
    stock: 17,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
      "https://content2.onliner.by/catalog/device/main/ad1fd08115cc6e1b4c289d580d79b406.jpeg",
    images: [
      "https://content2.onliner.by/catalog/device/main/ad1fd08115cc6e1b4c289d580d79b406.jpeg",
      "https://content2.onliner.by/catalog/device/main/df459906858715887018ff1f211426a2.jpeg",
      "https://content2.onliner.by/catalog/device/main/961b668da5301e767862ceabbdeda3a1.jpeg",
    ],
  },
  {
    id: 14,
    title: "iPhone 11",
    description:
      'Apple iOS, экран 6.1" IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM, влагозащита IP68',
    price: 596,
    discountPercentage: 15,
    rating: 4.5,
    stock: 74,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
      "https://content2.onliner.by/catalog/device/main/e2189f90f9088975c553ec33431fc186.jpeg",
    images: [
      "https://content2.onliner.by/catalog/device/main/e2189f90f9088975c553ec33431fc186.jpeg",
      "https://content2.onliner.by/catalog/device/main/0c875f5256364427b295041067c503a0.jpeg",
      "https://content2.onliner.by/catalog/device/main/23580a0d8d0da4adeea070aa2ef567a0.jpeg",
      "https://content2.onliner.by/catalog/device/main/4e428e447e1f2b0bddaa81c0429e9367.jpeg",
      "https://content2.onliner.by/catalog/device/main/c248eadf4dac90d61b39f86718b06026.jpeg",
      "https://content2.onliner.by/catalog/device/main/f426a6b414587652e6f11ec0bb952494.jpeg",
      "https://content2.onliner.by/catalog/device/main/009a71bc60d3c707080f4fdbfce276ef.jpeg",
    ],
  },
  {
    id: 15,
    title: "iPhone 12",
    description:
      'Apple iOS, экран 6.1" OLED (1170x2532) 60 Гц, Apple A14 Bionic, ОЗУ 4 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 2815 мАч, 1 SIM, влагозащита IP68',
    price: 703,
    discountPercentage: 15,
    rating: 4.5,
    stock: 87,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
      "https://content2.onliner.by/catalog/device/main/bf14a99b6b00fa25711a3e8e7a87d23a.jpeg",
    images: [
      "https://content2.onliner.by/catalog/device/main/bf14a99b6b00fa25711a3e8e7a87d23a.jpeg",
      "https://content2.onliner.by/catalog/device/main/cb9a5dec74d152d5baaf078b264309f4.jpeg",
      "https://content2.onliner.by/catalog/device/main/754267fb77754a1b04d91e4f40d0a415.jpeg",
      "https://content2.onliner.by/catalog/device/main/dd7355bd56c274a9e9ca5c7ad031249e.jpeg",
      "https://content2.onliner.by/catalog/device/main/32a35b9b7a10ef51ac66fe9e71277bf9.jpeg",
    ],
  },
  {
    id: 16,
    title: "iPhone 13 Pro",
    description:
      'Apple iOS, экран 6.1" OLED (1170x2532) 120 Гц, Apple A15 Bionic, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 3095 мАч, 1 SIM, влагозащита IP68',
    price: 1343,
    discountPercentage: 5,
    rating: 4.4,
    stock: 12,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
      "https://content2.onliner.by/catalog/device/main/c66db6b4c5cce1915eadd8bb59f5c527.jpeg",
    images: [
      "https://content2.onliner.by/catalog/device/main/c66db6b4c5cce1915eadd8bb59f5c527.jpeg",
      "https://content2.onliner.by/catalog/device/main/7fba4ed48b946a7aebe10fdeceee3e6d.jpeg",
      "https://content2.onliner.by/catalog/device/main/f25f003d32454e822cfb5895f57699c8.jpeg",
      "https://content2.onliner.by/catalog/device/main/929b70e8f83de291d17ea6aad1db6d04.jpeg",
      "https://content2.onliner.by/catalog/device/main/8584fd745dfa8797efbae373505f1b1f.jpeg",
    ],
  },
  {
    id: 17,
    title: "Samsung Galaxy A52",
    description:
      'Android, экран 6.5" AMOLED (1080x2400) 90 Гц, Qualcomm Snapdragon 720G, ОЗУ 4 ГБ, флэш-память 128 ГБ, карты памяти, камера 64 Мп, аккумулятор 4500 мАч, 2 SIM, влагозащита IP67',
    price: 355,
    discountPercentage: 5,
    rating: 4.0,
    stock: 120,
    brand: "Samsung",
    category: "smartphones",
    thumbnail:
      "https://content2.onliner.by/catalog/device/main/0bde71a90a551c172c6a9e290d1cdbed.jpeg",
    images: [
      "https://content2.onliner.by/catalog/device/main/0bde71a90a551c172c6a9e290d1cdbed.jpeg",
      "https://content2.onliner.by/catalog/device/main/e9add2452ab82fcdb71a0afed6960c63.jpeg",
      "https://content2.onliner.by/catalog/device/main/f29f3783526b64f0a088064457049040.jpeg",
      "https://content2.onliner.by/catalog/device/main/b6cf3e6cabf8be98265f4dc2f959aa9f.jpeg",
      "https://content2.onliner.by/catalog/device/main/0e83b0449122f75dd7e4b928345b0ab6.jpeg",
      "https://content2.onliner.by/catalog/device/main/d21a32cb15122340a219451dd87dbf5f.jpeg",
      "https://content2.onliner.by/catalog/device/main/75403463b73a4128f1a5207fed5549d4.jpeg",
      "https://content2.onliner.by/catalog/device/main/1c0c8fb58984b1b0c7e04ff22906dff1.jpeg",
      "https://content2.onliner.by/catalog/device/main/053ce5d18630a0b165a9339a5b17cad0.jpeg",
    ],
  },
  {
    id: 18,
    title: "iPhone 14 Pro Max",
    description:
      'Apple iOS, экран 6.7" OLED (1290x2796) 120 Гц, Apple A16 Bionic, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 48 Мп, аккумулятор 4323 мАч, 1 SIM, влагозащита IP68',
    price: 1640,
    discountPercentage: 5,
    rating: 4.3,
    stock: 9,
    brand: "Apple",
    category: "smartphones",
    thumbnail:
      "https://content2.onliner.by/catalog/device/main/6fb2af9b7c88c0647e3b09f1ebacdb7b.jpeg",
    images: [
      "https://content2.onliner.by/catalog/device/main/6fb2af9b7c88c0647e3b09f1ebacdb7b.jpeg",
      "https://content2.onliner.by/catalog/device/main/0515b13bd863ff245f2955abc110db29.jpeg",
      "https://content2.onliner.by/catalog/device/main/4535a9f988d20a98db655f066ffd8c70.jpeg",
    ],
  },
  {
    id: 19,
    title: "Samsung Galaxy S22 5G",
    description:
      'Android, экран 6.1" AMOLED (1080x2340) 120 Гц, Exynos 2200, ОЗУ 8 ГБ, флэш-память 128 ГБ, камера 50 Мп, аккумулятор 3700 мАч, 2 SIM, влагозащита IP68',
    price: 808,
    discountPercentage: 5,
    rating: 4.3,
    stock: 9,
    brand: "Samsung",
    category: "smartphones",
    thumbnail:
      "https://content2.onliner.by/catalog/device/main/46b80765092dd70750fe70651e868431.jpeg",
    images: [
      "https://content2.onliner.by/catalog/device/main/46b80765092dd70750fe70651e868431.jpeg",
      "https://content2.onliner.by/catalog/device/main/dc1b4895cf15bf1373ff8b819bdec36b.jpeg",
      "https://content2.onliner.by/catalog/device/main/c13577940b1ecda3d6569684a4c7ba30.jpeg",
      "https://content2.onliner.by/catalog/device/main/3de7c9ad41e21a921a8fe0436e963ffc.jpeg",
      "https://content2.onliner.by/catalog/device/main/967bcd39426435fdb8e3a9680ab27ccf.jpeg",
      "https://content2.onliner.by/catalog/device/main/06c6c44be302308e62758f1f5866165c.jpeg",
    ],
  },
  {
    id: 19,
    title: "Samsung Galaxy A53 5G",
    description:
      'Android, экран 6.5" AMOLED (1080x2400) 120 Гц, Exynos 1280, ОЗУ 6 ГБ, флэш-память 128 ГБ, карты памяти, камера 64 Мп, аккумулятор 5000 мАч, 2 SIM, влагозащита IP67',
    price: 414,
    discountPercentage: 5,
    rating: 4.3,
    stock: 9,
    brand: "Samsung",
    category: "smartphones",
    thumbnail:
      "https://content2.onliner.by/catalog/device/main/839669db60526827a99ce044a6f94924.jpeg",
    images: [
      "https://content2.onliner.by/catalog/device/main/839669db60526827a99ce044a6f94924.jpeg",
      "https://content2.onliner.by/catalog/device/main/5e4d7d7d0f8f1d10503db265855e5d1f.jpeg",
      "https://content2.onliner.by/catalog/device/main/a498922a4bdceb5c79c73fdc5272687c.jpeg",
      "https://content2.onliner.by/catalog/device/main/fe9966c54bd6f9895e3249774957646d.jpeg",
      "https://content2.onliner.by/catalog/device/main/cfee3ab4429a6cd2b5815f6c8e814221.jpeg",
      "https://content2.onliner.by/catalog/device/main/63590032f153a03cb9a88b836188839d.jpeg",
      "https://content2.onliner.by/catalog/device/main/25dced53990d60a7b809badb7463db0f.jpeg",
    ],
  },
  {
    id: 21,
    title: "Huawei P50 Pro",
    description:
      'Android, экран 6.6" OLED (1228x2700) 120 Гц, Qualcomm Snapdragon 888, ОЗУ 8 ГБ, память 256 ГБ, поддержка карт памяти, камера 50 Мп, аккумулятор 4360 мАч, 2 SIM, влагозащита IP68',
    price: 948,
    discountPercentage: 10,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail:
      "https://content2.onliner.by/catalog/device/main/111cf0cf9fa64abb627fba8b5fbed791.jpeg",
    images: [
      "https://content2.onliner.by/catalog/device/main/111cf0cf9fa64abb627fba8b5fbed791.jpeg",
      "https://content2.onliner.by/catalog/device/main/4b174c917a21d30b7d8e811c65e82ecd.jpeg",
      "https://content2.onliner.by/catalog/device/main/79fcce7605818324fea22ab14ccb989b.jpeg",
    ],
  },
];

export default productsData;
