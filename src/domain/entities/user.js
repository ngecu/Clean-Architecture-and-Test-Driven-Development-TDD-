class User {
    constructor(id, name, email, password, verified = false) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
      this.verified = verified;
    }
  
    // Example method to verify the user
    verify() {
      this.verified = true;
    }
  
    // Example method to update user details
    updateDetails(name, email) {
      this.name = name;
      this.email = email;
    }
  
    // Example method to change the password
    changePassword(newPassword) {
      this.password = newPassword;
    }
  
    // You can add more business logic methods as needed
  }
  
  export default User;
  