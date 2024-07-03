const ChampModel = require("../models/ChampModel");

const addChamp = async (req, res) => {

    try {
        const { name, subname, description, img } = req.body


        ChampModel.createTable((err, result) => {
            if (err) {
                console.error("Erreur lors de la création de la table users :", err);
            } else {
                console.log("Table users créée avec succès !");
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

        if (!name || !subname || !img)
            return res.status(400).json('All fields required...')

        const newUser = await ChampModel.create({ name, subname, description, img });

        res.status(200).json({ name, subname, description, img })

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = { addChamp }