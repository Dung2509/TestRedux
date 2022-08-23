import React, {useEffect} from 'react';
import {fetchUsers} from './redux/actions/index';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Image, ScrollView} from 'react-native';
const Home = () => {
  const dispatch = useDispatch();
  const usersStore = useSelector(state => state.users);
  const {loading, users, error} = usersStore;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
      <ScrollView style={{height: '100%'}}>
        {users && users.length > 0 && (
          <View>
            <Text>Success</Text>
            <View>
              {users.map(user => (
                <>
                  <Image
                    key={user.id}
                    style={{width: 100, height: 100}}
                    source={{uri: user.url}}
                  />
                  <Text key={user.id}>{user.title}</Text>
                </>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
  );
};

export default Home;
