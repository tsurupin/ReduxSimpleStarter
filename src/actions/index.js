import axios from 'axios';

const API_KEY = '117a56a6cefcc901270ce34dcf267188';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request', request);

    // redux-promiseがpayloadの物を処理してくれる
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}