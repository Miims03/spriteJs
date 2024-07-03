const db = require('../db')

class ChampModel {
    static get colDef() {
        return {
            id: "INT AUTO_INCREMENT PRIMARY KEY",
            name: "VARCHAR(20) NOT NULL UNIQUE",
            subname: "VARCHAR(200) NOT NULL UNIQUE",
            description:'TEXT',
            img: `TEXT NOT NULL UNIQUE`
        }
    }
    static get tableName() {
        return 'champ'
    }
    static createTable(callback) {
        const colDef = Object.entries(this.colDef).map(([columnName, columnDefinition]) => {
            return `${columnName} ${columnDefinition}`;
        });
        const query = `CREATE TABLE IF NOT EXISTS ${this.tableName} (${colDef.join(', ')})`;
        db.query(query, (err, result) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, result);
        });
    }
    static async create(data) {
        return new Promise((resolve, reject) => {
            const fields = Object.keys(data).join(', ');
            const placeholders = Object.values(data).map(() => '?').join(', ');
            const values = Object.values(data);
            const query = `INSERT INTO ${this.tableName} (${fields}) VALUES (${placeholders})`;
            db.query(query, values, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result, data.id);
                }
            });
        });
    }
    static async findOneBy (name , subname) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${this.tableName} WHERE name = '${name}' OR subname = '${subname}'`;
            db.query(query, [name , subname], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows[0]);
                }
            });
        });
    }
    // static async findOneById (id) {
    //     return new Promise((resolve, reject) => {
    //         const query = `SELECT * FROM ${this.tableName} WHERE id = '${id}'`;
    //         db.query(query, [id], (err, rows) => {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(rows[0]);
    //             }
    //         });
    //     });
    // }

    // static async findAll () {
    //     return new Promise((resolve, reject) => {
    //         const query = `SELECT * FROM ${this.tableName}`;
    //         db.query(query, (err, rows) => {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(rows);
    //             }
    //         });
    //     });
    // }
}

module.exports = ChampModel
