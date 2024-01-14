import { Avatar,Text,Flex } from '@chakra-ui/react'


const Comment = ({comment}) => {
  return (
      <Flex gap={4}>

          <Avatar src={'/profile.png'} name={username} size={'sm'} />
          <Flex direction={'column'}>
              <Flex gap={2}>
                  
                  <Text fontSize={12} fontWeight={'bold'}>
                      {/* {username} */}
                  </Text>

                  <Text fontSize={12} fontWeight={'bold'}>
                      {comment.comment}
                  </Text>

                  <Text fontSize={12} color={'gray'}>
                      {/* {createAt} */}
                  </Text>
                
              </Flex>
          </Flex>
    </Flex>
  )
}

export default Comment