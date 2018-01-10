import React, { Component } from 'react';
import styled from 'styled-components';
import {About} from './About';
import Banner from './Banner';
import CardList from './CardList';


const StyledPageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: auto;
    margin-right: auto;
    max-width: 1170px;
    min-height: 75vh;
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
                <CardList />
            </StyledPageContent>
        );
    }
}

export default PageContent;