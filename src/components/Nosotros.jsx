import { useEffect } from "react"


const Nosotros = () => {


  


 useEffect(() => {

  const clickear = ()=>{
    console.log("click")

  }


  window.addEventListener("click",clickear)

  
 
    return () =>{
      window.removeEventListener("click",clickear)

    }
  
 }, [])
 


  

  return (
    <div className="container">
      <h1 className="main-title">nosotros2</h1>
      </div>
  )
}

export default Nosotros