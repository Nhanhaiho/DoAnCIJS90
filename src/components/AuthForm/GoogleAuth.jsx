import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'
import { auth } from '../../firebase/firebase';
import useShowToast from '../../hooks/useShowToast';
const GoogleAuth = ({prefix}) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const showToast = useShowToast(auth);
  return (
      <>
       <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                    <Image src="/google.png" w={5} alt="gg logo" />
                    <Text mx={2} color={"blue.500"}>
                  { prefix} with google
                    </Text>
                </Flex>
      </>
  )
}

export default GoogleAuth