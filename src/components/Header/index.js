import React from 'react'
import { Grid, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from '@reach/router'

const useStyles = makeStyles({
    header: {
        height: '20vh',
        backgroundColor: '#545454',
        transition: '2s',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'fontWeightBold',
        '&:hover' : {
            backgroundColor: 'black'
        },
    },
    text: {
        color: 'white',
        textAlign: 'center',
    }
  });
export default function Header() {
    const classes = useStyles()
    return (
            <Grid container md={12} className={classes.header}> 
                <Grid item md={12}>
                    <Typography variant='h1' className={classes.text}>Welcome</Typography>
                </Grid>
                <Grid container={12}>
                    <Grid item md={10}>
                    </Grid>
                    <Grid item md={2}>
                        <Link to='/profile' style={{textDecoration: 'none'}}>
                        <Button style={{color: 'white'}}>My Profile</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
    )
}
