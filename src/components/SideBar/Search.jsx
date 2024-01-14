import { Box, Flex, Modal, ModalContent, ModalOverlay,ModalHeader, Tooltip, useDisclosure, ModalCloseButton, ModalBody, FormControl, FormLabel, Input ,Button} from "@chakra-ui/react";
import { SearchLogo } from "../../asset/constant";
import { useRef } from "react";
import useSearchUser from "../../hooks/useSearchUser";
import SuggestedUser from '../SuggestedUsers/SuggestedUser'
const Search = () => {
    // khi bam vao search se hien ra 1 cai MODAL de ng  dung nhap ten
	const { isOpen, onOpen, onClose } = useDisclosure()
	const searchRef= useRef(null)
	const {user,isLoading,getUserProfile,setUser} =useSearchUser()
	const handleSearchUser = (e) => {
		e.preventDefault()
		getUserProfile(searchRef.current.value)
	}
	console.log(user)
	return (
		<>
			<Tooltip
				hasArrow
				label={"Search"}
				placement='right'
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems={"center"}
					gap={4}
					_hover={{ bg: "whiteAlpha.400" }}
					borderRadius={6}
					p={2}
					w={{ base: 10, md: "full" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    onClick={onOpen}
				>
					<SearchLogo />
					<Box display={{ base: "none", md: "block" }}>Search</Box>
				</Flex>
            </Tooltip>
            
            <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
                <ModalOverlay />
                <ModalContent bg='black' border={'1px solid gray'} maxW={'400px'}>
                    <ModalHeader>Search User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSearchUser}>
							<FormControl>
								<FormLabel>
									UserName
								</FormLabel>
								<Input placeholder="nhan" ref={searchRef}/>
							</FormControl>
							<Flex w={"full"} justifyContent={"flex-end"}>
								<Button type='submit' ml={"auto"} size={"sm"} my={4} isLoading={isLoading}>
									Search
								</Button>
							</Flex>
						</form>
						{user &&<SuggestedUser user={user} setUser={setUser}/>}
                    </ModalBody>
                </ModalContent>
            </Modal>
		</>
	);
};

export default Search;