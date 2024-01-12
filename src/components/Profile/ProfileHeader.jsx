import { Avatar, AvatarGroup, Flex, VStack,Text, Button } from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = () => {
  return (
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: 'column', sm: 'row' }}>
      {/* phan avatar + ten trong profile page */}
      <AvatarGroup
        size={{ base: 'x1', md: '2xl' }}
        justifySelf={'center'}
        alignSelf={'center'}
        mx={'auto'}
      >
      <Avatar src="/profilepic.png" name="NHAN" alt='it me'/>
      </AvatarGroup>
      {/* ten ke ben profile */}
      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        <Flex gap={4} direction={{base:'column',sm:'row'}} justifyContent={{base:'center',sm:'flex-start'}} alignItems={'center'} w={'full'}>
          <Text fontSize={{base:'sm',md:'lg'}}>
            Nhan
          </Text>

          {/* chinh sua profile */}
          <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Button bg={'white'} color={'black'} _hover={{bg:"whiteAlpha.700"}} size={{base:'xs',md:'sm'}} >
              Edit profile
            </Button>
          </Flex>
        </Flex>
        
        <Flex alignItems={'center'} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{base:'xs',md:'sm'}}>
            <Text as="span" fontWeight={'bold'} mr={1}>
            4
          </Text>
          Posts
          </Text>
          
          <Text fontSize={{base:'xs',md:'sm'}}>
              <Text as="span" fontWeight={'bold'} mr={1}>
            123
          </Text>
          Followers
            </Text>
        
          <Text fontSize={{base:'xs',md:'sm'}}>
                 <Text as="span" fontWeight={'bold'} mr={1}>
            990
          </Text>
          Following
            </Text>
        </Flex>

        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'} fontWeight={'bold'}>Nhan</Text>
        </Flex>

          <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'}>Im just a student who learn to code with laptop</Text>
        </Flex>

      </VStack>
   </Flex>
  )
}

export default ProfileHeader