interface User {
  __v: number,
  _id: string,
  createdAt: string,
  email: string,
  profileImage: string,
  token: string,
  updatedAt: string,
  username: string,
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  isHydrated: boolean;
  error: string | null;
}

interface LoginPayload {
  email: string;
  password: string;
}