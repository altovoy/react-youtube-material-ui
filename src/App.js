import React from 'react'

import theme from './theme.js'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import YouTubeIcon from '@material-ui/icons/YouTube';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';


import HistoryIcon from '@material-ui/icons/History';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoCallIcon from '@material-ui/icons/VideoCall';

import { Avatar, Icon, SvgIcon, TextField, Button, ButtonGroup, IconButton } from '@material-ui/core'
import { SportsBasketball } from '@material-ui/icons';

const routeGroups = [
  {
    name: null, items: [
      { name: 'Inicio', icon: <HomeIcon />, onClose:true },
      { name: 'Explorar', icon: <ExploreIcon />,  onClose:true},
      { name: 'Subscripciones', icon: <SubscriptionsIcon />, onClose:true },
    ]
  },
  {
    name: null, items: [
      { name: 'Bibliotecas', icon: <VideoLibraryIcon />, onClose:true },
      { name: 'Historial', icon: <HistoryIcon /> },
      { name: 'Mis videos', icon: <PlayCircleOutlineIcon /> },
      { name: 'Ver más tarde', icon: <WatchLaterIcon /> },
      { name: 'Videos que me gustan', icon: <ThumbUpIcon /> },
    ]
  },
  {
    name: "SUBSCRIPCIONES", items: [
      { name: 'Kiko Palomares', icon: <Avatar alt="Remy Sharp" src="https://yt3.ggpht.com/ytc/AAUvwnhl30-099hHdQ9KmQSG1ZZN6ReuwHC1zG3EC6m65A=s88-c-k-c0x00ffffff-no-rj" /> },
      { name: 'Sofia Web', icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwnimRjgF1uVE0ukK6xy3h9HGMHMjKy6QzmKOUNeCJA=s88-c-k-c0x00ffffff-no-rj' /> },
      { name: 'The Flutter way', icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwngOS8ETkWL7RrYwfXX2hMdJ7VjO-juYYl8F1OG1=s88-c-k-c0x00ffffff-no-rj' /> },
      { name: 'Ed Team', icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwnhRL1PzyIR4qftWnofOtsyvheGq_wQpMe1XVOJ7YQ=s88-c-k-c0x00ffffff-no-rj' /> },
      { name: 'Fazt', icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwnhgqDwiewt8bds92auC2W30pzE70V03dTW7_h8tvQ=s88-c-k-c0x00ffffff-no-rj' /> }
    ]
  },
  {
    name: "MÁS DE YOUTUBE", items: [
    {name: 'Youtube Premium', icon: <YouTubeIcon/>},
    {name: 'Videojuegos', icon: <VideogameAssetIcon/>},
    {name: 'Directo', icon: <LiveTvIcon />},
    {name: 'Aprendizaje', icon: <EmojiObjectsIcon/>},
    {name: 'Deportes', icon: <SportsBasketballIcon/>}
    ]
  }

]

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
    background: '#202020',
    zIndex: theme.zIndex.drawer + 1,
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,

  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
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
    ['& paper']: {
      borderRight: 'none'
    },
    ['& slide']: {
      borderRight: 'none'
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
    padding: theme.spacing(3),
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
  }

}));




function App() {
  const classes = useStyles(theme);

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
                  <TextField className={classes.searchField} id="outlined-basic" placeholder="Buscar"
                    variant="outlined"
                  // InputProps={{ classes: { input: classes.searchField } }}
                  />
                  <Button className={classes.searchButton} variant="contained" >
                    <SearchIcon />
                  </Button>

                </ButtonGroup>
                <IconButton>
                  <MicIcon />
                </IconButton>
              </div>

              <div>
                <IconButton>
                  <VideoCallIcon />
                </IconButton>

                <IconButton>
                  <AppsIcon />
                </IconButton>

                <IconButton>
                  <NotificationsIcon />
                </IconButton>
              </div>
            </div>

          </Toolbar>
        </AppBar>


        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
          </div>
          
            <List>
            {routeGroups.map(routeGroup => (
              <>
                {(routeGroup.name && open) && <Typography className={classes.text} variant="p">{routeGroup.name}</Typography>}

                
                  {
                    routeGroup.items.map((route, index) => (
                      (open||route.onClose)&&
                      <ListItem button key={route.name}>
                        <ListItemIcon>{route.icon && route.icon}</ListItemIcon>
                        <ListItemText primary={route.name} />
                      </ListItem>
                    ))
                  }
                  {open&&<Divider  className={classes.divider}/>}
                
                
              </>
            ))}
            </List>

        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
        </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
