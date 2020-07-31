import React from 'react'
import { Toolbar, Button, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',

    height: 48,
    alignSelf: 'right',
  },
  root1: {
    marginLeft: 'auto',
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(0),
  },
}))

const Menu = ({ customer, handleLogout }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.control}>
      <AppBar position="static">
        <Toolbar>
          <Grid item>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
          </Grid>
          <Grid item>
            <Button color="inherit" component={Link} to="/aboutUs">
              About Us
            </Button>
          </Grid>
          <Grid item>
            <Button color="inherit" component={Link} to="/services">
              Services
            </Button>
          </Grid>
          <Grid item>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </Grid>
          {customer ? (
            <div className={classes.root1}>
              <em>{customer.name} logged in</em>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <Grid item className={classes.root1}>
              <Button color="inherit" component={Link} to="/login">
                Online Maintenance Order
              </Button>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Grid>
  )
}

export default Menu
