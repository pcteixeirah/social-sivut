import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase'
import { withRouter } from 'react-router-dom'
//import { Form, FormControl, Button } from 'react-bootstrap'
import { AppBar, Toolbar, Typography, makeStyles, Link, InputBase, IconButton } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import HomeIcon from '@material-ui/icons/Home'
import PublicIcon from '@material-ui/icons/Public'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import { fade } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
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
            width: '20ch',
        },
    },
}))

const Navbar = (props) => {

    const classes = useStyles()

    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                props.history.push('/login')
            })
    }

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <div className={classes.title}>
                        <div className="d-flex ">
                            <Typography variant="h6" color="inherit">
                                <NavLink to="#" className={classes.menuButton}>
                                    <IconButton aria-label="logo">
                                        <HomeIcon fontSize="large"/>
                                    </IconButton>
                                </NavLink>
                                SIVUT P2P
                            </Typography>
                            
                            <div className={classes.search}>
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
                            </div>
                        </div>
                    </div>
                    
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
                                            <PublicIcon fontSize="large"/>
                                        </IconButton>
                                    </NavLink>
                                ) : null
                            }

                            {
                                props.firebaseUser !== null ? (
                                    <NavLink to="/profile">
                                        <IconButton aria-label="profile">
                                            <EmojiEventsIcon fontSize="large"/>
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
                </Toolbar>
            </AppBar>

            <div className={classes.offset}></div>
        </div>
    )
}

export default withRouter(Navbar)
