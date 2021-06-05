import React, { useState, useEffect } from 'react'
import NavContainer from '../components/NavContainer'

import { Grid } from '@material-ui/core'

import PreviewCard from '../components/PreviewCard.jsx'

import { videoList as dummyVideoList } from '../dummyData'

import { apiResp2CardData, getVideoList } from '../utils'

function Home() {

    const [videoList, setVideoList] = useState(apiResp2CardData(dummyVideoList))
    const [searching, setSearching] = useState(false)

    useEffect(() => {
        getVideos()
    }, [])

    const setVL = (list) => {
        setVideoList(apiResp2CardData(list))
    }

    const getVideos = async () => {
        try {
            const response = await getVideoList(15)
            setVL(response.data)
        } catch (err) { }
    }


    return (
        <NavContainer >
            <Grid xs={12} direction='row' container spacing={2} justify={window.innerWidth < 768 ? 'center' : "flex-start"}>
                {
                    videoList.map(video => {
                        const { img, duration, title, channelTitle, description, timeAgo, views, id } = video
                        const { xl, lg, md, sm, xs } = searching ? { xl: 8, lg: 10, md: 12, sm: 12, xs: 12 } : { xl: 3, lg: 4, md: 4, sm: 6, xs: 12 }
                        return (<Grid item xl={xl} lg={lg} md={md} sm={sm} xs={xs} >
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
                                searchVariant={searching}

                            />
                        </Grid>)
                    })
                }

            </Grid>
        </NavContainer>
    );
}

export default Home