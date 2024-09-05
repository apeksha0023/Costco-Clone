
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <Box>
      
      <SimpleGrid
        textAlign={"center"}
        gridTemplateColumns={[
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(4,1fr)",
          "repeat(4,1fr)",
        ]}
        gap={7}
        p={[6, 6, 8, 20]}
      >
        <Link to={"/patio-covers"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            borderRadius={12}
            boxShadow={"md"}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $1,300 OFF
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/at/6brjwfvwzwwxbbwhggxrfgq/1376967-847__1.jpg?auto=webp&format=jpg&width=350&height=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
             REFRIGERATOR
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/patio-covers"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            boxShadow={"md"}
            borderRadius={12}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $900 OFF
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/at/hz9zf5m5s9f97hkq5jx3cvf/1805402-847__1.jpg?auto=webp&format=jpg&width=350&height=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
             SAMSUNG LAUNDRY
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/random"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            borderRadius={12}
            boxShadow={"md"}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $150 - $201 OFF
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/at/szfcrq7ks64bt8zb8n5xfc7/4000182774-847__1.jpg?auto=webp&format=jpg&width=350&height=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              SEALY MATTERESS
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/furniture"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            boxShadow={"md"}
            borderRadius={12}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $230 - $280 OFF
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/at/2rrftpq8gqcxnmhqgkwtb4x/1453300-847__1.jpg?auto=webp&format=jpg&width=350&height=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
             NOVAFORM MATTERESS
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/random"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            borderRadius={12}
            boxShadow={"md"}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $400 OFF
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/at/fq5p7c5jkmm9srzwf76pg45/1713422-847__1.jpg?auto=webp&format=jpg&width=350&height=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
             GREENHOUSE
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/random"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            boxShadow={"md"}
            borderRadius={12}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $150 OFF
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/at/q9sj5p593n4qm7kw92v8xcq/1816274-847__2.jpg?auto=webp&format=jpg&width=350&height=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
             HP LAPTOP
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/random"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            borderRadius={12}
            boxShadow={"md"}
            cursor={"pointer"}
            gap={0.5}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $20 OFF
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/at/5vcc5c4687gk33k3c7fb556n/1784945-847__1.jpg?auto=webp&format=jpg&width=350&height=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              DISNEY PIRATE SHIP
            </Text>
          </SimpleGrid>
        </Link>

        <Link to={"/random"}>
          <SimpleGrid
            bg={"#EEEEEE"}
            boxShadow={"md"}
            borderRadius={12}
            cursor={"pointer"}
          >
            <Text fontWeight={700} fontSize={"1.1rem"}>
              $50 OFF
            </Text>
            <img
              src="https://cdn.bfldr.com/U447IH35/at/xgm8w9fx87888k46kkf5cbns/1826983-847__1.jpg?auto=webp&format=jpg&width=350&height=350"
              alt=""
            />
            <Text
              textTransform={"uppercase"}
              fontWeight={600}
              fontSize={"small"}
            >
              RAW MANUKA HONEY
            </Text>
          </SimpleGrid>
        </Link>
      </SimpleGrid>

      <Flex justifyContent={"flex-start"} pr={[5, 5, 8, 10]} pl={[0, 0, 8, 10]}>
        <Link to={"/patio-covers"}>
          <img
            src="https://mobilecontent.costco.com/live/resource/img/24w13131/24w13131_half_banner_sonos.jpg"
            alt=""
          />
        </Link>
       </Flex>

        <Flex justifyContent={"center"} pr={[5, 5, 8, 10]} pl={[5, 5, 8, 10]} pt={10} pb={10}>
        <Link to={"/patio-covers"}>
          <img
            src="https://mobilecontent.costco.com/staging/resource/img/24w11087/d_24w11087_ban_gold_bar_liberty.jpg"
            alt=""
          />
        </Link>
       </Flex>

    </Box>
  );
};

export default Section1;
