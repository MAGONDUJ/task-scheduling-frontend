import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { render } from "react-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.homebtn}>
          <TouchableOpacity onPress={() => this.props.setWelcomeContent()}>
            <Text style={styles.item}>Home</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{this.Capitalize(this.props.content)}</Text>
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
    setWelcomeContent: () => dispatch({ type: "WELCOME" })
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral"
  },
  homebtn: {
    flex: 2
  },
  item: {
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },
  title: {
    flex: 7,
    paddingRight: 15,
    textAlign: "right",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});
