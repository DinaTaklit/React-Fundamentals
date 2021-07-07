import React, { useState, useEffect } from 'react'
import { useFetch } from '../9.CustomHooks/useFetch'

const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders

const Index = () => {
    const [isLoadig, products]  = useFetch(url)
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Count : {count}</h1>
            <button className='btn' onClick={() => setCount(count + 1)}>
                click me
            </button>
            <div>
                {isLoadig && 'Loading ...'}
            </div>

            <BigList products={products} />
        </>
  )
}

const BigList = React.memo(({ products }) => {
    useEffect(() => {
        console.log('Big List')

    })
    return (
        <section className='products'>
        {products.map((product) => {
            return <SingleProduct key={product.id} {...product}></SingleProduct>
        })}
        </section>
    )
})

const SingleProduct = ({ fields }) => {
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
        </article>
    )
}

export default Index