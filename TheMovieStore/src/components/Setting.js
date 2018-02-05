import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    TextInput,
    AsyncStorage,
    ToastAndroid,
} from 'react-native'
import CustomSlider from '../widgets/CustomSlider';

import { connect } from 'react-redux'
import * as movieAction from '../actions/actions';
import { bindActionCreators } from 'redux';
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';

const CATEGORIES = [
    'Popular Movies', 'Top Rated Movies', 'Upcoming Movies', 'Now Playing Movies'
];
class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: { 'value': 1 },
            category: 'Popular Movies',
            rate: 0.0,
            visibleCategory: false,
            visibleRate: false
        }

    }

    getInitCategory = (category) => {
        return CATEGORIES[category];
    }

    componentDidMount = () => {
        try {
            AsyncStorage.getItem('Rate')
                .then((values) => {
                    if (values === null) {
                        values = 0.0
                    }
                    this.setState({
                        rate: values,
                    })
                });
            AsyncStorage.getItem('Category')
                .then((values) => {
                    if (values === null) {
                        values = 0
                    }
                    this.setState({
                        category: this.getInitCategory(parseInt(values)),
                        selectedItem: { 'value': parseInt(values) },
                    })
                });
        } catch (error) {
        }
    }

    showCategoryDialog = () => {
        console.log('showCategoryDialog')
        this.setState({
            visibleCategory: true
        })
    }

    showRateDialog = () => {
        this.refs.setvisibleRate.show();
    }

    setRated = (rate) => {
        AsyncStorage.setItem('Rate', '' + rate);
        this.setState({
            rate: rate
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container_item}>
                    <Text style={styles.title_header}>FILTER </Text>
                    <View style={{ height: 1, borderWidth: 1, borderColor: 'gray' }}></View>
                    <TouchableOpacity onPress={() => this.showCategoryDialog()}>
                        <Text style={styles.title}>Category</Text>
                    </TouchableOpacity>
                    <Text>{this.state.category}</Text>

                    {/* <SinglePickerMaterialDialog
                        title={'Category'}
                        items={CATEGORIES.map((row, index) => ({ value: index, label: row }))}
                        visible={this.state.visibleCategory}
                        selectedItem={this.state.selectedItem}
                        onCancel={() => this.setState({ visibleCategory: false })}
                        onOk={(result) => {
                            this.setState({
                                selectedItem: result.selectedItem,
                                category: result.selectedItem.label,
                                visibleCategory: false
                            });
                            AsyncStorage.setItem('Category', '' + result.selectedItem.value);
                            this.props.changeSetting(result.selectedItem.value);
                        }} />

                    <TouchableOpacity onPress={() => this.showRateDialog()}>
                        <Text style={styles.title}>Rate</Text>
                    </TouchableOpacity>
                    < >{this.state.rate}</Text>
                    <CustomSlider style={{ flex: 1, padding: 10 }} ref='setvisibleRate' setRated={this.setRated} rate={this.state.rate} /> */}
                </View >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8
    },
    container_item: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 10,
    },
    title_header: {
        color: 'gray',
        padding: 8
    },
    title: {
        color: 'black',
        fontSize: 20
    },
    itemsContainer: {
        flex: 1,
        padding: 8
    }
});

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(movieAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Setting);

