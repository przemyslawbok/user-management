import { FC } from 'react'
import { IEditButtonProps } from './EditButton.data'
import { onEditClick } from './EditButton.logic'
import { StyledButton } from './EditButton.styled'

const EditButton: FC<IEditButtonProps> = (props) => {
  const { userId } = props

  return (
    <StyledButton variant="contained" onClick={onEditClick(userId)}>
      edit
    </StyledButton>
  )
}

export default EditButton
