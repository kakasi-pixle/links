// storage.js
const Storage = (() => {
    const key = "shashort_users_secure";

    // استرجاع جميع المستخدمين
    function getUsers(){
        let users = JSON.parse(localStorage.getItem(key) || "[]");

        // إضافة Admin تلقائي إذا مش موجود
        if(!users.find(u => u.email === "yhyakakasi@gmail.com")){
            users.push({
                username: "shawarma",
                email: "yhyakakasi@gmail.com",
                phone: "01550680822",
                pass: "shawarma_s",
                role: "admin",
                balance: 0,
                links: [],
                withdraws: []
            });
            localStorage.setItem(key, JSON.stringify(users));
        }

        return users;
    }

    // حفظ مستخدم جديد
    function saveUser(user){
        const users = getUsers();
        users.push(user);
        localStorage.setItem(key, JSON.stringify(users));
    }

    // تحديث مستخدم موجود (لتحديث الرصيد، الروابط، السحب)
    function updateUser(updatedUser){
        const users = getUsers();
        const index = users.findIndex(u => u.username === updatedUser.username);
        if(index !== -1){
            users[index] = updatedUser;
            localStorage.setItem(key, JSON.stringify(users));
        }
    }

    // البحث عن المستخدمين
    function findUserByEmail(email){
        return getUsers().find(u => u.email === email);
    }

    function findUserByPhone(phone){
        return getUsers().find(u => u.phone === phone);
    }

    function findUserByUsername(username){
        return getUsers().find(u => u.username === username);
    }

    return {
        getUsers,
        saveUser,
        updateUser,
        findUserByEmail,
        findUserByPhone,
        findUserByUsername
    };
})();
