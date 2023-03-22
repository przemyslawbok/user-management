import { User } from '@/common'
import { useForm } from 'react-hook-form'
import {
  FormFieldNames,
  IUserFormProps,
  ValidationSchema,
} from './UserForm.data'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  ButtonContainer,
  CancelButton,
  Form,
  SubmitButton,
} from './UserForm.styled'
import { FC } from 'react'
import { onCancelClick, onSubmit } from './UserForm.logic'
import { FormField } from './components'

const UserForm: FC<IUserFormProps> = (props) => {
  const { user, formSubmitAction, isLoading } = props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(ValidationSchema),
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit(formSubmitAction, isLoading))}>
      <FormField
        fieldName={FormFieldNames.Name}
        label="Name"
        value={user?.name}
        register={register}
        error={errors.name}
      />
      <FormField
        fieldName={FormFieldNames.Username}
        label="Username"
        value={user?.username}
        register={register}
        error={errors.username}
      />
      <FormField
        fieldName={FormFieldNames.Email}
        label="Email"
        value={user?.email}
        register={register}
        error={errors.email}
      />
      <FormField
        fieldName={FormFieldNames.City}
        label="City"
        value={user?.city}
        register={register}
        error={errors.city}
      />
      <ButtonContainer>
        <CancelButton
          disabled={isLoading}
          variant="outlined"
          onClick={onCancelClick}
        >
          Cancel
        </CancelButton>
        <SubmitButton disabled={isLoading} variant="contained" type="submit">
          Submit
        </SubmitButton>
      </ButtonContainer>
    </Form>
  )
}

export default UserForm
