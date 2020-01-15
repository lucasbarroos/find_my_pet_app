import styled from 'styled-components/native';

export const Header = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Card = styled.View`
  height: 100%;
  background-color: #eee;
`;

export const Photo = styled.Image`
  height: auto;
  width: 100%;
  aspect-ratio: ${props => props.ratio}
`;

export const User = styled.View`
  padding: 15px;
  line-height: 18px;
  flex-direction: row;
`;

export const Description = styled.View`
  padding-left: 55px;
  padding-right: 15px;
  margin-top: -15px;
  line-height: 18px;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-top: -5px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
  margin-right: 10px;
`;

export const Label = styled.Text`
  color: #333;
`;

export const Bottom = styled.Text`
  padding: 10px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;

export const Buttons = styled.View`
  flex-direction: row;
  padding-top: 10px;
  margin-left: 10px;  
`;

export const Button = styled.Button`
  margin-left: 5px;
`;

export const IconComment = styled.Image`
  height: 28px;
  width: 28px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const IconCall = styled.Image`
  height: 28px;
  width: 28px;
  margin-left: 5px;
  margin-right: 5px;
`;


export const PetName = styled.Text`
  font-size: 22px;
  width: 55%;
  color: rgba(0, 0, 0, 0.75);
  margin-top: 5px;
  text-align: center;
`;

export const Comments = styled.View`


`;

export const Comment = styled.View`


`;