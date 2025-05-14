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

interface SignupPayload {
  username: string;
  email: string;
  password: string;
}

interface ErrorUser {
  _id: string;
  username: string;
  email: string;
  profileImage: string;
  reputation: number;
  // role: 'user' | 'moderator' | 'admin';
  role: string;
}

interface Error {
  _id: string;
  title: string;
  description: string;
  language: string;
  tags: string[];
  userId: ErrorUser;
  votes: number;
  views: number;
  createdAt: string;
  updatedAt: string;
  // __v: number;
}

interface GetAllErrorsResponse {
  errors: Error[];
  currentPage: number;
  totalErrors: number;
  totalPages: number;
}

interface SubmitErrorRequest {
  title: string;
  description: string;
  language: string;
  tags: string[];
}

interface ErrorByUser {
  _id: string;
  title: string;
  description: string;
  language: string;
  tags: string[];
  userId: string;
  aiGeneratedSolution: string,
  votes: number;
  views: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}