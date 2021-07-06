import React, {useState, useEffect} from 'react'

const url = 'https://course-api.com/javascript-store-products'

export default function FetchExample() {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await fetch(url)
        const products = await response.json()
        setProducts(products)
        setLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [url])
    console.log(products)

    return (
        <>
            <h2 style={{marginBottom:'3rem'}}> Custom Hooks</h2>
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
