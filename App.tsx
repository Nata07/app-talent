import { StatusBar } from 'react-native';
import {useFonts, Poppins_400Regular, Poppins_800ExtraBold} from '@expo-google-fonts/poppins';
import { NativeBaseProvider } from 'native-base';
import { Loading } from './src/Component/Loading';
import { THEME } from './src/theme';
import { Routes } from './src/routes';

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_800ExtraBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={THEME}>
        <StatusBar translucent barStyle="dark-content" />
        {fontsLoaded ? <Routes /> : <Loading /> }
    </NativeBaseProvider>
  );
}