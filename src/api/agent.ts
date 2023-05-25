import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'https://dummyjson.com';

axios.interceptors.response.use(undefined, (error) => {
  if (error.message === "Network Error" && !error.response) {
    console.log("Network error - make sure API is running!");
  }
  const { status, data, config } = error.response;
  if(error.response.data==undefined)console.log("Please Check Internet Connection")
 
  if (status === 404) {
    console.log("404 error in API "+error.config.url+"  -->  "+error.response.data.message)
  }
 
  if (
    status === 400
   
  ) {
    // history.push("/notfound");
    console.log(error)
  }
  if (status === 500) {
    console.log("Server error - check the terminal for more info!");
  }
  if(status>500)console.log("Server error - check the terminal for more info!");
  throw error.response;
});

const responseBody = (response: AxiosResponse) => response.data;
const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody),
  };


const quotes={
        getdataof: (id: number) => requests.get(`/quotes/${id}`),
}
export  {quotes}