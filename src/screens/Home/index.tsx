import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Alert,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { BaseText, BaseView } from '../../components/Typography';
import { getUsers, deleteUser } from '../../utils/storage';
import { Button } from 'native-base';

function Home() {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = () => {
    const data = getUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (email: string) => {
    Alert.alert('Confirm Delete', 'Are you sure?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          deleteUser(email);
          fetchUsers();
        },
        style: 'destructive',
      },
    ]);
  };

  const renderItem = ({ item }: { item: any }) => (
    <BaseView style={styles.card}>
      <Image
        source={{ uri: item.faceScan }}
        style={styles.avatar}
      />
      <BaseView style={{ flex: 1, paddingHorizontal: 10 }}>
        <BaseText fontSize={16} fontWeight="bold">
          {item.firstName} {item.lastName}
        </BaseText>
        <BaseText color="gray.500">{item.email}</BaseText>
      </BaseView>
      <TouchableOpacity onPress={() => handleDelete(item.email)}>
        <BaseText color="red.500">Delete</BaseText>
      </TouchableOpacity>
    </BaseView>
  );

  return (
    <View style={styles.container}>
      <BaseText fontSize={24} fontWeight="bold" mb={3}>
        Registered Users
      </BaseText>
      <FlatList
        data={users}
        keyExtractor={item => item.email}
        renderItem={renderItem}
        ListEmptyComponent={
          <BaseText textAlign="center">No users found</BaseText>
        }
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    padding: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
