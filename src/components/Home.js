import React from 'react'
import { useHistory } from 'react-router-dom'
import { purple } from '@material-ui/core/colors'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
const Image = require('../Images/image2.jpg')

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button)

const divStyle = {
  width: '100%',
  height: '700px',
  backgroundImage: `url(${Image})`,
  backgroundSize: 'cover',
}

const useStyles = makeStyles(() => ({
  alignItemsAndJustifyContent: {
    fontFamily: 'Libre Baskerville serif',
    fontWeight: '700',
    fontSize: '50px',
    alignItems: 'center',
    textTransform: 'uppercase',

    color: '#ba000d  ',
    textAlign: 'center',
  },
  gridLayout: {
    marginTop: '100px',
    height: '300px',
    width: '900px',
    direction: 'column',
    alignItems: 'center',
  },
}))

const Home = () => {
  const styles = useStyles()
  const history = useHistory()
  return (
    <div style={divStyle}>
      <Grid container direction="column" justify="flex-end" alignItems="center" spacing={1}>
        <Grid item xs={8} sm={6} className={styles.gridLayout}>
          <h1 className={styles.alignItemsAndJustifyContent}>Bike service & repair</h1>
        </Grid>
        <Grid item xs={8}>
          <ColorButton
            onClick={() => {
              history.push('/login')
            }}
            variant="contained"
            color="primary"
          >
            Online Maintenance Order
          </ColorButton>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
