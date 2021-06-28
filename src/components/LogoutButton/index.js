import React, {useContext} from 'react';
import {Link} from '@reach/router'
import { Button} from '@material-ui/core';
import { UserContext } from '../../context/userContext'

export default function LogoutButton() {
    const userContext = useContext(UserContext)
    const handleLogOut = () => {
        userContext.dispatch({
            type: 'LOG_OUT',
        })
    }
    return (
        <Link to='/4' style={{ textDecoration: 'none' }}>
            <Button onClick={handleLogOut} variant='outlined'>Logout</Button>
        </Link>
    )
}
