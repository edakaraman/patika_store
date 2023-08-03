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
    fontSize:16,
  },
  counter:{
   fontSize:16,
  },
  btn: {
    backgroundColor: '#F3AA60',
    width: 45,
    padding:1,
    textAlign: 'center',
  },
  btn_text:{
    fontSize:16,
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
