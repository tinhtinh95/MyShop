import { AsyncStorage } from 'react-native';

const getCart = async () => {
    try {
        console.log('getItem');
        const value = await AsyncStorage.getItem('@cart');
        if (value !== null) {
            console.log('have');
            console.log(JSON.parse(value));
            return JSON.parse(value);
        }
        console.log('dont have');
        return [];
    } catch (err) {
        return [];
    }
}
export default getCart;
