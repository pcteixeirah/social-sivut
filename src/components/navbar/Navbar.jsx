import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase'
import { withRouter } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap';
import {AppBar, Toolbar, Typography, makeStyles, Link} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    }
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
                        <Typography variant="h6">
                            <Link href="#" color="inherit" className={classes.menuButton}>
                                SIVUT P2P
                            </Link>
                        </Typography>
                        

                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Comunidad"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-info">Buscar</Button>
                        </Form>
                    </div>
                    
                    <div >
                        <div className="d-flex ">
                            <NavLink
                                className="btn btn-dark mr-2"
                                to="/"
                                exact
                            >
                                Inicio
                            </NavLink>

                            {
                                props.firebaseUser !== null ? (
                                    <NavLink
                                        className="btn btn-dark  mr-2 "
                                        to="/admin"
                                    >
                                        Admin
                                    </NavLink>
                                ) : null
                            }

                            {
                                props.firebaseUser !== null ? (
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => cerrarSesion()}
                                    >
                                        Cerrar sesión
                                    </button>
                                ) : (
                                    <NavLink
                                        className="btn btn-dark "
                                        to="/login"
                                    >
                                        Login
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
