import dotenv from "dotenv";

dotenv.config();
//dotenv.config({ path: path.join(process.cwd()) });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL as string,
  base_url: process.env.URL,
};
