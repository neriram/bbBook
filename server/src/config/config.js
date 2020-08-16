module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'bb_book',
        user: process.env.DB_USER || 'bb_book',
        password: process.env.DB_PASS || 'bb_book',
        options: {
            dialect: process.env.DIALECT || 'postgres',
            host: process.env.HOST || 'localhost',
            storage: './bb_book.postgres'
        }
    }
}