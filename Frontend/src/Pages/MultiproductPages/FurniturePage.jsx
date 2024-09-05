
import { Box, Button, Center, Flex, Grid, GridItem, Text, grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { CiHeart } from 'react-icons/ci'

const FurniturePage = () => {
  const [data, setData] = useState([])
useEffect(() => {
    fetch('https://costco-backend-1.onrender.com/furniture/get-furnitureproducts')
      .then((e) => e.json())
      .then((e) => setData(e.furniture))

  

  })

  return(
    <>
       <Header/>
      <Text  fontWeight={400} fontSize={"30px"} p={[5, 5, 10, 10]}>
         Furniture Products
      </Text>
          
       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',border:"2px",textAlign:"center"}}>
      { data.map((ele) => (
        <Box border="1px" borderRadius={25} gap={5} margin={5}>
          <Box w={430} p={6} key={ele._id}>
            <Link to={`/computer/${ele._id}`}>
              <Box w="100%"
       h={200}
      justifyContent={"center"}
      width={430}
      bgImage={`url(${ele.img})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      >

                  
              </Box>
              <Flex justifyContent="space-between"  >
            <Box fontWeight={500}>{ele.title}  <Box>{ele.price}</Box> 
                <Button
              
                    _hover={{ color: "white" }}
                    mt={12}
                    mr={12}
                    ml={12}
                    mb={5}
                    bg={"#296293"}
                    color={"white"}
                    width={60}
                  
                  >
                    Add
                  </Button></Box> 
              </Flex>
            </Link>
          </Box>
        </Box>
      ))}
    </div>

       <Footer/>
    </>
  )
  
 
                
}
export default FurniturePage