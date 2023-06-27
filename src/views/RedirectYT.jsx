/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../store/auth/auth.actions';




const RedicrectYT = ({
    sendYTAuthCode
}) => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const handleRedirect = useCallback(async () => {
        const code = searchParams.get('code');


        // await sendYTAuthCode(code);

        // navigate('/control-panel');

    });

    useEffect(() => {
        handleRedirect();
    }, [handleRedirect]);



    return(
        <div>
            <h1>Redirecting...</h1>
        </div>
    )
};

export default connect(st => ({

}),{
    sendYTAuthCode: authActions.sendYTAuthCode
}) (RedicrectYT);

