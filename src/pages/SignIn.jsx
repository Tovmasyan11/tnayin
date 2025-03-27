
import { useState, useContext } from 'react';
import { AuthContext } from "../context/auth/AuthContext";
import { Input, Button } from '@mui/material';


export const SignIn = () => {

    const authContext = useContext(AuthContext);

    const [username, setUsername] = useState('john_doe91');
    const [password, setPassword] = useState('');

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSignIn = () => {
        const auth = authContext.signIn(username, password);

        if (!auth) {
            alert('User with credentials does not exist');
        }
    }

    return (
        <div>

            <h2>Sing In</h2>
            <div>
                <Input
                    value={username}
                    onChange={onChangeUsername}
                    type="text"
                    placeholder="Username"
                />
            </div>

            <div>

                <Input
                    value={password}
                    onChange={onChangePassword}
                    type="password"
                    placeholder="Password"
                />
            </div>

            <Button variant="contained" onClick={handleSignIn}>Sign In</Button>

        </div>
    );
};
