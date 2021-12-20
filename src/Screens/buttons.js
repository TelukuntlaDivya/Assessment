import React,{Component} from 'react';
import { View, Text} from 'react-native';
import styles from './styles';
import CustomButton from '../Components/Button';

class ButtonsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.route.params.name
    }
  }

  render(){
    return (
      <View style={styles.mainView}>
        <View style={styles.buttonsSubView}>
          
        </View>
        <Text style={styles.buttonsHeader}>4 Variations of button</Text>
        <CustomButton 
          title="Press Me" 
          style={styles.tButton} 
          textStyle={styles.tButton}
          onPress={()=>{this.props.navigation.navigate('DetectDevice', { name: this.state.name });}}
        />
        <CustomButton 
          title="Press Me" 
          style={styles.grayButton} 
          textStyle={styles.grayButton}
          onPress={()=>{this.props.navigation.navigate('DetectDevice', { name: this.state.name });}}
        />
        <CustomButton 
          title="Press Me" 
          style={styles.blueButton} 
          textStyle={styles.blueButton}
          onPress={()=>{this.props.navigation.navigate('DetectDevice', { name: this.state.name });}}
        />
      </View>
    );
  }
};

export default ButtonsScreen;
