import { Flex,Box,Text, InputGroup, InputRightElement,Button,Input } from '@chakra-ui/react'
import React,{useState} from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../asset/constant'
import usePostCmt from '../../hooks/usePostCmt'
import Comment from '../Comments/Comment'
import useAuthStore from '../../store/authStore'
import { format, render, cancel, register } from 'timeago.js';

const PostFooter = ({post,isProfilePage,creatorProfile}) => {
  const [like, setLike] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const { isCommenting, handlePostComment } = usePostCmt()
  const [comment, setComment] = useState(``)
  const authUser =useAuthStore(state =>state.user)

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment)
    setComment('')
  }

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
      {0} likes
      </Text>
      {isProfilePage && (
        <Text fontSize='12' color={'gray'}>
              Posted  {format(Date.now() - 11 * 1000 * 60 * 60)}
        </Text>
      )}

      {!isProfilePage && (
        <>
        <Text fontSize={'sm'} fontWeight={600}>
      {creatorProfile?.username}{' '}
      <Text as='span' fontWeight={400}>
        {post.caption}
      </Text>
    </Text>
          {post.comments.length > 0 && (
            <Text fontSize={'sm'} color={'gray'} cursor={'pointer'}>
        View all {post.comments.length} comments
    </Text>
    )}
        </>
      )}
      
    {/* the cmt input */}
      {authUser && (
         <Flex alignItems={'center'} gap={2} justifyContent={'space-between'} w={'full'}>
      <InputGroup>
        <Input variant={'flushed'} placeholder="Add a cmt..." fontSize={14} fontWeight={'bold'} onChange={(e)=>setComment(e.target.value)} value={comment}></Input>
        <InputRightElement>
            <Button fontSize={14} color={'blue.500'} fontWeight={600} cursor={'pointer'} _hover={{ color: 'white' }} bg={'transparent'}
              onClick={handleSubmitComment}
              isLoading={isCommenting}
            >
            Post 
        </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  
        )}
    </Box>
   
   
  )
}

export default PostFooter