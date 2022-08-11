const users = {
  id: ["minseong4375"],
  pw: ["1234"]
}

const output = {
  index: (req, res) => {
    res.render("home/index");
  },
  
  login: (req, res) => {
    res.render("home/login");
  }
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const pw = req.body.pw;

    if (users.id.includes(id)) {

      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하였습니다!"
    }); 
  },
}

module.exports = {
  output,
  process,
};