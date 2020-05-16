import React, { useState, useImperativeHandle } from "react"
// import Button from "@material-ui/core/Button"
import { ActionButton, CancelButton } from "./style"
const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? "none" : "" }
  const showWhenVisible = { display: visible ? "" : "none" }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <ActionButton
          variant="contained"
          size="small"
          onClick={toggleVisibility}
        >
          {props.buttonLabel}
        </ActionButton>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <CancelButton
          variant="contained"
          color="secondary"
          size="small"
          onClick={toggleVisibility}
        >
          Cancel
        </CancelButton>
      </div>
    </div>
  )
})

export default Togglable
