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
                name: 'Maria',
                surname: 'Silva',
                email: 'maria@email.com.br',
                avatar: 'https://image.tmdb.org/t/p/original/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg'
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