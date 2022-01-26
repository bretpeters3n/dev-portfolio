(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"clippers_300x250_v4_atlas_", frames: [[0,0,343,251],[0,253,300,250],[300,505,91,70],[0,650,300,52],[437,149,75,51],[345,0,157,147],[0,505,298,143],[393,346,106,55],[302,346,72,51],[300,577,91,60],[437,202,52,27],[302,399,52,27],[302,253,173,91],[345,149,90,91]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.assetBGBeginning_v2 = function() {
	this.spriteSheet = ss["clippers_300x250_v4_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.assetBGEnd = function() {
	this.spriteSheet = ss["clippers_300x250_v4_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.assetClippers = function() {
	this.spriteSheet = ss["clippers_300x250_v4_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.assetCtaMockUp = function() {
	this.spriteSheet = ss["clippers_300x250_v4_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.assetTablet = function() {
	this.spriteSheet = ss["clippers_300x250_v4_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cameraFlash = function() {
	this.spriteSheet = ss["clippers_300x250_v4_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.copy1_dropShadow_v2 = function() {
	this.spriteSheet = ss["clippers_300x250_v4_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.laptop = function() {
	this.spriteSheet = ss["clippers_300x250_v4_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.laptopReflection = function() {
	this.spriteSheet = ss["clippers_300x250_v4_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.laptopReflection2 = function() {
	this.spriteSheet = ss["clippers_300x250_v4_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.phone = function() {
	this.spriteSheet = ss["clippers_300x250_v4_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.phoneReflection = function() {
	this.spriteSheet = ss["clippers_300x250_v4_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.TV = function() {
	this.spriteSheet = ss["clippers_300x250_v4_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.tvGlare = function() {
	this.spriteSheet = ss["clippers_300x250_v4_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tvMask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEAE58").s().p("As3GeIAAs7IZvAAIAAM7g");
	this.shape.setTransform(82.4,41.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tvMask, new cjs.Rectangle(0,0,164.8,82.9), null);


(lib.tvGlare_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tvGlare();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tvGlare_1, new cjs.Rectangle(0,0,90,91), null);


(lib.tv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TV();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tv, new cjs.Rectangle(0,0,173,91), null);


(lib.textGradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F59534","#F9BE4C"],[0,1],-121.1,-164.6,121,164.6).s().p("A0DKNIAA0ZMAoHAAAIAAUZg");
	this.shape.setTransform(128.4,65.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.textGradient, new cjs.Rectangle(0,0,256.8,130.7), null);


(lib.tabletInside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.assetTablet();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tabletInside, new cjs.Rectangle(0,0,75,51), null);


(lib.phoneInside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.phone();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.phoneInside, new cjs.Rectangle(0,0,52,27), null);


(lib.laptopInside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.laptop();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptopInside, new cjs.Rectangle(0,0,106,55), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.assetCtaMockUp();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(0,0,300,52), null);


(lib.copy2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA4QgGAAgEgDIgKgFIgJgHIgHgIIgFgLQgCgFgBgFIgBgMIABgKIADgMIAFgJQADgFAEgEIAJgGQAEgEAGgCQAEgDAGAAIALgBIALABIAMADQAFACAEAEIAJAGQADAEADAFIAGAJIADAMQACAFAAAFIgCAMIgDAKIgGALIgGAIIgJAHIgJAFIgMADIgLABIgLgBgAgJgsIgIACQgLAGgEAEQgIAKgCAFQgDAMAAAFIAAAJIADAJQAGALAEAEQAEAEALAGIAIADIAJAAQAGAAAMgDQAFgCAKgIQADgEAHgLIACgJIABgJQAAgFgDgMQgDgFgHgKQgKgHgFgDIgJgCIgJgBIgJABg");
	this.shape.setTransform(269.3,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAA5QgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgehTIAAAAIgOBRQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgHAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBABgBIAUhqQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAIADAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAfBYIABAAIAfhYQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIACAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAVBqQABAEgEAAIgGAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgPhRIAAAAIgeBTQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_1.setTransform(254.3,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRA4IgCgBIAAgDIAehpQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIADAAQAEAAgBAEIgeBpQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_2.setTransform(243.2,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOA3QgFgBgEgCQgGgDgEgGQgDgDACgCIAEgEQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQAKAMAPAAQAEAAAFgCQAFgCADgEQAEgEACgFIABgKQAAgFgBgEQgCgEgDgDQgDgDgFgCQgFgBgFAAIgaAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAgsQAAAAABgBQAAgBAAAAQABAAAAgBQABAAABAAIAwAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAAFQAAABAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIgpAAIAAAfIAUAAQAIAAAHACQAHACAFAFQAFAEACAGQADAGAAAIQAAAIgDAHQgDAGgFAGQgFAFgHADQgHADgIAAQgGAAgGgCg");
	this.shape_3.setTransform(234.3,13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfA5QAAAAgBAAQgBgBAAAAQAAAAgBgBQAAgBAAAAIAAgDQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAIAmgqQAIgIAEgIQAEgHAAgGQAAgEgBgDQgBgEgDgDQgDgDgEgCQgFgCgFAAQgEAAgDACIgHADIgJAIQgBAAAAABQgBAAAAAAQgBAAgBAAQAAgBgBAAIgDgDQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQALgQAUAAQAIAAAHADQAGACAFAFQAEAEACAGQADAFAAAHQAAAFgCAFIgEAJIgPARIgeAiIAAAAIAvAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAAAFQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_4.setTransform(223.7,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDBEIAAgQQgQgCgNgLQgDgDACgDIADgDQACgDADACQAKAKAMACIAAgpIgLgFIgKgGQgEgEgCgGQgDgFAAgIQAAgEACgEQABgFAEgEQAEgFAFgCQAHgEAHAAIAAgFQAAgBABgBQAAAAAAAAQABgBAAAAQABAAAAAAIABAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAABIAAAFQAOABAKAHQAEACgDADIgCADQgCAEgDgCQgJgGgJgBIAAApIANAGIAKAHQAFAEACAFQACAFAAAGQAAAGgDAFQgCAFgFAEQgEAEgGACQgFACgHABIAAAQQAAABAAABQAAAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBgAADApIAIgCQADgBADgDIAEgFIABgGQAAgEgBgDQgBgDgDgCQgEgFgKgFgAgLgxIgGAEQgEAFAAAGQAAAEABADQABADADACQAEAFAJAEIAAgmQgEAAgEACg");
	this.shape_5.setTransform(213.1,14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCA4QgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAhhIgcAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAIAAgFQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIBDAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAFQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAIgcAAIAABhQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_6.setTransform(197.4,13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAtQgDgDACgDIACgDQADgDACACQAOAMANAAQAFAAAEgBIAHgEIAEgGQABgEAAgEQAAgDgBgEIgGgGIgIgGIgMgGIgLgEQgGgEgDgDQgEgEgCgFQgCgEAAgHIACgJQACgFAEgEQAEgFAGgCQAHgDAIAAQAQAAAMAHQADACgCAEIgCACQgCAEgEgDQgFgDgEgBQgGgCgGAAQgFAAgFACQgDACgDACQgDADgBADIgBAGIABAHIAFAGIAHAFIAIADIAOAHIAMAHQAEAEADAFQACAGAAAGQAAAGgDAGQgCAFgFAEQgFAEgGACQgGACgHAAQgSAAgPgMg");
	this.shape_7.setTransform(187.6,13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQA2QgIgDgFgGQgGgGgDgHQgEgIAAgJIAAhEQAAAAABgBQAAgBAAAAQABAAAAgBQABAAABAAIAGAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAIAABDQAAAGACAGQACAGAEAEQAEAFAGACQAFACAGAAQAHAAAGgCQAFgCAFgEIAFgKQACgGABgHIAAhDQAAAAAAgBQAAgBAAAAQABAAAAgBQABAAABAAIAGAAQAAAAABAAQAAABABAAQAAAAAAABQABABAAAAIAABEQAAAJgDAIQgDAHgGAGQgGAGgIADQgLADgGAAQgJAAgHgDg");
	this.shape_8.setTransform(176.1,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAtQAAAAAAgBQgBgBAAAAQAAgBABAAQAAAAAAgBIADgEQADgDADAEQAJAIAIAAIAFgBIAGgEQADgCACgFQABgEAAgGIAAhNQAAAAAAgBQABgBAAAAQAAAAABgBQAAAAABAAIAHAAQAAAAABAAQABABAAAAQAAAAAAABQABABAAAAIAABMQAAAJgDAGQgCAGgEAEQgEAFgGACQgGACgFAAQgPAAgLgMg");
	this.shape_9.setTransform(164.7,13.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAbA4QAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgVgqIgeAAIAAApQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgHAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhpQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIApAAQAHAAAGACQAHADAEAFQAFAFADAGQACAGAAAHQAAAFgBAGQgCAFgDAEIgHAHQgEADgGABIAWAqQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAgaABIAeAAQAEABAFgCIAHgEQADgDACgEQACgFAAgEQAAgFgCgEQgCgFgDgCIgHgGQgFgBgEAAIgeAAg");
	this.shape_10.setTransform(150.4,13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLA4QgGAAgEgDIgKgFIgJgHIgHgIIgFgLQgDgFgBgFIgBgMIABgKIAEgMIAFgJQADgFAEgEIAJgGQAEgEAGgCQAEgDAGAAIALgBIAMABIALADQAEACAFAEIAIAGQAFAEADAFIAFAJIADAMQABAFABAFIgCAMIgDAKIgFALIgIAIIgIAHIgJAFIgLADIgMABIgLgBgAgJgsIgIACQgKAGgFAEQgIAKgCAFQgEAMAAAFIABAJIADAJQAGALAEAEQAFAEAKAGIAIADIAJAAQAGAAAMgDQAFgCAJgIQAEgEAGgLIADgJIABgJQAAgFgEgMQgCgFgIgKQgJgHgFgDIgJgCIgJgBIgJABg");
	this.shape_11.setTransform(136.8,13.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeA4QgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAhpQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAFQAAAAAAABQAAABAAAAQgBABAAAAQgBAAAAAAIg1AAIAAAsIAtAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAIAAAFQAAABAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIgtAAIAAAsQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_12.setTransform(124.9,13.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfA4QAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhpQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIA+AAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAFQAAAAAAABQAAABAAAAQgBABAAAAQgBAAgBAAIg0AAIAAAmIAsAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAABIAAADQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgsAAIAAAqIA0AAQABgBABABQAAAAABAAQAAABAAAAQAAABAAAAIAAAFQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_13.setTransform(108.9,13.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcA4QgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgVgqIgdAAIAAApQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgFAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAhpQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIAoAAQAHAAAHACQAFADAFAFQAFAFADAGQADAGgBAHQABAFgCAGQgCAFgDAEIgHAHQgEADgGABIAWAqQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAgaABIAeAAIAJgBIAHgEQAEgDABgEQACgFAAgEQAAgFgCgEQgBgFgEgCIgHgGQgFgBgEAAIgeAAg");
	this.shape_14.setTransform(97.5,13.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLA4QgGAAgEgDIgKgFIgJgHIgHgIIgFgLQgCgFgCgFIAAgMIAAgKIAEgMIAFgJQADgFAEgEIAJgGQAEgEAGgCQAEgDAGAAIALgBIAMABIALADQAEACAFAEIAJAGQADAEAEAFIAFAJIADAMQACAFAAAFIgCAMIgDAKIgFALIgHAIIgJAHIgJAFIgLADIgMABIgLgBgAgJgsIgIACQgLAGgEAEQgHAKgDAFQgDAMgBAFIABAJIADAJQAGALAEAEQAEAEALAGIAIADIAJAAQAGAAAMgDQAFgCAKgIQAEgEAFgLIADgJIABgJQAAgFgEgMQgCgFgHgKQgKgHgFgDIgJgCIgJgBIgJABg");
	this.shape_15.setTransform(84,13.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAA5QgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgehTIAAAAIgOBRQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgHAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBABgBIAUhqQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAIADAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAIAfBYIABAAIAfhYQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIACAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAVBqQABAEgEAAIgGAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgPhRIAAAAIgeBTQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_16.setTransform(69,13.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgsA4QAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhpQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAkAAIALABQAFABAFACIAKAGIAIAHIAHAHIAFAKIADALIABAKIgBALIgDAKIgFAKIgHAIIgIAHIgKAGIgKADIgLABgAgiAtIAZAAQAGAAALgDQAIgEAGgFQAGgHADgIQACgGACgMQAAgFgEgMQgDgIgGgHQgGgFgIgEQgLgDgGAAIgZAAg");
	this.shape_17.setTransform(49.8,13.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAqA5IgEgBIhHhZIAABWQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgGAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhqQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIADAAIADABIBGBYIAAAAIAAhVQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAGAAQAAAAABAAQAAAAABABQAAAAAAABQABAAgBABIAABrQABABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_18.setTransform(36,13.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AArA5QgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgMgaIg4AAIgLAaQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgGAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIAxhrQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIAwBrQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAgAAYATIgXg0IgBAAIgXA0IAvAAg");
	this.shape_19.setTransform(23.1,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy2_2, new cjs.Rectangle(0,0,295.1,26.2), null);


(lib.copy1_dropShadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.copy1_dropShadow_v2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy1_dropShadow, new cjs.Rectangle(0,0,298,143), null);


(lib.clippersLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.assetClippers();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.clippersLogo, new cjs.Rectangle(0,0,91,70), null);


(lib.cameraFlash_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cameraFlash();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cameraFlash_1, new cjs.Rectangle(0,0,157,147), null);


(lib.tablet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.tabletInside();
	this.instance.parent = this;
	this.instance.setTransform(37.5,25.5,1,1,0,0,0,37.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.laptopReflection();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.tablet, new cjs.Rectangle(0,0,75,102), null);


(lib.phone_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.phoneInside();
	this.instance.parent = this;
	this.instance.setTransform(26,13.5,1,1,0,0,0,26,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.phoneReflection();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.phone_1, new cjs.Rectangle(0,0,52,53), null);


(lib.laptop_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.laptopInside();
	this.instance.parent = this;
	this.instance.setTransform(53,27.5,1,1,0,0,0,53,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.laptopReflection2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.laptop_1, new cjs.Rectangle(0,0,106,110), null);


(lib.copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ATPBBQgDgDACgEIAAAAIALgSQADgFAFADIAAAAQASANAPAAIAAAAQAHAAAEgEIAAAAQAEgEAAgGIAAAAQAAgHgGgFIAAAAQgFgFgMgGIAAAAIgRgJQgIgFgGgEIAAAAQgHgGgDgIIAAAAQgEgIAAgKIAAAAQAAgIAEgJIAAAAQADgIAGgGIAAAAQAHgHAKgEIAAAAQAKgEANAAIAAAAQAYAAAZASIAAAAQAFACgDAFIAAAAIgMASQgDAFgHgEIAAAAQgTgMgMAAIAAAAQgHAAgEAEIAAAAQgDADAAAGIAAAAQAAAFAGAFIAAAAQAGAFANAGIAAAAIAQAIQAJAFAGAEIAAAAQAHAHAEAHIAAAAQAFAJAAALIAAAAQAAAJgEAJIAAAAQgEAIgHAHIAAAAQgHAHgKAEIAAAAQgLAEgMAAIAAAAQgeAAgWgSgAD/BRQgIgBgHgDIAAAAQgIgDgGgFIAAAAIgNgKIAAAAIgKgMIAAAAQgEgHgDgHIAAAAQgEgIgBgIIAAAAIgCgRIAAAAQAAgHACgIIAAAAQABgIAEgIIAAAAQADgHAEgHIAAAAIAKgMIAAAAIANgKIAAAAIAOgIIAAAAQAHgDAIgCIAAAAQAJgCAIAAIAAAAQAJAAAHACIAAAAIAPAEIAAAAQAHACAGAEIAAAAIAMAKQADADgDADIAAAAIgSATQgDADgDgDIAAAAQgHgGgHgDIAAAAQgIgDgJAAIAAAAQgJAAgJAEIAAAAQgIAEgGAGIAAAAQgGAHgDAIIAAAAQgEAJAAAJIAAAAQAAAJAEAJIAAAAQADAIAGAGIAAAAQAGAHAJAEIAAAAQAIADAKAAIAAAAQAJAAAIgDIAAAAQAHgCAGgGIAAAAQAEgDACADIAAAAIASAUQADADgDADIAAAAIgMAKIAAAAIgOAHIAAAAIgPAEIAAAAIgPABIAAAAIgRgCgArqBRQgIgBgIgDIAAAAQgHgDgHgFIAAAAIgMgKIAAAAIgKgMIAAAAQgFgHgDgHIAAAAQgDgIgCgIIAAAAIgBgRIAAAAQAAgHABgIIAAAAQACgIADgIIAAAAQADgHAFgHIAAAAIAKgMIAAAAIAMgKIAAAAIAOgIIAAAAQAIgDAIgCIAAAAQAIgCAJAAIAAAAQAIAAAIACIAAAAIAOAEIAAAAQAHACAGAEIAAAAIAMAKQAEADgDADIAAAAIgSATQgDADgDgDIAAAAQgHgGgIgDIAAAAQgHgDgJAAIAAAAQgKAAgIAEIAAAAQgIAEgGAGIAAAAQgGAHgEAIIAAAAQgDAJAAAJIAAAAQAAAJADAJIAAAAQAEAIAGAGIAAAAQAGAHAIAEIAAAAQAJADAJAAIAAAAQAJAAAIgDIAAAAQAIgCAGgGIAAAAQADgDADADIAAAAIASAUQADADgDADIAAAAIgNAKIAAAAIgOAHIAAAAIgOAEIAAAAIgPABIAAAAIgRgCgAypBTQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIAAAAIgqheIgBAAIgpBeQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIAAAAIgEAAQgDAAgBgDIAAAAIgsiaQgBgFAGAAIAAAAIAaAAQAEAAABADIAAAAIATBNIABAAIAkhQQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAIAAAAIAEAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABIAAAAIAkBQIAAAAIAUhNQABgBAAgBQAAAAABAAQAAgBABAAQABAAAAAAIAAAAIAbAAQAGAAgCAFIAAAAIgrCaQAAABgBAAQAAABAAAAQgBAAgBABQAAAAgBAAIAAAAgASABRQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAIAAAAIgfg9IgQAAIAAA6QAAAFgEAAIAAAAIgbAAQgFAAAAgFIAAAAIAAiXQAAgEAFAAIAAAAIBFAAQAKAAAKAEIAAAAQAJADAHAHIAAAAQAGAHAEAJIAAAAQAEAJAAAKIAAAAQAAAIgDAIIAAAAQgCAGgEAGIAAAAQgFAFgGAFIAAAAQgGAFgIADIAAAAIAfA6QABABAAAAQAAABAAAAQAAABAAABQAAAAgBABIAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIAAAAgARNgKIAjAAQAHAAAFgGIAAAAQAFgFAAgIIAAAAQAAgIgFgFIAAAAQgFgEgHAAIAAAAIgjAAgAOVBRQgEAAAAgFIAAAAIAAiXQAAgEAEAAIAAAAIBgAAQAEAAAAAEIAAAAIAAAZQAAAFgEAAIAAAAIhAAAIAAAcIA0AAQAFAAAAAEIAAAAIAAAZQAAAEgFAAIAAAAIg0AAIAAAfIBAAAQAEAAAAAEIAAAAIAAAZQAAAFgEAAIAAAAgAL7BRQgFAAAAgFIAAAAIAAiXQAAgEAFAAIAAAAIA3AAQALAAAKAEIAAAAQAJAEAHAHIAAAAQAHAHAEAJIAAAAQAEAJAAALIAAAAQAAAKgEAKIAAAAQgEAIgHAHIAAAAQgHAHgJAEIAAAAQgJAEgMAAIAAAAIgYAAIAAA2QAAAFgEAAIAAAAgAMagKIAYAAQAHAAAFgGIAAAAQAEgFAAgHIAAAAQAAgIgEgFIAAAAQgFgEgHAAIAAAAIgYAAgAJgBRQgEAAAAgFIAAAAIAAiXQAAgEAEAAIAAAAIA4AAQALAAAKAEIAAAAQAJAEAHAHIAAAAQAHAHADAJIAAAAQAEAJAAALIAAAAQAAAKgEAKIAAAAQgDAIgHAHIAAAAQgHAHgJAEIAAAAQgKAEgLAAIAAAAIgYAAIAAA2QAAAFgFAAIAAAAgAKAgKIAXAAQAHAAAFgGIAAAAQAFgFAAgHIAAAAQAAgIgFgFIAAAAQgFgEgHAAIAAAAIgXAAgAIEBRQgFAAAAgFIAAAAIAAiXQAAgEAFAAIAAAAIAbAAQAFAAAAAEIAAAAIAACXQAAAFgFAAIAAAAgAF7BRQgFAAAAgFIAAAAIAAiXQAAgEAFAAIAAAAIAbAAQAEAAAAAEIAAAAIAAB6IA3AAQAFAAAAAEIAAAAIAAAZQAAAFgFAAIAAAAgAgYBRQgEAAAAgFIAAAAIAAiXQAAgEAEAAIAAAAIBfAAQAEAAAAAEIAAAAIAAAZQAAAFgEAAIAAAAIhAAAIAAAcIA0AAQAFAAAAAEIAAAAIAAAZQAAAEgFAAIAAAAIg0AAIAAAfIBAAAQAEAAAAAEIAAAAIAAAZQAAAFgEAAIAAAAgAh0BRQgEAAAAgFIAAAAIAAg8IhCAAIAAA8QAAAFgEAAIAAAAIgcAAQgEAAAAgFIAAAAIAAiXQAAgEAEAAIAAAAIAcAAQAEAAAAAEIAAAAIAAA6IBCAAIAAg6QAAgEAEAAIAAAAIAcAAQAEAAAAAEIAAAAIAACXQAAAFgEAAIAAAAgAlPBRQgFAAAAgFIAAAAIAAh5IggAAQgFAAAAgFIAAAAIAAgZQAAgEAFAAIAAAAIBmAAQAEAAAAAEIAAAAIAAAZQAAAFgEAAIAAAAIghAAIAAB5QAAAFgFAAIAAAAgAoJBRQgEAAAAgFIAAAAIAAg8IhCAAIAAA8QAAAFgEAAIAAAAIgcAAQgEAAAAgFIAAAAIAAiXQAAgEAEAAIAAAAIAcAAQAEAAAAAEIAAAAIAAA6IBCAAIAAg6QAAgEAEAAIAAAAIAcAAQAEAAAAAEIAAAAIAACXQAAAFgEAAIAAAAgAuUBRQgFAAAAgFIAAAAIAAh5IggAAQgFAAAAgFIAAAAIAAgZQAAgEAFAAIAAAAIBmAAQAEAAAAAEIAAAAIAAAZQAAAFgEAAIAAAAIghAAIAAB5QAAAFgFAAIAAAAgAvrBRQgFAAgDgGIAAAAIgIgSIg+AAIgJASQgCAGgGAAIAAAAIgZAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIAAAAQAAgBAAAAQgBAAAAgBQAAAAABgBQAAgBAAAAIAAAAIBIiaQAAgBABAAQAAgBAAAAQABAAABgBQAAAAABAAIAAAAIACAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABIAAAAIBICaQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABIAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIAAAAgAwJAZIgRgkIgSAkIAjAAg");
	mask.setTransform(146.2,18.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F59534","#F9BE4C"],[0,1],-129.6,-45.3,129.7,45.4).s().p("A1eC0IAAlnMAq9AAAIAAFng");
	this.shape.setTransform(147.5,18);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.copy2_2();
	this.instance.parent = this;
	this.instance.setTransform(147.6,42.1,1,1,0,0,0,147.6,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy2, new cjs.Rectangle(0,0,295.1,55.2), null);


(lib.copy1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ANCB6QgDAAgCgDIAAAAIg6huIgBAAIgPBoQAAAGgGAAIAAAAIgoAAQgIAAACgHIAAAAIAmjkQABgFAFAAIAAAAIAFAAQAEAAACADIAAAAIBPCSIABAAIBOiSQACgDAEAAIAAAAIAGAAQAFAAABAFIAAAAIAmDkQABAHgHAAIAAAAIgpAAQgFAAAAgGIAAAAIgQhoIgBAAIg5BuQgCADgEAAIAAAAgAt4B4QgMgDgMgEIAAAAQgKgEgKgHIAAAAQgKgHgIgIIAAAAQgIgIgHgKIAAAAQgHgKgEgLIAAAAQgFgLgCgMIAAAAQgCgMAAgMIAAAAQAAgMACgMIAAAAQACgNAFgKIAAAAQAEgLAHgKIAAAAQAHgKAIgIIAAAAQAIgJAKgGIAAAAQAKgHAKgFIAAAAQAMgFAMgCIAAAAQAMgCANAAIAAAAQAMAAAMACIAAAAQAMACALAFIAAAAQALAFAKAHIAAAAQAJAGAJAJIAAAAQAIAIAHAKIAAAAQAHAKAEALIAAAAQAFAKACANIAAAAQADAMgBAMIAAAAQABAMgDAMIAAAAQgCAMgFALIAAAAQgEALgHAKIAAAAQgHAKgIAIIAAAAQgJAIgJAHIAAAAQgKAHgLAEIAAAAQgLAEgMADIAAAAQgMADgMgBIAAAAQgNABgMgDgAt6g9QgMAEgKAKIAAAAQgJAKgFAMIAAAAQgFANAAANIAAAAQAAANAFANIAAAAQAFAMAJAJIAAAAQAKAJAMAGIAAAAQANAFAOAAIAAAAQANAAAMgFIAAAAQANgGAKgJIAAAAQAJgJAFgMIAAAAQAFgNAAgNIAAAAQAAgNgFgNIAAAAQgFgMgJgKIAAAAQgKgKgNgEIAAAAQgMgGgNAAIAAAAQgOAAgNAGgAEiB4QgLgDgMgEIAAAAQgKgFgKgGIAAAAQgKgHgIgJIAAAAQgJgHgHgLIAAAAQgGgJgFgLIAAAAQgFgLgCgMIAAAAQgCgMAAgMIAAAAQAAgMACgMIAAAAQACgNAFgKIAAAAQAFgLAGgKIAAAAQAHgKAJgIIAAAAIASgPIAAAAQAKgHAKgEIAAAAQAMgFALgCIAAAAQAMgDANAAIAAAAQALAAALACIAAAAIAVAHIAVAKQAKAGAJAHIAAAAQAGAEgFAFIAAAAIgbAdQgFAEgEgEIAAAAQgKgIgLgEIAAAAQgLgFgNABIAAAAQgOAAgMAFIAAAAQgMAGgJAJIAAAAQgKAKgFAMIAAAAQgFANAAANIAAAAQAAANAFANIAAAAQAFAMAKAJIAAAAQAJAJAMAGIAAAAQAMAFAPAAIAAAAQAQAAANgFIAAAAIAAgUIgVAAQgGAAgBgGIAAAAIAAgiQABgGAGAAIAAAAIBFAAQAFAAAAAGIAAAAIABBbQAAAEgDACIAAAAQgjAWgxAAIAAAAQgNAAgMgCgAQQB3QgHAAAAgGIAAAAIAAjgQAAgHAHAAIAAAAICNAAQAGAAAAAHIAAAAIAAAkQAAAHgGAAIAAAAIhfAAIAAAqIBOAAQAHAAAAAHIAAAAIAAAkQAAAGgHAAIAAAAIhOAAIAAAuIBfAAQAGAAAAAHIAAAAIAAAlQAAAGgGAAIAAAAgAJxB3QgIAAgEgIIAAAAIgNgbIhcAAIgMAbQgDAIgKAAIAAAAIglAAQgDAAgCgDIAAAAQgCgCACgEIAAAAIBqjjQACgFAEABIAAAAIADAAQAEgBACAFIAAAAIBrDjQABAEgCACIAAAAQgBADgFAAIAAAAgAJFAmIgbg3IAAAAIgaA3IA1AAgAhoB3QgGAAgBgGIAAAAIAAjgQABgHAGAAIAAAAICMAAQAGAAAAAHIAAAAIAAAkQAAAHgGAAIAAAAIheAAIAAAqIBNAAQAHAAgBAHIAAAAIAAAkQABAGgHAAIAAAAIhNAAIAAAuIBeAAQAGAAAAAHIAAAAIAAAlQAAAGgGAAIAAAAgAjnB3QgGAAgBgGIAAAAIAAhaIhhAAIAABaQAAAGgGAAIAAAAIgpAAQgGAAAAgGIAAAAIAAjgQAAgHAGAAIAAAAIApAAQAGAAAAAHIAAAAIAABVIBhAAIAAhVQABgHAGAAIAAAAIAoAAQAHAAAAAHIAAAAIAADgQAAAGgHAAIAAAAgAoiB3QgGAAgBgGIAAAAIAAi1IgwAAQgGAAAAgHIAAAAIAAgkQAAgHAGAAIAAAAICWAAQAHAAAAAHIAAAAIAAAkQAAAHgHAAIAAAAIgwAAIAAC1QAAAGgHAAIAAAAgAxkB3QgHAAAAgGIAAAAIAAi1IgxAAQgGAAAAgHIAAAAIAAgkQAAgHAGAAIAAAAICXAAQAGAAABAHIAAAAIAAAkQgBAHgGAAIAAAAIgwAAIAAC1QAAAGgHAAIAAAAg");
	mask.setTransform(121.6,26.4);

	// Layer 2
	this.instance = new lib.textGradient();
	this.instance.parent = this;
	this.instance.setTransform(122.3,-7.7,1,1,0,0,0,128.4,65.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy1_3, new cjs.Rectangle(0,0,246.1,51.3), null);


(lib.copy1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AGBB4QgLgDgMgEIAAAAQgLgEgKgHIAAAAQgJgHgJgIIAAAAIgPgSIAAAAQgGgKgFgLIAAAAQgFgLgCgMIAAAAQgCgMAAgMIAAAAQAAgMACgMIAAAAQACgNAFgKIAAAAQAFgLAGgKIAAAAIAPgSIAAAAQAJgJAJgGIAAAAQAKgHALgFIAAAAQAMgFALgCIAAAAQANgCAMAAIAAAAQANAAALABIAAAAQALADALAEIAAAAQAJAEAKAGIAAAAIASANQAFAFgFAFIAAAAIgbAcQgEAEgEgEIAAAAQgKgKgMgEIAAAAQgLgEgNAAIAAAAQgOAAgNAGIAAAAQgMAFgJAKIAAAAQgJAKgFAMIAAAAQgFANAAAOIAAAAQAAANAFANIAAAAQAFAMAJAKIAAAAQAKAJAMAGIAAAAQAMAFAOAAIAAAAQAOAAALgEIAAAAQALgEAKgIIAAAAQAFgEAEAEIAAAAIAaAdQAFADgFAGIAAAAQgJAIgKAGIAAAAQgJAGgLAFIAAAAQgKAEgLACIAAAAQgLABgMAAIAAAAQgMABgNgDgAo5B0QgSgHgNgMIAAAAQgNgNgIgQIAAAAIgFgRQgCgJAAgKIAAAAIAAiPQAAgHAGAAIAAAAIAqAAQAGAAAAAHIAAAAIAACMQAAAKAEAHIAAAAQADAHAFAFIAAAAQAGAFAIADIAAAAQAHACAJAAIAAAAQAJAAAIgCIAAAAQAIgDAGgFIAAAAQAFgFAEgHIAAAAQADgHAAgKIAAAAIAAiMQAAgHAGAAIAAAAIAqAAQAHAAAAAHIAAAAIAACPQAAAKgCAJIAAAAIgGARQgHAQgOANIAAAAQgNAMgSAHIAAAAQgYAGgOAAIAAAAQgagCgLgEgAtBB4QgMgDgLgEIAAAAQgLgEgKgHIAAAAQgJgHgIgIIAAAAQgJgIgGgKIAAAAQgHgKgFgLIAAAAQgEgLgCgMIAAAAQgDgMAAgMIAAAAQAAgMADgMIAAAAQACgNAEgKIAAAAQAFgLAHgKIAAAAQAGgKAJgIIAAAAQAIgJAJgGIAAAAQAKgHALgFIAAAAQALgFAMgCIAAAAQAMgCANAAIAAAAQANAAAMACIAAAAQAMACALAFIAAAAQALAFAKAHIAAAAQAJAGAJAJIAAAAQAIAIAHAKIAAAAQAGAKAFALIAAAAQAFAKACANIAAAAQACAMAAAMIAAAAQAAAMgCAMIAAAAQgCAMgFALIAAAAQgFALgGAKIAAAAQgHAKgIAIIAAAAQgJAIgJAHIAAAAQgKAHgLAEIAAAAQgLAEgMADIAAAAQgMADgNgBIAAAAQgNABgMgDgAtCg9QgMAEgKAKIAAAAQgJAKgFAMIAAAAQgGANAAANIAAAAQAAANAGANIAAAAQAFAMAJAJIAAAAQAKAJAMAGIAAAAQAMAFAOAAIAAAAQAOAAAMgFIAAAAQANgGAJgJIAAAAQAJgJAGgMIAAAAQAFgNAAgNIAAAAQAAgNgFgNIAAAAQgGgMgJgKIAAAAQgJgKgNgEIAAAAQgMgGgOAAIAAAAQgOAAgMAGgAQhB3QgHAAAAgGIAAAAIAAi1IgwAAQgHAAAAgHIAAAAIAAgkQAAgHAHAAIAAAAICWAAQAHAAAAAHIAAAAIAAAkQAAAHgHAAIAAAAIgwAAIAAC1QAAAGgHAAIAAAAgAMjB3QgGAAAAgGIAAAAIAAjgQAAgHAGAAIAAAAICNAAQAGAAAAAHIAAAAIAAAkQAAAHgGAAIAAAAIheAAIAAAqIBNAAQAHAAAAAHIAAAAIAAAkQAAAGgHAAIAAAAIhNAAIAAAuIBeAAQAGAAAAAHIAAAAIAAAlQAAAGgGAAIAAAAgAIwB3QgIAAAAgIIAAAAIAAjdQAAgIAIAAIAAAAIAoAAQAIAAAAAIIAAAAIAABbIBLhfQADgEAEAAIAAAAIAqAAQAFAAACAFIAAAAQACAEgCAEIAAAAIhQBlIBXBuQADAEgDAFIAAAAQgCAEgFAAIAAAAIgvAAQgEAAgCgCIAAAAIhOhqIAABkQAAAIgIAAIAAAAgAC1B3QgHAAAAgGIAAAAIAAjgQAAgHAHAAIAAAAIAoAAQAHAAAAAHIAAAAIAADgQAAAGgHAAIAAAAgAAQB3QgGAAAAgGIAAAAIAAi1IgwAAQgGAAAAgHIAAAAIAAgkQAAgHAGAAIAAAAICWAAQAGAAAAAHIAAAAIAAAkQAAAHgGAAIAAAAIgxAAIAAC1QAAAGgGAAIAAAAgAjsB3QgEAAgBgDIAAAAIgthaIgYAAIAABXQAAAGgHAAIAAAAIgoAAQgGAAAAgGIAAAAIAAjgQAAgHAGAAIAAAAIBmAAQAQAAAOAGIAAAAQANAGAKAKIAAAAQAKAKAFANIAAAAQAGAOAAAPIAAAAQAAALgEALIAAAAQgDAKgHAJIAAAAQgGAIgJAHIAAAAQgKAHgMAEIAAAAIAvBWQACAEgCADIAAAAQgCADgEAAIAAAAgAk2gQIAyAAQALAAAIgIIAAAAQAHgHAAgMIAAAAQAAgMgHgHIAAAAQgIgHgLAAIAAAAIgyAAgAwzB3QgHAAAAgGIAAAAIAAhsIhLhxQgCgDACgDIAAAAQACgEAEAAIAAAAIAsAAQADAAACADIAAAAIAvBGIAwhGQACgDADAAIAAAAIAsAAQAEAAACAEIAAAAQACADgCADIAAAAIhMBwIAABtQAAAGgHAAIAAAAg");
	mask.setTransform(117.8,26.4);

	// Layer 2
	this.instance = new lib.textGradient();
	this.instance.parent = this;
	this.instance.setTransform(116.3,29.3,1,1,0,0,0,128.4,65.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy1_2, new cjs.Rectangle(0,0,238.8,51.3), null);


(lib.copy1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AJgB4QgMgDgLgEIAAAAQgLgEgKgHIAAAAQgJgHgIgIIAAAAQgJgIgGgKIAAAAQgHgKgFgLIAAAAQgEgLgCgMIAAAAQgDgMAAgMIAAAAQAAgMADgMIAAAAQACgNAEgKIAAAAQAFgLAHgKIAAAAQAGgKAJgIIAAAAQAIgJAJgGIAAAAQAKgHALgFIAAAAQALgFAMgCIAAAAQAMgCANAAIAAAAQANAAAMACIAAAAQAMACALAFIAAAAQALAFAKAHIAAAAQAJAGAJAJIAAAAQAIAIAHAKIAAAAQAGAKAFALIAAAAQAFAKACANIAAAAQACAMAAAMIAAAAQAAAMgCAMIAAAAQgCAMgFALIAAAAQgFALgGAKIAAAAQgHAKgIAIIAAAAQgJAIgJAHIAAAAQgKAHgLAEIAAAAQgLAEgMADIAAAAQgMADgNgBIAAAAQgNABgMgDgAJfg9QgMAEgKAKIAAAAQgJAKgFAMIAAAAQgGANAAANIAAAAQAAANAGANIAAAAQAFAMAJAJIAAAAQAKAJAMAGIAAAAQAMAFAOAAIAAAAQAOAAAMgFIAAAAQANgGAJgJIAAAAQAJgJAGgMIAAAAQAFgNAAgNIAAAAQAAgNgFgNIAAAAQgGgMgJgKIAAAAQgJgKgNgEIAAAAQgMgGgOAAIAAAAQgOAAgMAGgAjXB6QgEAAgCgDIAAAAIhqjkQgCgDACgDIAAAAQACgDAEAAIAAAAIAtAAQAEAAACAEIAAAAIA4B7IACAAIA4h7QABgEAFAAIAAAAIAtAAQAEAAABADIAAAAQACADgBADIAAAAIhrDkQgCADgEAAIAAAAgArmB6QgEAAgCgDIAAAAIg+iKIgBAAIg+CKQgCADgEAAIAAAAIgFAAQgFAAgBgEIAAAAIhBjkQgCgIAJAAIAAAAIAnAAQAFAAABAFIAAAAIAeByIABAAIA1h2QACgFAEABIAAAAIAGAAQAEgBABAFIAAAAIA1B2IABAAIAehyQABgFAFAAIAAAAIAoAAQAIAAgCAIIAAAAIhBDkQgBAEgFAAIAAAAgAFbB4QgLgDgMgEIAAAAQgKgFgKgGIAAAAQgKgHgIgJIAAAAQgJgHgGgLIAAAAQgHgJgFgLIAAAAQgEgLgCgMIAAAAQgDgMAAgMIAAAAQAAgMADgMIAAAAQACgNAEgKIAAAAQAFgLAHgKIAAAAQAGgKAJgIIAAAAIASgPIAAAAQAKgHAKgEIAAAAQAMgFALgCIAAAAQANgDAMAAIAAAAQALAAALACIAAAAIAWAHIAUAKQAKAGAJAHIAAAAQAGAEgFAFIAAAAIgbAdQgFAEgEgEIAAAAQgKgIgLgEIAAAAQgLgFgNABIAAAAQgOAAgMAFIAAAAQgMAGgJAJIAAAAQgKAKgFAMIAAAAQgFANAAANIAAAAQAAANAFANIAAAAQAGAMAJAJIAAAAQAJAJAMAGIAAAAQANAFAOAAIAAAAQAQAAAOgFIAAAAIAAgUIgWAAQgGAAAAgGIAAAAIAAgiQAAgGAGAAIAAAAIBFAAQAGAAAAAGIAAAAIAABbQAAAEgDACIAAAAQgjAWgxAAIAAAAQgMAAgNgCgANWB3QgHAAAAgGIAAAAIAAi1IgwAAQgHAAAAgHIAAAAIAAgkQAAgHAHAAIAAAAICWAAQAHAAAAAHIAAAAIAAAkQAAAHgHAAIAAAAIgwAAIAAC1QAAAGgHAAIAAAAgAgvB3QgGAAAAgGIAAAAIAAjgQAAgHAGAAIAAAAICMAAQAGAAAAAHIAAAAIAAAkQAAAHgGAAIAAAAIhdAAIAAAqIBMAAQAHAAAAAHIAAAAIAAAkQAAAGgHAAIAAAAIhMAAIAAAuIBdAAQAGAAAAAHIAAAAIAAAlQAAAGgGAAIAAAAgApfB3QgGAAAAgGIAAAAIAAjgQAAgHAGAAIAAAAICNAAQAGAAAAAHIAAAAIAAAkQAAAHgGAAIAAAAIheAAIAAAqIBNAAQAHAAAAAHIAAAAIAAAkQAAAGgHAAIAAAAIhNAAIAAAuIBeAAQAGAAAAAHIAAAAIAAAlQAAAGgGAAIAAAAgAmSgyQgHgBAAgGIAAAAIAAg2QAAgHAHAAIAAAAIAjAAQADAAACADIAAAAQACACgBAEIAAAAIgQA2QgCAFgFAAIAAAAg");
	mask.setTransform(98.2,26.4);

	// Layer 2
	this.instance = new lib.textGradient();
	this.instance.parent = this;
	this.instance.setTransform(100.3,63.4,1,1,0,0,0,128.4,65.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy1_1, new cjs.Rectangle(0,0,198.9,51.3), null);


(lib.copy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_77 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(77).call(this.frame_77).wait(1));

	// Layer 3
	this.instance = new lib.copy1_1();
	this.instance.parent = this;
	this.instance.setTransform(123.1,-198.3,1,1,0,0,0,99.4,25.7);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({y:25.7,alpha:1},7,cjs.Ease.get(1)).wait(65));

	// Layer 2
	this.instance_1 = new lib.copy1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(119.4,-117.7,1,1,0,0,0,119.4,25.7);
	this.instance_1.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({x:123.1,y:61.8,alpha:1},7,cjs.Ease.get(1)).wait(66));

	// Layer 1
	this.instance_2 = new lib.copy1_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(123,239.8,1,1,0,0,0,123,25.7);
	this.instance_2.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({y:98.8,alpha:1},7,cjs.Ease.get(1)).wait(64));

	// Layer 5
	this.instance_3 = new lib.copy1_dropShadow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(123.5,62,0.96,0.96,0,0,0,149,71.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({alpha:1},5).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,-235.9,269.6,521);


(lib.cameraFlashes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.cameraFlash_1();
	this.instance.parent = this;
	this.instance.setTransform(61.7,14.1,0.1,0.1,0,0,0,79,73);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({regX:78.8,regY:73.5,scaleX:0.4,scaleY:0.4,alpha:0.5},3).to({regX:79,regY:73,scaleX:0.1,scaleY:0.1,alpha:1},3).to({_off:true},1).wait(31).to({_off:false,x:261.7,y:62.2},0).to({regX:78.8,regY:73.5,scaleX:0.4,scaleY:0.4,alpha:0.5},3).to({regX:79,regY:73,scaleX:0.1,scaleY:0.1,alpha:1},3).to({_off:true},1).wait(4));

	// Layer 6
	this.instance_1 = new lib.cameraFlash_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.6,40.1,0.1,0.1,0,0,0,79,73.5);
	this.instance_1.alpha = 0.25;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({regX:78.8,regY:73.7,scaleX:1,scaleY:1},3).to({regX:79,regY:73.5,scaleX:0.1,scaleY:0.1},3).to({_off:true},1).wait(31).to({_off:false,x:163.7,y:67.1},0).to({regX:78.8,regY:73.7,scaleX:1,scaleY:1,y:67.2,alpha:0.238},3).to({regX:79,regY:73.5,scaleX:0.1,scaleY:0.1,y:67.1,alpha:0.25},3).to({_off:true},1).wait(12));

	// Layer 3
	this.instance_2 = new lib.cameraFlash_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(275.5,16,0.1,0.1,0,0,0,79,73);
	this.instance_2.alpha = 0.398;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({regX:78.5,regY:73.5,scaleX:1,scaleY:1,alpha:0.301},3).to({regX:79,regY:73,scaleX:0.1,scaleY:0.1,alpha:0.398},3).to({_off:true},1).wait(31).to({_off:false,x:234.3,y:95.2,alpha:1},0).to({regX:78.5,regY:73.5,scaleX:1,scaleY:1},3).to({regX:79,regY:73,scaleX:0.1,scaleY:0.1},3).to({_off:true},1).wait(20));

	// Layer 1
	this.instance_3 = new lib.cameraFlash_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(41.4,43.5,0.1,0.1,0,0,0,78,74);
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regX:78.5,regY:73.5,scaleX:1,scaleY:1},3).to({regX:78,regY:74,scaleX:0.1,scaleY:0.1},3).to({_off:true},1).wait(31).to({_off:false,x:124.6,y:106.6},0).to({regX:78.5,regY:73.5,scaleX:1,scaleY:1,alpha:0.5},3).to({regX:78,regY:74,scaleX:0.1,scaleY:0.1,alpha:1},3).to({_off:true},1).wait(28));

	// Layer 8
	this.instance_4 = new lib.cameraFlash_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(39.7,176.7,0.1,0.1,0,0,0,78.5,74);
	this.instance_4.compositeOperation = "lighter";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).to({regX:78.8,regY:73.7,scaleX:1,scaleY:1},3).to({regX:78.5,regY:74,scaleX:0.1,scaleY:0.1},3).to({_off:true},1).wait(35).to({_off:false,alpha:0.25},0).to({regX:78.8,regY:73.7,scaleX:1,scaleY:1},3).to({regX:78.5,regY:74,scaleX:0.1,scaleY:0.1},3).to({_off:true},1).wait(4));

	// Layer 7
	this.instance_5 = new lib.cameraFlash_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(272.6,134.1,0.1,0.1,0,0,0,79,74);
	this.instance_5.alpha = 0.5;
	this.instance_5.compositeOperation = "lighter";
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({_off:false},0).to({regX:78.8,regY:73.7,scaleX:1,scaleY:1},3).to({regX:79,regY:74,scaleX:0.1,scaleY:0.1},3).to({_off:true},1).wait(16).to({_off:false},0).to({regX:78.8,regY:73.7,scaleX:1,scaleY:1},3).to({regX:79,regY:74,scaleX:0.1,scaleY:0.1},3).to({_off:true},1).wait(21));

	// Layer 4
	this.instance_6 = new lib.cameraFlash_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(247.5,177.5,0.1,0.1,0,0,0,79,74);
	this.instance_6.compositeOperation = "lighter";
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({regX:78.8,regY:73.7,scaleX:0.4,scaleY:0.4},3).to({regX:79,regY:74,scaleX:0.1,scaleY:0.1},3).to({_off:true},1).wait(33).to({_off:false},0).to({regX:78.8,regY:73.7,scaleX:0.4,scaleY:0.4},3).to({regX:79,regY:74,scaleX:0.1,scaleY:0.1},3).to({_off:true},1).wait(17));

	// Layer 2
	this.instance_7 = new lib.cameraFlash_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(176.5,153,0.1,0.1,0,0,0,79,74);
	this.instance_7.alpha = 0.25;
	this.instance_7.compositeOperation = "lighter";
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},0).to({regX:78.5,regY:73.5,scaleX:1,scaleY:1},3).to({regX:79,regY:74,scaleX:0.1,scaleY:0.1},3).to({_off:true},1).wait(30).to({_off:false,x:54,y:6,alpha:1},0).to({regX:78.5,regY:73.5,scaleX:1,scaleY:1},3).to({regX:79,regY:74,scaleX:0.1,scaleY:0.1},3).to({_off:true},1).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flashes
	this.instance = new lib.cameraFlashes();
	this.instance.parent = this;
	this.instance.setTransform(78.5,100.5,1,1,0,0,0,78.5,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg image
	this.instance_1 = new lib.assetBGBeginning_v2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-44,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-44,-1,343,251), null);


// stage content:
(lib.clippers_300x250_v4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_141 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(141).call(this.frame_141).wait(1));

	// cta
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(150,276,1,1,0,0,0,150,26);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({y:224},15,cjs.Ease.get(1)).wait(33));

	// copy2
	this.instance_1 = new lib.copy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151.5,-123.9,3.12,3.12,0,0,0,147.6,27.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({scaleX:2.06,scaleY:2.06,x:151.1,y:-43.1,alpha:0.5},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:150.6,y:37.6,alpha:1},10,cjs.Ease.get(1)).wait(48));

	// laptopp
	this.instance_2 = new lib.laptop_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(366,145.5,1,1,0,0,0,53,27.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(115).to({_off:false},0).to({x:249},9,cjs.Ease.get(1)).wait(18));

	// phone
	this.instance_3 = new lib.phone_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47,162.5,1,1,0,0,0,26,13.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(113).to({_off:false},0).to({x:81},9,cjs.Ease.get(1)).wait(20));

	// tablet
	this.instance_4 = new lib.tablet();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-57.5,140.5,1,1,0,0,0,37.5,25.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(117).to({_off:false},0).to({x:42.5,y:139.6},9,cjs.Ease.get(1)).wait(16));

	// glare
	this.instance_5 = new lib.tvGlare_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(21.9,127.5,3.14,3.14,0,0,0,45,45.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({_off:false},0).to({regY:45.6,scaleX:2.07,scaleY:2.07,x:65.1,y:124.2,alpha:0.5},10,cjs.Ease.get(-1)).to({regY:45.5,scaleX:1,scaleY:1,x:108,y:120.5,alpha:1},10,cjs.Ease.get(1)).wait(48));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgoeAUXMAAAgotMBQ9AAAMAAAAotg");
	var mask_graphics_74 = new cjs.Graphics().p("EgoeAUXMAAAgotMBQ9AAAMAAAAotg");
	var mask_graphics_75 = new cjs.Graphics().p("EgoVAUTMAAAgolMBQrAAAMAAAAolg");
	var mask_graphics_76 = new cjs.Graphics().p("Egn7AUFMAAAgoJMBP3AAAMAAAAoJg");
	var mask_graphics_77 = new cjs.Graphics().p("EgnPATvMAAAgndMBOfAAAMAAAAndg");
	var mask_graphics_78 = new cjs.Graphics().p("EgmRATdMAAAgmfMBMjAAAMAAAAmfg");
	var mask_graphics_79 = new cjs.Graphics().p("EglBATHMAAAglPMBKDAAAMAAAAlPg");
	var mask_graphics_80 = new cjs.Graphics().p("EgjgASrMAAAgjtMBHBAAAMAAAAjtg");
	var mask_graphics_81 = new cjs.Graphics().p("EghtASLMAAAgh5MBDbAAAMAAAAh5g");
	var mask_graphics_82 = new cjs.Graphics().p("A/pRmIAA/0MA/TAAAIAAf0g");
	var mask_graphics_83 = new cjs.Graphics().p("A9SQ8IAA9dMA6lAAAIAAddg");
	var mask_graphics_84 = new cjs.Graphics().p("A6qQNIAA60MA1VAAAIAAa0g");
	var mask_graphics_85 = new cjs.Graphics().p("A4DPiIAA4LMAwHAAAIAAYLg");
	var mask_graphics_86 = new cjs.Graphics().p("A01O7IAA10MAraAAAIAAV0g");
	var mask_graphics_87 = new cjs.Graphics().p("AxuOZIAAzvMAnRAAAIAATvg");
	var mask_graphics_88 = new cjs.Graphics().p("AvBN8IAAx8MAjqAAAIAAR8g");
	var mask_graphics_89 = new cjs.Graphics().p("AsvNjIAAwaMAgoAAAIAAQag");
	var mask_graphics_90 = new cjs.Graphics().p("Aq4NOIAAvKIeJAAIAAPKg");
	var mask_graphics_91 = new cjs.Graphics().p("ApbM+IAAuLIcNAAIAAOLg");
	var mask_graphics_92 = new cjs.Graphics().p("AoZMzIAAtfIa1AAIAANfg");
	var mask_graphics_93 = new cjs.Graphics().p("AnxMsIAAtEIaAAAIAANEg");
	var mask_graphics_94 = new cjs.Graphics().p("AnlMqIAAs8IZvAAIAAM8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:149.7,y:126.6}).wait(74).to({graphics:mask_graphics_74,x:149.7,y:126.6}).wait(1).to({graphics:mask_graphics_75,x:149.7,y:126.5}).wait(1).to({graphics:mask_graphics_76,x:149.7,y:126.4}).wait(1).to({graphics:mask_graphics_77,x:149.7,y:126.1}).wait(1).to({graphics:mask_graphics_78,x:149.8,y:124.5}).wait(1).to({graphics:mask_graphics_79,x:149.8,y:122.3}).wait(1).to({graphics:mask_graphics_80,x:149.8,y:119.5}).wait(1).to({graphics:mask_graphics_81,x:149.9,y:116.3}).wait(1).to({graphics:mask_graphics_82,x:149.9,y:112.6}).wait(1).to({graphics:mask_graphics_83,x:150,y:108.4}).wait(1).to({graphics:mask_graphics_84,x:150,y:103.7}).wait(1).to({graphics:mask_graphics_85,x:150.1,y:99.4}).wait(1).to({graphics:mask_graphics_86,x:144.5,y:95.5}).wait(1).to({graphics:mask_graphics_87,x:137.9,y:92.1}).wait(1).to({graphics:mask_graphics_88,x:132.1,y:89.2}).wait(1).to({graphics:mask_graphics_89,x:127.3,y:86.7}).wait(1).to({graphics:mask_graphics_90,x:123.3,y:84.6}).wait(1).to({graphics:mask_graphics_91,x:120.2,y:83}).wait(1).to({graphics:mask_graphics_92,x:118,y:81.9}).wait(1).to({graphics:mask_graphics_93,x:116.7,y:81.2}).wait(1).to({graphics:mask_graphics_94,x:116.2,y:81}).wait(48));

	// copy
	this.instance_6 = new lib.copy1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(151.5,124.7,1,1,0,0,0,124.5,64.7);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({scaleX:0.65,scaleY:0.65,x:151.1,y:123.7,alpha:0.5},10,cjs.Ease.get(-1)).to({scaleX:0.3,scaleY:0.3,x:150.8,y:122.6,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(47));

	// clippers logo
	this.instance_7 = new lib.clippersLogo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(152,117,1,1,0,0,0,45.5,35);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(105).to({_off:false},0).to({alpha:1},16).wait(21));

	// tv screen black
	this.instance_8 = new lib.tvMask();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,120.5,1,1,0,0,0,82.4,41.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 24, 24, 24, 0)];
	this.instance_8.cache(-2,-2,169,87);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(96).to({_off:false},0).to({alpha:1},16).wait(30));

	// bg
	this.instance_9 = new lib.background();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(83).to({scaleX:0.78,scaleY:0.78,x:150.1,y:131.8},6,cjs.Ease.get(-1)).to({regX:150.3,regY:125.2,scaleX:0.56,scaleY:0.56,x:150,y:142.4},5,cjs.Ease.get(1)).wait(18).to({_off:true},1).wait(29));

	// screen
	this.instance_10 = new lib.tv();
	this.instance_10.parent = this;
	this.instance_10.setTransform(149.5,127.5,3.12,3.12,0,0,0,86.5,45.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(74).to({_off:false},0).to({scaleX:2.06,scaleY:2.06,x:149.9,y:122.1},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:150,y:120.5},10,cjs.Ease.get(1)).wait(48));

	// bg
	this.instance_11 = new lib.assetBGEnd();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(142));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(106,121.3,344,260.6);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/clippers_300x250_v4_atlas_.png", id:"clippers_300x250_v4_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;