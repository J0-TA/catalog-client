import { Backdrop, CircularProgress, Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import { getAllPhones } from "../../services/phones"

import CatalogCard from "../card/CatalogCard"

const Catalog = () => {
  const [phones, setPhones] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    setIsLoading(true)
    getAllPhones().then((items) => {
      if (mounted) {
        setPhones(items.data)
        setIsLoading(false)
      }
    });
    return () => (mounted = false)
  }, [])

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid container component="ul" spacing={3} justifyContent="center">
        {phones.map((phone) => (
          <CatalogCard key={phone._id} phoneData={phone} />
        ))}
      </Grid>
      
    </>
  );
};

export default Catalog
