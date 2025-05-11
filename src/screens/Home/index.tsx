// Home.tsx

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {getUsers} from '../../utils/storage'; // Make sure this returns an array with faceScan and name/email
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/auth/authSlice';
import {deleteUser} from '../../utils/storage';

const Home = () => {
  const [users, setUsers] = useState<any[]>([]);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const fetchUsers = () => {
    try {
      const data = getUsers();
      setUsers(data);
    } catch (error) {
      Alert.alert('Error', 'Unable to fetch users.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


const handleDelete = (email: string) => {
  Alert.alert('Delete', 'Are you sure you want to delete this student?', [
    {text: 'Cancel', style: 'cancel'},
    {
      text: 'Delete',
      style: 'destructive',
      onPress: () => {
        deleteUser(email); // delete from storage
        setUsers(prev => prev.filter(user => user.email !== email)); // update UI
      },
    },
  ]);
};

  const renderItem = ({item}: {item: any}) => (
    <View>
      <View style={styles.card}>
        <View style={styles.leftSection}>
          <Image
            source={{uri: item.faceScan || 'https://i.pravatar.cc/100'}}
            style={styles.avatar}
          />
          <Text style={styles.name}>{item.name || item.email}</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.markButton,
            {backgroundColor: item.status ? 'green' : 'red'},
          ]}>
          <Text style={styles.markText}>{item.status}</Text>
        </TouchableOpacity>
         <TouchableOpacity
        onPress={() => handleDelete(item.email)}
        style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
      </View>
    </View>
  );

  return (
      <View style={styles.container}>
      <Text style={styles.title}>Students List</Text>
      <TouchableOpacity onPress={handleLogout} style={{
        backgroundColor: "red",
        width: 100,
        marginBottom: 10,
        borderRadius: 10,
      }}>
      <Text style={{fontSize: 20,padding: 10, fontWeight: "700", color: "#fff", textAlign: "center"}}>Logout</Text>
      </TouchableOpacity>
      <FlatList
        data={users}
        keyExtractor={item => item.email || item.name}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No students found</Text>
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03A9F4',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    elevation: 3,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#ddd',
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  markButton: {
    // backgroundColor: '#005eff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  markText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
  },
  rightSection: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
},

deleteButton: {
  backgroundColor: '#e53935',
  paddingVertical: 6,
  paddingHorizontal: 12,
  borderRadius: 20,
},

deleteText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 14,
},
});
