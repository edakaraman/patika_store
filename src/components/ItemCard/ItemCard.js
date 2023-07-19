import React from "react";
import styles from "./ItemCard.style";
import { View, Image, Text, TouchableOpacity } from "react-native";

const ItemCard = ({ product }) => {
  const onPress = () => setCounter((prevCount) => prevCount + 1);
  const [counter, setCounter] = React.useState(0);

  return (
    <View style={styles.container}>
      <Image style={styles.item_img} source={{ uri: product.imgURL }} />
      <Text style={styles.item_title}> {product.title} </Text>
      <View style={styles.texts}>
        <Text style={styles.item_price}> {product.price} </Text>
        <Text> {counter} </Text>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text> Add </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ color: "red", textAlign: "center" }}>
        {product.inStock ? "" : <Text> Sold Out </Text>}
      </Text>
    </View>
  );
};

export default ItemCard;
