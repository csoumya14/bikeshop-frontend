import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = {
    display: visible ? 'none' : '',
    textAlign: 'center',
  }
  const showWhenVisible = {
    display: visible ? '' : 'none',
    textAlign: 'center',
  }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div style={hideWhenVisible}>
          <Button
            style={{ marginTop: '50px', width: '50%' }}
            color="primary"
            variant="contained"
            onClick={toggleVisibility}
          >
            {props.buttonLabel}
          </Button>
        </div>

        <div style={showWhenVisible}>
          {props.children}
          <Button
            style={{ marginTop: '10px', width: '10%' }}
            variant="outlined"
            color="secondary"
            onClick={toggleVisibility}
          >
            Hide
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}

export default Togglable
