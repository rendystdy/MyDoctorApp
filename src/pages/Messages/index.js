// @flow

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {ListItems} from '../../components';
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontValue as rf
} from '../../utils/Responsive';
import {Colors} from '../../utils/Colors';
import {FontsType} from '../../utils/Fonts';
import {DummyDokter1, DummyDokter2, DummyDokter3} from '../../assets';
import {ROUTE_NAME} from '../../router';
import {Firebase} from '../../config';
import {getData} from '../../utils/localStorage';

type Props = {
  navigation: NavigationProp
};

const Messages = ({navigation}: Props) => {
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    getHistoryChat();
  }, [user.userId]);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setUser(res);
    });
  };

  const getHistoryChat = () => {
    const rootDB = Firebase.database().ref();
    const base_url_history_chat = `messages/${user.userId}/`;
    const messageDB = rootDB.child(base_url_history_chat);

    messageDB.on('value', async (snapshot) => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = await Object.keys(oldData).map(async (item) => {
          const urlUidDoctor = `doctors/${oldData[item].uidPartner}`;
          const detailDoctor = await rootDB.child(urlUidDoctor).once('value');

          data.push({
            id: item,
            detailDoctor: detailDoctor.val(),
            ...oldData[item]
          });
        });

        await Promise.all(promises);

        setHistoryChat(data);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Messages</Text>
          {historyChat.map((item) => {
            const {
              id,
              lastContentChat,
              detailDoctor: {fullName, photo, uid, category},
              detailDoctor
            } = item;

            const dataDoctor = {
              uid: uid,
              ...detailDoctor
            };

            return (
              <ListItems
                key={id}
                name={fullName}
                desc={lastContentChat}
                images={{uri: photo}}
                onPress={() => navigation.navigate(ROUTE_NAME.CHAT, dataDoctor)}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.VERY_DARK_BLUE
  },
  secondaryContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  // wrapperSection: {
  //   marginHorizontal: rw(16),
  //   marginVertical: rh(30),
  // },
  title: {
    fontSize: rf(20),
    lineHeight: 24,
    color: Colors.VERY_DARK_BLUE,
    fontFamily: FontsType.semiBold,
    marginLeft: rw(16),
    marginTop: rh(30)
  }
});
