"use strict";define("location-demo/tests/app.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | app.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!0,"app.js should pass jshint.")})}),define("location-demo/tests/components/region-show.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | components/region-show.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!1,"components/region-show.js should pass jshint.\ncomponents/region-show.js: line 3, col 51, Missing semicolon.\ncomponents/region-show.js: line 19, col 75, Missing semicolon.\ncomponents/region-show.js: line 25, col 71, Missing semicolon.\ncomponents/region-show.js: line 31, col 71, Missing semicolon.\ncomponents/region-show.js: line 38, col 63, Missing semicolon.\ncomponents/region-show.js: line 47, col 63, Missing semicolon.\n\n6 errors")})}),define("location-demo/tests/helpers/destroy-app",["exports","ember"],function(e,t){function s(e){t.default.run(e,"destroy")}e.default=s}),define("location-demo/tests/helpers/destroy-app.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | helpers/destroy-app.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!0,"helpers/destroy-app.js should pass jshint.")})}),define("location-demo/tests/helpers/module-for-acceptance",["exports","qunit","ember","location-demo/tests/helpers/start-app","location-demo/tests/helpers/destroy-app"],function(e,t,s,n,o){var i=s.default.RSVP.Promise;e.default=function(e){var s=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];(0,t.module)(e,{beforeEach:function(){if(this.application=(0,n.default)(),s.beforeEach)return s.beforeEach.apply(this,arguments)},afterEach:function e(){var t=this,e=s.afterEach&&s.afterEach.apply(this,arguments);return i.resolve(e).then(function(){return(0,o.default)(t.application)})}})}}),define("location-demo/tests/helpers/module-for-acceptance.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | helpers/module-for-acceptance.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!0,"helpers/module-for-acceptance.js should pass jshint.")})}),define("location-demo/tests/helpers/resolver",["exports","location-demo/resolver","location-demo/config/environment"],function(e,t,s){var n=t.default.create();n.namespace={modulePrefix:s.default.modulePrefix,podModulePrefix:s.default.podModulePrefix},e.default=n}),define("location-demo/tests/helpers/resolver.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | helpers/resolver.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!0,"helpers/resolver.js should pass jshint.")})}),define("location-demo/tests/helpers/start-app",["exports","ember","location-demo/app","location-demo/config/environment"],function(e,t,s,n){function o(e){var o=void 0,i=t.default.merge({},n.default.APP);return i=t.default.merge(i,e),t.default.run(function(){o=s.default.create(i),o.setupForTesting(),o.injectTestHelpers()}),o}e.default=o}),define("location-demo/tests/helpers/start-app.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | helpers/start-app.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!0,"helpers/start-app.js should pass jshint.")})}),define("location-demo/tests/integration/components/region-show-test",["exports","ember-qunit"],function(e,t){(0,t.moduleForComponent)("region-show","Integration | Component | region show",{integration:!0}),(0,t.test)("it renders",function(e){this.render(Ember.HTMLBars.template({id:"Sq1fAKVk",block:'{"statements":[["append",["unknown",["region-show"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{}})),e.equal(this.$().text().trim(),""),this.render(Ember.HTMLBars.template({id:"4LtgMWpe",block:'{"statements":[["text","\\n"],["block",["region-show"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',meta:{}})),e.equal(this.$().text().trim(),"template block text")})}),define("location-demo/tests/integration/components/region-show-test.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | integration/components/region-show-test.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!0,"integration/components/region-show-test.js should pass jshint.")})}),define("location-demo/tests/regions/area.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | regions/area.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!1,"regions/area.js should pass jshint.\nregions/area.js: line 16402, col 2, Missing semicolon.\nregions/area.js: line 16406, col 2, Missing semicolon.\n\n2 errors")})}),define("location-demo/tests/regions/area_object.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | regions/area_object.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!1,"regions/area_object.js should pass jshint.\nregions/area_object.js: line 15722, col 2, Missing semicolon.\nregions/area_object.js: line 15726, col 2, Missing semicolon.\n\n2 errors")})}),define("location-demo/tests/regions/city.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | regions/city.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!1,"regions/city.js should pass jshint.\nregions/city.js: line 1774, col 2, Missing semicolon.\nregions/city.js: line 1778, col 2, Missing semicolon.\n\n2 errors")})}),define("location-demo/tests/regions/city_object.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | regions/city_object.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!1,"regions/city_object.js should pass jshint.\nregions/city_object.js: line 1727, col 2, Missing semicolon.\nregions/city_object.js: line 1731, col 2, Missing semicolon.\n\n2 errors")})}),define("location-demo/tests/regions/province.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | regions/province.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!1,"regions/province.js should pass jshint.\nregions/province.js: line 100, col 5, Missing semicolon.\nregions/province.js: line 104, col 2, Missing semicolon.\n\n2 errors")})}),define("location-demo/tests/regions/province_object.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | regions/province_object.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!1,"regions/province_object.js should pass jshint.\nregions/province_object.js: line 134, col 2, Missing semicolon.\nregions/province_object.js: line 138, col 2, Missing semicolon.\n\n2 errors")})}),define("location-demo/tests/resolver.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | resolver.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!0,"resolver.js should pass jshint.")})}),define("location-demo/tests/router.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | router.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!0,"router.js should pass jshint.")})}),define("location-demo/tests/services/region.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | services/region.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!1,"services/region.js should pass jshint.\nservices/region.js: line 15, col 50, Missing semicolon.\n\n1 error")})}),define("location-demo/tests/test-helper",["exports","location-demo/tests/helpers/resolver","ember-qunit"],function(e,t,s){(0,s.setResolver)(t.default)}),define("location-demo/tests/test-helper.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | test-helper.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!0,"test-helper.js should pass jshint.")})}),define("location-demo/tests/unit/services/region-test",["exports","ember-qunit"],function(e,t){(0,t.moduleFor)("service:region","Unit | Service | region",{}),(0,t.test)("it exists",function(e){var t=this.subject();e.ok(t)})}),define("location-demo/tests/unit/services/region-test.jshint.lint-test",["exports"],function(e){QUnit.module("JSHint | unit/services/region-test.js"),QUnit.test("should pass jshint",function(e){e.expect(1),e.ok(!0,"unit/services/region-test.js should pass jshint.")})}),require("location-demo/tests/test-helper"),EmberENV.TESTS_FILE_LOADED=!0;