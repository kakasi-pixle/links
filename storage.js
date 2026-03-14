// storage.js
// إدارة المستخدمين بشكل آمن
const Storage = (() => {
    const key = "shashort_users_secure";

    function getUsers(){
        return JSON.parse(localStorage.getItem(key) || "[]");
    }

    function saveUser(user){
        const users = getUsers();
        users.push(user);
        localStorage.setItem(key, JSON.stringify(users));
    }

    function findUserByEmail(email){
        return getUsers().find(u => u.email === email);
    }

    function findUserByPhone(phone){
        return getUsers().find(u => u.phone === phone);
    }

    function findUserByUsername(username){
        return getUsers().find(u => u.username === username);
    }

    return {getUsers, saveUser, findUserByEmail, findUserByPhone, findUserByUsername};
})();
