import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const products = [
  {
    id: "1",
    title: "Office Wear",
    subtitle: "reversible Angora Cardigan",
    price: 120,
    image: require("../images/dress1.png"),
  },
  {
    id: "2",
    title: "Black",
    subtitle: "reversible Angora Cardigan",
    price: 120,
    image: require("../images/dress2.png"),
  },
  {
    id: "3",
    title: "Church Wear",
    subtitle: "reversible Angora Cardigan",
    price: 120,
    image: require("../images/dress3.png"),
  },
  {
    id: "4",
    title: "Lamerei",
    subtitle: "reversible Angora Cardigan",
    price: 120,
    image: require("../images/dress4.png"),
  },
  {
    id: "5",
    title: "21WN",
    subtitle: "reversible Angora Cardigan",
    price: 120,
    image: require("../images/dress5.png"),
  },
  {
    id: "6",
    title: "Lopo",
    subtitle: "reversible Angora Cardigan",
    price: 120,
    image: require("../images/dress6.png"),
  },
  {
    id: "7",
    title: "21WN",
    subtitle: "reversible Angora Cardigan",
    price: 120,
    image: require("../images/dress7.png"),
  },
  {
    id: "8",
    title: "lame",
    subtitle: "reversible Angora Cardigan",
    price: 120,
    image: require("../images/dress3.png"),
  },
];

const HomeScreen = ({ navigation }) => {
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

  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require("../images/Menu.png")} style={styles.icon} />
        </TouchableOpacity>
        <Image source={require("../images/Logo.png")} style={styles.logo} />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image
              source={require("../images/Search.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../images/shoppingBag.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.storyText}>OUR STORY </Text>

      <TouchableOpacity>
        <Image
          source={require("../images/addbutton.png")}
          style={styles.addbutton}
        />
      </TouchableOpacity>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.Text}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productSubtitle}>{item.subtitle}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => addToCart(item)}>
              <Image
                source={require("../images/add_circle.png")}
                style={styles.addButton}
              />
            </TouchableOpacity>
          </View>
        )}
      />
      <Button
        title="View your Items"
        onPress={() => navigation.navigate("Cart")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
  storyText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    marginBottom: -40,
    left: -100,
  },
  productContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    marginBottom: -30,
  },
  productImage: {
    width: 175,
    height: 250,
    resizeMode: "cover",
    marginBottom: 5,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    left: -39,
  },
  productSubtitle: {
    fontSize: 11.5,
    color: "#888",
    left: -40,
  },
  productPrice: {
    fontSize: 16,
    color: "#f4967d",
    left: -40,
  },
  addButton: {
    width: 30,
    height: 30,
    marginTop: 10,
    top: -130,
    left: 70,
  },
  Text: {
    left: 40,
    
  },
  addbutton: {
    top: -5,
    left: 160,
  },
});

export default HomeScreen;
