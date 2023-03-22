import { useDeleteUserMutation } from '@/features'
import { Dialog, DialogContentText } from '@mui/material'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IUIState } from './OkCancelDialog.data'
import { onCancelClick, onDeleteClick } from './OkCancelDialog.logic'
import {
  CancelButton,
  DeleteButton,
  StyledDialogActions,
  StyledDialogContent,
  StyledDialogTitle,
} from './OkCancelDialog.styled'

const OkCancelDialog: FC = () => {
  const dispatch = useDispatch()

  const { userId, username } = useSelector((state: IUIState) => state.ui)

  const [deleteUser, { isSuccess }] = useDeleteUserMutation()

  return (
    <Dialog open={userId !== undefined}>
      <StyledDialogTitle>Delete</StyledDialogTitle>
      <StyledDialogContent>
        <DialogContentText>
          Do you want to delete user: {username}?
        </DialogContentText>
      </StyledDialogContent>
      <StyledDialogActions>
        <CancelButton variant="contained" onClick={onCancelClick(dispatch)}>
          Cancel
        </CancelButton>
        <DeleteButton
          variant="contained"
          onClick={onDeleteClick(userId!, dispatch, deleteUser, isSuccess)}
        >
          Delete
        </DeleteButton>
      </StyledDialogActions>
    </Dialog>
  )
}

export default OkCancelDialog
