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
import { getDefaultValues, onCancelClick, onSubmit } from './UserForm.logic'
import { FormField } from './components'

const UserForm: FC<IUserFormProps> = (props) => {
  const { user, formSubmitAction, isLoading } = props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: getDefaultValues(user),
    resolver: yupResolver(ValidationSchema),
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit(formSubmitAction, isLoading))}>
      <FormField
        fieldName={FormFieldNames.Name}
        label="Name"
        register={register}
        error={errors.name}
      />
      <FormField
        fieldName={FormFieldNames.Username}
        label="Username"
        register={register}
        error={errors.username}
      />
      <FormField
        fieldName={FormFieldNames.Email}
        label="Email"
        register={register}
        error={errors.email}
      />
      <FormField
        fieldName={FormFieldNames.City}
        label="City"
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
