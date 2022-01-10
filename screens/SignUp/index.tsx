import React, {useState} from 'react';
import {Alert, Button, TextInput, View} from 'react-native';
import {signUp} from '../../service/realmLogin';
const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handlePress() {
    const user = await signUp(email, password);
    if (user !== undefined) {
      Alert.alert(user);
    } else {
      Alert.alert('Usuario criado com sucesso');
      navigation.navigate('Login');
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
      <Button title="Create User" onPress={handlePress} />
    </View>
  );
};

export default SignUp;
