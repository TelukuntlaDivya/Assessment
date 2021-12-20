import React,{Component} from 'react';
import { View, Text} from 'react-native';
import styles from './styles';
import DeviceInfo from 'react-native-device-info'

class DetectDevice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmulator:''
    }
  }

componentDidMount() {
  DeviceInfo.isEmulator().then((isEmulator) => {
    this.setState({isEmulator})
  });
}

  render(){
    return (
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text style={styles.subText}>{ this.state.isEmulator?"The application is Working on emulator":"The application is Working on Physical device" }</Text>
        </View>
      </View>
    );
  }
};

export default DetectDevice;
