import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import NavContainer from '../components/NavContainer';

import { apiResp2CardData, api2card, getVideoInfo } from '../utils'

import { videoList as dummyVideoList } from '../dummyData'

import Linkify from 'react-linkify'

import { Grid, Typography, Tooltip, Button, IconButton, Divider, Collapse } from '@material-ui/core'

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import PreviewCard from '../components/PreviewCard'
import ChannelInfoBar from '../components/ChannelInfoBar'

const useStyles = makeStyles( theme=> ({
    videoContainer: {
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
    },
    videoFrame: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    },
    tags: {
    },
    videoDetails: {
        margin: '10px 0',
        width: '100%'
    },
    descriptionContainer: {
        width: '100%',
        padding: `0 ${theme.spacing(8)}px`
    }
}))


function Video() {

    const classes = useStyles()

    const { id } = useParams()
    const [showDesc, setShowDesc] = useState(false)

    const handleShowDescClick = e => {
        e.preventDefault()
        setShowDesc(!showDesc)
    }

    const [video, setVideo] = useState({ tags: null, title: '', views: '', likeCount: 0, description: '', dislikeCount: 0, publishedAt: new Date(), channelId: 'UCplMvxeNhR6KFjFx05dbjSQ' })
    const { tags, title, views, likeCount, dislikeCount, publishedAt, channelId, description } = video
    console.log(description)
    const dateString = new Date(publishedAt).toLocaleDateString("es-ES", { year: 'numeric', month: 'short', day: 'numeric' })
    useEffect(() => {
        getVideo()
    },
        [id])

    const getVideo = async () => {
        try {
            const response = await getVideoInfo(id)
            const item = response.data.items.length > 0 && response.data.items[0]
            if (item) {
                setVideo(api2card(item))
            }
        } catch (error) {

        }
    }

    const videoId = id || '1yqCFAfw_fs'
    const [videoList, setVideoList] = useState(apiResp2CardData(dummyVideoList))

    return (
        <NavContainer
            variant='search'
        >
            <Grid container xs={12} justify='space-around'>
                <Grid item lg={8} md={12} xs={12}  >

                    <div className={classes.videoContainer}>
                        <iframe
                            className={classes.videoFrame}
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            frameBorder="0"
                        />
                    </div>

                    <div className={classes.videoDetails} >
                        <div className={classes.tags} > {
                            tags && tags.map(tag =>
                                <Typography variant='body2' component='a' >{' #' + tag}</Typography>
                            )
                        }
                        </div>

                        <Typography variant='h6' component='p'  >{title}</Typography>

                        <Grid container xs={12} justify='space-between' alignItems='center' >
                            <Grid item md={4} xs={12}  >
                                <Typography variant='subtile2' component='p' >{views + ' visualizaciones • ' + dateString}</Typography>
                            </Grid>
                            <Grid item container spacing={1} md={8} xs={12} justify='flex-end' alignItems='center' >
                                <Grid item container xs={5} spacing={1} justify='space-between' className={classes.likes} >
                                    <Grid item xs={6}>
                                        <Tooltip title='Me gusta este video' >
                                            <Button startIcon={<ThumbUpIcon />}>
                                                <Typography variant='subtile2' component='p' > {likeCount} </Typography>
                                            </Button>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Tooltip title='No me gusta este video' >
                                            <Button startIcon={<ThumbDownIcon />}>
                                                <Typography variant='subtile2' component='p' > {dislikeCount} </Typography>
                                            </Button>
                                        </Tooltip>
                                    </Grid>
                                    <Divider />
                                </Grid>

                                <Grid item xs={3} >
                                    <Tooltip title='Compartir' >
                                        <Button startIcon={<ShareIcon />}>
                                            <Typography variant='subtile2' component='p' > Compartir </Typography>
                                        </Button>
                                    </Tooltip>
                                </Grid>

                                <Grid item xs={3} >
                                    <Tooltip title='Guardar' >
                                        <Button startIcon={<PlaylistAddIcon />}>
                                            <Typography variant='subtile2' component='p' > Guardar </Typography>
                                        </Button>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={1} >
                                    <IconButton>
                                        <MoreHorizIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Divider />

                        <ChannelInfoBar channelId={channelId} />

                        <div className={classes.descriptionContainer}>
                            <Collapse in={showDesc} collapsedHeight={'60px'} >
                                <div >

                                    <Linkify componentDecorator={componentDecorator}>
                                        {description.split("\n").map(line =>
                                            <Typography variant='body2' component='p' >{line}</Typography>
                                        )}
                                    </Linkify>

                                </div>

                            </Collapse>
                            <Button onClick={handleShowDescClick} timeout='auto' endIcon={showDesc ? <ExpandLessIcon /> : <ExpandMoreIcon />} >
                                {showDesc ? 'Mostrar menos' : 'Mostrar más'}
                            </Button>
                        </div>



                        <Divider />

                    </div>

                </Grid>

                <Grid item container lg={4} md={12} xs={12} spacing={2}>
                    {
                        videoList.map(video => {
                            const { img, duration, title, channelTitle, description, timeAgo, views, id } = video
                            return (<Grid item xs={12} >
                                <PreviewCard
                                    id={id}
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
                                    searchVariant
                                />
                            </Grid>)
                        })
                    }
                </Grid>

            </Grid>

        </NavContainer>
    )


}

const componentDecorator = (href, text, key) => (
    <a style={{color: '#3EA6F0', textDecoration: 'none'}} href={href} key={key} target="_blank">
      {text}
    </a>
 );

export default Video