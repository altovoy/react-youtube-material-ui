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

import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
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
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import AnnouncementIcon from '@material-ui/icons/Announcement';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import MicIcon from '@material-ui/icons/Mic';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoCallIcon from '@material-ui/icons/VideoCall';

import { Avatar, Icon, SvgIcon, TextField, Button, ButtonGroup, IconButton, Tooltip, Grid } from '@material-ui/core'





import PreviewCard from './components/PreviewCard.jsx'
import { ReactComponent as StreamingIcon } from './icons/streaming_icon.svg'
import { PlaylistPlay } from '@material-ui/icons';
const routeGroups = [
  {
    name: null, items: [
      { name: 'Inicio', icon: <HomeIcon />, onClose: true },
      { name: 'Explorar', icon: <ExploreIcon />, onClose: true },
      { name: 'Subscripciones', icon: <SubscriptionsIcon />, onClose: true },
    ]
  },
  {
    name: null, max: 5, items: [
      { name: 'Bibliotecas', icon: <VideoLibraryIcon />, onClose: true },
      { name: 'Historial', icon: <HistoryIcon /> },
      { name: 'Mis videos', icon: <PlayCircleOutlineIcon /> },
      { name: 'Ver más tarde', icon: <WatchLaterIcon /> },
      { name: 'Videos que me gustan', icon: <ThumbUpIcon /> },
      { name: 'Lista de reproducción', icon: <PlaylistPlay /> }
    ]
  },
  {
    name: "SUBSCRIPCIONES", max: 7, items: [
      {
        name: 'Kiko Palomares', streaming: true,
        icon: <Avatar alt="Remy Sharp" src="https://yt3.ggpht.com/ytc/AAUvwnhl30-099hHdQ9KmQSG1ZZN6ReuwHC1zG3EC6m65A=s88-c-k-c0x00ffffff-no-rj" />
      },
      {
        name: 'Sofia Web',
        icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwnimRjgF1uVE0ukK6xy3h9HGMHMjKy6QzmKOUNeCJA=s88-c-k-c0x00ffffff-no-rj' />
      },
      {
        name: 'The Flutter way',
        icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwngOS8ETkWL7RrYwfXX2hMdJ7VjO-juYYl8F1OG1=s88-c-k-c0x00ffffff-no-rj' />
      },
      {
        name: 'Ed Team',
        icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwnhRL1PzyIR4qftWnofOtsyvheGq_wQpMe1XVOJ7YQ=s88-c-k-c0x00ffffff-no-rj' />
      },
      {
        name: 'Fazt', newContent: true,
        icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwnhgqDwiewt8bds92auC2W30pzE70V03dTW7_h8tvQ=s88-c-k-c0x00ffffff-no-rj' />,
      },
      {
        name: 'AristiDevs', streaming: true,
        icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwnhXywyYrVckna4WxxOWfQLn_Ki2FhmHNWb5HHpL=s88-c-k-c0x00ffffff-no-rj' />
      },
      {
        name: 'MoureDev', newContent: true,
        icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwniUE19__jnSP8NH1LblvE5Ac5ADuDfcDMh9F-v7Bg=s88-c-k-c0x00ffffff-no-rj' />
      },
      { name:'Duke Doks',
        icon: <Avatar src='https://yt3.ggpht.com/ytc/AAUvwnhmw1s-0Qh89Gy8U2u4M5JSh5rtIeaRMb2cNsUwsw=s88-c-k-c0x00ffffff-no-rj' />  
      }
    ]
  },
  {
    name: "MÁS DE YOUTUBE", items: [
      { name: 'Youtube Premium', icon: <YouTubeIcon /> },
      { name: 'Videojuegos', icon: <VideogameAssetIcon /> },
      { name: 'Directo', icon: <LiveTvIcon /> },
      { name: 'Aprendizaje', icon: <EmojiObjectsIcon /> },
      { name: 'Deportes', icon: <SportsBasketballIcon /> }
    ]
  },
  {
    name: null, items: [
      { name: 'Configuración', icon: <SettingsIcon /> },
      { name: 'Historial de denuncias', icon: <FlagIcon /> },
      { name: 'Ayuda', icon: <HelpIcon /> },
      { name: 'Enviar sugerencias', icon: <AnnouncementIcon /> },
    ]
  }
]

const footer = [
  [
    { name: 'Información', url: 'https://www.youtube.com/about/' },
    { name: 'Prensa', url: 'https://www.youtube.com/about/press/' },
    { name: 'Derechos de autor', url: 'https://www.youtube.com/about/copyright/' },
    { name: 'Contactar', url: 'https://www.youtube.com/t/contact_us/' },
    { name: 'Creadores', url: 'https://www.youtube.com/creators/' },
    { name: 'Publicidad', url: 'https://www.youtube.com/ads/' },
    { name: 'Desarrolladores', url: 'https://developers.google.com/youtube' }
  ],
  [
    { name: 'Términos', url: 'https://www.youtube.com/t/terms' },
    { name: 'Privacidad', url: 'https://policies.google.com/privacy?hl=es' },
    { name: 'Política y seguridad', url: 'https://policies.google.com/privacy?hl=es' },
    { name: 'Cómo funciona YouTube', url: 'https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen' },
    { name: 'Probar funciones nuevas', url: 'https://www.youtube.com/new' }
  ]
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
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
  },
  a: {
    color: "#929292",
    fontWeight: '600',
    textDecoration: 'none',
    display: 'block'
  },
  drawerContainer: { margin: '5% 16px' },
  chipsContainer: {
    height: '30px'
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

          {
            //<div className={clsx(classes.chipsContainer, {[classes.appBarShift]: open})} />
          }

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
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Grid xs={12} direction='row' container spacing={2} justify="flex-start">
            {
              [...Array(10).keys()].map(item =>
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
          <ListItemText  primaryTypographyProps={{noWrap:true}} primary={"Mostrar " + (showingAll ? " menos" : overItems.toString() + " más")}/>
        </ListItem>
      }

      {open && <Divider className={classes.divider} />}
    </>
  )

}
