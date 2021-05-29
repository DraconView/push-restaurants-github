import React from 'react'
import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function UserGuest() {
    const navigation = useNavigation()

    return (
        <ScrollView
            centerContent
            style={styles.viewBody}
        >
            <Image
                source={require("../../assets/restaurant-logo.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil</Text>
            <Text style={styles.description}>
                Descubre tu mejor restaurante, busca o visualiza los mejores de forma sencilla, visita el top 10, vota cuál te ha gustado más, comenta cómo ha sido tu experiencia, añadelos a tu lista de favoritos.
            </Text>
            <Button
                buttonStyle={styles.button}
                title="iniciar sesion"
                onPress={() => navigation.navigate("login")}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginVertical: 10,
        textAlign: "center"
    }, 
    description: {
        textAlign: "justify",
        marginBottom: 20,
        color: "#a65273"
    },
    button: {
        backgroundColor: "#442484"
    }
})
