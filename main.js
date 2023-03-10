import "./style.css"
import "./heather.css"
import "./daycard.css"
import "./daysection.css"

import { getWeather } from "./weather"

getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone)
.then(renderWeather)
.catch(e =>{
    console.error(e)
    alert("Error getting weather.")
})
//------------------------------------------------------------------------------------------

function renderWeather({ current, daily, hourly}){
   renderCurrentWeather (current)
   // renderDailyWeather (daily)
   // renderHourlyWeather (hourly)
    document.body.classList.remove("blurred")
}
//--------------------------------------------------------

function setValue (selector, value, { parent = document } = {})  {
   parent.querySelector(`[data-${selector}]`).textContent = value
}

//----------------------------------------------------------------------------------------------------

function getIconUrl(iconCode){
   return `icons/${iconCode}.svg`
}

//-----------------------------------------------------------------------------------------------------

const currentIcon = document.querySelector("[data-current-icon]")

function renderCurrentWeather(current){

   currentIcon.src = getIconUrl(current.iconCode)

   setValue("current-temp", current.currentTemp)
   setValue("current-high", current.highTemp)
   setValue("current-low", current.lowTemp)
   setValue("current-fl-high", current.highFellsLike)
   setValue("current-fl-low", current.lowFellsLike)
   setValue("current-precipt", current.precipt)
 
 
 //document.querySelector("[data-current-temp]").textContent = 
// current.currentTemp
}