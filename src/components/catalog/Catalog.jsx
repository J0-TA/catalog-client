import React, { useEffect, useState } from "react"
import { Backdrop, CircularProgress, Grid } from "@mui/material"
import { deletePhone, getAllPhones, updatePhone } from "../../services/phones"

import CatalogCard from "../card/CatalogCard"

const Catalog = ({ addedPhone }) => {
  const [phones, setPhones] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = (id) => {
      const existingPhone = phones.find(phone => phone._id === id)
      if (existingPhone) {
          const newPhones = phones.filter(phone => phone._id !== id)
          deletePhone(id)
          setPhones(newPhones)
      }
  } 
  const handleUpdate = (id, phone) => {
      const targetPhoneIdx = phones.findIndex(e => e._id === id)
      const targetPhone = phones.find(e => e._id === id)
      if (targetPhoneIdx !== -1) {
          const newPhones = [...phones]
          newPhones[targetPhoneIdx] = {...targetPhone, ...phone}
          setPhones(newPhones)
          updatePhone(id,phone)          
      }
  }

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
  }, [addedPhone])

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
          <CatalogCard key={phone._id} phoneData={phone} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        ))}
      </Grid>
      
    </>
  );
};

export default Catalog
