import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '1px',
      width: '100%',
      borderStyle: 'solid',
    },
  },
  divelement: {
    border: '0.1rem outset',

    borderRadius: '2px',

    padding: '5rem',
    outlineOffset: '0.5rem',
    margin: 'auto',
    marginTop: '150px',
    width: '40%',
    textAlign: 'center',
  },
  signup: {
    border: '0.1rem outset',

    borderRadius: '2px',
    textAlign: 'center',
    padding: '1rem 5.3rem 4rem',
    outlineOffset: '0.5rem',
    margin: 'auto',
    marginTop: '10px',
    width: '40%',
    height: '10%',
  },
}))

const LoginForm = ({
  handleUsernameChange,
  handlePasswordChange,
  username,
  password,
  handleLogin,
  errors,
}) => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <Grid container spacing={2}>
      <div className={classes.divelement}>
        <Grid item xs={12}>
          <h1>Maintenance order</h1>
          <p>Login to view maintenance order form</p>
        </Grid>

        <Grid item xs={12}>
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl variant="outlined">
              <InputLabel htmlFor="component-outlined">Username</InputLabel>
              <OutlinedInput
                id="component-outlined"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                label="Username"
              />
            </FormControl>

            <FormControl variant="outlined" error={errors}>
              <InputLabel htmlFor="component-outlined">Password</InputLabel>
              <OutlinedInput
                id="component-outlined"
                type="text"
                value={password}
                onChange={handlePasswordChange}
                label="Password"
                aria-describedby="component-error-text"
              />
              <FormHelperText id="component-error-text">{errors}</FormHelperText>
            </FormControl>

            <Button color="primary" variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </form>
        </Grid>
      </div>
      <Grid item xs={12}>
        <div className={classes.signup}>
          <p>
            Don't have an account ?{' '}
            <Button
              color="primary"
              onClick={() => {
                history.push('/signup')
              }}
            >
              Sign UP
            </Button>{' '}
          </p>
        </div>
      </Grid>
    </Grid>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

export default LoginForm

/*
return(
<div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input type="text" value={username} name="Username" onChange={handleUsernameChange} />
        </div>
        <div>
          password
          <input type="text" value={password} name="Password" onChange={handlePasswordChange} />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
    )
*/
