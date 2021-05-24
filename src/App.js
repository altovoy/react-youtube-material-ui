import React, {useState, useEffect} from 'react'
import clsx from 'clsx';
import theme from './theme.js'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
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
import { AppBar, Toolbar, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Avatar, TextField, Button, ButtonGroup, IconButton, Tooltip, Grid, Chip } from '@material-ui/core'

// Data & utils
import { footer, chipList, routeGroups } from './dummyNavData'
import { videoList as dummyVideoList} from './dummyData'
import { apiResp2CardData, getVideoList, searchVideosByKeyword } from './utils'

// Styles
import HomeStyles from './styles/HomeStyles.js'

// Custom components
import NavItems from './components/NavItems.jsx'
import PreviewCard from './components/PreviewCard.jsx'
import HideOnScroll from './components/HideOnScroll.jsx'


function App() {
 
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App;


function Home() {
  const classes = HomeStyles();

  const [open, setOpen] = useState(false);
  const [videoList, setVideoList] = useState(apiResp2CardData(dummyVideoList))
  const [keyword, setKeyword] = useState('AT-Robótica')
  const [searching, setSearching] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangeForm = (e) => {
    setKeyword(e)
  }

  const setVL = (list) => {
    setVideoList(apiResp2CardData(list))
  }

  useEffect(()=>{
    getVideos()
  }, [])

  const getVideos = async() => {
    try{
      const response = await getVideoList(15)
      setVL(response.data)
    }catch(err){}
  }

  const onSearchClick = async(e) => {
    e.preventDefault()
    try{
      const response = await searchVideosByKeyword(keyword)
      setVL(response.data)
      setSearching(true)
    }catch(err){}
  }

  return (
    
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
                      name='keyword' 
                      onChange={(e) => {handleChangeForm (e.target.value)} }
                    />
                    <Button className={classes.searchButton} 
                    onClick={onSearchClick}
                    variant="contained" >
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
            <Grid xs={12} direction='row' container spacing={2} justify={window.innerWidth<768?'center':"flex-start"}>
              {
                videoList.map(video => {
                  const {img, duration, title, channelTitle, description, timeAgo, views} = video
                  const {xl, lg, md, sm, xs} = searching?{xl:8, lg: 10, md:12, sm:12, xs:12}:{xl:3, lg:4, md:4, sm:6, xs:12}
                  return (<Grid item xl={xl} lg={lg} md={md} sm={sm} xs={xs} >
                    <PreviewCard
                      videoImg={img}
                      time={duration}
                      progress={0}
                      title={title}
                      channelName={channelTitle}
                      channelImg="https://yt3.ggpht.com/ytc/AAUvwni2J7CPzmLvcuURRHJLqF5JRa3olKu-rrDu1y_TUg=s68-c-k-c0x00ffffff-no-rj"
                      channelUrl="https://www.youtube.com/user/TRAPSTATlON"
                      timeAgo={timeAgo}
                      views={views}
                      description={description}
                      verified
                      searchVariant={searching}
                      
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
  );
}