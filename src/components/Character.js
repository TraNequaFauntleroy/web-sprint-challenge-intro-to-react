// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const StyledChar = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 2%;
    padding: 8px;
    align-items: center;
    font-size: 18px;
    border: .05px solid ${pr => pr.theme.secondaryColor};
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.white};
    

    button {
        display: flex-end;
        font-size: 18px;
        border: 0px;
        border-radius: 10%;
    }
`

const Character = props => {
    return (
        <StyledChar>
            {props.info.name}
            <button>{props.info['birth_year']}</button>
        </StyledChar>
        
    )
}

export default Character;

