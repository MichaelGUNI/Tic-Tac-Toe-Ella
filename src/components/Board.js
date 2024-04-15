import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import isWinningCell from '../datamodel/game';

export default function Board({ board, handlePress, winningSequence }) {

    return (
        <View style={styles.chessBoard}>
            {board.map((x, idx) => (
                <TouchableOpacity
                    activeOpacity={0.5}
                    key={idx}
                    onPress={() => handlePress(idx)}>
                    <View style={styles.box}>
                        <Text style={
                            isWinningCell(winningSequence, idx) ? styles.winningCellText : styles.chessText
                        }>{x}</Text>
                        {/* <Text style={styles.chessText}>{x}</Text> */}
                    </View>
                </TouchableOpacity>
                )
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    chessBoard: {
        width: 300,
        height: 300,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 15,
        backgroundColor: 'orange',
    },
    box: {
        width: 80,
        height: 80,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    chessText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },
    winningCellText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red', 
    },
});