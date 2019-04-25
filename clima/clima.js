const axios = require('axios');


const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0fbe16fbb833017a66702cd067057f28&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}