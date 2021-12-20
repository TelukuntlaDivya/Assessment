import { StyleSheet, Dimensions } from 'react-native';
// import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: '10%',
    paddingBottom: '5%'
  },
  subView: {
    flex: 1,
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center'  
  },
  buttonsSubView: {
    flex: 1
  },
  inputText: {
    width: '100%',
    borderWidth: 1,
    borderRadius:10,
    marginBottom:'5%',
    backgroundColor: '#fff',
    padding: '4%'
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign:'right',
    paddingVertical: '5%'
  },
  tButton: {
    color: '#65b3f7',
    backgroundColor: 'transparent',
  },
  grayButton: {
    color: '#65b3f7',
    backgroundColor: 'gray',
  },
  blueButton: {
    color: '#fff',
    backgroundColor: '#65b3f7'
  },
  buttonsHeader: {
    textAlign: 'center',
    color: 'yellow',
    fontWeight: 'bold'
  },
  subText: {
    textAlign: 'center',
    color: '#fff'
  }
})
export default styles;