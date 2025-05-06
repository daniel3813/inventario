import getConection from "../db/database.js";

const getEmpleados = async (req, res) => {
    try {
        const conecction = await getConection();
        const result = await conecction.query("SELECT EmpleadoID, Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto FROM empleados");
        res.json(result);
    } catch (error) {
        console.error("Error 500:");
    }
};



export const methodHTTP = {
    getEmpleados
};



