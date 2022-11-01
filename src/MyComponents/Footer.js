import React from 'react'

const Footer = () => {

  let footerStyle ={
    width: "100%",
  }

  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className ="text-center">
      Copyright &copy; MyTodosList.com  <span className='yogi'>Created by : Yogesh Indoria</span> 
      </p>  
    </footer>
  )
}

export default Footer
