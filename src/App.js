import React from 'react'

import theme from './theme.js'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SearchIcon from '@material-ui/icons/Search';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import MicIcon from '@material-ui/icons/Mic';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoCallIcon from '@material-ui/icons/VideoCall';

import { Avatar, Icon, SvgIcon, TextField, Button, ButtonGroup, IconButton, Tooltip, Grid, Chip } from '@material-ui/core'

import PreviewCard from './components/PreviewCard.jsx'
import { ReactComponent as StreamingIcon } from './icons/streaming_icon.svg'


import {footer, chipList, routeGroups} from './dataTest'


const drawerWidth = 260;

const useStyles = makeStyles(() => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(56,56,56,.8)',
      outline: '1px solid slategrey',
      borderRadius: '10px',
      height: '20%'
    },
  },
  root: {
    display: 'flex',
  },
  appBar: {
    background: 'rgba(32, 32, 32, 0.95)',
    zIndex: theme.zIndex.drawer + 1,
    width: '100%',
    top: 0,
    left: 0,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 10,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    borderRight: 'none',
    ['& slide']: {
      borderRight: 'none'
    },
  },
  paper: {
    borderRight: 'none',
    position: 'fixed',
    top: 'auto',
    paddingBottom: '5%'
  },
  '@media screen and (max-width: 600px)': {
    drawer: {
      display: 'none',
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: '80px ' + theme.spacing(3) + 'px',
  },
  imageIcon: {
    height: '25px'
  },
  iconRoot: {
    textAlign: 'center'
  },
  searchField: {
    ['& input']: {
      padding: '3px 10px',
      height: '30px',
      width: '30vw',
      background: theme.palette.background.default,
    },

    [`& fieldset`]: {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0
    },

    ['& hover']: {
      border: 'none'
    }
  },
  searchButton: {
    background: '#313131',
    height: '36px',
    bordeLeft: "none",
    color: "#606060",
    '&:hover': {
      backgroundColor: '#313131',
      boxShadow: 'none',
      color: '#909090'
    }
  },
  text: {
    margin: '5% 5%',
    display: 'block'
  },
  divider: {
    margin: '2% 5% 3% 0'
  },
  a: {
    color: "#929292",
    fontWeight: '600',
    textDecoration: 'none',
    display: 'block'
  },
  drawerContainer: { margin: '5% 16px' },
  appBarFit: {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(9) + 1,
    },
  },
  chipsContainer: {
    height: '56px',
    background: 'rgba(32, 32, 32, 0.95)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 30px',
    border: '1px solid rgba(255,255,255,0.1)',
    borderLeft: 'none',
    borderRight: 'none',
    zIndex: '2',
    
  }
}));




function App() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={open ? handleDrawerClose : handleDrawerOpen}
              edge="start"
              className={classes.menuButton}
            ><MenuIcon /></IconButton>
            <div className={classes.toolbar}>

              <img className={classes.imageIcon} src={"images/youtube-icon.svg"} />
              <div>
                <ButtonGroup disableElevation>
                  <TextField className={classes.searchField}
                    id="searchField"
                    color="secondary"
                    placeholder="Buscar"
                    variant="outlined"
                  />
                  <Button className={classes.searchButton} variant="contained" >
                    <SearchIcon />
                  </Button>

                </ButtonGroup>
                <Tooltip title="Haz búsquedas por voz">
                  <IconButton>
                    <MicIcon />
                  </IconButton>
                </Tooltip>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Crear">
                  <IconButton>
                    <VideoCallIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Aplicaciones de YouTube">
                  <IconButton>
                    <AppsIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Notificaciones">
                  <IconButton>
                    <NotificationsIcon />
                  </IconButton>
                </Tooltip>
                <Avatar>E</Avatar>
              </div>
            </div>

          </Toolbar>



        </AppBar>

        <div>
          <div className={classes.toolbar} >
          </div>

          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx(classes.paper, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <List>
              {
                routeGroups.map(routeGroup => (
                  <NavItems routeGroup={routeGroup} open={open} />
                ))
              }
            </List>
            {
              open &&
              <div className={classes.drawerContainer}>
                {
                  footer.map(footerItems => (
                    footerItems.map(item =>
                      <a className={classes.a} href={item.url}>{item.name}</a>
                    )
                  ))
                }
                <p style={{ fontWeight: 200 }}>© 2021 Google LLC</p>
              </div>
            }


          </Drawer>

        </div>


        <main >
          <div className={clsx(classes.appBar, { [classes.appBarShift]: open,
                                                  [classes.appBarFit]: !open })}
            style={{ position: "fixed", zIndex: 2, background: 'none' }}>
            <div className={classes.toolbar} />
            <div className={clsx(classes.chipsContainer)} >

              {chipList.map(chipItem =>
                <Chip label={chipItem.name}
                  component="a"
                  href="#chip"
                  clickable
                  style={{marginLeft: '5px'}}
                  />
              )}
               
            </div>
          </div>

          <div className={classes.content}>
            <div className={classes.toolbar} />
            <Grid xs={12} direction='row' container spacing={2} justify="flex-start">
              {
                [...Array(20).keys()].map(item =>
                  <Grid item xl={3} lg={4} md={4} sm={6} xs={12} >
                    <PreviewCard
                      videoImg="https://i.ytimg.com/vi/nsHRc8tUIK0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-Te-F216hloej-awOneOVkI-WlQ"
                      time="3:12"
                      progress={0}
                      title="OMIDO - LSD (ft. palfii) (Official Music Video)"
                      channelName="Trap Station"
                      channelImg="https://yt3.ggpht.com/ytc/AAUvwni2J7CPzmLvcuURRHJLqF5JRa3olKu-rrDu1y_TUg=s68-c-k-c0x00ffffff-no-rj"
                      channelUrl="https://www.youtube.com/user/TRAPSTATlON"
                      timeAgo="1 año"
                      verified
                      views="7,2M"
                    />
                  </Grid>)
              }

            </Grid>

          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;


function NavItems({ open, routeGroup }) {
  const [showingAll, setShowingAll] = React.useState(false)
  const classes = useStyles()

  const maxItems = routeGroup.max || Number.POSITIVE_INIFINITY
  const overItems = routeGroup.items.length - maxItems

  return (

    <>
      {(routeGroup.name && open) && <Typography className={classes.text} variant="p">{routeGroup.name}</Typography>}

      {
        routeGroup.items.map((route, index) => (
          (open || route.onClose) &&
          <Tooltip title={open ? '' : route.name}>
            <ListItem
              style={{ display: (index + 1 > maxItems) && (!showingAll) ? 'none' : 'flex' }}
              button
              key={route.name}>
              <ListItemIcon>{route.icon && route.icon}</ListItemIcon>
              <ListItemText >{route.name}</ListItemText>
              {
                (route.streaming || route.newContent) &&
                <ListItemIcon style={{ justifyContent: 'center' }}>
                  <SvgIcon
                    fontSize="small"
                    color={route.streaming ? 'primary' : 'secondary'}
                    component={route.streaming ? StreamingIcon : FiberManualRecordIcon}
                  >
                  </SvgIcon>
                </ListItemIcon>
              }

            </ListItem>
          </Tooltip>
        ))
      }
      {
        (open && overItems > 0) &&
        <ListItem button onClick={() => { setShowingAll(!showingAll) }} >
          <ListItemIcon>{showingAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}</ListItemIcon>
          <ListItemText primaryTypographyProps={{ noWrap: true }} primary={"Mostrar " + (showingAll ? " menos" : overItems.toString() + " más")} />
        </ListItem>
      }

      {open && <Divider className={classes.divider} />}
    </>
  )

}
