import React, { useContext } from 'react';

//npm imports
import styled from 'styled-components';

//component imports
import { Heading16 } from '../../Components/Text/Text';

//other imports
import { GlobalContext } from '../../Context/GlobalContext';
import Button from '../../Components/Button/Button';
import { navigate } from '@reach/router';
import { API } from '../../Consts/Api';

//styled-components
const LoginWrapper = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.dark_gray};

    input{
        border: 1px solid ${props => props.theme.text_gray};
        border-radius: 5px;
        padding: 8px 0;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    input, button {
        width: 80%;
    }
`

//component
const Login = () => {
    const { user, setUser } = useContext(GlobalContext);

    const login = () => {
        localStorage.setItem("user", JSON.stringify(user));
        navigate(API.paths.newsFeed);
    }
    return (
        <LoginWrapper>
            <Heading16>Choose you username</Heading16>
            <input
                type="text"
                onChange={(e) => setUser({ ...user, userName: e.target.value })}
            />
            <Button
                type="button"
                text="Login"
                disabled={user.userName === ""}
                onClick={login}
            />
        </LoginWrapper>
    );
}

export default Login;