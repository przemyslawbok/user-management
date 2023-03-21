import { User } from '@/common'
import { createSelector } from '@reduxjs/toolkit'
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

export const usersSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      transformResponse: (responseData: IUserData[]) => {
        return responseData.map(user => ({
          ...user, city: user.address.city
        }))
      },
      providesTags: ['User']
    }),
    getUserById: builder.query<User[], { id: number }>({
      query: ({ id }) => `/users/${id}`,
      transformResponse: (responseData: IUserData[]) => {
        return responseData.map(user => ({
          ...user, city: user.address.city
        }))
      },
      providesTags: ['User']
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
      invalidatesTags: ['User']
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
      invalidatesTags: ['User']
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: 'DELETE',
        body: { id }
      }),
      invalidatesTags: ['User']
    })
  })
})

export const selectUsersResult = usersSlice.endpoints.getUsers.select()

const selectUsersData = createSelector(selectUsersResult, usersResult => usersResult.data)

export const { 
  useGetUsersQuery, 
  useGetUserByIdQuery,
  useAddUserMutation, 
  useUpdateUserMutation, 
  useDeleteUserMutation 
} = usersSlice
