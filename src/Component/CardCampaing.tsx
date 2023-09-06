import { AspectRatio, Badge, Box, Center, HStack, Heading, Image, Progress, Stack, Text } from "native-base";
import BackgroundImage from '../assets/background-campaing.png';
export function CardCampaing() {
    return (
        <Box my={4}>
            <Box maxW="72" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
                <Box alignItems="center" justifyContent="center" bg="blue.500">
                    <Image source={BackgroundImage} alt="image" resizeMode="cover" w="full"/>
                </Box>
                <Stack p="4" space={3}>
                    <HStack space={2} justifyContent="space-between" alignItems="center">
                        <Heading fontFamily="heading" fontSize={14}>
                            Help sarah to defet ...
                        </Heading>
                        <Badge colorScheme="success" rounded="md" alignSelf="center" variant="outline">
                            Medical
                        </Badge>
                    </HStack>
                    <Text fontWeight="400">
                        Lorem ipsum dolor sit amet,adipisci consectetur adipisci ipsum dolor.....
                    </Text>
                    <Box w="full" maxW="400">
                        <Progress colorScheme="emerald" value={45} />
                    </Box>
                    <HStack alignItems="center" w="full" space={4} justifyContent="space-between">
                        <Box>
                            <Text color="green.500">
                                Raised:$6000
                            </Text>
                        </Box>
                        <Text color="green.500">
                            45%
                        </Text>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    )
}