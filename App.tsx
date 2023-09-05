import { StatusBar } from 'react-native';
import {useFonts, Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import { NativeBaseProvider, Box, Text } from 'native-base';
import { Loading } from './src/Component/Loading';
import { THEME } from './src/theme';

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <Box style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <StatusBar translucent barStyle="dark-content" />
        {fontsLoaded ? <Text style={{fontFamily: 'Poppins_600SemiBold'}}>Hello World</Text> : <Loading /> }
        
      </Box>
    </NativeBaseProvider>
  );
}