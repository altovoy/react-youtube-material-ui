import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Link } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import QueueIcon from '@material-ui/icons/Queue';
import LinearProgress from '@material-ui/core/LinearProgress';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: '360px',
        margin: 'auto',
        position: 'relative',
        "&:hover": {
            "& $actionsContainer": {
                display: 'flex'
            }
        }
    },
    image: {
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
        padding:'1px 5px',
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
        marginBottom: '3px'
    }

}))

export default function PreviewCard() {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <div className={classes.actionsContainer} >
                <div className={classes.action}>
                    <Typography variant="body2" component="span" className={classes.actionLabel}>VER MÁS TARDE</Typography>
                    <WatchLaterIcon />
                </div>

                <div className={classes.action}>
                    <Typography variant="body2" component="span" className={classes.actionLabel}>AÑADIR A LA COLA</Typography>
                    <QueueIcon />
                </div>

            </div>
            <div style={{position: 'relative'}}>
                <img className={classes.image} src="https://i.ytimg.com/vi/nsHRc8tUIK0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-Te-F216hloej-awOneOVkI-WlQ" />
                <Typography className={classes.timeLabel} variant="subtitle2" component='span'>3:12</Typography>
                <LinearProgress variant="determinate" className={classes.progress} value={30} />
            </div>
            <div className={classes.flexCenter}>
                <Avatar src="https://yt3.ggpht.com/ytc/AAUvwni2J7CPzmLvcuURRHJLqF5JRa3olKu-rrDu1y_TUg=s68-c-k-c0x00ffffff-no-rj" />
                <div className={classes.textContent}>
                    <Typography variant='subtitle2' component='h1'
                        href="https://www.youtube.com/user/TRAPSTATlON"
                    >OMIDO - LSD (ft. palfii) (Official Music Video)</Typography>
                    <Link className={clsx(classes.link, classes.secondaryText)} variant='body2' >Trap Station</Link>
                    <Typography className={classes.secondaryText} variant='body2' component='p'>7,2M de visualizaciones · hace 1 año </Typography >
                </div>
                <MoreVertIcon className={clsx(classes.link, classes.secondaryText)} />
            </div>
        </div>
    )
}