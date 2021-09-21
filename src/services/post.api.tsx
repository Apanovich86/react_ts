import axios from "axios"
import {IPost} from "../models/IPost";

const axiosInstace = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
});
const getPosts = () => {
    return axiosInstace.get<IPost[]>('/posts');
}
export {getPosts};