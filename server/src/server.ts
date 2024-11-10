import env from "./core/config/env";
import app from "./app";
import { connectToDb } from "./core/config/dbConnection";

const startServer = async (): Promise<void> => {
  try {
    await connectToDb(env.MONGODB_URI);
    app.listen(env.PORT, () => {
      console.log(`Server running on port http://localhost:${env.PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

startServer();
