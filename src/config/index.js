module.exports = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    connectionString: process.env.MONGO_DB,
  },
  req: {
    rateLimit: {
      windowMs: 30 * 60 * 1000, // 30 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    },
    slowDown: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      delayAfter: 100, // allow 100 requests per 15 minutes, then...
      delayMs: 100, // begin adding 500ms of delay per request above 100:
    },
  },
}
