import { StyleSheet, Text, View } from 'react-native';
import Board from '../components/Board';
import TButton from '../components/TButton';
import Title from '../components/Title';
import { useState } from 'react';
import { calculateGameStatus, checkWinner } from '../datamodel/game.js';

export default function Home({ navigation }) {
    const emptyBoard = ['', '', '', '', '', '', '', '', '']
    const [winner, setWinner] = useState(null);
    const [currentBoard, setCurrentBoard] = useState(emptyBoard); // Track the current state of the board
    const [moveHistory, setMoveHistory] = useState([emptyBoard]); // Track move history
    const [currentMoveIndex, setCurrentMoveIndex] = useState(0); // Track current move index
    const [saveButtonActive, setSaveButtonActive] = useState(false);

    const navToCredits = () => navigation.navigate('Credits')
    const navToRules = () => navigation.navigate('Rules')

    const [nextSymbol, setNextSymbol] = useState('X'); // Track whose turn it is


    const handlePress = (index) => {
        if (currentBoard[index] === '' && winner == '') {
            const newBoard = [...currentBoard];
            newBoard[index] = nextSymbol;
            setCurrentBoard(newBoard);
            const newWinner = checkWinner(newBoard);
            setWinner(newWinner);

            // If there is no winner and all board spaces are filled, activate the "Save" button
            if (newWinner != '' || !newBoard.includes('')) {
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
    }

    const navigateBackward = () => {
        if (currentMoveIndex > 0) {
            setCurrentMoveIndex(currentMoveIndex - 1);
            setCurrentBoard(moveHistory[currentMoveIndex - 1]);
            setNextSymbol(nextSymbol === 'X' ? 'O' : 'X'); // Switch turns
            setWinner('')
        }
    };

    const navigateForward = () => {
        if (currentMoveIndex < moveHistory.length - 1) {
            setCurrentMoveIndex(currentMoveIndex + 1);
            setCurrentBoard(moveHistory[currentMoveIndex + 1]);
            setNextSymbol(nextSymbol === 'X' ? 'O' : 'X'); // Switch turns
            setWinner('')

        }
    };

    const handleMove = (newBoard) => {
        const newMoveHistory = moveHistory.slice(0, currentMoveIndex + 1);
        setMoveHistory([...newMoveHistory, newBoard]); // Add new board to move history
        setCurrentMoveIndex(currentMoveIndex + 1); // Update current move index
        setCurrentBoard([...newBoard]);
    };



    return (
        <View style={styles.container}>
            <Title text={"Tic Tac Toe"} />
            <View style={styles.buttonContainer}>
                <TButton title={"<"} onPress={navigateBackward} disabled={currentMoveIndex === 0} />
                <TButton title={"New Game"} onPress={setEmptyBoard}  disabled={currentMoveIndex === 0}/>
                <TButton title={">"} onPress={navigateForward} disabled={currentMoveIndex === moveHistory.length - 1} />
            </View>
            <Title text={calculateGameStatus(currentBoard)}/>
            <Board board={currentBoard} handlePress={handlePress}/>
            <View style={styles.buttonContainer}>
                <TButton title={"Load"} onPress={() => null} />
                <TButton title={"Save"} onPress={() => null} disabled={!saveButtonActive} />
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
