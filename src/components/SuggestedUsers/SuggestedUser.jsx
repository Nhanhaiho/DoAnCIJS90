import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const SuggestedUser = ({ followers, name, avatar }) => {
    const [isFollow,setIsFollow]= useState(true)
  return (
      <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
          <Flex alignSelf={'center'} gap={2}>
              <Avatar src={avatar} name={name} size={'md'} />
              <VStack space={2} alignItems={'flex-start'}>
                  <Box fontSize={12} fontWeight={'bold'}>
                      {name}
                  </Box>
                  <Box fontSize={12} color={'gray.500'}>
                      {followers} follwers
                  </Box>
              </VStack>
          </Flex>
          <Button fontSize={13}
              bg={'transparent'}
              p={0}
              h={'max-content'}
              fontWeight={'medium'}
              color={'blue.400'}
              cursor={'pointer'}
              _hover={{ color: 'white' }}
                onClick={() =>setIsFollow(!isFollow)}
          >
              {!isFollow?'Unfollow':'Follow'}
          </Button>
   </Flex>
  )
}

export default SuggestedUser