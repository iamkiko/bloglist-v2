import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import { logout } from "../reducers/loginReducer"

import Typography from "@material-ui/core/Typography"
import { NavBar, NavLink, LoggedIn, LogOutButton, ButtonSpan } from "./style"
import { makeStyles } from "@material-ui/core/styles"
import { Container } from "@material-ui/core"

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }))

const Navigation = props => {
  // const classes = useStyles()

  // const navStyle = {
  //   backgroundColor: "#F8F8F8",
  //   padding: ".5rem",
  // }

  const handleLogout = () => {
    props.logout()
    // blogService.destroyToken()
    window.localStorage.removeItem("loggedBlogAppUser")
  }

  return (
    <Container fixed>
      <NavBar>
        <div>
          <NavLink to="/">Blogs</NavLink> {" - "}{" "}
          <NavLink to="/Users"> Users</NavLink>
        </div>
        {props.currentUser && (
          <>
            <div>
              <LoggedIn>{props.currentUser.name}</LoggedIn> is currently logged
              in
            </div>
            <LogOutButton
              variant="contained"
              color="secondary"
              size="small"
              onClick={handleLogout}
              data-cy="logout"
            >
              Log out
            </LogOutButton>
          </>
        )}
      </NavBar>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.login,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  }
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
