import styled, { createGlobalStyle, css } from "styled-components"
import { Link } from "react-router-dom"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"

createGlobalStyle`
      @import url('https://fonts.googleapis.com/css?family=Ubuntu');
  * {
      font-family: 'Ubuntu', sans-serif;
  }

`

export const BlogContainer = styled.div`
  height: 32px;
  border-radius: 5px;
  background-color: #f0f0f8;
  padding: 10px 10px 0 30px;
  width: auto;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: Ubuntu, sans-serif;
  box-shadow: 8px 13px 18px rgba(7, 0, 37, 0.05);
`

export const ParentContainer = styled(Container)`
  &:nth-child(1) {
    padding-top: 25px;
  }

  &:nth-last-child(1) {
    padding-bottom: 25px;
  }
`
export const StyledLink = styled(Link)`
  color: #0a558c;
`

//Nav styling
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;
  padding-top: 1rem;
  border-radius: 5px;
  margin-top: 0;
  background-color: #f0f0f8;
  font-size: 20px;
  font-family: Ubuntu, sans-serif;
  box-shadow: 8px 13px 18px rgba(7, 0, 37, 0.05);
`
export const NavLink = styled(Link)`
  color: #0a558c;

  margin-right: 0.5rem;
  margin-left: 0.5rem;
`

export const LogOutButton = styled(Button)`
  margin-left: 30rem;
  margin-right: 1rem;
  height: 75%;
`

export const ButtonSpan = styled.span`
  display: flex;
  /* justify-content: flex-end; */
`

export const LoggedIn = styled.span`
  margin-left: 0.5rem;
  color: #147d64;
  font-weight: bold;
`
