import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React, {useContext, useState} from 'react';
import { Link } from '@reach/router';
import {UserContext} from '../../context/userContext';

export default function Page4() {
    const userContext = useContext(UserContext)
    const [wrongPass, setWrongPass] = useState(false)
    const [logged, setLogged] = useState(false)
    const handleChange = (e, key) => {
        userContext.dispatch({
            type: 'UPDATE_FIELDS',
            payload: e.target.value,
            key,
        })
    }

    const handleSubmit = () => {
        if (userContext.state.fields.Password === userContext.state.fields.ConfirmPassword) {
            userContext.dispatch({
                type: 'SIGN_IN',
                payload: userContext.state.fields
            })
            setWrongPass(false)
            setLogged(true)
        } else {
            setWrongPass(true)
            setLogged(false)
        }
    }
    return (
        <Grid container md={12} style={{placeContent: 'center'}}>
            <Grid container md={2} >
                <Grid item md={12} style={{textAlign: 'center'}}>
                    <Grid item md={12}>
                    <Typography>User Name</Typography>
                    <TextField value={userContext.state.fields.UserName|| ''} onChange={(e) => handleChange(e, 'UserName')} placeholder='Username' variant='outlined'></TextField>
                    </Grid>
                    <Grid item md={12}>
                    <Typography>Password</Typography>
                    <TextField value={userContext.state.fields.Password|| ''} onChange={(e) => handleChange(e, 'Password')} placeholder='Password' type={'password'} variant='outlined'></TextField>
                    </Grid>
                    <Grid item md={12} style={{paddingBottom: '10px'}}>
                    <Typography>Confirm Password</Typography>
                    <TextField value={userContext.state.fields.ConfirmPassword|| ''} onChange={(e) => handleChange(e, 'ConfirmPassword')} placeholder='Password' type={'password'} variant='outlined'></TextField>
                    </Grid>
                    <Grid item md={12}>
                    {!logged && <Button onClick={handleSubmit} variant='outlined'>Submit</Button>}
                    </Grid>
                    {wrongPass && <Typography style={{color: 'red'}}>Password's Don't Match</Typography>}
                    {logged && <Link to='/5'><Button variant='outlined'>Homepage</Button></Link>}
                </Grid>
            </Grid>
            <pre>{JSON.stringify(userContext, null, 2)}</pre>
        </Grid>
    )
}
