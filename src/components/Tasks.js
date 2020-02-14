import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
class Tasks extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.heading}>Tasks!</Text>
        <Text style={styles.text}>Query Tasks...</Text>
        <Text style={styles.text}>Token: {this.props.token}</Text>
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
    setLoginContent: () => dispatch({ type: "LOGIN" })
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
const styles = StyleSheet.create({
  content: {
    alignItems: "center"
  },
  image: {
    marginTop: 50,
    width: 200,
    height: 200,
    borderRadius: 400 / 2
  },
  heading: {
    marginTop: 40,
    fontSize: 30
  },
  text: {
    marginHorizontal: 8,
    marginVertical: 10,
    fontSize: 18,
    marginBottom: 30
  }
});
