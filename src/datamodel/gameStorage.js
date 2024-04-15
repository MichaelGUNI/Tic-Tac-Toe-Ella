import AsyncStorage from "@react-native-async-storage/async-storage";

const key = 'games'
const dummyData = { games: [] }

export async function loadData() {
    try {
        let result = await AsyncStorage.getItem(key)
        if (result != null) {
            console.log(result)
            const myGames = JSON.parse(result)
            return myGames
        }
        return dummyData
    } catch (e) {
        console.log('fail to read data with key', e)
        return dummyData
    }
}

export async function saveData({ game }) {
    try {
        console.log(game)
        if (game == null)
            return

        const existingGames = await AsyncStorage.getItem(key);
        let games = [];

        if (existingGames !== null) {
            console.log(existingGames)
            games = (JSON.parse(existingGames)).games;
            console.log(games)
        }


        game.setId(games.length) //items indexes will be their ids
        games.push(game);
        await AsyncStorage.setItem(key, JSON.stringify({ games: games }));

    } catch (e) {
        console.log('fail to save data', e)
    }
}

export async function saveList(games) {
    try {
        console.log('this is tasks in save list', games)
        const data = { games: games || [] }; // Ensure tasks is an array, default to empty array if null or undefined
        console.log(JSON.stringify(data));
        await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.log('fail to save data', e);
    }
}

export async function removeTask() {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        console.log('fail to save data', e)
    }
}