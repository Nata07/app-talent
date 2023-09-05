import { Box, Center, HStack, Heading, Image, Text, VStack } from "native-base";
import BackgroundImage from '../../assets/background.png';
import LogoImage from '../../assets/Brand.svg';
import { Input } from "../../Component/Input";
export function SignIn() {
    return (
        <VStack flex={1} bg="white">
            <Image w="full" source={BackgroundImage} alt="Background Image SignIn" resizeMode="cover" position="absolute" />
            <Box mt={82} w="full" alignItems="center">
                <LogoImage />
            </Box>
            <Center my={48}>
                <Heading fontSize={36} fontFamily="heading" letterSpacing={2} color="gray.500">Login</Heading>
                <Box mt={12} w="full" px={8}>
                    <Input label="Email" keyboardType="email-address" autoCapitalize="none" placeholder="Digite seu email" />
                    <Input label="Senha" secureTextEntry placeholder="Digite sua senha" />
                </Box>
                
                <Text fontFamily="body" color="gray.200">Or continue with</Text>
                <HStack w="full" mt={6} textAlign="center" justifyContent="center">
                    <Text color="gray.300">Don’t have account? </Text>     
                    <Text color="gray.900" fontFamily="heading">Create now </Text>     
                </HStack>
            </Center>
        </VStack>
    )
}