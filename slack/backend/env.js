import "dotenv/config.js"

export const ENV={
    PORT:process.env.PORT,
    MONGO_DB_URI:process.env.MONGO_DB_URI,
    MONGODB_DB_NAME:process.env.MONGODB_DB_NAME,
}