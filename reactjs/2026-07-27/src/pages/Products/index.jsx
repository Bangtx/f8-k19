import { useEffect, useState } from 'react'
import api from '../../plugins/axios'
import TestComponent from "../../components/TestComponent"
import ProductCard from "../../components/ProductCard/index.jsx";
import HeaderBar from "../../components/HeaderBar/index.jsx";

function Products() {
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
      <HeaderBar total={productsInCart.length}/>

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

export default Products