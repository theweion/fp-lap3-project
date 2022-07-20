import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

const GameOver = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	}
	
	const exitHandler = () => {
		navigate('/');
	}

	const leaderboardHandler = () => {
		navigate('/leaderboard')
	}
	
	return (
		<>
			<CloseButton id="nav-exit" onClick={exitHandler} />
			<h1>Podium</h1>
			{/* <PodiumRender /> */}

			<Button id="nav-next" onClick={leaderboardHandler}>Leaderboard</Button>
		</>
	);
}

export default GameOver;