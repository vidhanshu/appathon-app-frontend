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

export type HowToLearn = {
  id: string;
  name: string;
  image: string;
  link: string;
  platform: string;
  created_at: string;
  description: string;
};
export type HowToLearnArray = {
  id: string;
  how_to_learn: HowToLearn[];
};
export type RelatedSkill = {
  id: string;
  name: string;
  image: string;
};
export type Domain = {
  id: string;
  name: string;
  description: string;
  image: string;
  related_skills: RelatedSkill[];
};
export type Master = {
  id: string;
  image: string;
  name: string;
  domain: string;
  teaches: string[];
  experience: number;
};
export type SkillType = {
  id: string;
  name: string;
  image: string;
  introduction: string;
  history: string;
};
