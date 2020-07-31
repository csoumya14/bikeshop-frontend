import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import FormControl from '@material-ui/core/FormControl'

import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'

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
}))

const SignUpForm = ({
  fullName,
  newUserName,
  newPassword,
  newSignUp,
  handleNewUsernameChange,
  handleNewPasswordChange,
  handleFullNameChange,
}) => {
  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      <div className={classes.divelement}>
        <Grid item xs={12}>
          <h1>signup</h1>
        </Grid>

        <Grid item xs={12}>
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl variant="outlined">
              <InputLabel htmlFor="component-outlined">Username</InputLabel>
              <OutlinedInput
                id="component-outlined"
                type="text"
                value={newUserName}
                onChange={handleNewUsernameChange}
                label="Username"
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="component-outlined">FullName</InputLabel>
              <OutlinedInput
                id="component-outlined"
                type="text"
                value={fullName}
                onChange={handleFullNameChange}
                label="FullName"
              />
            </FormControl>

            <FormControl variant="outlined">
              <InputLabel htmlFor="component-outlined">Password</InputLabel>
              <OutlinedInput
                id="component-outlined"
                type="text"
                value={newPassword}
                onChange={handleNewPasswordChange}
                label="Password"
              />
            </FormControl>

            <Button color="primary" variant="contained" onClick={newSignUp}>
              Sign Up
            </Button>
          </form>
        </Grid>
      </div>
    </Grid>
  )
}

export default SignUpForm
