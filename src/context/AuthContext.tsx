import { ReactNode, createContext, useState } from "react";
import { UserDTO } from "../dtos/UserDTO";

export type AuthContextDataProps = {
    user: UserDTO;
    signIn: (email: string, password: string) => void
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<UserDTO>({} as UserDTO);

    function signIn(email: string, password: string) {
        try {
            setUser({
                id: '1',
                name: 'Natanael',
                surname: 'Silva',
                email: email,
                avatar: 'https://avatars.githubusercontent.com/u/13895506?v=4'
            })
        } catch (error) {
            console.log(error)
            throw new Error('Nao foi possivel fazer login')
        }
    }
    return (
        <AuthContext.Provider value={{user, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}