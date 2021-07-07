import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../9.CustomHooks/useFetch'

const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders

const Index = () => {
    const [isLoadig, products]  = useFetch(url)
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState(0)

    // useCallback is used for functions
    // useCallback to prevent addTocart from being created every time the app rerender
    // bcz of counter after each click
    // with useCallback  addToCart will run the function only if the cart chage


    const addToCart = useCallback(() => {
        setCart(cart +1 )
    }, [cart])

    // every time props or state changes, component re-renders
    const calculateMostExpensive = (data) => {
        console.log('calculateMostExpensive')
        return (
            data.reduce((total, item) => {
                const price = item.fields.price
                if (price >= total) {
                total = price
                }
                return total
            }, 0) / 100
        )
    }

    // Use useMemo is used for values
    // use useMemo to prevent calculateMostExpensive from runing every time the app rerender
    // with useMemo calculateMostExpensive will only run if the products list change

    const mostExpensive = useMemo(() => calculateMostExpensive(products), [products])
    
    
    return (
        <>
            <h1>Count : {count}</h1>
            <button className='btn' onClick={() => setCount(count + 1)}>
                click me
            </button>
            <div>
                <h3 style={{ marginTop: '3rem' }}>cart : {cart}</h3>
                <h3>Most Expensive : ${mostExpensive }</h3>
                {isLoadig && 'Loading ...'}
            </div>

            <BigList products={products}  addToCart={addToCart} />
        </>
  )
}

// React.memo is used for a component
// React.memp will prevent BigList and its childs from rerendering every time 
// the app rerender bcz of the increase counter button click 
// With React.memo BigList will render only its own prop, state changes and not bcz the parent rerender

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