import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  FlatList,
  DatePickerAndroid,
  TimePickerAndroid,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Loading from "./Loading";
import * as movieAction from "../actions/actions";
GLOBAL = require("../Constants");
import FavouriteIcon from "./FavouriteIcon";
import * as MovieHeplers from "../models/MovieHeplers";

import FCM from "react-native-fcm";
class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movie: {},
      credits: [],
      reminderTime: "",
      isBookMark: false
    };
  }

  async openAndroidDatePicker() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date()
      });

      if (action === DatePickerAndroid.dateSetAction) {
        this.openAndroidTimePicker(year, month + 1, day);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  }

  async openAndroidTimePicker(year, month, day) {
    try {
      let time = new Date();
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: time.getHours(),
        minute: time.getMinutes(),
        is24Hour: false // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        this.setState({
          reminderTime: `${year}/${month}/${day} : ${hour}:${minute}`
        });
        let dateString = `${year}/${month}/${day}, ${hour}:${minute}`;
        this.setScheduleLocalNotification(dateString);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  }

  setScheduleLocalNotification = dateString => {
    MovieHeplers.addReminder(this.state.movie, this.state.reminderTime);
    let time = new Date().getTime();
    this.props.reloadScreen(`${this.state.movie.id}|${time}`);
    FCM.scheduleLocalNotification({
      id: "" + this.state.movie.id,
      fire_date: new Date(dateString).getTime(),
      body: `${this.state.movie.title}|${GLOBAL.BASE_URL_IMG}${this.state.movie
        .poster_path}`,
      //show_in_foreground: true,
      repeat_interval: "day"
    });
  };
  render() {
    console.log("Movie render");
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <View style={styles.container}>
        <View style={styles.header} key={this.props.reload}>
          <FavouriteIcon item={this.state.movie} />
          <View style={styles.header_info}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>Release Date: </Text>
              <Text style={styles.title_pink}>
                {this.state.movie.release_date}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>Rating: </Text>
              <Text style={styles.title_pink}>
                {this.state.movie.vote_average}/10.0
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              style={styles.imgPoster}
              source={{
                uri: `${GLOBAL.BASE_URL_IMG}${this.state.movie.poster_path}`
              }}
            />
            <Text
              style={[
                styles.title_pink,
                { fontSize: 13, fontWeight: "bold", marginBottom: 8 }
              ]}
              numberOfLines={1}
              ellipsizeMode="tail"
              key={this.props.reload}
            >
              {this.state.reminderTime}
            </Text>
            <Button
              onPress={() => this.openAndroidDatePicker()}
              title="REMINDER"
              color="#3498db"
            />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={[styles.title_pink, { fontWeight: "bold" }]}>
              Overview:
            </Text>
            <ScrollView>
              <Text>
                {this.state.movie.overview}
              </Text>
            </ScrollView>
          </View>
        </View>
        <Text
          style={[styles.title_pink, { fontWeight: "bold", marginBottom: 8 }]}
        >
          Cast & Crew
        </Text>
        <FlatList
          keyExtractor={this._keyExtractor}
          horizontal={true}
          data={this.state.credits}
          renderItem={({ item }) =>
            <View style={styles.list_item}>
              <Image
                style={styles.imgPoster}
                source={{ uri: `${GLOBAL.BASE_URL_IMG}/${item.profile_path}` }}
              />
              <Text style={{ fontWeight: "bold" }}>
                {item.name}
              </Text>
            </View>}
        />
      </View>
    );
  }

  componentWillReceiveProps = nextProps => {
    let isReminder = MovieHeplers.isExistData(
      nextProps.navigation.state.params.id,
      "Reminder"
    );
    if (!isReminder) {
      this.setState({
        reminderTime: ""
      });
    }
  };

  _keyExtractor = (item, index) => item.cast_id;

  componentDidMount = () => {
    const { params } = this.props.navigation.state;
    this.getMovieDetai(params.id);
    console.log("componentDidMount");
  };

  getMovieDetai = id => {
    this.props.fetchMovie(id).then(data => {
      console.log(data);
      this.getCredits(data.movie);
    });
  };

  getCredits = movie => {
    this.props.fetchCredits(movie.id).then(data => {
      this.setState({
        movie: movie,
        credits: data.credits.cast,
        isLoading: false,
        isBookMark: MovieHeplers.isExistData(movie.id, "Movie"),
        reminderTime: MovieHeplers.getReminderTime(movie.id)
      });
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
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    padding: 5,
    marginBottom: 15,
    backgroundColor: "white",
    flexDirection: "row"
  },
  header_info: {
    flexDirection: "column",
    marginLeft: 6
  },
  iconStar: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  imgPoster: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  title_pink: {
    color: "#E30C4D"
  },
  list_item: {
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => {
  return {
    reload: state.reload
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(movieAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
