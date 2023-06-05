import axios from 'axios';


export const axiosWithAuth = () => {
    const unx_id = JSON.parse(sessionStorage.getItem('userData')).userData.unx_id;
    const { jwtToken, accessToken } = JSON.parse(sessionStorage.getItem('authData'));
    const twitchId = JSON.parse(sessionStorage.getItem('userData')).userData.twitch_id;

    
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            unx_id: unx_id,
            jwt_token: jwtToken,
            access_token: accessToken,
            twitch_id: twitchId
        },
    });
};
