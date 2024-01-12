import { Container, VStack,Flex,SkeletonCircle, Skeleton,Box } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import { useEffect, useState } from 'react'

const FeedPosts = () => {
  const [Loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[] )
  return (
    <Container maxW={'container.sm'} py={10} px={2}>
      {Loading && [0, 1, 2, 3].map((item, index) => (
        <VStack key={index} gap={4} alignItems={'flex-start'} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size='10' />
            <VStack gap={2} alignItems={'flex-start'}>
              <Skeleton height='10px' w={'200px'} />
              <Skeleton height='10px' w={'200px'} />
            </VStack>
          </Flex>
          <Skeleton w={'full'}>
            <Box h={'500px'}>Contents Wrapped</Box>
          </Skeleton>
        </VStack>
      ))}

      {!Loading && (
        <>
         <FeedPost
        img='/img1.png' username='sala' avatar='/img1.png'
      />
      <FeedPost
      img='/img2.png' username='nick' avatar='/img2.png'/>
      <FeedPost
      img='/img3.png' username='ann' avatar='/img3.png'/>
      <FeedPost
      img='/img4.png' username='tom' avatar='/img4.png'/>
        </>
     )}
  
      
      </Container >
  )
}

export default FeedPosts