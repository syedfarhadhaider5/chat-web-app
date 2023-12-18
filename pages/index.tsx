import {Box, Grid, IconButton, Switch, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import DarkMuiTheme from "@/DarkMuiTheme";
import { useTheme } from '@mui/material/styles';
import LeftSidebar from "@/pages/components/LeftSidebar";
import rightSidebar from "@/pages/components/RightSidebar";
import RightSidebar from "@/pages/components/RightSidebar";


const HomePage = () => {
    const [toggleState, setToggleState] = useState(false);
    const theme = useTheme();

    const chatMessagesSend = {
        backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#292929',
        color: theme.palette.text.primary,
        padding: '10px',
        margin: '10px',
        borderRadius: '4px',
    };
    const chatMessagesReply = {
        backgroundColor: theme.palette.mode === 'light' ? '#00A3FF' : '#00A3FF',
        color: theme.palette.text.primary,
        padding: '10px',
        margin: '10px',
        borderRadius: '4px',
    };
    const chatMessagesName = {
        color: theme.palette.mode === 'light' ? '#515151' : '#DADADA',
    }
    const chatMessagesTime = {
        color: theme.palette.mode === 'light' ? '#A0A0A0' : '#A0A0A0',
    }
    return(
        <>

            {/*<Box style={chatMessagesName}>*/}
            {/*    <Typography  variant={'subtitle2'}>Farhad</Typography>*/}
            {/*</Box>*/}
            {/*<Box style={chatMessagesTime}>*/}
            {/*    <Typography  variant={'subtitle2'}>3.30</Typography>*/}
            {/*</Box>*/}
            {/*<Box style={chatMessagesSend}>*/}
            {/*    <Typography color={'text.primary'}  variant={'subtitle2'}>Send</Typography>*/}
            {/*</Box>*/}
            {/*<Box style={chatMessagesName}>*/}
            {/*    <Typography  variant={'subtitle2'}>Farhad</Typography>*/}
            {/*</Box>*/}
            {/*<Box style={chatMessagesTime}>*/}
            {/*    <Typography  variant={'subtitle2'}>3.30</Typography>*/}
            {/*</Box>*/}
            {/*<Box style={chatMessagesReply}>*/}
            {/*    <Typography color={'text.secondary'} variant={'subtitle2'}>Reply</Typography>*/}
            {/*</Box>*/}
            <Box display={'flex'}>
                <LeftSidebar />
                <Box>
                    <RightSidebar />
                </Box>
            </Box>
            </>
    )
}

export default HomePage