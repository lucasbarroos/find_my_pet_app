import React, { useState, useEffect } from 'react';

import { Card, Buttons, Photo, Avatar, Name, Description, Label, User, Comments, PetName } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import { Button } from 'react-native-elements';

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

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <Card>
      <Photo source={{ uri: pet.uri }} ratio={1} />
      <Buttons>
        <PetName>{pet.name}, {pet.age} {pet.age > 1 ? 'anos.' : 'ano.'}</PetName>
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

      </Comments>
    </Card >
  );
}