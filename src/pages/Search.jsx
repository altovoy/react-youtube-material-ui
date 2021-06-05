import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import { apiResp2CardData, searchVideosByKeyword } from '../utils'
import { Grid } from '@material-ui/core'

import PreviewCard from '../components/PreviewCard'
import NavContainer from '../components/NavContainer'

function Search() {

    const [videoList, setVideoList] = useState([])
    const { keyword } = useParams()

    useEffect(() => {
        searchVideos()
    }, [keyword])

    const searchVideos = async () => {
        const response = await searchVideosByKeyword(keyword)
        setVideoList(apiResp2CardData(response.data))
    }

    return (<NavContainer variant='search' >
        <Grid xs={12} direction='row' container spacing={2} justify={window.innerWidth < 768 ? 'center' : "flex-start"}>
            {
                videoList.map(video => {
                    const { img, duration, title, channelTitle, description, timeAgo, views, id } = video
                    return (<Grid item xl={8} lg={10} md={12} sm={12} xs={12} >
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
    </NavContainer>
    )

}

export default Search