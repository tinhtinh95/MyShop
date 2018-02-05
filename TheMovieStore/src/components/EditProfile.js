import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Button,
  Image,
  TextInput,
  Text,
  RadioButtonGroup,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  DatePickerAndroid
} from "react-native";
import { NavigationActions } from "react-navigation";

import PropTypes from "prop-types";
import ImagePicker from "react-native-image-picker";
import * as MovieHeplers from "../models/MovieHeplers";
class EditProfile extends Component {
  constructor(props) {
    super(props);
    let currentTime = new Date();
    let initTime = `${currentTime.getFullYear()}/${currentTime.getMonth() +
      1}/${currentTime.getDate()}`;
    this.state = {
      userName: "",
      email: "",
      dayPicker: "",
      sex: "",
      avatarSource: require("../img/profile_img.png")
    };
  }

  editProfileImage() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response.uri };
        console.log("Source: ", source);
        this.setState({
          avatarSource: source
        });
      }
    });
  }
  async openAndroidDatePicker() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date()
      });

      if (action === DatePickerAndroid.dateSetAction) {
        this.setState({
          dayPicker: `${year}/${month + 1}/${day}`
        });
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  }

  openSexDialog = () => {};

  onClick = tag => {
    if (tag === "press_cancel") {
      console.log("press_cancel");
      this.props.navigation.goBack();
    } else {
      MovieHeplers.updateProfileInfo(
        1,
        this.state.userName,
        this.state.email,
        this.state.dayPicker,
        this.state.sex,
        this.state.avatarSource
      );
    }
  };

  componentDidMount = () => {
    const { params } = this.props.navigation.state;
    this.setState({
      userName: params.userName,
      email: params.email,
      dayPicker: params.date,
      sex: params.sex,
      avatarSource: params.avatarSource
    });
  };
  render() {
    return (
      <View style={prof_styles.containter}>
        <View style={prof_styles.header}>
          <Button onPress={() => this.onClick("press_cancel")} title="Cancel" />
          <TouchableOpacity onPress={() => this.editProfileImage()}>
            <Image
              style={prof_styles.img_prof}
              source={this.state.avatarSource}
            />
          </TouchableOpacity>
          <Button onPress={() => this.onClick("press_ok")} title="OK" />
        </View>
        <KeyboardAvoidingView>
          <Text>User name:</Text>
          <TextInput
            style={prof_styles.txtInput}
            onChangeText={userName => this.setState({ userName })}
            value={this.state.userName}
            returnKeyType="next"
            onSubmitEditing={() => this.refs["2nd"].focus()}
          />
          <Text>Email:</Text>
          <TextInput
            ref="2nd"
            style={prof_styles.txtInput}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            keyboardType="email-address"
            returnKeyType="done"
          />
        </KeyboardAvoidingView>
        <View style={prof_styles.footer}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => this.openAndroidDatePicker()}
          >
            <Image
              style={prof_styles.icon}
              source={require("../img/ic_day_of_birth.png")}
            />
            <Text>
              {this.state.dayPicker}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={prof_styles.footer}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => this.openSexDialog()}
          >
            <Image
              style={prof_styles.icon}
              source={require("../img/ic_prof.png")}
            />
            <Text>
              {this.state.sex}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var radio_props = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" }
];

EditProfile.propTypes = {
  userName: PropTypes.string,
  email: PropTypes.string,
  avatarSource: PropTypes.any,
  date: PropTypes.string,
  sex: PropTypes.string
};

const prof_styles = StyleSheet.create({
  containter: {
    flex: 1,
    padding: 16
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 35,
    paddingRight: 35
  },
  img_prof: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  txtInput: {
    padding: 10,
    height: 40
  },
  footer: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row"
  },
  icon: {
    width: 35,
    height: 35
  }
});

export default EditProfile;
