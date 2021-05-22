import React from 'react'
import clsx from 'clsx';
import theme from './theme.js'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import MicIcon from '@material-ui/icons/Mic';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoCallIcon from '@material-ui/icons/VideoCall';


// Material components
import { Drawer, List } from '@material-ui/core'
import { AppBar, Toolbar, BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import { Avatar,  TextField, Button, ButtonGroup, IconButton, Tooltip, Grid, Chip } from '@material-ui/core'

// Data & utils
import { footer, chipList, routeGroups } from './dummyNavData'
import { videoList } from './dummyData'
import { ytDuration2String, timeSince, notateNumber } from './utils'

// Styles
import HomeStyles from './styles/HomeStyles.js'

// Custom components
import NavItems from './components/NavItems.jsx'
import PreviewCard from './components/PreviewCard.jsx'
import HideOnScroll from './components/HideOnScroll.jsx'

function App() {
  const classes = HomeStyles();

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
        <HideOnScroll>


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
                  <Tooltip className={classes.micIcon} title="Haz búsquedas por voz">
                    <IconButton>
                      <MicIcon />
                    </IconButton>
                  </Tooltip>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div className={classes.rightButtons}>
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
                  </div>
                  <Avatar>E</Avatar>
                </div>
              </div>

            </Toolbar>



          </AppBar>
        </HideOnScroll>
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
          <div className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            [classes.appBarFit]: !open
          })}
            style={{ position: "fixed", zIndex: 2, background: 'none' }}>
            <div className={classes.toolbar} />
            <HideOnScroll>

              <div className={clsx(classes.chipsContainer)} >

                {chipList.map(chipItem =>
                  <Chip label={chipItem.name}
                    component="a"
                    href="#chip"
                    clickable
                    style={{ marginLeft: '5px' }}
                  />
                )}

              </div>
            </HideOnScroll>
          </div>

          <div className={classes.content}>
            <HideOnScroll>
              <div className={classes.toolbar} />
            </HideOnScroll>
            <Grid xs={12} direction='row' container spacing={2} justify="flex-start">
              {
                videoList.items.map(video => {
                  const { snippet, statistics, contentDetails } = video
                  const { title, publishedAt, thumbnails, channelTitle } = snippet
                  const img = thumbnails.medium.url
                  const { viewCount } = statistics
                  let { duration } = contentDetails  // Structure: PT3M3S
                  duration = ytDuration2String(duration)
                  return (<Grid item xl={3} lg={4} md={4} sm={6} xs={12} >
                    <PreviewCard
                      videoImg={img}
                      time={duration}
                      progress={0}
                      title={title}
                      channelName={channelTitle}
                      channelImg="https://yt3.ggpht.com/ytc/AAUvwni2J7CPzmLvcuURRHJLqF5JRa3olKu-rrDu1y_TUg=s68-c-k-c0x00ffffff-no-rj"
                      channelUrl="https://www.youtube.com/user/TRAPSTATlON"
                      timeAgo={timeSince(publishedAt)}
                      verified
                      views={notateNumber(viewCount)}
                    />
                  </Grid>)
                })
              }

            </Grid>

          </div>
        </main>
        <BottomNavigation showLabels
          className={classes.bottomNavigation}>
          {
            routeGroups.map(routeGroup => routeGroup.items.map(route =>
              route.onClose && <BottomNavigationAction label={route.name} value="favorites" icon={route.icon} />
            ))
          }
        </BottomNavigation>
      </div>
    </ThemeProvider>
  );
}

export default App;
