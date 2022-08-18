// axios
import axios, { Axios } from "axios";
// cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export default function kk (){

    axios({
        method: 'get',
        url: 'https://inscripciones.aareii.org.ar/api/v1/csrf-cookie',
        withCredentials: true,
    }) .then(response => {
        console.log(document.cookie)
        console.log(response.headers['set-cookie'])
        // console.log(cookies.get)
    });

  
    // axios({
    //     method: 'post',
    //     url: 'https://inscripciones.aareii.org.ar/api/v1/login',
    //     withCredentials: true,
    //     data: {
    //         email: 'Fred',
    //         password: 'Flintstone'
    //     }
    // }).then(Response => {
    //     console.log(Response)
    // })
}