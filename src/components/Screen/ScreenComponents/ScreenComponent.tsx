import {View, ScrollView} from 'react-native';
import React from 'react';

interface props {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ViewComponent({children, backgroundColor}: props) {
  return <View style={{backgroundColor, flex: 1}}>{children}</View>;
}

export function ScrollviewComponent({children, backgroundColor}: props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor, flex: 1}}>
      {children}
    </ScrollView>
  );
}
