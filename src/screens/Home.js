import { Alert, StyleSheet, Text, View } from 'react-native';
import Board from '../components/Board';
import TButton from '../components/TButton';
import Title from '../components/Title';
import { useEffect, useState } from 'react';
import { calculateGameStatus, checkWinner } from '../datamodel/game.js';
import { saveData } from '../datamodel/gameStorage.js';
import moment from 'moment';
import Game from '../models/Game.js';
import { useIsFocused } from "@react-navigation/native";


export default function Home({ navigation, route }) {
    const emptyBoard = ['', '', '', '', '', '', '', '', '']
    const [winningSequence, setWinningSequence] = useState([]);
    const [winner, setWinner] = useState('');
    const [currentBoard, setCurrentBoard] = useState(emptyBoard); // Track the current state of the board
    const [moveHistory, setMoveHistory] = useState([emptyBoard]); // Track move history
    const [currentMoveIndex, setCurrentMoveIndex] = useState(0); // Track current move index
    const [saveButtonActive, setSaveButtonActive] = useState(false);

    const navToCredits = () => navigation.navigate('Credits')
    const navToRules = () => navigation.navigate('Rules')
    const navToLoad = () => navigation.navigate('Load')

    const [nextSymbol, setNextSymbol] = useState('X'); // Track whose turn it is
    // data loaded from the Load screen
    const gameLoaded = route.params?.gameToLoad; 

    console.log("DATA LOADED:  ",gameLoaded);
    const isFocused = useIsFocused();


    useEffect(() => {
        if (isFocused) {
           if (gameLoaded) {
            // setCurrentBoard();
            setCurrentBoard(gameLoaded);
        } else {
            setEmptyBoard();
        
        }

        }
    }
    , [isFocused]);



    const handlePress = (index) => {
        if (currentBoard[index] === '' && winner === '') {
            const newBoard = [...currentBoard];
            newBoard[index] = nextSymbol;
            setCurrentBoard(newBoard);
            const { winner, winningLines } = checkWinner(newBoard);
 
            setWinner(winner);

            if (winner !== null && winner !== '') {
                setWinningSequence(winningLines.flat());
            }

            // If there is no winner and all board spaces are filled, activate the "Save" button
            if (winner != '' || !newBoard.includes('')) {
                setSaveButtonActive(true);
            }

            setNextSymbol(nextSymbol === 'X' ? 'O' : 'X'); // Switch turns
            handleMove(newBoard);
        }

    };

    const setEmptyBoard = () => {
        setCurrentBoard([...emptyBoard])
        setMoveHistory([emptyBoard]); // Reset move history
        setCurrentMoveIndex(0); // Reset current move index
        setNextSymbol('X')
        setWinner('')
        setWinningSequence([]);
        
    }

    const navigateBackward = () => {
        if (currentMoveIndex > 0) {
            setCurrentMoveIndex(currentMoveIndex - 1);
            setCurrentBoard(moveHistory[currentMoveIndex - 1]);
            setNextSymbol(nextSymbol === 'X' ? 'O' : 'X'); // Switch turns
            setWinner('')
            setWinningSequence([]);

        }
    };

    const navigateForward = () => {
        if (currentMoveIndex < moveHistory.length - 1) {
            setCurrentMoveIndex(currentMoveIndex + 1);
            setCurrentBoard(moveHistory[currentMoveIndex + 1]);
            setNextSymbol(nextSymbol === 'X' ? 'O' : 'X'); // Switch turns
            setWinner('')
            setWinningSequence([]);

        }
    };

    const handleMove = (newBoard) => {
        const newMoveHistory = moveHistory.slice(0, currentMoveIndex + 1);
        setMoveHistory([...newMoveHistory, newBoard]); // Add new board to move history
        setCurrentMoveIndex(currentMoveIndex + 1); // Update current move index
        setCurrentBoard([...newBoard]);
    };

    const onSaveButtonClick = () => {
        Alert.alert('Save Game', 'Are you sure to save the game?', [
            {
                text: 'Save and start a new game',
                onPress: () => {
                    console.log('Save and start a new game')
                   
                    const game = new Game(0, currentBoard, winner, moveHistory.length, moment().format("YYYY-MM-DD"), moment().format("HH:mm:ss"))
                    saveData(
                       { game}
                    )
                    setEmptyBoard();
                }
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Title text={"Tic Tac Toe"} />
            <View style={styles.buttonContainer}>
                <TButton title={"<"} onPress={navigateBackward} disabled={currentMoveIndex === 0} />
                <TButton title={"New Game"} onPress={setEmptyBoard}  disabled={currentMoveIndex === 0}/>
                <TButton title={">"} onPress={navigateForward} disabled={currentMoveIndex === moveHistory.length - 1} />
            </View>
            <Title text={calculateGameStatus(currentBoard)}/>
            <Board board={currentBoard} handlePress={handlePress} winningSequence={winningSequence}/>
            <View style={styles.buttonContainer}>
                <TButton title={"Load"} onPress={navToLoad} />
                <TButton title={"Save"} onPress={onSaveButtonClick} disabled={!saveButtonActive} />
                <TButton title={"Credits"} onPress={navToCredits}/>
                <TButton title={"Rules"} onPress={navToRules} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
});
