import React, { Component } from "react";
import { View, Text } from "react-native";
import 'firebase/firestore';
export default class MainScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>WELCOME </Text>
      </View>
    );
  }
}