import getConection from "../db/database.js";

const getClientes = async (req, res) => {
    try {
        const connection = await getConection();
        const result = await connection.query("SELECT ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax FROM clientes"
        );
        res.json(result);
    } catch (error) {
        console.error("Error 500:");
    }
};


const postCliente = async (req, res) => {
    try {
        const {
            ClienteID, Compania, Contacto, Titulo,
            Direccion, Ciudad, Regiones, CodigoPostal,
            Pais, Telefono, Fax
        } = req.body;

        const cliente = {
            ClienteID, Compania, Contacto, Titulo,
            Direccion, Ciudad, Regiones, CodigoPostal,
            Pais, Telefono, Fax
        };

        const connection = await getConection();
        const result = await connection.query("INSERT INTO clientes SET ?", cliente);
        res.json(result);
    } catch (error) {
        console.error("Error 500:");
    }
};




export const methodHTTP = {
    getClientes,
    postCliente
};


