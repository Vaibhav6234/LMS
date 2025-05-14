import React, {useState} from 'react'


const SearchInput = () => {
    const [val, setval] = useState(' ')
    function getVal(e){
        if(e.key==="Enter"){
            console.log(val)
          
        }
    }
  return (

    <form action="" method='get'>
      <input type="search" name='search' placeholder='Search...' className='w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none text-black dark:text-gray-800 focus:dark:bg-gray-50' onKeyDown={getVal} onChange={(e)=>setval(e.target.value)}/>
    </form>

    
  )
}
 
export default SearchInput 