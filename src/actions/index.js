 export const incNumber=(num)=>{
    return {
        type:'INCREMENT',
        payload:num 
}
}
export const decNumber=(n)=>{
    return {
        type:'DECREMENT',
        payload:n
    
}
}