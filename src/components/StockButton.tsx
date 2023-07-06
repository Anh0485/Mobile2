
import React from 'react';
import {
    StyleSheet, Text, Touchable, TouchableOpacity, View
} from 'react-native';

function StockButton({stockName, stockCode, onSelectStock}): JSX.Element {

    const handlePress = () => {
        onSelectStock(stockName, stockCode)
    }

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text>{stockName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        marginHorizontal: 10,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
});

export default StockButton