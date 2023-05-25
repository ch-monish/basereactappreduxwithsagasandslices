import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 

interface quote{
    id:number,
    desc:string,
    author:string
}
const initialState:quote={
    id:1,
    desc:"",
    author:""
}
export const quoteSlice=createSlice({
    name:'quote',
    initialState,
    reducers:{
        getquote:(state,payload:any)=>{
            console.log(payload.payload.quote)
            state={
                id:payload.payload.id,
                desc:payload.payload.quote,
                author:payload.payload.author
            }
            return state;
        },
        getquoteaction:(state,payload:PayloadAction<number>)=>{
console.log(payload.payload)
// alert(payload.payload)
        }
    }
})
export const {getquoteaction,getquote}=quoteSlice.actions
export default quoteSlice.reducer