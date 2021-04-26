import React from 'react'

 const  Footer=()=> {
    return (
        <div className="footer text-center">
           <div className="row mx-0 " >
                <div className="text-center mb-3"><h2>Features</h2></div>
                <div className="col-md-4 col-sm-12 text-center mb-2">
                    <h1 className="mb-3" style={{fontSize:"50px"}}>
                        <i className="fa fa-globe"></i>
                    </h1>
                    <h5 className="mb-2">Online and Fast</h5>
                    <p>docsConverter is online and works in a browser!</p>
                </div>
                <div className="col-md-4 col-sm-12 text-center  mb-2">
                    <h1 className="mb-3 text-white" style={{fontSize:"50px"}}>
                      <i className="fa fa-check"></i>
                    </h1>
                    <h5 className="mb-2">Free</h5>
                    <p>docsConverter is completly free service</p>
                </div>
                <div className="col-md-4 col-sm-12 text-center  mb-2">
                    <h1 className="mb-3" style={{fontSize:"50px"}}>
                     <i className="fa fa-lock"></i>
                    </h1>
                    <h5 className="mb-2">Secure</h5>
                    <p>docsConverter does not store or anylyse your data.</p>
                </div>
           </div>


        </div>
    )
}
export default Footer;