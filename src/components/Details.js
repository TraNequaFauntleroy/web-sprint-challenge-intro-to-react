import React, { useState, useEffect } from 'react'
import axios from 'axios'

import styled from 'styled-components';

const StyledDetails = styled.div`
    background-color: ${pr => pr.theme.primaryColor};
    p {
    color: ${pr => pr.theme.tertiaryColor};
  }

  h2 {
    color: ${pr => pr.theme.secondaryColor};
  }

`

export default function Details(props) {

    const { currentChar, close } = props
    const [details, setDetails] = useState(null)

    useEffect(()=>{
        axios.get('https://swapi.dev/api/people')
        .then(res => {
            setDetails(res.data)
        })
    }, [currentChar])

    return (
        <StyledDetails>
            <h2>Details of {currentChar}:</h2>
            {
                details && 
                <>
                <p>{details.name} was born in {details.birth_year}</p>
                <p>{details.name} weighs {details.mass} pounds</p>
                <p>{details.name} is {details.height} inches tall</p>
                <p>{details.name} has {details.hair_color} hair</p>
                <p>{details.name} has {details.eye_color} eye</p> 
                </>
            }
            <button onClick={close}>Close</button>
        </StyledDetails>
    )
}