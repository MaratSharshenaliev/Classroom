const Pool = require('../db')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {validationResult} = require("express-validator")

class authController{
    async login(req,res){
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(301).json({
                    error: errors.array(),
                    massage: "Некорректные данные!"
                })
            }
            const {email,password} = req.body
            await Pool.query(`SELECT id,password FROM "User" WHERE "email" = $1`,[email], async (err,result)=>{
                if(err){
                    res.status(301).json({massage:err})
                    return;
                }
                if(result.rows.length){
                    const isMatch = await bcrypt.compare(password,result.rows[0].password)
                    if(!isMatch){
                        res.status(303).json({massage:"Неправильный пороль, повторите попытку"})
                        return;
                    }
                    const token = jwt.sign(
                        {userId:result.rows.id},
                        process.env.secretCode,
                        {expiresIn: '1h'}
                    )
                    res.json({
                        UserId: result.rows[0].id,
                        token
                    })
                }else{
                    res.status(400).json({
                        massage:"Пользователь не найдет"
                    })
                    return;
                }
            })
        }catch (e){
            res.status(500).json({massage:e})
        }
    }
    async logout(req,res){
        try {
            const errors = validationResult(req)

            if(!errors.isEmpty()){
                return res.status(301).json({
                    errors: errors.array(),
                    massage:"Некорректные данные"
                })
            }
            const {name,email, password,number} = req.body
            await Pool.query(`SELECT id FROM "User" WHERE "email" = $1`,[email],async (err,result)=>{
                if(err){
                    return res.status(301).json({massage:err})
                }
                if(result.rows.length){
                    return res.status(400).json("Такой email уже сущестувует")
                }
                const HashedPassword = await bcrypt.hash(password,12)
                await Pool.query(`INSERT INTO public."User"("name", "email", "password", number)VALUES ($1,$2,$3,$4)`,[name,email,HashedPassword,number],(err,response)=>{
                    if(err){
                        return res.status(301).json({massage:err})
                    }
                    return res.status(200).json({
                        massage : "Пользователь создан!",
                        Redirect : true
                    })
                })
            })
        }catch (e){
            res.status(500).json({massage:e})
        }
    }
}

module.exports = new authController();