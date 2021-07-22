import React from 'react'
import { auth } from '../../firebase'
import { withRouter } from 'react-router-dom'
import Firestore from '../Firestore'
//import Sidebar from '../navbar/Sidebar'

const Admin = (props) => {
    const [user, setUser] = React.useState(null)
    React.useEffect(() => {
        if (auth.currentUser) {
            console.log('Existe un usuario')
            setUser(auth.currentUser)
        } else {
            console.log('No existe el usuario')
            props.history.push('/login')
        }
    }, [props.history])


    return (
        <div className="mt-5 container">
            {/* <Sidebar/> */}
            <hr/>
            <h3 className="text-center">
                Ruta protegida
            </h3>
            <hr/>
            {
                user && (
                    //<p>{user.email}</p>
                    <Firestore user={user} />
                )
            }
        </div>
    )
}

export default withRouter(Admin)
