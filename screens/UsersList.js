import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { database } from '../database/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const collectionRef = collection(database, 'usuarios');
        const q = query(collectionRef, orderBy('name', 'desc'));

        const unsubscribe = onSnapshot(q, querySnapshot => {
            setUsers(
                querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    email: doc.data().email,
                    name: doc.data().name,
                    phone: doc.data().phone,
                }))
            );
        });

        return unsubscribe;
    }, []);

    const renderUserItem = ({ item }) => (
        <TouchableOpacity style={styles.userItem} onPress={() => {navigation.navigate('UserDetailScreen', { user: item });}}>
            <View style={styles.avatarContainer}>
                <Text style={styles.avatarText}>{item.name[0]}</Text>
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userEmail}>{item.email}</Text>
                <Text style={styles.userPhone}>{item.phone}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis Usuarios</Text>
            <FlatList
                data={users}
                renderItem={renderUserItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 20,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    userItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    avatarText: {
        color: '#ffffff',
        fontSize: 20,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        marginBottom: 5,
    },
    userEmail: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    userPhone: {
        fontSize: 14,
        color: '#555',
    },
});

export default UsersList;
