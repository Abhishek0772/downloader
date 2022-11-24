import React, { useState } from 'react'

function App() {
  const [download, setdownload] = useState('');
  const values = download ? true : false

  console.log(values)
  return (
    <div className='h-screen w-full bg-slate-200 flex justify-center items-center'>

      <div className='flex justify-center items-center flex-col gap-4 bg-gradient-to-br from-purple-600 to-pink-400 h-80 p-4 rounded-lg shadow-xl shadow-gray-400'>
        <input type="text" onChange={(e) => {
          setdownload(e.target.value)
        }} required className='border-[1px] border-black py-2 w-72 rounded-md bg-transparent' placeholder='enter you want to download text-white' />
        <button  className='border-[1px] border-black p-2 my-4 text-white'><a download={values} href={download} >
          DOWNLOAD</a></button>
      </div>


    </div>
  )
}

export default App