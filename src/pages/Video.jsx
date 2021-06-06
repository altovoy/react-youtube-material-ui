import React, { useState } from 'react'

import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import NavContainer from '../components/NavContainer';

import { apiResp2CardData } from '../utils'

import { videoList as dummyVideoList } from '../dummyData'

import { Grid } from '@material-ui/core'

import PreviewCard from '../components/PreviewCard'

const useStyles = makeStyles({
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
     }
})


function Video() {

    const classes = useStyles()

    const { id } = useParams()
    const videoId = id||'1yqCFAfw_fs'
    const [videoList, setVideoList] = useState(apiResp2CardData(dummyVideoList))



    return (
        <NavContainer
            variant='search'
        >
            <Grid container xs={12} justify='space-around'>
                <Grid item lg={8} md={8} xs={12}  >

                    <div
                        className={classes.videoContainer}>
                        <iframe
                            className={classes.videoFrame}
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            frameBorder="0"
                        />

                    </div>
                </Grid>

                <Grid item container lg={4} md={4} xs={12} spacing={2}>
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

export default Video