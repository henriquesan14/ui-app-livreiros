import { http } from './config';

export default {

    login: (user) => {
        return http.post('login', user)
    }
}