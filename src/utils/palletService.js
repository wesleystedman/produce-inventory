import tokenService from './tokenService';

const BASE_URL = '/api/pallets/';

export default {
    getAll,
    create,
    update,
    deleteOne,
};

function getAll() {
    const options = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

function create(pallet) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(pallet)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

function update(pallet) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(pallet)
    };
    return fetch((BASE_URL + pallet.id), options).then(res => res.json());
}

function deleteOne(id) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch((BASE_URL + id), options).then(res => res.json());
}
