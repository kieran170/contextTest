import { Button, Grid, TextField } from '@material-ui/core'
import { Link } from '@reach/router'
import React, {useContext} from 'react'
import {OrgContext} from '../../context/context'


export default function Page1() {
    const org = useContext(OrgContext)
    const handleChange = (e, type) => {
        org.dispatch({
            type,
            payload: e.target.value,
            key: 'Data'
        })
    }

    return (
        <Grid>
            <pre>{JSON.stringify(org, null, 2)}</pre>
            <TextField onChange={(e) => handleChange(e, 'UPDATE_KIERAN')}></TextField>
            <Link to='/2'>
            <Button >Submit</Button>
            </Link>
            <TextField onChange={(e) => handleChange(e, 'UPDATE_WILL')}></TextField>
            <Link to='/3'>
               <Button >Submit</Button> 
            </Link>            
        </Grid>
    )
}
