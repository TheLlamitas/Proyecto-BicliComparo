import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import OffertTouchable from '../components/OffertTouchable';

export default function OffertList() {
    return (
        <View style={styles.container}>
            <OffertTouchable />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
})
