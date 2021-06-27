import { Grid } from '@material-ui/core'
import { Link } from '@reach/router'
import React, {useContext} from 'react'
import {OrgContext} from '../../context/context'

export default function Page3() {
    const orgContext = useContext(OrgContext)
    return (
        <div>
            <Grid container md={12}>
                <p>Hello</p>
            {Object.entries(orgContext.state.users).map((user) => {
                return (
                        <p style={{paddingLeft: '5px'}}>{user[1].Name}</p>
                )
            })}
            </Grid>
            <Link to='/2'>
                <button>Back</button>
            </Link>
            <Link to='/4'>
                <button>Sign up</button>
            </Link>
        </div>
    )
}