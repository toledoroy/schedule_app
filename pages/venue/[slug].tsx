import { useRouter } from "next/router";
import Schedule from "../../components/Schedule";
import { Box, Container, Tooltip, Typography } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import { timeHelper } from "../../helpers/timeHelper";

/**
 * Single Venue Page
 */
export default function SingleVenuePge(
    {weekNum = timeHelper.currentWeek()} //new Date('01/05/2023')
    ): JSX.Element {
    const router = useRouter();
    const { slug } = router.query;
    
    // const weekNum = timeHelper.currentWeek();
    console.warn("weekNum:", {weekNum,
        sunday: timeHelper.getDayOfWeek(7, weekNum), //Last Sunday
        monday: timeHelper.getDayOfWeek("monday", weekNum),
        tuesday: timeHelper.getDayOfWeek(0, weekNum), //First Sunday (Before)
        saturday: timeHelper.getDayOfWeek("saturday", weekNum),
    });

    //Demo Data
    const data: {[key: string]: any} = {
        yogahouse:{
            name: "The Yoga House",
            header:`Weekly Schedule ${timeHelper.getDayOfWeek("monday", weekNum).format('DD')}-${timeHelper.getDayOfWeek(6, weekNum).format('DD/MM')}`,
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
        <div id="schedule_display" className={`schedule_${slug}`}>
            <div className="schedule_header">
                {!!venueData?.logo && <img className="venue_logo" src={venueData.logo} />}
                {venueData?.header}
            </div>
            <Schedule />
        </div>
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
        <span style={{margin: '0 20px'}}>Week {timeHelper.currentWeek()}</span>
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