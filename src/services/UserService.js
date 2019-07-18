import Service from './Service';
export const signUp = email => {
    
    return Service.post('/signup', { email });
}