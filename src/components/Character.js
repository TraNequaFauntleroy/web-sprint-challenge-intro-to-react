// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const StyledChar = styled.div`
     width: 60%;
    display: flex;
    justify-content: space-between;
    margin: 4px 0 4px 0;
    padding: 8px;
`

const Character = props => {
    return (
        <StyledChar>
            {props.info.name}
            <button onClick={()=> props.openDetails(props.info.id)}>See Details</button>
        </StyledChar>
        
    )
}

export default Character;

