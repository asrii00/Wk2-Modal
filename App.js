import { StatusBar } from 'expo-status-bar';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { useState } from 'react';


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>

     <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal</Text>
            <Pressable
            style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>Close</Text>
            </Pressable>
          </View>
        </View>

      </Modal>

      <Pressable
      style={[styles.button]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal message</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
});
