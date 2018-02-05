import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as movieAction from "../actions/actions";
import EditProfile from "./EditProfile";
import * as MovieHeplers from "../models/MovieHeplers";
class DrawerLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: require("../img/profile_img.png"),
      userName: "Phong (Fairly) D. NGUYEN",
      email: "Fairly@enclave.vn",
      date: "2017/3/14",
      sex: "Male",
      reminders: []
    };
  }

  onClickEdit() {
    this.props.navigation.navigate("EditProfile", {
      userName: this.state.userName,
      email: this.state.email,
      avatarSource: this.state.avatarSource,
      date: this.state.date,
      sex: this.state.sex
    });
  }

  onClickShowAll() {
    console.log("onClickShowAll", this.state.avatarSource);
  }
  render() {
    console.log("DrawerLayout render");
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.profileImg} source={this.state.avatarSource} />
          <Text style={styles.title_header}>
            {this.state.userName}
          </Text>
        </View>

        <View style={styles.info}>
          <Image style={styles.icon} source={require("../img/ic_email.png")} />
          <Text style={styles.title_info}>
            {this.state.email}
          </Text>
        </View>

        <View style={styles.info}>
          <Image
            style={styles.icon}
            source={require("../img/ic_day_of_birth.png")}
          />
          <Text style={styles.title_info}>
            {this.state.date}
          </Text>
        </View>

        <View style={styles.info}>
          <Image style={styles.icon} source={require("../img/ic_prof.png")} />
          <Text style={styles.title_info}>
            {this.state.sex}
          </Text>
        </View>

        <View style={styles.bnt}>
          <Button
            onPress={() => this.onClickEdit()}
            title="Edit"
            color="#3498db"
          />
        </View>
        <Text style={styles.title_header}>Reminder</Text>
        <View style={styles.listReminder} key={this.props.reload}>
          {this.state.reminders.length > 0
            ? <FlatList
                data={this.state.reminders}
                renderItem={({ item }) =>
                  <View style={styles.listReminderItem}>
                    <Text style={{ fontWeight: "bold" }}>
                      {item.title} - {item.vote_average}
                    </Text>
                    <Text>
                      {item.reminderTime}
                    </Text>
                  </View>}
                keyExtractor={this._keyExtractor}
              />
            : <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text>No data</Text>
              </View>}
        </View>
        {this.state.reminders.length > 0 &&
          <View style={styles.bnt}>
            <Button
              onPress={() => this.onClickShowAll()}
              title="Show All"
              color="#3498db"
            />
          </View>}
      </View>
    );
  }

  componentWillReceiveProps = nextProps => {
    this.componentDidMount();
  };

  _keyExtractor = (item, index) => item.id;

  componentDidMount = () => {
    let profile = MovieHeplers.getProfileInfo();
    console.log("profile: ", profile);
    let reminders = MovieHeplers.getDataFromDB("Reminder");
    this.setState({
      reminders: reminders
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "white"
  },
  header: {
    justifyContent: "center",
    alignItems: "center"
  },
  profileImg: {
    width: 105,
    height: 105,
    borderRadius: 70,
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 15
  },
  icon: {
    width: 35,
    height: 35
  },
  info: {
    flexDirection: "row",
    alignItems: "center"
  },
  bnt: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  title_header: {
    fontWeight: "bold",
    marginBottom: 10
  },
  title_info: {
    marginLeft: 6
  },
  listReminder: {
    flex: 1,
    marginBottom: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    margin: 6,
    padding: 5
  },
  listReminderItem: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    margin: 4,
    padding: 5
  }
});

const mapStateToProps = state => {
  
  return {
    reload: state.reload
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(movieAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DrawerLayout);
