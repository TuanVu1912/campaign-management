
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "constants/storage";


export const register = createAsyncThunk(
  'user/register',async(payload)=>{
 const {data}=await userApi.register(payload);
 console.log(data.data);
 localStorage.setItem(StorageKeys.TOKEN ,data.token)
 localStorage.setItem(StorageKeys.USER,JSON.stringify(data.data.user))
console.log(data.data);
    return data.data;
  })


  
export const login = createAsyncThunk(
  'user/login',async(payload)=>{
 const {data}=await userApi.login(payload);
 localStorage.setItem(StorageKeys.TOKEN,data.token)
 localStorage.setItem(StorageKeys.USER,JSON.stringify(data.data))
    return data.data;
  })



const userSlice = createSlice({
  name: "user",
  initialState: {
   current:JSON.parse(localStorage.getItem(StorageKeys.USER))||{},
   setting:{},
  },
  reducers: {
    logout(state,action)
    {
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);
      state.current={};
    }
  },
  extraReducer:{
    [register.fullfilled]:(state,action)=>{
      state.current=action.payload;
    },
    [login.fullfilled]:(state,action)=>{
      state.current=action.payload;
    }
  }
});

const { actions, reducer } = userSlice;
export const {logout}=actions 
export default reducer;
