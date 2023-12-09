import { useTheme } from '@mui/material/styles';
import {Box, Button, TextField, Typography} from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import {color} from "@mui/system";

const LeftSidebar = () =>{
    const theme = useTheme()
    const chatLeftSideBar = {
        backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#121212',
        width: "390px",
        height: '100vh',
        paddingLeft: '30px',
        border: `.1px solid ${theme.palette.type === 'light' ? '#5E5E5E' : '#303030'}`, // Set the border color
    };
    const ChatHeader = {
        color: '#00A3FF',
        width: '197px',
        height: '40px',
        fontWeight: 'semiBold',
    }
    const inputSearchBox = {
        border: `.1px  solid ${theme.palette.type === 'light' ? '#CCCFD0' : '#303030'}`, // Set the border color
        color: '#ABAFB1',
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
        outline: 'none'
    }
    const searBtn = {
        background: '#00A3FF',
        color: '#FFFFFF',
        width: '44px',
        height: '44px',
        borderRadius: 1,
        marginLeft: '15px',

    }
    return(
        <>
            <Box style={chatLeftSideBar}>
                <Box display={'flex'} alignItems={"center"} className={'pt-4 pb-4'}>
                    <Typography variant={'h4'} style={ChatHeader}>
                        <ChatIcon style={{ color: '#00A3FF', fontSize: '42px',marginRight: '15px', }} />
                        Rentro
                    </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} className={'pt-4 pb-4'}>
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
            </Box>
        </>
    )
}
export default LeftSidebar