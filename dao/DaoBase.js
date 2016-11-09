function DaoBase(Model){
    this.model = Model;
}
DaoBase.prototype.create = function(doc, callback){
    this.model.create(doc, function(error, doc){
        if(error) return callback(error);
        return callback(doc);
    })
}
DaoBase.prototype.getById = function(id, callback){
    this.model.findOne({_id: id}, function(error, doc){//返回查到的model实例
        if(error) return callback(error, null)
        return callback(null, doc)
    })
}
DaoBase.prototype.countByQuery = function(query, callback){
    this.model.count(query, function(error, docs){
        if(error) return callback(error, null);
        return callback(null, docs);
    })
}
DaoBase.prototype.getByQuery = function(query, fileds, opt, callback){
    this.model.find(query, fileds, opt, function(error, docs){
        if(error) return callback(error, null);
        return callback(null, docs)
    })
}
DaoBase.prototype.getAll = function(callback){
    console.log(this.model);
    this.model.find({}, function(error, docs){
        if(error) return callback(error, null);
        return callback(null, docs)
    })
}
DaoBase.prototype.delete = function(query, callback){
    this.model.remove(query, function(error){
        if(error) return callback(error)
        return callback(null)
    })
}
DaoBase.prototype.update = function(conditions, update, options, callback){
    this.model.update(conditions, update, options, function(error){
        if(error) return callback(error)
        return callback(null)
    })
}

module.exports = DaoBase;