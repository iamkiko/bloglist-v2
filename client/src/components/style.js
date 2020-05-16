import styled, { createGlobalStyle, css } from "styled-components"
import { Link } from "react-router-dom"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"

createGlobalStyle`
      @import url('https://fonts.googleapis.com/css?family=Ubuntu');
  * {
      font-family: 'Ubuntu', sans-serif;
      position: relative;
  }
`

//Login page
export const CenteredBox = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #0b4f71;
  background: #ebf8ff;
  border: none;
  border-radius: 3px;
`

export const LoginInstructions = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #616e7c;
`

export const ActionButton = styled(Button)`
  margin-left: 2rem;
  background-color: #57ae5b;
  color: #fff;

  &:hover {
    background-color: #207227;
  }
`
export const LoginButtonSpan = styled.span`
  display: flex;
  justify-content: center;
`

//Blog header
export const BlogHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`
//Add new blog
export const BlogDiv = styled.div`
  display: flex;
  margin-left: 2rem;
  /* justify-content: space-evenly; */
  width: 100%;
`

export const CreateButton = styled(Button)`
  background-color: #57ae5b;
  color: #fff;

  &:hover {
    background-color: #207227;
  }
`

export const CommentButton = styled(Button)`
  background-color: #57ae5b;
  color: #fff;
  margin-bottom: 2rem;

  &:hover {
    background-color: #207227;
  }
`
export const CancelButton = styled(Button)`
  margin-top: 0.5rem;
`

//Blog render on main page
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

//Individual blogs
export const CommentContainer = styled.div`
  height: 32px;
  border-radius: 5px;
  background-color: #f0f0f8;
  padding: 10px 10px 0 10px;
  width: 250px;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: Ubuntu, sans-serif;
  box-shadow: 8px 13px 18px rgba(7, 0, 37, 0.05);
`
export const TextAreaInput = styled.textarea`
  border: none;
  outline: none;
  border-radius: 4px 4px 4px 4px;
  background-color: #ffffff;
  box-shadow: inset 0 2px 4px 0 rgba(65, 65, 96, 0.15);
  width: 40%;
  height: 40%;
  resize: none;
  overflow: auto;
  padding: 10px 15px;
  font-size: 15px;
  color: #0b4f71;
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

//Users

export const UserContainer = styled.div`
  height: 32px;
  border-radius: 5px;
  padding: 10px 10px 0 30px;
  width: auto;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: Ubuntu, sans-serif;
`

export const UserPageContainer = styled.div`
  height: 32px;
  border-radius: 5px;
  margin-left: 4rem;
  padding: 10px 10px 0 30px;
  width: auto;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: Ubuntu, sans-serif;
`
