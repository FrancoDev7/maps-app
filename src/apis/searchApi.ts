import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/search/geocode/v6/forward",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1IjoiZnJhbmNvZGV2NyIsImEiOiJjbWtwd25zdnUwbDR4M2VwcWdieXdlaHgwIn0.P1JWCViZ2S69lkHcSyGi0w",
  },
});

export default searchApi;
