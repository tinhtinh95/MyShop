import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as movieAction from '../actions/actions';
import * as MovieHeplers from '../models/MovieHeplers'
class FavouriteIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.item.id,
            item: this.props.item
        }
    }

    onClickBookMark = (movie, currentStateBookMark) => {
        let _id = movie.id;
        if (currentStateBookMark) {
            MovieHeplers.removeFavourite(movie);
        } else {
            MovieHeplers.addFavourite(movie);
        }
        let time = new Date().getTime();
        this.props.reloadScreen(`${_id}|${time}`);
    }

    shouldComponentUpdate(nextProps, nextState) {
        let values = nextProps.reload.split('|');
        let _id = values[0];

        if (_id == nextState.id) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <View >
                <TouchableOpacity onPress={() => this.onClickBookMark(this.props.item, MovieHeplers.isExistData(this.state.item.id, 'Movie'))}>
                    <Image style={styles.iconStar}
                        source={MovieHeplers.isExistData(this.props.item.id, 'Movie') ? require('../img/ic_bookMark.png') : require('../img/ic_unbookMark.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconStar: {
        height: 30,
        width: 30
    }
});

const mapStateToProps = (state) => {
    return {
        reload: state.reload
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(movieAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteIcon);
