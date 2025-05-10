export const mockErrors = [
  {
    _id: "664001a1f5b4bc2dfd1a1e01",
    title: "TypeError: Cannot read property 'length' of undefined",
    description: "Encountered when trying to access length of a potentially null value.",
    language: "JavaScript",
    tags: ["TypeError", "JavaScript", "undefined"],
    userId: {
      _id: "663ffc5db45a2315d9099c01",
      username: "alice",
      email: "alice@example.com",
      profileImage: "",
      reputation: 120,
      role: "user"
    },
    aiGeneratedSolution: "Ensure the variable is not undefined before accessing its properties.",
    votes: 5,
    views: 32,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: "664001a1f5b4bc2dfd1a1e02",
    title: "ReferenceError: x is not defined",
    description: "Thrown when 'x' is used without declaration.",
    language: "JavaScript",
    tags: ["ReferenceError", "JS", "scope"],
    userId: {
      _id: "663ffc5db45a2315d9099c02",
      username: "bob",
      email: "bob@example.com",
      profileImage: "",
      reputation: 300,
      role: "moderator"
    },
    aiGeneratedSolution: "Declare the variable 'x' before using it.",
    votes: 10,
    views: 45,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: "664001a1f5b4bc2dfd1a1e03",
    title: "SyntaxError: Unexpected token <",
    description: "This usually means you're trying to parse HTML as JSON.",
    language: "JavaScript",
    tags: ["SyntaxError", "HTML", "JSON"],
    userId: {
      _id: "663ffc5db45a2315d9099c03",
      username: "carol",
      email: "carol@example.com",
      profileImage: "profile3.jpg",
      reputation: 500,
      role: "admin"
    },
    aiGeneratedSolution: "Ensure the endpoint returns JSON, not HTML.",
    votes: 3,
    views: 18,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: "664001a1f5b4bc2dfd1a1e04",
    title: "NullPointerException in Java",
    description: "Occurs when calling a method on a null object reference.",
    language: "Java",
    tags: ["Java", "NullPointerException", "runtime"],
    userId: {
      _id: "663ffc5db45a2315d9099c01",
      username: "alice",
      email: "alice@example.com",
      profileImage: "",
      reputation: 120,
      role: "user"
    },
    aiGeneratedSolution: "Check for null before calling methods.",
    votes: 2,
    views: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: "664001a1f5b4bc2dfd1a1e05",
    title: "ModuleNotFoundError: No module named 'requests'",
    description: "Python can't find the 'requests' library.",
    language: "Python",
    tags: ["Python", "ModuleNotFoundError", "import"],
    userId: {
      _id: "663ffc5db45a2315d9099c02",
      username: "bob",
      email: "bob@example.com",
      profileImage: "",
      reputation: 300,
      role: "moderator"
    },
    aiGeneratedSolution: "Run 'pip install requests' to install it.",
    votes: 8,
    views: 40,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: "664001a1f5b4bc2dfd1a1e06",
    title: "Segmentation fault in C++",
    description: "Accessing memory that your program doesn't own.",
    language: "C++",
    tags: ["C++", "segfault", "memory"],
    userId: {
      _id: "663ffc5db45a2315d9099c04",
      username: "dave",
      email: "dave@example.com",
      profileImage: "",
      reputation: 60,
      role: "user"
    },
    aiGeneratedSolution: "Use valgrind to trace memory issues.",
    votes: 6,
    views: 25,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: "664001a1f5b4bc2dfd1a1e07",
    title: "IndexError: list index out of range",
    description: "You're accessing an index that doesn't exist in the list.",
    language: "Python",
    tags: ["Python", "IndexError", "list"],
    userId: {
      _id: "663ffc5db45a2315d9099c05",
      username: "emma",
      email: "emma@example.com",
      profileImage: "emma.jpg",
      reputation: 410,
      role: "user"
    },
    aiGeneratedSolution: "Check list length before indexing.",
    votes: 12,
    views: 38,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: "664001a1f5b4bc2dfd1a1e08",
    title: "UnhandledPromiseRejectionWarning",
    description: "Promises not handled properly in async JavaScript code.",
    language: "JavaScript",
    tags: ["Promise", "JavaScript", "async"],
    userId: {
      _id: "663ffc5db45a2315d9099c03",
      username: "carol",
      email: "carol@example.com",
      profileImage: "profile3.jpg",
      reputation: 500,
      role: "admin"
    },
    aiGeneratedSolution: "Use try/catch or .catch() to handle promises.",
    votes: 15,
    views: 50,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: "664001a1f5b4bc2dfd1a1e09",
    title: "AttributeError: 'NoneType' object has no attribute 'something'",
    description: "Accessing attributes on a None object in Python.",
    language: "Python",
    tags: ["Python", "AttributeError", "NoneType"],
    userId: {
      _id: "663ffc5db45a2315d9099c04",
      username: "dave",
      email: "dave@example.com",
      profileImage: "",
      reputation: 60,
      role: "user"
    },
    aiGeneratedSolution: "Ensure the object is not None before use.",
    votes: 7,
    views: 19,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: "664001a1f5b4bc2dfd1a1e0a",
    title: "CORS error: Access-Control-Allow-Origin missing",
    description: "Frontend can't reach backend due to missing headers.",
    language: "JavaScript",
    tags: ["CORS", "JavaScript", "frontend"],
    userId: {
      _id: "663ffc5db45a2315d9099c01",
      username: "alice",
      email: "alice@example.com",
      profileImage: "",
      reputation: 120,
      role: "user"
    },
    aiGeneratedSolution: "Add CORS middleware to backend.",
    votes: 14,
    views: 65,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // Add 5 more for total of 15:
  ...Array.from({ length: 5 }, (_, i) => ({
    _id: `664001a1f5b4bc2dfd1a1e1${i + 1}`,
    title: `Dummy error ${i + 11}`,
    description: `This is a dummy error description for item ${i + 11}.`,
    language: "JavaScript",
    tags: ["dummy", "test"],
    userId: {
      _id: `663ffc5db45a2315d9099c0${(i % 5) + 1}`,
      username: `user${i + 1}`,
      email: `user${i + 1}@example.com`,
      profileImage: "",
      reputation: 50 + i * 10,
      role: "user"
    },
    aiGeneratedSolution: "This is a dummy AI-generated solution.",
    votes: i,
    views: i * 10,
    createdAt: new Date(),
    updatedAt: new Date()
  }))
];
