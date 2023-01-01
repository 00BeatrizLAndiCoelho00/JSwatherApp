import "./style.css"
import "./heather.css"
import "./daycard.css"
import "./daysection.css"

import { getWeather } from "./weather"

getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone).then(
    data=> {
        console.log(data)
    }
 ) 