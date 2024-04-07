import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, View } from 'react-native';


const TButton = ({ title, onPress, disabled }) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: disabled ? 'grey' : 'blue'}]} title={title} onPress={onPress} disabled={disabled}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 40,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10
    }, 
    title: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: '800',
        fontSize: 16,
        paddingHorizontal: 10
    }
});

export default TButton;