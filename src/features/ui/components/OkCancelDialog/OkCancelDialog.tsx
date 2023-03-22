import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

const OkCancelDialog = () => {
  return (
    <Dialog open>
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>Do you want to delete user: ?</DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default OkCancelDialog
