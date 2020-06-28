import styled from 'styled-components';

interface ContainerProps {
  responsiveness: string;
}

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  width: 100%;

  ${(props) => props.responsiveness}
`;
