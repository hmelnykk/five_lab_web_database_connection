import { createConnection } from 'mysql';

const connection = createConnection({
    host: 'localhost',
    user: 'lab5@test',
    database: 'web_five_lab_back',
    password: 'password',
    port: 3306
});

console.log('Connecting to the database...');
connection.connect(function (err) {
    if (err) {
        console.log('Connection error:', err);
    } else {
        console.log('Database Connected');

        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE
            );
        `;

        const insertDataQuery = `
            INSERT INTO users (name, email)
            VALUES ('Alice', 'alice@example.com'),
                ('Bob', 'bob@example.com');
        `;

        connection.query(createTableQuery, (error, result) => {
            if (error) {
                console.log(`error bro: ${error}`);
            }
            console.log('created or already exists');
        });

        connection.query(insertDataQuery, (error, result) => {
            if (error) {
                console.log(`error bro: ${error}`);
            }
            console.log('inserted successfully');
        });

        connection.end();

    }
});

// TYPE ORM EXAMPLE

// import { DataSource } from 'typeorm';

// export const AppDataSource = new DataSource({
//     type: 'mariadb',
//     host: 'localhost',
//     port: 3306,
//     username: 'lab5@test',
//     password: 'password',
//     database: 'web_five_lab_back',
//     entities: []
// })

// AppDataSource.initialize()
//     .then(() => {
//         console.log('connected to db');
//     })
//     .catch((error) => console.log(error))