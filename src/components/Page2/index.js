import { Grid, Typography, TextField, Button } from '@material-ui/core'
import React, {useContext} from 'react'
import {OrgContext} from '../../context/context'
import { Link } from '@reach/router'

export default function Page2() {
    const orgContext = useContext(OrgContext)
    const num = Object.keys(orgContext.state.users).length +1

    const handleChange = (e, key) => {
        orgContext.dispatch({
            type: 'UPDATE_FIELDS',
            payload: e.target.value,
            key,
        })
    }

    const handleSubmit = (e, num) => {
        orgContext.dispatch({
            type: 'ADD_USER',
            payload: orgContext.state.fields,
            key: num
        })
        handleReset()
    }

    const handleReset = () => {
        orgContext.dispatch({
            type:'RESET_DATA'
        })
    }

    return (
       <Grid container md={12}>
           <Grid item md={3}>
               <Typography>Name</Typography>
              <TextField value={orgContext.state.fields.Name} onChange={(e) => handleChange(e, 'Name')}></TextField> 
           </Grid>
           <Grid item md={3}>
           <Typography>Age</Typography>
              <TextField value={orgContext.state.fields.Age} onChange={(e) => handleChange(e, 'Age')}></TextField> 
           </Grid>
           <Grid item md={3}>
           <Typography>Favorite Quote</Typography>
               <TextField value={orgContext.state.fields.FavQuote} onChange={(e) => handleChange(e, 'FavQuote')}></TextField>
           </Grid>
           <Grid md={3}>
               <Button onClick={(e) => handleSubmit(e, num)} variant='outlined'>Hello</Button>
           </Grid>
           <Link to='/3'>
            <Button>Next Page</Button>
           </Link>
       </Grid>
    )
}