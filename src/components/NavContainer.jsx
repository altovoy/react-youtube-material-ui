import React, { useState, useEffect } from 'react'
import clsx from 'clsx';

import {useHistory} from 'react-router-dom'

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
import { footer, chipList, routeGroups } from '../dummyNavData'


// Styles
import HomeStyles from '../styles/HomeStyles.js'

// Custom components
import NavItems from './NavItems.jsx'
import HideOnScroll from './HideOnScroll.jsx'


function NavContainer({ variant, children}) {
    const classes = HomeStyles();
    const history = useHistory()
    const [open, setOpen] = useState(true);
    const [keyword, setKeyword] = useState('AT-Robótica')
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleChangeForm = (e) => {
        setKeyword(e)
    }

    const handleSearchClick = (e) => {
        e.preventDefault()
        history.push(`/search/${keyword}`)
    }

    return (

        <div className={classes.root}>
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

                            <img className={classes.imageIcon} src={"/images/youtube-icon.svg"} />
                            <div>
                                <ButtonGroup disableElevation>
                                    <TextField className={classes.searchField}
                                        id="searchField"
                                        color="secondary"
                                        placeholder="Buscar"
                                        variant="outlined"
                                        name='keyword'
                                        onChange={(e) => { handleChangeForm(e.target.value) }}
                                    />
                                    <Button className={classes.searchButton}
                                        onClick={handleSearchClick}
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
                    {variant !== 'search' &&
                        <HideOnScroll>
                            <ChipsContainer />
                        </HideOnScroll>
                    }

                </div>

                <div className={classes.content}>
                    {variant !== 'search' &&
                        <HideOnScroll>
                            <div className={classes.toolbar} />
                        </HideOnScroll>
                    }
                    {
                        children
                    }


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

const ChipsContainer = () => {
    const classes = HomeStyles()

    return (
        <div className={clsx(classes.chipsContainer)} >
            {
                chipList.map(chipItem =>
                    <Chip label={chipItem.name}
                        component="a"
                        href="#chip"
                        clickable
                        style={{ marginLeft: '5px' }}
                    />
                )
            }
        </div>
    )
}

export default NavContainer