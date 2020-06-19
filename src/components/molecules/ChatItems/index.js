// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  responsiveHeight as rh,
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveBorderRadius as rbr,
} from '../../../utils/Responsive';
import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';
import IsMe from './IsMe';
import Other from './Other';

type Props = {
  isMe: Boolean,
  chatIsMe: String,
  chatOther: String,
  dateOther: String,
  dateIsMe: String,
};

const ChatItems = ({isMe, chatIsMe, chatOther, dateIsMe, dateOther}: Props) => {
  if (isMe) {
    return <IsMe chatIsMe={chatIsMe} />;
  }
  return <Other chatOther={chatOther} />;
};

export default ChatItems;
