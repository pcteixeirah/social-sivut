import React from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase'
import { withRouter } from 'react-router-dom'
//import { Form, FormControl, Button } from 'react-bootstrap'
import {
    AppBar, 
    Toolbar, 
    //Typography, 
    makeStyles, 
    //Link, 
    //InputBase, 
    IconButton,
    Hidden,
} from '@material-ui/core'

//import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import HomeIcon from '@material-ui/icons/Home'
//import PublicIcon from '@material-ui/icons/Public'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import FaceIcon from '@material-ui/icons/Face'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import { fade } from '@material-ui/core/styles'
import { ReactComponent as Sivut } from './assets/blocks/sivut_1.svg'
import Sidebar from './Sidebar'

import { MDBCol, MDBIcon } from "mdbreact"

//===============================================================================================================

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    },
    hide: {
        display: 'none',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
        width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}))
//===============================================================================================================

const Navbar = (props) => {

    const classes = useStyles()

    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                props.history.push('/login')
            })
    }

    const [open, setOpen] = React.useState(false)
    
    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // }

    return (
        <>
            {/* <div className={classes.purple}> */}
            <AppBar>
                <Toolbar>
                    <div className={classes.title}>
                        <div className="d-flex ">
                            <Hidden xsDown>
                                <NavLink to="#" className={classes.menuButton}>
                                    <IconButton aria-label="logo">
                                        <Sivut/>
                                    </IconButton>
                                </NavLink>
                            </Hidden>
                            <Hidden smUp>
                                <IconButton
                                    aria-label="openDrawer"
                                    onClick={() => setOpen(true)}
                                    edge="start"
                                    className={clsx(classes.menuButton, open && classes.hide)}
                                >
                                    <Sivut/>
                                </IconButton>
                                <Sidebar
                                    state={open} 
                                    firebaseUser={props.firebaseUser}
                                    cerrarSesion={() => cerrarSesion()}
                                >
                                    <>
                                        <div className={classes.drawerHeader}>
                                            <IconButton onClick={() => setOpen(false)}>
                                                <ChevronLeftIcon />
                                            </IconButton>
                                        </div>
                                    </>
                                </Sidebar>
                            </Hidden>
                            
                            <MDBCol md="6">
                                <div className="input-group md-form form-sm form-1 pl-0">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text gold lighten-3" id="basic-text1">
                                            <MDBIcon className="text-black" icon="search" />
                                        </span>
                                    </div>
                                    <input className="form-control my-0 py-1 text-white" type="text" placeholder="Comunidad" aria-label="search" />
                                </div>
                            </MDBCol>
                            {/* <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                placeholder="Comunidad"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label' : 'search' }}
                                />
                            </div> */}
                        </div>
                    </div>
                    
                    <Hidden xsDown>
                        <div >
                            <div className="d-flex ">
                                <NavLink to="/" exact>
                                    <IconButton aria-label="home">
                                        <HomeIcon fontSize="large"/>
                                    </IconButton>
                                </NavLink>

                                {
                                    props.firebaseUser !== null ? (
                                        <NavLink to="/admin">
                                            <IconButton aria-label="admin">
                                                <EmojiEventsIcon fontSize="large"/>
                                            </IconButton>
                                        </NavLink>
                                    ) : null
                                }

                                {
                                    props.firebaseUser !== null ? (
                                        <NavLink to="/profile">
                                            <IconButton aria-label="profile">
                                                <AccountCircleIcon fontSize="large"/>  
                                            </IconButton>
                                        </NavLink>
                                    ) : null
                                }

                                {
                                    props.firebaseUser !== null ? (
                                        <IconButton aria-label="login" onClick={() => cerrarSesion()}>
                                            <PowerSettingsNewIcon fontSize="large"/>
                                        </IconButton>
                                    ) : (
                                        <NavLink to="/login">
                                            <IconButton aria-label="login">
                                                <AccountCircleIcon fontSize="large"/>
                                            </IconButton>
                                        </NavLink>
                                    )
                                }

                            </div>
                        </div>              
                    </Hidden>

                </Toolbar>
            </AppBar>
            {/* </div> */}

            <div className={classes.offset}></div>
        </>
    )
}

export default withRouter(Navbar)
