import React,{Component} from 'react';
import { View, Text, Button, Keyboard,TextInput} from 'react-native';
import styles from './styles';


class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }
  onEnterText = (name) => {
    this.setState({name})
  }
  render(){
    return (
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your name"
            underlineColorAndroid="transparent"
            onChangeText={(name) => this.onEnterText(name)}
          />
          <Button title="Submit" onPress={()=>{this.props.navigation.navigate('ButtonsScreen', { name: this.state.name });}}/>
        </View>
      </View>
    );
  }
};

export default WelcomeScreen;