import React from 'react'
import OverviewNav from '../../components/OverviewNav';
import NotFund from '../../components/NotFund';


function SubscriptionLogo() {
  return (
  <>
    <div className='sticky top-0 bg-[#363740] z-10 flex justify-between px-[32px] py-[15px] pt-5  rounded-b-[15px]'>
    <h1 className='text-[#A4A6B3] text-[24px] font-bold  leading-[30px]'>Subscription</h1>
    <OverviewNav/>
  </div>
  <NotFund/>
  </>

  )
}

export default SubscriptionLogo
