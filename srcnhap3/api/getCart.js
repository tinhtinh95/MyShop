import { AsyncStorage } from 'react-native';

const getCart = async () => {
    try {
        const value = await AsyncStorage.getItem('@cart');
        if (value !== null) {
            // console.log('have data');
            // console.log('data-array', JSON.parse(value));
            return JSON.parse(value);
        } else {
            // console.log('dont have');
            return [];
        }

    } catch (err) {
        return [];
    }
}
export default getCart;
