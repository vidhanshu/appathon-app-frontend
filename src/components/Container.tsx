import {View, ViewProps} from 'react-native';

import React from 'react';

type ContainerProps = ViewProps & {
  children: React.ReactNode;
};
export function Container({children, className, ...props}: ContainerProps) {
  return (
    <View {...props} className={`px-4 py-4 ${className ? className : ''}`}>
      {children}
    </View>
  );
}
