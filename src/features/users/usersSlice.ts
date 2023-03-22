import { User } from '@/common'
import { apiSlice } from '@/features'

interface IUserData {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    city: string
  }
}

const UserTag = 'User'

export const usersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      transformResponse: (responseData: IUserData[]) => {
        return responseData.map(user => ({
          ...user, city: user.address.city
        }))
      },
      providesTags: [UserTag]
    }),
    getUserById: builder.query<User, { id: number }>({
      query: ({ id }) => `/users/${id}`,
      transformResponse: (responseData: IUserData) => {
        return ({
          ...responseData, city: responseData.address.city
        })
      },
      providesTags: [UserTag]
    }),
    addUser: builder.mutation({
      query: (user: User) => ({
        url: '/users',
        method: 'POST',
        body: {
          ...user,
          address: {
            city: user.city
          }
        }
      }),
      invalidatesTags: [UserTag]
    }),
    updateUser: builder.mutation({
      query: (user: User) => ({
        url: `/users/${user.id}`,
        method: 'PUT',
        body: {
          ...user,
          address: {
            city: user.city
          }
        }
      }),
      invalidatesTags: [UserTag]
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: 'DELETE',
        body: { id }
      }),
      invalidatesTags: [UserTag]
    })
  })
})

export const { 
  useGetUsersQuery, 
  useGetUserByIdQuery,
  useAddUserMutation, 
  useUpdateUserMutation, 
  useDeleteUserMutation 
} = usersSlice
