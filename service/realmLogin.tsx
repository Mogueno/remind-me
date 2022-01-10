import Realm, {Credentials} from 'realm';
import {LibrarySchema} from '../schemas/LibrarySchema';
import {QuotesSchema} from '../schemas/QuotesSchema';
import {UserSchema} from '../schemas/UserSchema';
import {getRealmApp} from './realm';

export async function logIn(email: string, password: string) {
  try {
    const app = getRealmApp();
    const credentials: Credentials = Realm.Credentials.emailPassword(
      email,
      password,
    );
    const user: Realm.User = await app.logIn(credentials);
    console.log('Successfully logged in!', user);
    return user;
  } catch (err: any) {
    console.log('Failed to log in', err);
    return err.message;
  }
}

export async function syncLogin(user: any) {
  try {
    // ...
    console.log(`Logged in with the user: ${user.identities}`);
    const config = {
      schema: [UserSchema, LibrarySchema, QuotesSchema],
      sync: {
        user: user,
        partitionValue: '_partition',
      },
    };
    const realm = await Realm.open(config);
    return realm;
  } catch (error) {
    throw `Error sync realm: ${JSON.stringify(error, null, 2)}`;
  }
}

export async function signUp(email: string, password: string) {
  try {
    const app = getRealmApp();
    const registredUser = await app.emailPasswordAuth.registerUser({
      email,
      password,
    });
    console.log('Successfully signedUp!');
    return registredUser;
  } catch (err: any) {
    console.log('sign up err', err);
    return err.message;
  }
}
