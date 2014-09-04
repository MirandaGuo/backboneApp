define(function(require){

	var Backbone              =require('backbone');


	 return Backbone.Router.extend({
	 	routes:{
                'todo': 'todo',
                'example': 'example'
	 	},
        

        start:function(){
	 	    Backbone.history.start();
	    },

        todo:function(){

        },

        example:function(){

        }
	 });
	 

});