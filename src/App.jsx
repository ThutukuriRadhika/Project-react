 import React from 'react'
import Explore from "./Components/Explore"
import Hire from "./Components/Hire"
import Challenge from "./Components/Challenge"
import Navbar from "./Components/Navbar"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom" 
import { Route } from "react-router-dom"

const App = () => {
    return(
        <div>
     {/* <h1>App</h1> */}
    {/* <Navbar/> */}
   {/* <Hire/>
   <Challenge/> */}
   {/* <Explore/> */}

   <BrowserRouter>
    <Navbar/>
    <Hire/>
    <Challenge/>
    <Routes>
        <Route path="/explore"  element={< Explore /> }></Route>
        <Route path="/hire" element={<Hire/>}></Route>
        <Route path="/challenge" element={<Challenge/>}></Route>
    </Routes>

    </BrowserRouter>
    </div>
    

    )
}
export default App