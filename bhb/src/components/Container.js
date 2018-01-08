import React, { Component } from 'react';
import styled from 'styled-components';

import Banner from './Banner';

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

// export const Container = props =>
//     <StyledContainer />

// export default {Container};

export default class Container extends React.Component {
    render() {
        return (
            <StyledContainer className="container">
                <Banner />
            </StyledContainer>
        );
    }
}