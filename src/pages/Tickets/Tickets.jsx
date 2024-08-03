import React from 'react'
import { SortImg } from '../../assets/images/sortImg'
import { FilterImg } from '../../assets/images/filterImg'
import { LeftIcon } from '../../assets/images/leftIcon'
import { RightIcon } from '../../assets/images/rightIcon'
import { BelltIcon } from '../../assets/images/bellIcon'
import { LooptIcon } from '../../assets/images/loopIcon'



function Tickets() {
  return (
  <div className='containers'>
    <div className='flex justify-between items-center' >
      <h1 className='py-[32px] text-[24px] leading-[28px]'>Tickets</h1>
      <div className='flex gap-[24px] items-center'>
      <LooptIcon/>
     <BelltIcon/>
     <p>Jones Ferdinand</p> 
      </div>
    </div>
    <div className=' bg-white p-[32px]'>
    <div className='flex justify-between mb-[48px] '>
      <h2>All Tickets</h2>
      <div className='flex gap-[32px]  '>
      <button className='flex items-center gap-[3px]' type='button'>
      <SortImg/>
      <p>Sort</p>
      </button>
      <button className='flex items-center gap-[3px]  'type='button'>
        <FilterImg/>
        <p>Filter</p>
        </button>
      </div>
    </div>
  <ul className='flex justify-between border-b-[2px] pb-[6px]'>
    <li className='text-[#9FA2B4] text-[14px] leading-[18px]'>
      <span>Ticket details</span>
    </li>
    <li className='text-[#9FA2B4] text-[14px] leading-[18px]'>
      <span>Customer name</span>
    </li>
    <li className='text-[#9FA2B4] text-[14px] leading-[18px]'>
      <span>Date</span>
    </li>
    <li className='text-[#9FA2B4] text-[14px] leading-[18px]'>
      <span>Priority</span>
    </li>
  </ul>
  <ul className='mt-[20px] flex justify-between border-b-[2px] pb-[6px] '>
    <li className='flex flex-col gap-[4px]'>

      <h3 className='text-[#252733] text-[14px] leading-[20px]'>Contact Email not Linked</h3>
      <span className='text-[#C5C7CD] text-[12px] leading-[16px]'>Updated 1 day ago </span>
    </li>
    <li className='flex flex-col gap-[4px]'>
      <h3 className='text-[#252733] text-[14px] leading-[20px] '>Tom Cruise</h3>
      <span className='text-[#C5C7CD] text-[12px] leading-[16px]'>on 24.05.2019 </span>
    </li>
      <li className='flex flex-col gap-[4px]'>
        <h3 className='text-[#252733] text-[14px] leading-[20px]'>May 26, 2019</h3>
        <span className='text-[#C5C7CD] text-[12px] leading-[16px]'>8:00 AM</span>
      </li>
  <button className=' w-[54px] text-[#FFFFFF] text-[11px] leading-[14px] rounded-[10px] py-[5px] px-[12px] bg-[#F12B2C]'>HIGH</button>
  </ul>
  <ul className='mt-[20px] flex justify-between text-start border-b-[2px] pb-[6px]'>
    <li className='flex flex-col gap-[4px]'>
      <h3 className='text-[#252733] text-[14px] leading-[20px]'>Adding Images to Featured Posts</h3>
      <span className='text-[#C5C7CD] text-[12px] leading-[16px]'>Updated 1 day ago </span>
    </li>
    <li className='flex flex-col gap-[4px]'>
      <h3 className='text-[#252733] text-[14px] leading-[20px]'>Matt Damon</h3>
      <span className='text-[#C5C7CD] text-[12px] leading-[16px]'>on 24.05.2019</span>
    </li>
      <li className='flex flex-col gap-[4px]'>
        <h3 className='text-[#252733] text-[14px] leading-[20px]'>May 26, 2019</h3>
        <span className='text-[#C5C7CD] text-[12px] leading-[16px]'>6:30 PM</span>
      </li>
  <button className=' w-[54px] text-[#FFFFFF] text-[11px] leading-[14px] rounded-[10px] py-[5px] px-[12px] bg-[#FEC400]'>LOW</button>
  </ul>
  <ul className='mt-[20px] flex justify-between text-start border-b-[2px] pb-[6px]'>
    <li className='flex flex-col gap-[4px]'>
      <h3 className='text-[#252733] text-[14px] leading-[20px]'>When will I be charged this month?</h3>
      <span className='text-[#C5C7CD] text-[12px] leading-[16px]'>Updated 1 day ago </span>
    </li>
    <li className='flex flex-col gap-[4px]'>
      <h3 className='text-[#252733] text-[14px] leading-[20px]'>Robert Downey</h3>
      <span className='text-[#C5C7CD] text-[12px] leading-[16px]'>on 24.05.2019</span>
    </li>
      <li className='flex flex-col gap-[4px]'>
        <h3 className='text-[#252733] text-[14px] leading-[20px]'>May 26, 2019</h3>
        <span className='text-[#C5C7CD] text-[12px] leading-[16px]'>7:30 PM</span>
      </li>
  <button className=' w-[54px] text-[#FFFFFF] text-[11px] leading-[14px] rounded-[10px] py-[5px] px-[12px] bg-[#F12B2C]'>HIGH</button>
  </ul>
  <ul className='mt-[20px] flex justify-between text-start border-b-[2px] pb-[6px]'>
    <li className='flex flex-col gap-[4px]'>
      <h3 className='text-[#252733] text-[14px] leading-[20px]'>Payment not going through</h3>
      <span className='text-[#C5C7CD] text-[12px] leading-[16px]'>Updated 2 day ago </span>
    </li>
    <li className='flex flex-col gap-[4px]'>
      <h3 className='text-[#252733] text-[14px] leading-[20px]'>Christian Bale</h3>
      <span className='text-[#C5C7CD] text-[12px] leading-[16px]'>on 24.05.2019</span>
    </li>
      <li className='flex flex-col gap-[4px]'>
        <h3 className='text-[#252733] text-[14px] leading-[20px]'>May 25, 2019</h3>
        <span className='text-[#C5C7CD] text-[12px] leading-[16px]'>5:00 PM</span>
      </li>
  <button className=' w-[76px] text-[#FFFFFF] text-[11px] leading-[14px] rounded-[10px] py-[5px] px-[12px] bg-[#29CC97]'>NORMAL</button>
  </ul>
  <ul className='mt-[20px] flex justify-between text-start border-b-[2px] pb-[6px]'>
    <li className='flex flex-col gap-[4px]'>
      <h3 className='text-[#252733] text-[14px] leading-[20px]'>Unable to add replies</h3>
      <span className='text-[#C5C7CD] text-[12px] leading-[16px]'>Updated 2 day ago </span>
    </li>
    <li className='flex flex-col gap-[4px]'>
      <h3 className='text-[#252733] text-[14px] leading-[20px]'>Henry Cavil</h3>
      <span className='text-[#C5C7CD] text-[12px] leading-[16px]'>on 24.05.2019</span>
    </li>
      <li className='flex flex-col gap-[4px]'>
        <h3 className='text-[#252733] text-[14px] leading-[20px]'>May 25, 2019</h3>
        <span className='text-[#C5C7CD] text-[12px] leading-[16px]'>4:00 PM</span>
      </li>
      <button className=' w-[54px] text-[#FFFFFF] text-[11px] leading-[14px] rounded-[10px] py-[5px] px-[12px] bg-[#F12B2C]'>HIGH</button>
  </ul>
  <div className='flex gap-[48px] justify-end mt-[27px] text-[#9FA2B4]'>

<span >Rows per page:6</span>
<p>1-6 of 1240</p>
<button className='flex gap-[20px] items-center'>
<LeftIcon/>
<RightIcon/>
</button>
  </div>
    </div>
  </div>
  )
}

export default Tickets