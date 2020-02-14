import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";
const controllers = require("../controllers");
class Login extends React.Component {
  state = {
    phone: "",
    password: "",
    errors: "",
    token: ""
  };
  setPhone = val => {
    this.setState({ phone: val });
  };
  setPassword = val => {
    this.setState({ password: val });
  };
  login = async (phone, password) => {
    console.log("logging in...");
    let params = {};
    params.phone = phone;
    params.password = password;
    let authres = await controllers.authLogin(params);
    console.log("Login Response:  ", authres);
    if (authres.message !== undefined) {
      console.log("Login Message:  ", authres.message);
      if (authres.message === "Failed") {
        if (authres.details.password !== undefined) {
          this.setState({ errors: "Error: " + authres.details.password + "!" });
        } else {
          this.setState({ errors: "Error: " + authres.details + "!" });
        }
      }
    }
    if (authres.accessToken !== undefined) {
      console.log("Token:  ", authres.accessToken);
      this.setState({ token: authres.accessToken });
      this.setState({ errors: "You have successfully logged in!" });
      this.props.setTasksContent(this.state.token);
    }
  };
  render() {
    // console.log(this.state.phone);
    // console.log(this.state.password);
    return (
      <View style={styles.content}>
        <Text style={styles.text}>Phone:</Text>
        <TextInput
          style={styles.input}
          placeholder="07222..."
          onChangeText={this.setPhone}
        />
        <Text style={styles.text}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={this.setPassword}
        />
        <Text style={styles.errors}>{this.state.errors}</Text>
        <Button
          onPress={() => this.login(this.state.phone, this.state.password)}
          title="Login"
          color="coral"
        />
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    content: state.content,
    token: state.token
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setLoginContent: () => dispatch({ type: "LOGIN" }),
    setTasksContent: token => dispatch({ type: "TASKS", payload: token })
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
  errors: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#f00",
    marginBottom: 20
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 30
  }
});
