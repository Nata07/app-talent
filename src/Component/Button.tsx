import {Button as NativeBaseButton, IIconButtonProps, Text} from "native-base"

interface ButtonProps extends IIconButtonProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <NativeBaseButton 
            w="full"
            h={14}
            rounded="sm"
            _pressed={{
                bg: "gray.500"
            }}
            {...rest}
        >
            <Text color="white" fontFamily="body" fontSize={14}>{title}</Text>
        </NativeBaseButton>
    )
}