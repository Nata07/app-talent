import { Input as NativeBaseInput, Text, VStack, IInputProps} from "native-base"

interface InputProps extends IInputProps {
    label: string
}

export function Input({label, ...rest}: InputProps) {
    return (
        <VStack>
            <Text>{label}</Text>
            <NativeBaseInput
                bg="white"
                rounded={0}
                borderWidth={0}
                borderBottomWidth={1}
                borderBottomColor="gray.900"
                fontSize="md"
                h={10}
                p={0}
                fontFamily="body"
                mb={8}
                _focus={{
                    bg: "white",
                    borderBottomWidth: 2,
                    borderBottomColor: "green.500"
                }}
                {...rest}
            />
        </VStack>
    )
}