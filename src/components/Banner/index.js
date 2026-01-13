import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { BannerContainer, BannerContent, BannerTitle, BannerImage } from "../../styles/banner";
import travaux from '../../assets/banner.jpg';
import { Colors } from "../../styles/theme";

export default function Banner(){

    const theme = useTheme();



    return(

        <BannerContainer>
            
            <Box
                sx={{
                    backgroundImage: `url(${travaux})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    minheight: '400px', // Use height instead of minHeight temporarily
                    position: 'relative',
                    backgroundAttachment: 'fixed',

                }}
            >
            </Box>

            
        </BannerContainer>


        
    );
};