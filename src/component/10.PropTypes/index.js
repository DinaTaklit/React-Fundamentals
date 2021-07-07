import React from 'react'
import {useFetch} from '../9.CustomHooks/useFetch'
import Product from './Product'

const url = 'https://course-api.com/react-prop-types-example'

export default function Index() {
    const [,products] = useFetch(url)
    return (
        <div>
            <h2>Prop Types</h2>
            <section className='products'>
                {products.map((product) => {
                    return <Product key={product.id} {...product} />
                })}
          </section>
        </div>
      )
}
