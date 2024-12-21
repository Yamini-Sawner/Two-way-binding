import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const App = () => {

  const [GetData, setGetData] = useState([])

  const clickHandler = async()=>{
    const respone = await axios.get("https://picsum.photos/v2/list")
    console.log(respone)
    setGetData(respone.data)
  }

  return (
    <div>
      <button 
      onClick={clickHandler}
      className='p-4 rounded-lg ml-8 mt-6 text-2xl text-white bg-emerald-500'>
      Get Data</button>
    
    <div>
      {GetData.map((elem)=>{

        return <div className='flex justify-between items-center'>
          <img className="w-60 h-40 rounded mt-2" src={elem.download_url} alt="" />
          <h1>{elem.author}</h1>
        </div>

      })}
    </div>
    
    </div>
  )
}

export default App

