import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import HomeIcon from '../assets/home.svg'
import ProfileIcon from '../assets/profile.svg'
import SettingsIcon from '../assets/setting.svg'
import { Platform } from 'react-native';

type AppRoutes = {
    home: undefined;
    profile: undefined;
    
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;


const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <Navigator>
            <Screen name='home' component={Home} />
            <Screen name='profile' component={Profile} />
        </Navigator>
    )
}