// storage.js
// قاعدة تخزين مؤقتة للمستخدمين
// أي شخص يشوف الكود مش هيعرف بيانات حقيقية
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

    function findUser(identifier){
        const users = getUsers();
        return users.find(u => u.phone===identifier || u.email===identifier);
    }

    return {getUsers, saveUser, findUser};
})();
