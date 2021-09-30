import styled from 'styled-components';

// attrs로 default 속성을 넣어줄 수 있다.
const StyledA = styled.a.attrs(props => ({
  target: '_blank',
  "data-malza": 'aaa',
  // google 이 아닌 naver 로 연결된다.
  href: 'https://naver.com',
}))`
  color: ${(props) => props.color};
`;

export default StyledA;