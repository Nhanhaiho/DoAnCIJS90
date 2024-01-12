import { Box, Flex,Text } from '@chakra-ui/react'
import { LuGrid } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
const ProfileTab = () => {
  // the tab between 3 elements {post,save,like}
  return (
    <Flex w={'full'} justifyContent={'center'} gap={{ base: 4, sm: 10 }}
      textTransform={'uppercase'}
    fontWeight={'bold'}>
      {/* 3 elements */}
      {/* 1st ele the post */}
      <Flex borderTop={'1px solid white'} alignItems={'center'} p='3' gap={1} cursor={'pointer'}>
        <Box fontSize={20}>
        <LuGrid/>
        </Box>
        <Text fontSize={12} display={{base:'none',sm:'block'}}>Posts</Text>
      </Flex>

      {/* 2nd ele the save */}
        <Flex alignItems={'center'} p='3' gap={1} cursor={'pointer'}>
        <Box fontSize={20}>
        <CiBookmark/>
        </Box>
        <Text fontSize={12} display={{base:'none',sm:'block'}}>Saved</Text>
      </Flex>

      {/* 3rd ele the like */}
        <Flex alignItems={'center'} p='3' gap={1} cursor={'pointer'}>
        <Box fontSize={20}>
          <CiHeart fontWeight={'bold'} />
        </Box>
        <Text fontSize={12} display={{base:'none',sm:'block'}}>Likes</Text>
      </Flex>
    </Flex>
  )
}

export default ProfileTab