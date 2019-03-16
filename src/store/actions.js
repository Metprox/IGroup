import Vue from 'vue'
const isLocal = window.location.href.indexOf('localhost') >= 0 || window.location.href.indexOf('192.168.') >= 0;
const ABSOLUTE_URL = isLocal ? 'http://dev-ingosvideo.mscdev.ru' : '';
const URL_ROOT = '/api';

export const GET_SOCIAL_URL = ({commit, state}) => {
    return new Promise((resolve, reject) => {
        Vue.http.get(URL_ROOT + '/auth/social-url').then(
            (response) => {
                resolve();
            },
            () => {
                reject();
            }
        )
    })
}


export const GET_RATING = ({commit, state}) => {
    return new Promise((resolve, reject) => {
        Vue.http.get(ABSOLUTE_URL + '/api/site/rating').then(
            (response) => {
                commit('UPDATE_RATINGS', response.body);
                resolve();
            },
            ()=> {
                reject();
            }
        )
    })
}
