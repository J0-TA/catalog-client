import React from 'react'

const CatalogCard = ({ phoneData }) => {
    console.log(phoneData)

    return (
        <h1>{phoneData.name}</h1>
    )
}

export default CatalogCard