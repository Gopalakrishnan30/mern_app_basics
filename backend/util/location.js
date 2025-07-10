//Ref API URL: https://nominatim.openstreetmap.org/search?q=MG+Road+Bengaluru&format=json

const { default: axios } = require("axios");
const HttpError = require("../models/http-error");

async function getCoordsForAddress(address) {
  const response = await axios.get(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      address
    )}&format=json`
  );
  const data = response.data;

  if (!data || data.length === 0) {
    throw new HttpError(
      "Could not find location for the specified address.",
      422
    );
  }
  const coordinates = data[0];

  return coordinates;
}

module.exports = getCoordsForAddress;
