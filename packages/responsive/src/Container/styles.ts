import styled from 'styled-components';

interface ContainerProps {
  responsiveness: string;
  isCentered?: boolean;
}

export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  margin: ${(props) => (props.isCentered ? '0 auto' : '0')};
  position: relative;
  width: 100%;

  ${(props) => props.responsiveness}
`;
