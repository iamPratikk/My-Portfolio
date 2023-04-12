import React from 'react'

const Frame = ({width}) => {
  return (
    <div className='flex relative justify-center w-96 m-10' >
    <div className='absolute top-2 right-[18px] rounded-3xl w-96 h-[450px] bg-black z-5 border-2 border-black' ></div>
        <div className='flex bg-white justify-center relative  items-center rounded-xl z-2 w-96 h-[28rem]  border-2 border-black' >
            <div className='w-80 bg-black h-[24rem] rounded-xl border-2 border-black' >

            </div>
        </div>
    </div>
  )
}

export default Frame