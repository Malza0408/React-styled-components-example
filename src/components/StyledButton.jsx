import styled, { css } from 'styled-components';

// styled-components 에 의해서 style 이 먹혀진 button 을 가져오라. 
// styled.사용하려는 태그이름
const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  ${props => props.primary && 
  css`
  background: palevioletred;
  color: white;
  `}
`;

export default StyledButton;