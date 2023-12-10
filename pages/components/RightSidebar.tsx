import {Box} from "@mui/material";
import RightSideBarTop from "@/pages/components/RightSideBarTop";
import RightSideBarChat from "@/pages/components/RightSideBarChat";
import RightSideBarInput from "@/pages/components/RightSideBarInput";

const RightSidebar  = () =>{
    return(
        <>
            <Box sx={{display: 'flex', flexDirection: 'column',justifyContent: 'space-between',height: '100vh',overflowY: 'auto'}}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                   <RightSideBarTop />
                    <Box><RightSideBarChat /></Box>
                </Box>
                <Box>
                    <RightSideBarInput />
                </Box>
            </Box>
        </>
    )
}
export default RightSidebar