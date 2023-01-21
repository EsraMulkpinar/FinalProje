import axios from "axios"
export const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params: {
        api_key: "548c28ba44b8951cf31389023ae063b0"
        
    }
})