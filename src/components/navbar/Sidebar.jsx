import React from 'react'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
// import  clone from 'lodash/clone'
import {
    Divider, 
    //IconButton,
    List, 
    ListItem, 
    makeStyles, 
    ListItemIcon, 
    ListItemText, 
    Drawer,
    Hidden,
} from '@material-ui/core'


//===============================================================================================================

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    root: {
        display: 'flex'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}))

//===============================================================================================================

const Sidebar = (props) => {

    const classes = useStyles()
    
    const list = () => (
        <>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        </>
    )

    return (
        <>
            <Hidden smUp>
                <Drawer
                    className={classes.drawer}
                    variant="temporary"
                    anchor="left"
                    open={props.state}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    {props.children}
                    
                    <List>{list()}</List>
                </Drawer>
            </Hidden>
        </>
    )
}

export default Sidebar


//===============================================================================================================
//import ChevronRightIcon from '@material-ui/icons/ChevronRight'
//import { useTheme } from '@material-ui/core/styles'
//import clsx from 'clsx'

//const theme = useTheme()
//const [open, setOpen] = React.useState(false)

//const [state, setState] = React.useState(false)  //Doubts about intial value and suitability of the statement

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // }
    
    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //       return;
    //     }
    //     setState({ ...state, [anchor]: open });
// };

//   className={clsx(classes.list, {
        //     [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        //   })}
        //   role="presentation"
        //   onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}

//open={open}

/* 
    <Divider/> */