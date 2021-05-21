export const BOOKS = 'books';
export const AUTHORS = 'authors'
export const GENRES = 'genres'

const ENDPOINTS = {
    [BOOKS]: {
        uri: '/books',
        method: 'GET'
    },
    [AUTHORS]: {
        uri: '/authors',
        method: 'GET'
    },
    [GENRES]: {
        uri: '/genres',
        method: 'GET'
    }
};
export default ENDPOINTS