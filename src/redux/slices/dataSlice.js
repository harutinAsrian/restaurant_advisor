import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getData, updateItem } from '../../api/calls'

const initialState = {
  restaurantsList: [],
  isLoading: false,
  error: ''
}

export const getRestaurantData = createAsyncThunk('config/get', async (_, thunkApi) => {
  try {
    const res = await getData();
    return res;
  } catch (e) {
    return thunkApi.rejectWithValue()
  }
})

export const updateRestaurantItem = createAsyncThunk('confifadsg/upadate', async ({ id, data }, thunkApi) => {
  try {
    const res = await updateItem(id, data);
    thunkApi.dispatch(getRestaurantData())
    return res;
  } catch (e) {
    thunkApi.rejectWithValue(false)
  }
})


const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRestaurantData.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = ''
      state.restaurantsList = action.payload
    })
    builder.addCase(getRestaurantData.pending, (state,) => {
      state.isLoading = true
    })
    builder.addCase(getRestaurantData.rejected, (state, action) => {
      state.isLoading = false
      // state.error = action.payload
    })
  },
})

export default dataSlice.reducer