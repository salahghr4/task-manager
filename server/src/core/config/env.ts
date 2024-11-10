import "dotenv/config";
import { get } from "env-var";

const envs = {
  PORT: get("PORT").required().asPortNumber(),
  API_PREFIX: get("API_PREFIX").default("/api/v1").asString(),
  MONGODB_URI: get("MONGODB_URI").required().asUrlString(),
};

export default envs;
