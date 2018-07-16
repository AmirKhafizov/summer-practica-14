const phoneModel = require('../models/phones');

exports.getAllPhones = function (req, resp, next) {

    let phonesList = [];

    phoneModel.find({}, function (err, phones) {

        if(err){
            next(err);
        }else{

            for(let phone of phones){

                phonesList.push({

                   id: phone._id,
                   nickname: phone.nickname,
                   age: phone.age,
                    model:phone.model

                });

            }

            resp.json({

                status: "success",
                message: "Here are the phones",
                data: {
                    phones: phonesList
                }

            });

        }

    });

};

exports.addPhone = function (req, resp, next) {

    phoneModel.create({

        nickname: req.body.nickname,
        age: req.body.age,
        model:req.body.model

    }, function (err, result) {

        if(err){
            next(err);
        }else{

            resp.json({

                status: "success",
                message: "Phone added",
                data: null

            });

        }

    });

};