/**
 * Declare constants.
 */
const tokenName = 'shadow-novel-auth-token';

export const getToken = () => localStorage.getItem(tokenName);

export const setToken = (token: string) => localStorage.setItem(tokenName, token);

export const removeToken = () => localStorage.removeItem(tokenName);
