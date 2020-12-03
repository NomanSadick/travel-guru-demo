import { TextField, Button, Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import Navber from '../Navber/Navber';
import './Login.css'



const Login = () => {

    const [newUser, setNewUser] = useState(false)
    const [checked, setChecked] = React.useState(false);

    const handleChange = (e) => {
        setChecked(e.target.checked);
    }

    return (

        <div>

            <div className="login-container">
                {newUser ?
                    <div className="login-field">
                        <h3>Create an account</h3>
                        <TextField className="text" id="standard-basic" label="First Name" />
                        <br />
                        <TextField className="text" id="standard-basic" label="Last Name" />
                        <br />
                        <TextField className="text" id="standard-basic" label="User or Email" />
                        <br />
                        <TextField className="text" id="standard-basic" label="Password" />
                        <br />
                        <TextField className="text" id="standard-basic" label="Confirm Password" />
                        <br />
                        <Button className="btn" variant="contained" color="secondary">Create an account</Button>
                        <p>Already have an account? <a href="#login" onClick={() => setNewUser(!newUser)}>Login</a> </p>
                    </div>
                    :
                    <div className="login-field">
                        <h3>Login</h3>
                        <TextField className="text" id="standard-basic" label="First Name" />
                        <br />
                        <TextField className="text" id="standard-basic" label="Last Name" />
                        <br />
                        <div className="remember">
                            <div>
                                <Checkbox className="checkbox"
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />Remember me
                           </div>
                            <div className="forget-password">
                                <p>Forgot password</p>
                            </div>
                        </div>
                        <Button className="btn" variant="contained" color="secondary">Login</Button>


                        <p>Don't have an account? <a href="#login" onClick={() => setNewUser(!newUser)}>Create an account</a></p>


                    </div>


                }
            </div>

        </div>
    );
};

export default Login;