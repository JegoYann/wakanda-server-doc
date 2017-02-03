// Must export a login() function
exports.login = function(username, password){
    // Verify the username/password through Directory or any other User DB
    // If user is authenticated then return the user object
    if (user){
        return {
          // Unique user ID. Must not collide with an existing user ID
          ID: 545642165412,
          name: user.name,
          fullName: user.fullname,
          // References the Directory group where the user belongs
          belongsTo: 'free-customer',
          // Defines the sessionStorage property of the user session
          storage: {}
        };
    }
    // If user not authenticated then return an error
    else if (!user)
    {
        return {
          // Error code returned
          error: 548,
          // Error text returned
          errorMessage: 'Authentication failed. Login or Password maybe wrong.'
        };
    }
    // or continue using the standard process (with the internal directory)
    else
    {
        return false;
    }
}