import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import useFollowUser from "../../hooks/useFollowUser"
import useAuthStore from '../../store/authStore'
const SuggestedUser = ({ user,setUser }) => {
    const { isFollowing, isUpadating, handleFollowUser } = useFollowUser(user.uid)

    // authuser la de tranh truong hop minh search chinh minh ra dc nut FOLLOW 
    const authUser = useAuthStore(state => state.user)
    
    const onFollowUser = async () => {
        await handleFollowUser()
        setUser({
            ...user,
            followers:isFollowing?user.followers.filter((follower) => follower.uid !== authUser.uid): [user.followers,authUser]
        })
    }
  return (
      <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
          <Flex alignSelf={'center'} gap={2}>
              <Avatar src={user.profilePicURL}  size={'md'} />
              <VStack space={2} alignItems={'flex-start'}>
                  <Box fontSize={12} fontWeight={'bold'}>
                      {user.fullName}
                  </Box>
                  <Box fontSize={12} color={'gray.500'}>
                      {user.followers.length} follwers
                  </Box>
              </VStack>
          </Flex>
          {authUser.uid !== user.uid && (
                 <Button fontSize={13}
              bg={'transparent'}
              p={0}
              h={'max-content'}
              fontWeight={'medium'}
              color={'blue.400'}
              cursor={'pointer'}
              _hover={{ color: 'white' }}
                onClick={onFollowUser}
                isLoading={isUpadating}>
              {isFollowing?'Unfollow':'Follow'}
          </Button>
        )}
   </Flex>
  )
}

export default SuggestedUser