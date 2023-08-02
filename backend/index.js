const app = require("./app");

//----------> PORT
const PORT = process.env.PORT || 5000;

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`);
  });
};

//--------->start server
start();
