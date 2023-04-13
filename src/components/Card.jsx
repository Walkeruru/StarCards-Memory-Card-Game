import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../style/card.css';

const Card = (props) => {
    return (
        <>
            <CardMUI sx={{ maxWidth: 345, mt: 2 }} onClick={props.onClick}>
                <CardActionArea className='cardAction' disableRipple={true}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.src}
                        alt={props.personaje}
                        sx={{ objectFit: 'scale-down' }}
                        className='cardtry'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', fontFamily:'Starjedi', fontSize:{
                            xs:'0.9rem',
                            sm:'1.5rem',
                        }}}>
                            {props.personaje}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </CardMUI>
        </>
    )
}

export default Card;