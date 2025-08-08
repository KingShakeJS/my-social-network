import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState: UsersStateType = {
  users: [
    { id: nanoid(), name: "King", lastName: "Shake", age: 31, isMarried: true },
    { id: nanoid(), name: "King2", lastName: "Shake2", age: 32, isMarried: false },
    { id: nanoid(), name: "King3", lastName: "Shake3", age: 33, isMarried: true },
    { id: nanoid(), name: "King4", lastName: "Shake4", age: 34, isMarried: false },
    { id: nanoid(), name: "King5", lastName: "Shake5", age: 35, isMarried: true },
    { id: nanoid(), name: "King", lastName: "Shake", age: 31, isMarried: true },
    { id: nanoid(), name: "King2", lastName: "Shake2", age: 32, isMarried: false },
    { id: nanoid(), name: "King3", lastName: "Shake3", age: 33, isMarried: true },
    { id: nanoid(), name: "King4", lastName: "Shake4", age: 34, isMarried: false },
    { id: nanoid(), name: "King5", lastName: "Shake5", age: 35, isMarried: true },
    { id: nanoid(), name: "King", lastName: "Shake", age: 31, isMarried: true },
    { id: nanoid(), name: "King2", lastName: "Shake2", age: 32, isMarried: false },
    { id: nanoid(), name: "King3", lastName: "Shake3", age: 33, isMarried: true },
    { id: nanoid(), name: "King4", lastName: "Shake4", age: 34, isMarried: false },
    { id: nanoid(), name: "King5", lastName: "Shake5", age: 35, isMarried: true },
    { id: nanoid(), name: "King5", lastName: "Shake5", age: 35, isMarried: true },
  ],
}
export type UsersStateType = {
  users: UserType[]
}
export type UserType = {
  id: string
  name: string
  lastName: string
  age: number
  isMarried: boolean
}
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: (_create) => ({}),
  selectors: {
    selectUsers: (state) => state.users,
  },
})

export default usersSlice.reducer
export const { selectUsers } = usersSlice.selectors
