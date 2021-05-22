import clsx from 'clsx';
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Link, Tooltip } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import QueueIcon from '@material-ui/icons/Queue';
import LinearProgress from '@material-ui/core/LinearProgress';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

// Side Menu Icons
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import FlagIcon from '@material-ui/icons/Flag';


import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText , Divider} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: '360px',
        margin: 'auto',
        position: 'relative',
        "&:hover": {
            "& $actionsContainer": {
                display: 'flex'
            },
            "& $moreIcon": {
                display: 'block'
            }
        }
    },
    moreIcon:{
        display: 'none'
    },
    image: {
        display: 'block',
        maxWidth: '360px',
        width: '100%',
        maxHeight: '200px',
        height: '100%',
        contentFit: 'cover'
    },
    title: {
        fontWeight: '600'
    },
    secondaryText: {
        color: '#A2A2A2'
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        justifyContent: 'space-between'
    },
    textContent: {
        margin: '0 10px'
    },
    link: {
        '&:hover': {
            color: '#fff',
            fontWeight: 500,
            textDecoration: 'none'
        }
    },
    actionsContainer: {
        display: 'none',
        position: 'absolute',
        top: '0px',
        right: '0px',
        padding: '5px',
        flexDirection: 'column',
        alignItems: 'flex-end',
        zIndex: 1
    },
    actionLabel: {
        display: 'none',
        margin: '0 5px',
        width: 0
    },
    action: {
        background: 'rgba(0,0,0,0.5)',
        padding: '3px',
        display: 'flex',
        padding: '1px',
        margin: '2px',
        alignItems: 'center',
        justifyContent: 'space-around',
        "&:hover": {
            "& $actionLabel": {
                display: 'block',
                width: 'auto'
            }
        }
    },
    timeLabel: {
        background: 'rgba(0,0,0,0.5)',
        padding: '1px 5px',
        margin: '2px 0px',
        position: 'absolute',
        bottom: '5px',
        right: '5px'
    },
    progress: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        margin: '0px'
    }

}))

export default function PreviewCard(
    { videoImg, time, progress, title, channelName, channelUrl, channelImg, verified, views, timeAgo }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.card}>
            <div className={classes.actionsContainer} >
                <div className={classes.action}>
                    <Typography
                        variant="body2"
                        component="span"
                        className={classes.actionLabel}>VER MÁS TARDE</Typography>
                    <WatchLaterIcon />
                </div>

                <div className={classes.action}>
                    <Typography
                        variant="body2"
                        component="span"
                        className={classes.actionLabel}>AÑADIR A LA COLA</Typography>
                    <QueueIcon />
                </div>

            </div>
            <div style={{ position: 'relative', marginBottom: '5px' }}>

                <img className={classes.image} src={videoImg} />
                <Typography className={classes.timeLabel}
                    variant="subtitle2"
                    component='span'>{time}</Typography>
                {
                    (progress > 0) && <LinearProgress
                        variant="determinate"
                        className={classes.progress} value={progress} />
                }

            </div>
            <div className={classes.flexCenter}>
                <Tooltip title={channelName}>
                    <Avatar src={channelImg} />
                </Tooltip>

                <div className={classes.textContent}>
                    <Typography
                        variant='subtitle2'
                        component='h1'
                        href={channelUrl}
                    >{title}</Typography>
                    <Link className={clsx(classes.link, classes.secondaryText)}
                        variant='body2' >{channelName}
                        {
                            verified &&
                            <Tooltip title="Verificada" >
                                <CheckCircleIcon
                                    style={{
                                        fontSize: 'inherit',
                                        verticalAlign: 'middle',
                                        marginLeft: '5px'
                                    }} />
                            </Tooltip>
                        }
                    </Link>
                    <Typography className={classes.secondaryText}
                        variant='body2'
                        component='p'>
                        {views + " visualizaciones"}
                        {" · hace " + timeAgo}
                    </Typography >
                </div>
                <div>
                    <IconButton onClick={handleClick} style={{
                        padding: 0,
                        background: 'none',
                        width: '30px'
                    }}  >
                        <MoreVertIcon className={clsx(classes.link, classes.secondaryText, classes.moreIcon)} />
                    </IconButton>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        getContentAnchorEl={null}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >

<MenuItem onClick={handleClose}>
                            <ListItemIcon><QueueIcon /></ListItemIcon>
                            <ListItemText>Añadir a la cola</ListItemText>
                        </MenuItem>

                        <MenuItem onClick={handleClose}>
                            <ListItemIcon><WatchLaterIcon /></ListItemIcon>
                            <ListItemText>Guardar para ver más tarde</ListItemText>
                        </MenuItem>

                        <MenuItem onClick={handleClose}>
                            <ListItemIcon><PlaylistAddIcon /></ListItemIcon>
                            <ListItemText>Añadir a la lista de reproducción</ListItemText>
                        </MenuItem>
                        
                        <Divider />

                        <MenuItem onClick={handleClose}>
                            <ListItemIcon><NotInterestedIcon /></ListItemIcon>
                            <ListItemText>No me interesa</ListItemText>
                        </MenuItem>

                        <MenuItem onClick={handleClose}>
                            <ListItemIcon><RemoveCircleOutlineIcon /></ListItemIcon>
                            <ListItemText>No recomendarme este canal</ListItemText>
                        </MenuItem>

                        <MenuItem onClick={handleClose}>
                            <ListItemIcon><FlagIcon /></ListItemIcon>
                            <ListItemText>Denunciar</ListItemText>
                        </MenuItem>
                        
                    </Menu>

                </div>
            </div>
        </div >
    )
}