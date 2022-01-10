import React, {useState} from 'react';
import {Alert, Button, TextInput, View} from 'react-native';
import {loginAction} from '../../redux/actions/loginAction';
import {logIn, syncLogin} from '../../service/realmLogin';
import {useThunkDispatch} from '../../redux/hooks';

function Login({navigation}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useThunkDispatch();

  async function handlePress() {
    try {
      const user: Realm.User = await logIn(email, password);
      if (typeof user === 'string') {
        Alert.alert(user);
      } else {
        dispatch(loginAction(user));
        await syncLogin(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }}>
      <TextInput
        placeholder="Email"
        onChangeText={e => setEmail(e)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        onChangeText={e => setPassword(e)}
        value={password}
      />
      <Button title="Log in" onPress={handlePress} />
      <Button title="Sign up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}

export default Login;
