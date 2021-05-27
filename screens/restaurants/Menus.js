import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

export default function Menus() {
    return (
        <View style={styles.viewBody}>
            <Text>Menu</Text>
            <Icon
                type="material-community"
                name="plus"
                color="#442484"
                reverse
                containerStyle={styles.btnContainer}
                //onPress={() => navigation.navigate("add-restaurant")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
    },
    btnContainer: {
        position: "absolute",
        bottom: 10,
        right: 10,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 0.5
    }
})
