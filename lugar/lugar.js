const axios = require('axios');

const getLugarLatLon = async(dir) => {

    const encodeUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: { 'X-RapidAPI-Key': '9ebe2d81e0mshcdc3a40ba27abe4p12e3f7jsnbe070c61f13e' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLon
}