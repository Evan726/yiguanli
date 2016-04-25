require.config({
	paths: {
		jquery: ["http://libs.baidu.com/jquery/1.11.3/jquery.min", "../plugin/jquery"],
	},
	urlArgs: "v=1", //设置版本号
	shim: {
    	"layer": {
    		deps: ["jquery"]
    	}
	}
});
require(["jquery","layout"], function($,layout) {
	layout.layout()
});
