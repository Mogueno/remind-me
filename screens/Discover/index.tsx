import React from 'react';
import {Button, Text, View} from 'react-native';
import UserLoginDataAction from '../../redux/actions/loginAction';
import {useAppSelector} from '../../redux/hooks';
import {syncLogin} from '../../service/realmLogin';

const Discover = () => {
  const allData = useAppSelector(state => state.login);

  async function handlePress(userData: UserLoginDataAction) {
    //Open realm
    const realm = await syncLogin(userData);
    //query data
    const tasks = realm.objects('Quotes');
    console.log('QUOTES', tasks);

    //Close realm
    realm.close();
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Search for new quotes based on quote-marker</Text>
      <Button onPress={() => handlePress(allData)} title="botao">
        Botao
      </Button>
    </View>
  );
};

export default Discover;
