import axios from "axios";

export const fetchData = async (path) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${path}`, {
    headers: {
        'Authorization': `Token ${token}`
    },
  });
  return response?.data?.results;
};
