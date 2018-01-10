import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    background-image: none;
    padding-bottom: 25px;
    padding-top: 25px;
`;

const FooterListContainer = styled.div `
`;

const FooterList = styled.ul`
    display: flex;
    justify-content: space-around;
    
`;

const FooterItem = styled.li `
    list-style-type: none;

`;

const StyledContainer = styled.div`
    margin: 0 auto;
    max-width: 50rem;
`;

const HomeLink = styled.a``;

const HomeLinkContainer = styled.div`
    display: flex;
    justify-content: center;
`;

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
        <Footer className="footer">
            <StyledContainer>
                <HomeLinkContainer>
                    <HomeLink href={props.url}>
                        <Logo src={props.img} alt="Bolling logo" />
                    </HomeLink>
                    {
                        props.homepage ?
                        null :
                        <BackLink href="#">Back</BackLink>
                    }
                </HomeLinkContainer>
                <FooterListContainer>
                    <FooterList>
                        <FooterItem>
                            <a>WORK</a>
                        </FooterItem>
                        <FooterItem>
                            <a>ABOUT</a>
                        </FooterItem>
                        <FooterItem>
                            <a>CONTACT</a>
                        </FooterItem>
                    </FooterList>
                </FooterListContainer>
            </StyledContainer>
        </Footer>
    );
};