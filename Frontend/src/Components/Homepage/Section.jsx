
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <Box>
      <Flex justifyContent={"center"} pr={[5, 5, 8, 10]} pl={[5, 5, 8, 10]}>
        <Link to={"/patio-covers"}>
          <img
            src="https://mobilecontent.costco.com/staging/resource/img/24w13043/d_24w13043_hero_p&g_100_campaign.jpg"
            alt=""
          />
        </Link>
      </Flex>

      <SimpleGrid
        textAlign={"center"}
        gridTemplateColumns={[
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(4,1fr)",
          "repeat(4,1fr)",
        ]}
        gap={10}
        p={[6, 6, 8, 20]}
      >
        <img src="https://mobilecontent.costco.com/staging/resource/img/24w13156/24w13156_cat_tiles_p&g_beauty_v2.png" alt="" />
        <img src="https://mobilecontent.costco.com/staging/resource/img/24w13156/24w13156_cat_tiles_p&g_household_v2.png" alt="" />
        <img src="https://mobilecontent.costco.com/staging/resource/img/24w13156/24w13156_cat_tiles_p&g_health2.png" alt="" />
        <img src="https://mobilecontent.costco.com/staging/resource/img/24w13156/24w13156_cat_tiles_p&g_health1.png" alt="" />
      </SimpleGrid>


      <Flex justifyContent={"center"} pr={[5, 5, 8, 10]} pl={[5, 5, 8, 10]}>
        <Link to={"/patio-covers"}>
          <img
            src="https://mobilecontent.costco.com/live/resource/img/24w12167/d_24w12167_hero_sept_mvm_cover.jpg"
            alt=""
          />
        </Link>
       </Flex>

       <Flex>
         <Box p='4' >
             <img src="https://mobilecontent.costco.com/live/resource/img/24w13094/m_24w13094_hero_labord_day_mattress-v.jpg" alt="" />
         </Box>
  
        <Box p='4'>
            <img src="https://mobilecontent.costco.com/live/resource/img/24w13093/m_24w13093_hero_labor_day_appliances_v2.jpg" alt="" />
        </Box>
       </Flex>

       <Flex justifyContent={"center"} pr={[5, 5, 8, 10]} pl={[5, 5, 8, 10]}>
        <Link to={"/patio-covers"}>
          <img
            src="https://mobilecontent.costco.com/live/resource/img/24w01209/d-24w01209-large-banner-regular-dmvm.jpg"
            alt=""
          />
        </Link>
       </Flex>


      </Box>
      
      
    )}
      export default Section