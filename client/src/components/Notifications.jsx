import { useContext } from "react"
import { Box, Button, Heading } from "@chakra-ui/react"
import { SocketContext } from "../Context"
    
const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);
    
return (
    <>
        {call.isReceivingCall && !callAccepted && (
            <Box display="flex" justifyContent="space-around" mb="20">
                <Heading as="h3"> {call.name} is calling </Heading>
                <Button variant="outline" onClick={answerCall} border="1px" borderStyle="solid" borderColor="black">
                    Answer Call
                </Button>
            </Box>
        )}
    </>
)
}
export default Notifications
