(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{174:function(t){t.exports=JSON.parse('[{"name":"John Pangolin","headline":"JavaScript y al diablo con el resto","status":"💃","flag":"🇯🇲","main_skills":"Frontend","skills":["php","Python","Elasticsearch","SQLite","Management"],"website":"https://johnpangolin.com","twitter":"https://twitter.com/johnpangolin","github":"https://github.com/johnpng","premium":true},{"name":"John Pangolin Alpha","headline":"JavaScript y al diablo con el resto","status":"💃","flag":"🇯🇲","main_skills":"Frontend","skills":["node","Python","Elasticsearch","SQLite","Management"],"website":"https://johnpangolin.com","twitter":"https://twitter.com/johnpangolin","github":"https://github.com/johnpng","premium":false},{"name":"John Pangolin Alpha","headline":"JavaScript y al diablo con el resto","status":"💃","flag":"🇯🇲","main_skills":"Frontend","skills":["node","Python","Elasticsearch","SQLite","Management"],"website":"https://johnpangolin.com","twitter":"https://twitter.com/johnpangolin","github":"https://github.com/johnpng","premium":false},{"name":"John Pangolin","headline":"JavaScript y al diablo con el resto","status":"💃","flag":"🇯🇲","main_skills":"Frontend","skills":["php","node","Elasticsearch","SQLite","Management"],"website":"https://johnpangolin.com","twitter":"https://twitter.com/johnpangolin","github":"https://github.com/johnpng","premium":true},{"name":"John Pangolin","headline":"JavaScript y al diablo con el resto","status":"💃","flag":"🇯🇲","main_skills":"Frontend","skills":["VueJS","Python","Elasticsearch","SQLite","Management"],"website":"https://johnpangolin.com","twitter":"https://twitter.com/johnpangolin","github":"https://github.com/johnpng","premium":true},{"name":"John Pangolin","headline":"JavaScript y al diablo con el resto","status":"💃","flag":"🇯🇲","main_skills":"Frontend","skills":["VueJS","Python","Elasticsearch","SQLite","Management"],"website":"https://johnpangolin.com","twitter":"https://twitter.com/johnpangolin","github":"https://github.com/johnpng","premium":true},{"name":"John Pangolin","headline":"JavaScript y al diablo con el resto","status":"💃","flag":"🇯🇲","main_skills":"Frontend","skills":["VueJS","Python","Elasticsearch","SQLite","Management"],"website":"https://johnpangolin.com","twitter":"https://twitter.com/johnpangolin","github":"https://github.com/johnpng","premium":true},{"name":"John Pangolin","headline":"JavaScript y al diablo con el resto","status":"💃","flag":"🇯🇲","main_skills":"Frontend","skills":["VueJS","Python","Elasticsearch","SQLite","Management"],"website":"https://johnpangolin.com","twitter":"https://twitter.com/johnpangolin","github":"https://github.com/johnpng","premium":true},{"name":"John Pangolin Action","headline":"JavaScript y al diablo con el resto","status":"💃","flag":"🇯🇲","main_skills":"Frontend","skills":["php","Python","Elasticsearch","SQLite","Management"],"website":"https://johnpangolin.com","twitter":"https://twitter.com/johnpangolin","github":"https://github.com/johnpng","premium":true},{"name":"John Pangolin","headline":"JavaScript y al diablo con el resto","status":"💃","flag":"🇯🇲","main_skills":"Frontend","skills":["VueJS","Python","Elasticsearch","SQLite","Management"],"website":"https://johnpangolin.com","twitter":"https://twitter.com/johnpangolin","github":"https://github.com/johnpng","premium":true}]')},175:function(t,e,l){"use strict";l.r(e);var n=l(174),o={props:["profile"]},r=l(15),c={components:{ProfileItem:Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"md:w-1/2 xl:w-1/3"},[l("div",{staticClass:"m-2 bg-cobalt-900 rounded-md pt-5 text-center text-gray-200"},[l("div",{staticClass:"flex flex-col justify-between items-center"},[l("div",{staticClass:"relative"},[l("div",{directives:[{name:"show",rawName:"v-show",value:t.profile.premium,expression:"profile.premium"}],staticClass:"absolute bottom-0 w-full bg-yellow-300 rounded-md font-bold text-black-900"},[t._v("PREMIUM")]),t._v(" "),l("img",{staticClass:"m-auto rounded-full w-48 border border-solid border-white",attrs:{src:"https://unavatar.now.sh/jeffrey_way"}})]),t._v(" "),l("div",{staticClass:"mt-4 text-xl font-bold"},[t._v(t._s(t.profile.name))]),t._v(" "),l("div",[l("span",[t._v(t._s(t.profile.status))]),t._v(" "),l("span",[t._v(t._s(t.profile.flag))])]),t._v(" "),l("p",{staticClass:"px-2 max-w-xs"},[t._v(t._s(t.profile.headline))])]),t._v(" "),l("div",{staticClass:"bg-blue-500 text-left p-2 mt-5"},[l("ul",{staticClass:"list-none"},t._l(t.profile.skills,(function(e){return l("li",{key:e,staticClass:"m-1 mt-2 p-1 border border-solid inline-block"},[t._v(t._s(e))])})),0)]),t._v(" "),l("div",{staticClass:"flex justify-center flex-wrap p-3"},[l("a",{staticClass:"mx-2 my-1 px-8 py-3 md:px-3 bg-blue-400 rounded-md border border-transparent hover:bg-blue-900 hover:border-white",attrs:{href:t.profile.website}},[t._v("Website")]),t._v(" "),l("a",{staticClass:"mx-2 my-1 px-8 py-3 md:px-3 bg-blue-400 rounded-md",attrs:{href:t.profile.twitter}},[t._v("Twitter")]),t._v(" "),l("a",{staticClass:"mx-2 my-1 px-8 py-3 md:px-3 bg-blue-400 rounded-md",attrs:{href:t.profile.github}},[t._v("Github")])])])])}),[],!1,null,null,null).exports},data:function(){return{selectSkills:[],profiles:n}},computed:{activeProfiles:function(){var t=this;return 0==this.selectSkills.length?this.profiles:this.profiles.filter((function(e){return t.selectSkills.every((function(t){return-1!=e.skills.indexOf(t)}))}))}}},h=Object(r.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col min-h-screen"},[t._m(0),t._v(" "),l("div",{staticClass:"flex-1 flex-wrap bg-gradient-t-black-900-300"},[l("div",{staticClass:"m-4 mb-0"},[t._m(1),t._v(" "),t._m(2),t._v(" "),l("div",{staticClass:"flex mt-3"},[l("label",[l("input",{directives:[{name:"model",rawName:"v-model",value:t.selectSkills,expression:"selectSkills"}],attrs:{type:"checkbox",value:"php"},domProps:{checked:Array.isArray(t.selectSkills)?t._i(t.selectSkills,"php")>-1:t.selectSkills},on:{change:function(e){var l=t.selectSkills,n=e.target,o=!!n.checked;if(Array.isArray(l)){var r=t._i(l,"php");n.checked?r<0&&(t.selectSkills=l.concat(["php"])):r>-1&&(t.selectSkills=l.slice(0,r).concat(l.slice(r+1)))}else t.selectSkills=o}}}),t._v("PHP\n        ")]),t._v(" "),l("label",[l("input",{directives:[{name:"model",rawName:"v-model",value:t.selectSkills,expression:"selectSkills"}],attrs:{type:"checkbox",value:"node"},domProps:{checked:Array.isArray(t.selectSkills)?t._i(t.selectSkills,"node")>-1:t.selectSkills},on:{change:function(e){var l=t.selectSkills,n=e.target,o=!!n.checked;if(Array.isArray(l)){var r=t._i(l,"node");n.checked?r<0&&(t.selectSkills=l.concat(["node"])):r>-1&&(t.selectSkills=l.slice(0,r).concat(l.slice(r+1)))}else t.selectSkills=o}}}),t._v("Node\n        ")])])]),t._v(" "),l("div",{staticClass:"md:flex md:flex-wrap p-2"},t._l(t.activeProfiles,(function(t){return l("profile-item",{attrs:{profile:t}})})),1)]),t._v(" "),t._m(3)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"flex justify-between p-4 bg-blue-900"},[e("h1",{staticClass:"text-2xl text-white font-bold"},[this._v("Profile Plaza")]),this._v(" "),e("input",{staticClass:"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2",attrs:{type:"search",placeholder:"Busca..."}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-wrap"},[e("button",{staticClass:"p-2 px-4 mr-2 rounded-full bg-red-600 text-white",attrs:{type:"button"}},[this._v("Full Stack")]),this._v(" "),e("button",{staticClass:"p-2 px-4 mr-2 rounded-full bg-red-600 text-white",attrs:{type:"button"}},[this._v("Frontend")]),this._v(" "),e("button",{staticClass:"p-2 px-4 mr-2 rounded-full bg-red-600 text-white",attrs:{type:"button"}},[this._v("Backend")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex mt-3 flex-wrap"},[l("button",{staticClass:"p-2 px-4 mr-2 rounded-full bg-red-600 text-white",attrs:{type:"button"}},[t._v("PHP")]),t._v(" "),l("button",{staticClass:"p-2 px-4 mr-2 rounded-full bg-red-600 text-white",attrs:{type:"button"}},[t._v("Python")]),t._v(" "),l("button",{staticClass:"p-2 px-4 mr-2 rounded-full bg-red-600 text-white",attrs:{type:"button"}},[t._v("Javascript")]),t._v(" "),l("button",{staticClass:"p-2 px-4 mr-2 rounded-full bg-red-600 text-white",attrs:{type:"button"}},[t._v("Node")]),t._v(" "),l("button",{staticClass:"p-2 px-4 mr-2 rounded-full bg-red-600 text-white",attrs:{type:"button"}},[t._v("VUE")]),t._v(" "),l("button",{staticClass:"p-2 px-4 mr-2 rounded-full bg-red-600 text-white",attrs:{type:"button"}},[t._v("Now")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"bg-blue-900 p-4 text-center"},[e("a",{staticClass:"text-white font-bold",attrs:{href:"#"}},[this._v("Premium Daniel Primo")])])}],!1,null,null,null);e.default=h.exports}}]);