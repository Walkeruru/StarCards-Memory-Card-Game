import { useEffect, useState } from "react";
import arrayShuffle from 'array-shuffle';
import Card from "./Card";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import '../App.css'

const Game = () => {
    const [cards, setCards] = useState([
        { src: 'Ahsoka_Tano.webp', personaje: 'Ahsoka Tano', key: 1 },
        { src: 'Anakin_Skywalker.webp', personaje: 'Anakin Skywalker', key: 2 },
        { src: 'Boba-Fett.webp', personaje: 'Boba Fett', key: 3 },
        { src: 'Cadbane.webp', personaje: 'Cadbane', key: 4 },
        { src: 'Darthmaul.webp', personaje: 'Darth Maul', key: 5 },
        { src: 'Grievous.webp', personaje: 'General Grievous', key: 6 },
        { src: 'JarJarBinks.webp', personaje: 'Jar Jar Binks', key: 7 },
        { src: 'Mace_Windu.webp', personaje: 'Mace Windu', key: 8 },
        { src: 'Obi_wan_kenobi.webp', personaje: 'obi Wan Kenobi', key: 9 },
        { src: 'Padme_Amidala.webp', personaje: 'Padme Amidala', key: 10 },
        { src: 'R2-D2.webp', personaje: 'R2-D2', key: 11 },
        { src: 'Yoda.webp', personaje: 'Yoda', key: 12 },
    ]);

    const [score, setScore] = useState(0);
    const [clicked, setClicked] = useState([]);
    const [highScore, setHighScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState();
    const [gameWin, setGameWin] = useState(); 

    useEffect(() => {
        setCards(arrayShuffle(cards));
        if (score >= highScore) {
            setHighScore(score);
        }
    }, [score])

    return (
        <>
            {gameWin && <Modal
                aria-labelledby="win"
                aria-describedby="you win"
                open
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                        backgroundColor: 'rgba(0, 190, 0, 0.7)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        color: 'white'
                    }}
                >
                    <Typography
                        component="h2"
                        id="modal-title"
                        sx={{ 
                            fontSize:{
                            xs:'3em',
                            sm:'4em',
                            },
                            mb:{
                                xs:0,
                                sm:1
                            }
                        }}
                        level="h4"
                        textcolor="inherit"
                        fontFamily={'Starjedi'}
                        fontWeight="lg"
                    >
                        You Win
                    </Typography>
                    <Typography id="modal-desc" textcolor="text.tertiary" fontFamily={'Starjedi'} sx={{fontSize:{xs:'0.8rem', sm:'1rem'}}}>
                        Congrats, you did great.
                    </Typography>
                    <Button variant="soft" color='neutral' onClick={()=>setGameWin()} sx={{mt:4}}>
                        Play Again
                    </Button>
                </Sheet>
            </Modal>}
            {isGameOver &&  <Modal
                aria-labelledby="Gameover"
                aria-describedby="Gameover"
                open
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        color: 'white'
                    }}
                >
                    <Typography
                        component="h2"
                        id="modal-title"
                        sx={{ 
                            fontSize:{
                            xs:'3em',
                            sm:'4em',
                            },
                            mb:{
                                xs:0,
                                sm:1
                            }
                        }}
                        level="h4"
                        textcolor="inherit"
                        fontFamily={'Starjedi'}
                        fontWeight="lg"
                    >
                        Game over
                    </Typography>
                    <Typography id="modal-desc" textcolor="text.tertiary" fontFamily={'Starjedi'} sx={{fontSize:{xs:'0.8rem', sm:'1rem'}}}>
                        you clicked the same image twice :c
                    </Typography>
                    <Button variant="soft" color='neutral' onClick={()=>setIsGameOver()} sx={{mt:4}}>
                        Play Again
                    </Button>
                </Sheet>
            </Modal>}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ fontFamily: 'Starjedi', color: 'white' }}>Current Score: {score} </Typography>
                <Typography sx={{ fontFamily: 'Starjedi', color: 'white' }}>High Score: {highScore}</Typography>
            </div>
            <div className={'grid'}>
                <Grid container spacing={2}>
                    {cards.map(card => {
                        return <Grid xs={4} md={3} key={card.key}>
                            <Card src={card.src} personaje={card.personaje} onClick={() => {
                                if (clicked.includes(card.key)) {
                                    setIsGameOver(true);
                                    setScore(0);
                                    setClicked([]);
                                } else if(score==11 && !clicked.includes(card.key)){
                                    setGameWin(true);
                                    setScore(0);
                                    setClicked([]);
                                }
                                else{
                                    setClicked(clicked.concat(card.key));
                                    setScore(score + 1);
                                }
                            }} className={'carta'}></Card>
                        </Grid>
                    })}
                </Grid>
            </div>
        </>
    )
}

export default Game;