import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background: #d3cfce;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.button`
  margin-left: 1rem;
  background-color: transparent;
  border: 1px solid #d3cfce;
`

export const List = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Link = styled(NavLink)`
  margin-right: 1rem;
  margin-left: 0.5rem;
  text-decoration: none;
  color: black;
  &.active {
    color: #0586b6;
  }
`

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const User = styled.img`
  padding: 0.5rem 1rem;
  width: 3rem;
`
