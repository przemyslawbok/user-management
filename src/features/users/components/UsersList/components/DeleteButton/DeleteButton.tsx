import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { IDeleteButtonProps } from './DeleteButton.data'
import { onDeleteClick } from './DeleteButton.logic'
import { StyledButton } from './DeleteButton.styled'

const DeleteButton: FC<IDeleteButtonProps> = (props) => {
  const { user } = props

  const dispatch = useDispatch()

  return (
    <StyledButton variant="contained" onClick={onDeleteClick(dispatch, user)}>
      delete
    </StyledButton>
  )
}

export default DeleteButton
