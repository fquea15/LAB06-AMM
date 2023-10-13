import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetailScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>{user.name[0]}</Text>
      </View>
      <View style={styles.userInfo}>
        <View style={styles.info}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.value}>{user.name}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Teléfono:</Text>
          <Text style={styles.value}>{user.phone}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 40,
  },
  userInfo: {
    width: '100%',
  },
  info: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    width: 100,
  },
  value: {
    flex: 1,
  },
});

export default UserDetailScreen;
