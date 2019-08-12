import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getCookie = name => cookies.get(name);

export const setCookie = (name, value) => cookies.set(name, value, { path: '/qa-app-mongodb/' });

export const removeCookie = name => cookies.remove(name, { path: '/qa-app-mongodb/' });
