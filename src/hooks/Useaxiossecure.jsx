import axios from 'axios';
import React from 'react';


const AxiosSecure = axios.create({
      baseURL: "http://localhost:5000"
})

const Useaxiossecure = () => {

      
      return AxiosSecure
};

export default Useaxiossecure;