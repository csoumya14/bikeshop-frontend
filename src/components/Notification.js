import React from 'react'
import Alert from '@material-ui/lab/Alert'

const Notification = ({ message, messageType }) => {
  if (message === null || messageType === null) {
    return null
  }

  if (messageType === 'success') {
    return (
      <div>
        <Alert severity="success">{message}</Alert>
      </div>
    )
  }

  if (messageType === 'error') {
    return (
      <div>
        <Alert severity="error">{message}</Alert>
      </div>
    )
  }
}

export default Notification
