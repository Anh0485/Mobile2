import React from 'react';
import {
    StyleSheet, Text, Touchable, TouchableOpacity, View
} from 'react-native';
import StockButton from './StockButton.tsx';

function StockApp(): JSX.Element {



    const handleSelectStock = (stockName, stockCode) => {
        alert(stockName)
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.text}>VIN GROUP</Text>
                <Text style={styles.codeText}>VIN</Text>
                <Text style={[styles.text, { color: 'red' }]}>-8.700</Text>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.bottomContainerItem}>
                    <StockButton stockName="VIN GROUP" stockCode="VIN" onSelectStock={handleSelectStock} />
                    <StockButton stockName="FLC" stockCode="FLC" onSelectStock={handleSelectStock} />
                    <StockButton stockName="VIETJET" stockCode="VJC" onSelectStock={handleSelectStock} />
                </View>

                <View style={styles.bottomContainerItem}>
                    <StockButton stockName="MASSAN" stockCode="MSN" onSelectStock={handleSelectStock} />
                    <StockButton stockName="VINAMILK" stockCode="VNM" onSelectStock={handleSelectStock} />
                    <StockButton stockName="SRC" stockCode="SRC" onSelectStock={handleSelectStock} />
                </View>

                <View style={styles.bottomContainerItem}>
                    <StockButton stockName="HSBC" stockCode="HSBC" onSelectStock={handleSelectStock} />
                    <StockButton stockName="SAM HOLDING" stockCode="SAM" onSelectStock={handleSelectStock} />
                    <StockButton stockName="PETROLIMEX" stockCode="PET" onSelectStock={handleSelectStock} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topContainer: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 10,
    },
    bottomContainerItem: {
        flexDirection: 'row',
        marginBottom: 15
    },
    codeText: {
        fontSize: 80,
    },
    text: {
        fontSize: 50
    },
});

export default StockApp;