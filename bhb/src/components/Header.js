import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    background-image: none;
    padding-bottom: 25px;
    padding-top: 25px;
`;

const StyledContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

const HomeLink = styled.a``;

const Logo = styled.img`
    width: 10rem;
`;

const BackLink = styled.a`
color: #4A4A4A;
font-size: 1.4rem;
font-weight: 600;
text-decoration: none;

&::before {
    content: "‹";
    margin-right: 0.5rem;
    vertical-align: text-bottom;
}
`;

export default(props) => {
    return (
        <Header className="header">
            <StyledContainer>
                <HomeLink href={props.url}>
                    <Logo src={props.img} alt="Bolling logo" />
                </HomeLink>
                {
                    props.homepage ?
                    null :
                    <BackLink href="#">Back</BackLink>
                }
            </StyledContainer>
        </Header>
    );
};