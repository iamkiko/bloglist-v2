import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import { CommentContainer, UserPageContainer, StyledLink } from "./style"

const User = ({ user }) => {
  //conditional to check if user exists?

  if (user === undefined || !user) {
    return null
  }

  return (
    <UserPageContainer>
      <Typography variant="h3" gutterBottom>
        {user.name}{" "}
      </Typography>
      <Typography variant="h5" gutterBottom mb={2}>
        has added the following blogs:{" "}
      </Typography>
      {user.blogs.map(blog => (
        <CommentContainer key={blog.id}>
          <StyledLink to={`/blogs/${blog.id}`}>
            <Typography>{blog.title}</Typography>
          </StyledLink>
        </CommentContainer>
      ))}
    </UserPageContainer>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User
