import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import loading_icon from '../../../assets/icons/loading_icon.json'

const Loading = () => {
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 2000)
  })
  return (
    <div className=" flex justify-center items-center  h-screen">
      <Lottie className="w-64 h-64 " animationData={loading_icon} loop />
    </div>
  )
}

export default Loading
