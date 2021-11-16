import React from 'react'
import { Nav } from 'react-bootstrap'
import Navbars from '../Components/Navbars'

const PublicLayout = ({children}) => {
    return (
        <div>
            <Navbars />
            Este es mi plublicLayout
            {children}
        </div>
    )
}

export default PublicLayout
