import React, { useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import { likeBlog, deleteBlog, addComment } from "../reducers/blogReducer"
import { setNotification } from "../reducers/notificationReducer"

import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
// import TextareaAutosize from "@material-ui/core/TextareaAutosize"
import Button from "@material-ui/core/Button"
import { CommentButton, TextAreaInput, CommentContainer } from "./style"

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
  Typography: {
    paddingTop: "1rem",
  },
}))

const Blog = props => {
  const classes = useStyles()
  const [formComment, setFormComment] = useState("")

  const blog = props.blog
  if (blog === undefined || !blog) {
    return null
  }

  const notify = (message, type) => {
    props.setNotification({ message, type })
    setTimeout(
      () => props.setNotification({ message: null, type: null }),
      10000,
    )
  }

  const deleteBlogFromList = blog => {
    window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)
    try {
      props.deleteBlog(blog.id)
      notify(`Blog ${blog.title} by ${blog.author} successfully removed!`)
    } catch (exception) {
      notify(`Error encountered: ${exception}`)
    }
  }

  const handleForm = event => {
    setFormComment(event.target.value)
  }

  const newComment = async event => {
    event.preventDefault()
    try {
      await props.addComment(props.blog, formComment)
      notify(`Comment added!`)
      setFormComment("")
    } catch (exception) {
      notify(`Error encountered: ${exception}`)
    }
  }

  console.log("props", props)
  const details = () => (
    <Container fixed>
      <div className="title">
        <Typography variant="h4" gutterBottom>
          {blog.title} by {blog.author}{" "}
        </Typography>
        <div className="details">
          <Typography gutterBottom>
            <a href={blog.url}>{blog.url}</a>
            <br />
            {blog.likes} likes
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              size="small"
              onClick={() => props.likeBlog(blog)}
            >
              like
            </Button>
          </Typography>
          <div>
            <Typography gutterBottom>
              added by{" "}
              <Link to={`/users/${blog.user.id}`}>{blog.user.name}</Link>
            </Typography>
          </div>
        </div>
        <div>
          {" "}
          <Typography variant="h5" gutterBottom>
            Comments
          </Typography>
          <form onSubmit={newComment}>
            <TextAreaInput
              aria-label="minimum height"
              rowsMin={3}
              id="comment"
              type="text"
              value={formComment}
              onChange={handleForm}
            />
            <CommentButton
              variant="contained"
              color="primary"
              className={classes.button}
              size="small"
              type="submit"
              data-cy="commentbutton"
            >
              Add Comment
            </CommentButton>
          </form>
          {blog.comments.map(comment => (
            <CommentContainer key={comment.id}>
              <Typography>Comment: {comment.comment}</Typography>
            </CommentContainer>
          ))}
        </div>
        <div>{userCanDelete()}</div>
      </div>
    </Container>
  )

  const userCanDelete = () => {
    if (blog.user && props.loggedId === blog.user.id) {
      return (
        <div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            size="small"
            onClick={() => deleteBlogFromList(blog)}
          >
            Delete
          </Button>
        </div>
      )
    }
  }

  return <div>{details()}</div>
}

const mapStateToProps = state => {
  return {
    loggedId: state.login.id, //need to get this to compare if user is user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    likeBlog: blog => dispatch(likeBlog(blog)),
    addComment: (blog, comment) => dispatch(addComment(blog, comment)),
    deleteBlog: blogId => dispatch(deleteBlog(blogId)),
    setNotification: (message, type) => {
      dispatch(setNotification(message, type))
    },
  }
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  likeBlog: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
