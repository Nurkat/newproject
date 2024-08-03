import React from 'react'
import { NavLink } from 'react-router-dom'
import { OverviewIcon } from '../assets/images/icon'
import { TicketsIcon } from '../assets/images/ticketsIcon'
import { IdeasIcon } from '../assets/images/IdeasIcon'
import { ContactIcon } from '../assets/images/contactIcon'
import { AgentsIcon } from '../assets/images/agentsIcon'
import { ArticleIcon } from '../assets/images/articleIcon'
import { SettingsIcon } from '../assets/images/settingIcon'
import { SubcriptionsIcon } from '../assets/images/subcriptionIcon'
import { SiteLogo } from '../assets/images/sitelogo'





function Navbar() {
  return (
    <div className='flex flex-col w-[20%] h-[100vh] bg-[#363740]'>
      <div className=' m-[41px] mx-auto  flex gap-[32px]'>
    <SiteLogo/>
      <h1 className='text-[#A4A6B3] leading-[23.84px] text-[19px]'>Dashboard Kit</h1>
      </div>
        <NavLink className={"flex text-[16px] leading-[20px] text-[#DDE2FF] p-[10px] text-center gap-[24px]"} to={'/'}>
              <OverviewIcon/>
              <span>Overview</span>
        </NavLink>
        <NavLink className={"flex text-[16px] leading-[20px] text-[#DDE2FF] p-[10px] text-center gap-[24px]"} to={'/tickets'}>
        <TicketsIcon/>
        <span>Tickets</span>
        </NavLink>
        <NavLink className={"flex text-[16px] leading-[20px] text-[#DDE2FF] p-[10px] text-center gap-[24px]"} to={'/ideas'}>
        <IdeasIcon/>
          <span>Ideas</span>
        </NavLink>
        <NavLink className={"flex text-[16px] leading-[20px] text-[#DDE2FF] p-[10px] text-center gap-[24px]"} to={'/contacts'}>
        <ContactIcon/>
        <span>Contacts</span>
        </NavLink>
        <NavLink className={"flex text-[16px] leading-[20px] text-[#DDE2FF] p-[10px] text-center gap-[24px]"} to={'/agents'}>
        <AgentsIcon/>
        <span>Agents</span>
        </NavLink>
        <NavLink className={"flex text-[16px] leading-[20px] text-[#DDE2FF] p-[10px] text-center gap-[24px]"} to={'/articles'}>
        <ArticleIcon/>
        <span>Articles</span>
        </NavLink>
        <NavLink className={"flex text-[16px] leading-[20px] text-[#DDE2FF] p-[10px] text-center gap-[24px]"} to={'/settings'}>
        <SettingsIcon/>
        <span>Settings</span>
        </NavLink>
        <NavLink className={"flex text-[16px] leading-[20px] text-[#DDE2FF] p-[10px] text-center gap-[24px]"} to={'/subcriptions'}>
        <SubcriptionsIcon/>
        <span>Subcriptions</span>
        </NavLink>
    </div>
  )
}
export default Navbar