import { Box, HStack, Heading } from "native-base";
import ChevronIcon from '../assets/chevron-left.svg'


export function ProfileItem({title = ''}) {
    return (
        <Box my={2} py={6} px={4} rounded={20} borderWidth={2} shadow={9} borderColor="coolGray.200">
            <HStack alignItems="center" justifyContent="space-between">
                <Heading fontFamily="heading" fontSize={16}>{title}</Heading>
                <Box>
                    <ChevronIcon />
                </Box>
            </HStack>
        </Box>
    )
}