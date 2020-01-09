const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI
  },
  default: {
    SECRET: "Bepul",
    DATABASE: "mongodb+srv://Bepul:Bepul@cluster0-lo1zs.mongodb.net/test?retryWrites=true&w=majority"
  }
};

exports.get = function get(env) {
  return config[env] || config.default;
};
