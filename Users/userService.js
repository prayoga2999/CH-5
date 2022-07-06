const userList = [
  {
    user: "yoga",
    password: "123123",
  },
];

const login = (req, res) => {
  const user = req.body.user;
  const password = req.body.password;

  const userData = userList.find((el) => el.user == req.body.user && el.password == req.body.password);
  try {
    if (userData.user == req.body.user && userData.password == password) return res.send("Login Successful");
  } catch (error) {
    return res.send("Login Failed");
  }
};

module.exports = { login };
