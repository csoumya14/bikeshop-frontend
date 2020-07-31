import React from 'react'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike'
import TripOriginIcon from '@material-ui/icons/TripOrigin'
import SettingsIcon from '@material-ui/icons/Settings'
import BuildIcon from '@material-ui/icons/Build'
import tileData from './TileData'

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  para: {
    textAlign: 'center',
  },
  heading2: {
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  row: {
    display: 'flex',
    marginTop: '30px',
    marginLeft: '-50px',
  },
  line: {
    width: '40px',
    height: '5px',

    borderBottom: ' 4px solid red',
    marginLeft: '60px',
  },
  paragraph: {
    padding: '10px',
  },
  shape: {
    width: '0',
    height: '0',
    border: '50px solid transparent',
    borderBottomColor: '#ba000d',
    position: 'relative',
    top: '-105px',
    left: '185px',

    '&::after': {
      content: '""',
      fontFamily: 'Material Icons',

      position: 'absolute',
      left: '-50px',
      top: '50px',
      width: '0',
      height: '0',
      border: '50px solid transparent',
      borderTopColor: '#ba000d',
    },
  },
  paper: {
    padding: theme.spacing(7),
    textAlign: 'center',
    color: theme.palette.text.primary,
    width: '100%',
    height: '100%',
    marginRight: '20px',
  },
  icon1: {
    marginTop: '28px',
    marginLeft: '-10px',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
}))

const Services = () => {
  const classes = useStyles()
  const rectangle1 = (
    <div className={classes.shape}>
      <TripOriginIcon className={classes.icon1} />
    </div>
  )
  const rectangle2 = (
    <div className={classes.shape}>
      <SettingsIcon className={classes.icon1} />
    </div>
  )
  const rectangle3 = (
    <div className={classes.shape}>
      <BuildIcon className={classes.icon1} />
    </div>
  )

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 className={classes.heading}>
            Our Services
            <br />
            <DirectionsBikeIcon />
          </h1>
          <p className={classes.para}>Has cetero eruditi fabellas at, te nostrum fastidii qui.</p>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.row}>
            {rectangle1}
            <Paper className={classes.paper} elevation={5}>
              <div className={classes.heading2}>Wheel replacement</div>
              <div className={classes.line}></div>
              <div className={classes.paragraph}>
                Lorem ipsum dolor sit amet, senserit evertitur deterruisset his et, an dicunt
                sanctus suscipiantur eum.
              </div>
            </Paper>
            {rectangle2}
            <Paper className={classes.paper} elevation={5}>
              <div className={classes.heading2}>Chain replacement</div>
              <div className={classes.line}></div>
              <div className={classes.paragraph}>
                Lorem ipsum dolor sit amet, senserit evertitur deterruisset his et, an dicunt
                sanctus suscipiantur eum.
              </div>
            </Paper>
            {rectangle3}
            <Paper className={classes.paper} elevation={5}>
              <div className={classes.heading2}>brake maintenance</div>
              <div className={classes.line}></div>
              <div className={classes.paragraph}>
                Lorem ipsum dolor sit amet, senserit evertitur deterruisset his et, an dicunt
                sanctus suscipiantur eum.
              </div>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={6}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Services
