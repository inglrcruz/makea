import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

export const container = StyleSheet.create({
    base: {
        padding: 10,
        flex: 1,
        width: screenWidth
    },
    spaceBetween: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardItem: {
        flexDirection: 'row', 
        marginTop: 10, 
        borderColor: "#e7eaf3", 
        borderWidth: 0.5, 
        borderRadius: 8, 
        padding: 5
    },
    cardItemPrice: {
        flexDirection: 'row', 
        marginTop: 3
    }, centerTop: {
        flex: 1, 
        justifyContent: 'center',
         alignItems: 'center', 
         marginTop: 50 
    }
})

export const image = StyleSheet.create({
    cardItem: {
        width: 100, 
        height: 100, 
        borderRadius: 5
    }
})

export const text = StyleSheet.create({
    cardItemDescription: {
        width: 270,
        textAlign: 'left'
    }
})

export const button = StyleSheet.create({
    spaceBetween: {
        width: 120,
        marginBottom: 10
    }
});