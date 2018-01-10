import React, { Component } from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
    background-color: #333;
    color: #fff;
    margin-left: auto;
    margin-right: auto;
    max-width: 1900px;
    padding-bottom: 2rem;
    padding-top: 2rem;
    text-align: center;
`;

const Description = styled.p`
    font-weight: 300;
    line-height: 1.5rem;
    margin-left: 2rem;
    margin-right: 2rem;

`;

export const About = props =>
    <StyledAbout>
        <Description>While I'm a serious book nerd, my day job consists of front-end development with a ting of design and UX work from time to time. Living in my hometown of Columbia, SC I try and take advantage of being halfway to the mountains and the beach. But mostly the mountains.</Description>
    </StyledAbout>

export default {About};