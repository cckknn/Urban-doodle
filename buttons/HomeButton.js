import React from "react";
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function HomeButton({ text, onPress}) {
    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 140,
        paddingVertical: 100,
        borderRadius: 10,
        backgroundColor: "coral",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 20,
        minWidth: "70%",
        textAlign: "center",
    },
    buttonText: {
        fontSize: 25,
        fontWeight: "700",
        color: "white"
    }
})