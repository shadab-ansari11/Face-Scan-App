import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {useAppTheme} from '../../../theme';
import {BaseView} from '../../../components/Typography';
import TabButton from '../../../components/TabButton';

interface IProps {
  navigation: any;
}

function LandingPage(props: IProps) {
  const {navigation} = props;
  const theme = useAppTheme();
  const [activeButton, setActiveButton] = useState('');

  const handleTabPress = (tabName: string) => {
    setActiveButton(tabName);
    if (tabName === 'Login') {
      navigation.navigate('Login');
    }
    if (tabName === 'Registration') {
      navigation.navigate('Registration');
    }
  };

  return (
    <SafeAreaView
      style={[
        styles.fullScreen,
        {
          backgroundColor: theme.colors.black[250],
        },
      ]}>
      <BaseView justifyContent="center" alignItems="center" flex={1}>
        <BaseView py={5}>
          <TabButton
            onPress={() => handleTabPress('Login')}
            title="Login"
            type={activeButton === 'Login' ? 'blue' : 'transparent'}
          />
          <TabButton
            onPress={() => handleTabPress('Registration')}
            title="Registration"
            type={activeButton === 'Registration' ? 'blue' : 'transparent'}
          />
        </BaseView>
      </BaseView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    width: '100%',
    height: '100%',
  },
});

export default LandingPage;
