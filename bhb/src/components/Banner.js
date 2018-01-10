import React, { Component } from 'react';
import styled from 'styled-components';
import {Container} from './Container';

import photo from '../images/face.jpg';
import {TopImage} from './TopImage';

const StyledBanner = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 4rem;
    margin-top: 4rem;
`;

const Title = styled.h1`
    font-weight: 300;
    margin-left: 2rem;
`;

const TitleContent = styled.div`
    box-shadow: 10px 10px 23px -4px rgba(0,0,0,0.31);
    height: 10rem;
    margin-top: 2rem;
    width: 25rem;
`;

const SubTitle = styled.h2`
    font-size: 1.2rem;
    margin: 0;
    margin-left: 2rem;
`;

class Banner extends Component {
    render() {
        return(
            <StyledBanner>
                <TopImage img={photo}/>
                <TitleContent>
                    <Title>hi, i'm bolling ball.</Title>
                    <SubTitle>yep, you read that right.</SubTitle>
                </TitleContent>
            </StyledBanner>
        );
    }
}

export default Banner;