import React from 'react'
import {useFetch} from './useFetch'

const url = 'https://course-api.com/javascript-store-products'

export default function FetchExample() {

    const [isLoading, products] = useFetch(url)

    return (
        <>
            <h2 style={{marginBottom:'3rem'}}> Custom Hooks</h2>
            {isLoading && 'Loading ..'}
            <section>
                {
                    products.map(product => {
                        const {id, fields} = product
                        const {name, image, company, price} = fields
                        return (
                            <div className='item' key={id}>
                                <div>
                                    <img  style={{height:'50px', width:'50px', borderRadius:'50%'}} src={image[0].url} alt={name} />
                                    <p>{company}</p>
                                </div>
                                <div>
                                    <h4>{name}</h4>
                                    <p>{price}$</p>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}
