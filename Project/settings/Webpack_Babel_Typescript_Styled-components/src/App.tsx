import styled from 'styled-components';

interface TextType {
  Webpack: string;
  Babel: string;
  TyepScript: string;
  StyledComponents: string;
}

const App = () => {
  console.log(1);

  return <Text>Hello Webpack,Babel,TypeScript,Styled-components</Text>;
};

const Text = styled.h1`
  font-size: 40px;
  color: blue;
`;

export default App;
