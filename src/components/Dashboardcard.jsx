import React from 'react'

const Dashboardcard = () => {
  return (
    <div>
            <>
<div className="card animate-slideUp  m-2 bg-base-100 border shadow-xl cursor-pointer">
  <figure>
    <img
      src={strCategoryThumb}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {strCategory}
      <div className="badge badge-ghost hover:bg-gray-400 cursor-pointer">NEW</div>
    </h2>
    <p className='line-clamp-1'>{strCategoryDescription}</p>
    <button  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Remove      
           </button>
  </div>
</div>
</>
    </div>
  )
}

export default Dashboardcard