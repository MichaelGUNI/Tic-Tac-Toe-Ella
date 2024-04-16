import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { loadData } from "../datamodel/gameStorage";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import GameItem from "../components/GameItem";
import Title from "../components/Title";
import TButton from "../components/TButton";
import Message from "../components/Message";
import Colors from "../constants/Colors";

export default function Load({navigation}) {
    const [games, setGames] = useState([])
    const isFocused = useIsFocused();

    const navigateBack = () => navigation.navigate('Home', { gameToLoad: null });

    const loadGames = async () => {
        const data = await loadData()
        console.log("This is data.tasks", data.games)
        setGames(data.games)
    }

    useEffect(() => {
        if (isFocused) {
            loadGames();
        }
    }, [isFocused]);




    return (
        <View style={styles.container}>
            <Title text={"Load"} />
            <View style={styles.darkContainer}>
                <FlatList
                    data={games}
                    renderItem={({ item }) => <GameItem id={item.id} game={item.game} result={item.result} steps={item.steps} date={item.date} time={item.time}  navigation={navigation}/>}
                    keyExtractor={game => game.id}
                />
            </View>
            <TButton title={"Back"} onPress={navigateBack}></TButton>
        </View>
    );
};

const styles = StyleSheet.create({
    darkContainer: {
        flex: 1,
        backgroundColor: Colors.darkGrey,
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 5,
        margin: 20
    },
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    title: {
        margin: 10,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
});
