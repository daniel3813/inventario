import getConection from "../db/database.js";

const getProductos = async (req, res) => {
    try {
        const conecction = await getConection();
        const result = await conecction.query(
            "SELECT ProductoID, ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado,PrecioUnitario FROM productos"
        );
        res.json(result);
    } catch (error) {
        console.error("Error 500:");
    }
};

const putProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad,
            UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado,PrecioUnitario
        } = req.body;

        const producto = {
            ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad,
            UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado,PrecioUnitario
        };

        const connection = await getConection();
        const result = await connection.query("UPDATE productos SET ? WHERE ProductoID = ?",  [producto, id]  );
        res.json(result);
    } catch (error) {
        console.error("Error 500:");
    }
};

export const methodHTTP = {
    getProductos,
    putProducto
};
