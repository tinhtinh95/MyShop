import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Slider
} from 'react-native'

import { MaterialDialog } from 'react-native-material-dialog';


export default class CustomSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: this.props.rate,
            visibleRate: false
        }
    }

    setData = (rate) => {
        let n = parseFloat(rate);
        let x = Math.round(n * 1000) / 1000;
        this.setState({ rate: parseFloat(x) })
    }

    onPressYes = (props) => {
        props.setRated(this.state.rate);
    }

    show = () => {
        this.setState({
            visibleRate: true,
            rate: this.props.rate
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MaterialDialog
                    title={`Movie with rate from ${this.state.rate}`}
                    visible={this.state.visibleRate}
                    onOk={() => {
                        this.onPressYes(this.props);
                        this.setState({ visibleRate: false })
                    }}
                    onCancel={() => {
                        this.setState({ visibleRate: false })
                    }}>
                    <View style={{ flex: 1, padding: 8 }}>
                        <Slider maximumValue={10.0}
                            minimumValue={0.0}
                            step={0.1}
                            value={parseFloat(this.props.rate)}
                            onValueChange={(rate) => {
                                this.setData(rate)
                            }}
                        />
                    </View>
                </MaterialDialog>
            </View>
        )
    }
}