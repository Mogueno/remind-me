import Realm from 'realm';

export function getRealmApp() {
  const appId = 'prototype-fxmhr'; // Set Realm app ID here.
  const appConfig = {
    id: appId,
    timeout: 10000,
  };
  const app = new Realm.App(appConfig);
  return app;
}
