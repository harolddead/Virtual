import React from 'react';
import { data } from '../data';

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
  searchTerm,
}) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  const filteredProducts = data.filter((product) =>
    product.nameProduct.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(filteredProducts); // Debugging: Verificar los productos filtrados

  return (
    <div className="container-items">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div className="item" key={product.id}>
            <figure>
              <img src={product.img} alt={product.nameProduct} />
            </figure>
            <div className="info-product">
              <h2>{product.nameProduct}</h2>
              <p className="price">${product.price}</p>
              <button
                className="btn-add-cart"
                onClick={() => onAddProduct(product)}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No se encontraron artículos</p>
      )}
    </div>
  );
};
