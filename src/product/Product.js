import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

class Product extends React.PureComponent {
  render() {
    const {
      title,
      value,
      buy,
    } = this.props;

    return (
      <View>
	<Text>{title}</Text>
	<Text>{value}</Text>
	<Button
	  onPress={buy}
          title="Comprar"
          color="#841584"
	/>
      </View>
    );
  }
}

export default Product;

