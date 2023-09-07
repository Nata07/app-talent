import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { Box, useTheme } from "native-base";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/useAtuh";

export function Routes() {
    const {user} = useAuth()
    const { colors } = useTheme();
    const theme = DefaultTheme;

    theme.colors.background = colors.white;

    console.log('USUARIO LOAGO', user)
    
    return (
        <Box bg="white" flex={1}>
            <NavigationContainer theme={theme}>
                {user?.name ? <AppRoutes /> : <AuthRoutes />}
            </NavigationContainer>
        </Box>
    )
}