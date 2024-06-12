import React, { useState } from 'react';

const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
  searchTerm,
  setSearchTerm
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onDecrementProduct = (product) => {
    const updatedProducts = allProducts
      .map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setAllProducts(updatedProducts);
    setTotal(total - product.price);
    setCountProducts(countProducts - 1);
  };

  const onAddProduct = (product) => {
    const updatedProducts = allProducts.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setAllProducts(updatedProducts);
    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  const handleSearchChange = (event) => {
    console.log(event.target.value); // Debugging: Verificar el valor del input
    setSearchTerm(event.target.value);
  };

  return (
    <header>
      <h1></h1>
      <div className="search-container">
        <input 
          type="search" 
          id="buscar" 
          name="buscar" 
          placeholder="¿Qué estás Buscando?" 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
        <i className="fa fa-search busca" id="lupa"></i>
      </div>
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <img
            className="icon-cart"
            src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_1280.png"
            alt="Carrito"
          />
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>
        <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
          {allProducts.length ? (
            <>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.id}>
                    <div className="info-cart-product">
                      <button onClick={() => onDecrementProduct(product)}>-</button>
                      <span className="cantidad-producto-carrito">
                        {product.quantity}
                      </span>
                      <button onClick={() => onAddProduct(product)}>+</button>
                      <p className="titulo-producto-carrito">
                        {product.nameProduct}
                      </p>
                      <span className="precio-producto-carrito">
                        ${product.price}
                      </span>
                    </div>
                    <img
                      className="icon-close"
                      src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png"
                      alt="Eliminar"
                      onClick={() => onDeleteProduct(product)}
                    />
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>
              <button className="btn-clear-all" onClick={onCleanCart}>
                Vaciar carro de compras
              </button>
              <button className="btn-pago">Proceder al pago</button>
            </>
          ) : (
            <p className="cart-empty">
              No ha añadido ningún artículo al carro de compras
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

