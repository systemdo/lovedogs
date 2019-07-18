import Service from './Service';

export const getAllDogs = email => {
    return Service.get('/feed', { headers: {
        'Content-Type': 'application/json',
    }});
}