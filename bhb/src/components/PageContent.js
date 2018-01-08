import React, { Component } from 'react';
import styled from 'styled-components';
import {About} from './About';
import Banner from './Banner';
import Cards from './Cards';


const StyledPageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: auto;
    margin-right: auto;
    max-width: 1170px;
    min-height: 100vh;
    /* padding-left: 24px;
    padding-right: 24px; */

    @media screen and (min-width: 1900px) {
        overflow-x: hidden;
    }
`;


class PageContent extends Component {
    render() {
        return (
            <StyledPageContent>
                <About />
                <Cards />
            </StyledPageContent>
        );
    }
}

export default PageContent;