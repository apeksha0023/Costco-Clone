import { Box, Button, Divider, Flex ,Text,Image, SimpleGrid} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

const FurnitureSinglePage = () => {
  const [data1,setData1]=useState({});
    const{_id}=useParams()

    useEffect(()=>{
        fetch(`https://costco-backend-1.onrender.com/furniture/get-furnitureproduct/${_id}`)
        .then(e=>e.json())
        .then(e=>setData1(e.furniture))
         })
  
    return (
      <>
       
         
       <div>
      <Header/>
      <Flex justifyContent="space-evenly">
      <Box w={500}  ><img src={data1?.img} alt="" /></Box>
        <Box>
        <Flex marginTop={8} fontSize={25} fontWeight={300} marginLeft={0}><Text color="#c8102e">Title</Text>: {data1?.title}</Flex>
        <Flex gap={5} marginTop={8} fontSize={25} fontWeight={200} textAlign="center"> <Text color="#c8102e">Description</Text> : {data1?.description}</Flex>
        <Flex gap={5} marginTop={8} fontSize={25} fontWeight={200} textAlign="center"> <Text color="#c8102e">Price</Text>: {data1?.price}</Flex>
        <Box textAlign="center" marginTop={12}><Button p={2} width={400} size='lg' backgroundColor="#c8102e" color="white" border="1px solid black">ADD TO CART</Button></Box>
           
        </Box>
      
      </Flex>
        <Footer/> 
    </div>
        
      
     </>
    );
  };
  
  export default FurnitureSinglePage;
  