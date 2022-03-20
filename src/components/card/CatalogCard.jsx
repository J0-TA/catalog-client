import React, { useState } from "react"
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Collapse,
  CardActions,
  IconButton,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

import PhoneDialog from "../dialog/PhoneDialog"
import { deletePhone } from "../../services/phones"

const CatalogCard = ({ phoneData }) => {
  const { name, manufacturer, price, imageFileName, description, screen, processor, ram } = phoneData

  const [expanded, setExpanded] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)

  const handleExpandClick = () => setExpanded(!expanded)
  const handleDeleteClick = () => deletePhone(phoneData._id)
  const handleOpenDialog = () => setOpenDialog(true)
  const handleCloseDialog = () => setOpenDialog(false)

  return (
    <>
      <Grid item textAlign="center">
        <Card
          sx={{ width: 340, padding: 2, marginTop: 2, cursor:'pointer' }}
          onClick={handleExpandClick}
        >
          <Box
            component="img"
            src={`${process.env.REACT_APP_SERVER_DEV}${imageFileName}`}
            alt={`${manufacturer} ${name}`}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="primary"
            >
              {`${manufacturer} ${name}`}
            </Typography>
            <Typography variant="h4" component="div">
              {`${price} €`}
            </Typography>
          </CardContent>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="body2" color="text.secondary" textAlign="initial">
                {description}
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="initial">
                <b>Screen: </b>{screen}
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="initial">
                <b>Processor: </b>{processor}
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="initial">
                <b>RAM Memory: </b>{ram} GB
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="edit phone" onClick={handleOpenDialog}>
                <EditIcon color="primary"/>
              </IconButton>
              <IconButton aria-label="delete phone" onClick={handleDeleteClick}>
                <DeleteIcon color="error"/>
              </IconButton>
            </CardActions>
          </Collapse>
        </Card>
      </Grid>
      {openDialog && (
        <PhoneDialog
          open={openDialog}
          handleClose={handleCloseDialog}
          phone={phoneData}
        />
      )}
    </>
  )
}

export default CatalogCard
