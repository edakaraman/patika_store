import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  FlatList,
  Image,
} from 'react-native';

import ItemCard from './src/components/ItemCard';
import item_data from './src/json/item_data.json';

export default function App() {
  const renderNews = ({ item }) => <ItemCard product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}> TechStore </Text>
      <TextInput style={styles.input} value={'Search..'} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={item_data}
        renderItem={renderNews}
        numColumns={2}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop:20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 9,
    color: '#393E46',
    backgroundColor: '#EEEDED',
  },
});
