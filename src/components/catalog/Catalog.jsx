import React, { useEffect, useState } from "react"
import { Alert, Backdrop, CircularProgress, Grid, Snackbar, snackbarClasses } from "@mui/material"
import { deletePhone, getAllPhones, updatePhone } from "../../services/phones"

import CatalogCard from "../card/CatalogCard"

const Catalog = ({ addedPhone }) => {
  const [phones, setPhones] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: ""
  })

  const handleDelete = (id) => {
      const existingPhone = phones.find(phone => phone._id === id)
      if (existingPhone) {
          const newPhones = phones.filter(phone => phone._id !== id)
          deletePhone(id)
          setPhones(newPhones)
          setSnackbar({
            open: true,
            message: 'Phone deleted.',
            severity: 'error'
          })
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
          setSnackbar({
            open: true,
            message: 'Phone updated.',
            severity: 'success'
          })

      }
  }

  const handleCloseSnackbar = () => setSnackbar({...snackbar, open: false})

  useEffect(() => {
    if (addedPhone) {
      setSnackbar({
        open: true,
        severity: 'success',
        message: 'Phone added.'
      })
    }
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
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Catalog
