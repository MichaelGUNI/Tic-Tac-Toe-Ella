import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Board({ board, handlePress, winningSequence }) {
    const isWinningCell = (index) => winningSequence.includes(index);

    return (
        <View style={styles.chessBoard}>
            {board.map((x, idx) => (
                <TouchableOpacity
                    activeOpacity={0.5}
                    key={idx}
                    onPress={() => handlePress(idx)}
                    style={[
                        styles.box,
                        isWinningCell(idx) && styles.winningCell,
                    ]}>
                    <View style={styles.box}>
                        <Text style={styles.chessText}>{x}</Text>
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
        backgroundColor: 'green'
    },
    chessText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    winningCell: {
        backgroundColor: 'yellow', // Change to any color you prefer for highlighting
    },
});