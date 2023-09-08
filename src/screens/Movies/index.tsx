import { AspectRatio, Badge, Box, Center, HStack, Heading, Image, ScrollView, Spinner, Stack, Text, VStack } from "native-base";
import BackgroundImage from '../../assets/background-campaing.png';
import { favoriteMovies } from "../../services/movies";
import { useEffect, useState } from "react";
import { MovieItem } from "../../Component/MovieItem";

const moviesCategories = [
  {
    name: 'Ação',
  },
  {
    name: 'Suspense',
  },
  {
    name: 'Terror',
  },
]
export function Movies() {
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(false)

  async function getMovies() {
    setLoading(true)
    const {results} = await favoriteMovies();

    setMovieList(results)
    setLoading(false)
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <VStack flex={1} px={4} mt={16}>
        <Box px={3} py={4} rounded={10} borderColor="#c4c4c4" borderWidth={1}>
            <HStack w="full" justifyContent="space-between">
              <Text>Buscar por filme</Text>
            </HStack>
        </Box>
        <Box my={8}>
          <Heading fontFamily="heading" size="md">Meus Favoritos</Heading>

          <Box mt={4}>
            <HStack space={2}>
              {moviesCategories.map((item, index) => (
                <Box key={index} bg={index === 0 ? 'primary.500' : 'white'} px={4} py={2} borderWidth={1} rounded={4} borderColor="primary.500">
                  <Text color={index === 0 ? 'white' : 'gray.900'}>{item.name}</Text>
                </Box>
              ))}
            </HStack>
          </Box>
          {loading ? (<Spinner mt={50} color="green.500" />) : (
            <VStack w="full" space={4} my={4}>
              {movieList.map((item) => (
                <MovieItem item={item} />
              ))}
            </VStack>
          )}
        </Box>
      </VStack>
    </ScrollView>
  )
}