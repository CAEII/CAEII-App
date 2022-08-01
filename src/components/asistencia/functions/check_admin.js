// cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function check_admin(navigate ,activiti_name, check_location) {
    if (cookies.get('admin') === undefined) {
        navigate("/")
    }
    if (check_location === false) {
        return  ""
    }
    if (cookies.get('admin') === activiti_name.replace("_", " ")) {
        return true
    }
    if (cookies.get('admin') !== activiti_name.replace("_", " ")) {
        return false
    }
}