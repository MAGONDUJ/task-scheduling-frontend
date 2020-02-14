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
import Header from "./Header";
import Welcome from "./Welcome";
import Login from "./Login";
import Tasks from "./Tasks";

class Home extends React.Component {
  render() {
    if (this.props.content == "welcome") {
      return (
        <View style={styles.container}>
          {/* header */}
          <Header />

          {/* content */}
          <View style={styles.content}>
            <Welcome />
          </View>
        </View>
      );
    } else if (this.props.content == "login") {
      return (
        <View style={styles.container}>
          {/* header */}
          <Header />

          {/* content */}
          <Login />
        </View>
      );
    } else if (this.props.content == "tasks") {
      return (
        <View style={styles.container}>
          {/* header */}
          <Header />

          {/* content */}
          <Tasks />
        </View>
      );
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    //justifyContent: "center"
  },
  content: {
    padding: 40,
    alignItems: "center"
  }
});
