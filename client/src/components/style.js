import styled, { createGlobalStyle, css } from "styled-components"
import { Link } from "react-router-dom"
import Container from "@material-ui/core/Container"

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
