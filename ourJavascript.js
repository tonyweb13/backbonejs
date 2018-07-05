/**
 * Created by anthony.juntila on 3/8/2017.
 */

//el // References a DOM object
//$el //It is a jquery objecct that still reference the same DOM object as el


WebsiteModel = Backbone.Model.extend({
    defaults:{
        name:"An unknown website",
        barcode: -1
    },
   initialize: function () {
   }
});

SandwichModel = Backbone.Model.extend({
    defaults:{
        bread:"Wheat",
    },
    initialize: function () {
        this.bindEvents();
    },
    bindEvents:function(){
        this.on("change:bread",function(model){
                var my_new_bread = model.get("bread");
            alert("Hey! "+my_new_bread);
        });
    }
});

/*Start: Episode 7*/
// TheView = Backbone.View.extend({
//     defaults:{
//     },
//     initialize: function () {
//         // alert("views exist");
//         // console.log(this.el);
//         // console.log(this.$el);
//         // this.$el.append("append unique");
//     },
// });
/*End: Episode 7*/

/*Start: Episode 8*/
// TheView = Backbone.View.extend({
//     //<span classs="prettycake" id="span1"><span>
//     tagName: "span",
//     className: "prettycake",
//     id: "span1",
//     initialize: function () {
//         $("#unique").append(this.el);
//     },
// });
/*End: Episode 8*/

TheView = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function(){
        var template = _.template($("#ourTemplate").html(), {});
        this.$el.html(template);
    },
    events:{
      "click #unique" : "clicked"
    },
    clicked: function(){
        alert("You clicked it!");
    }
});

$(document).ready(function(){
    // var page_1 = new WebsiteModel({name:"Test Website", barcode:1});
    // page_1.set({name:"Use set config"});

    // var page_1 = new WebsiteModel();
    // alert("name= "+page_1.get("name")+ " barcode= "+page_1.get("barcode"));

    // var my_sandwich = new SandwichModel();
    // my_sandwich.set({bread:"Jalapeno"});
    // my_sandwich.set({bread:"Big Winner"});

    // var aView = new TheView({el: $("#unique")});

    var aView = new TheView({el:$("#unique")});

});