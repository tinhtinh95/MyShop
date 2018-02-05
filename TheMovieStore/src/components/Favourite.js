import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ToastAndroid
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as movieAction from "../actions/actions";
import { realm } from "../models/MovieHeplers";
import * as MovieHeplers from "../models/MovieHeplers";
import NoDataLayout from "./NoDataLayout";
class Favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true
    };
  }

  render() {
    if (this.state.movies.length <= 0) {
      return (
        <View style={styles.container} key={this.props.reload}>
          <NoDataLayout />
        </View>
      );
    }

    return (
      <View style={styles.container} key={this.props.reload}>
        <FlatList
          data={this.state.movies}
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("MovieDetail", {
                  id: item.id,
                  name: item.title
                })}
            >
              <View style={styles.container_item}>
                <Text style={styles.title}>
                  {item.title}
                </Text>
                <View style={styles.container_poster_infor}>
                  <Image
                    style={styles.poster}
                    source={{
                      uri: `${GLOBAL.BASE_URL_IMG}${item.poster_path}`
                    }}
                  />
                  <View style={styles.container_info}>
                    <View style={styles.info}>
                      <Text>Release Date: </Text>
                      <Text style={styles.title_pink}>
                        {item.release_date}
                      </Text>
                    </View>
                    <View style={styles.info}>
                      <Text>Rating: </Text>
                      <Text style={styles.title_pink}>
                        {item.vote_average}/10.0
                      </Text>
                      <View style={styles.container_iconStar}>
                        <TouchableOpacity
                          onPress={() => this.onClickUnBookMark(item)}
                        >
                          <Image
                            style={styles.iconStar}
                            source={require("../img/ic_bookMark.png")}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.info_overview}>
                      <Text>Overview: </Text>
                      <Text numberOfLines={4} ellipsizeMode="tail">
                        {item.overview}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }

  onClickUnBookMark = movie => {
    let id = movie.id;
    MovieHeplers.removeFavourite(movie);
    let time = new Date().getTime();
    this.props.reloadScreen(`${id}|${time}`);
  };

  componentDidMount() {
    this.reloadData();
  }

  reloadData = () => {
    let movies = MovieHeplers.getDataFromDB("Movie");
    this.setState({ movies });
  };
  _keyExtractor = (item, index) => item.id;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  },
  container_item: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    padding: 5,
    marginBottom: 8,
    backgroundColor: "white"
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10
  },
  poster: {
    flex: 1,
    width: 100,
    height: 100,
    marginRight: 4
  },
  container_poster_infor: {
    flex: 1,
    flexDirection: "row"
  },
  container_info: {
    flex: 2,
    flexDirection: "column"
  },
  info: {
    flex: 1,
    flexDirection: "row"
  },
  info_overview: {
    flex: 1,
    flexDirection: "column"
  },
  title_pink: {
    color: "#E30C4D"
  },
  container_iconStar: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 20
  },
  iconStar: {
    height: 30,
    width: 30
  },
  load_more: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15
  }
});

const mapStateToProps = state => {
  return {
    reload: state.reload
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(movieAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
