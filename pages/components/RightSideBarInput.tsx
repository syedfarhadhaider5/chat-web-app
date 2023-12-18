import {Box} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import MoodIcon from '@mui/icons-material/Mood';
import MicNoneIcon from '@mui/icons-material/MicNone';
import IosShareIcon from '@mui/icons-material/IosShare';
import SendIcon from '@mui/icons-material/Send';

const RightSideBarInput  = () =>{
    const theme = useTheme()
    const InputMessageSendContainer = {
        paddingLeft: "30px",
        paddingRight: "30px",
        backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#121212',
        borderTop: ".1px solid" + theme.palette.mode === 'light' ? '#DFDFDF' : '#303030', // Set the border color
        borderBottom: ".1px solid" + theme.palette.mode === 'light' ? '#DFDFDF' : '#303030', // Set the
        height: "85px",
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center"
    }
    const InputMessageSendIcon = {
        color: "#A0A0A0",
    }
    const InputMessageSendIconInput = {
        background:  theme.palette.mode === 'light' ? '#FFFFFF' : '#121212',
        width: '300px',
        height: '44px',
        paddingLeft: '8px',
        outline: 'none',
        color: "#A0A0A0",
    }
    const SendMessageBtn = {
        background: '#00A3FF',
        color: '#FFFFFF',
        maxWidth: 'fit-content',
        borderRadius: 10,
        marginLeft: '15px',
        padding: "5px",
        fontWeight: "semi-bold"
    }
    return(
        <>
            <Box sx={InputMessageSendContainer}>
                    <Box sx={{display: 'flex', alignItems: "center"}}>
                        <Box sx={InputMessageSendIcon}>  <MoodIcon style={{fontSize: "25px"}} /></Box>
                        <Box><input  style={InputMessageSendIconInput} placeholder={"Type message..."} /></Box>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: "center",height: "47px"}}>
                        <Box  sx={{InputMessageSendIcon,display: 'flex', alignItems: "center"}}><MicNoneIcon style={{fontSize: "25px"}} /></Box>
                        <Box sx={InputMessageSendIcon}><IosShareIcon style={{fontSize: "25px"}} /></Box>
                        <button style={SendMessageBtn}>Send <SendIcon style={{fontSize: "25px"}} /></button>
                    </Box>
            </Box>
        </>
    )
}
export default RightSideBarInput