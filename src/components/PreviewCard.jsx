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


import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Divider, Box } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    card: {
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
    cardStandard: {
        maxWidth: '360px',
        margin: 'auto',

    },
    cardSearch: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-between'
    },
    moreIcon: {
        display: 'none'
    },
    image: {
        display: 'block',
        maxWidth: '360px',
        width: '100%',
        maxHeight: '200px',
        height: '100%',

    },
    title: {
        gridArea: 'title',
        fontWeight: '600',
        [theme.breakpoints.down('sm')]: {
            lineClamp: 3
        }

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
        justifyContent: 'space-between',
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
    },
    noWrapLines: {
        display: "-webkit-box",
        boxOrient: "vertical",
        lineClamp: 2,
        wordBreak: "break-all",
        overflow: "hidden"
    },
    description:{
        gridArea: 'description',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    views: {
        gridArea: 'views'
    },
    channelImg: {
        gridArea: 'channelImg',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    channelName:{
        gridArea: 'channelName',
        margin: 'auto 0'
    },
    contentDetails: {
        margin: '0 10px'
    },
    searchGrid: {
        display: 'grid',
        gridTemplateAreas:
            `"title title"
        "views views"
        "channelImg channelName"
        "description description"`,
        gridTemplateColumns: '50px auto',
        [theme.breakpoints.down('xs')]: {
            gridTemplateAreas:
            `"title title"
        "views views"
        "channelName channelName"`,
        }
    },
    standardGrid: {
        display: 'grid',
        gridTemplateAreas:
            `"channelImg title"
            ". channelName"
            ". views"`,
        gridTemplateColumns: '50px auto',
        gridGap: '5px'
    }


}))

export default function PreviewCard({
    videoImg, time, progress, title, channelName, channelUrl,
    channelImg, verified, views, timeAgo, description, searchVariant }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={clsx(classes.card, searchVariant ? classes.cardSearch : classes.cardStandard)}>

            <div style={{ position: 'relative', marginBottom: '5px' }}>
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
                <div className={clsx(classes.contentDetails, searchVariant ? classes.searchGrid : classes.standardGrid)}>


                    <Typography
                        className={clsx(classes.noWrapLines, classes.title)}
                        variant='subtitle2'
                        component='h1'
                        href={channelUrl}
                    >{title}</Typography>
                    <Tooltip className={classes.channelImg}
                        title={channelName}>
                        <Avatar src={channelImg} />
                    </Tooltip>
                    <Link className={clsx(classes.link, classes.channelName, classes.secondaryText)}
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

                    <Typography className={clsx(classes.views, classes.secondaryText)}
                        variant='body2'
                        component='p'>
                        {views + " visualizaciones"}
                        {" · hace " + timeAgo}
                    </Typography >
                    {
                        searchVariant &&
                        <Box classes={{ root: clsx(classes.description, classes.noWrapLines, classes.secondaryText) }}
                            fontSize='body2.fontSize'
                            component='div'
                        >
                            {description}
                        </Box>
                    }


                </div>
                <div>
                    <IconButton onClick={handleClick} style={{
                        padding: 0,
                        background: 'none',
                        width: '10px'
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