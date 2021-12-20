import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform
} from 'react-native';
// import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const AppButton = props => {
  const title = props.title;
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.appButtonContainer, props.style]} >
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        {props.children}
        <Text style={[styles.appButtonText, props.textStyle]}>
          { title }
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default AppButton;
const styles = StyleSheet.create({
  appButtonText: {
    letterSpacing: 0,
    textAlign: "center",
    textAlignVertical: 'center',
  },
  appButtonContainer: {
    textAlign:'center',
    borderRadius: 10,
    padding:'5%',
    marginVertical: '2%'
  }
})