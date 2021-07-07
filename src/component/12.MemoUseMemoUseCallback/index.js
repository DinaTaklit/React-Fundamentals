import React, { useState, useEffect, useCallback } from 'react'
import { useFetch } from '../9.CustomHooks/useFetch'

const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders

const Index = () => {
    const [isLoadig, products]  = useFetch(url)
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState(0)

    const addToCart = useCallback(() => {
        setCart(cart +1 )
    }, [cart])

    return (
        <>
            <h1>Count : {count}</h1>
            <button className='btn' onClick={() => setCount(count + 1)}>
                click me
            </button>
            <div>
                {isLoadig && 'Loading ...'}
            </div>

            <BigList products={products}  addToCart={addToCart} />
        </>
  )
}

const BigList = React.memo(({ products, addToCart }) => {
    useEffect(() => {
        console.log('Big List')

    })
    return (
        <section className='products'>
        {products.map((product) => {
            return <SingleProduct key={product.id} {...product}  addToCart={ addToCart}></SingleProduct>
        })}
        </section>
    )
})

const SingleProduct = ({ fields,  addToCart }) => {
    useEffect(() => {
        console.log('Single Product ')
    })

    let { name, price } = fields
    price = price / 100
    const image = fields.image[0].url

    return (
        <article className='product'>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>${price}</p>
        <button onClick={addToCart}>add to cart</button>
        </article>
    )
}

export default Index