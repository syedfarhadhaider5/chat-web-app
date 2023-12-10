import { useTheme } from '@mui/material/styles';
import {Box, Typography} from "@mui/material";
import {display, width} from "@mui/system";

const RightSideBarChat  = () =>{
    const theme = useTheme()
    const ChatContainer = {
        backgroundColor: theme.palette.mode === 'light' ? '#F5F5F5' : '#181818',
        height: "70vh",
        display: 'flex',
        flexDirection: 'column',
        overflowY: "auto",
        overflowX: "hidden"
    }
    const messageContainerSend = {
        display: "flex",
        padding: "10px 30px",
    }
    const messageContainerReceiver = {
        display: "flex",
        padding: "10px 30px",
        alignSelf: "flex-end"
    }
    const ChaMessageSendUserName = {
        color: theme.palette.mode === 'light' ? '#515151' : '#DADADA',
        fontSize: "16px"
    }
    const ChaMessageReceiverUserName = {
        color: theme.palette.mode === 'light' ? '#515151' : '#DADADA',
        fontSize: "16px"
    }
    const ChaMessageSendUserTime = {
        color: theme.palette.mode === 'light' ? '#A0A0A0' : '#A0A0A0',
        fontSize: "12px",
        paddingLeft: "8px",
        display: "flex",
        flexDirection: "column"
    }
    const ChaMessageReceiverUserTime = {
        color: theme.palette.mode === 'light' ? '#A0A0A0' : '#A0A0A0',
        fontSize: "12px",
        paddingLeft: "8px",
        display: "flex",
        flexDirection: "column"
    }
    const ChaMessageSendUserMessage = {
        color: theme.palette.mode === 'light' ? '#515151' : '#FFFFFF',
        background: theme.palette.mode === 'light' ? '#FFFFFF' : '#292929',
        fontSize: "16px",
        padding: "10px",
        border: `.1px solid ${theme.palette.type === 'light' ? '#E7E7E7' : '#323232'}`, // Set the border color
        borderRadius: "8px", // Apply a border-radius to all corners
        borderTopLeftRadius: "0",
        textAlign: "justify",
        width: "400px",
        maxWidth: "fit-content",
        marginTop: "10px",
    }
    const ChaMessageReceiverUserMessage = {
        color: theme.palette.mode === 'light' ? '#FFFFFF' : '#FFFFFF',
        background: theme.palette.mode === 'light' ? '#00A3FF' : '#00A3FF',
        fontSize: "16px",
        padding: "10px",
        border: `.1px solid ${theme.palette.type === 'light' ? '#00A3FF' : '#323232'}`, // Set the border color
        borderRadius: "8px", // Apply a border-radius to all corners
        borderTopLeftRadius: "0",
        textAlign: "justify",
        width: "400px",
        maxWidth: "fit-content",
        marginTop: "10px",
    }

    return(
        <>
            <Box style={ChatContainer}>

                <Box style={messageContainerSend}>
                    <img src={'img/user1.jpeg'} className={'rounded-full w-10 h-10'}  />
                    <Box sx={{display: "flex", flexDirection: "column",paddingLeft: "16px",alignItems: 'flex-start'}}>
                        <Box sx={{display: "flex", alignItems: "baseline"}}>
                            <Box><Typography style={ChaMessageSendUserName}>Liam Anderson</Typography></Box>
                            <Box><Typography style={ChaMessageSendUserTime}>10:30 AM</Typography></Box>
                        </Box>
                        <Box style={ChaMessageSendUserMessage}>
                            <p>Absolutely! I'm thinking of going for a hike on Saturday. How
                                about you?Absolutely!</p>
                        </Box>
                    </Box>
                </Box>
                <Box style={messageContainerReceiver}>
                    <Box sx={{display: "flex", flexDirection: "column",paddingRight: "16px",alignItems: 'flex-end'}}>
                        <Box sx={{display: "flex", alignItems: "baseline"}}>
                            <Box><Typography style={ChaMessageReceiverUserName}>Cummins</Typography></Box>
                            <Box><Typography style={ChaMessageReceiverUserTime}>10:30 AM</Typography></Box>
                        </Box>
                        <Box style={ChaMessageReceiverUserMessage}>
                            <p>wow</p>
                        </Box>
                    </Box>
                    <img src={'img/user_2.jpeg'} className={'rounded-full w-10 h-10'}  />

                </Box>
                <Box style={messageContainerSend}>
                    <img src={'img/user1.jpeg'} className={'rounded-full w-10 h-10'}  />
                    <Box sx={{display: "flex", flexDirection: "column",paddingLeft: "16px",alignItems: 'flex-start'}}>
                        <Box sx={{display: "flex", alignItems: "baseline"}}>
                            <Box><Typography style={ChaMessageSendUserName}>Liam Anderson</Typography></Box>
                            <Box><Typography style={ChaMessageSendUserTime}>10:30 AM</Typography></Box>
                        </Box>
                        <Box style={ChaMessageSendUserMessage}>
                            <p>When!</p>
                        </Box>
                    </Box>
                </Box>
                <Box style={messageContainerReceiver}>
                    <Box sx={{display: "flex", flexDirection: "column",paddingRight: "16px",alignItems: 'flex-end'}}>
                        <Box sx={{display: "flex", alignItems: "baseline"}}>
                            <Box><Typography style={ChaMessageReceiverUserName}>Cummins</Typography></Box>
                            <Box><Typography style={ChaMessageReceiverUserTime}>10:30 AM</Typography></Box>
                        </Box>
                        <Box style={ChaMessageReceiverUserMessage}>
                            <p>Am Ready After 20 minutes</p>
                        </Box>
                    </Box>
                    <img src={'img/user_2.jpeg'} className={'rounded-full w-10 h-10'}  />

                </Box>
                <Box style={messageContainerSend}>
                    <img src={'img/user1.jpeg'} className={'rounded-full w-10 h-10'}  />
                    <Box sx={{display: "flex", flexDirection: "column",paddingLeft: "16px",alignItems: 'flex-start'}}>
                        <Box sx={{display: "flex", alignItems: "baseline"}}>
                            <Box><Typography style={ChaMessageSendUserName}>Liam Anderson</Typography></Box>
                            <Box><Typography style={ChaMessageSendUserTime}>10:30 AM</Typography></Box>
                        </Box>
                        <Box style={ChaMessageSendUserMessage}>
                            <p>Hurry Up am waiting</p>
                        </Box>
                    </Box>
                </Box>
                <Box style={messageContainerReceiver}>
                    <Box sx={{display: "flex", flexDirection: "column",paddingRight: "16px",alignItems: 'flex-end'}}>
                        <Box sx={{display: "flex", alignItems: "baseline"}}>
                            <Box><Typography style={ChaMessageReceiverUserName}>Cummins</Typography></Box>
                            <Box><Typography style={ChaMessageReceiverUserTime}>10:39 AM</Typography></Box>
                        </Box>
                        <Box style={ChaMessageReceiverUserMessage}>
                            <p>Ok</p>
                        </Box>
                    </Box>
                    <img src={'img/user_2.jpeg'} className={'rounded-full w-10 h-10'}  />

                </Box>


            </Box>
        </>
    )
}
export default RightSideBarChat