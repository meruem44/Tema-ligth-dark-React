import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

interface props {
    toggleTheme(): void;
}

const Header: React.FC<props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

  return (
      <Container>
          Estudando Temas React

          <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            width={40}
            handleDiameter={20}
            offColor={shade(0.1, colors.primary)}
            onColor={colors.secundary}
          />
      </Container>
  );
}

export default Header;