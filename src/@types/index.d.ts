export type ScreenProps = {
  navigation: any;
  route: any;
};
export type UserDataType = {
  id: number;
  name: string | null;
  email: string;
  username: string;
  registeredAt: string;
};
export type AuthStateType = {
  isAuthenticated: boolean;
  user: UserDataType | null;
  token: string | null;
};
export type LoginDataType = {
  email: string;
  password: string;
};
export type SignUpDataType = {
  username: string;
  email: string;
  password: string;
};

export type UserDataTypeForUpdate = {
  id: number;
  name?: string;
  email?: string;
  username?: string;
  password?: string;
};

export type UserLoginReturnType = {
  isLoggedIn: boolean;
  user: UserDataType | null;
  token: string | null;
};

export type ShortProfile = {
  id: number;
  name: string;
  username: string;
};
