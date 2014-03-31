var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            title: "string",
            author: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "books"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("books", exports.definition, []);

collection = Alloy.C("books", exports.definition, model);

exports.Model = model;

exports.Collection = collection;