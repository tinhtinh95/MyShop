import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    Dimensions, StyleSheet, Image, FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { getCart, add_more, subtract_more, remove_cart } from '../../../actions/actions';


function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
    }
    gotoDetail() {
        const { navigator } = this.props;
        navigator.push({ name: 'PRODUCT_DETAIL' });
    }
    componentDidMount() {
        this.props.getCart();
        console.log('ahihi: ', this.props.listCart)
        // this.props.total(this.props.listCart);

    }

    // totalTong=(listCart)=>{
    //     if (listCart != '') {
    //         const arrTotal = listCart.map(e => {
    //             return e.quantity * e.price;
    //         })
    //         const total = arrTotal.reduce((a, b) => a + b);
    //         this.setState({total:total})
    //     } else {
    //         const total = 0;
    //     }
    // }
    render() {
        const { listCart } = this.props;
        const arrTotal = listCart.map(e => e.quantity * e.price)
        const total = arrTotal.length ? arrTotal.reduce((a, b) => a + b):0;
        // this.setState({ total: total })

        // const totalAll= this.props.total(this.props.listCart);
        // console.log({totalAll});
        const { main, checkoutButton, checkoutTitle, wrapper,
            product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer } = styles;

        return (
            <View style={wrapper}>
                <FlatList
                    data={listCart}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) =>
                        <View style={product}>
                            <Image source={require('../../../img/muc3.jpg')} style={productImage} />
                            <View style={[mainRight]}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={txtName}>{toTitleCase('black of the')}</Text>
                                    <TouchableOpacity
                                        onPress={() => this.props.remove_cart(item.id)}
                                    >
                                        <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={txtPrice}>{item.price}$</Text>
                                </View>
                                <View style={productController}>
                                    <View style={numberOfProduct}>
                                        <TouchableOpacity
                                            onPress={() => this.props.add_more(item.id)}
                                        >
                                            <Text style={{ fontSize: 25 }}>+</Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 25 }}>{item.quantity}</Text>
                                        <TouchableOpacity
                                            onPress={() => this.props.subtract_more(item.id)}
                                        >
                                            <Text style={{ fontSize: 25 }}>-</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={showDetailContainer}>
                                        <Text style={txtShowDetail}></Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>}
                >
                </FlatList>
                <TouchableOpacity style={checkoutButton} >
                    <Text style={checkoutTitle}>TOTAL {total}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        listCart: state.listCart,
    }
}
export default connect(mapStateToProps, { getCart, add_more, subtract_more, remove_cart })(CartView);

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});
