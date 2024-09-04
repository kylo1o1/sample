import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data :[],
    total:0,
}

const formSlice = createSlice({
    name:'formSlice',
    initialState,
    reducers:{
        getData:(state,actions)=>{
            const dat = actions.payload
            const last = state.data.at(-1)
            if(state.data.find((ele)=>ele.id === dat.id)){
                dat.id = last.id + 1
                state.data = [...state.data,dat]
            }else{
                state.data = [...state.data,dat]
            }
            state.total = state.data.reduce((acc,ele)=>{
                return acc + Number(ele.amount)
            },0)
             
        },
        dltData:(state,actions)=>{
            // const deleteID = state.data.findIndex((ele)=>ele.id === actions.payload)
            const {id,amount} = actions.payload
            console.log('idddd',id);
            
            const dltId = state.data.findIndex((ele)=> ele.id === Number(id))
            console.log('dltId',dltId);
            state.total = state.total - amount
             state.data.splice(dltId,1)

        },
        editData:(state,actions)=>{
            const dat = actions.payload 
            const prevData = state.data.filter((ele)=> ele.id !== dat.id)
            state.data = [...prevData,dat]
            state.total = state.data.reduce((acc,ele)=>{
                return acc + Number(ele.amount)
            },0)
        }
    }
})
export const {getData,dltData,editData} = formSlice.actions
export default formSlice.reducer