import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTopImage = styled.img`
    height: 20rem;
    width: 15rem;
`;

export const TopImage = props =>
    <StyledTopImage src={props.img} alt="Bolling photo"/>

export default {TopImage};