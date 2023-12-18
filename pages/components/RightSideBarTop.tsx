import {useEffect, useState} from "react";
import {Box, IconButton, Switch, Typography} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const RightSideBarTop  = () =>{
    const [toggleState, setToggleState] = useState(false);
    const theme = useTheme()

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
    const TopHeader = {
        backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#121212',
        height: "90px",
        borderTop: ".1px solid" + theme.palette.mode === 'light' ? '#DFDFDF' : '#303030', // Set the border color
        borderBottom: ".1px solid" + theme.palette.mode === 'light' ? '#DFDFDF' : '#303030', // Set the border color
        paddingLeft: "30px",
        paddingRight: "30px",
        width: "70vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
    const userOpenChatName = {
        color: theme.palette.mode === 'light' ? '#515151' : '#F0F0F0',
        fontSize: "20px",

    }
    const userOpenChatStatus = {
        color: theme.palette.mode === 'light' ? '#00A3FF' : '#00A3FF',
        fontSize: "14px",
    }
    const SidebarIcon ={
        color: "#A0A0A0",
    }
    return(
        <>
            <Box style={TopHeader}>
                <Box sx={{display: 'flex'}}>
                    <img src={'img/user1.jpeg'} className={'rounded-full w-12 h-12'}  />
                    <Box style={{paddingLeft: '16px',}}>
                        <Typography variant={"subtitle1"} style={userOpenChatName}>Liam Anderson</Typography>
                        <Typography variant={"subtitle2"} style={userOpenChatStatus}>Online</Typography>
                    </Box>
                </Box>
                <Box style={SidebarIcon}>
                        <PhoneIcon style={{fontSize: "25px",marginRight: "10px",cursor: "pointer"}}  />
                        <MissedVideoCallIcon style={{fontSize: "25px",marginRight: "10px",cursor: "pointer"}}   />
                        <MoreVertIcon style={{fontSize: "25px",marginRight: "10px",cursor: "pointer"}}  />
                    <Switch
                        checked={toggleState}
                        onChange={handleToggleChange}
                        inputProps={{ 'aria-label': 'toggle' }}
                        color="primary"
                    />
                </Box>
            </Box>
        </>
    )
}
export default RightSideBarTop