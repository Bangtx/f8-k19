import { useEffect, useState } from 'react'
import './App.css'
import api from './plugins/axios'
import TestComponent from "./components/TestComponent"
import ProductCard from "./components/ProductCard/index.jsx";

function App() {
  const [products, setProducts] = useState([])
  const [productsInCart, setProductsInCart] = useState([])

  const getProducts = async () => {
    const { data } = await api.get('products')
    setProducts(data)
  }

  const onAddToCart = (productId) => {
    if (productsInCart.includes(productId)) return
    setProductsInCart([...productsInCart, productId])
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            Shop<span>.</span>
          </div>

          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Categories</a>
          </nav>

          <div className="cart">
            <button className="cart-button">
              <span className="cart-icon">🛒</span>
              <span className="cart-text">Cart</span>
              <span className="cart-badge">
                {productsInCart.length}
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        <h1>Products</h1>
        <TestComponent num={2} name={'test 1'}/>
        <TestComponent num={100} name={'test 2'}/>

        <div className="product-grid">
          {products.map((p) => (
            <ProductCard product={p} onClickAddToCard={onAddToCart}/>
          ))}
        </div>
      </main>
    </>
  )
}

export default App