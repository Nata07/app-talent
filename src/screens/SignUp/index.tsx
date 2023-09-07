import { Box, Center, Heading, Image, Text, VStack, ScrollView } from "native-base";
import BackgroundImage from '../../assets/background.png';
import LogoImage from '../../assets/Brand.svg';
import { Input } from "../../Component/Input";
import { Button } from "../../Component/Button";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.goBack();
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1,}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} pb={24}>
                <Image w="full" source={BackgroundImage} alt="Background Image SignIn" resizeMode="cover" position="absolute" />
                <Box mt={82} w="full" alignItems="center">
                    <LogoImage />
                </Box>
                <Center mt={48}>
                    <Heading fontSize={36} fontFamily="heading" letterSpacing={2} color="gray.500">Sign Up</Heading>
                    <Box mt={10} w="full" px={8}>
                        <Input label="Name" placeholder="Digite seu nome" />
                        <Input label="Surname" placeholder="Digite seu email" />
                        <Input label="Email" keyboardType="email-address" autoCapitalize="none" placeholder="Digite seu email" />
                        <Input label="Password" secureTextEntry placeholder="Digite sua senha" />
                        <Input label="Confirm Password" secureTextEntry placeholder="Cofirme sua senha" />

                        <Button title="Register" bg="gray.900" mb={6} />
                        <TouchableOpacity onPress={handleSignIn}>
                            <Text w="full" textAlign="center" color="gray.900" fontFamily="body"> {`<`} Back Login </Text>     
                        </TouchableOpacity>    
                    </Box>
                </Center>
            </VStack>
        </ScrollView>  
    )
}