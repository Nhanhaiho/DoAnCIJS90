import { Box, VStack,Image,Input,Button, Flex,Text } from '@chakra-ui/react'
import { color } from 'framer-motion'
import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import GoogleAuth from './GoogleAuth'

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    // navigate user to home page
    const [input, setInput] = useState({ 
        email: '',
        password: '',
        confirm:''
    })
    const handleAuth = () => {
        if (!input.email || !input.password || !input.confirm) {
            alert('pls fill full')
            return
        }
        navigator('/')
    }

    return (<>
     <Box border={"1px solid white"} borderRadius={4} padding={5}>
          <VStack spacing={4}>
              <Image src="/logo.png" h={24} cursor={"pointer"} alt="Insta" />
              
                
                {isLogin? <Login/> :<SignUp/>}
              
                    {/*  */}
                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={'full'}>
                    <Box flex={2} h={"1px"} bg={'gray.400'}></Box>
                    <Text mx={1} color={"white"}>OR</Text>
                    <Box flex={2} h={"1px"} bg={'gray.400'}></Box>
                </Flex>
                {/*  */}
               <GoogleAuth prefix={isLogin?'Log in':'Sign up'}/>
       </VStack>
        </Box>
        
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Box mx={2} fontSize={14}>
                    {isLogin ? "Don't have an account ?": "Already have an account ?"}
                </Box>
                <Box onClick={()=>setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                    {isLogin ? "Sign Up" : "Log in"}
                </Box>
            </Flex>
        </Box>
    </>
     
  )
}

export default AuthForm