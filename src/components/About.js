import React from 'react'
import Grid from '@material-ui/core/Grid'
import image from '../Images/image3.jpg'
import { makeStyles } from '@material-ui/core/styles'
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HighQualityIcon from '@material-ui/icons/HighQuality'
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol'
import Paper from '@material-ui/core/Paper'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike'
const divStyle = {
  width: '100%',
  height: '550px',
}

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  p1: {
    fontWeight: '500',
  },
  p2: {
    fontWeight: '200',
  },
  root: {
    flexGrow: 1,
  },
  row: {
    display: 'flex',
    marginTop: '50px',
  },
  column: {
    flex: '50%',
    padding: '100px',
    height: '100px',
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    fontWeight: '500',
    color: theme.palette.text.primary,
    width: '30%',
    height: '100%',
    marginRight: '30px',
  },

  icon1: {
    marginRight: '5px',
  },
}))

const About = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 className={classes.heading}>
            About Us
            <br />
            <DirectionsBikeIcon />
          </h1>
        </Grid>
        <Grid item xs={6}>
          <p className={classes.p1}>
            Lorem ipsum dolor sit amet, senserit evertitur deterruisset his et, an dicunt sanctus
            suscipiantur eum. Sed ne noluisse adipisci, cu usu omnes assueverit.
          </p>
          <p className={classes.p2}>
            Vel ne diceret tibique interpretaris, sed alii volutpat ut. Mel solum doctus tritani in,
            eam impetus reformidans no, et sit affert tantas maluisset. Pertinax vituperatoribus usu
            cu, eu vis eius homero iriure. Has cetero eruditi fabellas at, te nostrum fastidii qui.
            At labores disputando nam. Id aeque diceret consetetur eum, mel an ludus hendrerit
            adolescens.
          </p>
          <div className={classes.row}>
            <Paper className={classes.paper} elevation={5}>
              <AccessibilityNewIcon className={classes.icon1} /> CERTIFIED STAFF
            </Paper>

            <Paper className={classes.paper} elevation={5}>
              <AccessTimeIcon className={classes.icon1} />
              24/7 SUPPORT
            </Paper>
          </div>
          <div className={classes.row}>
            <Paper className={classes.paper} elevation={5}>
              <HighQualityIcon className={classes.icon1} />
              QUALITY SERVICE
            </Paper>

            <Paper className={classes.paper} elevation={5}>
              <EuroSymbolIcon className={classes.icon1} />
              COST EFFECTIVE
            </Paper>
          </div>
        </Grid>
        <Grid item xs={6}>
          <img src={image} alt="Logo" style={divStyle} />
        </Grid>
      </Grid>
    </div>
  )
}

export default About
