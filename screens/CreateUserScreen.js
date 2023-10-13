import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, ScrollView, View, Text } from 'react-native'
import { database } from '../database/firebase'
import { collection, addDoc } from 'firebase/firestore'

const CreateUserScreen = (props) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value })
    }

    const saveNewUser = async () => {
        if (state.name === '') {
            alert('Por favor, ingrese un nombre')
        } else {
            await addDoc(collection(database, 'usuarios'), state)
            props.navigation.navigate('UsersList')
        }
    }

    const goToUsersList = () => {
        props.navigation.navigate('UsersList');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agregar Usuarios</Text>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Name User' onChangeText={(value) => handleChangeText('name', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Email User' onChangeText={(value) => handleChangeText('email', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Phone User' onChangeText={(value) => handleChangeText('phone', value)} />
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} title='Guardar Usuario' onPress={saveNewUser} />
            </View>

            <View style={styles.buttonContainer}>
                <Button title='Ver Usuarios' onPress={goToUsersList} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        borderRadius: 10, // Bordes redondeados
        backgroundColor: '#fff', // Fondo blanco
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    inputGroup: {
        width: '80%',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        borderRadius: 8, // Bordes redondeados para los inputs
        paddingHorizontal: 10, // Espacio dentro del input
        backgroundColor: '#f9f9f9', // Fondo del input
    },
    buttonContainer: {
        width: '60%',
        marginTop: 10,
        padding:10
    }
})

export default CreateUserScreen
