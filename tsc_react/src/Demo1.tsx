export default function Demo1(){
    let a:number=20;
    let b:number=23;
    return(
        <>
        <h2> welcome to the typescript with react</h2>
        {a>b?<p>a is big than b</p>:<p>b is big than a</p>}
        </>
    )
}