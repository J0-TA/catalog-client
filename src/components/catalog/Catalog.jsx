import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllPhones } from '../../services/phones'

import CatalogCard from '../card/CatalogCard'

const Catalog = () => {
    const [phones, setPhones] = useState([])

    useEffect(() => {
        let mounted = true
        getAllPhones()
            .then(items => {
                if(mounted) {
                    setPhones(items.data)
                }
            })
        return () => mounted = false
    }, [])

    return (
        <Grid container component="ul" spacing={3} justifyContent='center'>
            {phones.map(phone => <CatalogCard key={phone._id} phoneData={phone} />)}
        </Grid>
    )
}

export default Catalog