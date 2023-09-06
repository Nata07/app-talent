import { useNavigation } from "@react-navigation/native";
import { Box, Center, HStack, Heading, Image, Text, VStack, ScrollView } from "native-base";
import BackgroundImage from '../../assets/background.png';
import LogoImage from '../../assets/Brand.svg';
import { Input } from "../../Component/Input";
import { Button } from "../../Component/Button";
import { AuthNavigatiorRoutesProps } from "../../routes/auth.routes";
import { TouchableOpacity } from "react-native";
import { useAuth } from "../../hooks/useAtuh";
import { useState } from "react";

export function SignIn() {
    const navigation = useNavigation<AuthNavigatiorRoutesProps>();
    const { signIn } = useAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleSignUp() {
        navigation.navigate("signUp")
    }

    function handleSign(email: string, password: string) {
        signIn(email, password);
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1,}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} pb={16}>
                <Image w="full" source={BackgroundImage} alt="Background Image SignIn" resizeMode="cover" position="absolute" />
                <Box mt={82} w="full" alignItems="center">
                    <LogoImage />
                </Box>
                <Center my={48}>
                    <Heading fontSize={36} fontFamily="heading" letterSpacing={2} color="gray.500">Login</Heading>
                    <Box mt={12} w="full" px={8}>
                        <Input label="Email" keyboardType="email-address" value={email} onChangeText={(t) => setEmail(t)} autoCapitalize="none" placeholder="Digite seu email" />
                        <Input label="Senha" secureTextEntry placeholder="Digite sua senha" value={password} onChangeText={(t) => setPassword(t)} />

                        <Button title="Log In" bg="gray.900" onPress={() => handleSign(email, password)} />
                    </Box>
                    
                    <Text fontFamily="body" color="gray.200" mt={6}>Or continue with</Text>
                    <HStack w="full" mt={6} textAlign="center" justifyContent="center">
                        <Text color="gray.300">Don’t have account? </Text>
                        <TouchableOpacity onPress={handleSignUp}>
                            <Text color="gray.900" fontFamily="heading">Create now </Text>     
                        </TouchableOpacity>     
                    </HStack>
                </Center>
            </VStack>
        </ScrollView>
    )
}