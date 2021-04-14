interface IProfile {
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
  first_name: string;
  last_name: string;
  avatar: string;
  uploaded_avatar: boolean;
}

interface IAuthProfile extends IProfile {
  access_token: string;
  expires_at: number;
}

// api request inputs
interface IUpdateProfileParams {
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  password?: string;
  avatar?: File;
}
