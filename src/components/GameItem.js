import {Text, View, StyleSheet, Alert} from 'react-native';
import TButton from './TButton';
import { removeTask, loadGameData } from '../datamodel/gameStorage';


const GameItem = ({ id, result, steps, date, time, game, navigation }) => {

  const navToHome = () => navigation.navigate('Home', { gameToLoad: game });


  const onDeleteButtonClick = () => {
    Alert.alert('Delete Game', 'Are you sure to delete the game?', [
        {
            text: 'DELETE',
            onPress: () => {
                console.log('Delete Game Pressed', id)
                removeTask(id);
               
            }
        },
        {
            text: 'Cancel',
            onPress: () => console.log(game),
            style: 'cancel',

        }
    ])
}

const onLoadButtonClick = () => {
    // console.log('Load Game Pressed', game)
    navToHome()
};




  return (
     
    <View style={styles.item}>
      <Text>Result: {result} wins  </Text>
      <Text>ID: {id}  </Text>
      <Text>Steps: {steps}  </Text>
      <Text>Date: {date}  </Text>
      <Text>Time: {time}  </Text>
      <View style={styles.buttonContainer}>
        <TButton title={"Load"} onPress={onLoadButtonClick} />
        <TButton title={"Delete"} onPress={onDeleteButtonClick} />
      </View>
    </View>
  )};

  const styles = StyleSheet.create({
    item: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      backgroundColor: 'lightgrey',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  });

export default GameItem;