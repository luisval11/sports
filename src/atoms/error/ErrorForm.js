import React from 'react'
import { Badge } from 'react-bootstrap'

export const ErrorForm = () => {
    return (
        <Badge className='mt-3' bg="danger">There's an error in the form. Please, review that home <br/> and away teams have a name and the scores are positive.</Badge>
    )
}
