import React from 'react'
import { Link } from 'react-router-dom'

 const  Navbar=()=> {
    return (
        
<nav class="navbar navbar-light shadow-sm pt-2 pb-2  mb-3 " style={{background:'#152242'}}>
  <div class="container">
    <Link class="navbar-brand text-white text-decoration-none text-white" to="/">
     <h5> <i class="fa  fa-file"></i>  docsConverter</h5>
    </Link>
  </div>
</nav>
    )
}
export default Navbar