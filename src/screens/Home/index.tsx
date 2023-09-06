import { AspectRatio, Avatar, Box, HStack, Heading, Image, ScrollView, Text, VStack } from "native-base";
import MenuIcon from '../../assets/menu1.svg'
import NotificationIcon from '../../assets/notification.svg'
import SearchIcon from '../../assets/search.svg'
import FilterIcon from '../../assets/filter.svg'
import ArrowRightIcon from '../../assets/arrow-right.svg'
import MicrophoneIcon from '../../assets/microphone.svg'
import BannerImage from '../../assets/banner-campagin.png'
import { CategoryList } from "../../Component/CategoryList";
import { CardCampaing } from "../../Component/CardCampaing";



const categories = [
    {
        name: 'All'
    },
    {
        name: 'Campaigns'
    },
    {
        name: 'Goods'
    },
    {
        name: 'Events'
    },
    {
        name: 'Charity'
    },
    {
        name: 'Volunteers'
    },
]

export function Home() {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1,}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} pb={16} px={4} bg="#FBFBFB">
                <Box mt={16}>
                    <HStack w="full" justifyContent="space-between">
                        <MenuIcon />
                        <HStack space={4} alignItems="center">
                            <NotificationIcon />
                            <Avatar w={35} h={35} bg="green.500" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }}/>
                        </HStack>    
                    </HStack>
                </Box>
                <Box my={5}>
                    <Text color="green.500" fontSize={24}>Hello, Maria, 👋</Text>
                    <Text color="gray.900" fontSize={16}>What do you wanna donate today?</Text>
                </Box>

                <Box px={3} py={4} rounded={10} borderColor="#c4c4c4" borderWidth={1}>
                    <HStack w="full" justifyContent="space-between">
                        <SearchIcon />
                        <HStack space={4}>
                            <MicrophoneIcon />
                            <FilterIcon />
                        </HStack>    
                    </HStack>
                </Box>

                <Box my={4}>
                    <AspectRatio w="full" ratio={16/9}>
                        <Image
                            borderRadius={10}
                            source={BannerImage}
                            alt="Banner Image"
                            resizeMode="contain"
                            w="full"
                            h="full"
                        />
                    </AspectRatio>
                </Box>

                <Box>
                    <Heading fontSize={16} fontFamily={"heading"}>Categories</Heading>
                    <CategoryList categories={categories} />
                </Box>

                <Box my={5}>
                    <Heading fontSize={16} fontFamily={"heading"}>My Campaigns</Heading>
                    <CardCampaing />
                </Box>

                <Box>
                    <HStack alignItems="center" justifyContent="space-between">
                        <Heading fontSize={16} fontFamily={"heading"}>Top Fundraisers</Heading>
                        <Box flexDirection="row" alignItems="center">
                            <Text color="green.500" mr={2}>See All</Text>
                            <ArrowRightIcon />
                        </Box>
                    </HStack>
                </Box>
            </VStack>
        </ScrollView>
    )
}