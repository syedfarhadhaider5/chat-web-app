import {Box, Grid, IconButton, Switch, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import DarkMuiTheme from "@/DarkMuiTheme";
import { useTheme } from '@mui/material/styles';


const HomePage = () => {
    const [toggleState, setToggleState] = useState(false);
    const backgroundColorFirst = DarkMuiTheme.palette.chat.messageColors[0];
    const backgroundColorSecond = DarkMuiTheme.palette.chat.messageColors[1];
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
    const handleToggleChange = () => {
        const newToggleState = !toggleState;
        setToggleState(newToggleState);
        // Save to local storage
        localStorage.setItem('toggleTheme', JSON.stringify(newToggleState));
        location.reload();
    };
    useEffect(() => {
        const storedToggleState = localStorage.getItem('toggleTheme');
        if (storedToggleState) {
            setToggleState(JSON.parse(storedToggleState));
        }
    }, []);
    return(
        <>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Switch
                    checked={toggleState}
                    onChange={handleToggleChange}
                    inputProps={{ 'aria-label': 'toggle' }}
                    color="primary"
                />
            </IconButton>
            <Box style={chatMessagesName}>
                <Typography  variant={'subtitle2'}>Farhad</Typography>
            </Box>
            <Box style={chatMessagesTime}>
                <Typography  variant={'subtitle2'}>3.30</Typography>
            </Box>
            <Box style={chatMessagesSend}>
                <Typography color={'text.primary'}  variant={'subtitle2'}>Send</Typography>
            </Box>
            <Box style={chatMessagesName}>
                <Typography  variant={'subtitle2'}>Farhad</Typography>
            </Box>
            <Box style={chatMessagesTime}>
                <Typography  variant={'subtitle2'}>3.30</Typography>
            </Box>
            <Box style={chatMessagesReply}>
                <Typography color={'text.secondary'} variant={'subtitle2'}>Reply</Typography>
            </Box>
        </>
    )
}

export default HomePage