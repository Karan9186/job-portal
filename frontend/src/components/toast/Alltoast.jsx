import React from "react";
import { Toaster, toast } from 'sonner'
function Alltoast(message,type) {
  if(type==true){
    toast.success(message)
  }
  if(type==false){
    toast.error(message)
  }
}

export default Alltoast;
