"use client"
import Banner from '@/app/home/Banner'
import Design from './home/Design'
import SoftwareDevelopment from './home/SoftwareDevelopment'
import CustomerSuccess from './home/CustomerSuccess'
import { useState } from 'react'
import worldImg from '@/app/ass/world-svgrepo-com.svg'

export default function Home() {
  const [selected, setSelected] = useState({ name: 'All', img:worldImg })
  return (
    <div className="max-w-7xl mx-auto px-5">
        <Banner selected={selected} setSelected={setSelected} />
        <Design selected={selected}/>
        <SoftwareDevelopment selected={selected} />
        <CustomerSuccess selected={selected} />
    </div>
  )
}
