import axios from "axios";

export default axios.create({
  baseURL: "https://steam2.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "2e779aa440msh86d612f903b11d9p18a5dejsnda38b5776a8f",
    "X-RapidAPI-Host": "steam2.p.rapidapi.com",
  },
});
