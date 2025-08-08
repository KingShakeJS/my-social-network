import { configureStore } from "@reduxjs/toolkit"

import usersSlice from "@/features/social-network/model/users-slice.ts"

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
