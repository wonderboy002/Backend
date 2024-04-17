import express from "express";
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is functional at localhost:3000");
});

app.get("/", (req, res) => {
  res.send("Hello there");
});

//geta  list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is joke 1",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is joke 2",
    },
    {
      id: 3,
      title: "one more joke",
      content: "This is joke 3",
    },
    {
      id: 4,
      title: "bad joke",
      content: "This is joke 4",
    },
    {
      id: 5,
      title: "dark joke",
      content: "This is joke 5",
    },
  ];
  res.send(jokes);
});
