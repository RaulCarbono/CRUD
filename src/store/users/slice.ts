import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
    {
        id:"1",
        name: 'Viola Amherd',
        email:"probando@gmail.com",
        github:"proband"
      },
      {
        id:"2",
        name:"Joselo Martinez",
        email:"Joselo@gmail.com",
        github:"Joselo"
      }
] 

export type UserId = string

export interface User {
    name: string,
    email: string,
    github:string
}

export interface UserWithId extends User{
    id:UserId;
}

const initialState: UserWithId[] = (() => {
    const persistedState = localStorage.getItem("__redux__state__")
    return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSLice = createSlice({
    name:"user",
    initialState,
    reducers:{
        editUser:(state,action : PayloadAction<User>) => {
            
        },
        addNewUser: (state,action : PayloadAction<User>) => {
            const id = crypto.randomUUID()
            return [...state, {id, ...action.payload}]
        },
        deleteUserById: (state, action : PayloadAction<UserId>) => {
            const id = action.payload;
            return state.filter((user) => user.id !== id)
        } 
    }
})

export default usersSLice.reducer;

export const {addNewUser,deleteUserById} = usersSLice.actions