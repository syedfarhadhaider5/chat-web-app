import { useTheme } from '@mui/material/styles';
import {Badge, Box, Button, TextField, Typography} from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import PushPinIcon from '@mui/icons-material/PushPin';
import {useState} from "react";

const LeftSidebar = () =>{
    const theme = useTheme()
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    const chatLeftSideBar = {
        backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#121212',
        width: "390px",
        height: '100vh',
        border: `.1px solid ${theme.palette.type === 'light' ? '#5E5E5E' : '#303030'}`, // Set the border color
        overflowY: 'auto',
    };
    const ChatHeaderContainer = {
        paddingLeft: "30px",
        paddingRight: "30px",
    }
    const InputContainer = {
        paddingLeft: "30px",
        paddingRight: "30px",
    }
    const PinChatContainer = {
        paddingLeft: "30px",
        paddingRight: "30px",
    }
    const ChatHeader = {
        color: '#00A3FF',
        width: '197px',
        height: '40px',
        fontWeight: 'semiBold',
    }
    const inputSearchBox = {
        border: `.1px  solid ${theme.palette.type === 'light' ? '#CCCFD0' : '#303030'}`, // Set the border color
        fontSize: '16px',
    }
    const inputSearchBoxFocus = {
        backgroundColor: 'yellow',
        border: `.1px solid ${theme.palette.type === 'light' ? '#CCCFD0' : '#303030'}`, // Set the border color
    }
    const inputSearch = {
        background:  theme.palette.mode === 'light' ? '#FFFFFF' : '#121212',
        width: '222px',
        height: '44px',
        paddingLeft: '8px',
        outline: 'none',
        color: '#303030'
    }
    const searBtn = {
        background: '#00A3FF',
        color: '#FFFFFF',
        width: '44px',
        height: '44px',
        borderRadius: 10,
        marginLeft: '15px',

    }
    const chatPinned = {
        color: theme.palette.mode === 'light' ? '#818181' : '#BCBCBC',
        fontSize: "12px",
        paddingLeft: "30px",
        paddingRight: "30px",
    }
    const chatUser = {
        height: "82px",
        width: '100%',
        paddingLeft: "30px",
        paddingRight: "30px",
    }
    const userName = {
        color: theme.palette.mode === 'light' ? '#717171' : '#DADADA',
        fontSize: "18px",
    }
    const userTyping = {
        color: theme.palette.mode === 'light' ? '#00A3FF' : '#00A3FF',
        fontSize: "14px"
    }
    const userTiming = {
        color: theme.palette.mode === 'light' ? '#A0A0A0' : '#A0A0A0',
        fontSize: "14px",
    }
    const userMessageCount = {
        background: theme.palette.mode === 'light' ? '#00A3FF' : '#00A3FF',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px', // Adjust the size as needed
        height: '24px', // Adjust the size as needed
        borderRadius: '50%',
        color: '#FFFFFF',
        fontSize: "14px"
    }
    const UserLatestMessage = {
        color: theme.palette.mode === 'light' ? '#5F5F5F' : '#E0E0E0',
        fontSize: "14px"
    }
    return(
        <>
            <Box style={chatLeftSideBar}>
                <Box display={'flex'} alignItems={"center"} className={'pt-4 pb-4'} style={ChatHeaderContainer}>
                    <Typography variant={'h4'} style={ChatHeader}>
                        <ChatIcon style={{ color: '#00A3FF', fontSize: '42px',marginRight: '15px', }} />
                        Rentro
                    </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} className={'pt-4 pb-4'} style={InputContainer}>
                    <Box style={{...inputSearchBox}}>
                        <SearchIcon style={{color: '#ABAFB1',paddingLeft: '8px',fontSize: '36px',}} />
                        <input style={{
                            ...inputSearch,
                            ':focus': inputSearchBoxFocus,
                        }}
                        className={'s'}
                        placeholder={'Search messages, people'} />
                    </Box>
                   <button type={'submit'} style={searBtn}> <AddIcon/></button>
                </Box>
                <Box style={chatPinned} display={'flex'}   className={'pt-4 pb-4'}>
                    <PushPinIcon />
                    <Typography  style={{paddingLeft: '8px'}}  variant={'subtitle2'}>PINNED CHATS</Typography>
                </Box>
                <Box style={chatUser} display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'} className={'pt-4 pb-4'}>
                    <Box display={"flex"}>
                        <Box display={"flex"} alignItems={"flex-start"}>
                            <img src={'img/user1.jpeg'} className={'rounded-full w-12 h-12'}  />
                            <Box style={{paddingLeft: '16px',}}>
                                <Typography varint={"subtitle1"} style={userName}>Liam Anderson</Typography>
                                <Typography varint={"subtitle2"} style={userTyping}>Typing...</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box><Typography varint={"subtitle2"} style={userTiming}>04:50 PM</Typography></Box>
                </Box>
                <Box style={chatUser}
                     onClick={handleClick}
                     sx={{
                         backgroundColor: isClicked ? theme.palette.mode === 'light' ? '#D9F1FF' : '#0C3F5B' : '', //'#D9F1FF' : '', // Change color when clicked
                    }}
                     display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'} className={'pt-4 pb-4'}>
                    <Box display={"flex"}>
                        <Box display={"flex"} alignItems={"flex-start"}>
                            <img src={'img/user_2.jpeg'} className={'rounded-full w-12 h-12'}  />
                            <Box style={{paddingLeft: '16px'}}>
                                <Typography varint={"subtitle1"} style={userName}>Cummins</Typography>
                                <Typography varint={"subtitle2"} style={userTyping}></Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box><Typography varint={"subtitle2"} style={userTiming}>12:50 PM</Typography></Box>
                </Box>
                <Box style={chatUser}  display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'} className={'pt-4 pb-4'}>
                    <Box display={"flex"}>
                        <Box display={"flex"} alignItems={"flex-start"}>
                            <img src={'img/user_3.jpeg'} className={'rounded-full w-12 h-12'}  />
                            <Box style={{paddingLeft: '16px'}}>
                                <Typography varint={"subtitle1"} style={userName}>Sergey Ugryumov</Typography>
                                <Typography varint={"subtitle2"} style={userTyping}></Typography>
                                <Typography varint={"subtitle2"} style={UserLatestMessage}>Hey, how's it going?</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
                        <Typography varint={"subtitle2"} style={userTiming}>12:50 PM</Typography>
                        <Typography style={userMessageCount} varint={"subtitle2"}>
                            3
                        </Typography>
                    </Box>
                </Box>
                <Box style={chatPinned} display={'flex'}  className={'pt-4 pb-4'}>
                    <ChatIcon />
                    <Typography style={{paddingLeft: '8px'}} variant={'subtitle2'}>ALL MESSAGES</Typography>
                </Box>
                <Box style={chatUser}  display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'} className={'pt-4 pb-4'}>
                    <Box display={"flex"}>
                        <Box display={"flex"} alignItems={"flex-start"}>
                            <img src={'img/user_4.jpeg'} className={'rounded-full w-12 h-12'}  />
                            <Box style={{paddingLeft: '16px'}}>
                                <Typography varint={"subtitle1"} style={userName}>Yury Isakov</Typography>
                                <Typography varint={"subtitle2"} style={userTyping}></Typography>
                                <Typography varint={"subtitle2"} style={UserLatestMessage}>Hey, how's it going?</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
                        <Typography varint={"subtitle2"} style={userTiming}>12:50 PM</Typography>
                        <Typography style={userMessageCount} varint={"subtitle2"}>
                            1
                        </Typography>
                    </Box>
                </Box>
                <Box style={chatUser} onClick={handleClick}
                     sx={{
                         backgroundColor: isClicked ? theme.palette.mode === 'light' ? '#D9F1FF' : '#0C3F5B' : '', //'#D9F1FF' : '', // Change color when clicked
                     }} display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'} className={'pt-4 pb-4'}>
                    <Box display={"flex"}>
                        <Box display={"flex"} alignItems={"flex-start"}>
                            <img src={'img/user_5.jpeg'} className={'rounded-full w-12 h-12'}  />
                            <Box style={{paddingLeft: '16px'}}>
                                <Typography varint={"subtitle1"} style={userName}>Jad Tabba</Typography>
                                <Typography varint={"subtitle2"} style={userTyping}></Typography>
                                <Typography varint={"subtitle2"} style={UserLatestMessage}>Just got back from a hiking trip!</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
                        <Typography varint={"subtitle2"} style={userTiming}>02:50 PM</Typography>
                        <Typography style={userMessageCount} varint={"subtitle2"}>
                            3
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default LeftSidebar