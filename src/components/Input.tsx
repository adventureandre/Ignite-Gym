import { IInputProps, Input as NativeBaseInput } from "native-base"

type Props =  IInputProps & {}

export function Input({...rest}:Props) {
    return (
        <NativeBaseInput
            bg="gray.700"
            h={14}
            px={4}
            borderWidth={0}
            fontSize="md"
            color="white"
            fontFamily="body"
            mb={4}
            placeholderTextColor="gray.300"
            {...rest}

        />
    )
}