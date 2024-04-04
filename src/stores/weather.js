import { i18n } from '@/i18n/index.js'
import { convertKtoC } from '@/ultis/weather'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const weatherStore = defineStore('weather', () => {
  const weather = ref()
  const error = ref('')
  const current_locale = i18n.global.locale

  const fetchData = async (location) => {
    try {
      //console.log(location)
      const response = await axios.post(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&lang=${current_locale.value}&units=metric&exclude=hourly,daily&appid=${import.meta.env.VITE_WEATHER_KEY}`
      )

      if (response.data) {
        let data = response.data
        //console.log(data)
        weather.value = {
          weather: {
            main: data.weather[0].main,
            description: data.weather[0].description,
            icon: data.weather[0].icon
          },
          main: {
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            sea_level: data.main.sea_level,
            grnd_level: data.main.grnd_level
          },
          wind: {
            speed: data.wind.speed,
            deg: data.wind.deg,
            gust: data.wind.gust
          },
          rain: {
            ...data?.rain
          },
          clouds: {
            ...data?.clouds
          },
          snow: {
            ...data?.snow
          }
        }
      } else error.value = 'something went wrong'
    } catch (e) {
      error.value = 'something went wrong'
    }
  }

  return { fetchData, weather, error }
})
