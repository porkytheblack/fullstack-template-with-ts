import { Typography } from 'antd'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen w-screen" >
        <Typography.Text className="font-bold !text-white text-4xl " >
          Wassup👋👋
        </Typography.Text>
    </div>
  )
}

export default Home
