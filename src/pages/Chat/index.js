// @flow

import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {Header, ChatItems, InputChat} from '../../components';
import {FontsType} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import {
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveBorderRadius as rbr,
} from '../../utils/Responsive';

type Props = {};

const Chat = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Header type="dark-profile" title="Nairobi Putri Hayza" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
          <ChatItems
            isMe
            chatIsMe="Ibu dokter, apakah memakan jeruk tiap hari itu buruk?"
          />
          <ChatItems chatOther="Oh tentu saja tidak karena jeruk itu sangat sehat..." />
          <ChatItems
            isMe
            chatIsMe="Baik ibu, terima kasih atas waktu dan ilmunya ..."
          />
          <ChatItems chatOther="Oh tentu saja tidak karena jeruk itu sangat sehat..." />
          <ChatItems
            isMe
            chatIsMe="Baik ibu, terima kasih atas waktu dan ilmunya ..."
          />
        </ScrollView>
      </View>
      <InputChat />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-between',
  },
  chatDate: {
    textAlign: 'center',
    fontFamily: FontsType.regular,
    fontSize: rf(11),
    color: Colors.DARK_GRAYISH_BLUE,
    lineHeight: 13,
    marginVertical: rh(20),
  },
  content: {
    flex: 1,
  },
});
