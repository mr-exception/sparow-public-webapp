export interface IProfile {
  id: string;
  username: string;
  email: {
    address: string;
    verified: boolean;
  };
  phone: {
    number: string;
    verified: boolean;
  };
  avatar: string;
  access_token: string;
  expires_at: number;
}

export const emptyProfile: IProfile = {
  id: "test",
  username: "",
  email: {
    address: "",
    verified: false,
  },
  phone: {
    number: "",
    verified: false,
  },
  avatar: "",
  access_token: "",
  expires_at: 0,
};
