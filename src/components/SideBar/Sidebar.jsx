import { Avatar, Box,Button,Flex,Link, Tooltip } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { InstagramLogo, InstagramMobileLogo,CreatePostLogo,SearchLogo,NotificationsLogo } from '../../asset/constant'
import { FaHome } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import useLogOut from '../../hooks/useLogOut';


const Sidebar = () => {
    const sideBarItems = [
        {
            icon: <FaHome size={25} /> ,
            text: "Home",
            link:'/'
        },
          {
            icon: <SearchLogo/> ,
            text: "Search",
           
        },
            {
            icon: <NotificationsLogo/> ,
            text: "Notifications",
           
        },
              {
            icon: <CreatePostLogo/> ,
            text: "Create",
           
        },
        {
            icon: <Avatar size={'sm'} name='nhan' src='/prolifepic.png' /> ,
            text: 'Profile',
            link:'/me'
              }
    ]
     const { handleLogOut,isLoggingOut}= useLogOut()
  return (
      <Box height={"100vh"}
          borderRight={"1px solid"}
          borderColor={"whiteAlpha.300"}
          py={8}
          position={"sticky"}
          top={0}
          left={0}
          px={{base:2,md:4}}
      >
          <Flex direction={"column"} gap={10} w='full' height={'full'}>
              <Link to={'/'} as={RouterLink} pl={2} display={{base:'none' ,md:'block'}} cursor='pointer'>
                <InstagramLogo/>
              </Link>
              <Link to={'/'} as={RouterLink} p={2} display={{ base: 'block', md: 'none' }} 
                  borderRadius={6}
                  _hover={{
                  bg:'whiteAlpha.200'
                  }}
                  w={10}
              >
                <InstagramMobileLogo/>
              </Link>
              <Flex direction={'column'} gap={5} cursor={'pointer'}>
                  {sideBarItems.map((item, index) => (
                      <Tooltip
                          key={index}
                          hasArrow
                          label={item.text}
                          placement='right'
                          ml={1}
                          openDelay={500}
                          display={{base:'block',md:'none'}}
                      >
                          <Link display={'flex'}
                              to={item.link||null}
                              as={RouterLink}
                              alignItems={'center'}
                              gap={4}
                              _hover={{ bg: 'whiteAlpha.400' }}
                              borderRadius={6}
                              p={2}
                              w={{base:10,md:'full'}}
                              justifyContent={{base:'center',md:"flex-start"}}
                          >
                              {item.icon}
                              <Box display={{ base: 'none', md: 'block' }}>
                                  {item.text}
                              </Box>
                          </Link>
                      </Tooltip>
                  ))}
              </Flex>
              {/* logout btn */}
               <Tooltip
                         
                          hasArrow
                          label={'Log out'}
                          placement='right'
                          ml={1}
                          openDelay={500}
                          display={{base:'block',md:'none'}}
                      >
                  <Flex
                      onClick={handleLogOut}
                              as={RouterLink}
                              alignItems={'center'}
                              gap={4}
                              _hover={{ bg: 'whiteAlpha.400' }}
                              borderRadius={6}
                              p={2}
                              w={{base:10,md:'full'}}
                      justifyContent={{ base: 'center', md: "flex-start" }}
                      mt={'auto'}
                          >
                      <BiLogOut size={ 25} />
                              <Button display={{ base: 'none', md: 'block' }} variant={'ghost'} _hover={{bg:'transparent'}} isLoading={isLoggingOut}>
                                  Log out
                              </Button>
                          </Flex>
                      </Tooltip>
          </Flex>
    </Box>
  )
}

export default Sidebar