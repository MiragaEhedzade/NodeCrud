const config = {
    app: {
        port: 8880
    },
    db: {
        host: 'localhost',
        user: 'root',
        password: '',
        database:'node_test',
        tablePrefix: 'node_'    
    },
    tables : {
         node_menus: "node_menus",
         node_users: "node_users"      
    }
};

module.exports = config;