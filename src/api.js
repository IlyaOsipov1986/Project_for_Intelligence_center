import axios from "axios";
import { config } from "./config.js";

export const apiService= axios.create({
   baseURL: config.api_url,
   headers: {
       "Content-Type": "application/json",
   }
});

//Запрос для получения списка мероприятий
export const getEvents = async () => {
    return await apiService.get('/events').then((res) => res.data);
};