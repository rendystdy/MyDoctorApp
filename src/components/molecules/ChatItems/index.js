// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  responsiveHeight as rh,
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveBorderRadius as rbr
} from '../../../utils/Responsive';
import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';
import IsMe from './IsMe';
import Other from './Other';

type Props = {
  isMe: Boolean,
  chatValue: string,
  chatOther: string,
  date: string,
  dateIsMe: string,
  photo: Object
};

const ChatItems = ({
  isMe,
  chatValue,
  chatOther,
  dateIsMe,
  date,
  photo
}: Props) => {
  if (isMe) {
    return <IsMe chatIsMe={chatValue} dateIsMe={date} />;
  }
  return <Other chatOther={chatValue} dateOther={date} photo={photo} />;
};

export default ChatItems;
