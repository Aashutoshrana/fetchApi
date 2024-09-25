import { useState,useEffect } from "react";
import '@fortawesome/fontawesome-svg-core'
const App =()=>{
  const [products,setProducts]=useState([])
  const [Loading,setLoading]=useState(false);
  // useEffect(()=>{
  //   HandleFetch();
  // },[])
const HandleFetch = async ()=>{
  setLoading(true);
  try{
     const response=await fetch("https://fakestoreapi.com/products")
     const data=await response.json();
    // console.log(data)
     setProducts(data);
   
  }
  catch(err){
     console.log("Failed",err);
  }
}
  return(
    <>
    {Loading &&
   (
    <i className="fa-solid fa-loader"></i>
   )
  
    }
    <button 
    style={{
      width:100,
      height:30,
      marginLeft:1100,
      marginTop:30,
      border:'none',
      background:'dodgerblue',
      borderRadius:3,
      fontSize:20
    }}
    onClick={HandleFetch}>Fetch</button>
    <div 
    style={{
      margin:'50px 500px',
       width:'75%',
       display:'flex',
       flexWrap:'wrap',
       gap:48,
      
       
    }}
    >
       {
          products.map((items,index)=>(
            <div 

            style={{
                 
                width:"calc('25%'- 48px)",
            
               
            }}
            key={index}>
                <p >{items.id}</p>
                <img src={items.image} width="230" height="200" />
               
                <h2 style={{padding:0,marginBottom:2}}>{items.title.slice(0,10)}</h2>
                <h3 style= {{color:'white',padding:0,margin:0}}> {items.category}</h3>
                <p style={{color:'gray',padding:0,margin:1}}> {items.description.slice(0,40)}</p>
                <p style= {{color:'pink',padding:0,margin:1}}> $ {items.price}</p>
                <p style= {{color:'yellow',padding:0,margin:2}}> {items.rating.rate} ⭐</p>
                
              </div>
          ))
       }
    </div>
    </>
  )
}
export default App;