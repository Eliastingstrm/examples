exports.install = function(framework) {
	framework.route('/');
	framework.route('/1/', view1);
	framework.route('/1/2/', view2);
	framework.route('/1/2/3/', view3);
};

function view1() {
	var self = this;
	self.sitemap('1', '/1/');
	self.view('index');
}

function view2() {
	var self = this;
	self.sitemap('1', '/1/');
	self.sitemap('2', '/1/2/');
	self.view('index');
}

function view3() {
	var self = this;
	self.sitemap('1', '/1/');
	self.sitemap('2', '/1/2/');
	self.sitemap('3', '/1/2/3/');
	self.view('index');
}