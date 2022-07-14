import { ReactNode } from 'react';
import NavLink from './NavLink';

import { Container } from './styles';

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projects" path="/projetos" includes />
      </ul>
    </Container>
  );
}
