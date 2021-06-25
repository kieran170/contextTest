import React, {useContext} from 'react'
import {OrgContext} from '../../context/context'

export default function Page3() {
    const userArray = useContext(OrgContext)
    return (
        <div>
            <p>Hello from 3</p>
        </div>
    )
}