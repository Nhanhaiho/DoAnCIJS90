import { Avatar, AvatarGroup, Flex, VStack,Text, Button ,useDisclosure} from '@chakra-ui/react'
import React from 'react'

import useUserProfileStore from '../../store/userProfileStore'
import useAuthStore from '../../store/authStore'
import EditProfile from './EditProfile'
import useFollowUser from '../../hooks/useFollowUser'

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();
  const authUser=useAuthStore(state=>state.user)
  const VisitingProfile = authUser && authUser.username === userProfile.username
  const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {isFollowing,isUpadating,handleFollowUser} = useFollowUser(userProfile?.uid);
  return (
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: 'column', sm: 'row' }}>
      {/* phan avatar + ten trong profile page */}
      <AvatarGroup
        size={{ base: 'x1', md: '2xl' }}
        justifySelf={'center'}
        alignSelf={'center'}
        mx={'auto'}
      >
        <Avatar src={ userProfile.profilePicURL} name="user_ava" alt=''/>
      </AvatarGroup>
      {/* ten ke ben profile */}
      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        <Flex gap={4} direction={{base:'column',sm:'row'}} justifyContent={{base:'center',sm:'flex-start'}} alignItems={'center'} w={'full'}>
          <Text fontSize={{base:'sm',md:'lg'}}>
            {userProfile.username}
          </Text>

          
          {/* acc minh se hien edit btn*/}
          {VisitingProfile &&  (<Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Button bg={'white'} color={'black'} _hover={{bg:"whiteAlpha.700"}} size={{base:'xs',md:'sm'}} onClick={onOpen}>
              Edit profile
            </Button>
          </Flex>)}

        {/* acc khac se hien follow btn */}
           {visitingAnotherProfileAndAuth &&  (<Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Button bg={'blue.500'} color={'white'} _hover={{ bg: "whiteAlpha.700" }} size={{ base: 'xs', md: 'sm' }}
              onClick={handleFollowUser}
              isLoading={isUpadating}
              
            >
              {isFollowing?'Unfollow':'Follow'}
            </Button>
          </Flex>)}
          
     
         
        </Flex>
        
        <Flex alignItems={'center'} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{base:'xs',md:'sm'}}>
            <Text as="span" fontWeight={'bold'} mr={1}>
            {userProfile.posts.length}
          </Text>
          Posts
          </Text>
          
          <Text fontSize={{base:'xs',md:'sm'}}>
              <Text as="span" fontWeight={'bold'} mr={1}>
            {userProfile.followers.length}
          </Text>
          Followers
            </Text>
        
          <Text fontSize={{base:'xs',md:'sm'}}>
                 <Text as="span" fontWeight={'bold'} mr={1}>
            {userProfile.following.length}
          </Text>
          Following
            </Text>
        </Flex>

        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'} fontWeight={'bold'}>{userProfile.fullName}</Text>
        </Flex>

          <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'}>{userProfile.bio}</Text>
        </Flex>

      </VStack>

      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
   </Flex>
  )
}

export default ProfileHeader