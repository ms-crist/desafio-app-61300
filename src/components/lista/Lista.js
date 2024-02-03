import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import Card from "../card";

const Lista = (props) => {
  const { cartItems, handleModal } = props;

  return (
    <View style={styles.productList}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <Card>
            <View style={styles.productContainer}>
              <Text style={styles.product}>{item.name}</Text>
              <Pressable onPress={() => handleModal(item.id)}>
                <Text style={{ fontSize: 20 }}>⛔</Text>
              </Pressable>
            </View>
          </Card>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productList: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  product: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 4,
    justifyContent: "center",
  },
  productContainer: {
    width: 390,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Lista;
