export default function Demo2(){
    function calsq(num: number): number {
  return num * num;
}
let res=calsq(23)


   function evenorodd(a:number):string{
    if(a%2==0){
        return "even"
    }
    else{
        return "false"
    }
    
   }
   let n=evenorodd(31)

   
   function greet(){

   }

return(
<>

    <h1>calsq</h1>
    <p>{res}</p>
    <h2>evenorodd</h2>
    <p>{n}</p>

</>
)

}
