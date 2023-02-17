import styled from 'styled-components';
const { NavLink } = require('react-router-dom');

export const Link = styled(NavLink)`
  display: inline-block;
  color: black;
  text-decoration: none;

  &.active {
    color: orangered;
  }
`;
