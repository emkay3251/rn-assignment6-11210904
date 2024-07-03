import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    };
    loadCart();
  }, []);

  const removeFromCart = async (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../images/Logo.png")}
          style={styles.titleImage}
        />
        <TouchableOpacity>
          <Image source={require("../images/Search.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.headerText}>CHECKOUT</Text> */}
      <Image source={require("../images/cout.png")} style={styles.cout} />
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Image
                source={require("../images/remove.png")}
                style={styles.removeIcon}
              />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>EST. TOTAL</Text>
        <Text style={styles.totalAmount}>${calculateTotal()}</Text>
      </View>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
        <Icon style={styles.iconbag}name="shopping-bag" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  titleImage: {
    width: 120,
    height: 40,
    resizeMode: "contain",
    left: 100,
  },
  icon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  itemImage: {
    width: 80,
    height: 120,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemSubtitle: {
    fontSize: 14,
    color: "#888",
  },
  itemPrice: {
    fontSize: 16,
    color: "#f4967d",
  },
  removeIcon: {
    width: 24,
    height: 24,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e60000",
  },
  checkoutButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  iconbag:{
  left: -80,
  top: -14,
  },
  cout:{
    top: 20,
    left: 20,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    right: -22,
    top: 15,
    
  },
});

export default CartScreen;
