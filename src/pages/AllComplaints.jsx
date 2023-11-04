import React, { useEffect, useState } from 'react'

function AllComplaints() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/api/list")
    .then((res)=>res.json())
    .then((data)=>{
      setData(data)

    })
  }, [])
  


  return (
    <div>
        <h2>Complaints</h2>
      <div>
      {data.map((data)=>(
        <div key = {data._id}>
          <p>{data.title}</p>
          <p>{data.description}</p>
          <p>{data.location}</p>
          <p>{data.contactNo}</p>
          <p>{data.complainerName}</p>
        <br/><br/>
        </div>
      ))}
        
      </div>
    </div>
  )
}

export default AllComplaints