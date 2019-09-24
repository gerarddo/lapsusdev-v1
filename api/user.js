var express = require('express');
var router = express.Router();
var UserService = require('../services/service.user');

router.get('/', async function(req, res, next){
    res.json({error:'Invalid User UID.'})
})

router.post('/', async (req, res, next) => {
    const body = req.body;

    try{
        const user = await UserService.create(body);

        if(body.guid != null){
            user.guid = body.guid;
        }

        res.cookie('guid', user.guid, {maxAge: 900000, httpOnly: true});

        return res.status(201).json({user: user});
    } catch (err){
        if(err.name === 'ValidationError'){
            return req.status(400).json({error: err.message});
        }

        return next(err);
    }
})


router.get('/:id', async (req, res, next) => {

    try{
    
        const user = await UserService.retrieve(req.params.id);

        return res.json({user: user})
    
    } catch (err){

        return next(err);

    }
})

router.put(':/id', async (req, res, next) => {
    try{
    
        const user = await UserService.update(req.params.id, req.body);

        return res.json({user: user})
    
    } catch (err){

        return next(err);

    }
})


router.delete('/:id', async (req, res, next) => {
    try{
    
        const user = await UserService.delete(req.params.id);

        return res.json({user: user})
    
    } catch (err){

        return next(err);

    }
})

module.exports = router;