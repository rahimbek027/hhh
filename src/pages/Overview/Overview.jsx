import React from 'react'
import OverviewNav from '../../components/OverviewNav';
import SectionCards from "../../components/SectionCards"
import Todaystrends from "../../components/Today’strends"
import Ticketstasks from "../../components/Ticketstasks"

function NotFound() {
  return (
    <>
    <div  className='h-screen overflow-y-auto'> 
    <div className='sticky top-0 bg-[#363740] z-10 flex justify-between px-[32px] py-[15px] pt-5  rounded-b-[15px]'>
      <h1 className='text-[#A4A6B3] text-[24px] font-bold  leading-[30px]'>Overview</h1>
      <OverviewNav/>
    </div>
    <SectionCards/>
    <Todaystrends/>
    <Ticketstasks/>
    </div>
    </>
  )
}

export default NotFound