import { useDeleteUserMutation } from '@/features'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IUIState } from './OkCancelDialog.data'
import { onCancelClick, onDeleteClick } from './OkCancelDialog.logic'
import { CancelButton, DeleteButton } from './OkCancelDialog.styled'

const OkCancelDialog: FC = () => {
  const dispatch = useDispatch()

  const { userId, username } = useSelector((state: IUIState) => state.ui)

  const [deleteUser, { isSuccess }] = useDeleteUserMutation()

  return (
    <Dialog open={userId !== undefined}>
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you want to delete user: {username}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <CancelButton variant="contained" onClick={onCancelClick(dispatch)}>
          Cancel
        </CancelButton>
        <DeleteButton
          variant="contained"
          onClick={onDeleteClick(userId!, dispatch, deleteUser, isSuccess)}
        >
          Delete
        </DeleteButton>
      </DialogActions>
    </Dialog>
  )
}

export default OkCancelDialog
