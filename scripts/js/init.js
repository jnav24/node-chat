db.createUser(
    {
        user: "node",
        pwd: "chat",
        roles: [
            { role: "readWrite", db: "nodeChat" }
        ]
    }
);
db.createCollection("test");

