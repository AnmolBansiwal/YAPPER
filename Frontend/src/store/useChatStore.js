 import {create} from 'zustand';
  export const useAuthStore = create((set)=>({
     authUser: {name: "anmol" ,_id:123, age:"22"},
     isLoading: false ,
     //login function
     login :()=>{
        console.log("we just loggged in");
     }
  }))