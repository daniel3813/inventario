import mysql from "promise-mysql";

import config from "./../config.js"
const conecction = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

const getConection = () =>{
    return conecction
}
export default getConection;