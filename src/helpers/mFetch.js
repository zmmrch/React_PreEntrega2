const products = [
  {
    id: "1",
    name: "Remera Gris",
    category: "Remeras Hombre",
    price: 7000,
    stock: 10,
    description: "remera gris",
    imageUrl: "../../public/Productos/remera hombre_1.jpg",
  },
  {
    id: "2",
    name: "Remera Blanca",
    category: "Remeras Hombre",
    price: 7000,
    stock: 10,
    description: "remera blanca",
    imageUrl: "../../public/Productos/remera hombre_2.jpg",
  },
  {
    id: "3",
    name: "Remera Blanca",
    category: "Remeras Mujer",
    price: 7000,
    stock: 10,
    description: "",
    imageUrl: "../../public/Productos/remera mujer_1.jpg",
  },
  {
    id: "4",
    name: "Remera Salmón",
    category: "Remeras Mujer",
    price: 7000,
    stock: 10,
    description: "",
    imageUrl: "../../public/Productos/remera mujer_2.jpg",
  },
  {
    id: "5",
    name: "Zapatilla Azul",
    category: "Zapatillas Hombre",
    price: 18000,
    stock: 10,
    description: "Zapatilla Azul",
    imageUrl: "../../public/Productos/zapatillas_hombre_1.jpg",
  },
  {
    id: "6",
    name: "Zapatilla Blanca",
    category: "Zapatillas Hombre",
    price: 15400,
    stock: 10,
    description: "Zapatilla Blanca",
    imageUrl: "../../public/Productos/zapatillas_hombre_2.jpg",
  },
  {
    id: "7",
    name: "Zapatilla Blanca",
    category: "Zapatillas Mujer",
    price: 17000,
    stock: 10,
    description: "Zapatilla Blanca",
    imageUrl: "../../public/Productos/zapatillas_mujer_1.jpg",
  },
  {
    id: "8",
    name: "Zapatilla Beige",
    category: "Zapatillas Mujer",
    price: 18000,
    stock: 10,
    description: "Zapatilla Beige",
    imageUrl: "../../public/Productos/zapatillas_mujer_2.jpg",
  },
];

export const mFetch = (id) => {
  return new Promise((res, rej) => {
    // fetch(promesa)
    setTimeout(() => {
      res(id ? products.find((prod) => prod.id === id) : products);
    }, 2000);
  });
};
