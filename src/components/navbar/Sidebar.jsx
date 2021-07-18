import React from 'react'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
    Divider, 
    List, 
    ListItem, 
    makeStyles, 
    ListItemIcon, 
    ListItemText, 
    IconButton,
    Drawer,
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

const Sidebar = () => {

    const classes = useStyles()
    const theme = useTheme()
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

    const list = () => (
        <div
        //   className={clsx(classes.list, {
        //     [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        //   })}
        //   role="presentation"
        //   onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}
        >
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
        </div>
    );

    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                //open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                {/* <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider/> */}
                <List>{list()}</List>
            </Drawer>
        </div>
    )
}

export default Sidebar
