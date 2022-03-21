import React, { useState } from "react"

import Catalog from "./components/catalog/Catalog"
import PhoneDialog from "./components/dialog/PhoneDialog"
import AppHeader from "./components/header/AppHeader"
import { addPhone } from "./services/phones"

const App = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [addedPhone, setAddedPhone] = useState(null)
  const handleClick = () => setOpenDialog(true)
  const handleCloseDialog = () => setOpenDialog(false)
  
  const handleAddPhone = (payload) => {
    setAddedPhone(payload)
    addPhone(payload)
  }
  
  return (
    <>
      <AppHeader handleAddClick={handleClick} />
      <Catalog addedPhone={addedPhone} />
      {openDialog && (
        <PhoneDialog open={openDialog} handleClose={handleCloseDialog} handleAddPhone={handleAddPhone} />
      )}
    </>
  )
}

export default App
