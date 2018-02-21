import React, { Component } from "react";

// Import Style File/Component
import { style } from "./SubtractStyles";

// Import Built in Components
import { View, Text, Button, TextInput } from "react-native";

class Subtract extends Component {
  constructor() {
    super();
    this.state = {
      num1: "",
      num2: "",
      result: 0
    };
    // Bind Methods
    this.subtractNumbers = this.subtractNumbers.bind(this);
  }

  // Declare Methods
  subtractNumbers() {
    const { num1, num2 } = this.state;
    this.setState({ result: parseInt(num1, 10) - parseInt(num2, 10) });
  }

  render() {
    console.log(this.props);
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
          <Text style={style.text}>Subtract Numbers</Text>
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
          <Button title="Subtract" onPress={this.subtractNumbers} />
        </View>
        <View style={style.redirect}>
          <Button
            title="Go to Add Page"
            onPress={() => this.props.navigation.navigate("Add")}
          />
        </View>
      </View>
    );
  }
}

export default Subtract;
