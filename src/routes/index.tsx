import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { Box, useTheme } from "native-base";

export function Routes() {
    const { colors } = useTheme();
    const theme = DefaultTheme;

    theme.colors.background = colors.white;

    return (
        <Box bg="white" flex={1}>
            <NavigationContainer theme={theme}>
                <AuthRoutes />
            </NavigationContainer>
        </Box>
    )
}