import React from 'react';
import { User } from '../types';

export interface PropsUserData {
    user: User;
    setUser: (user: User | undefined) => void;
}

const UserData = React.createContext<PropsUserData>({} as PropsUserData);
export default UserData;
