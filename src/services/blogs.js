import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
  console.log(token);
};

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async blogObject => {
  const config = { headers: {Authorization: token}}
  const response = await axios.post(baseUrl,blogObject,config)
  return response.data
}

const update = async(blogObject,id) =>{
  const response = await axios.put(`${baseUrl}/${id}`,blogObject)
  return response.data
}

export default { getAll,setToken, create,update }