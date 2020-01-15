import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import { Post, Header, Avatar, Name, PostImage, Description, Loading, Location, IconLocation } from './styles';
import locationIcon from '../../assets/location-logo.png';

export default function Feed({ navigation }) {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const loadPage = async (pageNumber = page, shouldRefresh = false) => {
    if (total && pageNumber > total) return;

    setLoading(true);

    const response = await fetch(
      `http://localhost:3000/pets?_limit=5&_page=${pageNumber}&_expand=user`
    );

    const data = await response.json();
    const total = response.headers.get('X-Total-Count');

    setTotal(Math.floor(total / 5));
    setFeed(shouldRefresh ? data : [...feed, ...data]);
    setPage(pageNumber + 1);
    setLoading(false);
  };

  useEffect(() => {
    loadPage();
  }, []);

  const refreshList = async () => {
    setRefreshing(true);
    await loadPage(1, true);
    setRefreshing(false);
  };

  return (
    <View>
      <FlatList
        data={feed}
        keyExtrator={post => String(post.id)}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.1}
        onRefresh={refreshList}
        refreshing={refreshing}
        ListFooterComponent={loading && <Loading />}
        renderItem={({ item }) => (
          <Post>
            <Header>
              <Avatar source={{ uri: item.user.uri }} />
              <Name>{item.user.name}</Name>
            </Header>
            <IconLocation source={locationIcon} /><Location> Está em {item.location}</Location>
            <TouchableOpacity onPress={() => { navigation.navigate('Pet', { _id: item.id }) }}><PostImage ratio={1} source={{ uri: item.uri }} /></TouchableOpacity>
            <Description>
              <Name>{item.name}</Name> {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  );
}