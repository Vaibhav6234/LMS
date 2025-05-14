import React from 'react'
import {useSelector} from 'react-redux'



const InfoCard = () => {

    const {infoData} =  useSelector(state=>state.course);

  return (
    <div className='flex flex-wrap'>
        {
            infoData.length>0 ? infoData.map((res,index)=>(
                <div key={index} className="box hover:scale-110  cursor-pointer px-2 overflow-hidden  gap-2 rounded h-[200px] w-[200px] shadow-md shadow-white m-10  text-white text-center ">
            <div className="icon text-white text-xl  w-full h-[20px] flex justify-center my-4">
               {<res.icon />} 
            </div>

            <div className="title my-4">
             <h1 className='text-xl text-violet-400 font-semibold capitalize'> {res.title} </h1>
            </div>

            <div className="content my-2">
             <p className='text-center text-gray-400 capitalize'> {res.content} </p>
            </div>
            
        </div>
            )) : <h1>Loading....</h1>
        }
        
    </div>
  )
}

export default InfoCard