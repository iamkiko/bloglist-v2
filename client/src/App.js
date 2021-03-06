import React, { useEffect } from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"

import loginService from "./services/login"

import Notification from "./components/Notification"
import Navigation from "./components/Navigation"
import BlogList from "./components/BlogList"
import Blog from "./components/Blog"
import Togglable from "./components/Togglable"
import NewBlog from "./components/NewBlog"
import UserList from "./components/UserList"
import User from "./components/User"

import { useField } from "./hooks"

import { setNotification } from "./reducers/notificationReducer"
import { initializeBlogs, createBlog } from "./reducers/blogReducer"
import { setUser, setToken } from "./reducers/loginReducer"
import { initializeUsers } from "./reducers/userReducer"

import {
  CenteredBox,
  Input,
  LoginInstructions,
  ActionButton,
  LoginButtonSpan,
  BlogHeader,
} from "../src/components/style"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
    alignContent: "center",
  },
  input: {
    display: "none",
  },
}))

const App = props => {
  const classes = useStyles()

  //React internal state
  const [username, usernameReset] = useField("text")
  const [password, passwordReset] = useField("password")

  const [title, titleReset] = useField("text")
  const [author, authorReset] = useField("text")
  const [url, urlReset] = useField("text")
  // const [blogs, setBlogs] = useState([])

  const getBlogs = props.initializeBlogs
  const getUsers = props.initializeUsers

  //getting blogs
  useEffect(() => {
    getBlogs()
  }, [getBlogs])

  //getting users
  useEffect(() => {
    getUsers()
  }, [getUsers])

  //action for logged in
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      props.setUser(user)
      props.setToken(user.token)
    }
  }, [])

  //ACTIONS/FUNCTIONS

  //setNotification function
  const notify = (message, type = "success") => {
    props.setNotification({ message, type })
    setTimeout(
      () => props.setNotification({ message: null, type: null }),
      500000,
    )
  }

  //login logic
  const handleLogin = async event => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value,
      })
      window.localStorage.setItem("loggedBlogAppUser", JSON.stringify(user))
      props.setToken(user.token)
      props.setUser(user)
      notify(`Welcome back ${user.name}`)
    } catch (exception) {
      notify("Wrong username or password", "error")
    }
  }

  //logout logic
  // const handleLogout = () => {
  //   props.logout()
  //   // blogService.destroyToken()
  //   window.localStorage.removeItem("loggedBlogAppUser")
  // }

  // adding a new blog
  const newBlogRef = React.createRef()

  const addBlog = async event => {
    event.preventDefault()
    newBlogRef.current.toggleVisibility()
    const newBlogObject = {
      title: title.value,
      author: author.value,
      url: url.value,
      id: props.id,
    }
    try {
      props.createBlog(newBlogObject)
      notify(
        `Blog ${newBlogObject.title} by ${newBlogObject.author} successfully added!`,
      )
      titleReset()
      authorReset()
      urlReset()
    } catch (error) {
      notify(`Unable to add blog. Error: ${error}`)
    }
  }

  //finding specific user to show their page
  // console.log("props.users in App.js: ", props)
  const specificUser = id => props.users.find(user => user.id === id)

  const specificBlog = id => props.blogs.find(blog => blog.id === id)

  const loginPage = () => (
    <CenteredBox>
      <Typography variant="h4" gutterBottom>
        Log in to view the blog list!
      </Typography>

      <Notification />

      <form onSubmit={handleLogin}>
        <Typography variant="h6" gutterBottom>
          <div>
            Username:
            <Input id="username" {...username} reset={null} />
          </div>
          <div>
            Password:
            <Input id="password" {...password} reset={null} />
          </div>
        </Typography>
        <LoginButtonSpan>
          <ActionButton
            variant="contained"
            // color="primary"
            // className={classes.button}
            size="small"
            type="submit"
            data-cy="login"
          >
            Log me in!
          </ActionButton>
        </LoginButtonSpan>
      </form>
      <LoginInstructions>
        {" "}
        <Typography variant="h5" gutterBottom>
          You can test it using the following details:
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Username: Guest
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Password: guest
        </Typography>
      </LoginInstructions>
    </CenteredBox>
  )

  //to go into Login.js
  if (props.username === "") {
    return loginPage()
  }

  return (
    <div>
      <Router>
        <Navigation />
        <Notification />
        <Container fixed>
          <BlogHeader>
            <Typography variant="h3" gutterBottom>
              Blog Directory
            </Typography>
          </BlogHeader>
          <div>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <Togglable buttonLabel="Add a new blog" ref={newBlogRef}>
                    <NewBlog
                      addBlog={addBlog}
                      title={title}
                      author={author}
                      url={url}
                    />
                  </Togglable>
                  <BlogList
                    blogs={props.blogs}
                    loggedInUser={props.username}
                    like={props.like}
                    remove={props.remove}
                  />
                </div>
              )}
            />
          </div>
        </Container>
        <Route exact path="/users" render={() => <UserList />} />
        <Route
          path="/users/:id"
          render={({ match }) => <User user={specificUser(match.params.id)} />}
        />
        <Route
          path="/blogs/:id"
          render={({ match }) => <Blog blog={specificBlog(match.params.id)} />}
        />
      </Router>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    users: state.users,
    username: state.login.username,
    name: state.login.name,
    id: state.login.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initializeBlogs: () => dispatch(initializeBlogs()),
    createBlog: blog => dispatch(createBlog(blog)),
    initializeUsers: () => dispatch(initializeUsers()),
    setUser: user => dispatch(setUser(user)),
    setToken: token => dispatch(setToken(token)),
    setNotification: (message, type) => {
      dispatch(setNotification(message, type))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
