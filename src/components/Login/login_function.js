// cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();
// constantes
const info_password = "kk"
const info_user = "kk"
const info_user_status = "admin"


export default function login (user, password){
    if (user === info_user && password === info_password) {

        const info_cookie = {
            user: user,
            status: info_user_status
        }

        cookies.set('session', info_cookie, { path: '/' });

        console.log("usuario logueado con exito")

        return true
    }
    console.error("el usuario no ha sido logueado, usuraio o la contraseña son incorrectos")
    return false
}