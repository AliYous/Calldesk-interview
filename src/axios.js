import Axios from 'axios';

export const axios = Axios.create({
  baseURL: "https://x7s4xjtt86.execute-api.eu-west-1.amazonaws.com/v1",
  headers: { "x-api-key": "gse6HCskPY7zsv54OJW053d9pJ4u4cx17svMUdM3" }
})