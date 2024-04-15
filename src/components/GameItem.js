import {Text, View, StyleSheet} from 'react-native';
import TButton from './TButton';


const GameItem = ({ id, result, steps, date, time }) => {

  return (
     
    <View style={styles.item}>
      <Text>Result: {result} wins  </Text>
      <Text>ID: {id}  </Text>
      <Text>Steps: {steps}  </Text>
      <Text>Date: {date}  </Text>
      <Text>Time: {time}  </Text>
      <View style={styles.buttonContainer}>
        <TButton title={"Load"} onPress={null} />
        <TButton title={"Delete"} onPress={null} />
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