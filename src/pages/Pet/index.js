import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { Card, Buttons, Photo, Avatar, Name, Description, Label, User, Comments, Comment, PetName, CommentUser, CommentPhoto, CommentText, CommentField, CommentPart, SendCommentButton } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default function PetPage({ navigation }) {
  const [pet, setPet] = useState({});
  const petId = navigation.getParam('_id');

  const loadPage = async () => {
    const response = await fetch(
      `http://localhost:3000/pets/${petId}?_expand=user`
    );

    const data = await response.json();
    setPet(data);
  };

  const register = async () => {
    alert('Comment done!')
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <ScrollView>
      <Card>
        <Photo source={{ uri: pet.uri }} ratio={1} />
        <Buttons>
          <PetName>{pet.name}, {pet.age} {pet.age > 1 ? 'years.' : 'year.'}</PetName>
          <Button
            type="outline"
            onPress={() => { }}
            icon={<Icon name="chat" size={25} color="#999" />}
            buttonStyle={{ margin: 4, borderColor: '#999' }}
          />
          <Button
            type="outline"
            onPress={() => { }}
            icon={<Icon name="camera" size={25} color="#999" />}
            buttonStyle={{ margin: 4, borderColor: '#999' }}
          />
          <Button
            type="outline"
            onPress={() => { }}
            icon={<Icon name="share" size={25} color="#999" />}
            buttonStyle={{ margin: 4, borderColor: '#999' }}
          />
        </Buttons>
        <User>
          <Avatar source={{ uri: pet.user ? pet.user.uri : pet.uri }} />
          <Name>{pet.user ? pet.user.name : ''}</Name>
        </User>
        <Description>
          <Label>{pet.description}</Label>
        </Description>
        <Comments>
          <FlatList
            data={pet.comments}
            keyExtrator={(item, index) => item.toString()}
            renderItem={({ item }) => (
              <Comment>
                <CommentPhoto source={{ uri: item.uri }} /><CommentUser>{item.name}:</CommentUser>
                <CommentText>
                  {item.comment}
                </CommentText>
              </Comment>
            )}
          />
        </Comments>
        <CommentPart>
          <CommentField placeholder="Tip a comment" onSubmitEditing={register} />
        </CommentPart>
      </Card >
    </ScrollView>
  );
}