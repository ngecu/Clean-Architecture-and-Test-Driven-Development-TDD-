// Mock user data storage (can be replaced with actual API calls or database operations)
let users = [];

// Function to simulate user registration
const registerUserUseCase = async (name, email, password) => {
  return new Promise((resolve, reject) => {
    // Check if user already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      reject(new Error('Email address is already registered.'));
    } else {
      // Create a new user object
      const newUser = {
        id: users.length + 1,
        name,
        email,
        password, // In a real scenario, this should be hashed for security
        verified: false // Simulating email verification
      };

      // Store the new user
      users.push(newUser);

      // Simulate sending verification email
      setTimeout(() => {
        // Mark the user as verified after 3 seconds
        const index = users.findIndex((user) => user.email === email);
        if (index !== -1) {
          users[index].verified = true;
        }
        resolve(newUser);
      }, 3000); // Simulating a delay for email verification
    }
  });
};

export default registerUserUseCase;
