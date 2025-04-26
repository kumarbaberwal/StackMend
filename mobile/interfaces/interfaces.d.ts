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

interface AuthStore {
  user: User | null,
  token: string | null,
  isLoading: boolean,
  isCheckingAuth: boolean,

  register: ({ username, email, password }: {
    username: string;
    email: string;
    password: string;
  }) => Promise<{ success: boolean, error?: string }>

  login: ({ email, password }: {
    email: string, password: string
  }) => Promise<{ success: boolean, error?: string }>

  checkAuth: () => Promise<void>;

  logout: () => Promise<void>;
}
