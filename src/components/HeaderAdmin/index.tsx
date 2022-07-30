import { ReactNode } from 'react';
import NavLink from './NavLink';

import { Container } from './styles';

interface HeaderProps {
  children: ReactNode;
}

export function HeaderAdmin({ children }: HeaderProps) {
  return (
    <Container>
      <ul>
        <NavLink title="" path="/" />
        <NavLink title="Dashboard" path="/admin" />
        <NavLink title="New Project" path="/" />
        <NavLink title="Projects" path="/projects" includes />
        <NavLink title="Logout" path="/contact" handler />

      </ul>
    </Container>
  );
}