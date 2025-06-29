import { useRouter } from "next/router";
import { Container, Typography } from "@mui/material";

/**
 * Single Venue Page
 */
export default function SingleVenuePge(): JSX.Element {
    const router = useRouter();
    const { slug } = router.query;
    
    //Demo Data
    const data: {[key: string]: any} = {
        magda:{
            name: "Magda",
            image: '/images/logo_yogahouse.png',
            text:'',
        }
    };

    //Extract Relevant Data
    const personData = data[slug as string];
    if(!personData) return <>404 - Person Not Found</>;
    return (
    <Container
        maxWidth={'md'}
        disableGutters
      >
        <Typography variant="h1" sx={{textTransform:'capitalize'}}>{personData?.name || ''}</Typography>
        <div className="person">
            {!!personData?.image && <img className="person_image" src={personData.image} />}
        </div>
    </Container>
    );
}

