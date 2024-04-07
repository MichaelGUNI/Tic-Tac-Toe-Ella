import { StyleSheet, View } from "react-native";
import Title from "../components/Title";
import Message from "../components/Message";
import TButton from "../components/TButton";
import Strings from "../constants/Strings";

export default function Credits({ navigation }) {
    const navigateBack = () => {navigation.goBack()}
    return (
        <View style={styles.container}>
            <Title text={"Credits"} />
            <Message text={ Strings.credits } />
            <TButton title={"Back"} onPress={navigateBack}></TButton>
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
    }
});