import { createSlice } from '@reduxjs/toolkit'

const initialState = [40.179188, 44.499104]

export const centerCoordinatesSlice = createSlice({
  name: 'centerCoordinates',
  initialState,
  reducers: {
    setCenterCoordinates: (state, action) => {
      const payload = action.payload
      state[0] = payload.latitude
      state[1] = payload.longitude
    },
  },
})

export const { setCenterCoordinates } = centerCoordinatesSlice.actions
export default centerCoordinatesSlice.reducer