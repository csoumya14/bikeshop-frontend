import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import RoomIcon from '@material-ui/icons/Room'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import PhoneIcon from '@material-ui/icons/Phone'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  listItemPrimary: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '32px',
  },
  listItemSecondary: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '22px',
  },

  root: {
    backgroundColor: 'grey',
    alignItems: 'center',
  },
}))

const Contact = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 className={classes.heading}>
            Contact Us
            <br />
            <DirectionsBikeIcon />
          </h1>
        </Grid>
        <Grid item xs={12}>
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <RoomIcon style={{ color: 'red', marginRight: '10px' }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="326 Lorem 9th Ipsum"
                secondary="Oslo, 4545"
                classes={{ primary: classes.listItemPrimary, secondary: classes.listItemSecondary }}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AccessTimeIcon style={{ color: 'red', marginRight: '10px' }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Working hours: "
                secondary="Monday - Friday 9.00 am - 7.00 pm Saturday 9.00 am - 4.00 pm"
                classes={{ primary: classes.listItemPrimary, secondary: classes.listItemSecondary }}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AlternateEmailIcon style={{ color: 'red', marginRight: '10px' }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="info@example.com"
                classes={{ primary: classes.listItemPrimary }}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneIcon style={{ color: 'red', marginRight: '10px' }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="566646466" classes={{ primary: classes.listItemPrimary }} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact
