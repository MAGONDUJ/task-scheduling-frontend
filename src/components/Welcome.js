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

class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("../../assets/tasks.png")}
        />

        <Text style={styles.heading}>Welcome!</Text>
        <Text style={styles.text}>Please sign In to view tasks...</Text>
        <Button
          title="sign In"
          color="coral"
          onPress={() => this.props.setLoginContent()}
        />
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
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
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
