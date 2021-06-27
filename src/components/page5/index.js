import { Button, Grid, Typography } from '@material-ui/core';
import React, {useContext} from 'react';
import {Link} from '@reach/router'
import {UserContext} from '../../context/userContext';

export default function Page5() {
    const userContext = useContext(UserContext)

    const handleLogOut = () => {
        userContext.dispatch({
            type: 'LOG_OUT',
        })
    }
    return (
        <Grid>
            <pre>{JSON.stringify(userContext, null, 2)}</pre>
            <Typography>hello {userContext.state.user.UserName} </Typography>
            <Link to='/4'>
                <Button onClick={handleLogOut} variant='outlined'>Logout</Button>
            </Link>
        </Grid>
        
    )
}
