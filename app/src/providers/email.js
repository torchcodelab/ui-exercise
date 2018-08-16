import { emailAPI } from './config.js';

const fetchSettings = {
    method: "GET",
    headers: {
        Accept: "application/json; odata=verbose"
    }
};

export const getEmail = () => {
    return fetch(new Request(emailAPI, fetchSettings))
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(data => {
            return data;
        });
};
