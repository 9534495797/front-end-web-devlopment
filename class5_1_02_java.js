// let x=5;
// let y=7;
// if(x>y){
//     console.log(x +" is largest");
// }else if(x<y){
//     console.log(y+"is largest");
// }else{
//     console.log("both are equal");
// }



// let arr=["apple","banana","orange"];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


let userinput;
do{
    userinput=parseFloat(prompt("enter a numbr greater than 100:"));

}while(userinput<=100 && userinput!=null);
if(userinput!=null){
    console.log(`you entered :${userinput}`);
}else{
    console.log(`user canceled the input.`);
}