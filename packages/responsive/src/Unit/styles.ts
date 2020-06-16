import styled from 'styled-components';

interface ContainerProps {
  responsiveness: string;
}

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  max-width: 100%;

  ${(props) => props.responsiveness}
`;
