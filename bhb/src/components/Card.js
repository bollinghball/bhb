import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    border: 3px solid #333;
`;

const Heading = styled.h1``;

const Description = styled.p``;

const Button = styled.a`
    background-color: blue;
    color: #fff;
    text-decorcation: none;
`;

class Card extends Component {
    render() {
        return(
            <StyledCard>
                <Heading>RumbleLab</Heading>
                <Description>My work doing this, this, and this</Description>
                <Button>Link to Repo</Button>
                <Button>Link to Live Site</Button>
            </StyledCard>
        );
    }
}

export default Card;