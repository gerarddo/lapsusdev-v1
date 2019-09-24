const UserModel = require('../models/model.user');
let Validator = require('fastest-validator');

let users = {};
let counter = 0;

let userValidator = new Validator();

let namePattern = /([A-za-z\-\'])*/;
// let zipCodePattern = /^[0-9]{5}(?:-[0-9]{4})?$/;
let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;



const userVSchema = {
    guid: {type: 'string', min: 3},
    first_name: {type: 'string', min: 1, max: 50, pattern: namePattern},
    last_name: {type: 'string', min: 1, max: 50, pattern: namePattern},
    email: {type: "email", max: 75},
    password: {type: 'string', min: 2, max: 50, pattern: passwordPattern}
}

class UserService {
    static create(data){
        var vres = userValidator.validate(data, userVSchema);

        if(!(vres === true)){
            let errors = {}, item;

            for(const index in vres){
                item = vres[index];

                errors[item.field] = item.message;
            }

            // This will stop all logic flow and the customer won't be created
            throw {
                name: 'ValidationError',
                message: errors
            }
        }

        let user = new UserModel(
            data.first_name,
            data.last_name,
            data.email,
            data.password
        )

        user.uid = 'c' + counter++;

        users[user.uid] = user;

        return user;
    }

    static retrieve(uid){
        if(users[uid] != null){
            return users[uid];
        } else {
            throw new Error('Unable to retrieve a custoemr by (uid:' + uid + ')');
        }
    }

    static update(uid, data){
        if(users[uid] != null){
            const user = users[uid];
            Object.assign(user,data)
        } else {
            throw new Error('Unable to retrieve a custoemr by (uid:' + uid + ')');
        }
    }

    static delete(uid){
        if(users[uid] != null){
            delete users[uid];
        } else {
            throw new Error('Unable to retrieve a custoemr by (uid:' + uid + ')');
        }
    }
}

module.exports = UserService;