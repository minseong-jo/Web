const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    const { id, pw } = await UserStorage.getUserInfo(client.id);

    if (id != undefined) {
      if (id == client.id && pw === client.pw) {
        return { success: true };
      } else {
        return { success: false, msg: "비밀번호가 틀렸습니다." };
      }
    } else {
      return { success: false, msg: "존재하지 않는 아이디입니다."};
    }
  }
 
  async register() {
    const client = this.body;
    const { id, pw } = await UserStorage.getUserInfo(client.id);
    if (id == undefined) {
      if ((client.id.length >= 6)&&(client.id.length <= 18) == false) {
        return { success: false, msg: "아이디는 6~18자로 설정해주세요." };
      }
      if ((client.pw.length >= 10)&&(client.pw.length <= 18) == false) {
        return { success: false, msg: "비밀번호는 10~18자로 설정해주세요." };
      }
      if (client.admin != "admin4375") {
        return { success: false, msg: "관리자 키가 알맞지 않습니다." };
      }
    } else {
      return { success: false, msg: "이미 사용중인 아이디입니다." };
    }
    const response = await UserStorage.save(client);
    return response;
  }
}

module.exports = User;