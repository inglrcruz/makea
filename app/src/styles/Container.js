import { StyleSheet } from 'react-native';

export const STLayout = StyleSheet.create({
    base: {
        padding: 10,
        flex: 1
    }
})

export const STCard = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
    },

    base: {
        margin: 3,
    },

    container: {
        paddingTop: 50,
    },

    image: {
        width: 140,
        height: 100,
    }
});