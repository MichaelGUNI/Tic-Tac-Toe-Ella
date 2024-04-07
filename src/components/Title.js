import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";

export default function Title({text}) {
    return (
        <View style={styles.box}>
            <Text style={styles.title}>{ text }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        alignSelf: 'stretch',
        height: 55,
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 5,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: Colors.darkGreen
    },
    title: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: '800',
        fontSize: 16
    }
}
)