// storage.js
const Storage = (() => {
    const key = "shashort_users_secure";

    function getUsers(){
        // لو LocalStorage فاضي، نضيف الادمن تلقائي
        let users = JSON.parse(localStorage.getItem(key) || "[]");

        // تحقق لو الادمن موجود
        if(!users.find(u => u.email === "yhyakakasi@gmail.com")){
            users.push({
                username: "shawarma",
                email: "yhyakakasi@gmail.com",
                phone: "01550680822",
                pass: "shawarma_s",
                role: "admin",
                balance: 0,
                links: []
            });
            localStorage.setItem(key, JSON.stringify(users));
        }

        return users;
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
