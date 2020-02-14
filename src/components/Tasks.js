import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";
import { connect } from "react-redux";
const controllers = require("../controllers");
class Tasks extends React.Component {
  state = {
    loading: false,
    page: 1,
    limit: 10,
    order: "task_id",
    orderMethod: "DESC",
    tasks: []
  };
  setPage = val => {
    this.setState({ page: val });
  };
  setLimit = val => {
    this.setState({ limit: val });
  };
  setOrder = val => {
    this.setState({ order: val });
  };
  setOrderMethod = val => {
    this.setState({ orderMethod: val });
  };
  queryTasks = async (page, limit, order, orderMethod) => {
    let params = {};
    params.token = this.props.token;
    params.page = page;
    params.limit = limit;
    params.order = order;
    params.orderMethod = orderMethod;
    this.setState({ loading: true });
    let taskQueryRes = await controllers.getTasks(params);
    console.log("Tasks Response:  ", taskQueryRes.tasks);
    this.setState({
      loading: false,
      tasks: taskQueryRes.tasks
    });
  };
  render() {
    if (this.props.token === "" || this.props.token === undefined) {
      setLoginContent();
    }
    const taskItems = this.state.loading ? `Loading data...` : ``;
    return (
      <View>
        <View style={styles.content}>
          <Text style={{ marginTop: 10 }}>Query Tasks</Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.queryParams}>
          <Text style={{ marginTop: 4 }}>Page: </Text>
          <TextInput placeholder="1" onChangeText={this.setPage} />
          <Text style={{ marginTop: 4 }}>Limit: </Text>
          <TextInput placeholder="10" onChangeText={this.setLimit} />
          <Text style={{ marginTop: 4 }}> Order: </Text>
          <TextInput placeholder="task_id" onChangeText={this.setOrder} />
          <Text style={{ marginTop: 4 }}> orderMethod: </Text>
          <TextInput placeholder="DESC" onChangeText={this.setOrderMethod} />
        </View>
        <View style={styles.content}>
          <Button
            onPress={() =>
              this.queryTasks(
                this.state.page,
                this.state.limit,
                this.state.order,
                this.state.orderMethod
              )
            }
            title="Query"
            color="coral"
          />
        </View>
        <View style={styles.list}>
          <Text>{taskItems}</Text>
          {/* <FlatList data={this.state.tasks} /> */}
          <FlatList
            data={this.state.tasks}
            renderItem={({ item }) => (
              <Text style={styles.item}>
                task_id:{item.task_id} customer_first_name:
                {item.customer_first_name} personnel_first_name:
                {item.personnel_first_name}
                personnel_other_name:{item.personnel_other_name}{" "}
                customer_last_name:{item.customer_last_name}
                customer_phone:{item.customer_phone} agentId:{item.agentId}{" "}
                assigned:{item.assigned}
                in_progress: {item.in_progress} completed:{item.completed}{" "}
                deferred:{item.deferred}
                status:{item.status} location:{item.location} gender:
                {item.gender} age:{item.age}
                access_code:{item.access_code} splash_page:{item.splash_page}{" "}
                mpesa:{item.mpesa}
                autoplay:{item.autoplay} comments:{item.comments} registration:
                {item.registration}:
              </Text>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
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
    alignItems: "center",
    marginTop: 10
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "#000",
    margin: 10
  },
  queryParams: {
    flexDirection: "row"
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#000"
  },
  list: {
    marginTop: 20
  },
  item: {
    padding: 10,
    marginTop: 1,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    color: "coral"
  }
});
