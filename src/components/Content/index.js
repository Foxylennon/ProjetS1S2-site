
import {  Box, Container,  Typography, useTheme } from '@mui/material';
import { Colors } from "../../styles/theme";
import { BannerContent, BannerText,  } from '../../styles/banner';
import img2 from "../../assets/Nano.png"




export default function Content(){

    const theme = useTheme();
    

    return(

        <Container maxWidth="false" disableGutters>

            <Box display='flex' justifyContent= 'center' width= '100%' height= '40vh' bgcolor={Colors.primary}>
            <BannerContent>
              <BannerText  >Become the ultimate antibody. No more pills. The only cure... is you</BannerText>
            </BannerContent>   
            {/* --- LE DIVIDER SVG --- */}
          <Box
            component="svg"
            viewBox="0 0 1440 320"
            sx={{
              position: 'absolute',
              bottom: -4,
              left: 0,
              width: '100%',
              height: 'auto', // Ajuster la hauteur pour rendre la vague plus/moins prononcée
              display: 'block', // Important pour éviter les marges fantômes
              zIndex: 0,
            }}
          >
            {/* Ce chemin (path) dessine la courbe. Le "fill" doit matcher la section du bas */}
            <path
              fill={Colors.primary}
              fillOpacity="1"
              d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,176C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </Box>  
        </Box>
          
        <Box sx={{ py: 4, px: 20,display: "flex", justifyContent: "flex-end", }}>
          <Box sx={{flex: 1}}>

          </Box>
          
          <Box sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: 6,
          }}>
            <Typography variant="h4" fontWeight="bold">
              A 2D ROGUE LIKE SET IN THE HUMAN BODY
            </Typography>

            <Typography sx={{mt: 2, pl:4 }}>
              Pharmacology is history. To save the patient, you must shrink down and strike the evil at its core. The body is your battlefield.
            </Typography>

            <Typography sx={{ mt: 2 }}>
              Encore du contenu...
            </Typography>
          </Box>

          <Box sx={{flex: 2}}>
            <img src = {img2} style={{ 
              height: '80%', // L'image fait exactement 30px de haut
              width: 'auto'   // La largeur s'ajuste pour ne pas écraser l'image
            }}/>
          </Box>
          
        </Box>
        <Box sx={{maxwidth: 'sm', height: '30px', bgcolor: Colors.dark}}>
          <Typography sx={{color: Colors.secondary, textAlign: 'center', fontSize: '0.5rem'}}>


              © 2025 Chromo All right reserved
            </Typography>
        </Box>



        </Container>


        
    );
};













