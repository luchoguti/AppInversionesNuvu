import React from "react";

export const formatNumber = (num:any) =>{
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}