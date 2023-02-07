import {Text, View} from 'react-native';

import React from 'react';

type fallbackComponentProps = {
  error: {
    name: string;
    message: string;
  };
};
const FallbackComponent = ({error}: fallbackComponentProps) => {
  return (
    <View>
      <Text>{error.name}</Text>
    </View>
  );
};

export default FallbackComponent;
