import React from "react"
import { BlogContainer, ParentContainer, StyledLink } from "./style"

const BlogOverview = ({ blog }) => {
  return (
    <ParentContainer>
      <div>
        <BlogContainer>
          <StyledLink to={`blogs/${blog.id}`}>
            {blog.title} ({blog.author})
          </StyledLink>
        </BlogContainer>
      </div>
    </ParentContainer>
  )
}

export default BlogOverview
