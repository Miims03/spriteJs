const ChampModel = require("../models/ChampModel");

const addChamp = async (req, res) => {

    try {
        const { name, subname, description, img, width, frames } = req.body


        ChampModel.createTable((err, result) => {
            if (err) {
                console.error("Erreur lors de la création de la table users :", err);
            } else {
                console.log("Table créée avec succès !");
            }
        })

        let champ = await ChampModel.findOneBy(name, subname)

        if (champ) {
            if (user.name === name)
                return res.status(400).json(`${name} is already added.`)
            if (user.subname === subname)
                return res.status(400).json(`${subname} is already added.`)
            if (user.img === img)
                return res.status(400).json(`This image is already used.`)
        }

        if (!name || !subname || !img || !width || !frames)
            return res.status(400).json('All fields required...')

        const newChamp = await ChampModel.create({ name, subname, description, img, width, frames });

        res.status(200).json({ name, subname, description, img, width, frames })

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}
const findChamp = async (req, res) => {

    const champId = req.params.id

    try {
        const champ = await ChampModel.findOneById(champId)
        res.status(200).json(champ)
        console.log(champ)

    }catch(err) {
        console.log(err)
        res.status(500).json(err)   
    }

}

const getChamp = async (req, res) => {
    try {
        const champ = await ChampModel.findAll()
        res.status(200).json(champ)

    }catch(err) {
        console.log(err)
        res.status(500).json(err)   
    }

}

module.exports = { addChamp , findChamp ,  getChamp }