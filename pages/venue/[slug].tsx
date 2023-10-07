import { useRouter } from "next/router";
import Schedule from "../../components/Schedule";
import { Box, Container, Tooltip, Typography } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';

/**
 * Single Venue Page
 */
export default function SingleVenuePge(): JSX.Element {
    const router = useRouter();
    const { slug } = router.query;
    
    //Demo Data
    const data: {[key: string]: any} = {
        yogahouse:{
            name: "The Yoga House",
            header:'Weekly Schedule 00-00/00',
            footer:'',
            logo: '/images/logo_yogahouse.png'
        }
    }
    //Extract Relevant Data
    const venueData = data[slug as string];

    return (
    <Container
        maxWidth={'md'}
        disableGutters
      >
        <Typography variant="h1" sx={{textTransform:'capitalize'}}>{venueData?.name || ''}</Typography>
        <Toolbar />
        <div className="schedule_header">
            {!!venueData?.logo && <img className="venue_logo" src={venueData.logo} />}
            {venueData?.header}
        </div>
        <Schedule />
        <div className="schedule_footer">{venueData?.footer}</div>
    </Container>
    );
}

/**
 * Actions Toolbar
 */
const Toolbar = (): JSX.Element => (
<Box id="toolbar" sx={{backgroundColor:'primary'}}>
    <LangSelect />
    <ImageExport />
</Box>)

const LangSelect = (): JSX.Element => (<>
    <Tooltip title="English">
        <span>EN</span>
    </Tooltip>
    <span style={{margin:'0 2px'}}>|</span>
    <Tooltip title="Thai">
        <span>TH</span>
    </Tooltip>
</>)

const ImageExport = (): JSX.Element => (<>
    <Tooltip title="Download Image">
        <ImageIcon sx={{ml:2, verticalAlign:'middle', cursor:'pointer'}} />
    </Tooltip>
</>)