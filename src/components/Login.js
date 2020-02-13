import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";

class Login extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>Phone:</Text>
        <TextInput style={styles.input} placeholder="07222..." />
        <Text style={styles.text}>Password:</Text>
        <TextInput secureTextEntry={true} style={styles.input} />
        <Button title="Login" color="coral" />
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    content: state.content
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setLoginContent: () => dispatch({ type: "LOGIN" })
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
const styles = StyleSheet.create({
  content: {
    padding: 40
  },
  text: {
    marginHorizontal: 8,
    marginVertical: 10,
    fontSize: 18
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 40
  }
});
