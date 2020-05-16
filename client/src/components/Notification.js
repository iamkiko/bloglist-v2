import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const Notification = ({ message, type }) => {
  if (message === undefined || !message) {
    return null
  }

  const notificationStyle = {
    color: type === "error" ? "#f50057" : "#147d64",
    background: "#E3F9E5",
    fontSize: 20,
    fontFamily: ["sansSerif"],
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    textAlign: "center",
  }

  let displayStyle = null
  type === "error"
    ? (displayStyle = {
        ...notificationStyle,
        color: "#f50057",
        fontFamily: ["Ubuntu"],
        background: "#FFE3E3",
      })
    : (displayStyle = {
        ...notificationStyle,
        color: "#147d64",
        fontFamily: ["Ubuntu"],
        background: "#E3F9E5",
      })

  return <div style={displayStyle}>{message}</div>
}

const mapStateToProps = state => {
  return {
    message: state.notification.message,
    type: state.notification.type,
  }
}

Notification.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
}
export default connect(mapStateToProps)(Notification)
