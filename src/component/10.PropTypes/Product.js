import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../../assets/default.jpg'

export default function Product({image, name, price}) {
    const url = image && image.url
    return (
        <div className="product">
            <img src={url || defaultImage} alt={name || 'Default Name'} />
            <h3>{name || 'Default Name'}</h3>
            <p>${price || 3.99}</p>
        </div>
    )
}

Product.propType = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

// Product.defaultProps = {
//     name: 'default name',
//     price: 3.99,
//     image: ''
// }