import * as React from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  console.log('name, params -> in navigate are ', name, params);

  navigationRef.current?.dispatch(CommonActions.navigate({name: name, params: params}));
  // navigationRef.current?.dispatch(StackActions.push(...args));
}

export function push(name, params) {
  console.log('name, params -> in navigate are ', name, params);

  navigationRef.current?.dispatch(StackActions.push(name, params));
  // navigationRef.current?.dispatch(StackActions.push(...args));
}

export function reset(index, name) {
  console.log('name, params -> in navigate are ', name);

  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: index,
      routes: [{name: name}],
    }),
  );
  // navigationRef.current?.dispatch(StackActions.push(...args));
}

export function back(name, params) {
  navigationRef.current?.goBack();
}
