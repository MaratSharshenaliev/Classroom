const Pool = require('../db')
class controllers{
    async getCouses(req,res){

        try {
            const {id} = req.headers
            console.log(id)
            const response = await Pool.query(`SELECT id, header, "group", "Theme", "urlBackground" FROM public."Course" WHERE "References" = ${id}`)
            if(!response.rows.length){
                return res.status(301).json({massage:"Нечего нетублф"})
            }
            res.status(201).json(response.rows)
        }catch (e){
            console.log(e)
        }
    }
    async getCouse(req,res){
        try {
            const {id} = req.headers
            const response = await Pool.query(`SELECT * FROM public."Course" WHERE id = ${id} ;`)

            if(!response.rows.length){
                return res.status(301).json({massage:"undefined"})
            }

            res.status(201).json(response.rows)
        }catch (e){
            console.log(e)
        }
    }
    async getCourse(req,res){
        try {
            const {id,table} = req.headers
            const response = await Pool.query(`SELECT id, task, value FROM public.${table} where "userCourse" = ${id};`)

            if(!response.rows.length){
                return res.status(301).json({massage:"undefined"})
            }
            res.status(201).json(response.rows)
        }catch (e){
            console.log(e)
        }
    }

}

module.exports = new controllers();