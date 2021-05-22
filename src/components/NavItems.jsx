import React, {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';

import {SvgIcon, Typography, ListItemIcon, ListItemText, ListItem, Divider, Tooltip } from '@material-ui/core'

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import { ReactComponent as StreamingIcon } from '../icons/streaming_icon.svg'

const useStyles = makeStyles({
    text: {
        margin: '5% 5%',
        display: 'block'
    },
    divider: {
        margin: '2% 5% 3% 0'
    },
})

function NavItems({ open, routeGroup }) {
    const [showingAll, setShowingAll] = useState(false)
    const classes = useStyles()

    const maxItems = routeGroup.max || Number.POSITIVE_INIFINITY
    const overItems = routeGroup.items.length - maxItems

    return (

        <>
            {(routeGroup.name && open) && <Typography className={classes.text} variant="p">{routeGroup.name}</Typography>}

            {
                routeGroup.items.map((route, index) => (
                    (open || route.onClose) &&
                    <Tooltip title={open ? '' : route.name}>
                        <ListItem
                            style={{ display: (index + 1 > maxItems) && (!showingAll) ? 'none' : 'flex' }}
                            button
                            key={route.name}>
                            <ListItemIcon>{route.icon && route.icon}</ListItemIcon>
                            <ListItemText >{route.name}</ListItemText>
                            {
                                (route.streaming || route.newContent) &&
                                <ListItemIcon style={{ justifyContent: 'center' }}>
                                    <SvgIcon
                                        fontSize="small"
                                        color={route.streaming ? 'primary' : 'secondary'}
                                        component={route.streaming ? StreamingIcon : FiberManualRecordIcon}
                                    >
                                    </SvgIcon>
                                </ListItemIcon>
                            }

                        </ListItem>
                    </Tooltip>
                ))
            }
            {
                (open && overItems > 0) &&
                <ListItem button onClick={() => { setShowingAll(!showingAll) }} >
                    <ListItemIcon>{showingAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}</ListItemIcon>
                    <ListItemText primaryTypographyProps={{ noWrap: true }} primary={"Mostrar " + (showingAll ? " menos" : overItems.toString() + " más")} />
                </ListItem>
            }

            {open && <Divider className={classes.divider} />}
        </>
    )

}

export default NavItems