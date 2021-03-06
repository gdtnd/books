function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "bookdetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.bookdetails = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "bookdetails"
    });
    $.__views.bookdetails && $.addTopLevelView($.__views.bookdetails);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId1"
    });
    $.__views.bookdetails.add($.__views.__alloyId1);
    $.__views.titleLabel = Ti.UI.createLabel({
        font: {
            fontSize: "30"
        },
        left: "10",
        id: "titleLabel"
    });
    $.__views.__alloyId1.add($.__views.titleLabel);
    $.__views.authorLabel = Ti.UI.createLabel({
        font: {
            fontSize: "20"
        },
        left: "10",
        id: "authorLabel"
    });
    $.__views.__alloyId1.add($.__views.authorLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    console.log("title:" + args.title + ", author: " + args.author);
    $.titleLabel.text = args.title || "Default Title";
    $.authorLabel.text = args.author || "Default author";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;