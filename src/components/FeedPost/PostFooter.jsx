import { Flex,Box,Text, InputGroup, InputRightElement,Button,Input } from '@chakra-ui/react'
import React,{useState} from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../asset/constant'

const PostFooter = ({username,isProfilePage}) => {
  const [like, setLike] = useState(false)
  const [likeCount, setLikeCount] = useState(1000)
  const handleLike =() => {
    if (like) {
      setLike(false)
      setLikeCount(likeCount-1)
    } else {
      setLike(true)
      setLikeCount(likeCount+1)
    }
  }
  return (
    <Box mb={10} marginTop={'auto'}>
    <Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={2} mt={5}>
      {/* box has like */}
      <Box onClick={handleLike} cursor={'pointer'} fontSize={17}>
       {!like ? (<NotificationsLogo/>):(<UnlikeLogo/>)}
      </Box>
      {/* box has cmt */}
      <Box cursor={'pointer'} fontSize={18}>
        <CommentLogo/>
      </Box>

    </Flex>
    <Text fontWeight={600} fontSize={'sm'}>
      {likeCount} likes
    </Text>
      {!isProfilePage && (
        <>
        <Text fontSize={'sm'} fontWeight={600}>
      {username}{" "}
      <Text as='span' fontWeight={400}>
        Felling bad
      </Text>
    </Text>
    <Text fontSize={'sm'} color={'gray'}>
        View all {likeCount} comments
    </Text>
        </>
    )}
    {/* the cmt input */}
    <Flex alignItems={'center'} gap={2} justifyContent={'space-between'} w={'full'}>
      <InputGroup>
        <Input variant={'flushed'} placeholder="Add a cmt..." fontSize={14} fontWeight={'bold'}></Input>
        <InputRightElement>
          <Button fontSize={14} color={'blue.500'} fontWeight={600} cursor={'pointer'} _hover={{color:'white'}} bg={'transparent'}>
            Post
        </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  
    </Box>
   
   
  )
}

export default PostFooter