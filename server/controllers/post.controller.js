import { postModel } from "../models/post.model.js";
import { handleErrors } from "../database/error.js"

const getAllPosts = async (req, res) => {
    try {
        const result = await postModel.findAll()
        return res.json({ ok: true, result });
    } catch (error) {
        const { status, message } = handleErrors(error.code)
        return res.status(status).json({ ok: false, result: message });
    }
}

const getAPost = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id.trim()) {
            throw { code: "402" };
        }
        const result = await postModel.findById(id)
        if (result.rows.length === 0) {
            throw { code: "404" };
        }
        return res.json({ ok: true, result: result.rows[0] });
    } catch (error) {
        const { status, message } = handleErrors(error.code)
        return res.status(status).json({ ok: false, result: message });
    }
}

const addPost = async (req, res) => {
    const { titulo, img, descripcion } = req.body
    try {
        if (!titulo || !img || !descripcion) {
            throw { code: "400" };
        }
        const result = await postModel.create({ titulo, img, descripcion })
        return res.status(201).json({ ok: true, message: "Post added", result })
    } catch (error) {
        const { status, message } = handleErrors(error.code)
        return res.status(status).json({ ok: false, result: message });
    }
}

const updateLikes = async (req, res) => {
    const { id } = req.params
    try {
        if (!id.trim()) {
            throw { code: "402" };
        }
        const post = await postModel.findById(id)
        if(post.rows.length === 0){
            throw { code: "404" };
        }
        const likes = post.rows[0].likes + 1
        const result = await postModel.update(id, { likes })
        return res.status(200).json({ ok: true, message: "+1 like", result })
    } catch (error) {
        const { status, message } = handleErrors(error.code)
        return res.status(status).json({ ok: false, result: message });
    }
}

const deletePost = async (req, res) => {
    const { id } = req.params
    try {
        if (!id.trim()) {
            throw { code: "402" };
        }
        const result = await postModel.remove(id)
        if (result.rows.length === 0) {
            throw { code: "404" };
        }
        return res.status(200).json({ ok: true, message: "Post deleted", result: result.rows[0] })
    } catch (error) {
        const { status, message } = handleErrors(error.code)
        return res.status(status).json({ ok: false, result: message });
    }
}

export const postController = {
    getAllPosts,
    getAPost,
    addPost,
    updateLikes,
    deletePost,
}