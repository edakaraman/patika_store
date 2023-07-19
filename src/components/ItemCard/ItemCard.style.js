import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 12,
    backgroundColor: '#EAEAEA',
    borderRadius: 9,
  },
  item_img: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 9,
  },
  item_title: {
    fontWeight: 'bold',
  },
  item_price: {
    color: 'gray',
    textAlign:'left',
  },
  btn: {
    backgroundColor: '#ff6000',
    borderRadius: 5,
    width: 40,
    textAlign: 'center',
  },
  texts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    margin:3,
  },
  stock_info:{
    color: "red", 
    textAlign: "center",
  },
});
