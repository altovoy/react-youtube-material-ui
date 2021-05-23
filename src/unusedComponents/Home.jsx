import React, {useState} from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';


// Material components
import { AppBar, Drawer, List } from '@material-ui/core'


// Custom components
import NavItems from '../components/NavItems.jsx'


const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '300px auto',
        gridTemplateRows: "60px 60px auto",
        gridTemplateAreas: `"appBar appBar"
                          "drawer chips"
                          "drawer content"` ,
    },
    appBar: {
        gridArea: 'appBar',
        background: 'blue',
        position: 'sticky',
        top: 0,
        height: '100%'
    },
    chipsContainer: {
        gridArea: 'chips',
        background: 'yellow',
        position: 'sticky',
        top: '60px'
    },
    drawer: {
        gridArea: 'drawer',
        background: 'black',
        position: 'fixed',
        width: '300px',
        top: 60,
        bottom: 0,

    },
    content: {
        gridArea: 'content',
    }
})

function Home() {
    const classes = useStyles()

    const [open, setOpen] = useState(true)

    return (

            <div className={classes.root}>
                <AppBar

                    elevation={0}
                    className={classes.appBar}
                >

                </AppBar>
                <div className={classes.chipsContainer} >

                </div>

                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx(classes.drawer, {
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

                <div className={classes.content}>
                    <h1>Hola care bola</h1>
                </div>

            </div>
    )
}

export default Home;