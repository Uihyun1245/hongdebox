import axios from "axios";

export const getPosts =  () =>{
	return axios.get('http://localhost:80/posts');
}
