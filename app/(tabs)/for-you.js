import Header from "../../components/header"
import { Center, Heading } from "@gluestack-ui/themed"

const ForYou = () => {
    return (
        <>
            <Header title={"For You"}/>
            <Center flex={1}>
                <Heading>For You</Heading>
            </Center>
        </>
    );
};

export default ForYou;