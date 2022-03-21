import React, { useState } from 'react'
import { 
    Autocomplete, 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle, 
    TextField 
} from '@mui/material'

const colors = ['white', 'black', 'product red', 'red', 'blue', 'purple','green', 'yellow', 'gray','']

const PhoneDialog = ({ open, handleClose, handleUpdate, handleAddPhone, phone }) => {
    const [ error, setError ] = useState(null)
    const [ formData, setFormData ] = useState({
        name: phone ? phone.name : "",
        manufacturer: phone ? phone.manufacturer : "",
        description: phone ? phone.description : "",
        color: phone ? phone.color : "",
        price: phone ? phone.price : "",
        imageFileName: phone ? phone.imageFileName : "",
        screen: phone ? phone.screen : "",
        processor: phone ? phone.processor : "",
        ram: phone ? phone.ram : "",
    })

    const dialogHeader = {
        title: phone ? "Edit phone" : "Add phone",
        context: phone
            ? 'Please, change the incorrect data and click on "Save".'
            : 'To add a new phone, please, fill the following form.'
    }

    const handleInputChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        setFormData({...formData, [field]: value})
    }

    const handleValidation = () => {
        if (formData.name && 
            formData.manufacturer &&
            formData.description &&
            formData.color &&
            formData.price &&
            formData.screen &&
            formData.processor &&
            formData.ram) {
                return true
        } else {
            return false
        }
    }

    const handleSave = () => {
        if (handleValidation()){
            phone ? handleUpdate(phone._id, formData) : handleAddPhone(formData)
            handleClose()
        } else {
            setError("All fields required")
        }
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle color='primary'>{dialogHeader.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{dialogHeader.context}</DialogContentText>
                <TextField
                    margin="dense"
                    value={formData.name}
                    onChange={handleInputChange}
                    id="name"
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    error={error !== null}
                    helperText={error}
                    variant="standard"
                
                />
                <TextField
                    margin="dense"
                    value={formData.manufacturer}
                    onChange={handleInputChange}
                    id="manufacturer"
                    name="manufacturer"
                    label="Manufacturer"
                    type="text"
                    fullWidth
                    error={error !== null}
                    helperText={error}
                    variant="standard"
                
                />
                <TextField
                    margin="dense"
                    value={formData.description}
                    onChange={handleInputChange}
                    id="description"
                    name="description"
                    label="Description"
                    type="text"
                    fullWidth
                    error={error !== null}
                    helperText={error}
                    variant="standard"
                />
                <Autocomplete 
                    disablePortal
                    id="color"
                    name="color"
                    defaultValue={formData.color}
                    value={formData.color}
                    onChange={(event, newValue) => 
                        setFormData({...formData, color: newValue})}
                    options={colors}
                    fullWidth
                    renderInput={(params) =>( 
                        <TextField 
                            {...params} 
                            label="Color"
                            variant="standard"
                            error={error !== null}
                            helperText={error} 
                        />
                    )}
                />
                <TextField
                    margin="dense"
                    value={formData.price}
                    onChange={handleInputChange}
                    id="price"
                    name="price"
                    label="Price"
                    type="number"
                    error={error !== null}
                    helperText={error}
                    variant="standard"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    value={formData.screen}
                    onChange={handleInputChange}
                    id="screen"
                    name="screen"
                    label="Screen"
                    type="text"
                    fullWidth
                    error={error !== null}
                    helperText={error}
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    value={formData.processor}
                    onChange={handleInputChange}
                    id="processor"
                    name="processor"
                    label="Processor"
                    type="text"
                    fullWidth
                    error={error !== null}
                    helperText={error}
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    value={formData.ram}
                    onChange={handleInputChange}
                    id="ram"
                    name="ram"
                    label="RAM Memory"
                    type="text"
                    fullWidth
                    error={error !== null}
                    helperText={error}
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={handleClose}>Cancel</Button>
                <Button variant="contained" onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    )
}

export default PhoneDialog