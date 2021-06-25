import React, {useContext} from 'react'
import {OrgContext} from '../../context/context'

export default function Page2() {
    const userArray = useContext(OrgContext)

    return (
        <div>
            <p>{userArray.state.kieran.Data}</p>
            <pre>{JSON.stringify(userArray, null, 2)}</pre>
        </div>
    )
}