interface User {
  __v: number,
  _id: string,
  createdAt: string,
  email: string,
  profileImage: string,
  reputation: number,
  role: string,
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
  votes: object[];
  views: object[];
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
  votes: objects[];
  views: objects[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ErrorDetailsResponse {
  error: ErrorItem;
  solutions: SolutionItem[];
}

interface UserInfo {
  _id: string;
  username: string;
  profileImage: string;
  email?: string;
  reputation?: number;
  role?: string;
}

interface ErrorItem {
  _id: string;
  title: string;
  description: string;
  language: string;
  tags: string[];
  userId: UserInfo;
  aiGeneratedSolution?: string;
  votes: object[];
  views: object[];
  createdAt: string;
  updatedAt: string;
  userId: UserInfo;
}

interface SolutionItem {
  _id: string;
  errorId: string;
  userId: UserInfo;
  solution: string;
  votes: object[];
  createdAt: string;
  updatedAt: string;
  upvotes?: number;
  isVotedByCurrentUser?: boolean;
}

interface SubmitSolutionRequest {
  errorId: string;
  body: {
    solution: string;
  };
}

interface SolutionsResponse {
  solutions: SolutionItem[];
  currentPage: number;
  totalSolutions: number;
  totalPages: number;
}