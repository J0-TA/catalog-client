import React from "react"
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Box,
  Grid,
} from "@mui/material"

const CatalogCard = ({ phoneData }) => {
  //console.log(phoneData)
  return (
    <Grid item textAlign='center'>
      <Card sx={{ width: 340, height: 550, padding: 2, marginTop: 2 }}>
        <CardActionArea>
          <Box
            component="img"
            src={`${process.env.REACT_APP_SERVER_DEV}${phoneData.imageFileName}`}
            alt={`${phoneData.manufacturer} ${phoneData.name}`}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="primary"
            >
              {`${phoneData.manufacturer} ${phoneData.name}`}
            </Typography>
            <Typography variant="h4" component="div">
              {`${phoneData.price} €`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default CatalogCard
