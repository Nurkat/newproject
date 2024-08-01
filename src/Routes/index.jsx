import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Overview,Tickets,Ideas,Contacts,Agents,Articles,Settings,Subcriptions} from "../pages"


function CustomRoutes() {
  return (
    <>
  
    <div className='w-[80%] h-[100vh] bg-[#F7F8FC]'>
    <Routes>
        <Route path='/' element={<Overview/>}/>
        <Route path='/tickets' element={<Tickets/>}/>
        <Route path='/ideas' element={<Ideas/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/agents' element={<Agents/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/subcriptions' element={<Subcriptions/>}/>
    </Routes>
    <ul className='flex gap-[30px] mt-[54px] mx-[30px] justify-between text-[#FFFFFF] mb-[8px]'>
      <li className=' list flex flex-col border-[1px] px-[32px] py-[24px]'>
      <p className='text-[#9FA2B4] text-[19px] leading-[24px]'>Unresolved</p>
      <span className='text-[#252733] text-[40px]  leading-[50.2px]  text-center '>60</span>
      </li>
      <li className='flex flex-col border-[1px] px-[32px] py-[24px]'>
      <p className='text-[#9FA2B4] text-[19px] leading-[24px]'>Overdue</p>
      <span className='text-[#252733] text-[32px]  leading-[50.2px]  text-center'>16</span>
      </li>
    <li  className='flex flex-col border-[1px] px-[32px] py-[24px]'>
      <p className='text-[#9FA2B4] text-[19px] leading-[24px]'>Open</p>
      <span className='text-[#252733] text-[32px]  leading-[50.2px]  text-center'>43</span>
    </li>
    <li  className='flex flex-col border-[1px] px-[32px] py-[24px]'>
      <p className='text-[#9FA2B4] text-[19px] leading-[24px]'>On hold</p>
      <span className='text-[#252733] text-[32px]  leading-[50.2px] text-center'>64</span>
    </li>
    </ul>
    <div className=' pl-[32px] flex justify-between p-[30px] '>
      <div>
    <h1 className=' text-[19px] leading-[23.84px] pb-[8px] '>Today’s trends</h1>
    <span className='text-[#9FA2B4] text-[12px] leading-[16px]'>as of 25 May 2019, 09:41 PM</span>
      </div>
      <div className='flex gap-[32px]'>
    <p className='text-[#9FA2B4] leading-[15.06px] text-[12px] -[2px]'>Today</p>
    <p className='text-[#9FA2B4] leading-[15.06px] text-[12px]'>Yesterday</p>
      </div>

  <ul>
    <li className='border-[1px] p-[10px]'>
      <h2>Resolved</h2>
      <span>449</span>
    </li>
    <li className='border-[1px] p-[10px]'>
      <h2>Resieved</h2>
      <span>426</span>
    </li>
    <li className='border-[1px] p-[10px]'>
      <h2>Average first response time</h2>
      <span>33m</span>
    </li>
    <li className='border-[1px] p-[10px]'>
      <h2>Average response time</h2>
      <span>3h 8m</span>
    </li>
    <li className='border-[1px] p-[10px]'>
      <h2>Resolution within SLA</h2>
      <span>94%</span>
    </li>
  </ul>
        
    </div>
   
      
    </div>
 



    
      
    
    </>
  )
}

export default CustomRoutes