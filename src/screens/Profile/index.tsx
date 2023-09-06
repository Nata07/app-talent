import { AspectRatio, Avatar, Box, Center, Image, Circle, VStack, HStack, Text, Heading } from "native-base";
import { useAuth } from "../../hooks/useAtuh";
import CameraIcon from '../../assets/camera.svg'
import EditIcon from '../../assets/edit.svg'
import { ProfileItem } from "../../Component/ProfileItem";

const profileItens = [
    {
        name: 'Settings',
    },
    {
        name: 'Pending reviews',
    },
    {
        name: 'Faq',
    },
    {
        name: 'Help',
    },
]
export function Profile() {
    const {user} = useAuth();
    console.log(user)
    return(
        <VStack flex={1}>
            <Box w="full" h={350}>
                <AspectRatio w="full" h="full" ratio={{ md: 9 / 10 }}>
                        <Image resizeMode="cover" source={{
                            uri: user.avatar
                        }} alt="Picture of a Flower" />
                </AspectRatio>
            </Box>
            <VStack px={8} bg="white" flex={1} mt={-20} roundedTop={50}>
                <Center>
                    <Circle mt={-10} bg="white" maxW={75} h={75} alignSelf="center" size="xl">
                        <CameraIcon />
                    </Circle>
                </Center>
                <Box>
                    <HStack alignItems="center" justifyContent="space-between">
                        <Box>
                            <Heading fontSize={27} fontFamily="heading">{user.name} {user.surname}</Heading>
                            <Text color="gray.400" opacity={0.3}>{user.email}</Text>
                        </Box>
                        <Box>
                            <EditIcon />
                        </Box>
                    </HStack>

                    <Box my={4}>
                        {profileItens.map(item => (
                            <ProfileItem key={item.name} title={item.name} />
                        ))}
                    </Box>
                </Box>
            </VStack>
            
        </VStack>
    )
}