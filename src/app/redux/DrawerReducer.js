import { createSlice } from '@reduxjs/toolkit'

const langSlice = createSlice({
  name:"langSlice",
  initialState: { value: "en" },
  reducers: {
    changelang: (state, action)=> {
      state.value = action.payload
    }
  }
})


export const {changelang} = langSlice.actions

export default langSlice.reducer
