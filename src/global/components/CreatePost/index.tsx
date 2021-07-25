import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import ColorsMethod from './../../colors/ColorsMethod';

import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const CreatePost = () => {
  const Theme = useSelector(state => state.Theme.theme);
  const {colors, background} = ColorsMethod(Theme);
  return (
    <View>
      <View style={styles.main}>
        <Avatar.Image
          size={50}
          source={{
            uri: 'https://media.istockphoto.com/photos/handsome-guy-picture-id510475176?k=6&m=510475176&s=170667a&w=0&h=WAPDoZNGiEPZVAAzO1j32e-bKp_9Qu2VKbZaUQ0v-J0=',
          }}
        />
        <TextInput
          style={{...styles.input, backgroundColor: colors.textWhiteInput}}
          placeholder="What's on your mind?"
          placeholderTextColor={colors.textDark}
        />
      </View>

      <View style={styles.main2}>
        <Button
          icon={<Icon name="camera" size={20} color="tomato" />}
          title=" Live"
          type="outline"
        />
        <Button
          icon={<Icon name="image" size={20} color="tomato" />}
          title=" Photo"
          type="outline"
        />

        <Button
          icon={<Icon name="user" size={20} color="tomato" />}
          title=" friends"
          type="outline"
        />
        <Button
          icon={<Icon name="list" size={20} color="tomato" />}
          title=" Room"
          type="outline"
        />
      </View>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  main2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },

  input: {
    elevation: 2,
    borderRadius: 20,
    width: '80%',
    paddingHorizontal: 20,
  },
});
