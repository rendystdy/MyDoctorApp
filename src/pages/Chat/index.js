// @flow

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';

import {Header, ChatItems, InputChat} from '../../components';
import {FontsType} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import {
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveBorderRadius as rbr
} from '../../utils/Responsive';
import {getData} from '../../utils/localStorage';
import {showError} from '../../utils/showMessage';
import {Firebase} from '../../config/index';
import {getChatTime, setDateChat} from '../../utils/Date';

type Props = {
  navigation: NavigationProp,
  route: RouteProp
};

const Chat = ({navigation, route}: Props) => {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const chatId = `${user.userId}_${dataDoctor.uid}`;
    const base_url = `chatting/${chatId}/allChat/`;

    Firebase.database()
      .ref(base_url)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];

          Object.keys(dataSnapshot).map((item) => {
            const dataChat = dataSnapshot[item];
            const newDataChat = [];

            Object.keys(dataChat).map((itemChat) => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat]
              });
            });

            allDataChat.push({
              id: item,
              data: newDataChat
            });
          });

          setChatData(allDataChat);
        }
      });
  }, [dataDoctor.uid, user.userId]);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setUser(res);
    });
  };

  // const getDataChatting = () => {
  //   const chatId = `${user.userId}_${dataDoctor.uid}`;
  //   const base_url = `chatting/${chatId}/allChat/`;

  //   Firebase.database()
  //     .ref(base_url)
  //     .on('value', (snapshot) => {
  //     });
  // };

  const handleChatSend = () => {
    const today = new Date();

    const chatTime = getChatTime(today);
    const dateChat = setDateChat(today);

    const data = {
      sendBy: user.userId,
      chatDate: today.getTime(),
      chatTime: chatTime,
      chatContent: chatContent
    };

    const chatId = `${user.userId}_${dataDoctor.uid}`;

    const base_url_chat = `chatting/${chatId}/allChat/${dateChat}`;
    const base_url_message_user = `messages/${user.userId}/${chatId}`;
    const base_url_message_doctor = `messages/${dataDoctor.uid}/${chatId}`;

    const dataHistoryChatForUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: dataDoctor.uid
    };

    const dataHistoryChatForDoctor = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.userId
    };

    Firebase.database()
      .ref(base_url_chat)
      .push(data)
      .then(() => {
        setChatContent('');
        //  set history for user
        Firebase.database()
          .ref(base_url_message_user)
          .set(dataHistoryChatForUser);

        // set history for doctor
        Firebase.database()
          .ref(base_url_message_doctor)
          .set(dataHistoryChatForDoctor);
      })
      .catch((error) => {
        showError(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Header
        type="dark-profile"
        name={dataDoctor.fullName}
        title={dataDoctor.category}
        profile={{uri: dataDoctor.photo}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {chatData.map((chat) => {
            return (
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {chat.data.map((item) => {
                  const {
                    data: {chatContent, chatTime, sendBy},
                    id
                  } = item;
                  const isMe = sendBy === user.userId;

                  return (
                    <ChatItems
                      key={id}
                      isMe={isMe}
                      chatValue={chatContent}
                      date={chatTime}
                      photo={isMe ? null : {uri: dataDoctor.photo}}
                    />
                  );
                })}
              </View>
            );
          })}
          {/* <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
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
          /> */}
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={(value) => setChatContent(value)}
        onPress={handleChatSend}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-between'
  },
  chatDate: {
    textAlign: 'center',
    fontFamily: FontsType.regular,
    fontSize: rf(11),
    color: Colors.DARK_GRAYISH_BLUE,
    lineHeight: 13,
    marginVertical: rh(20)
  },
  content: {
    flex: 1
  }
});
