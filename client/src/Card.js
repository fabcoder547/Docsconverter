import React from 'react'

export default function Card({heading,description}) {
    return (
               <div className="card">
                <h6 className="card-header ">
                  <p className="text-white bold">{heading}</p>
                </h6>
                <div className="text-white card-body">
               {description}
                </div>
         </div>
    )
}
