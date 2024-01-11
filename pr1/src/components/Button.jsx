import React from 'react'

const Button = () => {
    const btnclick = () =>{
        console.log("clicked");
    }
  return (
    <div><button onClick={()=>{btnclick()}}>clickme</button></div>
  )
}

export default Button






// import React from 'react'

// const Button = () => {
//     const btnclick = () =>{
//         console.log("clicked");
//     }
//     return (
//     <div><button onClick={()=>{btnclick()}}> click me </button></div>
//   )
// }

// export default Button