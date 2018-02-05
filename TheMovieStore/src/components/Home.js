import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavigationActions } from "react-navigation";

import * as movieAction from "../actions/actions";
import * as types from "../actions/actionTypes";
import Loading from "./Loading";
GLOBAL = require("../Constants");
import * as MovieHeplers from "../models/MovieHeplers";
import FavouriteIcon from "./FavouriteIcon";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      moviesBookMark: [],
      totalPage: 1,
      currentPage: 1,
      isLoadMore: false,
      isLoading: true,
      isRefresh: false,
      setting: 0,
      rate: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.setting !== this.state.setting) {
      this.setState({
        movies: [],
        isLoading: true,
        currentPage: 1
      });
      this.loadData(1, nextProps.setting);
    }
  }

  _onPressItem = item => {
    this.props.navigation.navigate("MovieDetail", {
      id: item.id,
      name: item.title
    });
  };

  onResizeHandler = () => {
    console.log("The window has been resized!");
  };

  render() {
    console.log("Home render ");
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <View style={styles.container}>
        <FlatList
          initialNumToRender={10}
          refreshing={this.state.isRefresh}
          onRefresh={() => {
            this.refreshData();
          }}
          data={this.state.movies}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => this._onPressItem(item)}>
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
                      <View
                        style={styles.container_iconStar}
                        key={this.props.reload}
                      >
                        <FavouriteIcon item={item} />
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
          onEndReachedThreshold={0.2}
          onEndReached={() => {
            this.setState({
              isLoadMore: true
            });
            this.loadData(this.state.currentPage + 1, this.state.setting);
          }}
        />
        {this.state.isLoadMore &&
          <View style={styles.load_more}>
            <ActivityIndicator />
          </View>}
      </View>
    );
  }

  _keyExtractor = (item, index) => item.id;

  componentDidMount() {
    let bookMarks = MovieHeplers.getDataFromDB("Movie");
    try {
      AsyncStorage.getItem("Category").then(values => {
        this.setState({
          setting: values,
          moviesBookMark: bookMarks
        });
        this.loadData(this.state.currentPage, values);
      });
    } catch (error) {
      this.loadData(this.state.currentPage, this.state.setting);
    }
  }

  refreshData = () => {
    this.setState({
      currentPage: 1,
      isRefresh: true,
      movies: []
    });
    this.loadData(1, this.state.setting);
  };

  loadData = (page, type) => {
    if (page > this.state.total_pages) {
      return;
    }

    this.props.fetchMovies(page, type).then(data => {
      this.setState({
        isLoadMore: false,
        currentPage: data.movies.page,
        totalPage: data.movies.total_pages,
        movies: this.state.movies.concat(data.movies.results),
        isLoading: false,
        isRefresh: false,
        setting: type
      });
    });
  };
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
  load_more: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15
  },
  icon: {
    width: 24,
    height: 24
  }
});

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    setting: state.setting
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(movieAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
