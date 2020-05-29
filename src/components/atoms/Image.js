import React from 'react';
import styled from 'styled-components';

const Container = styled.img`
  width: ${(props) => props.width};
`;

function Image({ width, image }) {
  return <Container width={width} src={image} />;
}

export default Image;
