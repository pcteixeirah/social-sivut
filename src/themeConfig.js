import { createMuiTheme } from '@material-ui/core/styles'
import {
    teal, 
    // blueGrey, 
    // deepPurple
} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: teal[900]
            // main: blueGrey[900]
            // main: deepPurple[900]
        }
    }
})

export default theme;