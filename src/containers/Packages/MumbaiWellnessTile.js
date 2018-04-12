import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-static'
import ButtonBase from 'material-ui/ButtonBase'
import Box from 'grommet/components/Box'
import Footer from 'grommet/components/Footer'
import Card from 'grommet/components/Card'
import Section from 'grommet/components/Section'
import Typography from 'material-ui/Typography'



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
})

const images = [
  {
    url: 'http://localhost:3000/wealth_banner.png',
    title: 'Health is Wealth',
    width: '40%',
    linkUrl: 'businesshealth',
  },
  {
    url: 'http://localhost:3000/leisure_banner.png',
    title: 'Health-eisure',
    width: '30%',
    linkUrl: 'delhiagra',
  },
  {
    url: 'http://localhost:3000/wellness_banner.png',
    title: 'Health + Wellness',
    width: '30%',
    linkUrl: 'wellness',
  },
]

function MumbaiWellnessTile (props) {
  const { classes } = props

  return (

    <Card
      contentPad="large"
      separator="right"
      basis="1/2"
    >
      <Link to="wellness">
        <ButtonBase
          focusRipple
          key="Health + Wellness"
          className={classes.image}
          style={{
            // backgroundImage: `url(${image.url})`,
            width: '100%',
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              // backgroundImage: `url(${image.url})`,
              backgroundImage: 'url(http://www.magnusmedi.com/wellness_banner.png)',
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subheading"
              color="inherit"
              className={classes.imageTitle}
            >
              <strong>Health + Wellness</strong>
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      </Link>
    </Card>
  )
}

MumbaiWellnessTile.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MumbaiWellnessTile)
