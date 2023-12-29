import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import icon from './assets/logoMessageApp.png';
import userIcon from './assets/userIcon.png';

const DATA = [
  {
    id: '1',
    title: 'João',
  },
  {
    id: '2',
    title: 'Maria Clara',
  },
  {
    id: '3',
    title: 'Mirian',
  },
  {
    id: '4',
    title: 'Guilherme',
  },
  {
    id: '5',
    title: 'Daniel',
  },
  {
    id: '6',
    title: 'Julia',
  },
  {
    id: '7',
    title: 'Ana',
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [selectedId, setSelectedId] = useState();
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6C63FF' : 'white';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      <StatusBar />
      <ScrollView>
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              margin: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Image source={icon} style={{ width: 70, height: 70 }} />
              <Text style={{ textAlign: 'center', fontSize: 15 }}>LettersMail</Text>
            </View>
            <View>
              <Image source={userIcon} style={{ width: 70, height: 70 }} />
              <Text style={{ textAlign: 'center', fontSize: 15 }}>Profile</Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginTop: 70, marginLeft: 10
            }}>
            <Text style={{ fontSize: 25 }}>Contatos:</Text>
          </View>

          <View style={styles.borderViewChat}>
            <View>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
              />
              <View style={{ alignItems: 'center', margin: 20 }}>
                <ActivityIndicator size="large" />
                <Text style={styles.text}>Carregando mais contatos...</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  text: {
    fontSize: 20,
    color: 'darkblue',
    margin: 10,
  },
  title: {
    fontSize: 20,
  },
  borderViewChat: {
    flex: 1,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'gray'
  },
});
