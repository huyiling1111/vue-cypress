import axios from "axios";

const SERVER_URL = process.env.SERVER_URL || "http://localhost:8081";

const get = async function (id) {
  const response = await axios.get(`${SERVER_URL}/event/${id}`);
  return response.data;
}

const getAll = async function () {
  const response = await axios.get(`${SERVER_URL}/event`);
  return response.data;
}

const post = async function (event) {
  return await axios.post(`${SERVER_URL}/event`, event, { headers: { 'Access-Control-Allow-Origin': '*' } });
}

const put = async function (event) {
  return await axios.put(`${SERVER_URL}/event/${event._id}`, event, { headers: { 'Access-Control-Allow-Origin': '*' } });
}

export const eventApi = {
  get,
  getAll,
  post,
  put
}