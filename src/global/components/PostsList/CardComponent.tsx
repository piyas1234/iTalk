import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useSelector} from 'react-redux';
import ColorsMethod from './../../colors/ColorsMethod';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
} from 'react-native-paper';

const CardComponent = ({item}: any) => {

  const LeftContent = (props:any) => <Avatar.Icon {...props}  icon="account" />
  const Theme = useSelector(state => state.Theme.theme);
  const {colors, background} = ColorsMethod(Theme);
  return (
    <Card style={{...styles.main, backgroundColor: background.bgWhite}}>
      <Card.Title
        titleStyle={{color: colors.textDark}}
        subtitleStyle={{color: colors.textDark}}
        title={item.name}
        subtitle="2h."
        left={LeftContent}
      />
      <Card.Content style={{paddingBottom: 30}}>
        <Paragraph style={{color: colors.textDark}}>
          {item.description}
        </Paragraph>
      </Card.Content>
      <Card.Cover style={{height: 400}} source={{uri: item.image}} />
      <Card.Actions style={{justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <IconButton
            icon="heart"
            color={'red'}
            size={20}
            onPress={() => console.log('Pressed')}
          />

          <Button>77 Likes</Button>
        </View>

        <View style={{flexDirection: 'row'}}>
          <IconButton
            icon="message"
            color={colors.textSecondary}
            size={20}
            onPress={() => console.log('Pressed')}
          />
          <Button>Ok</Button>
        </View>
      </Card.Actions>
    </Card>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  main: {
    marginVertical: 20,
  },
});
