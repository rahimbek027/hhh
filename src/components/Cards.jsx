import React from 'react'
import { SortIcon, FilterIcon, MoreIcon } from './icon'
import Men1 from "../assets/images/men-1.png"
import Woman2 from "../assets/images/woman2-.png"
import Woman3 from "../assets/images/woman-3.png"
import Man4 from "../assets/images/man-4.png"
import Man5 from "../assets/images/man-5.png"
import Man6 from "../assets/images/man-6.png"
import Woman7 from "../assets/images/woman-7.png"
import Woman8 from "../assets/images/woman-8.png"

function Cards() {
  return (
    <>
    <div  className='h-screen overflow-y-auto'>
    <div className='w-[1120px]  border-[1px] mt-[54px] border-[#cecece] rounded-[8px] bg-white mx-auto cursor-pointer mb-[30px]'>
        <div className='flex items-center justify-between px-[32px] pt-[32px] '>
            <h1 className='text-[19px] text-[#252733] leading-[23px] font-bold'>All tickets</h1>
            <div className='flex items-center gap-[32px]'>
                <div className='flex items-center gap-[8px]'>
                    <SortIcon/>
                <p className='text-[14] leading-[20px] text-[#4B506D] font-semibold' >Sort</p>
                </div>
                <div className='flex items-center gap-[8px]'>
                <FilterIcon/>
                <p className='text-[14] leading-[20px] text-[#4B506D] font-semibold' >Sort</p>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-between pt-[87px] px-[32px]'>
          <p className='text-[#9FA2B4] text-[14px] leading-[17px] font-bold'>Ticket details</p>
          <div className='flex gap-[130px] pr-[85px]'>
          <p className='text-[#9FA2B4] text-[14px] leading-[17px] font-bold'>Customer name</p>
          <p className='text-[#9FA2B4] text-[14px] leading-[17px] font-bold'>Date</p>
          <p className='text-[#9FA2B4] text-[14px] leading-[17px] font-bold'>Priority</p>
          </div>
        </div>
        <div>
        <hr className='border-y-[1px] border-[#DFE0EB] mt-[12px]' />
        <div className='flex items-center justify-between py-[24px] px-[31px] hover:bg-[#d6dcfd] '>
          <div className='flex items-center gap-[24px]'>
            <img src={Men1} alt="Icon" />
            <div> 
              <h2 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>Contact Email not Linked</h2>
              <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>Updated 1 day ago</p>
            </div>
          </div>
         <div className='flex items-center gap-[111px]'>
         <div>
            <h3 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>Tom Cruise</h3>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>on 24.05.2019</p>
          </div>
          <div> 
            <h4 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>May 26, 2019</h4>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>6:30 PM</p>
          </div>
          <div className='flex items-center gap-[82px]'>
          <button className='w-[54px] h-[24px] bg-[#F12B2C] text-white text-[11px] leading-[13px] rounded-[100px]'>High</button>
          <MoreIcon/>
          </div>
         </div>
        </div>
        <hr className='border-y-[1px] border-[#DFE0EB]' />
        <div className='flex items-center justify-between py-[24px] px-[31px] hover:bg-[#d6dcfd] '>
          <div className='flex items-center gap-[24px]' >
            <img src={Woman2} alt="Icon" />
            <div> 
              <h2 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>Adding Images to Featured Posts</h2>
              <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>Updated 1 day ago</p>
            </div>
          </div>
         <div className='flex items-center gap-[111px]'>
         <div>
            <h3 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>Matt Damon</h3>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>on 24.05.2019</p>
          </div>
          <div> 
            <h4 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>May 26, 2019</h4>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>6:30 PM</p>
          </div>
          <div className='flex items-center gap-[82px]'>
          <button className='w-[54px] h-[24px] bg-[#FEC400] text-white text-[11px] leading-[13px] rounded-[100px]'>low</button>
          <MoreIcon/>
          </div>
         </div>
        </div>
        <hr className='border-y-[1px] border-[#DFE0EB]' />
        <div className='flex items-center justify-between py-[24px] px-[31px] hover:bg-[#d6dcfd] '>
          <div className='flex items-center gap-[24px]'>
            <img src={Woman3} alt="Icon" />
            <div> 
              <h2 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>When will I be charged this month?</h2>
              <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>Updated 1 day ago</p>
            </div>
          </div>
         <div className='flex items-center gap-[111px]'>
         <div>
            <h3 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>Robert Downey</h3>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>on 24.05.2019</p>
          </div>
          <div> 
            <h4 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>May 26, 2019</h4>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>6:30 PM</p>
          </div>
          <div className='flex items-center gap-[82px]'>
          <button className='w-[54px] h-[24px] bg-[#F12B2C] text-white text-[11px] leading-[13px] rounded-[100px]'>High</button>
          <MoreIcon/>
          </div>
         </div>
        </div>
        <hr className='border-y-[1px] border-[#DFE0EB]' />
        <div className='flex items-center justify-between py-[24px] px-[31px] hover:bg-[#d6dcfd] '>
          <div className='flex items-center gap-[24px]'>
            <img src={Man4} alt="Icon" />
            <div> 
              <h2 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>Payment not going through</h2>
              <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>Updated 2 days ago</p>
            </div>
          </div>
         <div className='flex items-center gap-[111px]'>
         <div>
            <h3 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>Christian Bale</h3>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>on 24.05.2019</p>
          </div>
          <div> 
            <h4 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>May 26, 2019</h4>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>6:30 PM</p>
          </div>
          <div className='flex items-center gap-[82px]'>
          <button className='w-[54px] h-[24px] bg-[#29CC97] text-white text-[11px] leading-[13px] rounded-[100px]'>Normal</button>
          <MoreIcon/>
          </div>
         </div>
        </div>
        <hr className='border-y-[1px] border-[#DFE0EB]' />
        <div className='flex items-center justify-between py-[24px] px-[31px] hover:bg-[#d6dcfd] '>
          <div className='flex items-center gap-[24px]'>
            <img src={Man5} alt="Icon" />
            <div> 
              <h2 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>Unable to add replies</h2>
              <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>Updated 2 days ago</p>
            </div>
          </div>
         <div className='flex items-center gap-[111px]'>
         <div>
            <h3 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>Henry Cavil</h3>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>on 24.05.2019</p>
          </div>
          <div> 
            <h4 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>May 26, 2019</h4>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>4:00 PM</p>
          </div>
          <div className='flex items-center gap-[82px]'>
          <button className='w-[54px] h-[24px] bg-[#F12B2C] text-white text-[11px] leading-[13px] rounded-[100px]'>High</button>
          <MoreIcon/>
          </div>
         </div>
        </div>
        <hr className='border-y-[1px] border-[#DFE0EB]' />
        <div className='flex items-center justify-between py-[24px] px-[31px] hover:bg-[#d6dcfd] '>
          <div className='flex items-center gap-[24px]'>
            <img src={Man6} alt="Icon" />
            <div> 
              <h2 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>Downtime since last week</h2>
              <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>Updated 3 days ago</p>
            </div>
          </div>
         <div className='flex items-center gap-[111px]'>
         <div>
            <h3 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>Chris Evans</h3>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>on 23.05.2019</p>
          </div>
          <div> 
            <h4 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>May 26, 2019</h4>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>2:00 PM</p>
          </div>
          <div className='flex items-center gap-[82px]'>
          <button className='w-[54px] h-[24px] bg-[#29CC97] text-white text-[11px] leading-[13px] rounded-[100px]'>Normal</button>
          <MoreIcon/>
          </div>
         </div>
        </div>
        <hr className='border-y-[1px] border-[#DFE0EB]' />
        <div className='flex items-center justify-between py-[24px] px-[31px] hover:bg-[#d6dcfd] '>
          <div className='flex items-center gap-[24px]'>
            <img src={Woman7} alt="Icon" />
            <div> 
              <h2 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>Referral Bonus</h2>
              <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>Updated 4 day ago</p>
            </div>
          </div>
         <div className='flex items-center gap-[111px]'>
         <div>
            <h3 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>Sam Smith</h3>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>on 24.05.2019</p>
          </div>
          <div> 
            <h4 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>May 26, 2019</h4>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>11:30 AM</p>
          </div>
          <div className='flex items-center gap-[82px]'>
          <button className='w-[54px] h-[24px] bg-[#FEC400] text-white text-[11px] leading-[13px] rounded-[100px]'>LOW</button>
          <MoreIcon/>
          </div>
         </div>
        </div>
        <hr className='border-y-[1px] border-[#DFE0EB]' />
        <div className='flex items-center justify-between py-[24px] px-[31px] hover:bg-[#d6dcfd] '>
          <div className='flex items-center gap-[24px]'>
            <img src={Woman8} alt="Icon" />
            <div> 
              <h2 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>Contact Email not Linked</h2>
              <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>Updated 6 days ago</p>
            </div>
          </div>
         <div className='flex items-center gap-[111px]'>
         <div>
            <h3 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>How do I change my password?</h3>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>on 21.05.2019</p>
          </div>
          <div> 
            <h4 className='text-[#252733] text-[14px] leading-[20px] font-semibold'>Steve Rogers</h4>
            <p className='text-[#C5C7CD] text-[12px] leading-[16px] pt-[4px]'>1:00 PM</p>
          </div>
          <div className='flex items-center gap-[82px]'>
          <button className='w-[54px] h-[24px] bg-[#29CC97] text-white text-[11px] leading-[13px] rounded-[100px]'>Normal</button>
          <MoreIcon/>
          </div>
         </div>
        </div>
        <hr className='border-y-[1px] border-[#DFE0EB]' />
        <div className='flex items-center justify-end py-[24px] px-[31px] hover:bg-[#d6dcfd] '>
          <div>
            <div></div>
          </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}


export default Cards
