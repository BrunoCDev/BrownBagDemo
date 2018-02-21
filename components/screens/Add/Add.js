import React, { Component } from "react";

// Import Style File/Component
import { style } from "./AddStyles";

// Import Built in Components
import { View, Text, Button, TextInput } from "react-native";

class Add extends Component {
  constructor() {
    super();
    this.state = {
      num1: "",
      num2: "",
      result: 0
    };
    // Bind Methods
    this.addNumbers = this.addNumbers.bind(this);
  }

  // Declare Methods
  addNumbers() {
    const { num1, num2 } = this.state;
    this.setState({ result: parseInt(num1, 10) + parseInt(num2, 10) });
  }

  render() {
    // You can't use JSX that you use on Regular React, Example (<div></div>)
    // React Native Docs has all of the built in components that you can use
    // Don't forget to import those components!
    return (
      // style prop changes the style of the component
      // in this view component the style is changed on this component
      // instead of the style component that we imported
      <View
        style={{
          flex: 1,
          backgroundColor: "black"
        }}
      >
        <View>
          <Text style={style.text}>Add Numbers</Text>
        </View>
        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            value={this.state.num1}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={num => this.setState({ num1: num })}
          />
          <TextInput
            style={style.input}
            value={this.state.num2}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={num => this.setState({ num2: num })}
          />
        </View>
        <View>
          <Text style={style.text}>{this.state.result}</Text>
        </View>
        <View style={style.buttonContainer}>
          <Button title="Add" onPress={this.addNumbers} />
        </View>
        <View style={style.redirect}>
          <Button
            title="Go to Subtract Page"
            onPress={() => this.props.navigation.navigate("Subtract")}
          />
        </View>
      </View>
      // You might have noticed that some of the props are different than in React
      // Example: onClick becomes onPress
    );
  }
}

// Export Component
export default Add;
