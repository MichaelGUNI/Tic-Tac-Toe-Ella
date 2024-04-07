import { StyleSheet, Text, View, ScrollView } from "react-native";
import Colors from "../constants/Colors";

export default function Message({text}) {
    return (

        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <Text style={{ color: 'white' }}>
                    {text}
                </Text>
            </ScrollView>
          
        </View>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.darkGrey,
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 5,
        margin: 10,
        padding: 8
    }
}
);