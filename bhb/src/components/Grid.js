import React from 'react';
import styled from 'styled-components';

const DEFAULT_BREAKPOINTS = [
    { size: "600px", cols: 3 }
];
const DEFAULT_GUTTER = "20px";
let gutter;

const StyledGrid = styled.div`
    @media (min-width: ${props => props.breakpoints[0].size}) {
        align-items: stretch;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
`;

const StyledGridItem = styled.div`
    margin-top: ${props => props.gutter};

    &:first-child {
        margin-top: 0;
    }

    @media (min-width: ${props => props.breakpoints[0].size}) {
        flex-basis: calc(${props => 100/props.breakpoints[0].cols}% - ${props => props.gutter} + (${props => props.gutter}/${props => props.breakpoints[0].cols}));
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        /* margin-right: ${props => props.gutter}; */
        width: calc(${props => 100/props.breakpoints[0].cols}% - ${props => props.gutter} + (${props => props.gutter}/${props => props.breakpoints[0].cols}));

        &:last-child {
            margin-right: 0;
        }

        &:nth-child(${props => props.breakpoints[0].cols}n) {
            margin-right: 0;
        }

        &:nth-child(-n+${props => props.breakpoints[0].cols}) {
            margin-top: 0;
        }
    }
`;

export const Grid = (props) => {
    const breakpoints = props.breakpoints || DEFAULT_BREAKPOINTS;
    const gutter = props.gutter || DEFAULT_GUTTER;

    return <StyledGrid className={props.className} breakpoints={breakpoints}>{props.children}</StyledGrid>;
};

export const GridItem = (props) => {
    const breakpoints = props.breakpoints || DEFAULT_BREAKPOINTS;
    const gutter = props.gutter || DEFAULT_GUTTER;

    return <StyledGridItem className={props.className} gutter={gutter} breakpoints={breakpoints}>{props.children}</StyledGridItem>;
}

export default (props) => {
    return { Grid, GridItem };
};