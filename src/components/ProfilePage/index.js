import { Typography, Grid } from '@material-ui/core'
import React, {useContext} from 'react'
import { UserContext } from '../../context/userContext'
import LogoutButton from '../LogoutButton'

export default function Profile() {
    const userContext = useContext(UserContext)
    return (
        <Grid container md={12}>
            <Grid container md={12}>
                <Grid item md={12}>
                    <Typography>Hello {userContext.state.user.UserName}</Typography>
                </Grid>
                <Grid item md={12}>
                    <LogoutButton />
                    
                </Grid>
            </Grid>
        </Grid>
    )
}
