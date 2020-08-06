import React from 'react';
import { User } from '../types';

export interface PropsUserData {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserData = React.createContext<PropsUserData>({} as PropsUserData);
export default UserData;
