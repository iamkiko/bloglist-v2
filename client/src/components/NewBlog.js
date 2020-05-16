import React from "react"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { ActionButton, Input } from "./style"

const NewBlog = ({
  author,
  title,
  url,
  addBlog,
  newBlogRef,
  toggleVisibility,
}) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {" "}
        Create New Blog{" "}
      </Typography>

      <form onSubmit={addBlog} ref={newBlogRef}>
        <div>
          <Typography gutterBottom>
            Title:
            <Input id="title" {...title} reset={null} />
          </Typography>
        </div>
        <div>
          <Typography gutterBottom>
            Author:
            <Input id="author" {...author} reset={null} />
          </Typography>
        </div>
        <div>
          <Typography gutterBottom>
            URL:
            <Input id="url" {...url} reset={null} />
          </Typography>
        </div>
        <ActionButton
          variant="contained"
          size="small"
          type="submit"
          data-cy="createblog"
        >
          Create
        </ActionButton>
      </form>
    </div>
  )
}

NewBlog.propTypes = {
  addBlog: PropTypes.func.isRequired,
}

export default NewBlog
