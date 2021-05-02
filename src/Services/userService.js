import httpRequest from '../Infrastructure/httpRequest';

class UserService {
    constructor () {
        this.api = httpRequest ('https://api.github.com/');
    }

    //quando espero um retorno preciso usar await, porém esse só pode ser usado em uma função async
    async getUserProfile (userLogin) {
        const result = await this.api.get (`users/${userLogin}`);
        return result.data;
    }
}

export default UserService;