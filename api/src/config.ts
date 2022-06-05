const config = {
  port: process.env.PORT || 3500,
  host: process.env.HOST || "http://localhost",
  public: process.env.PUBLIC || "/app",
};

export { config };
