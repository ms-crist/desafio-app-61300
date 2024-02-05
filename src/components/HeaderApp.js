import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HeaderApp = () => {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 45 , fontWeight: 'bold'}}>CARRITO</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://t3.ftcdn.net/jpg/05/60/17/66/360_F_560176615_cUua21qgzxDiLiiyiVGYjUnLSGnVLIi6.jpg",
        }}
      />
    </View>
  );
};

export default HeaderApp;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});
