import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { Grid, Button, Typography, Avatar } from '@material-ui/core'

import { getChannelInfo, apiChannelNormalize } from '../utils'

const useStyles = makeStyles(theme => ({
    root: {
        padding: '1.5% 0'
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    info: {
        marginLeft: 10
    }
}))


function ChannelInfoBar({ channelId }) {
    const classes = useStyles()
    const [channel, setChannel] = useState({ title: '', img: '', subscriberCount: '', hiddenSubscriberCount: '' })
    let { title, img, subscriberCount, hiddenSubscriberCount } = channel
    useEffect(() => {
        getChannel()
    }, [channelId])

    const getChannel = async () => {
        try {
            const response = await getChannelInfo(channelId)
            setChannel(apiChannelNormalize(response.data))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={classes.root} >
            <Grid container xs={12} justify='space-between' >
                <Grid item container xs={10} alignItems='center' >
                    <Avatar src={img} className={classes.avatar} />
                    <div className={classes.info}>
                        <Typography variant='subtitle2' component='p'>{title}</Typography>
                        {!hiddenSubscriberCount && <Typography variant='body2' component='p' href=''>{subscriberCount + ' suscriptores'}</Typography>}
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained' color='primary'>Suscribirme</Button>
                </Grid>
            </Grid>
        </div>
    )

}

export default ChannelInfoBar