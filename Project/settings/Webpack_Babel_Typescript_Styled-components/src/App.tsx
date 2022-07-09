import styled from 'styled-components';

interface SkillsType {
  webpack: string;
  babel: string;
  typeScript: string;
  styledComponents: string;
}

const App = () => {
  const skills: SkillsType = {
    webpack: 'Webpack',
    babel: 'Babel',
    typeScript: 'TyepScript',
    styledComponents: 'Styled-components',
  };

  return (
    <Text>
      Hello {skills.webpack},{skills.babel},{skills.typeScript},{skills.styledComponents}
    </Text>
  );
};

const Text = styled.h1`
  font-size: 40px;
  color: blue;
`;

export default App;
