import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { logout } from "../reducers/loginReducer"

import { NavBar, NavLink, LoggedIn, LogOutButton, ButtonSpan } from "./style"
import { Container } from "@material-ui/core"

const Navigation = props => {
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
