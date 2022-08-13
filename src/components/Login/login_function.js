// cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();
// constantes
const info_password = "usuario"
const info_user = "kk"
const info_user_status = "admin"


export default function login (user, password){
    if (password === info_password) {

        const info_cookie = {
            user: user,
            status: info_user_status
        }

        cookies.set('session', user, { path: '/' , maxAge: 5184000});

        console.log("usuario logueado con exito")

        return true
    }
    console.error("el usuario no ha sido logueado, usuraio o la contraseña son incorrectos")
    return false
}