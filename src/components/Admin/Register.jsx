import React, { useState } from 'react'
import FacultyRegister from './FacultyRegister'
import StudentRegister from './StudentRegister'

const Register = () => {

    const [register, setRegister] = useState(true)

    function facultyRegister(){
        setRegister(true)
    }
    function studentRegister(){
        setRegister(false)
    }

  return (
    <div className='bg-slate-900 p-5'>

      <div className='flex items-center justify-center gap-4 m-4 p-2'> 

      <button onClick={facultyRegister} className='p-3 rounded bg-violet-600 text-white hover:bg-violet-700 active:scale-90'>Faculty Register</button>

      <button onClick={studentRegister} className='p-3 rounded bg-violet-600 text-white hover:bg-violet-700 active:scale-90'>Student Register</button>

      </div>

      {
        register ? <FacultyRegister/> : <StudentRegister/>
      }

    </div>
  )
}

export default Register