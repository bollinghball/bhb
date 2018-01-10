import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Grid, GridItem } from './Grid';
import Background from '../images/Can-Crusher-Product-Image.jpg';

const CardList = styled(Grid)`
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;
`;

const gridBreakpoints = [
    { size: "600px", cols: 3 },
    { size: "960px", cols: 4 },
    { size: "1100px", cols: 5 }
];

const StyledCard = styled.div`
    background-color: #ddd;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: cover;
    height: 15rem;
    padding: 2rem;

    &:hover {
      }
`;

const CardContent = styled.div`
    margin-top: 2rem;

    
`;

const Heading = styled.h1``;

const Description = styled.p`
    margin-bottom: 3rem;
`;

const Button = styled.a`
    background-color: blue;
    border-radius: 5px;
    color: #fff;
    margin-right: 2rem;
    padding: 1rem;
    text-decorcation: none;

    &:last-child {
        margin-right: 0;
    }
`;

export default class extends React.Component {
    render() {
        return (
            <CardList className="cardList">
                <GridItem breakpoints={gridBreakpoints}>
                <StyledCard>
                    <CardContent>
                        <Heading>RumbleLab</Heading>
                        <Description>My work doing this, this, and this</Description>
                        <Button>Link to Repo</Button>
                        <Button>Link to Live Site</Button>
                    </CardContent>
                </StyledCard>
                </GridItem>
                <GridItem breakpoints={gridBreakpoints}>
                <StyledCard>
                    <CardContent>
                        <Heading>RumbleLab</Heading>
                        <Description>My work doing this, this, and this</Description>
                        <Button>Link to Repo</Button>
                        <Button>Link to Live Site</Button>
                    </CardContent>
                </StyledCard>
                </GridItem>
                <GridItem breakpoints={gridBreakpoints}>
                <StyledCard>
                    <CardContent>
                        <Heading>RumbleLab</Heading>
                        <Description>My work doing this, this, and this</Description>
                        <Button>Link to Repo</Button>
                        <Button>Link to Live Site</Button>
                    </CardContent>
                </StyledCard>
                </GridItem>
                <GridItem breakpoints={gridBreakpoints}>
                <StyledCard>
                    <CardContent>
                        <Heading>RumbleLab</Heading>
                        <Description>My work doing this, this, and this</Description>
                        <Button>Link to Repo</Button>
                        <Button>Link to Live Site</Button>
                    </CardContent>
                </StyledCard>
                </GridItem>
                <GridItem breakpoints={gridBreakpoints}>
                <StyledCard>
                    <CardContent>
                        <Heading>RumbleLab</Heading>
                        <Description>My work doing this, this, and this</Description>
                        <Button>Link to Repo</Button>
                        <Button>Link to Live Site</Button>
                    </CardContent>
                </StyledCard>
                </GridItem>
                <GridItem breakpoints={gridBreakpoints}>
                <StyledCard>
                    <CardContent>
                        <Heading>RumbleLab</Heading>
                        <Description>My work doing this, this, and this</Description>
                        <Button>Link to Repo</Button>
                        <Button>Link to Live Site</Button>
                    </CardContent>
                </StyledCard>
                </GridItem>
            </CardList>
        );
    }
}