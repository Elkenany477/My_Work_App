import * as React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableHighlight,
  ActivityIndicator,
  DrawerLayoutAndroid,
  Dimensions,
  RefreshControl,
  Keyboard,
  Platform
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Home from './src/example/Home_screen'


const Get_Data_Example = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Get_Data_Example;
