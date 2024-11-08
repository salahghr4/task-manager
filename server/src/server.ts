import env from "./core/config/env";
import app from "./app";

const startServer = () => {
  try {
    app.listen(env.PORT, () => {
      console.log(`Server runnig on port http://localhost:${env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
