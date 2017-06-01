var Pools = require('../models/pools')

class PoolsController {
    getPools(req, res, next) {
        Pools.find( (err, users) => {
            if(err) {
                res.status(500).send(err);
                return;
            }

            res.status(200).json({
                data: users
            })
        })
    }
    addPool(req, res, next) {
        Pools.create(req.body)
            .then( data => {
                res.send(201).json(data);
            })
            .catch( err => {
                res.status(400).send(err)
            })
    }
    deletePool(req, res, next) {
        if(!req.params.id) {
            res.status(400).json({
                error: 'Pool id was not informed for delete'
            });
            return
        }

        Pools.findById(id)
            .then(function (data) {
                if(!data) {
                    res.send(404).send('Not found');
                    return;
                }

                Pools.remove({ _id: id})
                    .then( function (data) {
                        res.status(204).send();
                    })
            })
    }
}

module.exports = new PoolsController();