import { useEffect, useState } from "react";
import { customAxios } from "./axiosInstance";


const ProbandoJsonServer = () => {
  // http://localhost:5000/products

  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    let data = customAxios.get("/");
    data
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);

  // POST ---> CREAR UN NUEVO REGISTRO

  let nuevoProducto = {
    title: "Nuevas zapatillas",
    price: 4500,
    stock: 2,
    description: "Estas son las nuevas mejores zapatillas",
    category: "deportivas",
    img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1669326932/free-metcon-4-zapatillas-de-entrenamiento-TQMCZg_fvia3m.png",
  };

  const createProduct = () => {
    let data = customAxios.post("/", nuevoProducto);
  };
  
  let nuevaInfo = {
    price: 20000,
    stock: 5,
  };
  const updateProduct = (id) => {
    let data = customAxios.put(`/${id}`, nuevaInfo);
  };

  const deleteById = (id)=>{
    let data = customAxios.delete( `/${id}` )
  }

  

  return (
    <div>
      <h1>Probando</h1>

      <button onClick={createProduct}>Crear producto</button>

      <button onClick={()=>updateProduct(3)}>Modificar producto</button>

      <button onClick={()=>deleteById(1)}>Eliminar</button>
    </div>
  );
};

export default ProbandoJsonServer;
