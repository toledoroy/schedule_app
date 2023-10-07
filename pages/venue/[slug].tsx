import { useRouter } from "next/router";
import Schedule from "../../components/Schedule";
import { Box, Container, Typography } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

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

const Toolbar = (): JSX.Element => (
<Box id="toolbar" sx={{backgroundColor:'primary'}}>
    <LangSelect />
</Box>)

const LangSelect = (): JSX.Element => (<>
    <span>EN</span>
    |
    <span>TH</span>
</>)