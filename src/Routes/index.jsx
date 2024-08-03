import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Overview,
  Tickets,
  Ideas,
  Contacts,
  Agents,
  Articles,
  Settings,
  Subcriptions,
} from "../pages";


function CustomRoutes() {
  return (
    <>
      <div className="w-[80%] h-[100vh] bg-[#F7F8FC]">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/ideas" element={<Ideas/>}/>
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/agents" element={<Agents/>} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/subcriptions" element={<Subcriptions/>} />
        </Routes>
        
      </div>
    </>
  );
}

export default CustomRoutes;
