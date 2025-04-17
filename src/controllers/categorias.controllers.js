import getConection from "../db/database.js"
const getCategorias = async (req, res)=>{
    try{
        const conecction = await getConection();
        const result = await conecction.query("SELECT CategoriaID, CategoriaNombre,	Descripcion, Imagen    from categorias")
        res.json(result);
    }catch{
        console.error("Error 500");
    }

}   
const postCategorias = async(req,res) =>{
    try {
        const {CategoriaNombre,Descripcion,Imagen } = req.body;
        
        const category = {CategoriaNombre,Descripcion,Imagen }

        const conecction = await getConection();
        
        const result = await conecction.query("INSERT INTO categorias SET ?", category)
        
        res.json(result)
    } catch (error) {
        console.error("Error 500");
    }
}

export const methodHTTP = {
    getCategorias,
    postCategorias
};



