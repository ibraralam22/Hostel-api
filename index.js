const express = require("express");
const app = express();
const port = 3000;

const DBConnection = require("./db/db_connection");
const taskRouter = require("./routes/router");


DBConnection();
app.use(express.json());

app.use(taskRouter);

app.use((req, res, next) => {
  const error = new Error("Invalid Request");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
