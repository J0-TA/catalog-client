import React, { useState } from "react"

import Catalog from "./components/catalog/Catalog"
import PhoneDialog from "./components/dialog/PhoneDialog"
import AppHeader from "./components/header/AppHeader"

const App = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const handleClick = () => setOpenDialog(true)
  const handleCloseDialog = (phone) => setOpenDialog(false)
  return (
    <>
      <AppHeader handleAddClick={handleClick} />
      <Catalog />
      {openDialog && (
        <PhoneDialog open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  )
}

export default App
