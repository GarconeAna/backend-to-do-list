const mongoose = require('mongoose');

function Conn(url, user, pass, banco) {
  mongoose.connect(`${url}/${banco}`, {
    user: user,
    pass: pass,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("MongoDB connected");
  }).catch((err) => {
    console.log(err);
  });
}

module.exports = Conn;
