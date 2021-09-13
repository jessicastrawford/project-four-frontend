import { useToast, Button } from '@chakra-ui/react' 

function LoginToast() {
  const toast = useToast()
  return (
    <Button 
      onClick={() => 
        toast({
          title: 'Succesfully logged in.',
          description: 'Start viewing designs now.',
          status: 'success',
          duration: 9000,
          isClosable: true,
          className: 'toast-popup',
        })
      }
    >
    Show Toast
    </Button>
  )
}
export default LoginToast