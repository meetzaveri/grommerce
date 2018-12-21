import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${props => props.size};
  margin: ${props => props.margin};
  font-weight: ${props => props.weight};
`;
export default Paragraph;
