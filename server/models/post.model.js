import { pool } from "../database/connection.js"

const debug = (result) => {
    console.log("---------------------------------------------------------------")
    console.log("Objeto devuelto de la consulta: ", result)
    console.log("Instrucción procesada: ", result.command)
    console.log("Filas procesadas: ", result.rowCount)
    console.log("Información ingresada: ", result.rows[0])
    console.log("----------------------------------------------------------------")
}

const findAll = async () => {
    try {
        const result = await pool.query("SELECT * FROM posts");
        debug(result)
        return result.rows
    } catch (error) {
        console.log(error)
        throw error
    }
}

const findById = async (id) => {
    try {
        const text = "SELECT * FROM posts WHERE id = $1";
        const result = await pool.query(text, [id])
        debug(result)
        return result
    } catch (error) {
        console.log(error)
        throw error
    }
}

const create = async ({ titulo, img, descripcion }) => {
    try {
        const text = "INSERT INTO posts (titulo, img, descripcion, likes) values ($1, $2, $3, 0) RETURNING *";
        const result = await pool.query(text, [titulo, img, descripcion])
        debug(result)
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error
    }
}

const update = async (id, { likes }) => {
    try {
        const text = "UPDATE posts SET likes = $1 WHERE id = $2 RETURNING *";
        const result = await pool.query(text, [likes, id])
        debug(result)
        return result.rows[0]
    } catch (error) {
        console.log(error)
        throw error
    }
}

const remove = async (id) => {
    try {
        const text = "DELETE FROM posts WHERE id = $1 RETURNING *";
        const result = await pool.query(text, [id])
        debug(result)
        return result
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const postModel = {
    findAll,
    findById,
    create,
    update,
    remove,
}