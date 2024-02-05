import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import RemoveModal from "./src/components/RemoveModal";
import Lista from "./src/components/lista/Lista";
import HeaderApp from "./src/components/HeaderApp";



export default function App() {
  // useState y useEffect hooks para controlar el estado de la aplicación y el ciclo de vida de un componente

  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const handleInputChange = (value) => setInputValue(value);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
  };

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(),
    };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <View style={styles.container}>
      {/* El StatusBar controla la barra de estado del dispositivo */}
      <StatusBar style="auto" />
      <HeaderApp></HeaderApp>

      {/* Llamamos al modal para eliminar el producto y le pasamos por props toda la data que necesita */}
      <RemoveModal
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
      />
     
      <View style={styles.inputContainer}>

        <TextInput
          onChangeText={handleInputChange}
          value={inputValue}
          style={styles.input}
          placeholder="Ingrese un producto"
        />
        <Pressable onPress={addItem}>
          <Text style={{ fontSize: 40 }}>🆗</Text>
        </Pressable>
      </View>
      <Lista cartItems={cartItems} 
      handleModal={handleModal}></Lista>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ededed",
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: Constants.statusBarHeight,
  },
  
  input: {
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "28%",
    marginLeft: "36%",
  },
  inputContainer: {
    flexDirection: "row",
  },
});
