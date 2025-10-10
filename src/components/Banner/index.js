import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { BannerContainer, BannerContent, BannerTitle, BannerImage } from "../../styles/banner";
import videoBG from '../../assets/videoBG.mp4';
import travaux from '../../assets/travaux.png';

export default function Banner(){

    const theme = useTheme();



    return(

        <BannerContainer>
            <div className="overlay"></div>
            {/*<video src = {videoBG} autoPlay loop muted></video>*/}
            <BannerImage src={travaux} />
            <BannerContent>
                <BannerTitle variant ="h6"> A GAME WITH ONE EXTRA CHROMOSOME...<br /> BUT IT’S THE FUN ONE</BannerTitle>
            </BannerContent>
        </BannerContainer>
        
    );
};