import React, { Component } from 'react';
import styled from 'styled-components';
import {Container} from './Container';

import photo from '../images/face.jpg';
import {TopImage} from './TopImage';

const StyledBanner = styled.div`
    display: flex;
    justify-content: space-around;
`;

class Banner extends Component {
    render() {
        return(
            <StyledBanner>
                <TopImage img={photo}/>
                <div>
                    <h1>Heading</h1>
                    <h2>Subheading</h2>
                </div>
            </StyledBanner>
        );
    }
}

export default Banner;