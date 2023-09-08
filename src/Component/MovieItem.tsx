import { AspectRatio, Badge, Box, HStack, Heading, Image, Stack, Text } from "native-base";

export function MovieItem({item}: any) {
  return (
    <Box w="full" key={item?.id} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
        <AspectRatio>
          <Image 
            alt={item.title}
            source={{
              uri: `https://image.tmdb.org/t/p/original${item.poster_path}`
            }} 
          />
        </AspectRatio>
        <Stack p="4" space={3}>
            <HStack space={2} justifyContent="space-between" alignItems="center">
                <Heading fontFamily="heading" fontSize={14}>
                    {item?.title}
                </Heading>
                <Badge justifyContent="center" colorScheme="success" rounded="md" variant="outline">
                      ★ {item.vote_count}
                </Badge>
            </HStack>
            <Text fontWeight="400">
                {item.overview}
            </Text>
            
            <HStack alignItems="center" w="full" space={4} justifyContent="space-between">
                <Box>
                    <Text color="green.500">
                        +{item.genre_ids[0]} anos
                    </Text>
                </Box>
                <Text color="green.500">
                    Total de Votos: {item.vote_average}
                </Text>
            </HStack>
        </Stack>
    </Box>
  )
}