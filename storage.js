// storage.js - complete storage management

var Storage = {
  // جلب كل المستخدمين
  getUsers: function(){
    return JSON.parse(localStorage.getItem("users") || "[]");
  },

  // جلب مستخدم حسب الاسم
  getUser: function(username){
    let users = this.getUsers();
    return users.find(u=>u.username === username);
  },

  // إضافة أو تحديث مستخدم
  updateUser: function(user){
    let users = this.getUsers();
    let index = users.findIndex(u=>u.username === user.username);
    if(index >= 0){
      users[index] = user;
    } else {
      users.push(user);
    }
    localStorage.setItem("users", JSON.stringify(users));
  },

  // إنشاء مستخدم جديد
  createUser: function({username, password, email, phone, isAdmin=false}){
    let existing = this.getUser(username);
    if(existing) return false; // المستخدم موجود بالفعل

    let newUser = {
      username,
      password,
      email,
      phone,
      isAdmin,
      balance: 0,
      links: [],
      withdraws: [],
      supports: []
    };
    this.updateUser(newUser);
    return true;
  },

  // إضافة رابط للمستخدم
  addLink: function(username, shortLink, original, alains){
    let user = this.getUser(username);
    if(!user) return false;
    if(!user.links) user.links = [];
    user.links.push({shortLink, original, alains});
    this.updateUser(user);
    return true;
  },

  // إضافة طلب سحب
  addWithdraw: function(username, method, account, amount=0){
    let user = this.getUser(username);
    if(!user) return false;
    if(!user.withdraws) user.withdraws=[];
    user.withdraws.push({method, account, amount, status:"Pending"});
    this.updateUser(user);
    return true;
  },

  // تغيير حالة سحب (Admin فقط)
  updateWithdrawStatus: function(username, index, status){
    let user = this.getUser(username);
    if(!user || !user.withdraws || !user.withdraws[index]) return false;
    user.withdraws[index].status = status; // Pending, Paid, Seen
    this.updateUser(user);
    return true;
  },

  // إضافة تذكرة دعم
  addSupport: function(username, message){
    let user = this.getUser(username);
    if(!user) return false;
    if(!user.supports) user.supports=[];
    user.supports.push({message, status:"Pending"});
    this.updateUser(user);
    return true;
  },

  // تعديل الرصيد للمستخدم (Admin فقط)
  addBalance: function(username, amount){
    let user = this.getUser(username);
    if(!user) return false;
    user.balance = (user.balance || 0) + amount;
    this.updateUser(user);
    return true;
  }
};

// ======== انشاء الادمن افتراضي ==========
Storage.createUser({
  username: "shawarma",
  password: "shawarma_s",
  email: "yhyakakasi@gmail.com",
  phone: "01550680822",
  isAdmin: true
});
