(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["avsdfBase"] = factory();
	else
		root["avsdfBase"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let avsdfBase = {};

avsdfBase.layoutBase = __webpack_require__(1);
avsdfBase.AVSDFConstants = __webpack_require__(2);
avsdfBase.AVSDFEdge = __webpack_require__(3);
avsdfBase.AVSDFCircle = __webpack_require__(4);
avsdfBase.AVSDFLayout = __webpack_require__(5);
avsdfBase.AVSDFNode = __webpack_require__(6);

module.exports = avsdfBase;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let layoutBase = function () {
  return;
};

layoutBase.FDLayout = __webpack_require__(1);
layoutBase.FDLayoutConstants = __webpack_require__(22);
layoutBase.FDLayoutEdge = __webpack_require__(23);
layoutBase.FDLayoutNode = __webpack_require__(24);
layoutBase.DimensionD = __webpack_require__(25);
layoutBase.HashMap = __webpack_require__(4);
layoutBase.HashSet = __webpack_require__(17);
layoutBase.IGeometry = __webpack_require__(9);
layoutBase.IMath = __webpack_require__(10);
layoutBase.Integer = __webpack_require__(12);
layoutBase.Point = __webpack_require__(18);
layoutBase.PointD = __webpack_require__(16);
layoutBase.RandomSeed = __webpack_require__(15);
layoutBase.RectangleD = __webpack_require__(14);
layoutBase.Transform = __webpack_require__(20);
layoutBase.UniqueIDGeneretor = __webpack_require__(5);
layoutBase.Quicksort = __webpack_require__(26);
layoutBase.LinkedList = __webpack_require__(19);
layoutBase.LGraphObject = __webpack_require__(8);
layoutBase.LGraph = __webpack_require__(11);
layoutBase.LEdge = __webpack_require__(7);
layoutBase.LGraphManager = __webpack_require__(6);
layoutBase.LNode = __webpack_require__(13);
layoutBase.Layout = __webpack_require__(2);
layoutBase.LayoutConstants = __webpack_require__(3);

module.exports = layoutBase;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Layout = __webpack_require__(2);
var FDLayoutConstants = __webpack_require__(22);
var LayoutConstants = __webpack_require__(3);
var IGeometry = __webpack_require__(9);
var IMath = __webpack_require__(10);

function FDLayout() {
  Layout.call(this);

  this.useSmartIdealEdgeLengthCalculation = FDLayoutConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
  this.idealEdgeLength = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
  this.springConstant = FDLayoutConstants.DEFAULT_SPRING_STRENGTH;
  this.repulsionConstant = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH;
  this.gravityConstant = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH;
  this.compoundGravityConstant = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
  this.gravityRangeFactor = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR;
  this.compoundGravityRangeFactor = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
  this.displacementThresholdPerNode = 3.0 * FDLayoutConstants.DEFAULT_EDGE_LENGTH / 100;
  this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
  this.initialCoolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
  this.totalDisplacement = 0.0;
  this.oldTotalDisplacement = 0.0;
  this.maxIterations = FDLayoutConstants.MAX_ITERATIONS;
}

FDLayout.prototype = Object.create(Layout.prototype);

for (var prop in Layout) {
  FDLayout[prop] = Layout[prop];
}

FDLayout.prototype.initParameters = function () {
  Layout.prototype.initParameters.call(this, arguments);

  if (this.layoutQuality == LayoutConstants.DRAFT_QUALITY) {
    this.displacementThresholdPerNode += 0.30;
    this.maxIterations *= 0.8;
  } else if (this.layoutQuality == LayoutConstants.PROOF_QUALITY) {
    this.displacementThresholdPerNode -= 0.30;
    this.maxIterations *= 1.2;
  }

  this.totalIterations = 0;
  this.notAnimatedIterations = 0;

  this.useFRGridVariant = FDLayoutConstants.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION;

  this.grid = [];
};

FDLayout.prototype.calcIdealEdgeLengths = function () {
  var edge;
  var lcaDepth;
  var source;
  var target;
  var sizeOfSourceInLca;
  var sizeOfTargetInLca;

  var allEdges = this.getGraphManager().getAllEdges();
  for (var i = 0; i < allEdges.length; i++) {
    edge = allEdges[i];

    edge.idealLength = this.idealEdgeLength;

    if (edge.isInterGraph) {
      source = edge.getSource();
      target = edge.getTarget();

      sizeOfSourceInLca = edge.getSourceInLca().getEstimatedSize();
      sizeOfTargetInLca = edge.getTargetInLca().getEstimatedSize();

      if (this.useSmartIdealEdgeLengthCalculation) {
        edge.idealLength += sizeOfSourceInLca + sizeOfTargetInLca - 2 * LayoutConstants.SIMPLE_NODE_SIZE;
      }

      lcaDepth = edge.getLca().getInclusionTreeDepth();

      edge.idealLength += FDLayoutConstants.DEFAULT_EDGE_LENGTH * FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (source.getInclusionTreeDepth() + target.getInclusionTreeDepth() - 2 * lcaDepth);
    }
  }
};

FDLayout.prototype.initSpringEmbedder = function () {

  if (this.incremental) {
    this.maxNodeDisplacement = FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL;
  } else {
    this.coolingFactor = 1.0;
    this.initialCoolingFactor = 1.0;
    this.maxNodeDisplacement = FDLayoutConstants.MAX_NODE_DISPLACEMENT;
  }

  this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations);

  this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length;

  this.repulsionRange = this.calcRepulsionRange();
};

FDLayout.prototype.calcSpringForces = function () {
  var lEdges = this.getAllEdges();
  var edge;

  for (var i = 0; i < lEdges.length; i++) {
    edge = lEdges[i];

    this.calcSpringForce(edge, edge.idealLength);
  }
};

FDLayout.prototype.calcRepulsionForces = function (gridUpdateAllowed = true, forceToNodeSurroundingUpdate = false) {
  var i, j;
  var nodeA, nodeB;
  var lNodes = this.getAllNodes();
  var processedNodeSet;

  if (this.useFRGridVariant) {
    if (this.totalIterations % FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD == 1 && gridUpdateAllowed) {
      this.updateGrid();
    }

    processedNodeSet = new Set();

    // calculate repulsion forces between each nodes and its surrounding
    for (i = 0; i < lNodes.length; i++) {
      nodeA = lNodes[i];
      this.calculateRepulsionForceOfANode(nodeA, processedNodeSet, gridUpdateAllowed, forceToNodeSurroundingUpdate);
      processedNodeSet.add(nodeA);
    }
  } else {
    for (i = 0; i < lNodes.length; i++) {
      nodeA = lNodes[i];

      for (j = i + 1; j < lNodes.length; j++) {
        nodeB = lNodes[j];

        // If both nodes are not members of the same graph, skip.
        if (nodeA.getOwner() != nodeB.getOwner()) {
          continue;
        }

        this.calcRepulsionForce(nodeA, nodeB);
      }
    }
  }
};

FDLayout.prototype.calcGravitationalForces = function () {
  var node;
  var lNodes = this.getAllNodesToApplyGravitation();

  for (var i = 0; i < lNodes.length; i++) {
    node = lNodes[i];
    this.calcGravitationalForce(node);
  }
};

FDLayout.prototype.moveNodes = function () {
  var lNodes = this.getAllNodes();
  var node;

  for (var i = 0; i < lNodes.length; i++) {
    node = lNodes[i];
    node.move();
  }
};

FDLayout.prototype.calcSpringForce = function (edge, idealLength) {
  var sourceNode = edge.getSource();
  var targetNode = edge.getTarget();

  var length;
  var springForce;
  var springForceX;
  var springForceY;

  // Update edge length
  if (this.uniformLeafNodeSizes && sourceNode.getChild() == null && targetNode.getChild() == null) {
    edge.updateLengthSimple();
  } else {
    edge.updateLength();

    if (edge.isOverlapingSourceAndTarget) {
      return;
    }
  }

  length = edge.getLength();

  // Calculate spring forces
  springForce = this.springConstant * (length - idealLength);

  // Project force onto x and y axes
  springForceX = springForce * (edge.lengthX / length);
  springForceY = springForce * (edge.lengthY / length);

  // Apply forces on the end nodes
  sourceNode.springForceX += springForceX;
  sourceNode.springForceY += springForceY;
  targetNode.springForceX -= springForceX;
  targetNode.springForceY -= springForceY;
};

FDLayout.prototype.calcRepulsionForce = function (nodeA, nodeB) {
  var rectA = nodeA.getRect();
  var rectB = nodeB.getRect();
  var overlapAmount = new Array(2);
  var clipPoints = new Array(4);
  var distanceX;
  var distanceY;
  var distanceSquared;
  var distance;
  var repulsionForce;
  var repulsionForceX;
  var repulsionForceY;

  if (rectA.intersects(rectB)) // two nodes overlap
    {
      // calculate separation amount in x and y directions
      IGeometry.calcSeparationAmount(rectA, rectB, overlapAmount, FDLayoutConstants.DEFAULT_EDGE_LENGTH / 2.0);

      repulsionForceX = 2 * overlapAmount[0];
      repulsionForceY = 2 * overlapAmount[1];

      var childrenConstant = nodeA.noOfChildren * nodeB.noOfChildren / (nodeA.noOfChildren + nodeB.noOfChildren);

      // Apply forces on the two nodes
      nodeA.repulsionForceX -= childrenConstant * repulsionForceX;
      nodeA.repulsionForceY -= childrenConstant * repulsionForceY;
      nodeB.repulsionForceX += childrenConstant * repulsionForceX;
      nodeB.repulsionForceY += childrenConstant * repulsionForceY;
    } else // no overlap
    {
      // calculate distance

      if (this.uniformLeafNodeSizes && nodeA.getChild() == null && nodeB.getChild() == null) // simply base repulsion on distance of node centers
        {
          distanceX = rectB.getCenterX() - rectA.getCenterX();
          distanceY = rectB.getCenterY() - rectA.getCenterY();
        } else // use clipping points
        {
          IGeometry.getIntersection(rectA, rectB, clipPoints);

          distanceX = clipPoints[2] - clipPoints[0];
          distanceY = clipPoints[3] - clipPoints[1];
        }

      // No repulsion range. FR grid variant should take care of this.
      if (Math.abs(distanceX) < FDLayoutConstants.MIN_REPULSION_DIST) {
        distanceX = IMath.sign(distanceX) * FDLayoutConstants.MIN_REPULSION_DIST;
      }

      if (Math.abs(distanceY) < FDLayoutConstants.MIN_REPULSION_DIST) {
        distanceY = IMath.sign(distanceY) * FDLayoutConstants.MIN_REPULSION_DIST;
      }

      distanceSquared = distanceX * distanceX + distanceY * distanceY;
      distance = Math.sqrt(distanceSquared);

      repulsionForce = this.repulsionConstant * nodeA.noOfChildren * nodeB.noOfChildren / distanceSquared;

      // Project force onto x and y axes
      repulsionForceX = repulsionForce * distanceX / distance;
      repulsionForceY = repulsionForce * distanceY / distance;

      // Apply forces on the two nodes    
      nodeA.repulsionForceX -= repulsionForceX;
      nodeA.repulsionForceY -= repulsionForceY;
      nodeB.repulsionForceX += repulsionForceX;
      nodeB.repulsionForceY += repulsionForceY;
    }
};

FDLayout.prototype.calcGravitationalForce = function (node) {
  var ownerGraph;
  var ownerCenterX;
  var ownerCenterY;
  var distanceX;
  var distanceY;
  var absDistanceX;
  var absDistanceY;
  var estimatedSize;
  ownerGraph = node.getOwner();

  ownerCenterX = (ownerGraph.getRight() + ownerGraph.getLeft()) / 2;
  ownerCenterY = (ownerGraph.getTop() + ownerGraph.getBottom()) / 2;
  distanceX = node.getCenterX() - ownerCenterX;
  distanceY = node.getCenterY() - ownerCenterY;
  absDistanceX = Math.abs(distanceX) + node.getWidth() / 2;
  absDistanceY = Math.abs(distanceY) + node.getHeight() / 2;

  if (node.getOwner() == this.graphManager.getRoot()) // in the root graph
    {
      estimatedSize = ownerGraph.getEstimatedSize() * this.gravityRangeFactor;

      if (absDistanceX > estimatedSize || absDistanceY > estimatedSize) {
        node.gravitationForceX = -this.gravityConstant * distanceX;
        node.gravitationForceY = -this.gravityConstant * distanceY;
      }
    } else // inside a compound
    {
      estimatedSize = ownerGraph.getEstimatedSize() * this.compoundGravityRangeFactor;

      if (absDistanceX > estimatedSize || absDistanceY > estimatedSize) {
        node.gravitationForceX = -this.gravityConstant * distanceX * this.compoundGravityConstant;
        node.gravitationForceY = -this.gravityConstant * distanceY * this.compoundGravityConstant;
      }
    }
};

FDLayout.prototype.isConverged = function () {
  var converged;
  var oscilating = false;

  if (this.totalIterations > this.maxIterations / 3) {
    oscilating = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2;
  }

  converged = this.totalDisplacement < this.totalDisplacementThreshold;

  this.oldTotalDisplacement = this.totalDisplacement;

  return converged || oscilating;
};

FDLayout.prototype.animate = function () {
  if (this.animationDuringLayout && !this.isSubLayout) {
    if (this.notAnimatedIterations == this.animationPeriod) {
      this.update();
      this.notAnimatedIterations = 0;
    } else {
      this.notAnimatedIterations++;
    }
  }
};

//This method calculates the number of children (weight) for all nodes
FDLayout.prototype.calcNoOfChildrenForAllNodes = function () {
  var node;
  var allNodes = this.graphManager.getAllNodes();

  for (var i = 0; i < allNodes.length; i++) {
    node = allNodes[i];
    node.noOfChildren = node.getNoOfChildren();
  }
};

// -----------------------------------------------------------------------------
// Section: FR-Grid Variant Repulsion Force Calculation
// -----------------------------------------------------------------------------

FDLayout.prototype.calcGrid = function (graph) {

  var sizeX = 0;
  var sizeY = 0;

  sizeX = parseInt(Math.ceil((graph.getRight() - graph.getLeft()) / this.repulsionRange));
  sizeY = parseInt(Math.ceil((graph.getBottom() - graph.getTop()) / this.repulsionRange));

  var grid = new Array(sizeX);

  for (var i = 0; i < sizeX; i++) {
    grid[i] = new Array(sizeY);
  }

  for (var i = 0; i < sizeX; i++) {
    for (var j = 0; j < sizeY; j++) {
      grid[i][j] = new Array();
    }
  }

  return grid;
};

FDLayout.prototype.addNodeToGrid = function (v, left, top) {

  var startX = 0;
  var finishX = 0;
  var startY = 0;
  var finishY = 0;

  startX = parseInt(Math.floor((v.getRect().x - left) / this.repulsionRange));
  finishX = parseInt(Math.floor((v.getRect().width + v.getRect().x - left) / this.repulsionRange));
  startY = parseInt(Math.floor((v.getRect().y - top) / this.repulsionRange));
  finishY = parseInt(Math.floor((v.getRect().height + v.getRect().y - top) / this.repulsionRange));

  for (var i = startX; i <= finishX; i++) {
    for (var j = startY; j <= finishY; j++) {
      this.grid[i][j].push(v);
      v.setGridCoordinates(startX, finishX, startY, finishY);
    }
  }
};

FDLayout.prototype.updateGrid = function () {
  var i;
  var nodeA;
  var lNodes = this.getAllNodes();

  this.grid = this.calcGrid(this.graphManager.getRoot());

  // put all nodes to proper grid cells
  for (i = 0; i < lNodes.length; i++) {
    nodeA = lNodes[i];
    this.addNodeToGrid(nodeA, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
  }
};

FDLayout.prototype.calculateRepulsionForceOfANode = function (nodeA, processedNodeSet, gridUpdateAllowed, forceToNodeSurroundingUpdate) {

  if (this.totalIterations % FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD == 1 && gridUpdateAllowed || forceToNodeSurroundingUpdate) {
    var surrounding = new Set();
    nodeA.surrounding = new Array();
    var nodeB;
    var grid = this.grid;

    for (var i = nodeA.startX - 1; i < nodeA.finishX + 2; i++) {
      for (var j = nodeA.startY - 1; j < nodeA.finishY + 2; j++) {
        if (!(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length)) {
          for (var k = 0; k < grid[i][j].length; k++) {
            nodeB = grid[i][j][k];

            // If both nodes are not members of the same graph, 
            // or both nodes are the same, skip.
            if (nodeA.getOwner() != nodeB.getOwner() || nodeA == nodeB) {
              continue;
            }

            // check if the repulsion force between
            // nodeA and nodeB has already been calculated
            if (!processedNodeSet.has(nodeB) && !surrounding.has(nodeB)) {
              var distanceX = Math.abs(nodeA.getCenterX() - nodeB.getCenterX()) - (nodeA.getWidth() / 2 + nodeB.getWidth() / 2);
              var distanceY = Math.abs(nodeA.getCenterY() - nodeB.getCenterY()) - (nodeA.getHeight() / 2 + nodeB.getHeight() / 2);

              // if the distance between nodeA and nodeB 
              // is less then calculation range
              if (distanceX <= this.repulsionRange && distanceY <= this.repulsionRange) {
                //then add nodeB to surrounding of nodeA
                surrounding.add(nodeB);
              }
            }
          }
        }
      }
    }

    nodeA.surrounding = [...surrounding];
  }
  for (i = 0; i < nodeA.surrounding.length; i++) {
    this.calcRepulsionForce(nodeA, nodeA.surrounding[i]);
  }
};

FDLayout.prototype.calcRepulsionRange = function () {
  return 0.0;
};

module.exports = FDLayout;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var LayoutConstants = __webpack_require__(3);
var HashMap = __webpack_require__(4);
var LGraphManager = __webpack_require__(6);
var LNode = __webpack_require__(13);
var LEdge = __webpack_require__(7);
var LGraph = __webpack_require__(11);
var PointD = __webpack_require__(16);
var Transform = __webpack_require__(20);
var Emitter = __webpack_require__(21);
var HashSet = __webpack_require__(17);

function Layout(isRemoteUse) {
  Emitter.call(this);

  //Layout Quality: 0:proof, 1:default, 2:draft
  this.layoutQuality = LayoutConstants.DEFAULT_QUALITY;
  //Whether layout should create bendpoints as needed or not
  this.createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
  //Whether layout should be incremental or not
  this.incremental = LayoutConstants.DEFAULT_INCREMENTAL;
  //Whether we animate from before to after layout node positions
  this.animationOnLayout = LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT;
  //Whether we animate the layout process or not
  this.animationDuringLayout = LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT;
  //Number iterations that should be done between two successive animations
  this.animationPeriod = LayoutConstants.DEFAULT_ANIMATION_PERIOD;
  /**
   * Whether or not leaf nodes (non-compound nodes) are of uniform sizes. When
   * they are, both spring and repulsion forces between two leaf nodes can be
   * calculated without the expensive clipping point calculations, resulting
   * in major speed-up.
   */
  this.uniformLeafNodeSizes = LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
  /**
   * This is used for creation of bendpoints by using dummy nodes and edges.
   * Maps an LEdge to its dummy bendpoint path.
   */
  this.edgeToDummyNodes = new HashMap();
  this.graphManager = new LGraphManager(this);
  this.isLayoutFinished = false;
  this.isSubLayout = false;
  this.isRemoteUse = false;

  if (isRemoteUse != null) {
    this.isRemoteUse = isRemoteUse;
  }
}

Layout.RANDOM_SEED = 1;

Layout.prototype = Object.create(Emitter.prototype);

Layout.prototype.getGraphManager = function () {
  return this.graphManager;
};

Layout.prototype.getAllNodes = function () {
  return this.graphManager.getAllNodes();
};

Layout.prototype.getAllEdges = function () {
  return this.graphManager.getAllEdges();
};

Layout.prototype.getAllNodesToApplyGravitation = function () {
  return this.graphManager.getAllNodesToApplyGravitation();
};

Layout.prototype.newGraphManager = function () {
  var gm = new LGraphManager(this);
  this.graphManager = gm;
  return gm;
};

Layout.prototype.newGraph = function (vGraph) {
  return new LGraph(null, this.graphManager, vGraph);
};

Layout.prototype.newNode = function (vNode) {
  return new LNode(this.graphManager, vNode);
};

Layout.prototype.newEdge = function (vEdge) {
  return new LEdge(null, null, vEdge);
};

Layout.prototype.checkLayoutSuccess = function () {
  return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
};

Layout.prototype.runLayout = function () {
  this.isLayoutFinished = false;

  if (this.tilingPreLayout) {
    this.tilingPreLayout();
  }

  this.initParameters();
  var isLayoutSuccessfull;

  if (this.checkLayoutSuccess()) {
    isLayoutSuccessfull = false;
  } else {
    isLayoutSuccessfull = this.layout();
  }

  if (LayoutConstants.ANIMATE === 'during') {
    // If this is a 'during' layout animation. Layout is not finished yet. 
    // We need to perform these in index.js when layout is really finished.
    return false;
  }

  if (isLayoutSuccessfull) {
    if (!this.isSubLayout) {
      this.doPostLayout();
    }
  }

  if (this.tilingPostLayout) {
    this.tilingPostLayout();
  }

  this.isLayoutFinished = true;

  return isLayoutSuccessfull;
};

/**
 * This method performs the operations required after layout.
 */
Layout.prototype.doPostLayout = function () {
  //assert !isSubLayout : "Should not be called on sub-layout!";
  // Propagate geometric changes to v-level objects
  if (!this.incremental) {
    this.transform();
  }
  this.update();
};

/**
 * This method updates the geometry of the target graph according to
 * calculated layout.
 */
Layout.prototype.update2 = function () {
  // update bend points
  if (this.createBendsAsNeeded) {
    this.createBendpointsFromDummyNodes();

    // reset all edges, since the topology has changed
    this.graphManager.resetAllEdges();
  }

  // perform edge, node and root updates if layout is not called
  // remotely
  if (!this.isRemoteUse) {
    // update all edges
    var edge;
    var allEdges = this.graphManager.getAllEdges();
    for (var i = 0; i < allEdges.length; i++) {
      edge = allEdges[i];
      //      this.update(edge);
    }

    // recursively update nodes
    var node;
    var nodes = this.graphManager.getRoot().getNodes();
    for (var i = 0; i < nodes.length; i++) {
      node = nodes[i];
      //      this.update(node);
    }

    // update root graph
    this.update(this.graphManager.getRoot());
  }
};

Layout.prototype.update = function (obj) {
  if (obj == null) {
    this.update2();
  } else if (obj instanceof LNode) {
    var node = obj;
    if (node.getChild() != null) {
      // since node is compound, recursively update child nodes
      var nodes = node.getChild().getNodes();
      for (var i = 0; i < nodes.length; i++) {
        update(nodes[i]);
      }
    }

    // if the l-level node is associated with a v-level graph object,
    // then it is assumed that the v-level node implements the
    // interface Updatable.
    if (node.vGraphObject != null) {
      // cast to Updatable without any type check
      var vNode = node.vGraphObject;

      // call the update method of the interface
      vNode.update(node);
    }
  } else if (obj instanceof LEdge) {
    var edge = obj;
    // if the l-level edge is associated with a v-level graph object,
    // then it is assumed that the v-level edge implements the
    // interface Updatable.

    if (edge.vGraphObject != null) {
      // cast to Updatable without any type check
      var vEdge = edge.vGraphObject;

      // call the update method of the interface
      vEdge.update(edge);
    }
  } else if (obj instanceof LGraph) {
    var graph = obj;
    // if the l-level graph is associated with a v-level graph object,
    // then it is assumed that the v-level object implements the
    // interface Updatable.

    if (graph.vGraphObject != null) {
      // cast to Updatable without any type check
      var vGraph = graph.vGraphObject;

      // call the update method of the interface
      vGraph.update(graph);
    }
  }
};

/**
 * This method is used to set all layout parameters to default values
 * determined at compile time.
 */
Layout.prototype.initParameters = function () {
  if (!this.isSubLayout) {
    this.layoutQuality = LayoutConstants.DEFAULT_QUALITY;
    this.animationDuringLayout = LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT;
    this.animationPeriod = LayoutConstants.DEFAULT_ANIMATION_PERIOD;
    this.animationOnLayout = LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT;
    this.incremental = LayoutConstants.DEFAULT_INCREMENTAL;
    this.createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
    this.uniformLeafNodeSizes = LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
  }

  if (this.animationDuringLayout) {
    this.animationOnLayout = false;
  }
};

Layout.prototype.transform = function (newLeftTop) {
  if (newLeftTop == undefined) {
    this.transform(new PointD(0, 0));
  } else {
    // create a transformation object (from Eclipse to layout). When an
    // inverse transform is applied, we get upper-left coordinate of the
    // drawing or the root graph at given input coordinate (some margins
    // already included in calculation of left-top).

    var trans = new Transform();
    var leftTop = this.graphManager.getRoot().updateLeftTop();

    if (leftTop != null) {
      trans.setWorldOrgX(newLeftTop.x);
      trans.setWorldOrgY(newLeftTop.y);

      trans.setDeviceOrgX(leftTop.x);
      trans.setDeviceOrgY(leftTop.y);

      var nodes = this.getAllNodes();
      var node;

      for (var i = 0; i < nodes.length; i++) {
        node = nodes[i];
        node.transform(trans);
      }
    }
  }
};

Layout.prototype.positionNodesRandomly = function (graph) {

  if (graph == undefined) {
    //assert !this.incremental;
    this.positionNodesRandomly(this.getGraphManager().getRoot());
    this.getGraphManager().getRoot().updateBounds(true);
  } else {
    var lNode;
    var childGraph;

    var nodes = graph.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      lNode = nodes[i];
      childGraph = lNode.getChild();

      if (childGraph == null) {
        lNode.scatter();
      } else if (childGraph.getNodes().length == 0) {
        lNode.scatter();
      } else {
        this.positionNodesRandomly(childGraph);
        lNode.updateBounds();
      }
    }
  }
};

/**
 * This method returns a list of trees where each tree is represented as a
 * list of l-nodes. The method returns a list of size 0 when:
 * - The graph is not flat or
 * - One of the component(s) of the graph is not a tree.
 */
Layout.prototype.getFlatForest = function () {
  var flatForest = [];
  var isForest = true;

  // Quick reference for all nodes in the graph manager associated with
  // this layout. The list should not be changed.
  var allNodes = this.graphManager.getRoot().getNodes();

  // First be sure that the graph is flat
  var isFlat = true;

  for (var i = 0; i < allNodes.length; i++) {
    if (allNodes[i].getChild() != null) {
      isFlat = false;
    }
  }

  // Return empty forest if the graph is not flat.
  if (!isFlat) {
    return flatForest;
  }

  // Run BFS for each component of the graph.

  var visited = new HashSet();
  var toBeVisited = [];
  var parents = new HashMap();
  var unProcessedNodes = [];

  unProcessedNodes = unProcessedNodes.concat(allNodes);

  // Each iteration of this loop finds a component of the graph and
  // decides whether it is a tree or not. If it is a tree, adds it to the
  // forest and continued with the next component.

  while (unProcessedNodes.length > 0 && isForest) {
    toBeVisited.push(unProcessedNodes[0]);

    // Start the BFS. Each iteration of this loop visits a node in a
    // BFS manner.
    while (toBeVisited.length > 0 && isForest) {
      //pool operation
      var currentNode = toBeVisited[0];
      toBeVisited.splice(0, 1);
      visited.add(currentNode);

      // Traverse all neighbors of this node
      var neighborEdges = currentNode.getEdges();

      for (var i = 0; i < neighborEdges.length; i++) {
        var currentNeighbor = neighborEdges[i].getOtherEnd(currentNode);

        // If BFS is not growing from this neighbor.
        if (parents.get(currentNode) != currentNeighbor) {
          // We haven't previously visited this neighbor.
          if (!visited.contains(currentNeighbor)) {
            toBeVisited.push(currentNeighbor);
            parents.put(currentNeighbor, currentNode);
          }
          // Since we have previously visited this neighbor and
          // this neighbor is not parent of currentNode, given
          // graph contains a component that is not tree, hence
          // it is not a forest.
          else {
              isForest = false;
              break;
            }
        }
      }
    }

    // The graph contains a component that is not a tree. Empty
    // previously found trees. The method will end.
    if (!isForest) {
      flatForest = [];
    }
    // Save currently visited nodes as a tree in our forest. Reset
    // visited and parents lists. Continue with the next component of
    // the graph, if any.
    else {
        var temp = [];
        visited.addAllTo(temp);
        flatForest.push(temp);
        //flatForest = flatForest.concat(temp);
        //unProcessedNodes.removeAll(visited);
        for (var i = 0; i < temp.length; i++) {
          var value = temp[i];
          var index = unProcessedNodes.indexOf(value);
          if (index > -1) {
            unProcessedNodes.splice(index, 1);
          }
        }
        visited = new HashSet();
        parents = new HashMap();
      }
  }

  return flatForest;
};

/**
 * This method creates dummy nodes (an l-level node with minimal dimensions)
 * for the given edge (one per bendpoint). The existing l-level structure
 * is updated accordingly.
 */
Layout.prototype.createDummyNodesForBendpoints = function (edge) {
  var dummyNodes = [];
  var prev = edge.source;

  var graph = this.graphManager.calcLowestCommonAncestor(edge.source, edge.target);

  for (var i = 0; i < edge.bendpoints.length; i++) {
    // create new dummy node
    var dummyNode = this.newNode(null);
    dummyNode.setRect(new Point(0, 0), new Dimension(1, 1));

    graph.add(dummyNode);

    // create new dummy edge between prev and dummy node
    var dummyEdge = this.newEdge(null);
    this.graphManager.add(dummyEdge, prev, dummyNode);

    dummyNodes.add(dummyNode);
    prev = dummyNode;
  }

  var dummyEdge = this.newEdge(null);
  this.graphManager.add(dummyEdge, prev, edge.target);

  this.edgeToDummyNodes.put(edge, dummyNodes);

  // remove real edge from graph manager if it is inter-graph
  if (edge.isInterGraph()) {
    this.graphManager.remove(edge);
  }
  // else, remove the edge from the current graph
  else {
      graph.remove(edge);
    }

  return dummyNodes;
};

/**
 * This method creates bendpoints for edges from the dummy nodes
 * at l-level.
 */
Layout.prototype.createBendpointsFromDummyNodes = function () {
  var edges = [];
  edges = edges.concat(this.graphManager.getAllEdges());
  edges = this.edgeToDummyNodes.keySet().concat(edges);

  for (var k = 0; k < edges.length; k++) {
    var lEdge = edges[k];

    if (lEdge.bendpoints.length > 0) {
      var path = this.edgeToDummyNodes.get(lEdge);

      for (var i = 0; i < path.length; i++) {
        var dummyNode = path[i];
        var p = new PointD(dummyNode.getCenterX(), dummyNode.getCenterY());

        // update bendpoint's location according to dummy node
        var ebp = lEdge.bendpoints.get(i);
        ebp.x = p.x;
        ebp.y = p.y;

        // remove the dummy node, dummy edges incident with this
        // dummy node is also removed (within the remove method)
        dummyNode.getOwner().remove(dummyNode);
      }

      // add the real edge to graph
      this.graphManager.add(lEdge, lEdge.source, lEdge.target);
    }
  }
};

Layout.transform = function (sliderValue, defaultValue, minDiv, maxMul) {
  if (minDiv != undefined && maxMul != undefined) {
    var value = defaultValue;

    if (sliderValue <= 50) {
      var minValue = defaultValue / minDiv;
      value -= (defaultValue - minValue) / 50 * (50 - sliderValue);
    } else {
      var maxValue = defaultValue * maxMul;
      value += (maxValue - defaultValue) / 50 * (sliderValue - 50);
    }

    return value;
  } else {
    var a, b;

    if (sliderValue <= 50) {
      a = 9.0 * defaultValue / 500.0;
      b = defaultValue / 10.0;
    } else {
      a = 9.0 * defaultValue / 50.0;
      b = -8 * defaultValue;
    }

    return a * sliderValue + b;
  }
};

/**
 * This method finds and returns the center of the given nodes, assuming
 * that the given nodes form a tree in themselves.
 */
Layout.findCenterOfTree = function (nodes) {
  var list = [];
  list = list.concat(nodes);

  var removedNodes = [];
  var remainingDegrees = new HashMap();
  var foundCenter = false;
  var centerNode = null;

  if (list.length == 1 || list.length == 2) {
    foundCenter = true;
    centerNode = list[0];
  }

  for (var i = 0; i < list.length; i++) {
    var node = list[i];
    var degree = node.getNeighborsList().size();
    remainingDegrees.put(node, node.getNeighborsList().size());

    if (degree == 1) {
      removedNodes.push(node);
    }
  }

  var tempList = [];
  tempList = tempList.concat(removedNodes);

  while (!foundCenter) {
    var tempList2 = [];
    tempList2 = tempList2.concat(tempList);
    tempList = [];

    for (var i = 0; i < list.length; i++) {
      var node = list[i];

      var index = list.indexOf(node);
      if (index >= 0) {
        list.splice(index, 1);
      }

      var neighbours = node.getNeighborsList();

      Object.keys(neighbours.set).forEach(function (j) {
        var neighbour = neighbours.set[j];
        if (removedNodes.indexOf(neighbour) < 0) {
          var otherDegree = remainingDegrees.get(neighbour);
          var newDegree = otherDegree - 1;

          if (newDegree == 1) {
            tempList.push(neighbour);
          }

          remainingDegrees.put(neighbour, newDegree);
        }
      });
    }

    removedNodes = removedNodes.concat(tempList);

    if (list.length == 1 || list.length == 2) {
      foundCenter = true;
      centerNode = list[0];
    }
  }

  return centerNode;
};

/**
 * During the coarsening process, this layout may be referenced by two graph managers
 * this setter function grants access to change the currently being used graph manager
 */
Layout.prototype.setGraphManager = function (gm) {
  this.graphManager = gm;
};

module.exports = Layout;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function LayoutConstants() {}

/**
 * Layout Quality
 */
LayoutConstants.PROOF_QUALITY = 0;
LayoutConstants.DEFAULT_QUALITY = 1;
LayoutConstants.DRAFT_QUALITY = 2;

/**
 * Default parameters
 */
LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED = false;
//LayoutConstants.DEFAULT_INCREMENTAL = true;
LayoutConstants.DEFAULT_INCREMENTAL = false;
LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT = true;
LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT = false;
LayoutConstants.DEFAULT_ANIMATION_PERIOD = 50;
LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false;

// -----------------------------------------------------------------------------
// Section: General other constants
// -----------------------------------------------------------------------------
/*
 * Margins of a graph to be applied on bouding rectangle of its contents. We
 * assume margins on all four sides to be uniform.
 */
LayoutConstants.DEFAULT_GRAPH_MARGIN = 15;

/*
 * Whether to consider labels in node dimensions or not
 */
LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = false;

/*
 * Default dimension of a non-compound node.
 */
LayoutConstants.SIMPLE_NODE_SIZE = 40;

/*
 * Default dimension of a non-compound node.
 */
LayoutConstants.SIMPLE_NODE_HALF_SIZE = LayoutConstants.SIMPLE_NODE_SIZE / 2;

/*
 * Empty compound node size. When a compound node is empty, its both
 * dimensions should be of this value.
 */
LayoutConstants.EMPTY_COMPOUND_NODE_SIZE = 40;

/*
 * Minimum length that an edge should take during layout
 */
LayoutConstants.MIN_EDGE_LENGTH = 1;

/*
 * World boundaries that layout operates on
 */
LayoutConstants.WORLD_BOUNDARY = 1000000;

/*
 * World boundaries that random positioning can be performed with
 */
LayoutConstants.INITIAL_WORLD_BOUNDARY = LayoutConstants.WORLD_BOUNDARY / 1000;

/*
 * Coordinates of the world center
 */
LayoutConstants.WORLD_CENTER_X = 1200;
LayoutConstants.WORLD_CENTER_Y = 900;

module.exports = LayoutConstants;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var UniqueIDGeneretor = __webpack_require__(5);

function HashMap() {
  this.map = {};
  this.keys = [];
}

HashMap.prototype.put = function (key, value) {
  var theId = UniqueIDGeneretor.createID(key);
  if (!this.contains(theId)) {
    this.map[theId] = value;
    this.keys.push(key);
  }
};

HashMap.prototype.contains = function (key) {
  var theId = UniqueIDGeneretor.createID(key);
  return this.map[key] != null;
};

HashMap.prototype.get = function (key) {
  var theId = UniqueIDGeneretor.createID(key);
  return this.map[theId];
};

HashMap.prototype.keySet = function () {
  return this.keys;
};

module.exports = HashMap;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function UniqueIDGeneretor() {}

UniqueIDGeneretor.lastID = 0;

UniqueIDGeneretor.createID = function (obj) {
  if (UniqueIDGeneretor.isPrimitive(obj)) {
    return obj;
  }
  if (obj.uniqueID != null) {
    return obj.uniqueID;
  }
  obj.uniqueID = UniqueIDGeneretor.getString();
  UniqueIDGeneretor.lastID++;
  return obj.uniqueID;
};

UniqueIDGeneretor.getString = function (id) {
  if (id == null) id = UniqueIDGeneretor.lastID;
  return "Object#" + id + "";
};

UniqueIDGeneretor.isPrimitive = function (arg) {
  var type = typeof arg;
  return arg == null || type != "object" && type != "function";
};

module.exports = UniqueIDGeneretor;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var LGraph;
var LEdge = __webpack_require__(7);

function LGraphManager(layout) {
  LGraph = __webpack_require__(11); // It may be better to initilize this out of this function but it gives an error (Right-hand side of 'instanceof' is not callable) now.
  this.layout = layout;

  this.graphs = [];
  this.edges = [];
}

LGraphManager.prototype.addRoot = function () {
  var ngraph = this.layout.newGraph();
  var nnode = this.layout.newNode(null);
  var root = this.add(ngraph, nnode);
  this.setRootGraph(root);
  return this.rootGraph;
};

LGraphManager.prototype.add = function (newGraph, parentNode, newEdge, sourceNode, targetNode) {
  //there are just 2 parameters are passed then it adds an LGraph else it adds an LEdge
  if (newEdge == null && sourceNode == null && targetNode == null) {
    if (newGraph == null) {
      throw "Graph is null!";
    }
    if (parentNode == null) {
      throw "Parent node is null!";
    }
    if (this.graphs.indexOf(newGraph) > -1) {
      throw "Graph already in this graph mgr!";
    }

    this.graphs.push(newGraph);

    if (newGraph.parent != null) {
      throw "Already has a parent!";
    }
    if (parentNode.child != null) {
      throw "Already has a child!";
    }

    newGraph.parent = parentNode;
    parentNode.child = newGraph;

    return newGraph;
  } else {
    //change the order of the parameters
    targetNode = newEdge;
    sourceNode = parentNode;
    newEdge = newGraph;
    var sourceGraph = sourceNode.getOwner();
    var targetGraph = targetNode.getOwner();

    if (!(sourceGraph != null && sourceGraph.getGraphManager() == this)) {
      throw "Source not in this graph mgr!";
    }
    if (!(targetGraph != null && targetGraph.getGraphManager() == this)) {
      throw "Target not in this graph mgr!";
    }

    if (sourceGraph == targetGraph) {
      newEdge.isInterGraph = false;
      return sourceGraph.add(newEdge, sourceNode, targetNode);
    } else {
      newEdge.isInterGraph = true;

      // set source and target
      newEdge.source = sourceNode;
      newEdge.target = targetNode;

      // add edge to inter-graph edge list
      if (this.edges.indexOf(newEdge) > -1) {
        throw "Edge already in inter-graph edge list!";
      }

      this.edges.push(newEdge);

      // add edge to source and target incidency lists
      if (!(newEdge.source != null && newEdge.target != null)) {
        throw "Edge source and/or target is null!";
      }

      if (!(newEdge.source.edges.indexOf(newEdge) == -1 && newEdge.target.edges.indexOf(newEdge) == -1)) {
        throw "Edge already in source and/or target incidency list!";
      }

      newEdge.source.edges.push(newEdge);
      newEdge.target.edges.push(newEdge);

      return newEdge;
    }
  }
};

LGraphManager.prototype.remove = function (lObj) {
  if (lObj instanceof LGraph) {
    var graph = lObj;
    if (graph.getGraphManager() != this) {
      throw "Graph not in this graph mgr";
    }
    if (!(graph == this.rootGraph || graph.parent != null && graph.parent.graphManager == this)) {
      throw "Invalid parent node!";
    }

    // first the edges (make a copy to do it safely)
    var edgesToBeRemoved = [];

    edgesToBeRemoved = edgesToBeRemoved.concat(graph.getEdges());

    var edge;
    var s = edgesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      edge = edgesToBeRemoved[i];
      graph.remove(edge);
    }

    // then the nodes (make a copy to do it safely)
    var nodesToBeRemoved = [];

    nodesToBeRemoved = nodesToBeRemoved.concat(graph.getNodes());

    var node;
    s = nodesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      node = nodesToBeRemoved[i];
      graph.remove(node);
    }

    // check if graph is the root
    if (graph == this.rootGraph) {
      this.setRootGraph(null);
    }

    // now remove the graph itself
    var index = this.graphs.indexOf(graph);
    this.graphs.splice(index, 1);

    // also reset the parent of the graph
    graph.parent = null;
  } else if (lObj instanceof LEdge) {
    edge = lObj;
    if (edge == null) {
      throw "Edge is null!";
    }
    if (!edge.isInterGraph) {
      throw "Not an inter-graph edge!";
    }
    if (!(edge.source != null && edge.target != null)) {
      throw "Source and/or target is null!";
    }

    // remove edge from source and target nodes' incidency lists

    if (!(edge.source.edges.indexOf(edge) != -1 && edge.target.edges.indexOf(edge) != -1)) {
      throw "Source and/or target doesn't know this edge!";
    }

    var index = edge.source.edges.indexOf(edge);
    edge.source.edges.splice(index, 1);
    index = edge.target.edges.indexOf(edge);
    edge.target.edges.splice(index, 1);

    // remove edge from owner graph manager's inter-graph edge list

    if (!(edge.source.owner != null && edge.source.owner.getGraphManager() != null)) {
      throw "Edge owner graph or owner graph manager is null!";
    }
    if (edge.source.owner.getGraphManager().edges.indexOf(edge) == -1) {
      throw "Not in owner graph manager's edge list!";
    }

    var index = edge.source.owner.getGraphManager().edges.indexOf(edge);
    edge.source.owner.getGraphManager().edges.splice(index, 1);
  }
};

LGraphManager.prototype.updateBounds = function () {
  this.rootGraph.updateBounds(true);
};

LGraphManager.prototype.getGraphs = function () {
  return this.graphs;
};

LGraphManager.prototype.getAllNodes = function () {
  if (this.allNodes == null) {
    var nodeList = [];
    var graphs = this.getGraphs();
    var s = graphs.length;
    for (var i = 0; i < s; i++) {
      nodeList = nodeList.concat(graphs[i].getNodes());
    }
    this.allNodes = nodeList;
  }
  return this.allNodes;
};

LGraphManager.prototype.resetAllNodes = function () {
  this.allNodes = null;
};

LGraphManager.prototype.resetAllEdges = function () {
  this.allEdges = null;
};

LGraphManager.prototype.resetAllNodesToApplyGravitation = function () {
  this.allNodesToApplyGravitation = null;
};

LGraphManager.prototype.getAllEdges = function () {
  if (this.allEdges == null) {
    var edgeList = [];
    var graphs = this.getGraphs();
    var s = graphs.length;
    for (var i = 0; i < graphs.length; i++) {
      edgeList = edgeList.concat(graphs[i].getEdges());
    }

    edgeList = edgeList.concat(this.edges);

    this.allEdges = edgeList;
  }
  return this.allEdges;
};

LGraphManager.prototype.getAllNodesToApplyGravitation = function () {
  return this.allNodesToApplyGravitation;
};

LGraphManager.prototype.setAllNodesToApplyGravitation = function (nodeList) {
  if (this.allNodesToApplyGravitation != null) {
    throw "assert failed";
  }

  this.allNodesToApplyGravitation = nodeList;
};

LGraphManager.prototype.getRoot = function () {
  return this.rootGraph;
};

LGraphManager.prototype.setRootGraph = function (graph) {
  if (graph.getGraphManager() != this) {
    throw "Root not in this graph mgr!";
  }

  this.rootGraph = graph;
  // root graph must have a root node associated with it for convenience
  if (graph.parent == null) {
    graph.parent = this.layout.newNode("Root node");
  }
};

LGraphManager.prototype.getLayout = function () {
  return this.layout;
};

LGraphManager.prototype.isOneAncestorOfOther = function (firstNode, secondNode) {
  if (!(firstNode != null && secondNode != null)) {
    throw "assert failed";
  }

  if (firstNode == secondNode) {
    return true;
  }
  // Is second node an ancestor of the first one?
  var ownerGraph = firstNode.getOwner();
  var parentNode;

  do {
    parentNode = ownerGraph.getParent();

    if (parentNode == null) {
      break;
    }

    if (parentNode == secondNode) {
      return true;
    }

    ownerGraph = parentNode.getOwner();
    if (ownerGraph == null) {
      break;
    }
  } while (true);
  // Is first node an ancestor of the second one?
  ownerGraph = secondNode.getOwner();

  do {
    parentNode = ownerGraph.getParent();

    if (parentNode == null) {
      break;
    }

    if (parentNode == firstNode) {
      return true;
    }

    ownerGraph = parentNode.getOwner();
    if (ownerGraph == null) {
      break;
    }
  } while (true);

  return false;
};

LGraphManager.prototype.calcLowestCommonAncestors = function () {
  var edge;
  var sourceNode;
  var targetNode;
  var sourceAncestorGraph;
  var targetAncestorGraph;

  var edges = this.getAllEdges();
  var s = edges.length;
  for (var i = 0; i < s; i++) {
    edge = edges[i];

    sourceNode = edge.source;
    targetNode = edge.target;
    edge.lca = null;
    edge.sourceInLca = sourceNode;
    edge.targetInLca = targetNode;

    if (sourceNode == targetNode) {
      edge.lca = sourceNode.getOwner();
      continue;
    }

    sourceAncestorGraph = sourceNode.getOwner();

    while (edge.lca == null) {
      edge.targetInLca = targetNode;
      targetAncestorGraph = targetNode.getOwner();

      while (edge.lca == null) {
        if (targetAncestorGraph == sourceAncestorGraph) {
          edge.lca = targetAncestorGraph;
          break;
        }

        if (targetAncestorGraph == this.rootGraph) {
          break;
        }

        if (edge.lca != null) {
          throw "assert failed";
        }
        edge.targetInLca = targetAncestorGraph.getParent();
        targetAncestorGraph = edge.targetInLca.getOwner();
      }

      if (sourceAncestorGraph == this.rootGraph) {
        break;
      }

      if (edge.lca == null) {
        edge.sourceInLca = sourceAncestorGraph.getParent();
        sourceAncestorGraph = edge.sourceInLca.getOwner();
      }
    }

    if (edge.lca == null) {
      throw "assert failed";
    }
  }
};

LGraphManager.prototype.calcLowestCommonAncestor = function (firstNode, secondNode) {
  if (firstNode == secondNode) {
    return firstNode.getOwner();
  }
  var firstOwnerGraph = firstNode.getOwner();

  do {
    if (firstOwnerGraph == null) {
      break;
    }
    var secondOwnerGraph = secondNode.getOwner();

    do {
      if (secondOwnerGraph == null) {
        break;
      }

      if (secondOwnerGraph == firstOwnerGraph) {
        return secondOwnerGraph;
      }
      secondOwnerGraph = secondOwnerGraph.getParent().getOwner();
    } while (true);

    firstOwnerGraph = firstOwnerGraph.getParent().getOwner();
  } while (true);

  return firstOwnerGraph;
};

LGraphManager.prototype.calcInclusionTreeDepths = function (graph, depth) {
  if (graph == null && depth == null) {
    graph = this.rootGraph;
    depth = 1;
  }
  var node;

  var nodes = graph.getNodes();
  var s = nodes.length;
  for (var i = 0; i < s; i++) {
    node = nodes[i];
    node.inclusionTreeDepth = depth;

    if (node.child != null) {
      this.calcInclusionTreeDepths(node.child, depth + 1);
    }
  }
};

LGraphManager.prototype.includesInvalidEdge = function () {
  var edge;

  var s = this.edges.length;
  for (var i = 0; i < s; i++) {
    edge = this.edges[i];

    if (this.isOneAncestorOfOther(edge.source, edge.target)) {
      return true;
    }
  }
  return false;
};

module.exports = LGraphManager;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var LGraphObject = __webpack_require__(8);
var IGeometry = __webpack_require__(9);
var IMath = __webpack_require__(10);

function LEdge(source, target, vEdge) {
  LGraphObject.call(this, vEdge);

  this.isOverlapingSourceAndTarget = false;
  this.vGraphObject = vEdge;
  this.bendpoints = [];
  this.source = source;
  this.target = target;
}

LEdge.prototype = Object.create(LGraphObject.prototype);

for (var prop in LGraphObject) {
  LEdge[prop] = LGraphObject[prop];
}

LEdge.prototype.getSource = function () {
  return this.source;
};

LEdge.prototype.getTarget = function () {
  return this.target;
};

LEdge.prototype.isInterGraph = function () {
  return this.isInterGraph;
};

LEdge.prototype.getLength = function () {
  return this.length;
};

LEdge.prototype.isOverlapingSourceAndTarget = function () {
  return this.isOverlapingSourceAndTarget;
};

LEdge.prototype.getBendpoints = function () {
  return this.bendpoints;
};

LEdge.prototype.getLca = function () {
  return this.lca;
};

LEdge.prototype.getSourceInLca = function () {
  return this.sourceInLca;
};

LEdge.prototype.getTargetInLca = function () {
  return this.targetInLca;
};

LEdge.prototype.getOtherEnd = function (node) {
  if (this.source === node) {
    return this.target;
  } else if (this.target === node) {
    return this.source;
  } else {
    throw "Node is not incident with this edge";
  }
};

LEdge.prototype.getOtherEndInGraph = function (node, graph) {
  var otherEnd = this.getOtherEnd(node);
  var root = graph.getGraphManager().getRoot();

  while (true) {
    if (otherEnd.getOwner() == graph) {
      return otherEnd;
    }

    if (otherEnd.getOwner() == root) {
      break;
    }

    otherEnd = otherEnd.getOwner().getParent();
  }

  return null;
};

LEdge.prototype.updateLength = function () {
  var clipPointCoordinates = new Array(4);

  this.isOverlapingSourceAndTarget = IGeometry.getIntersection(this.target.getRect(), this.source.getRect(), clipPointCoordinates);

  if (!this.isOverlapingSourceAndTarget) {
    this.lengthX = clipPointCoordinates[0] - clipPointCoordinates[2];
    this.lengthY = clipPointCoordinates[1] - clipPointCoordinates[3];

    if (Math.abs(this.lengthX) < 1.0) {
      this.lengthX = IMath.sign(this.lengthX);
    }

    if (Math.abs(this.lengthY) < 1.0) {
      this.lengthY = IMath.sign(this.lengthY);
    }

    this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
  }
};

LEdge.prototype.updateLengthSimple = function () {
  this.lengthX = this.target.getCenterX() - this.source.getCenterX();
  this.lengthY = this.target.getCenterY() - this.source.getCenterY();

  if (Math.abs(this.lengthX) < 1.0) {
    this.lengthX = IMath.sign(this.lengthX);
  }

  if (Math.abs(this.lengthY) < 1.0) {
    this.lengthY = IMath.sign(this.lengthY);
  }

  this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
};

module.exports = LEdge;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function LGraphObject(vGraphObject) {
  this.vGraphObject = vGraphObject;
}

module.exports = LGraphObject;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function IGeometry() {}

IGeometry.calcSeparationAmount = function (rectA, rectB, overlapAmount, separationBuffer) {
  if (!rectA.intersects(rectB)) {
    throw "assert failed";
  }
  var directions = new Array(2);
  IGeometry.decideDirectionsForOverlappingNodes(rectA, rectB, directions);
  overlapAmount[0] = Math.min(rectA.getRight(), rectB.getRight()) - Math.max(rectA.x, rectB.x);
  overlapAmount[1] = Math.min(rectA.getBottom(), rectB.getBottom()) - Math.max(rectA.y, rectB.y);
  // update the overlapping amounts for the following cases:
  if (rectA.getX() <= rectB.getX() && rectA.getRight() >= rectB.getRight()) {
    overlapAmount[0] += Math.min(rectB.getX() - rectA.getX(), rectA.getRight() - rectB.getRight());
  } else if (rectB.getX() <= rectA.getX() && rectB.getRight() >= rectA.getRight()) {
    overlapAmount[0] += Math.min(rectA.getX() - rectB.getX(), rectB.getRight() - rectA.getRight());
  }
  if (rectA.getY() <= rectB.getY() && rectA.getBottom() >= rectB.getBottom()) {
    overlapAmount[1] += Math.min(rectB.getY() - rectA.getY(), rectA.getBottom() - rectB.getBottom());
  } else if (rectB.getY() <= rectA.getY() && rectB.getBottom() >= rectA.getBottom()) {
    overlapAmount[1] += Math.min(rectA.getY() - rectB.getY(), rectB.getBottom() - rectA.getBottom());
  }

  // find slope of the line passes two centers
  var slope = Math.abs((rectB.getCenterY() - rectA.getCenterY()) / (rectB.getCenterX() - rectA.getCenterX()));
  // if centers are overlapped
  if (rectB.getCenterY() == rectA.getCenterY() && rectB.getCenterX() == rectA.getCenterX()) {
    // assume the slope is 1 (45 degree)
    slope = 1.0;
  }

  var moveByY = slope * overlapAmount[0];
  var moveByX = overlapAmount[1] / slope;
  if (overlapAmount[0] < moveByX) {
    moveByX = overlapAmount[0];
  } else {
    moveByY = overlapAmount[1];
  }
  // return half the amount so that if each rectangle is moved by these
  // amounts in opposite directions, overlap will be resolved
  overlapAmount[0] = -1 * directions[0] * (moveByX / 2 + separationBuffer);
  overlapAmount[1] = -1 * directions[1] * (moveByY / 2 + separationBuffer);
};

IGeometry.decideDirectionsForOverlappingNodes = function (rectA, rectB, directions) {
  if (rectA.getCenterX() < rectB.getCenterX()) {
    directions[0] = -1;
  } else {
    directions[0] = 1;
  }

  if (rectA.getCenterY() < rectB.getCenterY()) {
    directions[1] = -1;
  } else {
    directions[1] = 1;
  }
};

IGeometry.getIntersection2 = function (rectA, rectB, result) {
  //result[0-1] will contain clipPoint of rectA, result[2-3] will contain clipPoint of rectB
  var p1x = rectA.getCenterX();
  var p1y = rectA.getCenterY();
  var p2x = rectB.getCenterX();
  var p2y = rectB.getCenterY();

  //if two rectangles intersect, then clipping points are centers
  if (rectA.intersects(rectB)) {
    result[0] = p1x;
    result[1] = p1y;
    result[2] = p2x;
    result[3] = p2y;
    return true;
  }
  //variables for rectA
  var topLeftAx = rectA.getX();
  var topLeftAy = rectA.getY();
  var topRightAx = rectA.getRight();
  var bottomLeftAx = rectA.getX();
  var bottomLeftAy = rectA.getBottom();
  var bottomRightAx = rectA.getRight();
  var halfWidthA = rectA.getWidthHalf();
  var halfHeightA = rectA.getHeightHalf();
  //variables for rectB
  var topLeftBx = rectB.getX();
  var topLeftBy = rectB.getY();
  var topRightBx = rectB.getRight();
  var bottomLeftBx = rectB.getX();
  var bottomLeftBy = rectB.getBottom();
  var bottomRightBx = rectB.getRight();
  var halfWidthB = rectB.getWidthHalf();
  var halfHeightB = rectB.getHeightHalf();
  //flag whether clipping points are found
  var clipPointAFound = false;
  var clipPointBFound = false;

  // line is vertical
  if (p1x == p2x) {
    if (p1y > p2y) {
      result[0] = p1x;
      result[1] = topLeftAy;
      result[2] = p2x;
      result[3] = bottomLeftBy;
      return false;
    } else if (p1y < p2y) {
      result[0] = p1x;
      result[1] = bottomLeftAy;
      result[2] = p2x;
      result[3] = topLeftBy;
      return false;
    } else {
      //not line, return null;
    }
  }
  // line is horizontal
  else if (p1y == p2y) {
      if (p1x > p2x) {
        result[0] = topLeftAx;
        result[1] = p1y;
        result[2] = topRightBx;
        result[3] = p2y;
        return false;
      } else if (p1x < p2x) {
        result[0] = topRightAx;
        result[1] = p1y;
        result[2] = topLeftBx;
        result[3] = p2y;
        return false;
      } else {
        //not valid line, return null;
      }
    } else {
      //slopes of rectA's and rectB's diagonals
      var slopeA = rectA.height / rectA.width;
      var slopeB = rectB.height / rectB.width;

      //slope of line between center of rectA and center of rectB
      var slopePrime = (p2y - p1y) / (p2x - p1x);
      var cardinalDirectionA;
      var cardinalDirectionB;
      var tempPointAx;
      var tempPointAy;
      var tempPointBx;
      var tempPointBy;

      //determine whether clipping point is the corner of nodeA
      if (-slopeA == slopePrime) {
        if (p1x > p2x) {
          result[0] = bottomLeftAx;
          result[1] = bottomLeftAy;
          clipPointAFound = true;
        } else {
          result[0] = topRightAx;
          result[1] = topLeftAy;
          clipPointAFound = true;
        }
      } else if (slopeA == slopePrime) {
        if (p1x > p2x) {
          result[0] = topLeftAx;
          result[1] = topLeftAy;
          clipPointAFound = true;
        } else {
          result[0] = bottomRightAx;
          result[1] = bottomLeftAy;
          clipPointAFound = true;
        }
      }

      //determine whether clipping point is the corner of nodeB
      if (-slopeB == slopePrime) {
        if (p2x > p1x) {
          result[2] = bottomLeftBx;
          result[3] = bottomLeftBy;
          clipPointBFound = true;
        } else {
          result[2] = topRightBx;
          result[3] = topLeftBy;
          clipPointBFound = true;
        }
      } else if (slopeB == slopePrime) {
        if (p2x > p1x) {
          result[2] = topLeftBx;
          result[3] = topLeftBy;
          clipPointBFound = true;
        } else {
          result[2] = bottomRightBx;
          result[3] = bottomLeftBy;
          clipPointBFound = true;
        }
      }

      //if both clipping points are corners
      if (clipPointAFound && clipPointBFound) {
        return false;
      }

      //determine Cardinal Direction of rectangles
      if (p1x > p2x) {
        if (p1y > p2y) {
          cardinalDirectionA = IGeometry.getCardinalDirection(slopeA, slopePrime, 4);
          cardinalDirectionB = IGeometry.getCardinalDirection(slopeB, slopePrime, 2);
        } else {
          cardinalDirectionA = IGeometry.getCardinalDirection(-slopeA, slopePrime, 3);
          cardinalDirectionB = IGeometry.getCardinalDirection(-slopeB, slopePrime, 1);
        }
      } else {
        if (p1y > p2y) {
          cardinalDirectionA = IGeometry.getCardinalDirection(-slopeA, slopePrime, 1);
          cardinalDirectionB = IGeometry.getCardinalDirection(-slopeB, slopePrime, 3);
        } else {
          cardinalDirectionA = IGeometry.getCardinalDirection(slopeA, slopePrime, 2);
          cardinalDirectionB = IGeometry.getCardinalDirection(slopeB, slopePrime, 4);
        }
      }
      //calculate clipping Point if it is not found before
      if (!clipPointAFound) {
        switch (cardinalDirectionA) {
          case 1:
            tempPointAy = topLeftAy;
            tempPointAx = p1x + -halfHeightA / slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 2:
            tempPointAx = bottomRightAx;
            tempPointAy = p1y + halfWidthA * slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 3:
            tempPointAy = bottomLeftAy;
            tempPointAx = p1x + halfHeightA / slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 4:
            tempPointAx = bottomLeftAx;
            tempPointAy = p1y + -halfWidthA * slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
        }
      }
      if (!clipPointBFound) {
        switch (cardinalDirectionB) {
          case 1:
            tempPointBy = topLeftBy;
            tempPointBx = p2x + -halfHeightB / slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 2:
            tempPointBx = bottomRightBx;
            tempPointBy = p2y + halfWidthB * slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 3:
            tempPointBy = bottomLeftBy;
            tempPointBx = p2x + halfHeightB / slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 4:
            tempPointBx = bottomLeftBx;
            tempPointBy = p2y + -halfWidthB * slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
        }
      }
    }
  return false;
};

IGeometry.getCardinalDirection = function (slope, slopePrime, line) {
  if (slope > slopePrime) {
    return line;
  } else {
    return 1 + line % 4;
  }
};

IGeometry.getIntersection = function (s1, s2, f1, f2) {
  if (f2 == null) {
    return IGeometry.getIntersection2(s1, s2, f1);
  }
  var x1 = s1.x;
  var y1 = s1.y;
  var x2 = s2.x;
  var y2 = s2.y;
  var x3 = f1.x;
  var y3 = f1.y;
  var x4 = f2.x;
  var y4 = f2.y;
  var x, y; // intersection point
  var a1, a2, b1, b2, c1, c2; // coefficients of line eqns.
  var denom;

  a1 = y2 - y1;
  b1 = x1 - x2;
  c1 = x2 * y1 - x1 * y2; // { a1*x + b1*y + c1 = 0 is line 1 }

  a2 = y4 - y3;
  b2 = x3 - x4;
  c2 = x4 * y3 - x3 * y4; // { a2*x + b2*y + c2 = 0 is line 2 }

  denom = a1 * b2 - a2 * b1;

  if (denom == 0) {
    return null;
  }

  x = (b1 * c2 - b2 * c1) / denom;
  y = (a2 * c1 - a1 * c2) / denom;

  return new Point(x, y);
};

// -----------------------------------------------------------------------------
// Section: Class Constants
// -----------------------------------------------------------------------------
/**
 * Some useful pre-calculated constants
 */
IGeometry.HALF_PI = 0.5 * Math.PI;
IGeometry.ONE_AND_HALF_PI = 1.5 * Math.PI;
IGeometry.TWO_PI = 2.0 * Math.PI;
IGeometry.THREE_PI = 3.0 * Math.PI;

module.exports = IGeometry;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function IMath() {}

/**
 * This method returns the sign of the input value.
 */
IMath.sign = function (value) {
  if (value > 0) {
    return 1;
  } else if (value < 0) {
    return -1;
  } else {
    return 0;
  }
};

IMath.floor = function (value) {
  return value < 0 ? Math.ceil(value) : Math.floor(value);
};

IMath.ceil = function (value) {
  return value < 0 ? Math.floor(value) : Math.ceil(value);
};

module.exports = IMath;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var LGraphObject = __webpack_require__(8);
var Integer = __webpack_require__(12);
var LayoutConstants = __webpack_require__(3);
var LGraphManager = __webpack_require__(6);
var LNode = __webpack_require__(13);
var LEdge = __webpack_require__(7);
var RectangleD = __webpack_require__(14);
var Point = __webpack_require__(18);
var LinkedList = __webpack_require__(19);

function LGraph(parent, obj2, vGraph) {
  LGraphObject.call(this, vGraph);
  this.estimatedSize = Integer.MIN_VALUE;
  this.margin = LayoutConstants.DEFAULT_GRAPH_MARGIN;
  this.edges = [];
  this.nodes = [];
  this.isConnected = false;
  this.parent = parent;

  if (obj2 != null && obj2 instanceof LGraphManager) {
    this.graphManager = obj2;
  } else if (obj2 != null && obj2 instanceof Layout) {
    this.graphManager = obj2.graphManager;
  }
}

LGraph.prototype = Object.create(LGraphObject.prototype);
for (var prop in LGraphObject) {
  LGraph[prop] = LGraphObject[prop];
}

LGraph.prototype.getNodes = function () {
  return this.nodes;
};

LGraph.prototype.getEdges = function () {
  return this.edges;
};

LGraph.prototype.getGraphManager = function () {
  return this.graphManager;
};

LGraph.prototype.getParent = function () {
  return this.parent;
};

LGraph.prototype.getLeft = function () {
  return this.left;
};

LGraph.prototype.getRight = function () {
  return this.right;
};

LGraph.prototype.getTop = function () {
  return this.top;
};

LGraph.prototype.getBottom = function () {
  return this.bottom;
};

LGraph.prototype.isConnected = function () {
  return this.isConnected;
};

LGraph.prototype.add = function (obj1, sourceNode, targetNode) {
  if (sourceNode == null && targetNode == null) {
    var newNode = obj1;
    if (this.graphManager == null) {
      throw "Graph has no graph mgr!";
    }
    if (this.getNodes().indexOf(newNode) > -1) {
      throw "Node already in graph!";
    }
    newNode.owner = this;
    this.getNodes().push(newNode);

    return newNode;
  } else {
    var newEdge = obj1;
    if (!(this.getNodes().indexOf(sourceNode) > -1 && this.getNodes().indexOf(targetNode) > -1)) {
      throw "Source or target not in graph!";
    }

    if (!(sourceNode.owner == targetNode.owner && sourceNode.owner == this)) {
      throw "Both owners must be this graph!";
    }

    if (sourceNode.owner != targetNode.owner) {
      return null;
    }

    // set source and target
    newEdge.source = sourceNode;
    newEdge.target = targetNode;

    // set as intra-graph edge
    newEdge.isInterGraph = false;

    // add to graph edge list
    this.getEdges().push(newEdge);

    // add to incidency lists
    sourceNode.edges.push(newEdge);

    if (targetNode != sourceNode) {
      targetNode.edges.push(newEdge);
    }

    return newEdge;
  }
};

LGraph.prototype.remove = function (obj) {
  var node = obj;
  if (obj instanceof LNode) {
    if (node == null) {
      throw "Node is null!";
    }
    if (!(node.owner != null && node.owner == this)) {
      throw "Owner graph is invalid!";
    }
    if (this.graphManager == null) {
      throw "Owner graph manager is invalid!";
    }
    // remove incident edges first (make a copy to do it safely)
    var edgesToBeRemoved = node.edges.slice();
    var edge;
    var s = edgesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      edge = edgesToBeRemoved[i];

      if (edge.isInterGraph) {
        this.graphManager.remove(edge);
      } else {
        edge.source.owner.remove(edge);
      }
    }

    // now the node itself
    var index = this.nodes.indexOf(node);
    if (index == -1) {
      throw "Node not in owner node list!";
    }

    this.nodes.splice(index, 1);
  } else if (obj instanceof LEdge) {
    var edge = obj;
    if (edge == null) {
      throw "Edge is null!";
    }
    if (!(edge.source != null && edge.target != null)) {
      throw "Source and/or target is null!";
    }
    if (!(edge.source.owner != null && edge.target.owner != null && edge.source.owner == this && edge.target.owner == this)) {
      throw "Source and/or target owner is invalid!";
    }

    var sourceIndex = edge.source.edges.indexOf(edge);
    var targetIndex = edge.target.edges.indexOf(edge);
    if (!(sourceIndex > -1 && targetIndex > -1)) {
      throw "Source and/or target doesn't know this edge!";
    }

    edge.source.edges.splice(sourceIndex, 1);

    if (edge.target != edge.source) {
      edge.target.edges.splice(targetIndex, 1);
    }

    var index = edge.source.owner.getEdges().indexOf(edge);
    if (index == -1) {
      throw "Not in owner's edge list!";
    }

    edge.source.owner.getEdges().splice(index, 1);
  }
};

LGraph.prototype.updateLeftTop = function () {
  var top = Integer.MAX_VALUE;
  var left = Integer.MAX_VALUE;
  var nodeTop;
  var nodeLeft;
  var margin;

  var nodes = this.getNodes();
  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    nodeTop = lNode.getTop();
    nodeLeft = lNode.getLeft();

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (left > nodeLeft) {
      left = nodeLeft;
    }
  }

  // Do we have any nodes in this graph?
  if (top == Integer.MAX_VALUE) {
    return null;
  }

  if (nodes[0].getParent().paddingLeft != undefined) {
    margin = nodes[0].getParent().paddingLeft;
  } else {
    margin = this.margin;
  }

  this.left = left - margin;
  this.top = top - margin;

  // Apply the margins and return the result
  return new Point(this.left, this.top);
};

LGraph.prototype.updateBounds = function (recursive) {
  // calculate bounds
  var left = Integer.MAX_VALUE;
  var right = -Integer.MAX_VALUE;
  var top = Integer.MAX_VALUE;
  var bottom = -Integer.MAX_VALUE;
  var nodeLeft;
  var nodeRight;
  var nodeTop;
  var nodeBottom;
  var margin;

  var nodes = this.nodes;
  var s = nodes.length;
  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];

    if (recursive && lNode.child != null) {
      lNode.updateBounds();
    }
    nodeLeft = lNode.getLeft();
    nodeRight = lNode.getRight();
    nodeTop = lNode.getTop();
    nodeBottom = lNode.getBottom();

    if (left > nodeLeft) {
      left = nodeLeft;
    }

    if (right < nodeRight) {
      right = nodeRight;
    }

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (bottom < nodeBottom) {
      bottom = nodeBottom;
    }
  }

  var boundingRect = new RectangleD(left, top, right - left, bottom - top);
  if (left == Integer.MAX_VALUE) {
    this.left = this.parent.getLeft();
    this.right = this.parent.getRight();
    this.top = this.parent.getTop();
    this.bottom = this.parent.getBottom();
  }

  if (nodes[0].getParent().paddingLeft != undefined) {
    margin = nodes[0].getParent().paddingLeft;
  } else {
    margin = this.margin;
  }

  this.left = boundingRect.x - margin;
  this.right = boundingRect.x + boundingRect.width + margin;
  this.top = boundingRect.y - margin;
  this.bottom = boundingRect.y + boundingRect.height + margin;
};

LGraph.calculateBounds = function (nodes) {
  var left = Integer.MAX_VALUE;
  var right = -Integer.MAX_VALUE;
  var top = Integer.MAX_VALUE;
  var bottom = -Integer.MAX_VALUE;
  var nodeLeft;
  var nodeRight;
  var nodeTop;
  var nodeBottom;

  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    nodeLeft = lNode.getLeft();
    nodeRight = lNode.getRight();
    nodeTop = lNode.getTop();
    nodeBottom = lNode.getBottom();

    if (left > nodeLeft) {
      left = nodeLeft;
    }

    if (right < nodeRight) {
      right = nodeRight;
    }

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (bottom < nodeBottom) {
      bottom = nodeBottom;
    }
  }

  var boundingRect = new RectangleD(left, top, right - left, bottom - top);

  return boundingRect;
};

LGraph.prototype.getInclusionTreeDepth = function () {
  if (this == this.graphManager.getRoot()) {
    return 1;
  } else {
    return this.parent.getInclusionTreeDepth();
  }
};

LGraph.prototype.getEstimatedSize = function () {
  if (this.estimatedSize == Integer.MIN_VALUE) {
    throw "assert failed";
  }
  return this.estimatedSize;
};

LGraph.prototype.calcEstimatedSize = function () {
  var size = 0;
  var nodes = this.nodes;
  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    size += lNode.calcEstimatedSize();
  }

  if (size == 0) {
    this.estimatedSize = LayoutConstants.EMPTY_COMPOUND_NODE_SIZE;
  } else {
    this.estimatedSize = size / Math.sqrt(this.nodes.length);
  }

  return this.estimatedSize;
};

LGraph.prototype.updateConnected = function () {
  var self = this;
  if (this.nodes.length == 0) {
    this.isConnected = true;
    return;
  }

  var queue = new LinkedList();
  var visited = new Set();
  var currentNode = this.nodes[0];
  var neighborEdges;
  var currentNeighbor;
  var childrenOfNode = currentNode.withChildren();
  childrenOfNode.forEach(function (node) {
    queue.push(node);
    visited.add(node);
  });

  while (queue.length !== 0) {
    currentNode = queue.shift();

    // Traverse all neighbors of this node
    neighborEdges = currentNode.getEdges();
    var size = neighborEdges.length;
    for (var i = 0; i < size; i++) {
      var neighborEdge = neighborEdges[i];
      currentNeighbor = neighborEdge.getOtherEndInGraph(currentNode, this);

      // Add unvisited neighbors to the list to visit
      if (currentNeighbor != null && !visited.has(currentNeighbor)) {
        var childrenOfNeighbor = currentNeighbor.withChildren();

        childrenOfNeighbor.forEach(function (node) {
          queue.push(node);
          visited.add(node);
        });
      }
    }
  }

  this.isConnected = false;

  if (visited.size >= this.nodes.length) {
    var noOfVisitedInThisGraph = 0;

    visited.forEach(function (visitedNode) {
      if (visitedNode.owner == self) {
        noOfVisitedInThisGraph++;
      }
    });

    if (noOfVisitedInThisGraph == this.nodes.length) {
      this.isConnected = true;
    }
  }
};

module.exports = LGraph;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function Integer() {}

Integer.MAX_VALUE = 2147483647;
Integer.MIN_VALUE = -2147483648;

module.exports = Integer;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var LGraphObject = __webpack_require__(8);
var Integer = __webpack_require__(12);
var RectangleD = __webpack_require__(14);
var LayoutConstants = __webpack_require__(3);
var RandomSeed = __webpack_require__(15);
var PointD = __webpack_require__(16);
var HashSet = __webpack_require__(17);

function LNode(gm, loc, size, vNode) {
  //Alternative constructor 1 : LNode(LGraphManager gm, Point loc, Dimension size, Object vNode)
  if (size == null && vNode == null) {
    vNode = loc;
  }

  LGraphObject.call(this, vNode);

  //Alternative constructor 2 : LNode(Layout layout, Object vNode)
  if (gm.graphManager != null) gm = gm.graphManager;

  this.estimatedSize = Integer.MIN_VALUE;
  this.inclusionTreeDepth = Integer.MAX_VALUE;
  this.vGraphObject = vNode;
  this.edges = [];
  this.graphManager = gm;

  if (size != null && loc != null) this.rect = new RectangleD(loc.x, loc.y, size.width, size.height);else this.rect = new RectangleD();
}

LNode.prototype = Object.create(LGraphObject.prototype);
for (var prop in LGraphObject) {
  LNode[prop] = LGraphObject[prop];
}

LNode.prototype.getEdges = function () {
  return this.edges;
};

LNode.prototype.getChild = function () {
  return this.child;
};

LNode.prototype.getOwner = function () {
  //  if (this.owner != null) {
  //    if (!(this.owner == null || this.owner.getNodes().indexOf(this) > -1)) {
  //      throw "assert failed";
  //    }
  //  }

  return this.owner;
};

LNode.prototype.getWidth = function () {
  return this.rect.width;
};

LNode.prototype.setWidth = function (width) {
  this.rect.width = width;
};

LNode.prototype.getHeight = function () {
  return this.rect.height;
};

LNode.prototype.setHeight = function (height) {
  this.rect.height = height;
};

LNode.prototype.getCenterX = function () {
  return this.rect.x + this.rect.width / 2;
};

LNode.prototype.getCenterY = function () {
  return this.rect.y + this.rect.height / 2;
};

LNode.prototype.getCenter = function () {
  return new PointD(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
};

LNode.prototype.getLocation = function () {
  return new PointD(this.rect.x, this.rect.y);
};

LNode.prototype.getRect = function () {
  return this.rect;
};

LNode.prototype.getDiagonal = function () {
  return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
};

LNode.prototype.setRect = function (upperLeft, dimension) {
  this.rect.x = upperLeft.x;
  this.rect.y = upperLeft.y;
  this.rect.width = dimension.width;
  this.rect.height = dimension.height;
};

LNode.prototype.setCenter = function (cx, cy) {
  this.rect.x = cx - this.rect.width / 2;
  this.rect.y = cy - this.rect.height / 2;
};

LNode.prototype.setLocation = function (x, y) {
  this.rect.x = x;
  this.rect.y = y;
};

LNode.prototype.moveBy = function (dx, dy) {
  this.rect.x += dx;
  this.rect.y += dy;
};

LNode.prototype.getEdgeListToNode = function (to) {
  var edgeList = [];
  var edge;
  var self = this;

  self.edges.forEach(function (edge) {

    if (edge.target == to) {
      if (edge.source != self) throw "Incorrect edge source!";

      edgeList.push(edge);
    }
  });

  return edgeList;
};

LNode.prototype.getEdgesBetween = function (other) {
  var edgeList = [];
  var edge;

  var self = this;
  self.edges.forEach(function (edge) {

    if (!(edge.source == self || edge.target == self)) throw "Incorrect edge source and/or target";

    if (edge.target == other || edge.source == other) {
      edgeList.push(edge);
    }
  });

  return edgeList;
};

LNode.prototype.getNeighborsList = function () {
  var neighbors = new HashSet();
  var edge;

  var self = this;
  self.edges.forEach(function (edge) {

    if (edge.source == self) {
      neighbors.add(edge.target);
    } else {
      if (edge.target != self) {
        throw "Incorrect incidency!";
      }

      neighbors.add(edge.source);
    }
  });

  return neighbors;
};

LNode.prototype.withChildren = function () {
  var withNeighborsList = new Set();
  var childNode;
  var children;

  withNeighborsList.add(this);

  if (this.child != null) {
    var nodes = this.child.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      childNode = nodes[i];
      children = childNode.withChildren();
      children.forEach(function (node) {
        withNeighborsList.add(node);
      });
    }
  }

  return withNeighborsList;
};

LNode.prototype.getNoOfChildren = function () {
  var noOfChildren = 0;
  var childNode;

  if (this.child == null) {
    noOfChildren = 1;
  } else {
    var nodes = this.child.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      childNode = nodes[i];

      noOfChildren += childNode.getNoOfChildren();
    }
  }

  if (noOfChildren == 0) {
    noOfChildren = 1;
  }
  return noOfChildren;
};

LNode.prototype.getEstimatedSize = function () {
  if (this.estimatedSize == Integer.MIN_VALUE) {
    throw "assert failed";
  }
  return this.estimatedSize;
};

LNode.prototype.calcEstimatedSize = function () {
  if (this.child == null) {
    return this.estimatedSize = (this.rect.width + this.rect.height) / 2;
  } else {
    this.estimatedSize = this.child.calcEstimatedSize();
    this.rect.width = this.estimatedSize;
    this.rect.height = this.estimatedSize;

    return this.estimatedSize;
  }
};

LNode.prototype.scatter = function () {
  var randomCenterX;
  var randomCenterY;

  var minX = -LayoutConstants.INITIAL_WORLD_BOUNDARY;
  var maxX = LayoutConstants.INITIAL_WORLD_BOUNDARY;
  randomCenterX = LayoutConstants.WORLD_CENTER_X + RandomSeed.nextDouble() * (maxX - minX) + minX;

  var minY = -LayoutConstants.INITIAL_WORLD_BOUNDARY;
  var maxY = LayoutConstants.INITIAL_WORLD_BOUNDARY;
  randomCenterY = LayoutConstants.WORLD_CENTER_Y + RandomSeed.nextDouble() * (maxY - minY) + minY;

  this.rect.x = randomCenterX;
  this.rect.y = randomCenterY;
};

LNode.prototype.updateBounds = function () {
  if (this.getChild() == null) {
    throw "assert failed";
  }
  if (this.getChild().getNodes().length != 0) {
    // wrap the children nodes by re-arranging the boundaries
    var childGraph = this.getChild();
    childGraph.updateBounds(true);

    this.rect.x = childGraph.getLeft();
    this.rect.y = childGraph.getTop();

    this.setWidth(childGraph.getRight() - childGraph.getLeft());
    this.setHeight(childGraph.getBottom() - childGraph.getTop());

    // Update compound bounds considering its label properties    
    if (LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS) {

      var width = childGraph.getRight() - childGraph.getLeft();
      var height = childGraph.getBottom() - childGraph.getTop();

      if (this.labelWidth > width) {
        this.rect.x -= (this.labelWidth - width) / 2;
        this.setWidth(this.labelWidth);
      }

      if (this.labelHeight > height) {
        if (this.labelPos == "center") {
          this.rect.y -= (this.labelHeight - height) / 2;
        } else if (this.labelPos == "top") {
          this.rect.y -= this.labelHeight - height;
        }
        this.setHeight(this.labelHeight);
      }
    }
  }
};

LNode.prototype.getInclusionTreeDepth = function () {
  if (this.inclusionTreeDepth == Integer.MAX_VALUE) {
    throw "assert failed";
  }
  return this.inclusionTreeDepth;
};

LNode.prototype.transform = function (trans) {
  var left = this.rect.x;

  if (left > LayoutConstants.WORLD_BOUNDARY) {
    left = LayoutConstants.WORLD_BOUNDARY;
  } else if (left < -LayoutConstants.WORLD_BOUNDARY) {
    left = -LayoutConstants.WORLD_BOUNDARY;
  }

  var top = this.rect.y;

  if (top > LayoutConstants.WORLD_BOUNDARY) {
    top = LayoutConstants.WORLD_BOUNDARY;
  } else if (top < -LayoutConstants.WORLD_BOUNDARY) {
    top = -LayoutConstants.WORLD_BOUNDARY;
  }

  var leftTop = new PointD(left, top);
  var vLeftTop = trans.inverseTransformPoint(leftTop);

  this.setLocation(vLeftTop.x, vLeftTop.y);
};

LNode.prototype.getLeft = function () {
  return this.rect.x;
};

LNode.prototype.getRight = function () {
  return this.rect.x + this.rect.width;
};

LNode.prototype.getTop = function () {
  return this.rect.y;
};

LNode.prototype.getBottom = function () {
  return this.rect.y + this.rect.height;
};

LNode.prototype.getParent = function () {
  if (this.owner == null) {
    return null;
  }

  return this.owner.getParent();
};

module.exports = LNode;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function RectangleD(x, y, width, height) {
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.height = 0;

  if (x != null && y != null && width != null && height != null) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

RectangleD.prototype.getX = function () {
  return this.x;
};

RectangleD.prototype.setX = function (x) {
  this.x = x;
};

RectangleD.prototype.getY = function () {
  return this.y;
};

RectangleD.prototype.setY = function (y) {
  this.y = y;
};

RectangleD.prototype.getWidth = function () {
  return this.width;
};

RectangleD.prototype.setWidth = function (width) {
  this.width = width;
};

RectangleD.prototype.getHeight = function () {
  return this.height;
};

RectangleD.prototype.setHeight = function (height) {
  this.height = height;
};

RectangleD.prototype.getRight = function () {
  return this.x + this.width;
};

RectangleD.prototype.getBottom = function () {
  return this.y + this.height;
};

RectangleD.prototype.intersects = function (a) {
  if (this.getRight() < a.x) {
    return false;
  }

  if (this.getBottom() < a.y) {
    return false;
  }

  if (a.getRight() < this.x) {
    return false;
  }

  if (a.getBottom() < this.y) {
    return false;
  }

  return true;
};

RectangleD.prototype.getCenterX = function () {
  return this.x + this.width / 2;
};

RectangleD.prototype.getMinX = function () {
  return this.getX();
};

RectangleD.prototype.getMaxX = function () {
  return this.getX() + this.width;
};

RectangleD.prototype.getCenterY = function () {
  return this.y + this.height / 2;
};

RectangleD.prototype.getMinY = function () {
  return this.getY();
};

RectangleD.prototype.getMaxY = function () {
  return this.getY() + this.height;
};

RectangleD.prototype.getWidthHalf = function () {
  return this.width / 2;
};

RectangleD.prototype.getHeightHalf = function () {
  return this.height / 2;
};

module.exports = RectangleD;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function RandomSeed() {}
RandomSeed.seed = 1;
RandomSeed.x = 0;

RandomSeed.nextDouble = function () {
  RandomSeed.x = Math.sin(RandomSeed.seed++) * 10000;
  return RandomSeed.x - Math.floor(RandomSeed.x);
};

module.exports = RandomSeed;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function PointD(x, y) {
  if (x == null && y == null) {
    this.x = 0;
    this.y = 0;
  } else {
    this.x = x;
    this.y = y;
  }
}

PointD.prototype.getX = function () {
  return this.x;
};

PointD.prototype.getY = function () {
  return this.y;
};

PointD.prototype.setX = function (x) {
  this.x = x;
};

PointD.prototype.setY = function (y) {
  this.y = y;
};

PointD.prototype.getDifference = function (pt) {
  return new DimensionD(this.x - pt.x, this.y - pt.y);
};

PointD.prototype.getCopy = function () {
  return new PointD(this.x, this.y);
};

PointD.prototype.translate = function (dim) {
  this.x += dim.width;
  this.y += dim.height;
  return this;
};

module.exports = PointD;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var UniqueIDGeneretor = __webpack_require__(5);

function HashSet() {
  this.set = {};
}
;

HashSet.prototype.add = function (obj) {
  var theId = UniqueIDGeneretor.createID(obj);
  if (!this.contains(theId)) this.set[theId] = obj;
};

HashSet.prototype.remove = function (obj) {
  delete this.set[UniqueIDGeneretor.createID(obj)];
};

HashSet.prototype.clear = function () {
  this.set = {};
};

HashSet.prototype.contains = function (obj) {
  return this.set[UniqueIDGeneretor.createID(obj)] == obj;
};

HashSet.prototype.isEmpty = function () {
  return this.size() === 0;
};

HashSet.prototype.size = function () {
  return Object.keys(this.set).length;
};

//concats this.set to the given list
HashSet.prototype.addAllTo = function (list) {
  var keys = Object.keys(this.set);
  var length = keys.length;
  for (var i = 0; i < length; i++) {
    list.push(this.set[keys[i]]);
  }
};

HashSet.prototype.size = function () {
  return Object.keys(this.set).length;
};

HashSet.prototype.addAll = function (list) {
  var s = list.length;
  for (var i = 0; i < s; i++) {
    var v = list[i];
    this.add(v);
  }
};

module.exports = HashSet;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/*
 *This class is the javascript implementation of the Point.java class in jdk
 */
function Point(x, y, p) {
  this.x = null;
  this.y = null;
  if (x == null && y == null && p == null) {
    this.x = 0;
    this.y = 0;
  } else if (typeof x == 'number' && typeof y == 'number' && p == null) {
    this.x = x;
    this.y = y;
  } else if (x.constructor.name == 'Point' && y == null && p == null) {
    p = x;
    this.x = p.x;
    this.y = p.y;
  }
}

Point.prototype.getX = function () {
  return this.x;
};

Point.prototype.getY = function () {
  return this.y;
};

Point.prototype.getLocation = function () {
  return new Point(this.x, this.y);
};

Point.prototype.setLocation = function (x, y, p) {
  if (x.constructor.name == 'Point' && y == null && p == null) {
    p = x;
    this.setLocation(p.x, p.y);
  } else if (typeof x == 'number' && typeof y == 'number' && p == null) {
    //if both parameters are integer just move (x,y) location
    if (parseInt(x) == x && parseInt(y) == y) {
      this.move(x, y);
    } else {
      this.x = Math.floor(x + 0.5);
      this.y = Math.floor(y + 0.5);
    }
  }
};

Point.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

Point.prototype.translate = function (dx, dy) {
  this.x += dx;
  this.y += dy;
};

Point.prototype.equals = function (obj) {
  if (obj.constructor.name == "Point") {
    var pt = obj;
    return this.x == pt.x && this.y == pt.y;
  }
  return this == obj;
};

Point.prototype.toString = function () {
  return new Point().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
};

module.exports = Point;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

const nodeFrom = value => ({ value, next: null, prev: null });

const add = (prev, node, next, list) => {
  if (prev !== null) {
    prev.next = node;
  } else {
    list.head = node;
  }

  if (next !== null) {
    next.prev = node;
  } else {
    list.tail = node;
  }

  node.prev = prev;
  node.next = next;

  list.length++;

  return node;
};

const remove = (node, list) => {
  let { prev, next } = node;

  if (prev !== null) {
    prev.next = next;
  } else {
    list.head = next;
  }

  if (next !== null) {
    next.prev = prev;
  } else {
    list.tail = prev;
  }

  node.prev = node.next = null;

  list.length--;

  return node;
};

class LinkedList {
  constructor(vals) {
    this.length = 0;
    this.head = null;
    this.tail = null;

    if (vals != null) {
      vals.forEach(v => this.push(v));
    }
  }

  size() {
    return this.length;
  }

  insertBefore(val, otherNode) {
    return add(otherNode.prev, nodeFrom(val), otherNode, this);
  }

  insertAfter(val, otherNode) {
    return add(otherNode, nodeFrom(val), otherNode.next, this);
  }

  insertNodeBefore(newNode, otherNode) {
    return add(otherNode.prev, newNode, otherNode, this);
  }

  insertNodeAfter(newNode, otherNode) {
    return add(otherNode, newNode, otherNode.next, this);
  }

  push(val) {
    return add(this.tail, nodeFrom(val), null, this);
  }

  unshift(val) {
    return add(null, nodeFrom(val), this.head, this);
  }

  remove(node) {
    return remove(node, this);
  }

  pop() {
    return remove(this.tail, this).value;
  }

  popNode() {
    return remove(this.tail, this);
  }

  shift() {
    return remove(this.head, this).value;
  }

  shiftNode() {
    return remove(this.head, this);
  }

  get_object_at(index) {
    if (index <= this.length()) {
      var i = 1;
      var current = this.head;
      while (i < index) {
        current = current.next;
        i++;
      }
      return current.value;
    }
  }

  set_object_at(index, value) {
    if (index <= this.length()) {
      var i = 1;
      var current = this.head;
      while (i < index) {
        current = current.next;
        i++;
      }
      current.value = value;
    }
  }
}

module.exports = LinkedList;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var PointD = __webpack_require__(16);

function Transform(x, y) {
  this.lworldOrgX = 0.0;
  this.lworldOrgY = 0.0;
  this.ldeviceOrgX = 0.0;
  this.ldeviceOrgY = 0.0;
  this.lworldExtX = 1.0;
  this.lworldExtY = 1.0;
  this.ldeviceExtX = 1.0;
  this.ldeviceExtY = 1.0;
}

Transform.prototype.getWorldOrgX = function () {
  return this.lworldOrgX;
};

Transform.prototype.setWorldOrgX = function (wox) {
  this.lworldOrgX = wox;
};

Transform.prototype.getWorldOrgY = function () {
  return this.lworldOrgY;
};

Transform.prototype.setWorldOrgY = function (woy) {
  this.lworldOrgY = woy;
};

Transform.prototype.getWorldExtX = function () {
  return this.lworldExtX;
};

Transform.prototype.setWorldExtX = function (wex) {
  this.lworldExtX = wex;
};

Transform.prototype.getWorldExtY = function () {
  return this.lworldExtY;
};

Transform.prototype.setWorldExtY = function (wey) {
  this.lworldExtY = wey;
};

/* Device related */

Transform.prototype.getDeviceOrgX = function () {
  return this.ldeviceOrgX;
};

Transform.prototype.setDeviceOrgX = function (dox) {
  this.ldeviceOrgX = dox;
};

Transform.prototype.getDeviceOrgY = function () {
  return this.ldeviceOrgY;
};

Transform.prototype.setDeviceOrgY = function (doy) {
  this.ldeviceOrgY = doy;
};

Transform.prototype.getDeviceExtX = function () {
  return this.ldeviceExtX;
};

Transform.prototype.setDeviceExtX = function (dex) {
  this.ldeviceExtX = dex;
};

Transform.prototype.getDeviceExtY = function () {
  return this.ldeviceExtY;
};

Transform.prototype.setDeviceExtY = function (dey) {
  this.ldeviceExtY = dey;
};

Transform.prototype.transformX = function (x) {
  var xDevice = 0.0;
  var worldExtX = this.lworldExtX;
  if (worldExtX != 0.0) {
    xDevice = this.ldeviceOrgX + (x - this.lworldOrgX) * this.ldeviceExtX / worldExtX;
  }

  return xDevice;
};

Transform.prototype.transformY = function (y) {
  var yDevice = 0.0;
  var worldExtY = this.lworldExtY;
  if (worldExtY != 0.0) {
    yDevice = this.ldeviceOrgY + (y - this.lworldOrgY) * this.ldeviceExtY / worldExtY;
  }

  return yDevice;
};

Transform.prototype.inverseTransformX = function (x) {
  var xWorld = 0.0;
  var deviceExtX = this.ldeviceExtX;
  if (deviceExtX != 0.0) {
    xWorld = this.lworldOrgX + (x - this.ldeviceOrgX) * this.lworldExtX / deviceExtX;
  }

  return xWorld;
};

Transform.prototype.inverseTransformY = function (y) {
  var yWorld = 0.0;
  var deviceExtY = this.ldeviceExtY;
  if (deviceExtY != 0.0) {
    yWorld = this.lworldOrgY + (y - this.ldeviceOrgY) * this.lworldExtY / deviceExtY;
  }
  return yWorld;
};

Transform.prototype.inverseTransformPoint = function (inPoint) {
  var outPoint = new PointD(this.inverseTransformX(inPoint.x), this.inverseTransformY(inPoint.y));
  return outPoint;
};

module.exports = Transform;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function Emitter() {
  this.listeners = [];
}

var p = Emitter.prototype;

p.addListener = function (event, callback) {
  this.listeners.push({
    event: event,
    callback: callback
  });
};

p.removeListener = function (event, callback) {
  for (var i = this.listeners.length; i >= 0; i--) {
    var l = this.listeners[i];

    if (l.event === event && l.callback === callback) {
      this.listeners.splice(i, 1);
    }
  }
};

p.emit = function (event, data) {
  for (var i = 0; i < this.listeners.length; i++) {
    var l = this.listeners[i];

    if (event === l.event) {
      l.callback(data);
    }
  }
};

module.exports = Emitter;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var LayoutConstants = __webpack_require__(3);

function FDLayoutConstants() {}

//FDLayoutConstants inherits static props in LayoutConstants
for (var prop in LayoutConstants) {
  FDLayoutConstants[prop] = LayoutConstants[prop];
}

FDLayoutConstants.MAX_ITERATIONS = 2500;

FDLayoutConstants.DEFAULT_EDGE_LENGTH = 50;
FDLayoutConstants.DEFAULT_SPRING_STRENGTH = 0.45;
FDLayoutConstants.DEFAULT_REPULSION_STRENGTH = 4500.0;
FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH = 0.4;
FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1.0;
FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8;
FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5;
FDLayoutConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true;
FDLayoutConstants.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true;
FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.5;
FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100.0;
FDLayoutConstants.MAX_NODE_DISPLACEMENT = FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3;
FDLayoutConstants.MIN_REPULSION_DIST = FDLayoutConstants.DEFAULT_EDGE_LENGTH / 10.0;
FDLayoutConstants.CONVERGENCE_CHECK_PERIOD = 100;
FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1;
FDLayoutConstants.MIN_EDGE_LENGTH = 1;
FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD = 10;

module.exports = FDLayoutConstants;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var LEdge = __webpack_require__(7);
var FDLayoutConstants = __webpack_require__(22);

function FDLayoutEdge(source, target, vEdge) {
  LEdge.call(this, source, target, vEdge);
  this.idealLength = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
}

FDLayoutEdge.prototype = Object.create(LEdge.prototype);

for (var prop in LEdge) {
  FDLayoutEdge[prop] = LEdge[prop];
}

module.exports = FDLayoutEdge;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var LNode = __webpack_require__(13);

function FDLayoutNode(gm, loc, size, vNode) {
  // alternative constructor is handled inside LNode
  LNode.call(this, gm, loc, size, vNode);
  //Spring, repulsion and gravitational forces acting on this node
  this.springForceX = 0;
  this.springForceY = 0;
  this.repulsionForceX = 0;
  this.repulsionForceY = 0;
  this.gravitationForceX = 0;
  this.gravitationForceY = 0;
  //Amount by which this node is to be moved in this iteration
  this.displacementX = 0;
  this.displacementY = 0;

  //Start and finish grid coordinates that this node is fallen into
  this.startX = 0;
  this.finishX = 0;
  this.startY = 0;
  this.finishY = 0;

  //Geometric neighbors of this node
  this.surrounding = [];
}

FDLayoutNode.prototype = Object.create(LNode.prototype);

for (var prop in LNode) {
  FDLayoutNode[prop] = LNode[prop];
}

FDLayoutNode.prototype.setGridCoordinates = function (_startX, _finishX, _startY, _finishY) {
  this.startX = _startX;
  this.finishX = _finishX;
  this.startY = _startY;
  this.finishY = _finishY;
};

module.exports = FDLayoutNode;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

function DimensionD(width, height) {
  this.width = 0;
  this.height = 0;
  if (width !== null && height !== null) {
    this.height = height;
    this.width = width;
  }
}

DimensionD.prototype.getWidth = function () {
  return this.width;
};

DimensionD.prototype.setWidth = function (width) {
  this.width = width;
};

DimensionD.prototype.getHeight = function () {
  return this.height;
};

DimensionD.prototype.setHeight = function (height) {
  this.height = height;
};

module.exports = DimensionD;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

const LinkedList = __webpack_require__(19);

function Quicksort() {}

Quicksort.get_object_at = function (list, i) {
    if (list instanceof Array) {
        return list[i];
    } else if (list instanceof LinkedList) {
        return list.get_object_at(i);
    }
};

Quicksort.set_object_at = function (list, i, value) {
    if (list instanceof Array) {
        list[i] = value;
    } else if (list instanceof LinkedList) {
        list.set_object_at(i, value);
    }
};

Quicksort.quicksort = function (list, comparison_fn) {

    // input must be an instance of LinkedList class or must be an array in order to sort
    if (!(list instanceof LinkedList || list instanceof Array)) {
        return;
    }

    var comparison_function = comparison_fn;

    if (comparison_function === undefined) {
        comparison_function = Quicksort.compare;
    }
    var end_index;

    if (list instanceof LinkedList) {
        end_index = list.size();
    } else if (list instanceof Array) {
        end_index = list.length - 1;
    }

    // Prevent empty lists or arrays.
    if (end_index >= 0) {
        Quicksort.quicksort_between_indices(list, 0, end_index, comparison_function);
    }
};

Quicksort.quicksort_between_indices = function (list, low, high, comparison_fn) {

    // input must be an instance of LinkedList class or must be an array in order to sort
    if (!(list instanceof LinkedList || list instanceof Array)) {
        return;
    }

    if (comparison_fn === undefined) {
        comparison_fn = Quicksort.compare;
    }

    var i = low;
    var j = high;
    var middleIndex = Math.floor((i + j) / 2);
    var middle = Quicksort.get_object_at(list, middleIndex);

    do {

        while (comparison_fn(Quicksort.get_object_at(list, i), middle)) {

            i++;
        }

        while (comparison_fn(middle, Quicksort.get_object_at(list, j))) {

            j--;
        }

        if (i <= j) {

            var temp = Quicksort.get_object_at(list, i);
            Quicksort.set_object_at(list, i, Quicksort.get_object_at(list, j));
            Quicksort.set_object_at(list, j, temp);
            i++;
            j--;
        }
    } while (i <= j);

    if (low < j) {

        Quicksort.quicksort_between_indices(list, low, j, comparison_fn);
    }

    if (high > i) {

        Quicksort.quicksort_between_indices(list, i, high, comparison_fn);
    }
};

// this function must be overriden for sorting different data types(e.g. string, integer etc.)
Quicksort.compare = function (a, b) {
    return b > a;
};

module.exports = Quicksort;

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var LayoutConstants = __webpack_require__(1).LayoutConstants;

function AVSDFConstants() {}

// AVSDFConstants inherits properties in LayoutConstants
for (var prop in LayoutConstants) {
    AVSDFConstants[prop] = LayoutConstants[prop];
}

AVSDFConstants.DEFAULT_NODE_SEPARATION = 60;

module.exports = AVSDFConstants;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This class implements data and functionality required for AVSDF layout per
 * edge.
 *

 * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
 */

let LEdge = __webpack_require__(1).LEdge;

// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

function AVSDFEdge(source, target, vEdge) {
    LEdge.call(this, source, target, vEdge);
}

AVSDFEdge.prototype = Object.create(LEdge.prototype);

for (let properties in LEdge) {
    AVSDFEdge[properties] = LEdge[properties];
}

// -----------------------------------------------------------------------------
// Section: Accessor Functions
// -----------------------------------------------------------------------------

// The function getOtherEnd returns the other end of this edge.
AVSDFEdge.prototype.getOtherEnd = function (node) {
    return LEdge.prototype.getOtherEnd(node);
};

// -----------------------------------------------------------------------------
// Section: Remaining Functions
// -----------------------------------------------------------------------------

// This function checks whether this edge crosses with the input edge. It
// returns false, if any of the vertices those edges are incident to are not
// yet placed on the circle.
AVSDFEdge.prototype.crossesWithEdge = function (otherEdge) {
    let self = this;
    let sourcePos = self.getSource().getIndex();
    let targetPos = self.getTarget().getIndex();
    let otherSourcePos = otherEdge.getSource().getIndex();
    let otherTargetPos = otherEdge.getTarget().getIndex();

    // if any of the vertices those two edges are not yet placed
    if (sourcePos === -1 || targetPos === -1 || otherSourcePos === -1 || otherTargetPos === -1) {
        return false;
    }

    let otherSourceDist = otherEdge.getSource().getCircDistWithTheNode(self.getSource());
    let otherTargetDist = otherEdge.getTarget().getCircDistWithTheNode(self.getSource());
    let thisTargetDist = self.getTarget().getCircDistWithTheNode(self.getSource());

    if (thisTargetDist < Math.max(otherSourceDist, otherTargetDist) && thisTargetDist > Math.min(otherSourceDist, otherTargetDist) && otherTargetDist !== 0 && otherSourceDist !== 0) {
        return true;
    }

    return false;
};

// This function returns 1 if this edge crosses with the input edge, 0
// otherwise.
AVSDFEdge.prototype.crossingWithEdge = function (otherEdge) {
    let self = this;
    let result = self.crossesWithEdge(otherEdge);

    return result ? 1 : 0;
};

// This function calculates the total number of crossings of this edge with
// all the edges given in the input list.
AVSDFEdge.prototype.calculateTotalCrossingWithList = function (edgeList) {
    let self = this;
    let totalCrossing = 0;

    edgeList.forEach(edge => totalCrossing += self.crossingWithEdge(edge));

    return totalCrossing;
};

module.exports = AVSDFEdge;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This class implements data and functionality required for AVSDF layout per
 * circle.
 *
 *
 * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
 */

let LGraph = __webpack_require__(1).LGraph;

// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

function AVSDFCircle(parent, graphMgr, vObject) {
    LGraph.call(this, parent, graphMgr, vObject);
    this.inOrder = undefined;
    this.currentIndex = 0;
    this.nodeSeparation = undefined;
    this.stack = [];
    this.perimeter = 0;
    this.centerX = 0;
    this.centerY = 0;
    this.radius = 0;
}

AVSDFCircle.prototype = Object.create(LGraph.prototype);

for (let property in LGraph) {
    AVSDFCircle[property] = LGraph[property];
}

AVSDFCircle.prototype.initOrdering = function () {
    this.inOrder = [];
};

// -----------------------------------------------------------------------------
// Section: Accessor Functions
// -----------------------------------------------------------------------------

// This function returns the array in which the nodes of this circle are kept in order.
AVSDFCircle.prototype.getOrder = function () {
    return this.inOrder;
};

// This function returns the x-coordinate of the center of this circle.
AVSDFCircle.prototype.getCenterX = function () {
    return this.centerX;
};

// This function returns the y-coordinate of the center of this circle.
AVSDFCircle.prototype.getCenterY = function () {
    return this.centerY;
};

// This function returns the radius of this circle.
AVSDFCircle.prototype.getRadius = function () {
    return this.radius;
};

// This function returns the total number of vertices of this circle.
AVSDFCircle.prototype.getSize = function () {
    return this.getNodes().length;
};

// This function calculates and returns the total number of crossings in this
// circle by adding up the crossing number of individual nodes on it.
AVSDFCircle.prototype.getTotalCrossingOfCircle = function () {
    let self = this;
    let crossingNumber = 0;

    for (let node in self.inOrder) {
        let nodeCrossing = node.getTotalCrossingOfEdges();
        if (nodeCrossing === -1) {
            return -1;
        }
        crossingNumber += nodeCrossing;
    }

    return crossingNumber / 4;
};

// This function checks whether or not all of the vertices of this circle are
// assigned an index on the circle.
AVSDFCircle.prototype.hasFinishedOrdering = function () {
    return this.currentIndex === this.getNodes().length;
};

// This function returns the node separation of this circle.
AVSDFCircle.prototype.getNodeSeparation = function () {
    return this.nodeSeparation;
};

// This function sets the node separation of this circle.
AVSDFCircle.prototype.setNodeSeparation = function (nodeSeparation) {
    this.nodeSeparation = nodeSeparation;
};

// -----------------------------------------------------------------------------
// Section: Remaining Functions
// -----------------------------------------------------------------------------

// This function traverses the vertices of this circle and corrects the angle
// of the vertices with respect to their circle indices.
AVSDFCircle.prototype.correctAngles = function () {
    let self = this;
    self.currentIndex = 0;

    self.inOrder.forEach(node => self.putInOrder(node));
};

// This function puts the given node on the circle in the current order and
// sets its angle appropriately.
AVSDFCircle.prototype.putInOrder = function (node) {
    let self = this;

    let nodes = self.getNodes();

    // Note that id attribute of a node is added before
    // AVSDFLayout is called
    let found = false;
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id == node.id) {
            found = true;
            break;
        }
    }

    if (!found) {
        throw "The node must be a member of LGraph";
    }

    self.inOrder[self.currentIndex] = node;
    node.setIndex(self.currentIndex);

    if (self.currentIndex === 0) {
        node.setAngle(0.0);
    } else {
        node.setAngle(self.inOrder[self.currentIndex - 1].getAngle() + 2 * Math.PI * (node.getDiagonal() / 2 + self.nodeSeparation + self.inOrder[self.currentIndex - 1].getDiagonal() / 2) / self.perimeter);
    }

    self.currentIndex++;
};

// This function returns the next node to be placed on this circle with
// respect to the AVSDF algorithm.
AVSDFCircle.prototype.findNodeToPlace = function () {
    let self = this;
    let sDegreeNode = undefined;

    // Find the smallest degree vertex if the stack is empty
    if (self.stack.length === 0) {
        sDegreeNode = self.findUnorderedSmallestDegreeNode();
    }
    // Find the first vertex in the stack not yet placed
    else {
            let foundUnorderNode = false;

            while (!foundUnorderNode && !(self.stack.length === 0)) {
                sDegreeNode = self.stack.pop();
                foundUnorderNode = !sDegreeNode.isOrdered();
            }

            if (!foundUnorderNode) {
                sDegreeNode = undefined;
            }
        }

    // If no unordered vertex is found in the stack, find one
    // from the remaining ones
    if (sDegreeNode === undefined) {
        sDegreeNode = self.findUnorderedSmallestDegreeNode();
    }

    // Add the unordered neighbors of this node to the stack
    if (sDegreeNode !== undefined) {
        let neighbors = sDegreeNode.getNeighborsSortedByDegree();

        for (let i = neighbors.length - 1; i >= 0; i--) {
            let neighbor = neighbors[i];

            if (!neighbor.isOrdered()) // Check here for possible error
                {
                    self.stack.push(neighbor);
                }
        }
    }

    return sDegreeNode;
};

// This function calculates the radius of this circle with respect to the sizes
// of the vertices and the node separation parameter.
AVSDFCircle.prototype.calculateRadius = function () {
    let self = this;
    let totalDiagonal = 0;

    self.getNodes().forEach(node => totalDiagonal += Math.sqrt(node.getWidth() * node.getWidth() + node.getHeight() * node.getHeight()));

    self.perimeter = totalDiagonal + self.getNodes().length * self.nodeSeparation;
    let radius = self.perimeter / (2 * Math.PI);

    // Check here for possible error

    self.getParent().setWidth(2 * radius);
    self.getParent().setHeight(2 * radius);
    self.getParent().setCenter(self.getParent().getWidth(), self.getParent().getHeight());

    self.centerX = self.getParent().getCenterX();
    self.centerY = self.getParent().getCenterY();
    self.radius = self.getParent().getHeight() / 2;
};

// This function calculates the total number of crossings of all vertices of
// this circle.
AVSDFCircle.prototype.calculateEdgeCrossingsOfNodes = function () {
    this.getNodes().forEach(node => node.calculateTotalCrossing());
};

// This function sets the index of each vertex to its position in inOrder
// array. Note that index of a node can be different from its place in the
// array due to crossing reduction phase of the AVSDF algorithm. It loads
// old index values to vertices due to an increase in the number of
// crossings with the new indices.
AVSDFCircle.prototype.loadOldIndicesOfNodes = function () {
    //this.inOrder.forEach( (node,index) => node.setIndex(index));
    var self = this;
    for (let i = 0; i < this.inOrder.length; i++) {
        self.inOrder[i].setIndex(i);
    }
};

// This function sets the position of each node in inOrder array to its index.
// Note that index of a node can be different from its place in the inOrder
// array due to crossing reduction phase of the AVSDF algorithm. This function
// puts the nodes to their new index values in inOrder array due to a
// decrease in the number of crossings with the new indices.
AVSDFCircle.prototype.reOrderVertices = function () {
    var self = this;
    this.getNodes().forEach(node => self.inOrder[node.getIndex()] = node);
};

// This function finds and returns the unordered smallest degree vertex on
// this circle.
AVSDFCircle.prototype.findUnorderedSmallestDegreeNode = function () {
    let minDegree = Number.MAX_SAFE_INTEGER;
    let sDegreeNode;

    this.getNodes().forEach(function (node) {
        if (node.getDegree() < minDegree && !node.isOrdered()) {
            minDegree = node.getDegree();
            sDegreeNode = node;
        }
    });

    return sDegreeNode;
};

module.exports = AVSDFCircle;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This class implements the overall layout process for the AVSDF algorithm
 * (Circular Drawing Algorithm by He and Sykora).
 *
 *
 * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
 */

let Layout = __webpack_require__(1).Layout;
let AVSDFConstants = __webpack_require__(2);
let AVSDFCircle = __webpack_require__(4);
let AVSDFNode = __webpack_require__(6);
let AVSDFEdge = __webpack_require__(3);

// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

// Constructor
function AVSDFLayout() {
    Layout.call(this);
    this.nodeSeparation = AVSDFConstants.DEFAULT_NODE_SEPARATION;
}

AVSDFLayout.prototype = Object.create(Layout.prototype);

for (let property in Layout) {
    AVSDFLayout[property] = Layout[property];
}

AVSDFLayout.prototype.newGraph = function (vObject) {
    this.avsdfCircle = new AVSDFCircle(null, this.graphManager, vObject);

    return this.avsdfCircle;
};

AVSDFLayout.prototype.newNode = function (vNode) {
    return new AVSDFNode(this.graphManager, vNode);
};

AVSDFLayout.prototype.newEdge = function (vEdge) {
    return new AVSDFEdge(null, null, vEdge);
};

// -----------------------------------------------------------------------------
// Section: Accessor Functions
// -----------------------------------------------------------------------------

// This function returns the position data for all nodes
AVSDFLayout.prototype.getPositionsData = function () {
    var allNodes = this.graphManager.getAllNodes();
    var pData = {};

    for (var i = 0; i < allNodes.length; i++) {
        var rect = allNodes[i].rect;
        var id = allNodes[i].id;

        pData[id] = {
            id: id,
            x: rect.getCenterX(),
            y: rect.getCenterY(),
            w: rect.width,
            h: rect.height
        };
    }

    return pData;
};

// -----------------------------------------------------------------------------
// Section: Layout Related
// -----------------------------------------------------------------------------

/**
 * This function performs layout on constructed l-level graph.
 * It returns true on success, false otherwise.
 * Important!: If you want to see the results of this function then, after this function is called, you have to calculate
 * and set the positions of every node. To do this call updateNodeCoordinates. However, updateNodeAngles on the other
 * hand is not needed (redundant) for this function.
 */
AVSDFLayout.prototype.layout = function () {
    let self = this;

    // Check if graph contains any compound structures
    if (self.graphManager.getGraphs().length > 1) {
        return false;
    }

    let clusterGraph = this.avsdfCircle; // Fixed reference, but now it is a bit redundant

    clusterGraph.setNodeSeparation(this.nodeSeparation);
    clusterGraph.calculateRadius();
    clusterGraph.initOrdering();

    while (!clusterGraph.hasFinishedOrdering()) {
        let node = clusterGraph.findNodeToPlace();
        clusterGraph.putInOrder(node);
    }

    return true;
};

// This function updates the angle (in radians) property of AVSDFNode elements in the circle
AVSDFLayout.prototype.updateNodeAngles = function () {
    this.graphManager.getRoot().correctAngles(); //AVSDFCircle object
};

// This function traverses the vertices of the graph and sets their correct coordinates with respect to the owner circle.
AVSDFLayout.prototype.updateNodeCoordinates = function () {
    let clusterGraph = this.graphManager.getRoot();

    clusterGraph.getNodes().forEach(function (node) {
        node.setCenter(clusterGraph.getCenterX() + clusterGraph.getRadius() * Math.cos(node.getAngle()), clusterGraph.getCenterY() + clusterGraph.getRadius() * Math.sin(node.getAngle()));
    });
};

// -----------------------------------------------------------------------------
// Section: Post Processing
// -----------------------------------------------------------------------------

/**
 * This method implements the post processing step of the algorithm, which
 * tries to minimize the number of edges further with respect to the local
 * adjusting algorithm described by He and Sykora.
 */
AVSDFLayout.prototype.initPostProcess = function () {
    this.avsdfCircle.calculateEdgeCrossingsOfNodes();

    let list = this.avsdfCircle.getNodes();

    list.sort(function (a, b) {
        return b.getTotalCrossingOfEdges() - a.getTotalCrossingOfEdges();
    });

    return list;
};

AVSDFLayout.prototype.oneStepPostProcess = function (node) {
    let self = this;

    let currentCrossingNumber = node.getTotalCrossingOfEdges();
    let newCrossingNumber;

    let neighbours = [];
    node.getNeighborsList().addAllTo(neighbours);

    for (let j = 0; j < neighbours.length; j++) {
        let neighbour = neighbours[j];

        let oldIndex = node.getIndex();
        let newIndex = (neighbour.getIndex() + 1) % self.avsdfCircle.getSize();

        if (oldIndex !== newIndex) {
            node.setIndex(newIndex);

            if (oldIndex < node.getIndex()) {
                oldIndex += self.avsdfCircle.getSize();
            }

            let index = node.getIndex();

            while (index < oldIndex) {
                let temp = self.avsdfCircle.getOrder()[index % self.avsdfCircle.getSize()];
                temp.setIndex((temp.getIndex() + 1) % self.avsdfCircle.getSize());
                index += 1;
            }

            node.calculateTotalCrossing();
            newCrossingNumber = node.getTotalCrossingOfEdges();

            if (newCrossingNumber >= currentCrossingNumber) {
                self.avsdfCircle.loadOldIndicesOfNodes();
            } else {
                self.avsdfCircle.reOrderVertices();
                currentCrossingNumber = newCrossingNumber;
            }
        }
    }
};

module.exports = AVSDFLayout;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This class implements data and functionality required for AVSDF layout per
 * node.
 *
 *
 * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
 */

let LNode = __webpack_require__(1).LNode;
let Quicksort = __webpack_require__(1).Quicksort;

// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

function AVSDFNode(gm, vNode, loc, size) {
    // Constructor 1: AVSDFNode(gm, vNode, loc, size)
    if (loc !== undefined && size !== undefined) {
        LNode.call(this, gm, vNode, loc, size);
    }
    // Constructor 2: AVSDFNode(gm, vNode)
    else {
            LNode.call(this, gm, vNode);
        }

    // Angle of this node on the owner circle in radians
    this.angle = 0;

    // Index of this node on the owner circle
    this.circleIndex = -1;

    // Total number of crossings of the edges this node is incident to
    this.totalCrossingOfEdges = -1;

    // Whether the current edge crossing number is valid or it needs to be
    // recalculated
    this.isCrossingNumberValid = false;
}

AVSDFNode.prototype = Object.create(LNode.prototype);
for (let properties in LNode) {
    AVSDFNode[properties] = LNode[properties];
}

// -----------------------------------------------------------------------------
// Section: Accessor Functions
// -----------------------------------------------------------------------------

// This function returns the circle this node is owned by.
AVSDFNode.prototype.getCircle = function () {
    return this.getOwner();
};

// This function sets the index of this node on the circle, and sets the
// crossing number invalid. Due to the index change of the node; it needs to
// be recalculated.
AVSDFNode.prototype.setIndex = function (index) {
    this.circleIndex = index;
    this.isCrossingNumberValid = false;
};

// This function returns the index of this node in the ordering of its owner
// circle. Here -1 means that the vertex is not yet placed on its owner
//circle.
AVSDFNode.prototype.getIndex = function () {
    return this.circleIndex;
};

// This function returns the array of the neigbors of this node sorted in
// ascending order.
AVSDFNode.prototype.getNeighborsSortedByDegree = function () {
    let self = this;

    let neighborsList = [];
    self.getNeighborsList().addAllTo(neighborsList);
    let result = neighborsList.filter(node => node.getIndex() === -1);

    result.sort(function (a, b) {
        return a.getDegree() - b.getDegree();
    });

    return result;
};

// This function returns the degree of this node.
AVSDFNode.prototype.getDegree = function () {
    return this.getEdges().length;
};

// This function returns whether or not this node is currently placed on its
// owner circle.
AVSDFNode.prototype.isOrdered = function () {
    return this.getIndex() > -1;
};

// This function sets the angle of this node w.r.t. its owner circle. Here
// the angle value is in radian.
AVSDFNode.prototype.setAngle = function (angle) {
    this.angle = angle;
};

// This function returns the angle of this node w.r.t. its owner circle. Here
// the angle value is in radian.
AVSDFNode.prototype.getAngle = function () {
    return this.angle;
};

// This function returns the index difference of this node with the input
// node. Note that the index difference cannot be negative if both nodes are
// placed on the circle. Here -1 means at least one of the nodes are not yet
// placed on the circle.
AVSDFNode.prototype.getCircDistWithTheNode = function (refNode) {
    let self = this;
    let otherIndex = refNode.getIndex();

    if (otherIndex === -1 || self.getIndex() === -1) {
        return -1;
    }

    let diff = self.getIndex() - otherIndex;

    if (diff < 0) {
        diff += self.getCircle().getSize();
    }

    return diff;
};

// This function finds the number of edge crossings between the edges of
// this node and the edges of the input one.
AVSDFNode.prototype.getCrossingNumberWithNode = function (otherNode) {
    let self = this;
    let totalCrossing = 0;

    self.getEdges().forEach(function (edge) {
        otherNode.getEdges().forEach(function (otherEdge) {
            totalCrossing += edge.crossingWithEdge(otherEdge);
        });
    });

    return totalCrossing;
};

// This function returns the total number of edge crossings. If the previously
// calculated value is not valid due to an index change on the circle, then
// a recalculation is performed.
AVSDFNode.prototype.getTotalCrossingOfEdges = function () {
    let self = this;

    if (!self.isCrossingNumberValid) {
        self.calculateTotalCrossing();
        self.isCrossingNumberValid = true;
    }

    return self.totalCrossingOfEdges;
};

// -----------------------------------------------------------------------------
// Section: Remaining Functions
// -----------------------------------------------------------------------------

// This function calculates the total number of crossings the edges of this
// node cause.
AVSDFNode.prototype.calculateTotalCrossing = function () {
    let self = this;
    let temp_crossing_count = 0;
    let temp_edge_list = [];
    temp_edge_list.push.apply(temp_edge_list, self.getCircle().getEdges());
    temp_edge_list = temp_edge_list.filter(ele => self.getEdges().indexOf(ele) < 0);

    self.getEdges().forEach(edge => temp_crossing_count += edge.calculateTotalCrossingWithList(temp_edge_list));

    self.totalCrossingOfEdges = temp_crossing_count;
};

module.exports = AVSDFNode;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdnNkZkJhc2Uvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2F2c2RmQmFzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hdnNkZkJhc2UvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdnNkZkJhc2UvLi9ub2RlX21vZHVsZXMvbGF5b3V0LWJhc2UvbGF5b3V0LWJhc2UuanMiLCJ3ZWJwYWNrOi8vYXZzZGZCYXNlLy4vc3JjL0FWU0RGQ29uc3RhbnRzLmpzIiwid2VicGFjazovL2F2c2RmQmFzZS8uL3NyYy9BVlNERkVkZ2UuanMiLCJ3ZWJwYWNrOi8vYXZzZGZCYXNlLy4vc3JjL0FWU0RGQ2lyY2xlLmpzIiwid2VicGFjazovL2F2c2RmQmFzZS8uL3NyYy9BVlNERkxheW91dC5qcyIsIndlYnBhY2s6Ly9hdnNkZkJhc2UvLi9zcmMvQVZTREZOb2RlLmpzIl0sIm5hbWVzIjpbImF2c2RmQmFzZSIsImxheW91dEJhc2UiLCJyZXF1aXJlIiwiQVZTREZDb25zdGFudHMiLCJBVlNERkVkZ2UiLCJBVlNERkNpcmNsZSIsIkFWU0RGTGF5b3V0IiwiQVZTREZOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsIkxheW91dENvbnN0YW50cyIsInByb3AiLCJERUZBVUxUX05PREVfU0VQQVJBVElPTiIsIkxFZGdlIiwic291cmNlIiwidGFyZ2V0IiwidkVkZ2UiLCJjYWxsIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwicHJvcGVydGllcyIsImdldE90aGVyRW5kIiwibm9kZSIsImNyb3NzZXNXaXRoRWRnZSIsIm90aGVyRWRnZSIsInNlbGYiLCJzb3VyY2VQb3MiLCJnZXRTb3VyY2UiLCJnZXRJbmRleCIsInRhcmdldFBvcyIsImdldFRhcmdldCIsIm90aGVyU291cmNlUG9zIiwib3RoZXJUYXJnZXRQb3MiLCJvdGhlclNvdXJjZURpc3QiLCJnZXRDaXJjRGlzdFdpdGhUaGVOb2RlIiwib3RoZXJUYXJnZXREaXN0IiwidGhpc1RhcmdldERpc3QiLCJNYXRoIiwibWF4IiwibWluIiwiY3Jvc3NpbmdXaXRoRWRnZSIsInJlc3VsdCIsImNhbGN1bGF0ZVRvdGFsQ3Jvc3NpbmdXaXRoTGlzdCIsImVkZ2VMaXN0IiwidG90YWxDcm9zc2luZyIsImZvckVhY2giLCJlZGdlIiwiTEdyYXBoIiwicGFyZW50IiwiZ3JhcGhNZ3IiLCJ2T2JqZWN0IiwiaW5PcmRlciIsInVuZGVmaW5lZCIsImN1cnJlbnRJbmRleCIsIm5vZGVTZXBhcmF0aW9uIiwic3RhY2siLCJwZXJpbWV0ZXIiLCJjZW50ZXJYIiwiY2VudGVyWSIsInJhZGl1cyIsInByb3BlcnR5IiwiaW5pdE9yZGVyaW5nIiwiZ2V0T3JkZXIiLCJnZXRDZW50ZXJYIiwiZ2V0Q2VudGVyWSIsImdldFJhZGl1cyIsImdldFNpemUiLCJnZXROb2RlcyIsImxlbmd0aCIsImdldFRvdGFsQ3Jvc3NpbmdPZkNpcmNsZSIsImNyb3NzaW5nTnVtYmVyIiwibm9kZUNyb3NzaW5nIiwiZ2V0VG90YWxDcm9zc2luZ09mRWRnZXMiLCJoYXNGaW5pc2hlZE9yZGVyaW5nIiwiZ2V0Tm9kZVNlcGFyYXRpb24iLCJzZXROb2RlU2VwYXJhdGlvbiIsImNvcnJlY3RBbmdsZXMiLCJwdXRJbk9yZGVyIiwibm9kZXMiLCJmb3VuZCIsImkiLCJpZCIsInNldEluZGV4Iiwic2V0QW5nbGUiLCJnZXRBbmdsZSIsIlBJIiwiZ2V0RGlhZ29uYWwiLCJmaW5kTm9kZVRvUGxhY2UiLCJzRGVncmVlTm9kZSIsImZpbmRVbm9yZGVyZWRTbWFsbGVzdERlZ3JlZU5vZGUiLCJmb3VuZFVub3JkZXJOb2RlIiwicG9wIiwiaXNPcmRlcmVkIiwibmVpZ2hib3JzIiwiZ2V0TmVpZ2hib3JzU29ydGVkQnlEZWdyZWUiLCJuZWlnaGJvciIsInB1c2giLCJjYWxjdWxhdGVSYWRpdXMiLCJ0b3RhbERpYWdvbmFsIiwic3FydCIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiZ2V0UGFyZW50Iiwic2V0V2lkdGgiLCJzZXRIZWlnaHQiLCJzZXRDZW50ZXIiLCJjYWxjdWxhdGVFZGdlQ3Jvc3NpbmdzT2ZOb2RlcyIsImNhbGN1bGF0ZVRvdGFsQ3Jvc3NpbmciLCJsb2FkT2xkSW5kaWNlc09mTm9kZXMiLCJyZU9yZGVyVmVydGljZXMiLCJtaW5EZWdyZWUiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwiZ2V0RGVncmVlIiwiTGF5b3V0IiwibmV3R3JhcGgiLCJhdnNkZkNpcmNsZSIsImdyYXBoTWFuYWdlciIsIm5ld05vZGUiLCJ2Tm9kZSIsIm5ld0VkZ2UiLCJnZXRQb3NpdGlvbnNEYXRhIiwiYWxsTm9kZXMiLCJnZXRBbGxOb2RlcyIsInBEYXRhIiwicmVjdCIsIngiLCJ5IiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImxheW91dCIsImdldEdyYXBocyIsImNsdXN0ZXJHcmFwaCIsInVwZGF0ZU5vZGVBbmdsZXMiLCJnZXRSb290IiwidXBkYXRlTm9kZUNvb3JkaW5hdGVzIiwiY29zIiwic2luIiwiaW5pdFBvc3RQcm9jZXNzIiwibGlzdCIsInNvcnQiLCJhIiwiYiIsIm9uZVN0ZXBQb3N0UHJvY2VzcyIsImN1cnJlbnRDcm9zc2luZ051bWJlciIsIm5ld0Nyb3NzaW5nTnVtYmVyIiwibmVpZ2hib3VycyIsImdldE5laWdoYm9yc0xpc3QiLCJhZGRBbGxUbyIsImoiLCJuZWlnaGJvdXIiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwiaW5kZXgiLCJ0ZW1wIiwiTE5vZGUiLCJRdWlja3NvcnQiLCJnbSIsImxvYyIsInNpemUiLCJhbmdsZSIsImNpcmNsZUluZGV4IiwidG90YWxDcm9zc2luZ09mRWRnZXMiLCJpc0Nyb3NzaW5nTnVtYmVyVmFsaWQiLCJnZXRDaXJjbGUiLCJnZXRPd25lciIsIm5laWdoYm9yc0xpc3QiLCJmaWx0ZXIiLCJnZXRFZGdlcyIsInJlZk5vZGUiLCJvdGhlckluZGV4IiwiZGlmZiIsImdldENyb3NzaW5nTnVtYmVyV2l0aE5vZGUiLCJvdGhlck5vZGUiLCJ0ZW1wX2Nyb3NzaW5nX2NvdW50IiwidGVtcF9lZGdlX2xpc3QiLCJhcHBseSIsImVsZSIsImluZGV4T2YiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7OztBQ2xGYTs7QUFFYixJQUFJQSxZQUFZLEVBQWhCOztBQUVBQSxVQUFVQyxVQUFWLEdBQXVCQyxtQkFBT0EsQ0FBQyxDQUFSLENBQXZCO0FBQ0FGLFVBQVVHLGNBQVYsR0FBMkJELG1CQUFPQSxDQUFDLENBQVIsQ0FBM0I7QUFDQUYsVUFBVUksU0FBVixHQUFzQkYsbUJBQU9BLENBQUMsQ0FBUixDQUF0QjtBQUNBRixVQUFVSyxXQUFWLEdBQXdCSCxtQkFBT0EsQ0FBQyxDQUFSLENBQXhCO0FBQ0FGLFVBQVVNLFdBQVYsR0FBd0JKLG1CQUFPQSxDQUFDLENBQVIsQ0FBeEI7QUFDQUYsVUFBVU8sU0FBVixHQUFzQkwsbUJBQU9BLENBQUMsQ0FBUixDQUF0Qjs7QUFFQU0sT0FBT0MsT0FBUCxHQUFpQlQsU0FBakIsQzs7Ozs7O0FDWEE7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUsyQjtBQUNqQyxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGLHdIQUF3SCxtQkFBbUIsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsZUFBZSxtQkFBbUI7QUFDbEM7O0FBRUEscUJBQXFCLG1CQUFtQjtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLFdBQVc7QUFDNUI7QUFDQTs7QUFFQSxpQkFBaUIsV0FBVztBQUM1QixtQkFBbUIsV0FBVztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsY0FBYztBQUNwQyx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsdUJBQXVCO0FBQ3pELG9DQUFvQyx1QkFBdUI7QUFDM0Q7QUFDQSx5QkFBeUIsdUJBQXVCO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLDhCQUE4QjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQiwwQkFBMEI7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGtCQUFrQjtBQUNuQzs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7O0FBRTlCO0FBQ0E7QUFDQSx5QkFBeUIsS0FBSzs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxR0FBcUc7QUFDckc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBLDRCQUE0QixnQ0FBZ0M7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLGFBQWE7O0FBRXBCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNB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VSxPQUFoQixDQUF3QkQsR0FBeEIsSUFBK0IsQ0FBL0QsQ0FBakI7O0FBRUExSixTQUFLaUosUUFBTCxHQUFnQjdILE9BQWhCLENBQ0tDLElBQUQsSUFBVWtJLHVCQUF1QmxJLEtBQUtKLDhCQUFMLENBQW9DdUksY0FBcEMsQ0FEckM7O0FBSUF4SixTQUFLMkksb0JBQUwsR0FBNEJZLG1CQUE1QjtBQUNILENBYkQ7O0FBZUF6SyxPQUFPQyxPQUFQLEdBQWlCRixTQUFqQixDIiwiZmlsZSI6ImF2c2RmLWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhdnNkZkJhc2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYXZzZGZCYXNlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCBhdnNkZkJhc2UgPSB7fTtcblxuYXZzZGZCYXNlLmxheW91dEJhc2UgPSByZXF1aXJlKCdsYXlvdXQtYmFzZScpO1xuYXZzZGZCYXNlLkFWU0RGQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9zcmMvQVZTREZDb25zdGFudHMnKTtcbmF2c2RmQmFzZS5BVlNERkVkZ2UgPSByZXF1aXJlKCcuL3NyYy9BVlNERkVkZ2UnKTtcbmF2c2RmQmFzZS5BVlNERkNpcmNsZSA9IHJlcXVpcmUoJy4vc3JjL0FWU0RGQ2lyY2xlJyk7XG5hdnNkZkJhc2UuQVZTREZMYXlvdXQgPSByZXF1aXJlKCcuL3NyYy9BVlNERkxheW91dCcpO1xuYXZzZGZCYXNlLkFWU0RGTm9kZSA9IHJlcXVpcmUoJy4vc3JjL0FWU0RGTm9kZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF2c2RmQmFzZTsiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsYXlvdXRCYXNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxheW91dEJhc2VcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmxldCBsYXlvdXRCYXNlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm47XG59O1xuXG5sYXlvdXRCYXNlLkZETGF5b3V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbmxheW91dEJhc2UuRkRMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcbmxheW91dEJhc2UuRkRMYXlvdXRFZGdlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMyk7XG5sYXlvdXRCYXNlLkZETGF5b3V0Tm9kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xubGF5b3V0QmFzZS5EaW1lbnNpb25EID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNSk7XG5sYXlvdXRCYXNlLkhhc2hNYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xubGF5b3V0QmFzZS5IYXNoU2V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5sYXlvdXRCYXNlLklHZW9tZXRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5sYXlvdXRCYXNlLklNYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5sYXlvdXRCYXNlLkludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbmxheW91dEJhc2UuUG9pbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcbmxheW91dEJhc2UuUG9pbnREID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5sYXlvdXRCYXNlLlJhbmRvbVNlZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcbmxheW91dEJhc2UuUmVjdGFuZ2xlRCA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xubGF5b3V0QmFzZS5UcmFuc2Zvcm0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcbmxheW91dEJhc2UuVW5pcXVlSURHZW5lcmV0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xubGF5b3V0QmFzZS5RdWlja3NvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KTtcbmxheW91dEJhc2UuTGlua2VkTGlzdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xubGF5b3V0QmFzZS5MR3JhcGhPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xubGF5b3V0QmFzZS5MR3JhcGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcbmxheW91dEJhc2UuTEVkZ2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xubGF5b3V0QmFzZS5MR3JhcGhNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbmxheW91dEJhc2UuTE5vZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcbmxheW91dEJhc2UuTGF5b3V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbmxheW91dEJhc2UuTGF5b3V0Q29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBsYXlvdXRCYXNlO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIExheW91dCA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIElHZW9tZXRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgSU1hdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblxuZnVuY3Rpb24gRkRMYXlvdXQoKSB7XG4gIExheW91dC5jYWxsKHRoaXMpO1xuXG4gIHRoaXMudXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OO1xuICB0aGlzLmlkZWFsRWRnZUxlbmd0aCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG4gIHRoaXMuc3ByaW5nQ29uc3RhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1NQUklOR19TVFJFTkdUSDtcbiAgdGhpcy5yZXB1bHNpb25Db25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIO1xuICB0aGlzLmdyYXZpdHlDb25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSDtcbiAgdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSDtcbiAgdGhpcy5ncmF2aXR5UmFuZ2VGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SO1xuICB0aGlzLmNvbXBvdW5kR3Jhdml0eVJhbmdlRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUjtcbiAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlID0gMy4wICogRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAvIDEwMDtcbiAgdGhpcy5jb29saW5nRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTDtcbiAgdGhpcy5pbml0aWFsQ29vbGluZ0ZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUw7XG4gIHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPSAwLjA7XG4gIHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQgPSAwLjA7XG4gIHRoaXMubWF4SXRlcmF0aW9ucyA9IEZETGF5b3V0Q29uc3RhbnRzLk1BWF9JVEVSQVRJT05TO1xufVxuXG5GRExheW91dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExheW91dC5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExheW91dCkge1xuICBGRExheW91dFtwcm9wXSA9IExheW91dFtwcm9wXTtcbn1cblxuRkRMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xuICBMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzLmNhbGwodGhpcywgYXJndW1lbnRzKTtcblxuICBpZiAodGhpcy5sYXlvdXRRdWFsaXR5ID09IExheW91dENvbnN0YW50cy5EUkFGVF9RVUFMSVRZKSB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlICs9IDAuMzA7XG4gICAgdGhpcy5tYXhJdGVyYXRpb25zICo9IDAuODtcbiAgfSBlbHNlIGlmICh0aGlzLmxheW91dFF1YWxpdHkgPT0gTGF5b3V0Q29uc3RhbnRzLlBST09GX1FVQUxJVFkpIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgLT0gMC4zMDtcbiAgICB0aGlzLm1heEl0ZXJhdGlvbnMgKj0gMS4yO1xuICB9XG5cbiAgdGhpcy50b3RhbEl0ZXJhdGlvbnMgPSAwO1xuICB0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucyA9IDA7XG5cbiAgdGhpcy51c2VGUkdyaWRWYXJpYW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OO1xuXG4gIHRoaXMuZ3JpZCA9IFtdO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNJZGVhbEVkZ2VMZW5ndGhzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWRnZTtcbiAgdmFyIGxjYURlcHRoO1xuICB2YXIgc291cmNlO1xuICB2YXIgdGFyZ2V0O1xuICB2YXIgc2l6ZU9mU291cmNlSW5MY2E7XG4gIHZhciBzaXplT2ZUYXJnZXRJbkxjYTtcblxuICB2YXIgYWxsRWRnZXMgPSB0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldEFsbEVkZ2VzKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBlZGdlID0gYWxsRWRnZXNbaV07XG5cbiAgICBlZGdlLmlkZWFsTGVuZ3RoID0gdGhpcy5pZGVhbEVkZ2VMZW5ndGg7XG5cbiAgICBpZiAoZWRnZS5pc0ludGVyR3JhcGgpIHtcbiAgICAgIHNvdXJjZSA9IGVkZ2UuZ2V0U291cmNlKCk7XG4gICAgICB0YXJnZXQgPSBlZGdlLmdldFRhcmdldCgpO1xuXG4gICAgICBzaXplT2ZTb3VyY2VJbkxjYSA9IGVkZ2UuZ2V0U291cmNlSW5MY2EoKS5nZXRFc3RpbWF0ZWRTaXplKCk7XG4gICAgICBzaXplT2ZUYXJnZXRJbkxjYSA9IGVkZ2UuZ2V0VGFyZ2V0SW5MY2EoKS5nZXRFc3RpbWF0ZWRTaXplKCk7XG5cbiAgICAgIGlmICh0aGlzLnVzZVNtYXJ0SWRlYWxFZGdlTGVuZ3RoQ2FsY3VsYXRpb24pIHtcbiAgICAgICAgZWRnZS5pZGVhbExlbmd0aCArPSBzaXplT2ZTb3VyY2VJbkxjYSArIHNpemVPZlRhcmdldEluTGNhIC0gMiAqIExheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9TSVpFO1xuICAgICAgfVxuXG4gICAgICBsY2FEZXB0aCA9IGVkZ2UuZ2V0TGNhKCkuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCk7XG5cbiAgICAgIGVkZ2UuaWRlYWxMZW5ndGggKz0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAqIEZETGF5b3V0Q29uc3RhbnRzLlBFUl9MRVZFTF9JREVBTF9FREdFX0xFTkdUSF9GQUNUT1IgKiAoc291cmNlLmdldEluY2x1c2lvblRyZWVEZXB0aCgpICsgdGFyZ2V0LmdldEluY2x1c2lvblRyZWVEZXB0aCgpIC0gMiAqIGxjYURlcHRoKTtcbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pbml0U3ByaW5nRW1iZWRkZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgaWYgKHRoaXMuaW5jcmVtZW50YWwpIHtcbiAgICB0aGlzLm1heE5vZGVEaXNwbGFjZW1lbnQgPSBGRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlRfSU5DUkVNRU5UQUw7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jb29saW5nRmFjdG9yID0gMS4wO1xuICAgIHRoaXMuaW5pdGlhbENvb2xpbmdGYWN0b3IgPSAxLjA7XG4gICAgdGhpcy5tYXhOb2RlRGlzcGxhY2VtZW50ID0gRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UO1xuICB9XG5cbiAgdGhpcy5tYXhJdGVyYXRpb25zID0gTWF0aC5tYXgodGhpcy5nZXRBbGxOb2RlcygpLmxlbmd0aCAqIDUsIHRoaXMubWF4SXRlcmF0aW9ucyk7XG5cbiAgdGhpcy50b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZCA9IHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSAqIHRoaXMuZ2V0QWxsTm9kZXMoKS5sZW5ndGg7XG5cbiAgdGhpcy5yZXB1bHNpb25SYW5nZSA9IHRoaXMuY2FsY1JlcHVsc2lvblJhbmdlKCk7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1NwcmluZ0ZvcmNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxFZGdlcyA9IHRoaXMuZ2V0QWxsRWRnZXMoKTtcbiAgdmFyIGVkZ2U7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsRWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBlZGdlID0gbEVkZ2VzW2ldO1xuXG4gICAgdGhpcy5jYWxjU3ByaW5nRm9yY2UoZWRnZSwgZWRnZS5pZGVhbExlbmd0aCk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uRm9yY2VzID0gZnVuY3Rpb24gKGdyaWRVcGRhdGVBbGxvd2VkID0gdHJ1ZSwgZm9yY2VUb05vZGVTdXJyb3VuZGluZ1VwZGF0ZSA9IGZhbHNlKSB7XG4gIHZhciBpLCBqO1xuICB2YXIgbm9kZUEsIG5vZGVCO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuICB2YXIgcHJvY2Vzc2VkTm9kZVNldDtcblxuICBpZiAodGhpcy51c2VGUkdyaWRWYXJpYW50KSB7XG4gICAgaWYgKHRoaXMudG90YWxJdGVyYXRpb25zICUgRkRMYXlvdXRDb25zdGFudHMuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPT0gMSAmJiBncmlkVXBkYXRlQWxsb3dlZCkge1xuICAgICAgdGhpcy51cGRhdGVHcmlkKCk7XG4gICAgfVxuXG4gICAgcHJvY2Vzc2VkTm9kZVNldCA9IG5ldyBTZXQoKTtcblxuICAgIC8vIGNhbGN1bGF0ZSByZXB1bHNpb24gZm9yY2VzIGJldHdlZW4gZWFjaCBub2RlcyBhbmQgaXRzIHN1cnJvdW5kaW5nXG4gICAgZm9yIChpID0gMDsgaSA8IGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbm9kZUEgPSBsTm9kZXNbaV07XG4gICAgICB0aGlzLmNhbGN1bGF0ZVJlcHVsc2lvbkZvcmNlT2ZBTm9kZShub2RlQSwgcHJvY2Vzc2VkTm9kZVNldCwgZ3JpZFVwZGF0ZUFsbG93ZWQsIGZvcmNlVG9Ob2RlU3Vycm91bmRpbmdVcGRhdGUpO1xuICAgICAgcHJvY2Vzc2VkTm9kZVNldC5hZGQobm9kZUEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBub2RlQSA9IGxOb2Rlc1tpXTtcblxuICAgICAgZm9yIChqID0gaSArIDE7IGogPCBsTm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbm9kZUIgPSBsTm9kZXNbal07XG5cbiAgICAgICAgLy8gSWYgYm90aCBub2RlcyBhcmUgbm90IG1lbWJlcnMgb2YgdGhlIHNhbWUgZ3JhcGgsIHNraXAuXG4gICAgICAgIGlmIChub2RlQS5nZXRPd25lcigpICE9IG5vZGVCLmdldE93bmVyKCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlKG5vZGVBLCBub2RlQik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBub2RlO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbm9kZSA9IGxOb2Rlc1tpXTtcbiAgICB0aGlzLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2Uobm9kZSk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5tb3ZlTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gIHZhciBub2RlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbm9kZSA9IGxOb2Rlc1tpXTtcbiAgICBub2RlLm1vdmUoKTtcbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNTcHJpbmdGb3JjZSA9IGZ1bmN0aW9uIChlZGdlLCBpZGVhbExlbmd0aCkge1xuICB2YXIgc291cmNlTm9kZSA9IGVkZ2UuZ2V0U291cmNlKCk7XG4gIHZhciB0YXJnZXROb2RlID0gZWRnZS5nZXRUYXJnZXQoKTtcblxuICB2YXIgbGVuZ3RoO1xuICB2YXIgc3ByaW5nRm9yY2U7XG4gIHZhciBzcHJpbmdGb3JjZVg7XG4gIHZhciBzcHJpbmdGb3JjZVk7XG5cbiAgLy8gVXBkYXRlIGVkZ2UgbGVuZ3RoXG4gIGlmICh0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzICYmIHNvdXJjZU5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsICYmIHRhcmdldE5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsKSB7XG4gICAgZWRnZS51cGRhdGVMZW5ndGhTaW1wbGUoKTtcbiAgfSBlbHNlIHtcbiAgICBlZGdlLnVwZGF0ZUxlbmd0aCgpO1xuXG4gICAgaWYgKGVkZ2UuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgbGVuZ3RoID0gZWRnZS5nZXRMZW5ndGgoKTtcblxuICAvLyBDYWxjdWxhdGUgc3ByaW5nIGZvcmNlc1xuICBzcHJpbmdGb3JjZSA9IHRoaXMuc3ByaW5nQ29uc3RhbnQgKiAobGVuZ3RoIC0gaWRlYWxMZW5ndGgpO1xuXG4gIC8vIFByb2plY3QgZm9yY2Ugb250byB4IGFuZCB5IGF4ZXNcbiAgc3ByaW5nRm9yY2VYID0gc3ByaW5nRm9yY2UgKiAoZWRnZS5sZW5ndGhYIC8gbGVuZ3RoKTtcbiAgc3ByaW5nRm9yY2VZID0gc3ByaW5nRm9yY2UgKiAoZWRnZS5sZW5ndGhZIC8gbGVuZ3RoKTtcblxuICAvLyBBcHBseSBmb3JjZXMgb24gdGhlIGVuZCBub2Rlc1xuICBzb3VyY2VOb2RlLnNwcmluZ0ZvcmNlWCArPSBzcHJpbmdGb3JjZVg7XG4gIHNvdXJjZU5vZGUuc3ByaW5nRm9yY2VZICs9IHNwcmluZ0ZvcmNlWTtcbiAgdGFyZ2V0Tm9kZS5zcHJpbmdGb3JjZVggLT0gc3ByaW5nRm9yY2VYO1xuICB0YXJnZXROb2RlLnNwcmluZ0ZvcmNlWSAtPSBzcHJpbmdGb3JjZVk7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvbkZvcmNlID0gZnVuY3Rpb24gKG5vZGVBLCBub2RlQikge1xuICB2YXIgcmVjdEEgPSBub2RlQS5nZXRSZWN0KCk7XG4gIHZhciByZWN0QiA9IG5vZGVCLmdldFJlY3QoKTtcbiAgdmFyIG92ZXJsYXBBbW91bnQgPSBuZXcgQXJyYXkoMik7XG4gIHZhciBjbGlwUG9pbnRzID0gbmV3IEFycmF5KDQpO1xuICB2YXIgZGlzdGFuY2VYO1xuICB2YXIgZGlzdGFuY2VZO1xuICB2YXIgZGlzdGFuY2VTcXVhcmVkO1xuICB2YXIgZGlzdGFuY2U7XG4gIHZhciByZXB1bHNpb25Gb3JjZTtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlWDtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlWTtcblxuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIC8vIHR3byBub2RlcyBvdmVybGFwXG4gICAge1xuICAgICAgLy8gY2FsY3VsYXRlIHNlcGFyYXRpb24gYW1vdW50IGluIHggYW5kIHkgZGlyZWN0aW9uc1xuICAgICAgSUdlb21ldHJ5LmNhbGNTZXBhcmF0aW9uQW1vdW50KHJlY3RBLCByZWN0Qiwgb3ZlcmxhcEFtb3VudCwgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAvIDIuMCk7XG5cbiAgICAgIHJlcHVsc2lvbkZvcmNlWCA9IDIgKiBvdmVybGFwQW1vdW50WzBdO1xuICAgICAgcmVwdWxzaW9uRm9yY2VZID0gMiAqIG92ZXJsYXBBbW91bnRbMV07XG5cbiAgICAgIHZhciBjaGlsZHJlbkNvbnN0YW50ID0gbm9kZUEubm9PZkNoaWxkcmVuICogbm9kZUIubm9PZkNoaWxkcmVuIC8gKG5vZGVBLm5vT2ZDaGlsZHJlbiArIG5vZGVCLm5vT2ZDaGlsZHJlbik7XG5cbiAgICAgIC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgdHdvIG5vZGVzXG4gICAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVggLT0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWDtcbiAgICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWSAtPSBjaGlsZHJlbkNvbnN0YW50ICogcmVwdWxzaW9uRm9yY2VZO1xuICAgICAgbm9kZUIucmVwdWxzaW9uRm9yY2VYICs9IGNoaWxkcmVuQ29uc3RhbnQgKiByZXB1bHNpb25Gb3JjZVg7XG4gICAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVkgKz0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWTtcbiAgICB9IGVsc2UgLy8gbm8gb3ZlcmxhcFxuICAgIHtcbiAgICAgIC8vIGNhbGN1bGF0ZSBkaXN0YW5jZVxuXG4gICAgICBpZiAodGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyAmJiBub2RlQS5nZXRDaGlsZCgpID09IG51bGwgJiYgbm9kZUIuZ2V0Q2hpbGQoKSA9PSBudWxsKSAvLyBzaW1wbHkgYmFzZSByZXB1bHNpb24gb24gZGlzdGFuY2Ugb2Ygbm9kZSBjZW50ZXJzXG4gICAgICAgIHtcbiAgICAgICAgICBkaXN0YW5jZVggPSByZWN0Qi5nZXRDZW50ZXJYKCkgLSByZWN0QS5nZXRDZW50ZXJYKCk7XG4gICAgICAgICAgZGlzdGFuY2VZID0gcmVjdEIuZ2V0Q2VudGVyWSgpIC0gcmVjdEEuZ2V0Q2VudGVyWSgpO1xuICAgICAgICB9IGVsc2UgLy8gdXNlIGNsaXBwaW5nIHBvaW50c1xuICAgICAgICB7XG4gICAgICAgICAgSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbihyZWN0QSwgcmVjdEIsIGNsaXBQb2ludHMpO1xuXG4gICAgICAgICAgZGlzdGFuY2VYID0gY2xpcFBvaW50c1syXSAtIGNsaXBQb2ludHNbMF07XG4gICAgICAgICAgZGlzdGFuY2VZID0gY2xpcFBvaW50c1szXSAtIGNsaXBQb2ludHNbMV07XG4gICAgICAgIH1cblxuICAgICAgLy8gTm8gcmVwdWxzaW9uIHJhbmdlLiBGUiBncmlkIHZhcmlhbnQgc2hvdWxkIHRha2UgY2FyZSBvZiB0aGlzLlxuICAgICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlWCkgPCBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1QpIHtcbiAgICAgICAgZGlzdGFuY2VYID0gSU1hdGguc2lnbihkaXN0YW5jZVgpICogRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUO1xuICAgICAgfVxuXG4gICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VZKSA8IEZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVCkge1xuICAgICAgICBkaXN0YW5jZVkgPSBJTWF0aC5zaWduKGRpc3RhbmNlWSkgKiBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1Q7XG4gICAgICB9XG5cbiAgICAgIGRpc3RhbmNlU3F1YXJlZCA9IGRpc3RhbmNlWCAqIGRpc3RhbmNlWCArIGRpc3RhbmNlWSAqIGRpc3RhbmNlWTtcbiAgICAgIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGRpc3RhbmNlU3F1YXJlZCk7XG5cbiAgICAgIHJlcHVsc2lvbkZvcmNlID0gdGhpcy5yZXB1bHNpb25Db25zdGFudCAqIG5vZGVBLm5vT2ZDaGlsZHJlbiAqIG5vZGVCLm5vT2ZDaGlsZHJlbiAvIGRpc3RhbmNlU3F1YXJlZDtcblxuICAgICAgLy8gUHJvamVjdCBmb3JjZSBvbnRvIHggYW5kIHkgYXhlc1xuICAgICAgcmVwdWxzaW9uRm9yY2VYID0gcmVwdWxzaW9uRm9yY2UgKiBkaXN0YW5jZVggLyBkaXN0YW5jZTtcbiAgICAgIHJlcHVsc2lvbkZvcmNlWSA9IHJlcHVsc2lvbkZvcmNlICogZGlzdGFuY2VZIC8gZGlzdGFuY2U7XG5cbiAgICAgIC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgdHdvIG5vZGVzICAgIFxuICAgICAgbm9kZUEucmVwdWxzaW9uRm9yY2VYIC09IHJlcHVsc2lvbkZvcmNlWDtcbiAgICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWSAtPSByZXB1bHNpb25Gb3JjZVk7XG4gICAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVggKz0gcmVwdWxzaW9uRm9yY2VYO1xuICAgICAgbm9kZUIucmVwdWxzaW9uRm9yY2VZICs9IHJlcHVsc2lvbkZvcmNlWTtcbiAgICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBvd25lckdyYXBoO1xuICB2YXIgb3duZXJDZW50ZXJYO1xuICB2YXIgb3duZXJDZW50ZXJZO1xuICB2YXIgZGlzdGFuY2VYO1xuICB2YXIgZGlzdGFuY2VZO1xuICB2YXIgYWJzRGlzdGFuY2VYO1xuICB2YXIgYWJzRGlzdGFuY2VZO1xuICB2YXIgZXN0aW1hdGVkU2l6ZTtcbiAgb3duZXJHcmFwaCA9IG5vZGUuZ2V0T3duZXIoKTtcblxuICBvd25lckNlbnRlclggPSAob3duZXJHcmFwaC5nZXRSaWdodCgpICsgb3duZXJHcmFwaC5nZXRMZWZ0KCkpIC8gMjtcbiAgb3duZXJDZW50ZXJZID0gKG93bmVyR3JhcGguZ2V0VG9wKCkgKyBvd25lckdyYXBoLmdldEJvdHRvbSgpKSAvIDI7XG4gIGRpc3RhbmNlWCA9IG5vZGUuZ2V0Q2VudGVyWCgpIC0gb3duZXJDZW50ZXJYO1xuICBkaXN0YW5jZVkgPSBub2RlLmdldENlbnRlclkoKSAtIG93bmVyQ2VudGVyWTtcbiAgYWJzRGlzdGFuY2VYID0gTWF0aC5hYnMoZGlzdGFuY2VYKSArIG5vZGUuZ2V0V2lkdGgoKSAvIDI7XG4gIGFic0Rpc3RhbmNlWSA9IE1hdGguYWJzKGRpc3RhbmNlWSkgKyBub2RlLmdldEhlaWdodCgpIC8gMjtcblxuICBpZiAobm9kZS5nZXRPd25lcigpID09IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSkgLy8gaW4gdGhlIHJvb3QgZ3JhcGhcbiAgICB7XG4gICAgICBlc3RpbWF0ZWRTaXplID0gb3duZXJHcmFwaC5nZXRFc3RpbWF0ZWRTaXplKCkgKiB0aGlzLmdyYXZpdHlSYW5nZUZhY3RvcjtcblxuICAgICAgaWYgKGFic0Rpc3RhbmNlWCA+IGVzdGltYXRlZFNpemUgfHwgYWJzRGlzdGFuY2VZID4gZXN0aW1hdGVkU2l6ZSkge1xuICAgICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VYID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VYO1xuICAgICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VZID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VZO1xuICAgICAgfVxuICAgIH0gZWxzZSAvLyBpbnNpZGUgYSBjb21wb3VuZFxuICAgIHtcbiAgICAgIGVzdGltYXRlZFNpemUgPSBvd25lckdyYXBoLmdldEVzdGltYXRlZFNpemUoKSAqIHRoaXMuY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3I7XG5cbiAgICAgIGlmIChhYnNEaXN0YW5jZVggPiBlc3RpbWF0ZWRTaXplIHx8IGFic0Rpc3RhbmNlWSA+IGVzdGltYXRlZFNpemUpIHtcbiAgICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWCA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWCAqIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQ7XG4gICAgICAgIG5vZGUuZ3Jhdml0YXRpb25Gb3JjZVkgPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBkaXN0YW5jZVkgKiB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50O1xuICAgICAgfVxuICAgIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pc0NvbnZlcmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbnZlcmdlZDtcbiAgdmFyIG9zY2lsYXRpbmcgPSBmYWxzZTtcblxuICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgPiB0aGlzLm1heEl0ZXJhdGlvbnMgLyAzKSB7XG4gICAgb3NjaWxhdGluZyA9IE1hdGguYWJzKHRoaXMudG90YWxEaXNwbGFjZW1lbnQgLSB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50KSA8IDI7XG4gIH1cblxuICBjb252ZXJnZWQgPSB0aGlzLnRvdGFsRGlzcGxhY2VtZW50IDwgdGhpcy50b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZDtcblxuICB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50ID0gdGhpcy50b3RhbERpc3BsYWNlbWVudDtcblxuICByZXR1cm4gY29udmVyZ2VkIHx8IG9zY2lsYXRpbmc7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ICYmICF0aGlzLmlzU3ViTGF5b3V0KSB7XG4gICAgaWYgKHRoaXMubm90QW5pbWF0ZWRJdGVyYXRpb25zID09IHRoaXMuYW5pbWF0aW9uUGVyaW9kKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucysrO1xuICAgIH1cbiAgfVxufTtcblxuLy9UaGlzIG1ldGhvZCBjYWxjdWxhdGVzIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gKHdlaWdodCkgZm9yIGFsbCBub2Rlc1xuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNOb09mQ2hpbGRyZW5Gb3JBbGxOb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5vZGU7XG4gIHZhciBhbGxOb2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIG5vZGUgPSBhbGxOb2Rlc1tpXTtcbiAgICBub2RlLm5vT2ZDaGlsZHJlbiA9IG5vZGUuZ2V0Tm9PZkNoaWxkcmVuKCk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBGUi1HcmlkIFZhcmlhbnQgUmVwdWxzaW9uIEZvcmNlIENhbGN1bGF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyaWQgPSBmdW5jdGlvbiAoZ3JhcGgpIHtcblxuICB2YXIgc2l6ZVggPSAwO1xuICB2YXIgc2l6ZVkgPSAwO1xuXG4gIHNpemVYID0gcGFyc2VJbnQoTWF0aC5jZWlsKChncmFwaC5nZXRSaWdodCgpIC0gZ3JhcGguZ2V0TGVmdCgpKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgc2l6ZVkgPSBwYXJzZUludChNYXRoLmNlaWwoKGdyYXBoLmdldEJvdHRvbSgpIC0gZ3JhcGguZ2V0VG9wKCkpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuXG4gIHZhciBncmlkID0gbmV3IEFycmF5KHNpemVYKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemVYOyBpKyspIHtcbiAgICBncmlkW2ldID0gbmV3IEFycmF5KHNpemVZKTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZVg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZVk7IGorKykge1xuICAgICAgZ3JpZFtpXVtqXSA9IG5ldyBBcnJheSgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBncmlkO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmFkZE5vZGVUb0dyaWQgPSBmdW5jdGlvbiAodiwgbGVmdCwgdG9wKSB7XG5cbiAgdmFyIHN0YXJ0WCA9IDA7XG4gIHZhciBmaW5pc2hYID0gMDtcbiAgdmFyIHN0YXJ0WSA9IDA7XG4gIHZhciBmaW5pc2hZID0gMDtcblxuICBzdGFydFggPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS54IC0gbGVmdCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIGZpbmlzaFggPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS53aWR0aCArIHYuZ2V0UmVjdCgpLnggLSBsZWZ0KSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgc3RhcnRZID0gcGFyc2VJbnQoTWF0aC5mbG9vcigodi5nZXRSZWN0KCkueSAtIHRvcCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIGZpbmlzaFkgPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS5oZWlnaHQgKyB2LmdldFJlY3QoKS55IC0gdG9wKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcblxuICBmb3IgKHZhciBpID0gc3RhcnRYOyBpIDw9IGZpbmlzaFg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSBzdGFydFk7IGogPD0gZmluaXNoWTsgaisrKSB7XG4gICAgICB0aGlzLmdyaWRbaV1bal0ucHVzaCh2KTtcbiAgICAgIHYuc2V0R3JpZENvb3JkaW5hdGVzKHN0YXJ0WCwgZmluaXNoWCwgc3RhcnRZLCBmaW5pc2hZKTtcbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS51cGRhdGVHcmlkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaTtcbiAgdmFyIG5vZGVBO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuXG4gIHRoaXMuZ3JpZCA9IHRoaXMuY2FsY0dyaWQodGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKTtcblxuICAvLyBwdXQgYWxsIG5vZGVzIHRvIHByb3BlciBncmlkIGNlbGxzXG4gIGZvciAoaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBub2RlQSA9IGxOb2Rlc1tpXTtcbiAgICB0aGlzLmFkZE5vZGVUb0dyaWQobm9kZUEsIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXRMZWZ0KCksIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXRUb3AoKSk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjdWxhdGVSZXB1bHNpb25Gb3JjZU9mQU5vZGUgPSBmdW5jdGlvbiAobm9kZUEsIHByb2Nlc3NlZE5vZGVTZXQsIGdyaWRVcGRhdGVBbGxvd2VkLCBmb3JjZVRvTm9kZVN1cnJvdW5kaW5nVXBkYXRlKSB7XG5cbiAgaWYgKHRoaXMudG90YWxJdGVyYXRpb25zICUgRkRMYXlvdXRDb25zdGFudHMuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPT0gMSAmJiBncmlkVXBkYXRlQWxsb3dlZCB8fCBmb3JjZVRvTm9kZVN1cnJvdW5kaW5nVXBkYXRlKSB7XG4gICAgdmFyIHN1cnJvdW5kaW5nID0gbmV3IFNldCgpO1xuICAgIG5vZGVBLnN1cnJvdW5kaW5nID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIG5vZGVCO1xuICAgIHZhciBncmlkID0gdGhpcy5ncmlkO1xuXG4gICAgZm9yICh2YXIgaSA9IG5vZGVBLnN0YXJ0WCAtIDE7IGkgPCBub2RlQS5maW5pc2hYICsgMjsgaSsrKSB7XG4gICAgICBmb3IgKHZhciBqID0gbm9kZUEuc3RhcnRZIC0gMTsgaiA8IG5vZGVBLmZpbmlzaFkgKyAyOyBqKyspIHtcbiAgICAgICAgaWYgKCEoaSA8IDAgfHwgaiA8IDAgfHwgaSA+PSBncmlkLmxlbmd0aCB8fCBqID49IGdyaWRbMF0ubGVuZ3RoKSkge1xuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgZ3JpZFtpXVtqXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgbm9kZUIgPSBncmlkW2ldW2pdW2tdO1xuXG4gICAgICAgICAgICAvLyBJZiBib3RoIG5vZGVzIGFyZSBub3QgbWVtYmVycyBvZiB0aGUgc2FtZSBncmFwaCwgXG4gICAgICAgICAgICAvLyBvciBib3RoIG5vZGVzIGFyZSB0aGUgc2FtZSwgc2tpcC5cbiAgICAgICAgICAgIGlmIChub2RlQS5nZXRPd25lcigpICE9IG5vZGVCLmdldE93bmVyKCkgfHwgbm9kZUEgPT0gbm9kZUIpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSByZXB1bHNpb24gZm9yY2UgYmV0d2VlblxuICAgICAgICAgICAgLy8gbm9kZUEgYW5kIG5vZGVCIGhhcyBhbHJlYWR5IGJlZW4gY2FsY3VsYXRlZFxuICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWROb2RlU2V0Lmhhcyhub2RlQikgJiYgIXN1cnJvdW5kaW5nLmhhcyhub2RlQikpIHtcbiAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IE1hdGguYWJzKG5vZGVBLmdldENlbnRlclgoKSAtIG5vZGVCLmdldENlbnRlclgoKSkgLSAobm9kZUEuZ2V0V2lkdGgoKSAvIDIgKyBub2RlQi5nZXRXaWR0aCgpIC8gMik7XG4gICAgICAgICAgICAgIHZhciBkaXN0YW5jZVkgPSBNYXRoLmFicyhub2RlQS5nZXRDZW50ZXJZKCkgLSBub2RlQi5nZXRDZW50ZXJZKCkpIC0gKG5vZGVBLmdldEhlaWdodCgpIC8gMiArIG5vZGVCLmdldEhlaWdodCgpIC8gMik7XG5cbiAgICAgICAgICAgICAgLy8gaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gbm9kZUEgYW5kIG5vZGVCIFxuICAgICAgICAgICAgICAvLyBpcyBsZXNzIHRoZW4gY2FsY3VsYXRpb24gcmFuZ2VcbiAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlWCA8PSB0aGlzLnJlcHVsc2lvblJhbmdlICYmIGRpc3RhbmNlWSA8PSB0aGlzLnJlcHVsc2lvblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgLy90aGVuIGFkZCBub2RlQiB0byBzdXJyb3VuZGluZyBvZiBub2RlQVxuICAgICAgICAgICAgICAgIHN1cnJvdW5kaW5nLmFkZChub2RlQik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBub2RlQS5zdXJyb3VuZGluZyA9IFsuLi5zdXJyb3VuZGluZ107XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IG5vZGVBLnN1cnJvdW5kaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5jYWxjUmVwdWxzaW9uRm9yY2Uobm9kZUEsIG5vZGVBLnN1cnJvdW5kaW5nW2ldKTtcbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNSZXB1bHNpb25SYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIDAuMDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXQ7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTGF5b3V0Q29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBIYXNoTWFwID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBMR3JhcGhNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBMTm9kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xudmFyIExFZGdlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBMR3JhcGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcbnZhciBQb2ludEQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcbnZhciBUcmFuc2Zvcm0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcbnZhciBFbWl0dGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XG52YXIgSGFzaFNldCA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXG5mdW5jdGlvbiBMYXlvdXQoaXNSZW1vdGVVc2UpIHtcbiAgRW1pdHRlci5jYWxsKHRoaXMpO1xuXG4gIC8vTGF5b3V0IFF1YWxpdHk6IDA6cHJvb2YsIDE6ZGVmYXVsdCwgMjpkcmFmdFxuICB0aGlzLmxheW91dFF1YWxpdHkgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZO1xuICAvL1doZXRoZXIgbGF5b3V0IHNob3VsZCBjcmVhdGUgYmVuZHBvaW50cyBhcyBuZWVkZWQgb3Igbm90XG4gIHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQ7XG4gIC8vV2hldGhlciBsYXlvdXQgc2hvdWxkIGJlIGluY3JlbWVudGFsIG9yIG5vdFxuICB0aGlzLmluY3JlbWVudGFsID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUw7XG4gIC8vV2hldGhlciB3ZSBhbmltYXRlIGZyb20gYmVmb3JlIHRvIGFmdGVyIGxheW91dCBub2RlIHBvc2l0aW9uc1xuICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVDtcbiAgLy9XaGV0aGVyIHdlIGFuaW1hdGUgdGhlIGxheW91dCBwcm9jZXNzIG9yIG5vdFxuICB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUO1xuICAvL051bWJlciBpdGVyYXRpb25zIHRoYXQgc2hvdWxkIGJlIGRvbmUgYmV0d2VlbiB0d28gc3VjY2Vzc2l2ZSBhbmltYXRpb25zXG4gIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRDtcbiAgLyoqXHJcbiAgICogV2hldGhlciBvciBub3QgbGVhZiBub2RlcyAobm9uLWNvbXBvdW5kIG5vZGVzKSBhcmUgb2YgdW5pZm9ybSBzaXplcy4gV2hlblxyXG4gICAqIHRoZXkgYXJlLCBib3RoIHNwcmluZyBhbmQgcmVwdWxzaW9uIGZvcmNlcyBiZXR3ZWVuIHR3byBsZWFmIG5vZGVzIGNhbiBiZVxyXG4gICAqIGNhbGN1bGF0ZWQgd2l0aG91dCB0aGUgZXhwZW5zaXZlIGNsaXBwaW5nIHBvaW50IGNhbGN1bGF0aW9ucywgcmVzdWx0aW5nXHJcbiAgICogaW4gbWFqb3Igc3BlZWQtdXAuXHJcbiAgICovXG4gIHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUztcbiAgLyoqXHJcbiAgICogVGhpcyBpcyB1c2VkIGZvciBjcmVhdGlvbiBvZiBiZW5kcG9pbnRzIGJ5IHVzaW5nIGR1bW15IG5vZGVzIGFuZCBlZGdlcy5cclxuICAgKiBNYXBzIGFuIExFZGdlIHRvIGl0cyBkdW1teSBiZW5kcG9pbnQgcGF0aC5cclxuICAgKi9cbiAgdGhpcy5lZGdlVG9EdW1teU5vZGVzID0gbmV3IEhhc2hNYXAoKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBuZXcgTEdyYXBoTWFuYWdlcih0aGlzKTtcbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gZmFsc2U7XG4gIHRoaXMuaXNTdWJMYXlvdXQgPSBmYWxzZTtcbiAgdGhpcy5pc1JlbW90ZVVzZSA9IGZhbHNlO1xuXG4gIGlmIChpc1JlbW90ZVVzZSAhPSBudWxsKSB7XG4gICAgdGhpcy5pc1JlbW90ZVVzZSA9IGlzUmVtb3RlVXNlO1xuICB9XG59XG5cbkxheW91dC5SQU5ET01fU0VFRCA9IDE7XG5cbkxheW91dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVtaXR0ZXIucHJvdG90eXBlKTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcbn07XG5cbkxheW91dC5wcm90b3R5cGUuZ2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUubmV3R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZ20gPSBuZXcgTEdyYXBoTWFuYWdlcih0aGlzKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcbiAgcmV0dXJuIGdtO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdHcmFwaCA9IGZ1bmN0aW9uICh2R3JhcGgpIHtcbiAgcmV0dXJuIG5ldyBMR3JhcGgobnVsbCwgdGhpcy5ncmFwaE1hbmFnZXIsIHZHcmFwaCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbiAodk5vZGUpIHtcbiAgcmV0dXJuIG5ldyBMTm9kZSh0aGlzLmdyYXBoTWFuYWdlciwgdk5vZGUpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdFZGdlID0gZnVuY3Rpb24gKHZFZGdlKSB7XG4gIHJldHVybiBuZXcgTEVkZ2UobnVsbCwgbnVsbCwgdkVkZ2UpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5jaGVja0xheW91dFN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkgPT0gbnVsbCB8fCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMCB8fCB0aGlzLmdyYXBoTWFuYWdlci5pbmNsdWRlc0ludmFsaWRFZGdlKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnJ1bkxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gZmFsc2U7XG5cbiAgaWYgKHRoaXMudGlsaW5nUHJlTGF5b3V0KSB7XG4gICAgdGhpcy50aWxpbmdQcmVMYXlvdXQoKTtcbiAgfVxuXG4gIHRoaXMuaW5pdFBhcmFtZXRlcnMoKTtcbiAgdmFyIGlzTGF5b3V0U3VjY2Vzc2Z1bGw7XG5cbiAgaWYgKHRoaXMuY2hlY2tMYXlvdXRTdWNjZXNzKCkpIHtcbiAgICBpc0xheW91dFN1Y2Nlc3NmdWxsID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgaXNMYXlvdXRTdWNjZXNzZnVsbCA9IHRoaXMubGF5b3V0KCk7XG4gIH1cblxuICBpZiAoTGF5b3V0Q29uc3RhbnRzLkFOSU1BVEUgPT09ICdkdXJpbmcnKSB7XG4gICAgLy8gSWYgdGhpcyBpcyBhICdkdXJpbmcnIGxheW91dCBhbmltYXRpb24uIExheW91dCBpcyBub3QgZmluaXNoZWQgeWV0LiBcbiAgICAvLyBXZSBuZWVkIHRvIHBlcmZvcm0gdGhlc2UgaW4gaW5kZXguanMgd2hlbiBsYXlvdXQgaXMgcmVhbGx5IGZpbmlzaGVkLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0xheW91dFN1Y2Nlc3NmdWxsKSB7XG4gICAgaWYgKCF0aGlzLmlzU3ViTGF5b3V0KSB7XG4gICAgICB0aGlzLmRvUG9zdExheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLnRpbGluZ1Bvc3RMYXlvdXQpIHtcbiAgICB0aGlzLnRpbGluZ1Bvc3RMYXlvdXQoKTtcbiAgfVxuXG4gIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9IHRydWU7XG5cbiAgcmV0dXJuIGlzTGF5b3V0U3VjY2Vzc2Z1bGw7XG59O1xuXG4vKipcclxuICogVGhpcyBtZXRob2QgcGVyZm9ybXMgdGhlIG9wZXJhdGlvbnMgcmVxdWlyZWQgYWZ0ZXIgbGF5b3V0LlxyXG4gKi9cbkxheW91dC5wcm90b3R5cGUuZG9Qb3N0TGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAvL2Fzc2VydCAhaXNTdWJMYXlvdXQgOiBcIlNob3VsZCBub3QgYmUgY2FsbGVkIG9uIHN1Yi1sYXlvdXQhXCI7XG4gIC8vIFByb3BhZ2F0ZSBnZW9tZXRyaWMgY2hhbmdlcyB0byB2LWxldmVsIG9iamVjdHNcbiAgaWYgKCF0aGlzLmluY3JlbWVudGFsKSB7XG4gICAgdGhpcy50cmFuc2Zvcm0oKTtcbiAgfVxuICB0aGlzLnVwZGF0ZSgpO1xufTtcblxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHVwZGF0ZXMgdGhlIGdlb21ldHJ5IG9mIHRoZSB0YXJnZXQgZ3JhcGggYWNjb3JkaW5nIHRvXHJcbiAqIGNhbGN1bGF0ZWQgbGF5b3V0LlxyXG4gKi9cbkxheW91dC5wcm90b3R5cGUudXBkYXRlMiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gdXBkYXRlIGJlbmQgcG9pbnRzXG4gIGlmICh0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQpIHtcbiAgICB0aGlzLmNyZWF0ZUJlbmRwb2ludHNGcm9tRHVtbXlOb2RlcygpO1xuXG4gICAgLy8gcmVzZXQgYWxsIGVkZ2VzLCBzaW5jZSB0aGUgdG9wb2xvZ3kgaGFzIGNoYW5nZWRcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCk7XG4gIH1cblxuICAvLyBwZXJmb3JtIGVkZ2UsIG5vZGUgYW5kIHJvb3QgdXBkYXRlcyBpZiBsYXlvdXQgaXMgbm90IGNhbGxlZFxuICAvLyByZW1vdGVseVxuICBpZiAoIXRoaXMuaXNSZW1vdGVVc2UpIHtcbiAgICAvLyB1cGRhdGUgYWxsIGVkZ2VzXG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIGFsbEVkZ2VzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbEVkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlZGdlID0gYWxsRWRnZXNbaV07XG4gICAgICAvLyAgICAgIHRoaXMudXBkYXRlKGVkZ2UpO1xuICAgIH1cblxuICAgIC8vIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBub2Rlc1xuICAgIHZhciBub2RlO1xuICAgIHZhciBub2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIC8vICAgICAgdGhpcy51cGRhdGUobm9kZSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHJvb3QgZ3JhcGhcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpO1xuICB9XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgdGhpcy51cGRhdGUyKCk7XG4gIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTE5vZGUpIHtcbiAgICB2YXIgbm9kZSA9IG9iajtcbiAgICBpZiAobm9kZS5nZXRDaGlsZCgpICE9IG51bGwpIHtcbiAgICAgIC8vIHNpbmNlIG5vZGUgaXMgY29tcG91bmQsIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBjaGlsZCBub2Rlc1xuICAgICAgdmFyIG5vZGVzID0gbm9kZS5nZXRDaGlsZCgpLmdldE5vZGVzKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHVwZGF0ZShub2Rlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgbm9kZSBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBub2RlIGltcGxlbWVudHMgdGhlXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cbiAgICBpZiAobm9kZS52R3JhcGhPYmplY3QgIT0gbnVsbCkge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZOb2RlID0gbm9kZS52R3JhcGhPYmplY3Q7XG5cbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxuICAgICAgdk5vZGUudXBkYXRlKG5vZGUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIHZhciBlZGdlID0gb2JqO1xuICAgIC8vIGlmIHRoZSBsLWxldmVsIGVkZ2UgaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgZWRnZSBpbXBsZW1lbnRzIHRoZVxuICAgIC8vIGludGVyZmFjZSBVcGRhdGFibGUuXG5cbiAgICBpZiAoZWRnZS52R3JhcGhPYmplY3QgIT0gbnVsbCkge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZFZGdlID0gZWRnZS52R3JhcGhPYmplY3Q7XG5cbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxuICAgICAgdkVkZ2UudXBkYXRlKGVkZ2UpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMR3JhcGgpIHtcbiAgICB2YXIgZ3JhcGggPSBvYmo7XG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgZ3JhcGggaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgb2JqZWN0IGltcGxlbWVudHMgdGhlXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cblxuICAgIGlmIChncmFwaC52R3JhcGhPYmplY3QgIT0gbnVsbCkge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZHcmFwaCA9IGdyYXBoLnZHcmFwaE9iamVjdDtcblxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXG4gICAgICB2R3JhcGgudXBkYXRlKGdyYXBoKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHNldCBhbGwgbGF5b3V0IHBhcmFtZXRlcnMgdG8gZGVmYXVsdCB2YWx1ZXNcclxuICogZGV0ZXJtaW5lZCBhdCBjb21waWxlIHRpbWUuXHJcbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmlzU3ViTGF5b3V0KSB7XG4gICAgdGhpcy5sYXlvdXRRdWFsaXR5ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWTtcbiAgICB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUO1xuICAgIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRDtcbiAgICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVDtcbiAgICB0aGlzLmluY3JlbWVudGFsID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUw7XG4gICAgdGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRDtcbiAgICB0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVM7XG4gIH1cblxuICBpZiAodGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQpIHtcbiAgICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gZmFsc2U7XG4gIH1cbn07XG5cbkxheW91dC5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKG5ld0xlZnRUb3ApIHtcbiAgaWYgKG5ld0xlZnRUb3AgPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy50cmFuc2Zvcm0obmV3IFBvaW50RCgwLCAwKSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gY3JlYXRlIGEgdHJhbnNmb3JtYXRpb24gb2JqZWN0IChmcm9tIEVjbGlwc2UgdG8gbGF5b3V0KS4gV2hlbiBhblxuICAgIC8vIGludmVyc2UgdHJhbnNmb3JtIGlzIGFwcGxpZWQsIHdlIGdldCB1cHBlci1sZWZ0IGNvb3JkaW5hdGUgb2YgdGhlXG4gICAgLy8gZHJhd2luZyBvciB0aGUgcm9vdCBncmFwaCBhdCBnaXZlbiBpbnB1dCBjb29yZGluYXRlIChzb21lIG1hcmdpbnNcbiAgICAvLyBhbHJlYWR5IGluY2x1ZGVkIGluIGNhbGN1bGF0aW9uIG9mIGxlZnQtdG9wKS5cblxuICAgIHZhciB0cmFucyA9IG5ldyBUcmFuc2Zvcm0oKTtcbiAgICB2YXIgbGVmdFRvcCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS51cGRhdGVMZWZ0VG9wKCk7XG5cbiAgICBpZiAobGVmdFRvcCAhPSBudWxsKSB7XG4gICAgICB0cmFucy5zZXRXb3JsZE9yZ1gobmV3TGVmdFRvcC54KTtcbiAgICAgIHRyYW5zLnNldFdvcmxkT3JnWShuZXdMZWZ0VG9wLnkpO1xuXG4gICAgICB0cmFucy5zZXREZXZpY2VPcmdYKGxlZnRUb3AueCk7XG4gICAgICB0cmFucy5zZXREZXZpY2VPcmdZKGxlZnRUb3AueSk7XG5cbiAgICAgIHZhciBub2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcbiAgICAgIHZhciBub2RlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgbm9kZS50cmFuc2Zvcm0odHJhbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuTGF5b3V0LnByb3RvdHlwZS5wb3NpdGlvbk5vZGVzUmFuZG9tbHkgPSBmdW5jdGlvbiAoZ3JhcGgpIHtcblxuICBpZiAoZ3JhcGggPT0gdW5kZWZpbmVkKSB7XG4gICAgLy9hc3NlcnQgIXRoaXMuaW5jcmVtZW50YWw7XG4gICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFuZG9tbHkodGhpcy5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCkpO1xuICAgIHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpLnVwZGF0ZUJvdW5kcyh0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbE5vZGU7XG4gICAgdmFyIGNoaWxkR3JhcGg7XG5cbiAgICB2YXIgbm9kZXMgPSBncmFwaC5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxOb2RlID0gbm9kZXNbaV07XG4gICAgICBjaGlsZEdyYXBoID0gbE5vZGUuZ2V0Q2hpbGQoKTtcblxuICAgICAgaWYgKGNoaWxkR3JhcGggPT0gbnVsbCkge1xuICAgICAgICBsTm9kZS5zY2F0dGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkR3JhcGguZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICBsTm9kZS5zY2F0dGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seShjaGlsZEdyYXBoKTtcbiAgICAgICAgbE5vZGUudXBkYXRlQm91bmRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcclxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIGxpc3Qgb2YgdHJlZXMgd2hlcmUgZWFjaCB0cmVlIGlzIHJlcHJlc2VudGVkIGFzIGFcclxuICogbGlzdCBvZiBsLW5vZGVzLiBUaGUgbWV0aG9kIHJldHVybnMgYSBsaXN0IG9mIHNpemUgMCB3aGVuOlxyXG4gKiAtIFRoZSBncmFwaCBpcyBub3QgZmxhdCBvclxyXG4gKiAtIE9uZSBvZiB0aGUgY29tcG9uZW50KHMpIG9mIHRoZSBncmFwaCBpcyBub3QgYSB0cmVlLlxyXG4gKi9cbkxheW91dC5wcm90b3R5cGUuZ2V0RmxhdEZvcmVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZsYXRGb3Jlc3QgPSBbXTtcbiAgdmFyIGlzRm9yZXN0ID0gdHJ1ZTtcblxuICAvLyBRdWljayByZWZlcmVuY2UgZm9yIGFsbCBub2RlcyBpbiB0aGUgZ3JhcGggbWFuYWdlciBhc3NvY2lhdGVkIHdpdGhcbiAgLy8gdGhpcyBsYXlvdXQuIFRoZSBsaXN0IHNob3VsZCBub3QgYmUgY2hhbmdlZC5cbiAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCk7XG5cbiAgLy8gRmlyc3QgYmUgc3VyZSB0aGF0IHRoZSBncmFwaCBpcyBmbGF0XG4gIHZhciBpc0ZsYXQgPSB0cnVlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYWxsTm9kZXNbaV0uZ2V0Q2hpbGQoKSAhPSBudWxsKSB7XG4gICAgICBpc0ZsYXQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm4gZW1wdHkgZm9yZXN0IGlmIHRoZSBncmFwaCBpcyBub3QgZmxhdC5cbiAgaWYgKCFpc0ZsYXQpIHtcbiAgICByZXR1cm4gZmxhdEZvcmVzdDtcbiAgfVxuXG4gIC8vIFJ1biBCRlMgZm9yIGVhY2ggY29tcG9uZW50IG9mIHRoZSBncmFwaC5cblxuICB2YXIgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XG4gIHZhciB0b0JlVmlzaXRlZCA9IFtdO1xuICB2YXIgcGFyZW50cyA9IG5ldyBIYXNoTWFwKCk7XG4gIHZhciB1blByb2Nlc3NlZE5vZGVzID0gW107XG5cbiAgdW5Qcm9jZXNzZWROb2RlcyA9IHVuUHJvY2Vzc2VkTm9kZXMuY29uY2F0KGFsbE5vZGVzKTtcblxuICAvLyBFYWNoIGl0ZXJhdGlvbiBvZiB0aGlzIGxvb3AgZmluZHMgYSBjb21wb25lbnQgb2YgdGhlIGdyYXBoIGFuZFxuICAvLyBkZWNpZGVzIHdoZXRoZXIgaXQgaXMgYSB0cmVlIG9yIG5vdC4gSWYgaXQgaXMgYSB0cmVlLCBhZGRzIGl0IHRvIHRoZVxuICAvLyBmb3Jlc3QgYW5kIGNvbnRpbnVlZCB3aXRoIHRoZSBuZXh0IGNvbXBvbmVudC5cblxuICB3aGlsZSAodW5Qcm9jZXNzZWROb2Rlcy5sZW5ndGggPiAwICYmIGlzRm9yZXN0KSB7XG4gICAgdG9CZVZpc2l0ZWQucHVzaCh1blByb2Nlc3NlZE5vZGVzWzBdKTtcblxuICAgIC8vIFN0YXJ0IHRoZSBCRlMuIEVhY2ggaXRlcmF0aW9uIG9mIHRoaXMgbG9vcCB2aXNpdHMgYSBub2RlIGluIGFcbiAgICAvLyBCRlMgbWFubmVyLlxuICAgIHdoaWxlICh0b0JlVmlzaXRlZC5sZW5ndGggPiAwICYmIGlzRm9yZXN0KSB7XG4gICAgICAvL3Bvb2wgb3BlcmF0aW9uXG4gICAgICB2YXIgY3VycmVudE5vZGUgPSB0b0JlVmlzaXRlZFswXTtcbiAgICAgIHRvQmVWaXNpdGVkLnNwbGljZSgwLCAxKTtcbiAgICAgIHZpc2l0ZWQuYWRkKGN1cnJlbnROb2RlKTtcblxuICAgICAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcbiAgICAgIHZhciBuZWlnaGJvckVkZ2VzID0gY3VycmVudE5vZGUuZ2V0RWRnZXMoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZWlnaGJvckVkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjdXJyZW50TmVpZ2hib3IgPSBuZWlnaGJvckVkZ2VzW2ldLmdldE90aGVyRW5kKGN1cnJlbnROb2RlKTtcblxuICAgICAgICAvLyBJZiBCRlMgaXMgbm90IGdyb3dpbmcgZnJvbSB0aGlzIG5laWdoYm9yLlxuICAgICAgICBpZiAocGFyZW50cy5nZXQoY3VycmVudE5vZGUpICE9IGN1cnJlbnROZWlnaGJvcikge1xuICAgICAgICAgIC8vIFdlIGhhdmVuJ3QgcHJldmlvdXNseSB2aXNpdGVkIHRoaXMgbmVpZ2hib3IuXG4gICAgICAgICAgaWYgKCF2aXNpdGVkLmNvbnRhaW5zKGN1cnJlbnROZWlnaGJvcikpIHtcbiAgICAgICAgICAgIHRvQmVWaXNpdGVkLnB1c2goY3VycmVudE5laWdoYm9yKTtcbiAgICAgICAgICAgIHBhcmVudHMucHV0KGN1cnJlbnROZWlnaGJvciwgY3VycmVudE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTaW5jZSB3ZSBoYXZlIHByZXZpb3VzbHkgdmlzaXRlZCB0aGlzIG5laWdoYm9yIGFuZFxuICAgICAgICAgIC8vIHRoaXMgbmVpZ2hib3IgaXMgbm90IHBhcmVudCBvZiBjdXJyZW50Tm9kZSwgZ2l2ZW5cbiAgICAgICAgICAvLyBncmFwaCBjb250YWlucyBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB0cmVlLCBoZW5jZVxuICAgICAgICAgIC8vIGl0IGlzIG5vdCBhIGZvcmVzdC5cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgaXNGb3Jlc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgZ3JhcGggY29udGFpbnMgYSBjb21wb25lbnQgdGhhdCBpcyBub3QgYSB0cmVlLiBFbXB0eVxuICAgIC8vIHByZXZpb3VzbHkgZm91bmQgdHJlZXMuIFRoZSBtZXRob2Qgd2lsbCBlbmQuXG4gICAgaWYgKCFpc0ZvcmVzdCkge1xuICAgICAgZmxhdEZvcmVzdCA9IFtdO1xuICAgIH1cbiAgICAvLyBTYXZlIGN1cnJlbnRseSB2aXNpdGVkIG5vZGVzIGFzIGEgdHJlZSBpbiBvdXIgZm9yZXN0LiBSZXNldFxuICAgIC8vIHZpc2l0ZWQgYW5kIHBhcmVudHMgbGlzdHMuIENvbnRpbnVlIHdpdGggdGhlIG5leHQgY29tcG9uZW50IG9mXG4gICAgLy8gdGhlIGdyYXBoLCBpZiBhbnkuXG4gICAgZWxzZSB7XG4gICAgICAgIHZhciB0ZW1wID0gW107XG4gICAgICAgIHZpc2l0ZWQuYWRkQWxsVG8odGVtcCk7XG4gICAgICAgIGZsYXRGb3Jlc3QucHVzaCh0ZW1wKTtcbiAgICAgICAgLy9mbGF0Rm9yZXN0ID0gZmxhdEZvcmVzdC5jb25jYXQodGVtcCk7XG4gICAgICAgIC8vdW5Qcm9jZXNzZWROb2Rlcy5yZW1vdmVBbGwodmlzaXRlZCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHRlbXBbaV07XG4gICAgICAgICAgdmFyIGluZGV4ID0gdW5Qcm9jZXNzZWROb2Rlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdW5Qcm9jZXNzZWROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2aXNpdGVkID0gbmV3IEhhc2hTZXQoKTtcbiAgICAgICAgcGFyZW50cyA9IG5ldyBIYXNoTWFwKCk7XG4gICAgICB9XG4gIH1cblxuICByZXR1cm4gZmxhdEZvcmVzdDtcbn07XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGR1bW15IG5vZGVzIChhbiBsLWxldmVsIG5vZGUgd2l0aCBtaW5pbWFsIGRpbWVuc2lvbnMpXHJcbiAqIGZvciB0aGUgZ2l2ZW4gZWRnZSAob25lIHBlciBiZW5kcG9pbnQpLiBUaGUgZXhpc3RpbmcgbC1sZXZlbCBzdHJ1Y3R1cmVcclxuICogaXMgdXBkYXRlZCBhY2NvcmRpbmdseS5cclxuICovXG5MYXlvdXQucHJvdG90eXBlLmNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzID0gZnVuY3Rpb24gKGVkZ2UpIHtcbiAgdmFyIGR1bW15Tm9kZXMgPSBbXTtcbiAgdmFyIHByZXYgPSBlZGdlLnNvdXJjZTtcblxuICB2YXIgZ3JhcGggPSB0aGlzLmdyYXBoTWFuYWdlci5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3IoZWRnZS5zb3VyY2UsIGVkZ2UudGFyZ2V0KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2UuYmVuZHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIC8vIGNyZWF0ZSBuZXcgZHVtbXkgbm9kZVxuICAgIHZhciBkdW1teU5vZGUgPSB0aGlzLm5ld05vZGUobnVsbCk7XG4gICAgZHVtbXlOb2RlLnNldFJlY3QobmV3IFBvaW50KDAsIDApLCBuZXcgRGltZW5zaW9uKDEsIDEpKTtcblxuICAgIGdyYXBoLmFkZChkdW1teU5vZGUpO1xuXG4gICAgLy8gY3JlYXRlIG5ldyBkdW1teSBlZGdlIGJldHdlZW4gcHJldiBhbmQgZHVtbXkgbm9kZVxuICAgIHZhciBkdW1teUVkZ2UgPSB0aGlzLm5ld0VkZ2UobnVsbCk7XG4gICAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKGR1bW15RWRnZSwgcHJldiwgZHVtbXlOb2RlKTtcblxuICAgIGR1bW15Tm9kZXMuYWRkKGR1bW15Tm9kZSk7XG4gICAgcHJldiA9IGR1bW15Tm9kZTtcbiAgfVxuXG4gIHZhciBkdW1teUVkZ2UgPSB0aGlzLm5ld0VkZ2UobnVsbCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLmFkZChkdW1teUVkZ2UsIHByZXYsIGVkZ2UudGFyZ2V0KTtcblxuICB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMucHV0KGVkZ2UsIGR1bW15Tm9kZXMpO1xuXG4gIC8vIHJlbW92ZSByZWFsIGVkZ2UgZnJvbSBncmFwaCBtYW5hZ2VyIGlmIGl0IGlzIGludGVyLWdyYXBoXG4gIGlmIChlZGdlLmlzSW50ZXJHcmFwaCgpKSB7XG4gICAgdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKGVkZ2UpO1xuICB9XG4gIC8vIGVsc2UsIHJlbW92ZSB0aGUgZWRnZSBmcm9tIHRoZSBjdXJyZW50IGdyYXBoXG4gIGVsc2Uge1xuICAgICAgZ3JhcGgucmVtb3ZlKGVkZ2UpO1xuICAgIH1cblxuICByZXR1cm4gZHVtbXlOb2Rlcztcbn07XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGJlbmRwb2ludHMgZm9yIGVkZ2VzIGZyb20gdGhlIGR1bW15IG5vZGVzXHJcbiAqIGF0IGwtbGV2ZWwuXHJcbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5jcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZGdlcyA9IFtdO1xuICBlZGdlcyA9IGVkZ2VzLmNvbmNhdCh0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpKTtcbiAgZWRnZXMgPSB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMua2V5U2V0KCkuY29uY2F0KGVkZ2VzKTtcblxuICBmb3IgKHZhciBrID0gMDsgayA8IGVkZ2VzLmxlbmd0aDsgaysrKSB7XG4gICAgdmFyIGxFZGdlID0gZWRnZXNba107XG5cbiAgICBpZiAobEVkZ2UuYmVuZHBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgcGF0aCA9IHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5nZXQobEVkZ2UpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGR1bW15Tm9kZSA9IHBhdGhbaV07XG4gICAgICAgIHZhciBwID0gbmV3IFBvaW50RChkdW1teU5vZGUuZ2V0Q2VudGVyWCgpLCBkdW1teU5vZGUuZ2V0Q2VudGVyWSgpKTtcblxuICAgICAgICAvLyB1cGRhdGUgYmVuZHBvaW50J3MgbG9jYXRpb24gYWNjb3JkaW5nIHRvIGR1bW15IG5vZGVcbiAgICAgICAgdmFyIGVicCA9IGxFZGdlLmJlbmRwb2ludHMuZ2V0KGkpO1xuICAgICAgICBlYnAueCA9IHAueDtcbiAgICAgICAgZWJwLnkgPSBwLnk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBkdW1teSBub2RlLCBkdW1teSBlZGdlcyBpbmNpZGVudCB3aXRoIHRoaXNcbiAgICAgICAgLy8gZHVtbXkgbm9kZSBpcyBhbHNvIHJlbW92ZWQgKHdpdGhpbiB0aGUgcmVtb3ZlIG1ldGhvZClcbiAgICAgICAgZHVtbXlOb2RlLmdldE93bmVyKCkucmVtb3ZlKGR1bW15Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCB0aGUgcmVhbCBlZGdlIHRvIGdyYXBoXG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5hZGQobEVkZ2UsIGxFZGdlLnNvdXJjZSwgbEVkZ2UudGFyZ2V0KTtcbiAgICB9XG4gIH1cbn07XG5cbkxheW91dC50cmFuc2Zvcm0gPSBmdW5jdGlvbiAoc2xpZGVyVmFsdWUsIGRlZmF1bHRWYWx1ZSwgbWluRGl2LCBtYXhNdWwpIHtcbiAgaWYgKG1pbkRpdiAhPSB1bmRlZmluZWQgJiYgbWF4TXVsICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuICAgIGlmIChzbGlkZXJWYWx1ZSA8PSA1MCkge1xuICAgICAgdmFyIG1pblZhbHVlID0gZGVmYXVsdFZhbHVlIC8gbWluRGl2O1xuICAgICAgdmFsdWUgLT0gKGRlZmF1bHRWYWx1ZSAtIG1pblZhbHVlKSAvIDUwICogKDUwIC0gc2xpZGVyVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF4VmFsdWUgPSBkZWZhdWx0VmFsdWUgKiBtYXhNdWw7XG4gICAgICB2YWx1ZSArPSAobWF4VmFsdWUgLSBkZWZhdWx0VmFsdWUpIC8gNTAgKiAoc2xpZGVyVmFsdWUgLSA1MCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBhLCBiO1xuXG4gICAgaWYgKHNsaWRlclZhbHVlIDw9IDUwKSB7XG4gICAgICBhID0gOS4wICogZGVmYXVsdFZhbHVlIC8gNTAwLjA7XG4gICAgICBiID0gZGVmYXVsdFZhbHVlIC8gMTAuMDtcbiAgICB9IGVsc2Uge1xuICAgICAgYSA9IDkuMCAqIGRlZmF1bHRWYWx1ZSAvIDUwLjA7XG4gICAgICBiID0gLTggKiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEgKiBzbGlkZXJWYWx1ZSArIGI7XG4gIH1cbn07XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBmaW5kcyBhbmQgcmV0dXJucyB0aGUgY2VudGVyIG9mIHRoZSBnaXZlbiBub2RlcywgYXNzdW1pbmdcclxuICogdGhhdCB0aGUgZ2l2ZW4gbm9kZXMgZm9ybSBhIHRyZWUgaW4gdGhlbXNlbHZlcy5cclxuICovXG5MYXlvdXQuZmluZENlbnRlck9mVHJlZSA9IGZ1bmN0aW9uIChub2Rlcykge1xuICB2YXIgbGlzdCA9IFtdO1xuICBsaXN0ID0gbGlzdC5jb25jYXQobm9kZXMpO1xuXG4gIHZhciByZW1vdmVkTm9kZXMgPSBbXTtcbiAgdmFyIHJlbWFpbmluZ0RlZ3JlZXMgPSBuZXcgSGFzaE1hcCgpO1xuICB2YXIgZm91bmRDZW50ZXIgPSBmYWxzZTtcbiAgdmFyIGNlbnRlck5vZGUgPSBudWxsO1xuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PSAxIHx8IGxpc3QubGVuZ3RoID09IDIpIHtcbiAgICBmb3VuZENlbnRlciA9IHRydWU7XG4gICAgY2VudGVyTm9kZSA9IGxpc3RbMF07XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbm9kZSA9IGxpc3RbaV07XG4gICAgdmFyIGRlZ3JlZSA9IG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpLnNpemUoKTtcbiAgICByZW1haW5pbmdEZWdyZWVzLnB1dChub2RlLCBub2RlLmdldE5laWdoYm9yc0xpc3QoKS5zaXplKCkpO1xuXG4gICAgaWYgKGRlZ3JlZSA9PSAxKSB7XG4gICAgICByZW1vdmVkTm9kZXMucHVzaChub2RlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgdGVtcExpc3QgPSBbXTtcbiAgdGVtcExpc3QgPSB0ZW1wTGlzdC5jb25jYXQocmVtb3ZlZE5vZGVzKTtcblxuICB3aGlsZSAoIWZvdW5kQ2VudGVyKSB7XG4gICAgdmFyIHRlbXBMaXN0MiA9IFtdO1xuICAgIHRlbXBMaXN0MiA9IHRlbXBMaXN0Mi5jb25jYXQodGVtcExpc3QpO1xuICAgIHRlbXBMaXN0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBub2RlID0gbGlzdFtpXTtcblxuICAgICAgdmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKG5vZGUpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmVpZ2hib3VycyA9IG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpO1xuXG4gICAgICBPYmplY3Qua2V5cyhuZWlnaGJvdXJzLnNldCkuZm9yRWFjaChmdW5jdGlvbiAoaikge1xuICAgICAgICB2YXIgbmVpZ2hib3VyID0gbmVpZ2hib3Vycy5zZXRbal07XG4gICAgICAgIGlmIChyZW1vdmVkTm9kZXMuaW5kZXhPZihuZWlnaGJvdXIpIDwgMCkge1xuICAgICAgICAgIHZhciBvdGhlckRlZ3JlZSA9IHJlbWFpbmluZ0RlZ3JlZXMuZ2V0KG5laWdoYm91cik7XG4gICAgICAgICAgdmFyIG5ld0RlZ3JlZSA9IG90aGVyRGVncmVlIC0gMTtcblxuICAgICAgICAgIGlmIChuZXdEZWdyZWUgPT0gMSkge1xuICAgICAgICAgICAgdGVtcExpc3QucHVzaChuZWlnaGJvdXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbWFpbmluZ0RlZ3JlZXMucHV0KG5laWdoYm91ciwgbmV3RGVncmVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlZE5vZGVzID0gcmVtb3ZlZE5vZGVzLmNvbmNhdCh0ZW1wTGlzdCk7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT0gMSB8fCBsaXN0Lmxlbmd0aCA9PSAyKSB7XG4gICAgICBmb3VuZENlbnRlciA9IHRydWU7XG4gICAgICBjZW50ZXJOb2RlID0gbGlzdFswXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2VudGVyTm9kZTtcbn07XG5cbi8qKlxyXG4gKiBEdXJpbmcgdGhlIGNvYXJzZW5pbmcgcHJvY2VzcywgdGhpcyBsYXlvdXQgbWF5IGJlIHJlZmVyZW5jZWQgYnkgdHdvIGdyYXBoIG1hbmFnZXJzXHJcbiAqIHRoaXMgc2V0dGVyIGZ1bmN0aW9uIGdyYW50cyBhY2Nlc3MgdG8gY2hhbmdlIHRoZSBjdXJyZW50bHkgYmVpbmcgdXNlZCBncmFwaCBtYW5hZ2VyXHJcbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5zZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoZ20pIHtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0O1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gTGF5b3V0Q29uc3RhbnRzKCkge31cblxuLyoqXHJcbiAqIExheW91dCBRdWFsaXR5XHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLlBST09GX1FVQUxJVFkgPSAwO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWSA9IDE7XG5MYXlvdXRDb25zdGFudHMuRFJBRlRfUVVBTElUWSA9IDI7XG5cbi8qKlxyXG4gKiBEZWZhdWx0IHBhcmFtZXRlcnNcclxuICovXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEID0gZmFsc2U7XG4vL0xheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gdHJ1ZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gZmFsc2U7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUID0gdHJ1ZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUID0gZmFsc2U7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fUEVSSU9EID0gNTA7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUyA9IGZhbHNlO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogR2VuZXJhbCBvdGhlciBjb25zdGFudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKlxyXG4gKiBNYXJnaW5zIG9mIGEgZ3JhcGggdG8gYmUgYXBwbGllZCBvbiBib3VkaW5nIHJlY3RhbmdsZSBvZiBpdHMgY29udGVudHMuIFdlXHJcbiAqIGFzc3VtZSBtYXJnaW5zIG9uIGFsbCBmb3VyIHNpZGVzIHRvIGJlIHVuaWZvcm0uXHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBUEhfTUFSR0lOID0gMTU7XG5cbi8qXHJcbiAqIFdoZXRoZXIgdG8gY29uc2lkZXIgbGFiZWxzIGluIG5vZGUgZGltZW5zaW9ucyBvciBub3RcclxuICovXG5MYXlvdXRDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gZmFsc2U7XG5cbi8qXHJcbiAqIERlZmF1bHQgZGltZW5zaW9uIG9mIGEgbm9uLWNvbXBvdW5kIG5vZGUuXHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkUgPSA0MDtcblxuLypcclxuICogRGVmYXVsdCBkaW1lbnNpb24gb2YgYSBub24tY29tcG91bmQgbm9kZS5cclxuICovXG5MYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfSEFMRl9TSVpFID0gTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkUgLyAyO1xuXG4vKlxyXG4gKiBFbXB0eSBjb21wb3VuZCBub2RlIHNpemUuIFdoZW4gYSBjb21wb3VuZCBub2RlIGlzIGVtcHR5LCBpdHMgYm90aFxyXG4gKiBkaW1lbnNpb25zIHNob3VsZCBiZSBvZiB0aGlzIHZhbHVlLlxyXG4gKi9cbkxheW91dENvbnN0YW50cy5FTVBUWV9DT01QT1VORF9OT0RFX1NJWkUgPSA0MDtcblxuLypcclxuICogTWluaW11bSBsZW5ndGggdGhhdCBhbiBlZGdlIHNob3VsZCB0YWtlIGR1cmluZyBsYXlvdXRcclxuICovXG5MYXlvdXRDb25zdGFudHMuTUlOX0VER0VfTEVOR1RIID0gMTtcblxuLypcclxuICogV29ybGQgYm91bmRhcmllcyB0aGF0IGxheW91dCBvcGVyYXRlcyBvblxyXG4gKi9cbkxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSA9IDEwMDAwMDA7XG5cbi8qXHJcbiAqIFdvcmxkIGJvdW5kYXJpZXMgdGhhdCByYW5kb20gcG9zaXRpb25pbmcgY2FuIGJlIHBlcmZvcm1lZCB3aXRoXHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlkgPSBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkgLyAxMDAwO1xuXG4vKlxyXG4gKiBDb29yZGluYXRlcyBvZiB0aGUgd29ybGQgY2VudGVyXHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9YID0gMTIwMDtcbkxheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWSA9IDkwMDtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXRDb25zdGFudHM7XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgVW5pcXVlSURHZW5lcmV0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5mdW5jdGlvbiBIYXNoTWFwKCkge1xuICB0aGlzLm1hcCA9IHt9O1xuICB0aGlzLmtleXMgPSBbXTtcbn1cblxuSGFzaE1hcC5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcbiAgaWYgKCF0aGlzLmNvbnRhaW5zKHRoZUlkKSkge1xuICAgIHRoaXMubWFwW3RoZUlkXSA9IHZhbHVlO1xuICAgIHRoaXMua2V5cy5wdXNoKGtleSk7XG4gIH1cbn07XG5cbkhhc2hNYXAucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xuICByZXR1cm4gdGhpcy5tYXBba2V5XSAhPSBudWxsO1xufTtcblxuSGFzaE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xuICByZXR1cm4gdGhpcy5tYXBbdGhlSWRdO1xufTtcblxuSGFzaE1hcC5wcm90b3R5cGUua2V5U2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5rZXlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoTWFwO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gVW5pcXVlSURHZW5lcmV0b3IoKSB7fVxuXG5VbmlxdWVJREdlbmVyZXRvci5sYXN0SUQgPSAwO1xuXG5VbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKFVuaXF1ZUlER2VuZXJldG9yLmlzUHJpbWl0aXZlKG9iaikpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGlmIChvYmoudW5pcXVlSUQgIT0gbnVsbCkge1xuICAgIHJldHVybiBvYmoudW5pcXVlSUQ7XG4gIH1cbiAgb2JqLnVuaXF1ZUlEID0gVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nKCk7XG4gIFVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRCsrO1xuICByZXR1cm4gb2JqLnVuaXF1ZUlEO1xufTtcblxuVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nID0gZnVuY3Rpb24gKGlkKSB7XG4gIGlmIChpZCA9PSBudWxsKSBpZCA9IFVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRDtcbiAgcmV0dXJuIFwiT2JqZWN0I1wiICsgaWQgKyBcIlwiO1xufTtcblxuVW5pcXVlSURHZW5lcmV0b3IuaXNQcmltaXRpdmUgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGFyZztcbiAgcmV0dXJuIGFyZyA9PSBudWxsIHx8IHR5cGUgIT0gXCJvYmplY3RcIiAmJiB0eXBlICE9IFwiZnVuY3Rpb25cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pcXVlSURHZW5lcmV0b3I7XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTEdyYXBoO1xudmFyIExFZGdlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxuZnVuY3Rpb24gTEdyYXBoTWFuYWdlcihsYXlvdXQpIHtcbiAgTEdyYXBoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7IC8vIEl0IG1heSBiZSBiZXR0ZXIgdG8gaW5pdGlsaXplIHRoaXMgb3V0IG9mIHRoaXMgZnVuY3Rpb24gYnV0IGl0IGdpdmVzIGFuIGVycm9yIChSaWdodC1oYW5kIHNpZGUgb2YgJ2luc3RhbmNlb2YnIGlzIG5vdCBjYWxsYWJsZSkgbm93LlxuICB0aGlzLmxheW91dCA9IGxheW91dDtcblxuICB0aGlzLmdyYXBocyA9IFtdO1xuICB0aGlzLmVkZ2VzID0gW107XG59XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmFkZFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBuZ3JhcGggPSB0aGlzLmxheW91dC5uZXdHcmFwaCgpO1xuICB2YXIgbm5vZGUgPSB0aGlzLmxheW91dC5uZXdOb2RlKG51bGwpO1xuICB2YXIgcm9vdCA9IHRoaXMuYWRkKG5ncmFwaCwgbm5vZGUpO1xuICB0aGlzLnNldFJvb3RHcmFwaChyb290KTtcbiAgcmV0dXJuIHRoaXMucm9vdEdyYXBoO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG5ld0dyYXBoLCBwYXJlbnROb2RlLCBuZXdFZGdlLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKSB7XG4gIC8vdGhlcmUgYXJlIGp1c3QgMiBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQgdGhlbiBpdCBhZGRzIGFuIExHcmFwaCBlbHNlIGl0IGFkZHMgYW4gTEVkZ2VcbiAgaWYgKG5ld0VkZ2UgPT0gbnVsbCAmJiBzb3VyY2VOb2RlID09IG51bGwgJiYgdGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgaWYgKG5ld0dyYXBoID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiR3JhcGggaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJQYXJlbnQgbm9kZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncmFwaHMuaW5kZXhPZihuZXdHcmFwaCkgPiAtMSkge1xuICAgICAgdGhyb3cgXCJHcmFwaCBhbHJlYWR5IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICAgIH1cblxuICAgIHRoaXMuZ3JhcGhzLnB1c2gobmV3R3JhcGgpO1xuXG4gICAgaWYgKG5ld0dyYXBoLnBhcmVudCAhPSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkFscmVhZHkgaGFzIGEgcGFyZW50IVwiO1xuICAgIH1cbiAgICBpZiAocGFyZW50Tm9kZS5jaGlsZCAhPSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkFscmVhZHkgaGFzIGEgY2hpbGQhXCI7XG4gICAgfVxuXG4gICAgbmV3R3JhcGgucGFyZW50ID0gcGFyZW50Tm9kZTtcbiAgICBwYXJlbnROb2RlLmNoaWxkID0gbmV3R3JhcGg7XG5cbiAgICByZXR1cm4gbmV3R3JhcGg7XG4gIH0gZWxzZSB7XG4gICAgLy9jaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBwYXJhbWV0ZXJzXG4gICAgdGFyZ2V0Tm9kZSA9IG5ld0VkZ2U7XG4gICAgc291cmNlTm9kZSA9IHBhcmVudE5vZGU7XG4gICAgbmV3RWRnZSA9IG5ld0dyYXBoO1xuICAgIHZhciBzb3VyY2VHcmFwaCA9IHNvdXJjZU5vZGUuZ2V0T3duZXIoKTtcbiAgICB2YXIgdGFyZ2V0R3JhcGggPSB0YXJnZXROb2RlLmdldE93bmVyKCk7XG5cbiAgICBpZiAoIShzb3VyY2VHcmFwaCAhPSBudWxsICYmIHNvdXJjZUdyYXBoLmdldEdyYXBoTWFuYWdlcigpID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuICAgIGlmICghKHRhcmdldEdyYXBoICE9IG51bGwgJiYgdGFyZ2V0R3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiVGFyZ2V0IG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlR3JhcGggPT0gdGFyZ2V0R3JhcGgpIHtcbiAgICAgIG5ld0VkZ2UuaXNJbnRlckdyYXBoID0gZmFsc2U7XG4gICAgICByZXR1cm4gc291cmNlR3JhcGguYWRkKG5ld0VkZ2UsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IHRydWU7XG5cbiAgICAgIC8vIHNldCBzb3VyY2UgYW5kIHRhcmdldFxuICAgICAgbmV3RWRnZS5zb3VyY2UgPSBzb3VyY2VOb2RlO1xuICAgICAgbmV3RWRnZS50YXJnZXQgPSB0YXJnZXROb2RlO1xuXG4gICAgICAvLyBhZGQgZWRnZSB0byBpbnRlci1ncmFwaCBlZGdlIGxpc3RcbiAgICAgIGlmICh0aGlzLmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPiAtMSkge1xuICAgICAgICB0aHJvdyBcIkVkZ2UgYWxyZWFkeSBpbiBpbnRlci1ncmFwaCBlZGdlIGxpc3QhXCI7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWRnZXMucHVzaChuZXdFZGdlKTtcblxuICAgICAgLy8gYWRkIGVkZ2UgdG8gc291cmNlIGFuZCB0YXJnZXQgaW5jaWRlbmN5IGxpc3RzXG4gICAgICBpZiAoIShuZXdFZGdlLnNvdXJjZSAhPSBudWxsICYmIG5ld0VkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICAgIHRocm93IFwiRWRnZSBzb3VyY2UgYW5kL29yIHRhcmdldCBpcyBudWxsIVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShuZXdFZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKG5ld0VkZ2UpID09IC0xICYmIG5ld0VkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPT0gLTEpKSB7XG4gICAgICAgIHRocm93IFwiRWRnZSBhbHJlYWR5IGluIHNvdXJjZSBhbmQvb3IgdGFyZ2V0IGluY2lkZW5jeSBsaXN0IVwiO1xuICAgICAgfVxuXG4gICAgICBuZXdFZGdlLnNvdXJjZS5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuICAgICAgbmV3RWRnZS50YXJnZXQuZWRnZXMucHVzaChuZXdFZGdlKTtcblxuICAgICAgcmV0dXJuIG5ld0VkZ2U7XG4gICAgfVxuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAobE9iaikge1xuICBpZiAobE9iaiBpbnN0YW5jZW9mIExHcmFwaCkge1xuICAgIHZhciBncmFwaCA9IGxPYmo7XG4gICAgaWYgKGdyYXBoLmdldEdyYXBoTWFuYWdlcigpICE9IHRoaXMpIHtcbiAgICAgIHRocm93IFwiR3JhcGggbm90IGluIHRoaXMgZ3JhcGggbWdyXCI7XG4gICAgfVxuICAgIGlmICghKGdyYXBoID09IHRoaXMucm9vdEdyYXBoIHx8IGdyYXBoLnBhcmVudCAhPSBudWxsICYmIGdyYXBoLnBhcmVudC5ncmFwaE1hbmFnZXIgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiSW52YWxpZCBwYXJlbnQgbm9kZSFcIjtcbiAgICB9XG5cbiAgICAvLyBmaXJzdCB0aGUgZWRnZXMgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcbiAgICB2YXIgZWRnZXNUb0JlUmVtb3ZlZCA9IFtdO1xuXG4gICAgZWRnZXNUb0JlUmVtb3ZlZCA9IGVkZ2VzVG9CZVJlbW92ZWQuY29uY2F0KGdyYXBoLmdldEVkZ2VzKCkpO1xuXG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIHMgPSBlZGdlc1RvQmVSZW1vdmVkLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgICAgZWRnZSA9IGVkZ2VzVG9CZVJlbW92ZWRbaV07XG4gICAgICBncmFwaC5yZW1vdmUoZWRnZSk7XG4gICAgfVxuXG4gICAgLy8gdGhlbiB0aGUgbm9kZXMgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcbiAgICB2YXIgbm9kZXNUb0JlUmVtb3ZlZCA9IFtdO1xuXG4gICAgbm9kZXNUb0JlUmVtb3ZlZCA9IG5vZGVzVG9CZVJlbW92ZWQuY29uY2F0KGdyYXBoLmdldE5vZGVzKCkpO1xuXG4gICAgdmFyIG5vZGU7XG4gICAgcyA9IG5vZGVzVG9CZVJlbW92ZWQubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgICBub2RlID0gbm9kZXNUb0JlUmVtb3ZlZFtpXTtcbiAgICAgIGdyYXBoLnJlbW92ZShub2RlKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBncmFwaCBpcyB0aGUgcm9vdFxuICAgIGlmIChncmFwaCA9PSB0aGlzLnJvb3RHcmFwaCkge1xuICAgICAgdGhpcy5zZXRSb290R3JhcGgobnVsbCk7XG4gICAgfVxuXG4gICAgLy8gbm93IHJlbW92ZSB0aGUgZ3JhcGggaXRzZWxmXG4gICAgdmFyIGluZGV4ID0gdGhpcy5ncmFwaHMuaW5kZXhPZihncmFwaCk7XG4gICAgdGhpcy5ncmFwaHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vIGFsc28gcmVzZXQgdGhlIHBhcmVudCBvZiB0aGUgZ3JhcGhcbiAgICBncmFwaC5wYXJlbnQgPSBudWxsO1xuICB9IGVsc2UgaWYgKGxPYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIGVkZ2UgPSBsT2JqO1xuICAgIGlmIChlZGdlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIWVkZ2UuaXNJbnRlckdyYXBoKSB7XG4gICAgICB0aHJvdyBcIk5vdCBhbiBpbnRlci1ncmFwaCBlZGdlIVwiO1xuICAgIH1cbiAgICBpZiAoIShlZGdlLnNvdXJjZSAhPSBudWxsICYmIGVkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBzb3VyY2UgYW5kIHRhcmdldCBub2RlcycgaW5jaWRlbmN5IGxpc3RzXG5cbiAgICBpZiAoIShlZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKGVkZ2UpICE9IC0xICYmIGVkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YoZWRnZSkgIT0gLTEpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGRvZXNuJ3Qga25vdyB0aGlzIGVkZ2UhXCI7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGluZGV4ID0gZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBlZGdlLnRhcmdldC5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBvd25lciBncmFwaCBtYW5hZ2VyJ3MgaW50ZXItZ3JhcGggZWRnZSBsaXN0XG5cbiAgICBpZiAoIShlZGdlLnNvdXJjZS5vd25lciAhPSBudWxsICYmIGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIkVkZ2Ugb3duZXIgZ3JhcGggb3Igb3duZXIgZ3JhcGggbWFuYWdlciBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuaW5kZXhPZihlZGdlKSA9PSAtMSkge1xuICAgICAgdGhyb3cgXCJOb3QgaW4gb3duZXIgZ3JhcGggbWFuYWdlcidzIGVkZ2UgbGlzdCFcIjtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5yb290R3JhcGgudXBkYXRlQm91bmRzKHRydWUpO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0R3JhcGhzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaHM7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxOb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWxsTm9kZXMgPT0gbnVsbCkge1xuICAgIHZhciBub2RlTGlzdCA9IFtdO1xuICAgIHZhciBncmFwaHMgPSB0aGlzLmdldEdyYXBocygpO1xuICAgIHZhciBzID0gZ3JhcGhzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgICAgbm9kZUxpc3QgPSBub2RlTGlzdC5jb25jYXQoZ3JhcGhzW2ldLmdldE5vZGVzKCkpO1xuICAgIH1cbiAgICB0aGlzLmFsbE5vZGVzID0gbm9kZUxpc3Q7XG4gIH1cbiAgcmV0dXJuIHRoaXMuYWxsTm9kZXM7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEFsbE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFsbE5vZGVzID0gbnVsbDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsRWRnZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYWxsRWRnZXMgPSBudWxsO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IG51bGw7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWxsRWRnZXMgPT0gbnVsbCkge1xuICAgIHZhciBlZGdlTGlzdCA9IFtdO1xuICAgIHZhciBncmFwaHMgPSB0aGlzLmdldEdyYXBocygpO1xuICAgIHZhciBzID0gZ3JhcGhzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyYXBocy5sZW5ndGg7IGkrKykge1xuICAgICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQoZ3JhcGhzW2ldLmdldEVkZ2VzKCkpO1xuICAgIH1cblxuICAgIGVkZ2VMaXN0ID0gZWRnZUxpc3QuY29uY2F0KHRoaXMuZWRnZXMpO1xuXG4gICAgdGhpcy5hbGxFZGdlcyA9IGVkZ2VMaXN0O1xuICB9XG4gIHJldHVybiB0aGlzLmFsbEVkZ2VzO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAobm9kZUxpc3QpIHtcbiAgaWYgKHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gIT0gbnVsbCkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG5cbiAgdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IG5vZGVMaXN0O1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucm9vdEdyYXBoO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuc2V0Um9vdEdyYXBoID0gZnVuY3Rpb24gKGdyYXBoKSB7XG4gIGlmIChncmFwaC5nZXRHcmFwaE1hbmFnZXIoKSAhPSB0aGlzKSB7XG4gICAgdGhyb3cgXCJSb290IG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgfVxuXG4gIHRoaXMucm9vdEdyYXBoID0gZ3JhcGg7XG4gIC8vIHJvb3QgZ3JhcGggbXVzdCBoYXZlIGEgcm9vdCBub2RlIGFzc29jaWF0ZWQgd2l0aCBpdCBmb3IgY29udmVuaWVuY2VcbiAgaWYgKGdyYXBoLnBhcmVudCA9PSBudWxsKSB7XG4gICAgZ3JhcGgucGFyZW50ID0gdGhpcy5sYXlvdXQubmV3Tm9kZShcIlJvb3Qgbm9kZVwiKTtcbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0TGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sYXlvdXQ7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5pc09uZUFuY2VzdG9yT2ZPdGhlciA9IGZ1bmN0aW9uIChmaXJzdE5vZGUsIHNlY29uZE5vZGUpIHtcbiAgaWYgKCEoZmlyc3ROb2RlICE9IG51bGwgJiYgc2Vjb25kTm9kZSAhPSBudWxsKSkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG5cbiAgaWYgKGZpcnN0Tm9kZSA9PSBzZWNvbmROb2RlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gSXMgc2Vjb25kIG5vZGUgYW4gYW5jZXN0b3Igb2YgdGhlIGZpcnN0IG9uZT9cbiAgdmFyIG93bmVyR3JhcGggPSBmaXJzdE5vZGUuZ2V0T3duZXIoKTtcbiAgdmFyIHBhcmVudE5vZGU7XG5cbiAgZG8ge1xuICAgIHBhcmVudE5vZGUgPSBvd25lckdyYXBoLmdldFBhcmVudCgpO1xuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gc2Vjb25kTm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb3duZXJHcmFwaCA9IHBhcmVudE5vZGUuZ2V0T3duZXIoKTtcbiAgICBpZiAob3duZXJHcmFwaCA9PSBudWxsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH0gd2hpbGUgKHRydWUpO1xuICAvLyBJcyBmaXJzdCBub2RlIGFuIGFuY2VzdG9yIG9mIHRoZSBzZWNvbmQgb25lP1xuICBvd25lckdyYXBoID0gc2Vjb25kTm9kZS5nZXRPd25lcigpO1xuXG4gIGRvIHtcbiAgICBwYXJlbnROb2RlID0gb3duZXJHcmFwaC5nZXRQYXJlbnQoKTtcblxuICAgIGlmIChwYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChwYXJlbnROb2RlID09IGZpcnN0Tm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb3duZXJHcmFwaCA9IHBhcmVudE5vZGUuZ2V0T3duZXIoKTtcbiAgICBpZiAob3duZXJHcmFwaCA9PSBudWxsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH0gd2hpbGUgKHRydWUpO1xuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZGdlO1xuICB2YXIgc291cmNlTm9kZTtcbiAgdmFyIHRhcmdldE5vZGU7XG4gIHZhciBzb3VyY2VBbmNlc3RvckdyYXBoO1xuICB2YXIgdGFyZ2V0QW5jZXN0b3JHcmFwaDtcblxuICB2YXIgZWRnZXMgPSB0aGlzLmdldEFsbEVkZ2VzKCk7XG4gIHZhciBzID0gZWRnZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIGVkZ2UgPSBlZGdlc1tpXTtcblxuICAgIHNvdXJjZU5vZGUgPSBlZGdlLnNvdXJjZTtcbiAgICB0YXJnZXROb2RlID0gZWRnZS50YXJnZXQ7XG4gICAgZWRnZS5sY2EgPSBudWxsO1xuICAgIGVkZ2Uuc291cmNlSW5MY2EgPSBzb3VyY2VOb2RlO1xuICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXROb2RlO1xuXG4gICAgaWYgKHNvdXJjZU5vZGUgPT0gdGFyZ2V0Tm9kZSkge1xuICAgICAgZWRnZS5sY2EgPSBzb3VyY2VOb2RlLmdldE93bmVyKCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBzb3VyY2VBbmNlc3RvckdyYXBoID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xuXG4gICAgd2hpbGUgKGVkZ2UubGNhID09IG51bGwpIHtcbiAgICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXROb2RlO1xuICAgICAgdGFyZ2V0QW5jZXN0b3JHcmFwaCA9IHRhcmdldE5vZGUuZ2V0T3duZXIoKTtcblxuICAgICAgd2hpbGUgKGVkZ2UubGNhID09IG51bGwpIHtcbiAgICAgICAgaWYgKHRhcmdldEFuY2VzdG9yR3JhcGggPT0gc291cmNlQW5jZXN0b3JHcmFwaCkge1xuICAgICAgICAgIGVkZ2UubGNhID0gdGFyZ2V0QW5jZXN0b3JHcmFwaDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRBbmNlc3RvckdyYXBoID09IHRoaXMucm9vdEdyYXBoKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWRnZS5sY2EgIT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXRBbmNlc3RvckdyYXBoLmdldFBhcmVudCgpO1xuICAgICAgICB0YXJnZXRBbmNlc3RvckdyYXBoID0gZWRnZS50YXJnZXRJbkxjYS5nZXRPd25lcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc291cmNlQW5jZXN0b3JHcmFwaCA9PSB0aGlzLnJvb3RHcmFwaCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGVkZ2UubGNhID09IG51bGwpIHtcbiAgICAgICAgZWRnZS5zb3VyY2VJbkxjYSA9IHNvdXJjZUFuY2VzdG9yR3JhcGguZ2V0UGFyZW50KCk7XG4gICAgICAgIHNvdXJjZUFuY2VzdG9yR3JhcGggPSBlZGdlLnNvdXJjZUluTGNhLmdldE93bmVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UubGNhID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgIH1cbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yID0gZnVuY3Rpb24gKGZpcnN0Tm9kZSwgc2Vjb25kTm9kZSkge1xuICBpZiAoZmlyc3ROb2RlID09IHNlY29uZE5vZGUpIHtcbiAgICByZXR1cm4gZmlyc3ROb2RlLmdldE93bmVyKCk7XG4gIH1cbiAgdmFyIGZpcnN0T3duZXJHcmFwaCA9IGZpcnN0Tm9kZS5nZXRPd25lcigpO1xuXG4gIGRvIHtcbiAgICBpZiAoZmlyc3RPd25lckdyYXBoID09IG51bGwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgc2Vjb25kT3duZXJHcmFwaCA9IHNlY29uZE5vZGUuZ2V0T3duZXIoKTtcblxuICAgIGRvIHtcbiAgICAgIGlmIChzZWNvbmRPd25lckdyYXBoID09IG51bGwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWNvbmRPd25lckdyYXBoID09IGZpcnN0T3duZXJHcmFwaCkge1xuICAgICAgICByZXR1cm4gc2Vjb25kT3duZXJHcmFwaDtcbiAgICAgIH1cbiAgICAgIHNlY29uZE93bmVyR3JhcGggPSBzZWNvbmRPd25lckdyYXBoLmdldFBhcmVudCgpLmdldE93bmVyKCk7XG4gICAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgICBmaXJzdE93bmVyR3JhcGggPSBmaXJzdE93bmVyR3JhcGguZ2V0UGFyZW50KCkuZ2V0T3duZXIoKTtcbiAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgcmV0dXJuIGZpcnN0T3duZXJHcmFwaDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzID0gZnVuY3Rpb24gKGdyYXBoLCBkZXB0aCkge1xuICBpZiAoZ3JhcGggPT0gbnVsbCAmJiBkZXB0aCA9PSBudWxsKSB7XG4gICAgZ3JhcGggPSB0aGlzLnJvb3RHcmFwaDtcbiAgICBkZXB0aCA9IDE7XG4gIH1cbiAgdmFyIG5vZGU7XG5cbiAgdmFyIG5vZGVzID0gZ3JhcGguZ2V0Tm9kZXMoKTtcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGUuaW5jbHVzaW9uVHJlZURlcHRoID0gZGVwdGg7XG5cbiAgICBpZiAobm9kZS5jaGlsZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzKG5vZGUuY2hpbGQsIGRlcHRoICsgMSk7XG4gICAgfVxuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5pbmNsdWRlc0ludmFsaWRFZGdlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWRnZTtcblxuICB2YXIgcyA9IHRoaXMuZWRnZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIGVkZ2UgPSB0aGlzLmVkZ2VzW2ldO1xuXG4gICAgaWYgKHRoaXMuaXNPbmVBbmNlc3Rvck9mT3RoZXIoZWRnZS5zb3VyY2UsIGVkZ2UudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoTWFuYWdlcjtcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBMR3JhcGhPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIElHZW9tZXRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgSU1hdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblxuZnVuY3Rpb24gTEVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKSB7XG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZFZGdlKTtcblxuICB0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZhbHNlO1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZFZGdlO1xuICB0aGlzLmJlbmRwb2ludHMgPSBbXTtcbiAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xufVxuXG5MRWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xuICBMRWRnZVtwcm9wXSA9IExHcmFwaE9iamVjdFtwcm9wXTtcbn1cblxuTEVkZ2UucHJvdG90eXBlLmdldFNvdXJjZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuc291cmNlO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldFRhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMudGFyZ2V0O1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmlzSW50ZXJHcmFwaCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaXNJbnRlckdyYXBoO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubGVuZ3RoO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0O1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldEJlbmRwb2ludHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmJlbmRwb2ludHM7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0TGNhID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sY2E7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0U291cmNlSW5MY2EgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnNvdXJjZUluTGNhO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldFRhcmdldEluTGNhID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy50YXJnZXRJbkxjYTtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmICh0aGlzLnNvdXJjZSA9PT0gbm9kZSkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldDtcbiAgfSBlbHNlIGlmICh0aGlzLnRhcmdldCA9PT0gbm9kZSkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBcIk5vZGUgaXMgbm90IGluY2lkZW50IHdpdGggdGhpcyBlZGdlXCI7XG4gIH1cbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZEluR3JhcGggPSBmdW5jdGlvbiAobm9kZSwgZ3JhcGgpIHtcbiAgdmFyIG90aGVyRW5kID0gdGhpcy5nZXRPdGhlckVuZChub2RlKTtcbiAgdmFyIHJvb3QgPSBncmFwaC5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCk7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAob3RoZXJFbmQuZ2V0T3duZXIoKSA9PSBncmFwaCkge1xuICAgICAgcmV0dXJuIG90aGVyRW5kO1xuICAgIH1cblxuICAgIGlmIChvdGhlckVuZC5nZXRPd25lcigpID09IHJvb3QpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIG90aGVyRW5kID0gb3RoZXJFbmQuZ2V0T3duZXIoKS5nZXRQYXJlbnQoKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLnVwZGF0ZUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNsaXBQb2ludENvb3JkaW5hdGVzID0gbmV3IEFycmF5KDQpO1xuXG4gIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID0gSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbih0aGlzLnRhcmdldC5nZXRSZWN0KCksIHRoaXMuc291cmNlLmdldFJlY3QoKSwgY2xpcFBvaW50Q29vcmRpbmF0ZXMpO1xuXG4gIGlmICghdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQpIHtcbiAgICB0aGlzLmxlbmd0aFggPSBjbGlwUG9pbnRDb29yZGluYXRlc1swXSAtIGNsaXBQb2ludENvb3JkaW5hdGVzWzJdO1xuICAgIHRoaXMubGVuZ3RoWSA9IGNsaXBQb2ludENvb3JkaW5hdGVzWzFdIC0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbM107XG5cbiAgICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhYKSA8IDEuMCkge1xuICAgICAgdGhpcy5sZW5ndGhYID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFgpO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFkpIDwgMS4wKSB7XG4gICAgICB0aGlzLmxlbmd0aFkgPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWSk7XG4gICAgfVxuXG4gICAgdGhpcy5sZW5ndGggPSBNYXRoLnNxcnQodGhpcy5sZW5ndGhYICogdGhpcy5sZW5ndGhYICsgdGhpcy5sZW5ndGhZICogdGhpcy5sZW5ndGhZKTtcbiAgfVxufTtcblxuTEVkZ2UucHJvdG90eXBlLnVwZGF0ZUxlbmd0aFNpbXBsZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5sZW5ndGhYID0gdGhpcy50YXJnZXQuZ2V0Q2VudGVyWCgpIC0gdGhpcy5zb3VyY2UuZ2V0Q2VudGVyWCgpO1xuICB0aGlzLmxlbmd0aFkgPSB0aGlzLnRhcmdldC5nZXRDZW50ZXJZKCkgLSB0aGlzLnNvdXJjZS5nZXRDZW50ZXJZKCk7XG5cbiAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWCkgPCAxLjApIHtcbiAgICB0aGlzLmxlbmd0aFggPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWCk7XG4gIH1cblxuICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhZKSA8IDEuMCkge1xuICAgIHRoaXMubGVuZ3RoWSA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhZKTtcbiAgfVxuXG4gIHRoaXMubGVuZ3RoID0gTWF0aC5zcXJ0KHRoaXMubGVuZ3RoWCAqIHRoaXMubGVuZ3RoWCArIHRoaXMubGVuZ3RoWSAqIHRoaXMubGVuZ3RoWSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExFZGdlO1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gTEdyYXBoT2JqZWN0KHZHcmFwaE9iamVjdCkge1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZHcmFwaE9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGhPYmplY3Q7XG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBJR2VvbWV0cnkoKSB7fVxuXG5JR2VvbWV0cnkuY2FsY1NlcGFyYXRpb25BbW91bnQgPSBmdW5jdGlvbiAocmVjdEEsIHJlY3RCLCBvdmVybGFwQW1vdW50LCBzZXBhcmF0aW9uQnVmZmVyKSB7XG4gIGlmICghcmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICB2YXIgZGlyZWN0aW9ucyA9IG5ldyBBcnJheSgyKTtcbiAgSUdlb21ldHJ5LmRlY2lkZURpcmVjdGlvbnNGb3JPdmVybGFwcGluZ05vZGVzKHJlY3RBLCByZWN0QiwgZGlyZWN0aW9ucyk7XG4gIG92ZXJsYXBBbW91bnRbMF0gPSBNYXRoLm1pbihyZWN0QS5nZXRSaWdodCgpLCByZWN0Qi5nZXRSaWdodCgpKSAtIE1hdGgubWF4KHJlY3RBLngsIHJlY3RCLngpO1xuICBvdmVybGFwQW1vdW50WzFdID0gTWF0aC5taW4ocmVjdEEuZ2V0Qm90dG9tKCksIHJlY3RCLmdldEJvdHRvbSgpKSAtIE1hdGgubWF4KHJlY3RBLnksIHJlY3RCLnkpO1xuICAvLyB1cGRhdGUgdGhlIG92ZXJsYXBwaW5nIGFtb3VudHMgZm9yIHRoZSBmb2xsb3dpbmcgY2FzZXM6XG4gIGlmIChyZWN0QS5nZXRYKCkgPD0gcmVjdEIuZ2V0WCgpICYmIHJlY3RBLmdldFJpZ2h0KCkgPj0gcmVjdEIuZ2V0UmlnaHQoKSkge1xuICAgIG92ZXJsYXBBbW91bnRbMF0gKz0gTWF0aC5taW4ocmVjdEIuZ2V0WCgpIC0gcmVjdEEuZ2V0WCgpLCByZWN0QS5nZXRSaWdodCgpIC0gcmVjdEIuZ2V0UmlnaHQoKSk7XG4gIH0gZWxzZSBpZiAocmVjdEIuZ2V0WCgpIDw9IHJlY3RBLmdldFgoKSAmJiByZWN0Qi5nZXRSaWdodCgpID49IHJlY3RBLmdldFJpZ2h0KCkpIHtcbiAgICBvdmVybGFwQW1vdW50WzBdICs9IE1hdGgubWluKHJlY3RBLmdldFgoKSAtIHJlY3RCLmdldFgoKSwgcmVjdEIuZ2V0UmlnaHQoKSAtIHJlY3RBLmdldFJpZ2h0KCkpO1xuICB9XG4gIGlmIChyZWN0QS5nZXRZKCkgPD0gcmVjdEIuZ2V0WSgpICYmIHJlY3RBLmdldEJvdHRvbSgpID49IHJlY3RCLmdldEJvdHRvbSgpKSB7XG4gICAgb3ZlcmxhcEFtb3VudFsxXSArPSBNYXRoLm1pbihyZWN0Qi5nZXRZKCkgLSByZWN0QS5nZXRZKCksIHJlY3RBLmdldEJvdHRvbSgpIC0gcmVjdEIuZ2V0Qm90dG9tKCkpO1xuICB9IGVsc2UgaWYgKHJlY3RCLmdldFkoKSA8PSByZWN0QS5nZXRZKCkgJiYgcmVjdEIuZ2V0Qm90dG9tKCkgPj0gcmVjdEEuZ2V0Qm90dG9tKCkpIHtcbiAgICBvdmVybGFwQW1vdW50WzFdICs9IE1hdGgubWluKHJlY3RBLmdldFkoKSAtIHJlY3RCLmdldFkoKSwgcmVjdEIuZ2V0Qm90dG9tKCkgLSByZWN0QS5nZXRCb3R0b20oKSk7XG4gIH1cblxuICAvLyBmaW5kIHNsb3BlIG9mIHRoZSBsaW5lIHBhc3NlcyB0d28gY2VudGVyc1xuICB2YXIgc2xvcGUgPSBNYXRoLmFicygocmVjdEIuZ2V0Q2VudGVyWSgpIC0gcmVjdEEuZ2V0Q2VudGVyWSgpKSAvIChyZWN0Qi5nZXRDZW50ZXJYKCkgLSByZWN0QS5nZXRDZW50ZXJYKCkpKTtcbiAgLy8gaWYgY2VudGVycyBhcmUgb3ZlcmxhcHBlZFxuICBpZiAocmVjdEIuZ2V0Q2VudGVyWSgpID09IHJlY3RBLmdldENlbnRlclkoKSAmJiByZWN0Qi5nZXRDZW50ZXJYKCkgPT0gcmVjdEEuZ2V0Q2VudGVyWCgpKSB7XG4gICAgLy8gYXNzdW1lIHRoZSBzbG9wZSBpcyAxICg0NSBkZWdyZWUpXG4gICAgc2xvcGUgPSAxLjA7XG4gIH1cblxuICB2YXIgbW92ZUJ5WSA9IHNsb3BlICogb3ZlcmxhcEFtb3VudFswXTtcbiAgdmFyIG1vdmVCeVggPSBvdmVybGFwQW1vdW50WzFdIC8gc2xvcGU7XG4gIGlmIChvdmVybGFwQW1vdW50WzBdIDwgbW92ZUJ5WCkge1xuICAgIG1vdmVCeVggPSBvdmVybGFwQW1vdW50WzBdO1xuICB9IGVsc2Uge1xuICAgIG1vdmVCeVkgPSBvdmVybGFwQW1vdW50WzFdO1xuICB9XG4gIC8vIHJldHVybiBoYWxmIHRoZSBhbW91bnQgc28gdGhhdCBpZiBlYWNoIHJlY3RhbmdsZSBpcyBtb3ZlZCBieSB0aGVzZVxuICAvLyBhbW91bnRzIGluIG9wcG9zaXRlIGRpcmVjdGlvbnMsIG92ZXJsYXAgd2lsbCBiZSByZXNvbHZlZFxuICBvdmVybGFwQW1vdW50WzBdID0gLTEgKiBkaXJlY3Rpb25zWzBdICogKG1vdmVCeVggLyAyICsgc2VwYXJhdGlvbkJ1ZmZlcik7XG4gIG92ZXJsYXBBbW91bnRbMV0gPSAtMSAqIGRpcmVjdGlvbnNbMV0gKiAobW92ZUJ5WSAvIDIgKyBzZXBhcmF0aW9uQnVmZmVyKTtcbn07XG5cbklHZW9tZXRyeS5kZWNpZGVEaXJlY3Rpb25zRm9yT3ZlcmxhcHBpbmdOb2RlcyA9IGZ1bmN0aW9uIChyZWN0QSwgcmVjdEIsIGRpcmVjdGlvbnMpIHtcbiAgaWYgKHJlY3RBLmdldENlbnRlclgoKSA8IHJlY3RCLmdldENlbnRlclgoKSkge1xuICAgIGRpcmVjdGlvbnNbMF0gPSAtMTtcbiAgfSBlbHNlIHtcbiAgICBkaXJlY3Rpb25zWzBdID0gMTtcbiAgfVxuXG4gIGlmIChyZWN0QS5nZXRDZW50ZXJZKCkgPCByZWN0Qi5nZXRDZW50ZXJZKCkpIHtcbiAgICBkaXJlY3Rpb25zWzFdID0gLTE7XG4gIH0gZWxzZSB7XG4gICAgZGlyZWN0aW9uc1sxXSA9IDE7XG4gIH1cbn07XG5cbklHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24yID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0QiwgcmVzdWx0KSB7XG4gIC8vcmVzdWx0WzAtMV0gd2lsbCBjb250YWluIGNsaXBQb2ludCBvZiByZWN0QSwgcmVzdWx0WzItM10gd2lsbCBjb250YWluIGNsaXBQb2ludCBvZiByZWN0QlxuICB2YXIgcDF4ID0gcmVjdEEuZ2V0Q2VudGVyWCgpO1xuICB2YXIgcDF5ID0gcmVjdEEuZ2V0Q2VudGVyWSgpO1xuICB2YXIgcDJ4ID0gcmVjdEIuZ2V0Q2VudGVyWCgpO1xuICB2YXIgcDJ5ID0gcmVjdEIuZ2V0Q2VudGVyWSgpO1xuXG4gIC8vaWYgdHdvIHJlY3RhbmdsZXMgaW50ZXJzZWN0LCB0aGVuIGNsaXBwaW5nIHBvaW50cyBhcmUgY2VudGVyc1xuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIHtcbiAgICByZXN1bHRbMF0gPSBwMXg7XG4gICAgcmVzdWx0WzFdID0gcDF5O1xuICAgIHJlc3VsdFsyXSA9IHAyeDtcbiAgICByZXN1bHRbM10gPSBwMnk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy92YXJpYWJsZXMgZm9yIHJlY3RBXG4gIHZhciB0b3BMZWZ0QXggPSByZWN0QS5nZXRYKCk7XG4gIHZhciB0b3BMZWZ0QXkgPSByZWN0QS5nZXRZKCk7XG4gIHZhciB0b3BSaWdodEF4ID0gcmVjdEEuZ2V0UmlnaHQoKTtcbiAgdmFyIGJvdHRvbUxlZnRBeCA9IHJlY3RBLmdldFgoKTtcbiAgdmFyIGJvdHRvbUxlZnRBeSA9IHJlY3RBLmdldEJvdHRvbSgpO1xuICB2YXIgYm90dG9tUmlnaHRBeCA9IHJlY3RBLmdldFJpZ2h0KCk7XG4gIHZhciBoYWxmV2lkdGhBID0gcmVjdEEuZ2V0V2lkdGhIYWxmKCk7XG4gIHZhciBoYWxmSGVpZ2h0QSA9IHJlY3RBLmdldEhlaWdodEhhbGYoKTtcbiAgLy92YXJpYWJsZXMgZm9yIHJlY3RCXG4gIHZhciB0b3BMZWZ0QnggPSByZWN0Qi5nZXRYKCk7XG4gIHZhciB0b3BMZWZ0QnkgPSByZWN0Qi5nZXRZKCk7XG4gIHZhciB0b3BSaWdodEJ4ID0gcmVjdEIuZ2V0UmlnaHQoKTtcbiAgdmFyIGJvdHRvbUxlZnRCeCA9IHJlY3RCLmdldFgoKTtcbiAgdmFyIGJvdHRvbUxlZnRCeSA9IHJlY3RCLmdldEJvdHRvbSgpO1xuICB2YXIgYm90dG9tUmlnaHRCeCA9IHJlY3RCLmdldFJpZ2h0KCk7XG4gIHZhciBoYWxmV2lkdGhCID0gcmVjdEIuZ2V0V2lkdGhIYWxmKCk7XG4gIHZhciBoYWxmSGVpZ2h0QiA9IHJlY3RCLmdldEhlaWdodEhhbGYoKTtcbiAgLy9mbGFnIHdoZXRoZXIgY2xpcHBpbmcgcG9pbnRzIGFyZSBmb3VuZFxuICB2YXIgY2xpcFBvaW50QUZvdW5kID0gZmFsc2U7XG4gIHZhciBjbGlwUG9pbnRCRm91bmQgPSBmYWxzZTtcblxuICAvLyBsaW5lIGlzIHZlcnRpY2FsXG4gIGlmIChwMXggPT0gcDJ4KSB7XG4gICAgaWYgKHAxeSA+IHAyeSkge1xuICAgICAgcmVzdWx0WzBdID0gcDF4O1xuICAgICAgcmVzdWx0WzFdID0gdG9wTGVmdEF5O1xuICAgICAgcmVzdWx0WzJdID0gcDJ4O1xuICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAocDF5IDwgcDJ5KSB7XG4gICAgICByZXN1bHRbMF0gPSBwMXg7XG4gICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICByZXN1bHRbMl0gPSBwMng7XG4gICAgICByZXN1bHRbM10gPSB0b3BMZWZ0Qnk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vbm90IGxpbmUsIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICAvLyBsaW5lIGlzIGhvcml6b250YWxcbiAgZWxzZSBpZiAocDF5ID09IHAyeSkge1xuICAgICAgaWYgKHAxeCA+IHAyeCkge1xuICAgICAgICByZXN1bHRbMF0gPSB0b3BMZWZ0QXg7XG4gICAgICAgIHJlc3VsdFsxXSA9IHAxeTtcbiAgICAgICAgcmVzdWx0WzJdID0gdG9wUmlnaHRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gcDJ5O1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHAxeCA8IHAyeCkge1xuICAgICAgICByZXN1bHRbMF0gPSB0b3BSaWdodEF4O1xuICAgICAgICByZXN1bHRbMV0gPSBwMXk7XG4gICAgICAgIHJlc3VsdFsyXSA9IHRvcExlZnRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gcDJ5O1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL25vdCB2YWxpZCBsaW5lLCByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy9zbG9wZXMgb2YgcmVjdEEncyBhbmQgcmVjdEIncyBkaWFnb25hbHNcbiAgICAgIHZhciBzbG9wZUEgPSByZWN0QS5oZWlnaHQgLyByZWN0QS53aWR0aDtcbiAgICAgIHZhciBzbG9wZUIgPSByZWN0Qi5oZWlnaHQgLyByZWN0Qi53aWR0aDtcblxuICAgICAgLy9zbG9wZSBvZiBsaW5lIGJldHdlZW4gY2VudGVyIG9mIHJlY3RBIGFuZCBjZW50ZXIgb2YgcmVjdEJcbiAgICAgIHZhciBzbG9wZVByaW1lID0gKHAyeSAtIHAxeSkgLyAocDJ4IC0gcDF4KTtcbiAgICAgIHZhciBjYXJkaW5hbERpcmVjdGlvbkE7XG4gICAgICB2YXIgY2FyZGluYWxEaXJlY3Rpb25CO1xuICAgICAgdmFyIHRlbXBQb2ludEF4O1xuICAgICAgdmFyIHRlbXBQb2ludEF5O1xuICAgICAgdmFyIHRlbXBQb2ludEJ4O1xuICAgICAgdmFyIHRlbXBQb2ludEJ5O1xuXG4gICAgICAvL2RldGVybWluZSB3aGV0aGVyIGNsaXBwaW5nIHBvaW50IGlzIHRoZSBjb3JuZXIgb2Ygbm9kZUFcbiAgICAgIGlmICgtc2xvcGVBID09IHNsb3BlUHJpbWUpIHtcbiAgICAgICAgaWYgKHAxeCA+IHAyeCkge1xuICAgICAgICAgIHJlc3VsdFswXSA9IGJvdHRvbUxlZnRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRbMF0gPSB0b3BSaWdodEF4O1xuICAgICAgICAgIHJlc3VsdFsxXSA9IHRvcExlZnRBeTtcbiAgICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNsb3BlQSA9PSBzbG9wZVByaW1lKSB7XG4gICAgICAgIGlmIChwMXggPiBwMngpIHtcbiAgICAgICAgICByZXN1bHRbMF0gPSB0b3BMZWZ0QXg7XG4gICAgICAgICAgcmVzdWx0WzFdID0gdG9wTGVmdEF5O1xuICAgICAgICAgIGNsaXBQb2ludEFGb3VuZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0WzBdID0gYm90dG9tUmlnaHRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL2RldGVybWluZSB3aGV0aGVyIGNsaXBwaW5nIHBvaW50IGlzIHRoZSBjb3JuZXIgb2Ygbm9kZUJcbiAgICAgIGlmICgtc2xvcGVCID09IHNsb3BlUHJpbWUpIHtcbiAgICAgICAgaWYgKHAyeCA+IHAxeCkge1xuICAgICAgICAgIHJlc3VsdFsyXSA9IGJvdHRvbUxlZnRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XG4gICAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0b3BSaWdodEJ4O1xuICAgICAgICAgIHJlc3VsdFszXSA9IHRvcExlZnRCeTtcbiAgICAgICAgICBjbGlwUG9pbnRCRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNsb3BlQiA9PSBzbG9wZVByaW1lKSB7XG4gICAgICAgIGlmIChwMnggPiBwMXgpIHtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0b3BMZWZ0Qng7XG4gICAgICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xuICAgICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0WzJdID0gYm90dG9tUmlnaHRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XG4gICAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL2lmIGJvdGggY2xpcHBpbmcgcG9pbnRzIGFyZSBjb3JuZXJzXG4gICAgICBpZiAoY2xpcFBvaW50QUZvdW5kICYmIGNsaXBQb2ludEJGb3VuZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vZGV0ZXJtaW5lIENhcmRpbmFsIERpcmVjdGlvbiBvZiByZWN0YW5nbGVzXG4gICAgICBpZiAocDF4ID4gcDJ4KSB7XG4gICAgICAgIGlmIChwMXkgPiBwMnkpIHtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVBLCBzbG9wZVByaW1lLCA0KTtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVCLCBzbG9wZVByaW1lLCAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMyk7XG4gICAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocDF5ID4gcDJ5KSB7XG4gICAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25BID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUEsIHNsb3BlUHJpbWUsIDEpO1xuICAgICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbigtc2xvcGVCLCBzbG9wZVByaW1lLCAzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVBLCBzbG9wZVByaW1lLCAyKTtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVCLCBzbG9wZVByaW1lLCA0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9jYWxjdWxhdGUgY2xpcHBpbmcgUG9pbnQgaWYgaXQgaXMgbm90IGZvdW5kIGJlZm9yZVxuICAgICAgaWYgKCFjbGlwUG9pbnRBRm91bmQpIHtcbiAgICAgICAgc3dpdGNoIChjYXJkaW5hbERpcmVjdGlvbkEpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHRvcExlZnRBeTtcbiAgICAgICAgICAgIHRlbXBQb2ludEF4ID0gcDF4ICsgLWhhbGZIZWlnaHRBIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0ZW1wUG9pbnRBeCA9IGJvdHRvbVJpZ2h0QXg7XG4gICAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHAxeSArIGhhbGZXaWR0aEEgKiBzbG9wZVByaW1lO1xuICAgICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XG4gICAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHRlbXBQb2ludEF5ID0gYm90dG9tTGVmdEF5O1xuICAgICAgICAgICAgdGVtcFBvaW50QXggPSBwMXggKyBoYWxmSGVpZ2h0QSAvIHNsb3BlUHJpbWU7XG4gICAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcbiAgICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdGVtcFBvaW50QXggPSBib3R0b21MZWZ0QXg7XG4gICAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHAxeSArIC1oYWxmV2lkdGhBICogc2xvcGVQcmltZTtcbiAgICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFjbGlwUG9pbnRCRm91bmQpIHtcbiAgICAgICAgc3dpdGNoIChjYXJkaW5hbERpcmVjdGlvbkIpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0ZW1wUG9pbnRCeSA9IHRvcExlZnRCeTtcbiAgICAgICAgICAgIHRlbXBQb2ludEJ4ID0gcDJ4ICsgLWhhbGZIZWlnaHRCIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0ZW1wUG9pbnRCeCA9IGJvdHRvbVJpZ2h0Qng7XG4gICAgICAgICAgICB0ZW1wUG9pbnRCeSA9IHAyeSArIGhhbGZXaWR0aEIgKiBzbG9wZVByaW1lO1xuICAgICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XG4gICAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHRlbXBQb2ludEJ5ID0gYm90dG9tTGVmdEJ5O1xuICAgICAgICAgICAgdGVtcFBvaW50QnggPSBwMnggKyBoYWxmSGVpZ2h0QiAvIHNsb3BlUHJpbWU7XG4gICAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcbiAgICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdGVtcFBvaW50QnggPSBib3R0b21MZWZ0Qng7XG4gICAgICAgICAgICB0ZW1wUG9pbnRCeSA9IHAyeSArIC1oYWxmV2lkdGhCICogc2xvcGVQcmltZTtcbiAgICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uID0gZnVuY3Rpb24gKHNsb3BlLCBzbG9wZVByaW1lLCBsaW5lKSB7XG4gIGlmIChzbG9wZSA+IHNsb3BlUHJpbWUpIHtcbiAgICByZXR1cm4gbGluZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMSArIGxpbmUgJSA0O1xuICB9XG59O1xuXG5JR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gKHMxLCBzMiwgZjEsIGYyKSB7XG4gIGlmIChmMiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIElHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24yKHMxLCBzMiwgZjEpO1xuICB9XG4gIHZhciB4MSA9IHMxLng7XG4gIHZhciB5MSA9IHMxLnk7XG4gIHZhciB4MiA9IHMyLng7XG4gIHZhciB5MiA9IHMyLnk7XG4gIHZhciB4MyA9IGYxLng7XG4gIHZhciB5MyA9IGYxLnk7XG4gIHZhciB4NCA9IGYyLng7XG4gIHZhciB5NCA9IGYyLnk7XG4gIHZhciB4LCB5OyAvLyBpbnRlcnNlY3Rpb24gcG9pbnRcbiAgdmFyIGExLCBhMiwgYjEsIGIyLCBjMSwgYzI7IC8vIGNvZWZmaWNpZW50cyBvZiBsaW5lIGVxbnMuXG4gIHZhciBkZW5vbTtcblxuICBhMSA9IHkyIC0geTE7XG4gIGIxID0geDEgLSB4MjtcbiAgYzEgPSB4MiAqIHkxIC0geDEgKiB5MjsgLy8geyBhMSp4ICsgYjEqeSArIGMxID0gMCBpcyBsaW5lIDEgfVxuXG4gIGEyID0geTQgLSB5MztcbiAgYjIgPSB4MyAtIHg0O1xuICBjMiA9IHg0ICogeTMgLSB4MyAqIHk0OyAvLyB7IGEyKnggKyBiMip5ICsgYzIgPSAwIGlzIGxpbmUgMiB9XG5cbiAgZGVub20gPSBhMSAqIGIyIC0gYTIgKiBiMTtcblxuICBpZiAoZGVub20gPT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgeCA9IChiMSAqIGMyIC0gYjIgKiBjMSkgLyBkZW5vbTtcbiAgeSA9IChhMiAqIGMxIC0gYTEgKiBjMikgLyBkZW5vbTtcblxuICByZXR1cm4gbmV3IFBvaW50KHgsIHkpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IENsYXNzIENvbnN0YW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qKlxyXG4gKiBTb21lIHVzZWZ1bCBwcmUtY2FsY3VsYXRlZCBjb25zdGFudHNcclxuICovXG5JR2VvbWV0cnkuSEFMRl9QSSA9IDAuNSAqIE1hdGguUEk7XG5JR2VvbWV0cnkuT05FX0FORF9IQUxGX1BJID0gMS41ICogTWF0aC5QSTtcbklHZW9tZXRyeS5UV09fUEkgPSAyLjAgKiBNYXRoLlBJO1xuSUdlb21ldHJ5LlRIUkVFX1BJID0gMy4wICogTWF0aC5QSTtcblxubW9kdWxlLmV4cG9ydHMgPSBJR2VvbWV0cnk7XG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gSU1hdGgoKSB7fVxuXG4vKipcclxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgc2lnbiBvZiB0aGUgaW5wdXQgdmFsdWUuXHJcbiAqL1xuSU1hdGguc2lnbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59O1xuXG5JTWF0aC5mbG9vciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5jZWlsKHZhbHVlKSA6IE1hdGguZmxvb3IodmFsdWUpO1xufTtcblxuSU1hdGguY2VpbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5mbG9vcih2YWx1ZSkgOiBNYXRoLmNlaWwodmFsdWUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJTWF0aDtcblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTEdyYXBoT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcbnZhciBJbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG52YXIgTGF5b3V0Q29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBMR3JhcGhNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBMTm9kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xudmFyIExFZGdlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBSZWN0YW5nbGVEID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG52YXIgUG9pbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcbnZhciBMaW5rZWRMaXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5cbmZ1bmN0aW9uIExHcmFwaChwYXJlbnQsIG9iajIsIHZHcmFwaCkge1xuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2R3JhcGgpO1xuICB0aGlzLmVzdGltYXRlZFNpemUgPSBJbnRlZ2VyLk1JTl9WQUxVRTtcbiAgdGhpcy5tYXJnaW4gPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFQSF9NQVJHSU47XG4gIHRoaXMuZWRnZXMgPSBbXTtcbiAgdGhpcy5ub2RlcyA9IFtdO1xuICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gIGlmIChvYmoyICE9IG51bGwgJiYgb2JqMiBpbnN0YW5jZW9mIExHcmFwaE1hbmFnZXIpIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajI7XG4gIH0gZWxzZSBpZiAob2JqMiAhPSBudWxsICYmIG9iajIgaW5zdGFuY2VvZiBMYXlvdXQpIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajIuZ3JhcGhNYW5hZ2VyO1xuICB9XG59XG5cbkxHcmFwaC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcbiAgTEdyYXBoW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xufVxuXG5MR3JhcGgucHJvdG90eXBlLmdldE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ub2Rlcztcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0RWRnZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmVkZ2VzO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wYXJlbnQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxlZnQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yaWdodDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy50b3A7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuYm90dG9tO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5pc0Nvbm5lY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaXNDb25uZWN0ZWQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChvYmoxLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKSB7XG4gIGlmIChzb3VyY2VOb2RlID09IG51bGwgJiYgdGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgdmFyIG5ld05vZGUgPSBvYmoxO1xuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkdyYXBoIGhhcyBubyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZihuZXdOb2RlKSA+IC0xKSB7XG4gICAgICB0aHJvdyBcIk5vZGUgYWxyZWFkeSBpbiBncmFwaCFcIjtcbiAgICB9XG4gICAgbmV3Tm9kZS5vd25lciA9IHRoaXM7XG4gICAgdGhpcy5nZXROb2RlcygpLnB1c2gobmV3Tm9kZSk7XG5cbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbmV3RWRnZSA9IG9iajE7XG4gICAgaWYgKCEodGhpcy5nZXROb2RlcygpLmluZGV4T2Yoc291cmNlTm9kZSkgPiAtMSAmJiB0aGlzLmdldE5vZGVzKCkuaW5kZXhPZih0YXJnZXROb2RlKSA+IC0xKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2Ugb3IgdGFyZ2V0IG5vdCBpbiBncmFwaCFcIjtcbiAgICB9XG5cbiAgICBpZiAoIShzb3VyY2VOb2RlLm93bmVyID09IHRhcmdldE5vZGUub3duZXIgJiYgc291cmNlTm9kZS5vd25lciA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJCb3RoIG93bmVycyBtdXN0IGJlIHRoaXMgZ3JhcGghXCI7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZU5vZGUub3duZXIgIT0gdGFyZ2V0Tm9kZS5vd25lcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gc2V0IHNvdXJjZSBhbmQgdGFyZ2V0XG4gICAgbmV3RWRnZS5zb3VyY2UgPSBzb3VyY2VOb2RlO1xuICAgIG5ld0VkZ2UudGFyZ2V0ID0gdGFyZ2V0Tm9kZTtcblxuICAgIC8vIHNldCBhcyBpbnRyYS1ncmFwaCBlZGdlXG4gICAgbmV3RWRnZS5pc0ludGVyR3JhcGggPSBmYWxzZTtcblxuICAgIC8vIGFkZCB0byBncmFwaCBlZGdlIGxpc3RcbiAgICB0aGlzLmdldEVkZ2VzKCkucHVzaChuZXdFZGdlKTtcblxuICAgIC8vIGFkZCB0byBpbmNpZGVuY3kgbGlzdHNcbiAgICBzb3VyY2VOb2RlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG5cbiAgICBpZiAodGFyZ2V0Tm9kZSAhPSBzb3VyY2VOb2RlKSB7XG4gICAgICB0YXJnZXROb2RlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VkZ2U7XG4gIH1cbn07XG5cbkxHcmFwaC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgbm9kZSA9IG9iajtcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIExOb2RlKSB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJOb2RlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKG5vZGUub3duZXIgIT0gbnVsbCAmJiBub2RlLm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIGlzIGludmFsaWQhXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIG1hbmFnZXIgaXMgaW52YWxpZCFcIjtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIGluY2lkZW50IGVkZ2VzIGZpcnN0IChtYWtlIGEgY29weSB0byBkbyBpdCBzYWZlbHkpXG4gICAgdmFyIGVkZ2VzVG9CZVJlbW92ZWQgPSBub2RlLmVkZ2VzLnNsaWNlKCk7XG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIHMgPSBlZGdlc1RvQmVSZW1vdmVkLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgICAgZWRnZSA9IGVkZ2VzVG9CZVJlbW92ZWRbaV07XG5cbiAgICAgIGlmIChlZGdlLmlzSW50ZXJHcmFwaCkge1xuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZW1vdmUoZWRnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlZGdlLnNvdXJjZS5vd25lci5yZW1vdmUoZWRnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbm93IHRoZSBub2RlIGl0c2VsZlxuICAgIHZhciBpbmRleCA9IHRoaXMubm9kZXMuaW5kZXhPZihub2RlKTtcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHRocm93IFwiTm9kZSBub3QgaW4gb3duZXIgbm9kZSBsaXN0IVwiO1xuICAgIH1cblxuICAgIHRoaXMubm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIHZhciBlZGdlID0gb2JqO1xuICAgIGlmIChlZGdlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIShlZGdlLnNvdXJjZSAhPSBudWxsICYmIGVkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKGVkZ2Uuc291cmNlLm93bmVyICE9IG51bGwgJiYgZWRnZS50YXJnZXQub3duZXIgIT0gbnVsbCAmJiBlZGdlLnNvdXJjZS5vd25lciA9PSB0aGlzICYmIGVkZ2UudGFyZ2V0Lm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IG93bmVyIGlzIGludmFsaWQhXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZGV4ID0gZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICB2YXIgdGFyZ2V0SW5kZXggPSBlZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGlmICghKHNvdXJjZUluZGV4ID4gLTEgJiYgdGFyZ2V0SW5kZXggPiAtMSkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgZG9lc24ndCBrbm93IHRoaXMgZWRnZSFcIjtcbiAgICB9XG5cbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2Uoc291cmNlSW5kZXgsIDEpO1xuXG4gICAgaWYgKGVkZ2UudGFyZ2V0ICE9IGVkZ2Uuc291cmNlKSB7XG4gICAgICBlZGdlLnRhcmdldC5lZGdlcy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuaW5kZXhPZihlZGdlKTtcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHRocm93IFwiTm90IGluIG93bmVyJ3MgZWRnZSBsaXN0IVwiO1xuICAgIH1cblxuICAgIGVkZ2Uuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVMZWZ0VG9wID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBtYXJnaW47XG5cbiAgdmFyIG5vZGVzID0gdGhpcy5nZXROb2RlcygpO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcblxuICAgIGlmICh0b3AgPiBub2RlVG9wKSB7XG4gICAgICB0b3AgPSBub2RlVG9wO1xuICAgIH1cblxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG4gIH1cblxuICAvLyBEbyB3ZSBoYXZlIGFueSBub2RlcyBpbiB0aGlzIGdyYXBoP1xuICBpZiAodG9wID09IEludGVnZXIuTUFYX1ZBTFVFKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAobm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgbWFyZ2luID0gbm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQ7XG4gIH0gZWxzZSB7XG4gICAgbWFyZ2luID0gdGhpcy5tYXJnaW47XG4gIH1cblxuICB0aGlzLmxlZnQgPSBsZWZ0IC0gbWFyZ2luO1xuICB0aGlzLnRvcCA9IHRvcCAtIG1hcmdpbjtcblxuICAvLyBBcHBseSB0aGUgbWFyZ2lucyBhbmQgcmV0dXJuIHRoZSByZXN1bHRcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMudG9wKTtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24gKHJlY3Vyc2l2ZSkge1xuICAvLyBjYWxjdWxhdGUgYm91bmRzXG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciByaWdodCA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgYm90dG9tID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBub2RlUmlnaHQ7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUJvdHRvbTtcbiAgdmFyIG1hcmdpbjtcblxuICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcblxuICAgIGlmIChyZWN1cnNpdmUgJiYgbE5vZGUuY2hpbGQgIT0gbnVsbCkge1xuICAgICAgbE5vZGUudXBkYXRlQm91bmRzKCk7XG4gICAgfVxuICAgIG5vZGVMZWZ0ID0gbE5vZGUuZ2V0TGVmdCgpO1xuICAgIG5vZGVSaWdodCA9IGxOb2RlLmdldFJpZ2h0KCk7XG4gICAgbm9kZVRvcCA9IGxOb2RlLmdldFRvcCgpO1xuICAgIG5vZGVCb3R0b20gPSBsTm9kZS5nZXRCb3R0b20oKTtcblxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG5cbiAgICBpZiAocmlnaHQgPCBub2RlUmlnaHQpIHtcbiAgICAgIHJpZ2h0ID0gbm9kZVJpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0b3AgPiBub2RlVG9wKSB7XG4gICAgICB0b3AgPSBub2RlVG9wO1xuICAgIH1cblxuICAgIGlmIChib3R0b20gPCBub2RlQm90dG9tKSB7XG4gICAgICBib3R0b20gPSBub2RlQm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIHZhciBib3VuZGluZ1JlY3QgPSBuZXcgUmVjdGFuZ2xlRChsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcbiAgaWYgKGxlZnQgPT0gSW50ZWdlci5NQVhfVkFMVUUpIHtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLnBhcmVudC5nZXRMZWZ0KCk7XG4gICAgdGhpcy5yaWdodCA9IHRoaXMucGFyZW50LmdldFJpZ2h0KCk7XG4gICAgdGhpcy50b3AgPSB0aGlzLnBhcmVudC5nZXRUb3AoKTtcbiAgICB0aGlzLmJvdHRvbSA9IHRoaXMucGFyZW50LmdldEJvdHRvbSgpO1xuICB9XG5cbiAgaWYgKG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0ICE9IHVuZGVmaW5lZCkge1xuICAgIG1hcmdpbiA9IG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0O1xuICB9IGVsc2Uge1xuICAgIG1hcmdpbiA9IHRoaXMubWFyZ2luO1xuICB9XG5cbiAgdGhpcy5sZWZ0ID0gYm91bmRpbmdSZWN0LnggLSBtYXJnaW47XG4gIHRoaXMucmlnaHQgPSBib3VuZGluZ1JlY3QueCArIGJvdW5kaW5nUmVjdC53aWR0aCArIG1hcmdpbjtcbiAgdGhpcy50b3AgPSBib3VuZGluZ1JlY3QueSAtIG1hcmdpbjtcbiAgdGhpcy5ib3R0b20gPSBib3VuZGluZ1JlY3QueSArIGJvdW5kaW5nUmVjdC5oZWlnaHQgKyBtYXJnaW47XG59O1xuXG5MR3JhcGguY2FsY3VsYXRlQm91bmRzID0gZnVuY3Rpb24gKG5vZGVzKSB7XG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciByaWdodCA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgYm90dG9tID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBub2RlUmlnaHQ7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUJvdHRvbTtcblxuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGVMZWZ0ID0gbE5vZGUuZ2V0TGVmdCgpO1xuICAgIG5vZGVSaWdodCA9IGxOb2RlLmdldFJpZ2h0KCk7XG4gICAgbm9kZVRvcCA9IGxOb2RlLmdldFRvcCgpO1xuICAgIG5vZGVCb3R0b20gPSBsTm9kZS5nZXRCb3R0b20oKTtcblxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG5cbiAgICBpZiAocmlnaHQgPCBub2RlUmlnaHQpIHtcbiAgICAgIHJpZ2h0ID0gbm9kZVJpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0b3AgPiBub2RlVG9wKSB7XG4gICAgICB0b3AgPSBub2RlVG9wO1xuICAgIH1cblxuICAgIGlmIChib3R0b20gPCBub2RlQm90dG9tKSB7XG4gICAgICBib3R0b20gPSBub2RlQm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIHZhciBib3VuZGluZ1JlY3QgPSBuZXcgUmVjdGFuZ2xlRChsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcblxuICByZXR1cm4gYm91bmRpbmdSZWN0O1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRJbmNsdXNpb25UcmVlRGVwdGggPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzID09IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSkge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKTtcbiAgfVxufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lc3RpbWF0ZWRTaXplID09IEludGVnZXIuTUlOX1ZBTFVFKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuY2FsY0VzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzaXplID0gMDtcbiAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICBzaXplICs9IGxOb2RlLmNhbGNFc3RpbWF0ZWRTaXplKCk7XG4gIH1cblxuICBpZiAoc2l6ZSA9PSAwKSB7XG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gTGF5b3V0Q29uc3RhbnRzLkVNUFRZX0NPTVBPVU5EX05PREVfU0laRTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVzdGltYXRlZFNpemUgPSBzaXplIC8gTWF0aC5zcXJ0KHRoaXMubm9kZXMubGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUNvbm5lY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAodGhpcy5ub2Rlcy5sZW5ndGggPT0gMCkge1xuICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBxdWV1ZSA9IG5ldyBMaW5rZWRMaXN0KCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgY3VycmVudE5vZGUgPSB0aGlzLm5vZGVzWzBdO1xuICB2YXIgbmVpZ2hib3JFZGdlcztcbiAgdmFyIGN1cnJlbnROZWlnaGJvcjtcbiAgdmFyIGNoaWxkcmVuT2ZOb2RlID0gY3VycmVudE5vZGUud2l0aENoaWxkcmVuKCk7XG4gIGNoaWxkcmVuT2ZOb2RlLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBxdWV1ZS5wdXNoKG5vZGUpO1xuICAgIHZpc2l0ZWQuYWRkKG5vZGUpO1xuICB9KTtcblxuICB3aGlsZSAocXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgY3VycmVudE5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcbiAgICBuZWlnaGJvckVkZ2VzID0gY3VycmVudE5vZGUuZ2V0RWRnZXMoKTtcbiAgICB2YXIgc2l6ZSA9IG5laWdoYm9yRWRnZXMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICB2YXIgbmVpZ2hib3JFZGdlID0gbmVpZ2hib3JFZGdlc1tpXTtcbiAgICAgIGN1cnJlbnROZWlnaGJvciA9IG5laWdoYm9yRWRnZS5nZXRPdGhlckVuZEluR3JhcGgoY3VycmVudE5vZGUsIHRoaXMpO1xuXG4gICAgICAvLyBBZGQgdW52aXNpdGVkIG5laWdoYm9ycyB0byB0aGUgbGlzdCB0byB2aXNpdFxuICAgICAgaWYgKGN1cnJlbnROZWlnaGJvciAhPSBudWxsICYmICF2aXNpdGVkLmhhcyhjdXJyZW50TmVpZ2hib3IpKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbk9mTmVpZ2hib3IgPSBjdXJyZW50TmVpZ2hib3Iud2l0aENoaWxkcmVuKCk7XG5cbiAgICAgICAgY2hpbGRyZW5PZk5laWdoYm9yLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICBxdWV1ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgIHZpc2l0ZWQuYWRkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG5cbiAgaWYgKHZpc2l0ZWQuc2l6ZSA+PSB0aGlzLm5vZGVzLmxlbmd0aCkge1xuICAgIHZhciBub09mVmlzaXRlZEluVGhpc0dyYXBoID0gMDtcblxuICAgIHZpc2l0ZWQuZm9yRWFjaChmdW5jdGlvbiAodmlzaXRlZE5vZGUpIHtcbiAgICAgIGlmICh2aXNpdGVkTm9kZS5vd25lciA9PSBzZWxmKSB7XG4gICAgICAgIG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGgrKztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChub09mVmlzaXRlZEluVGhpc0dyYXBoID09IHRoaXMubm9kZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoO1xuXG4vKioqLyB9KSxcbi8qIDEyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIEludGVnZXIoKSB7fVxuXG5JbnRlZ2VyLk1BWF9WQUxVRSA9IDIxNDc0ODM2NDc7XG5JbnRlZ2VyLk1JTl9WQUxVRSA9IC0yMTQ3NDgzNjQ4O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVnZXI7XG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIExHcmFwaE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xudmFyIFJlY3RhbmdsZUQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIFJhbmRvbVNlZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcbnZhciBQb2ludEQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcbnZhciBIYXNoU2V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cbmZ1bmN0aW9uIExOb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIC8vQWx0ZXJuYXRpdmUgY29uc3RydWN0b3IgMSA6IExOb2RlKExHcmFwaE1hbmFnZXIgZ20sIFBvaW50IGxvYywgRGltZW5zaW9uIHNpemUsIE9iamVjdCB2Tm9kZSlcbiAgaWYgKHNpemUgPT0gbnVsbCAmJiB2Tm9kZSA9PSBudWxsKSB7XG4gICAgdk5vZGUgPSBsb2M7XG4gIH1cblxuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2Tm9kZSk7XG5cbiAgLy9BbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciAyIDogTE5vZGUoTGF5b3V0IGxheW91dCwgT2JqZWN0IHZOb2RlKVxuICBpZiAoZ20uZ3JhcGhNYW5hZ2VyICE9IG51bGwpIGdtID0gZ20uZ3JhcGhNYW5hZ2VyO1xuXG4gIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IEludGVnZXIuTUlOX1ZBTFVFO1xuICB0aGlzLmluY2x1c2lvblRyZWVEZXB0aCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZOb2RlO1xuICB0aGlzLmVkZ2VzID0gW107XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gZ207XG5cbiAgaWYgKHNpemUgIT0gbnVsbCAmJiBsb2MgIT0gbnVsbCkgdGhpcy5yZWN0ID0gbmV3IFJlY3RhbmdsZUQobG9jLngsIGxvYy55LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7ZWxzZSB0aGlzLnJlY3QgPSBuZXcgUmVjdGFuZ2xlRCgpO1xufVxuXG5MTm9kZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcbiAgTE5vZGVbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XG59XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZWRnZXM7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2hpbGQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmNoaWxkO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldE93bmVyID0gZnVuY3Rpb24gKCkge1xuICAvLyAgaWYgKHRoaXMub3duZXIgIT0gbnVsbCkge1xuICAvLyAgICBpZiAoISh0aGlzLm93bmVyID09IG51bGwgfHwgdGhpcy5vd25lci5nZXROb2RlcygpLmluZGV4T2YodGhpcykgPiAtMSkpIHtcbiAgLy8gICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgLy8gICAgfVxuICAvLyAgfVxuXG4gIHJldHVybiB0aGlzLm93bmVyO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZWN0LndpZHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKSB7XG4gIHRoaXMucmVjdC53aWR0aCA9IHdpZHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmVjdC5oZWlnaHQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodCkge1xuICB0aGlzLnJlY3QuaGVpZ2h0ID0gaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldENlbnRlclggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyWSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50RCh0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aCAvIDIsIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodCAvIDIpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50RCh0aGlzLnJlY3QueCwgdGhpcy5yZWN0LnkpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFJlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJlY3Q7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RGlhZ29uYWwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRoLnNxcnQodGhpcy5yZWN0LndpZHRoICogdGhpcy5yZWN0LndpZHRoICsgdGhpcy5yZWN0LmhlaWdodCAqIHRoaXMucmVjdC5oZWlnaHQpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldFJlY3QgPSBmdW5jdGlvbiAodXBwZXJMZWZ0LCBkaW1lbnNpb24pIHtcbiAgdGhpcy5yZWN0LnggPSB1cHBlckxlZnQueDtcbiAgdGhpcy5yZWN0LnkgPSB1cHBlckxlZnQueTtcbiAgdGhpcy5yZWN0LndpZHRoID0gZGltZW5zaW9uLndpZHRoO1xuICB0aGlzLnJlY3QuaGVpZ2h0ID0gZGltZW5zaW9uLmhlaWdodDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRDZW50ZXIgPSBmdW5jdGlvbiAoY3gsIGN5KSB7XG4gIHRoaXMucmVjdC54ID0gY3ggLSB0aGlzLnJlY3Qud2lkdGggLyAyO1xuICB0aGlzLnJlY3QueSA9IGN5IC0gdGhpcy5yZWN0LmhlaWdodCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoeCwgeSkge1xuICB0aGlzLnJlY3QueCA9IHg7XG4gIHRoaXMucmVjdC55ID0geTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5tb3ZlQnkgPSBmdW5jdGlvbiAoZHgsIGR5KSB7XG4gIHRoaXMucmVjdC54ICs9IGR4O1xuICB0aGlzLnJlY3QueSArPSBkeTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlTGlzdFRvTm9kZSA9IGZ1bmN0aW9uICh0bykge1xuICB2YXIgZWRnZUxpc3QgPSBbXTtcbiAgdmFyIGVkZ2U7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24gKGVkZ2UpIHtcblxuICAgIGlmIChlZGdlLnRhcmdldCA9PSB0bykge1xuICAgICAgaWYgKGVkZ2Uuc291cmNlICE9IHNlbGYpIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIVwiO1xuXG4gICAgICBlZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VMaXN0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VzQmV0d2VlbiA9IGZ1bmN0aW9uIChvdGhlcikge1xuICB2YXIgZWRnZUxpc3QgPSBbXTtcbiAgdmFyIGVkZ2U7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24gKGVkZ2UpIHtcblxuICAgIGlmICghKGVkZ2Uuc291cmNlID09IHNlbGYgfHwgZWRnZS50YXJnZXQgPT0gc2VsZikpIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIGFuZC9vciB0YXJnZXRcIjtcblxuICAgIGlmIChlZGdlLnRhcmdldCA9PSBvdGhlciB8fCBlZGdlLnNvdXJjZSA9PSBvdGhlcikge1xuICAgICAgZWRnZUxpc3QucHVzaChlZGdlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlTGlzdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXROZWlnaGJvcnNMaXN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbmVpZ2hib3JzID0gbmV3IEhhc2hTZXQoKTtcbiAgdmFyIGVkZ2U7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24gKGVkZ2UpIHtcblxuICAgIGlmIChlZGdlLnNvdXJjZSA9PSBzZWxmKSB7XG4gICAgICBuZWlnaGJvcnMuYWRkKGVkZ2UudGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVkZ2UudGFyZ2V0ICE9IHNlbGYpIHtcbiAgICAgICAgdGhyb3cgXCJJbmNvcnJlY3QgaW5jaWRlbmN5IVwiO1xuICAgICAgfVxuXG4gICAgICBuZWlnaGJvcnMuYWRkKGVkZ2Uuc291cmNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBuZWlnaGJvcnM7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUud2l0aENoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgd2l0aE5laWdoYm9yc0xpc3QgPSBuZXcgU2V0KCk7XG4gIHZhciBjaGlsZE5vZGU7XG4gIHZhciBjaGlsZHJlbjtcblxuICB3aXRoTmVpZ2hib3JzTGlzdC5hZGQodGhpcyk7XG5cbiAgaWYgKHRoaXMuY2hpbGQgIT0gbnVsbCkge1xuICAgIHZhciBub2RlcyA9IHRoaXMuY2hpbGQuZ2V0Tm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZE5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIGNoaWxkcmVuID0gY2hpbGROb2RlLndpdGhDaGlsZHJlbigpO1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB3aXRoTmVpZ2hib3JzTGlzdC5hZGQobm9kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd2l0aE5laWdoYm9yc0xpc3Q7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Tm9PZkNoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbm9PZkNoaWxkcmVuID0gMDtcbiAgdmFyIGNoaWxkTm9kZTtcblxuICBpZiAodGhpcy5jaGlsZCA9PSBudWxsKSB7XG4gICAgbm9PZkNoaWxkcmVuID0gMTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbm9kZXMgPSB0aGlzLmNoaWxkLmdldE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGROb2RlID0gbm9kZXNbaV07XG5cbiAgICAgIG5vT2ZDaGlsZHJlbiArPSBjaGlsZE5vZGUuZ2V0Tm9PZkNoaWxkcmVuKCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG5vT2ZDaGlsZHJlbiA9PSAwKSB7XG4gICAgbm9PZkNoaWxkcmVuID0gMTtcbiAgfVxuICByZXR1cm4gbm9PZkNoaWxkcmVuO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVzdGltYXRlZFNpemUgPT0gSW50ZWdlci5NSU5fVkFMVUUpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmNhbGNFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jaGlsZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZSA9ICh0aGlzLnJlY3Qud2lkdGggKyB0aGlzLnJlY3QuaGVpZ2h0KSAvIDI7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gdGhpcy5jaGlsZC5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xuICAgIHRoaXMucmVjdC53aWR0aCA9IHRoaXMuZXN0aW1hdGVkU2l6ZTtcbiAgICB0aGlzLnJlY3QuaGVpZ2h0ID0gdGhpcy5lc3RpbWF0ZWRTaXplO1xuXG4gICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbiAgfVxufTtcblxuTE5vZGUucHJvdG90eXBlLnNjYXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByYW5kb21DZW50ZXJYO1xuICB2YXIgcmFuZG9tQ2VudGVyWTtcblxuICB2YXIgbWluWCA9IC1MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgdmFyIG1heFggPSBMYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgcmFuZG9tQ2VudGVyWCA9IExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWCArIFJhbmRvbVNlZWQubmV4dERvdWJsZSgpICogKG1heFggLSBtaW5YKSArIG1pblg7XG5cbiAgdmFyIG1pblkgPSAtTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gIHZhciBtYXhZID0gTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gIHJhbmRvbUNlbnRlclkgPSBMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1kgKyBSYW5kb21TZWVkLm5leHREb3VibGUoKSAqIChtYXhZIC0gbWluWSkgKyBtaW5ZO1xuXG4gIHRoaXMucmVjdC54ID0gcmFuZG9tQ2VudGVyWDtcbiAgdGhpcy5yZWN0LnkgPSByYW5kb21DZW50ZXJZO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZ2V0Q2hpbGQoKSA9PSBudWxsKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgaWYgKHRoaXMuZ2V0Q2hpbGQoKS5nZXROb2RlcygpLmxlbmd0aCAhPSAwKSB7XG4gICAgLy8gd3JhcCB0aGUgY2hpbGRyZW4gbm9kZXMgYnkgcmUtYXJyYW5naW5nIHRoZSBib3VuZGFyaWVzXG4gICAgdmFyIGNoaWxkR3JhcGggPSB0aGlzLmdldENoaWxkKCk7XG4gICAgY2hpbGRHcmFwaC51cGRhdGVCb3VuZHModHJ1ZSk7XG5cbiAgICB0aGlzLnJlY3QueCA9IGNoaWxkR3JhcGguZ2V0TGVmdCgpO1xuICAgIHRoaXMucmVjdC55ID0gY2hpbGRHcmFwaC5nZXRUb3AoKTtcblxuICAgIHRoaXMuc2V0V2lkdGgoY2hpbGRHcmFwaC5nZXRSaWdodCgpIC0gY2hpbGRHcmFwaC5nZXRMZWZ0KCkpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGNoaWxkR3JhcGguZ2V0Qm90dG9tKCkgLSBjaGlsZEdyYXBoLmdldFRvcCgpKTtcblxuICAgIC8vIFVwZGF0ZSBjb21wb3VuZCBib3VuZHMgY29uc2lkZXJpbmcgaXRzIGxhYmVsIHByb3BlcnRpZXMgICAgXG4gICAgaWYgKExheW91dENvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMpIHtcblxuICAgICAgdmFyIHdpZHRoID0gY2hpbGRHcmFwaC5nZXRSaWdodCgpIC0gY2hpbGRHcmFwaC5nZXRMZWZ0KCk7XG4gICAgICB2YXIgaGVpZ2h0ID0gY2hpbGRHcmFwaC5nZXRCb3R0b20oKSAtIGNoaWxkR3JhcGguZ2V0VG9wKCk7XG5cbiAgICAgIGlmICh0aGlzLmxhYmVsV2lkdGggPiB3aWR0aCkge1xuICAgICAgICB0aGlzLnJlY3QueCAtPSAodGhpcy5sYWJlbFdpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCh0aGlzLmxhYmVsV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sYWJlbEhlaWdodCA+IGhlaWdodCkge1xuICAgICAgICBpZiAodGhpcy5sYWJlbFBvcyA9PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgdGhpcy5yZWN0LnkgLT0gKHRoaXMubGFiZWxIZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxhYmVsUG9zID09IFwidG9wXCIpIHtcbiAgICAgICAgICB0aGlzLnJlY3QueSAtPSB0aGlzLmxhYmVsSGVpZ2h0IC0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0KHRoaXMubGFiZWxIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEluY2x1c2lvblRyZWVEZXB0aCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoID09IEludGVnZXIuTUFYX1ZBTFVFKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgcmV0dXJuIHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uICh0cmFucykge1xuICB2YXIgbGVmdCA9IHRoaXMucmVjdC54O1xuXG4gIGlmIChsZWZ0ID4gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKSB7XG4gICAgbGVmdCA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcbiAgfSBlbHNlIGlmIChsZWZ0IDwgLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSkge1xuICAgIGxlZnQgPSAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xuICB9XG5cbiAgdmFyIHRvcCA9IHRoaXMucmVjdC55O1xuXG4gIGlmICh0b3AgPiBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpIHtcbiAgICB0b3AgPSBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH0gZWxzZSBpZiAodG9wIDwgLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSkge1xuICAgIHRvcCA9IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH1cblxuICB2YXIgbGVmdFRvcCA9IG5ldyBQb2ludEQobGVmdCwgdG9wKTtcbiAgdmFyIHZMZWZ0VG9wID0gdHJhbnMuaW52ZXJzZVRyYW5zZm9ybVBvaW50KGxlZnRUb3ApO1xuXG4gIHRoaXMuc2V0TG9jYXRpb24odkxlZnRUb3AueCwgdkxlZnRUb3AueSk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmVjdC54O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGg7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZWN0Lnk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFBhcmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMub3duZXIgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMub3duZXIuZ2V0UGFyZW50KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExOb2RlO1xuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIFJlY3RhbmdsZUQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICB0aGlzLnggPSAwO1xuICB0aGlzLnkgPSAwO1xuICB0aGlzLndpZHRoID0gMDtcbiAgdGhpcy5oZWlnaHQgPSAwO1xuXG4gIGlmICh4ICE9IG51bGwgJiYgeSAhPSBudWxsICYmIHdpZHRoICE9IG51bGwgJiYgaGVpZ2h0ICE9IG51bGwpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG59XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLng7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpIHtcbiAgdGhpcy54ID0geDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpIHtcbiAgdGhpcy55ID0geTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy53aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKSB7XG4gIHRoaXMud2lkdGggPSB3aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodCkge1xuICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuaW50ZXJzZWN0cyA9IGZ1bmN0aW9uIChhKSB7XG4gIGlmICh0aGlzLmdldFJpZ2h0KCkgPCBhLngpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5nZXRCb3R0b20oKSA8IGEueSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhLmdldFJpZ2h0KCkgPCB0aGlzLngpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoYS5nZXRCb3R0b20oKSA8IHRoaXMueSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGggLyAyO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWluWCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0WCgpO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWF4WCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0WCgpICsgdGhpcy53aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldENlbnRlclkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDI7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNaW5ZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5nZXRZKCk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNYXhZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5nZXRZKCkgKyB0aGlzLmhlaWdodDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoSGFsZiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMud2lkdGggLyAyO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0SGVpZ2h0SGFsZiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0IC8gMjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjdGFuZ2xlRDtcblxuLyoqKi8gfSksXG4vKiAxNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBSYW5kb21TZWVkKCkge31cblJhbmRvbVNlZWQuc2VlZCA9IDE7XG5SYW5kb21TZWVkLnggPSAwO1xuXG5SYW5kb21TZWVkLm5leHREb3VibGUgPSBmdW5jdGlvbiAoKSB7XG4gIFJhbmRvbVNlZWQueCA9IE1hdGguc2luKFJhbmRvbVNlZWQuc2VlZCsrKSAqIDEwMDAwO1xuICByZXR1cm4gUmFuZG9tU2VlZC54IC0gTWF0aC5mbG9vcihSYW5kb21TZWVkLngpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSYW5kb21TZWVkO1xuXG4vKioqLyB9KSxcbi8qIDE2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIFBvaW50RCh4LCB5KSB7XG4gIGlmICh4ID09IG51bGwgJiYgeSA9PSBudWxsKSB7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICB9IGVsc2Uge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxufVxuXG5Qb2ludEQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLng7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbiAoeCkge1xuICB0aGlzLnggPSB4O1xufTtcblxuUG9pbnRELnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpIHtcbiAgdGhpcy55ID0geTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuZ2V0RGlmZmVyZW5jZSA9IGZ1bmN0aW9uIChwdCkge1xuICByZXR1cm4gbmV3IERpbWVuc2lvbkQodGhpcy54IC0gcHQueCwgdGhpcy55IC0gcHQueSk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLmdldENvcHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMueCwgdGhpcy55KTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGRpbSkge1xuICB0aGlzLnggKz0gZGltLndpZHRoO1xuICB0aGlzLnkgKz0gZGltLmhlaWdodDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50RDtcblxuLyoqKi8gfSksXG4vKiAxNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgVW5pcXVlSURHZW5lcmV0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5mdW5jdGlvbiBIYXNoU2V0KCkge1xuICB0aGlzLnNldCA9IHt9O1xufVxuO1xuXG5IYXNoU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciB0aGVJZCA9IFVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaik7XG4gIGlmICghdGhpcy5jb250YWlucyh0aGVJZCkpIHRoaXMuc2V0W3RoZUlkXSA9IG9iajtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgZGVsZXRlIHRoaXMuc2V0W1VuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaildO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuc2V0ID0ge307XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRoaXMuc2V0W1VuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaildID09IG9iajtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMDtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldCkubGVuZ3RoO1xufTtcblxuLy9jb25jYXRzIHRoaXMuc2V0IHRvIHRoZSBnaXZlbiBsaXN0XG5IYXNoU2V0LnByb3RvdHlwZS5hZGRBbGxUbyA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zZXQpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBsaXN0LnB1c2godGhpcy5zZXRba2V5c1tpXV0pO1xuICB9XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zZXQpLmxlbmd0aDtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmFkZEFsbCA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gIHZhciBzID0gbGlzdC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgdmFyIHYgPSBsaXN0W2ldO1xuICAgIHRoaXMuYWRkKHYpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hTZXQ7XG5cbi8qKiovIH0pLFxuLyogMTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLypcclxuICpUaGlzIGNsYXNzIGlzIHRoZSBqYXZhc2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBQb2ludC5qYXZhIGNsYXNzIGluIGpka1xyXG4gKi9cbmZ1bmN0aW9uIFBvaW50KHgsIHksIHApIHtcbiAgdGhpcy54ID0gbnVsbDtcbiAgdGhpcy55ID0gbnVsbDtcbiAgaWYgKHggPT0gbnVsbCAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09ICdudW1iZXInICYmIHR5cGVvZiB5ID09ICdudW1iZXInICYmIHAgPT0gbnVsbCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfSBlbHNlIGlmICh4LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1BvaW50JyAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XG4gICAgcCA9IHg7XG4gICAgdGhpcy54ID0gcC54O1xuICAgIHRoaXMueSA9IHAueTtcbiAgfVxufVxuXG5Qb2ludC5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueDtcbn07XG5cblBvaW50LnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy55O1xufTtcblxuUG9pbnQucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcbn07XG5cblBvaW50LnByb3RvdHlwZS5zZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICh4LCB5LCBwKSB7XG4gIGlmICh4LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1BvaW50JyAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XG4gICAgcCA9IHg7XG4gICAgdGhpcy5zZXRMb2NhdGlvbihwLngsIHAueSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHggPT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT0gJ251bWJlcicgJiYgcCA9PSBudWxsKSB7XG4gICAgLy9pZiBib3RoIHBhcmFtZXRlcnMgYXJlIGludGVnZXIganVzdCBtb3ZlICh4LHkpIGxvY2F0aW9uXG4gICAgaWYgKHBhcnNlSW50KHgpID09IHggJiYgcGFyc2VJbnQoeSkgPT0geSkge1xuICAgICAgdGhpcy5tb3ZlKHgsIHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnggPSBNYXRoLmZsb29yKHggKyAwLjUpO1xuICAgICAgdGhpcy55ID0gTWF0aC5mbG9vcih5ICsgMC41KTtcbiAgICB9XG4gIH1cbn07XG5cblBvaW50LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbn07XG5cblBvaW50LnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAoZHgsIGR5KSB7XG4gIHRoaXMueCArPSBkeDtcbiAgdGhpcy55ICs9IGR5O1xufTtcblxuUG9pbnQucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iai5jb25zdHJ1Y3Rvci5uYW1lID09IFwiUG9pbnRcIikge1xuICAgIHZhciBwdCA9IG9iajtcbiAgICByZXR1cm4gdGhpcy54ID09IHB0LnggJiYgdGhpcy55ID09IHB0Lnk7XG4gIH1cbiAgcmV0dXJuIHRoaXMgPT0gb2JqO1xufTtcblxuUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50KCkuY29uc3RydWN0b3IubmFtZSArIFwiW3g9XCIgKyB0aGlzLnggKyBcIix5PVwiICsgdGhpcy55ICsgXCJdXCI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xuXG4vKioqLyB9KSxcbi8qIDE5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmNvbnN0IG5vZGVGcm9tID0gdmFsdWUgPT4gKHsgdmFsdWUsIG5leHQ6IG51bGwsIHByZXY6IG51bGwgfSk7XG5cbmNvbnN0IGFkZCA9IChwcmV2LCBub2RlLCBuZXh0LCBsaXN0KSA9PiB7XG4gIGlmIChwcmV2ICE9PSBudWxsKSB7XG4gICAgcHJldi5uZXh0ID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBsaXN0LmhlYWQgPSBub2RlO1xuICB9XG5cbiAgaWYgKG5leHQgIT09IG51bGwpIHtcbiAgICBuZXh0LnByZXYgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIGxpc3QudGFpbCA9IG5vZGU7XG4gIH1cblxuICBub2RlLnByZXYgPSBwcmV2O1xuICBub2RlLm5leHQgPSBuZXh0O1xuXG4gIGxpc3QubGVuZ3RoKys7XG5cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5jb25zdCByZW1vdmUgPSAobm9kZSwgbGlzdCkgPT4ge1xuICBsZXQgeyBwcmV2LCBuZXh0IH0gPSBub2RlO1xuXG4gIGlmIChwcmV2ICE9PSBudWxsKSB7XG4gICAgcHJldi5uZXh0ID0gbmV4dDtcbiAgfSBlbHNlIHtcbiAgICBsaXN0LmhlYWQgPSBuZXh0O1xuICB9XG5cbiAgaWYgKG5leHQgIT09IG51bGwpIHtcbiAgICBuZXh0LnByZXYgPSBwcmV2O1xuICB9IGVsc2Uge1xuICAgIGxpc3QudGFpbCA9IHByZXY7XG4gIH1cblxuICBub2RlLnByZXYgPSBub2RlLm5leHQgPSBudWxsO1xuXG4gIGxpc3QubGVuZ3RoLS07XG5cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5jbGFzcyBMaW5rZWRMaXN0IHtcbiAgY29uc3RydWN0b3IodmFscykge1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIHRoaXMudGFpbCA9IG51bGw7XG5cbiAgICBpZiAodmFscyAhPSBudWxsKSB7XG4gICAgICB2YWxzLmZvckVhY2godiA9PiB0aGlzLnB1c2godikpO1xuICAgIH1cbiAgfVxuXG4gIHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICB9XG5cbiAgaW5zZXJ0QmVmb3JlKHZhbCwgb3RoZXJOb2RlKSB7XG4gICAgcmV0dXJuIGFkZChvdGhlck5vZGUucHJldiwgbm9kZUZyb20odmFsKSwgb3RoZXJOb2RlLCB0aGlzKTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHZhbCwgb3RoZXJOb2RlKSB7XG4gICAgcmV0dXJuIGFkZChvdGhlck5vZGUsIG5vZGVGcm9tKHZhbCksIG90aGVyTm9kZS5uZXh0LCB0aGlzKTtcbiAgfVxuXG4gIGluc2VydE5vZGVCZWZvcmUobmV3Tm9kZSwgb3RoZXJOb2RlKSB7XG4gICAgcmV0dXJuIGFkZChvdGhlck5vZGUucHJldiwgbmV3Tm9kZSwgb3RoZXJOb2RlLCB0aGlzKTtcbiAgfVxuXG4gIGluc2VydE5vZGVBZnRlcihuZXdOb2RlLCBvdGhlck5vZGUpIHtcbiAgICByZXR1cm4gYWRkKG90aGVyTm9kZSwgbmV3Tm9kZSwgb3RoZXJOb2RlLm5leHQsIHRoaXMpO1xuICB9XG5cbiAgcHVzaCh2YWwpIHtcbiAgICByZXR1cm4gYWRkKHRoaXMudGFpbCwgbm9kZUZyb20odmFsKSwgbnVsbCwgdGhpcyk7XG4gIH1cblxuICB1bnNoaWZ0KHZhbCkge1xuICAgIHJldHVybiBhZGQobnVsbCwgbm9kZUZyb20odmFsKSwgdGhpcy5oZWFkLCB0aGlzKTtcbiAgfVxuXG4gIHJlbW92ZShub2RlKSB7XG4gICAgcmV0dXJuIHJlbW92ZShub2RlLCB0aGlzKTtcbiAgfVxuXG4gIHBvcCgpIHtcbiAgICByZXR1cm4gcmVtb3ZlKHRoaXMudGFpbCwgdGhpcykudmFsdWU7XG4gIH1cblxuICBwb3BOb2RlKCkge1xuICAgIHJldHVybiByZW1vdmUodGhpcy50YWlsLCB0aGlzKTtcbiAgfVxuXG4gIHNoaWZ0KCkge1xuICAgIHJldHVybiByZW1vdmUodGhpcy5oZWFkLCB0aGlzKS52YWx1ZTtcbiAgfVxuXG4gIHNoaWZ0Tm9kZSgpIHtcbiAgICByZXR1cm4gcmVtb3ZlKHRoaXMuaGVhZCwgdGhpcyk7XG4gIH1cblxuICBnZXRfb2JqZWN0X2F0KGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDw9IHRoaXMubGVuZ3RoKCkpIHtcbiAgICAgIHZhciBpID0gMTtcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgd2hpbGUgKGkgPCBpbmRleCkge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBzZXRfb2JqZWN0X2F0KGluZGV4LCB2YWx1ZSkge1xuICAgIGlmIChpbmRleCA8PSB0aGlzLmxlbmd0aCgpKSB7XG4gICAgICB2YXIgaSA9IDE7XG4gICAgICB2YXIgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgIHdoaWxlIChpIDwgaW5kZXgpIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgY3VycmVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmtlZExpc3Q7XG5cbi8qKiovIH0pLFxuLyogMjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIFBvaW50RCA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXG5mdW5jdGlvbiBUcmFuc2Zvcm0oeCwgeSkge1xuICB0aGlzLmx3b3JsZE9yZ1ggPSAwLjA7XG4gIHRoaXMubHdvcmxkT3JnWSA9IDAuMDtcbiAgdGhpcy5sZGV2aWNlT3JnWCA9IDAuMDtcbiAgdGhpcy5sZGV2aWNlT3JnWSA9IDAuMDtcbiAgdGhpcy5sd29ybGRFeHRYID0gMS4wO1xuICB0aGlzLmx3b3JsZEV4dFkgPSAxLjA7XG4gIHRoaXMubGRldmljZUV4dFggPSAxLjA7XG4gIHRoaXMubGRldmljZUV4dFkgPSAxLjA7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRPcmdYID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sd29ybGRPcmdYO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbiAod294KSB7XG4gIHRoaXMubHdvcmxkT3JnWCA9IHdveDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRPcmdZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sd29ybGRPcmdZO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1kgPSBmdW5jdGlvbiAod295KSB7XG4gIHRoaXMubHdvcmxkT3JnWSA9IHdveTtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRFeHRYID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sd29ybGRFeHRYO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFggPSBmdW5jdGlvbiAod2V4KSB7XG4gIHRoaXMubHdvcmxkRXh0WCA9IHdleDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRFeHRZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sd29ybGRFeHRZO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFkgPSBmdW5jdGlvbiAod2V5KSB7XG4gIHRoaXMubHdvcmxkRXh0WSA9IHdleTtcbn07XG5cbi8qIERldmljZSByZWxhdGVkICovXG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlT3JnWCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubGRldmljZU9yZ1g7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZU9yZ1ggPSBmdW5jdGlvbiAoZG94KSB7XG4gIHRoaXMubGRldmljZU9yZ1ggPSBkb3g7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZU9yZ1kgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxkZXZpY2VPcmdZO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXREZXZpY2VPcmdZID0gZnVuY3Rpb24gKGRveSkge1xuICB0aGlzLmxkZXZpY2VPcmdZID0gZG95O1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VFeHRYID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sZGV2aWNlRXh0WDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlRXh0WCA9IGZ1bmN0aW9uIChkZXgpIHtcbiAgdGhpcy5sZGV2aWNlRXh0WCA9IGRleDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlRXh0WSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubGRldmljZUV4dFk7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZUV4dFkgPSBmdW5jdGlvbiAoZGV5KSB7XG4gIHRoaXMubGRldmljZUV4dFkgPSBkZXk7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnRyYW5zZm9ybVggPSBmdW5jdGlvbiAoeCkge1xuICB2YXIgeERldmljZSA9IDAuMDtcbiAgdmFyIHdvcmxkRXh0WCA9IHRoaXMubHdvcmxkRXh0WDtcbiAgaWYgKHdvcmxkRXh0WCAhPSAwLjApIHtcbiAgICB4RGV2aWNlID0gdGhpcy5sZGV2aWNlT3JnWCArICh4IC0gdGhpcy5sd29ybGRPcmdYKSAqIHRoaXMubGRldmljZUV4dFggLyB3b3JsZEV4dFg7XG4gIH1cblxuICByZXR1cm4geERldmljZTtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUudHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KSB7XG4gIHZhciB5RGV2aWNlID0gMC4wO1xuICB2YXIgd29ybGRFeHRZID0gdGhpcy5sd29ybGRFeHRZO1xuICBpZiAod29ybGRFeHRZICE9IDAuMCkge1xuICAgIHlEZXZpY2UgPSB0aGlzLmxkZXZpY2VPcmdZICsgKHkgLSB0aGlzLmx3b3JsZE9yZ1kpICogdGhpcy5sZGV2aWNlRXh0WSAvIHdvcmxkRXh0WTtcbiAgfVxuXG4gIHJldHVybiB5RGV2aWNlO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWCA9IGZ1bmN0aW9uICh4KSB7XG4gIHZhciB4V29ybGQgPSAwLjA7XG4gIHZhciBkZXZpY2VFeHRYID0gdGhpcy5sZGV2aWNlRXh0WDtcbiAgaWYgKGRldmljZUV4dFggIT0gMC4wKSB7XG4gICAgeFdvcmxkID0gdGhpcy5sd29ybGRPcmdYICsgKHggLSB0aGlzLmxkZXZpY2VPcmdYKSAqIHRoaXMubHdvcmxkRXh0WCAvIGRldmljZUV4dFg7XG4gIH1cblxuICByZXR1cm4geFdvcmxkO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KSB7XG4gIHZhciB5V29ybGQgPSAwLjA7XG4gIHZhciBkZXZpY2VFeHRZID0gdGhpcy5sZGV2aWNlRXh0WTtcbiAgaWYgKGRldmljZUV4dFkgIT0gMC4wKSB7XG4gICAgeVdvcmxkID0gdGhpcy5sd29ybGRPcmdZICsgKHkgLSB0aGlzLmxkZXZpY2VPcmdZKSAqIHRoaXMubHdvcmxkRXh0WSAvIGRldmljZUV4dFk7XG4gIH1cbiAgcmV0dXJuIHlXb3JsZDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVBvaW50ID0gZnVuY3Rpb24gKGluUG9pbnQpIHtcbiAgdmFyIG91dFBvaW50ID0gbmV3IFBvaW50RCh0aGlzLmludmVyc2VUcmFuc2Zvcm1YKGluUG9pbnQueCksIHRoaXMuaW52ZXJzZVRyYW5zZm9ybVkoaW5Qb2ludC55KSk7XG4gIHJldHVybiBvdXRQb2ludDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNmb3JtO1xuXG4vKioqLyB9KSxcbi8qIDIxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIEVtaXR0ZXIoKSB7XG4gIHRoaXMubGlzdGVuZXJzID0gW107XG59XG5cbnZhciBwID0gRW1pdHRlci5wcm90b3R5cGU7XG5cbnAuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gIHRoaXMubGlzdGVuZXJzLnB1c2goe1xuICAgIGV2ZW50OiBldmVudCxcbiAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgfSk7XG59O1xuXG5wLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICBmb3IgKHZhciBpID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsID0gdGhpcy5saXN0ZW5lcnNbaV07XG5cbiAgICBpZiAobC5ldmVudCA9PT0gZXZlbnQgJiYgbC5jYWxsYmFjayA9PT0gY2FsbGJhY2spIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbn07XG5cbnAuZW1pdCA9IGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGwgPSB0aGlzLmxpc3RlbmVyc1tpXTtcblxuICAgIGlmIChldmVudCA9PT0gbC5ldmVudCkge1xuICAgICAgbC5jYWxsYmFjayhkYXRhKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuLyoqKi8gfSksXG4vKiAyMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTGF5b3V0Q29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuZnVuY3Rpb24gRkRMYXlvdXRDb25zdGFudHMoKSB7fVxuXG4vL0ZETGF5b3V0Q29uc3RhbnRzIGluaGVyaXRzIHN0YXRpYyBwcm9wcyBpbiBMYXlvdXRDb25zdGFudHNcbmZvciAodmFyIHByb3AgaW4gTGF5b3V0Q29uc3RhbnRzKSB7XG4gIEZETGF5b3V0Q29uc3RhbnRzW3Byb3BdID0gTGF5b3V0Q29uc3RhbnRzW3Byb3BdO1xufVxuXG5GRExheW91dENvbnN0YW50cy5NQVhfSVRFUkFUSU9OUyA9IDI1MDA7XG5cbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggPSA1MDtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIID0gMC40NTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIID0gNDUwMC4wO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIID0gMC40O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIID0gMS4wO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IDMuODtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSAxLjU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9JREVBTF9FREdFX0xFTkdUSF9DQUxDVUxBVElPTiA9IHRydWU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9SRVBVTFNJT05fUkFOR0VfQ0FMQ1VMQVRJT04gPSB0cnVlO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCA9IDAuNTtcbkZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTCA9IDEwMC4wO1xuRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UID0gRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMICogMztcbkZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggLyAxMC4wO1xuRkRMYXlvdXRDb25zdGFudHMuQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9EID0gMTAwO1xuRkRMYXlvdXRDb25zdGFudHMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiA9IDAuMTtcbkZETGF5b3V0Q29uc3RhbnRzLk1JTl9FREdFX0xFTkdUSCA9IDE7XG5GRExheW91dENvbnN0YW50cy5HUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCA9IDEwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0Q29uc3RhbnRzO1xuXG4vKioqLyB9KSxcbi8qIDIzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBMRWRnZSA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcblxuZnVuY3Rpb24gRkRMYXlvdXRFZGdlKHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSkge1xuICBMRWRnZS5jYWxsKHRoaXMsIHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSk7XG4gIHRoaXMuaWRlYWxMZW5ndGggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIO1xufVxuXG5GRExheW91dEVkZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMRWRnZS5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExFZGdlKSB7XG4gIEZETGF5b3V0RWRnZVtwcm9wXSA9IExFZGdlW3Byb3BdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0RWRnZTtcblxuLyoqKi8gfSksXG4vKiAyNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTE5vZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblxuZnVuY3Rpb24gRkRMYXlvdXROb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIC8vIGFsdGVybmF0aXZlIGNvbnN0cnVjdG9yIGlzIGhhbmRsZWQgaW5zaWRlIExOb2RlXG4gIExOb2RlLmNhbGwodGhpcywgZ20sIGxvYywgc2l6ZSwgdk5vZGUpO1xuICAvL1NwcmluZywgcmVwdWxzaW9uIGFuZCBncmF2aXRhdGlvbmFsIGZvcmNlcyBhY3Rpbmcgb24gdGhpcyBub2RlXG4gIHRoaXMuc3ByaW5nRm9yY2VYID0gMDtcbiAgdGhpcy5zcHJpbmdGb3JjZVkgPSAwO1xuICB0aGlzLnJlcHVsc2lvbkZvcmNlWCA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VZID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCA9IDA7XG4gIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkgPSAwO1xuICAvL0Ftb3VudCBieSB3aGljaCB0aGlzIG5vZGUgaXMgdG8gYmUgbW92ZWQgaW4gdGhpcyBpdGVyYXRpb25cbiAgdGhpcy5kaXNwbGFjZW1lbnRYID0gMDtcbiAgdGhpcy5kaXNwbGFjZW1lbnRZID0gMDtcblxuICAvL1N0YXJ0IGFuZCBmaW5pc2ggZ3JpZCBjb29yZGluYXRlcyB0aGF0IHRoaXMgbm9kZSBpcyBmYWxsZW4gaW50b1xuICB0aGlzLnN0YXJ0WCA9IDA7XG4gIHRoaXMuZmluaXNoWCA9IDA7XG4gIHRoaXMuc3RhcnRZID0gMDtcbiAgdGhpcy5maW5pc2hZID0gMDtcblxuICAvL0dlb21ldHJpYyBuZWlnaGJvcnMgb2YgdGhpcyBub2RlXG4gIHRoaXMuc3Vycm91bmRpbmcgPSBbXTtcbn1cblxuRkRMYXlvdXROb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTE5vZGUucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBMTm9kZSkge1xuICBGRExheW91dE5vZGVbcHJvcF0gPSBMTm9kZVtwcm9wXTtcbn1cblxuRkRMYXlvdXROb2RlLnByb3RvdHlwZS5zZXRHcmlkQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbiAoX3N0YXJ0WCwgX2ZpbmlzaFgsIF9zdGFydFksIF9maW5pc2hZKSB7XG4gIHRoaXMuc3RhcnRYID0gX3N0YXJ0WDtcbiAgdGhpcy5maW5pc2hYID0gX2ZpbmlzaFg7XG4gIHRoaXMuc3RhcnRZID0gX3N0YXJ0WTtcbiAgdGhpcy5maW5pc2hZID0gX2ZpbmlzaFk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0Tm9kZTtcblxuLyoqKi8gfSksXG4vKiAyNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBEaW1lbnNpb25EKHdpZHRoLCBoZWlnaHQpIHtcbiAgdGhpcy53aWR0aCA9IDA7XG4gIHRoaXMuaGVpZ2h0ID0gMDtcbiAgaWYgKHdpZHRoICE9PSBudWxsICYmIGhlaWdodCAhPT0gbnVsbCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgfVxufVxuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMud2lkdGg7XG59O1xuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aCkge1xuICB0aGlzLndpZHRoID0gd2lkdGg7XG59O1xuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhlaWdodDtcbn07XG5cbkRpbWVuc2lvbkQucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uIChoZWlnaHQpIHtcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpbWVuc2lvbkQ7XG5cbi8qKiovIH0pLFxuLyogMjYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuY29uc3QgTGlua2VkTGlzdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXG5mdW5jdGlvbiBRdWlja3NvcnQoKSB7fVxuXG5RdWlja3NvcnQuZ2V0X29iamVjdF9hdCA9IGZ1bmN0aW9uIChsaXN0LCBpKSB7XG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICByZXR1cm4gbGlzdFtpXTtcbiAgICB9IGVsc2UgaWYgKGxpc3QgaW5zdGFuY2VvZiBMaW5rZWRMaXN0KSB7XG4gICAgICAgIHJldHVybiBsaXN0LmdldF9vYmplY3RfYXQoaSk7XG4gICAgfVxufTtcblxuUXVpY2tzb3J0LnNldF9vYmplY3RfYXQgPSBmdW5jdGlvbiAobGlzdCwgaSwgdmFsdWUpIHtcbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGxpc3RbaV0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKGxpc3QgaW5zdGFuY2VvZiBMaW5rZWRMaXN0KSB7XG4gICAgICAgIGxpc3Quc2V0X29iamVjdF9hdChpLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuUXVpY2tzb3J0LnF1aWNrc29ydCA9IGZ1bmN0aW9uIChsaXN0LCBjb21wYXJpc29uX2ZuKSB7XG5cbiAgICAvLyBpbnB1dCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIExpbmtlZExpc3QgY2xhc3Mgb3IgbXVzdCBiZSBhbiBhcnJheSBpbiBvcmRlciB0byBzb3J0XG4gICAgaWYgKCEobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QgfHwgbGlzdCBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNvbXBhcmlzb25fZnVuY3Rpb24gPSBjb21wYXJpc29uX2ZuO1xuXG4gICAgaWYgKGNvbXBhcmlzb25fZnVuY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21wYXJpc29uX2Z1bmN0aW9uID0gUXVpY2tzb3J0LmNvbXBhcmU7XG4gICAgfVxuICAgIHZhciBlbmRfaW5kZXg7XG5cbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QpIHtcbiAgICAgICAgZW5kX2luZGV4ID0gbGlzdC5zaXplKCk7XG4gICAgfSBlbHNlIGlmIChsaXN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZW5kX2luZGV4ID0gbGlzdC5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgZW1wdHkgbGlzdHMgb3IgYXJyYXlzLlxuICAgIGlmIChlbmRfaW5kZXggPj0gMCkge1xuICAgICAgICBRdWlja3NvcnQucXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyhsaXN0LCAwLCBlbmRfaW5kZXgsIGNvbXBhcmlzb25fZnVuY3Rpb24pO1xuICAgIH1cbn07XG5cblF1aWNrc29ydC5xdWlja3NvcnRfYmV0d2Vlbl9pbmRpY2VzID0gZnVuY3Rpb24gKGxpc3QsIGxvdywgaGlnaCwgY29tcGFyaXNvbl9mbikge1xuXG4gICAgLy8gaW5wdXQgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBMaW5rZWRMaXN0IGNsYXNzIG9yIG11c3QgYmUgYW4gYXJyYXkgaW4gb3JkZXIgdG8gc29ydFxuICAgIGlmICghKGxpc3QgaW5zdGFuY2VvZiBMaW5rZWRMaXN0IHx8IGxpc3QgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb21wYXJpc29uX2ZuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tcGFyaXNvbl9mbiA9IFF1aWNrc29ydC5jb21wYXJlO1xuICAgIH1cblxuICAgIHZhciBpID0gbG93O1xuICAgIHZhciBqID0gaGlnaDtcbiAgICB2YXIgbWlkZGxlSW5kZXggPSBNYXRoLmZsb29yKChpICsgaikgLyAyKTtcbiAgICB2YXIgbWlkZGxlID0gUXVpY2tzb3J0LmdldF9vYmplY3RfYXQobGlzdCwgbWlkZGxlSW5kZXgpO1xuXG4gICAgZG8ge1xuXG4gICAgICAgIHdoaWxlIChjb21wYXJpc29uX2ZuKFF1aWNrc29ydC5nZXRfb2JqZWN0X2F0KGxpc3QsIGkpLCBtaWRkbGUpKSB7XG5cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjb21wYXJpc29uX2ZuKG1pZGRsZSwgUXVpY2tzb3J0LmdldF9vYmplY3RfYXQobGlzdCwgaikpKSB7XG5cbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpIDw9IGopIHtcblxuICAgICAgICAgICAgdmFyIHRlbXAgPSBRdWlja3NvcnQuZ2V0X29iamVjdF9hdChsaXN0LCBpKTtcbiAgICAgICAgICAgIFF1aWNrc29ydC5zZXRfb2JqZWN0X2F0KGxpc3QsIGksIFF1aWNrc29ydC5nZXRfb2JqZWN0X2F0KGxpc3QsIGopKTtcbiAgICAgICAgICAgIFF1aWNrc29ydC5zZXRfb2JqZWN0X2F0KGxpc3QsIGosIHRlbXApO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgai0tO1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAoaSA8PSBqKTtcblxuICAgIGlmIChsb3cgPCBqKSB7XG5cbiAgICAgICAgUXVpY2tzb3J0LnF1aWNrc29ydF9iZXR3ZWVuX2luZGljZXMobGlzdCwgbG93LCBqLCBjb21wYXJpc29uX2ZuKTtcbiAgICB9XG5cbiAgICBpZiAoaGlnaCA+IGkpIHtcblxuICAgICAgICBRdWlja3NvcnQucXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyhsaXN0LCBpLCBoaWdoLCBjb21wYXJpc29uX2ZuKTtcbiAgICB9XG59O1xuXG4vLyB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgb3ZlcnJpZGVuIGZvciBzb3J0aW5nIGRpZmZlcmVudCBkYXRhIHR5cGVzKGUuZy4gc3RyaW5nLCBpbnRlZ2VyIGV0Yy4pXG5RdWlja3NvcnQuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIgPiBhO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWlja3NvcnQ7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pOyIsInZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCdsYXlvdXQtYmFzZScpLkxheW91dENvbnN0YW50cztcblxuZnVuY3Rpb24gQVZTREZDb25zdGFudHMoKXt9XG5cbi8vIEFWU0RGQ29uc3RhbnRzIGluaGVyaXRzIHByb3BlcnRpZXMgaW4gTGF5b3V0Q29uc3RhbnRzXG5mb3IodmFyIHByb3AgaW4gTGF5b3V0Q29uc3RhbnRzKXtcbiAgICBBVlNERkNvbnN0YW50c1twcm9wXSA9IExheW91dENvbnN0YW50c1twcm9wXTtcbn1cblxuQVZTREZDb25zdGFudHMuREVGQVVMVF9OT0RFX1NFUEFSQVRJT04gPSA2MDtcblxubW9kdWxlLmV4cG9ydHMgPSBBVlNERkNvbnN0YW50czsiLCIvKipcbiAqIFRoaXMgY2xhc3MgaW1wbGVtZW50cyBkYXRhIGFuZCBmdW5jdGlvbmFsaXR5IHJlcXVpcmVkIGZvciBBVlNERiBsYXlvdXQgcGVyXG4gKiBlZGdlLlxuICpcblxuICogQ29weXJpZ2h0OiBpLVZpcyBSZXNlYXJjaCBHcm91cCwgQmlsa2VudCBVbml2ZXJzaXR5LCAyMDA3IC0gcHJlc2VudFxuICovXG5cbmxldCBMRWRnZSA9IHJlcXVpcmUoJ2xheW91dC1iYXNlJykuTEVkZ2U7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBJbml0aWFsaXphdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIEFWU0RGRWRnZShzb3VyY2UsIHRhcmdldCwgdkVkZ2UpXG57XG4gICAgTEVkZ2UuY2FsbCh0aGlzLCBzb3VyY2UsdGFyZ2V0LCB2RWRnZSk7XG59XG5cbkFWU0RGRWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExFZGdlLnByb3RvdHlwZSk7XG5cbmZvciAobGV0IHByb3BlcnRpZXMgaW4gTEVkZ2UpXG57XG4gICAgQVZTREZFZGdlW3Byb3BlcnRpZXNdID0gTEVkZ2VbcHJvcGVydGllc107XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBBY2Nlc3NvciBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoZSBmdW5jdGlvbiBnZXRPdGhlckVuZCByZXR1cm5zIHRoZSBvdGhlciBlbmQgb2YgdGhpcyBlZGdlLlxuQVZTREZFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZCA9IGZ1bmN0aW9uKG5vZGUpXG57XG4gICAgcmV0dXJuIExFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZChub2RlKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBSZW1haW5pbmcgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGNoZWNrcyB3aGV0aGVyIHRoaXMgZWRnZSBjcm9zc2VzIHdpdGggdGhlIGlucHV0IGVkZ2UuIEl0XG4vLyByZXR1cm5zIGZhbHNlLCBpZiBhbnkgb2YgdGhlIHZlcnRpY2VzIHRob3NlIGVkZ2VzIGFyZSBpbmNpZGVudCB0byBhcmUgbm90XG4vLyB5ZXQgcGxhY2VkIG9uIHRoZSBjaXJjbGUuXG5BVlNERkVkZ2UucHJvdG90eXBlLmNyb3NzZXNXaXRoRWRnZSA9IGZ1bmN0aW9uKG90aGVyRWRnZSlcbntcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHNvdXJjZVBvcyA9IHNlbGYuZ2V0U291cmNlKCkuZ2V0SW5kZXgoKTtcbiAgICBsZXQgdGFyZ2V0UG9zID0gc2VsZi5nZXRUYXJnZXQoKS5nZXRJbmRleCgpO1xuICAgIGxldCBvdGhlclNvdXJjZVBvcyA9IG90aGVyRWRnZS5nZXRTb3VyY2UoKS5nZXRJbmRleCgpO1xuICAgIGxldCBvdGhlclRhcmdldFBvcyA9IG90aGVyRWRnZS5nZXRUYXJnZXQoKS5nZXRJbmRleCgpO1xuICAgIFxuICAgIC8vIGlmIGFueSBvZiB0aGUgdmVydGljZXMgdGhvc2UgdHdvIGVkZ2VzIGFyZSBub3QgeWV0IHBsYWNlZFxuICAgIGlmKHNvdXJjZVBvcyA9PT0gLTEgfHwgdGFyZ2V0UG9zID09PSAtMSB8fCBvdGhlclNvdXJjZVBvcyA9PT0gLTEgfHwgb3RoZXJUYXJnZXRQb3MgPT09IC0xKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBvdGhlclNvdXJjZURpc3QgPSBvdGhlckVkZ2UuZ2V0U291cmNlKCkuZ2V0Q2lyY0Rpc3RXaXRoVGhlTm9kZShzZWxmLmdldFNvdXJjZSgpKTtcbiAgICBsZXQgb3RoZXJUYXJnZXREaXN0ID0gb3RoZXJFZGdlLmdldFRhcmdldCgpLmdldENpcmNEaXN0V2l0aFRoZU5vZGUoc2VsZi5nZXRTb3VyY2UoKSk7XG4gICAgbGV0IHRoaXNUYXJnZXREaXN0ID0gc2VsZi5nZXRUYXJnZXQoKS5nZXRDaXJjRGlzdFdpdGhUaGVOb2RlKHNlbGYuZ2V0U291cmNlKCkpO1xuXG4gICAgaWYgKHRoaXNUYXJnZXREaXN0IDwgTWF0aC5tYXgob3RoZXJTb3VyY2VEaXN0LCBvdGhlclRhcmdldERpc3QpICYmXG4gICAgICAgICAgICB0aGlzVGFyZ2V0RGlzdCA+IE1hdGgubWluKG90aGVyU291cmNlRGlzdCwgb3RoZXJUYXJnZXREaXN0KSAmJlxuICAgICAgICAgICAgICAgIG90aGVyVGFyZ2V0RGlzdCAhPT0gMCAmJiBvdGhlclNvdXJjZURpc3QgIT09IDApXG4gICAge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgMSBpZiB0aGlzIGVkZ2UgY3Jvc3NlcyB3aXRoIHRoZSBpbnB1dCBlZGdlLCAwXG4vLyBvdGhlcndpc2UuXG5BVlNERkVkZ2UucHJvdG90eXBlLmNyb3NzaW5nV2l0aEVkZ2UgPSBmdW5jdGlvbihvdGhlckVkZ2UpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCByZXN1bHQgPSBzZWxmLmNyb3NzZXNXaXRoRWRnZShvdGhlckVkZ2UpO1xuXG4gICAgcmV0dXJuICByZXN1bHQgPyAxIDogMDtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gY2FsY3VsYXRlcyB0aGUgdG90YWwgbnVtYmVyIG9mIGNyb3NzaW5ncyBvZiB0aGlzIGVkZ2Ugd2l0aFxuLy8gYWxsIHRoZSBlZGdlcyBnaXZlbiBpbiB0aGUgaW5wdXQgbGlzdC5cbkFWU0RGRWRnZS5wcm90b3R5cGUuY2FsY3VsYXRlVG90YWxDcm9zc2luZ1dpdGhMaXN0ID0gZnVuY3Rpb24oZWRnZUxpc3QpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCB0b3RhbENyb3NzaW5nID0gMDtcblxuICAgIGVkZ2VMaXN0LmZvckVhY2goXG4gICAgICAgIChlZGdlKSA9PiB0b3RhbENyb3NzaW5nICs9IHNlbGYuY3Jvc3NpbmdXaXRoRWRnZShlZGdlKVxuICAgICk7XG5cbiAgICByZXR1cm4gdG90YWxDcm9zc2luZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQVZTREZFZGdlOyIsIi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGRhdGEgYW5kIGZ1bmN0aW9uYWxpdHkgcmVxdWlyZWQgZm9yIEFWU0RGIGxheW91dCBwZXJcbiAqIGNpcmNsZS5cbiAqXG4gKlxuICogQ29weXJpZ2h0OiBpLVZpcyBSZXNlYXJjaCBHcm91cCwgQmlsa2VudCBVbml2ZXJzaXR5LCAyMDA3IC0gcHJlc2VudFxuICovXG5cbmxldCBMR3JhcGggPSByZXF1aXJlKCdsYXlvdXQtYmFzZScpLkxHcmFwaDtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEluaXRpYWxpemF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gQVZTREZDaXJjbGUocGFyZW50LCBncmFwaE1nciwgdk9iamVjdClcbntcbiAgICBMR3JhcGguY2FsbCh0aGlzLCBwYXJlbnQsIGdyYXBoTWdyLCB2T2JqZWN0KTtcbiAgICB0aGlzLmluT3JkZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgIHRoaXMubm9kZVNlcGFyYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGFjayA9IFtdO1xuICAgIHRoaXMucGVyaW1ldGVyID0gMDtcbiAgICB0aGlzLmNlbnRlclggPSAwO1xuICAgIHRoaXMuY2VudGVyWSA9IDA7XG4gICAgdGhpcy5yYWRpdXMgPSAwO1xufVxuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaC5wcm90b3R5cGUpO1xuXG5mb3IobGV0IHByb3BlcnR5IGluIExHcmFwaClcbntcbiAgICBBVlNERkNpcmNsZVtwcm9wZXJ0eV0gPSBMR3JhcGhbcHJvcGVydHldO1xufVxuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuaW5pdE9yZGVyaW5nID0gZnVuY3Rpb24oKVxue1xuICAgIHRoaXMuaW5PcmRlciA9IFtdO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEFjY2Vzc29yIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBhcnJheSBpbiB3aGljaCB0aGUgbm9kZXMgb2YgdGhpcyBjaXJjbGUgYXJlIGtlcHQgaW4gb3JkZXIuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuZ2V0T3JkZXIgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMuaW5PcmRlcjtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgeC1jb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb2YgdGhpcyBjaXJjbGUuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uKClcbntcbiAgICByZXR1cm4gdGhpcy5jZW50ZXJYO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIGNlbnRlciBvZiB0aGlzIGNpcmNsZS5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5nZXRDZW50ZXJZID0gZnVuY3Rpb24oKVxue1xuICAgIHJldHVybiB0aGlzLmNlbnRlclk7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJhZGl1cyBvZiB0aGlzIGNpcmNsZS5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5nZXRSYWRpdXMgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMucmFkaXVzO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2YgdmVydGljZXMgb2YgdGhpcyBjaXJjbGUuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uKClcbntcbiAgICByZXR1cm4gdGhpcy5nZXROb2RlcygpLmxlbmd0aDtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gY2FsY3VsYXRlcyBhbmQgcmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIGNyb3NzaW5ncyBpbiB0aGlzXG4vLyBjaXJjbGUgYnkgYWRkaW5nIHVwIHRoZSBjcm9zc2luZyBudW1iZXIgb2YgaW5kaXZpZHVhbCBub2RlcyBvbiBpdC5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5nZXRUb3RhbENyb3NzaW5nT2ZDaXJjbGUgPSBmdW5jdGlvbigpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBjcm9zc2luZ051bWJlciA9IDA7XG4gICAgXG4gICAgZm9yKGxldCBub2RlIGluIHNlbGYuaW5PcmRlcilcbiAgICB7XG4gICAgICAgIGxldCBub2RlQ3Jvc3NpbmcgPSBub2RlLmdldFRvdGFsQ3Jvc3NpbmdPZkVkZ2VzKCk7XG4gICAgICAgIGlmKG5vZGVDcm9zc2luZyA9PT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBjcm9zc2luZ051bWJlciArPSBub2RlQ3Jvc3Npbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyb3NzaW5nTnVtYmVyIC8gNDtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gY2hlY2tzIHdoZXRoZXIgb3Igbm90IGFsbCBvZiB0aGUgdmVydGljZXMgb2YgdGhpcyBjaXJjbGUgYXJlXG4vLyBhc3NpZ25lZCBhbiBpbmRleCBvbiB0aGUgY2lyY2xlLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmhhc0ZpbmlzaGVkT3JkZXJpbmcgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEluZGV4ID09PSB0aGlzLmdldE5vZGVzKCkubGVuZ3RoO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBub2RlIHNlcGFyYXRpb24gb2YgdGhpcyBjaXJjbGUuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuZ2V0Tm9kZVNlcGFyYXRpb24gPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMubm9kZVNlcGFyYXRpb247XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIG5vZGUgc2VwYXJhdGlvbiBvZiB0aGlzIGNpcmNsZS5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5zZXROb2RlU2VwYXJhdGlvbiA9IGZ1bmN0aW9uKG5vZGVTZXBhcmF0aW9uKVxue1xuICAgIHRoaXMubm9kZVNlcGFyYXRpb24gPSBub2RlU2VwYXJhdGlvbjtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBSZW1haW5pbmcgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHRyYXZlcnNlcyB0aGUgdmVydGljZXMgb2YgdGhpcyBjaXJjbGUgYW5kIGNvcnJlY3RzIHRoZSBhbmdsZVxuLy8gb2YgdGhlIHZlcnRpY2VzIHdpdGggcmVzcGVjdCB0byB0aGVpciBjaXJjbGUgaW5kaWNlcy5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5jb3JyZWN0QW5nbGVzID0gZnVuY3Rpb24oKVxue1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBzZWxmLmN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBzZWxmLmluT3JkZXIuZm9yRWFjaChcbiAgICAgICAgKG5vZGUpID0+ICBzZWxmLnB1dEluT3JkZXIobm9kZSlcbiAgICApO1xufTtcblxuXG4vLyBUaGlzIGZ1bmN0aW9uIHB1dHMgdGhlIGdpdmVuIG5vZGUgb24gdGhlIGNpcmNsZSBpbiB0aGUgY3VycmVudCBvcmRlciBhbmRcbi8vIHNldHMgaXRzIGFuZ2xlIGFwcHJvcHJpYXRlbHkuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUucHV0SW5PcmRlciA9IGZ1bmN0aW9uKG5vZGUpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IG5vZGVzID0gc2VsZi5nZXROb2RlcygpO1xuXG4gICAgLy8gTm90ZSB0aGF0IGlkIGF0dHJpYnV0ZSBvZiBhIG5vZGUgaXMgYWRkZWQgYmVmb3JlXG4gICAgLy8gQVZTREZMYXlvdXQgaXMgY2FsbGVkXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChub2Rlc1tpXS5pZCA9PSBub2RlLmlkKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFmb3VuZClcbiAgICB7XG4gICAgICAgIHRocm93IFwiVGhlIG5vZGUgbXVzdCBiZSBhIG1lbWJlciBvZiBMR3JhcGhcIjtcbiAgICB9XG5cbiAgICBzZWxmLmluT3JkZXJbc2VsZi5jdXJyZW50SW5kZXhdID0gbm9kZTtcbiAgICBub2RlLnNldEluZGV4KHNlbGYuY3VycmVudEluZGV4KTtcblxuICAgIGlmKHNlbGYuY3VycmVudEluZGV4ID09PSAwKVxuICAgIHtcbiAgICAgICAgbm9kZS5zZXRBbmdsZSgwLjApO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBub2RlLnNldEFuZ2xlKHNlbGYuaW5PcmRlcltzZWxmLmN1cnJlbnRJbmRleCAtIDFdLmdldEFuZ2xlKCkgKyAyICogTWF0aC5QSSAqXG4gICAgICAgICAgICAobm9kZS5nZXREaWFnb25hbCgpIC8gMiArIHNlbGYubm9kZVNlcGFyYXRpb24gK1xuICAgICAgICAgICAgICAgIHNlbGYuaW5PcmRlcltzZWxmLmN1cnJlbnRJbmRleCAtIDFdLmdldERpYWdvbmFsKCkgLyAyKVxuICAgICAgICAgICAgLyBzZWxmLnBlcmltZXRlcik7XG4gICAgfVxuXG4gICAgc2VsZi5jdXJyZW50SW5kZXgrKztcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgbmV4dCBub2RlIHRvIGJlIHBsYWNlZCBvbiB0aGlzIGNpcmNsZSB3aXRoXG4vLyByZXNwZWN0IHRvIHRoZSBBVlNERiBhbGdvcml0aG0uXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuZmluZE5vZGVUb1BsYWNlID0gZnVuY3Rpb24oKVxue1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgc0RlZ3JlZU5vZGUgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBGaW5kIHRoZSBzbWFsbGVzdCBkZWdyZWUgdmVydGV4IGlmIHRoZSBzdGFjayBpcyBlbXB0eVxuICAgIGlmKHNlbGYuc3RhY2subGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgICAgc0RlZ3JlZU5vZGUgPSBzZWxmLmZpbmRVbm9yZGVyZWRTbWFsbGVzdERlZ3JlZU5vZGUoKTtcbiAgICB9XG4gICAgLy8gRmluZCB0aGUgZmlyc3QgdmVydGV4IGluIHRoZSBzdGFjayBub3QgeWV0IHBsYWNlZFxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGxldCBmb3VuZFVub3JkZXJOb2RlID0gZmFsc2U7XG5cbiAgICAgICAgd2hpbGUgKCFmb3VuZFVub3JkZXJOb2RlICYmICEoc2VsZi5zdGFjay5sZW5ndGggPT09IDApKVxuICAgICAgICB7XG4gICAgICAgICAgICBzRGVncmVlTm9kZSA9IHNlbGYuc3RhY2sucG9wKCk7XG4gICAgICAgICAgICBmb3VuZFVub3JkZXJOb2RlID0gIXNEZWdyZWVOb2RlLmlzT3JkZXJlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmb3VuZFVub3JkZXJOb2RlKVxuICAgICAgICB7XG4gICAgICAgICAgICBzRGVncmVlTm9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIG5vIHVub3JkZXJlZCB2ZXJ0ZXggaXMgZm91bmQgaW4gdGhlIHN0YWNrLCBmaW5kIG9uZVxuICAgIC8vIGZyb20gdGhlIHJlbWFpbmluZyBvbmVzXG4gICAgaWYoc0RlZ3JlZU5vZGUgPT09IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICAgIHNEZWdyZWVOb2RlID0gc2VsZi5maW5kVW5vcmRlcmVkU21hbGxlc3REZWdyZWVOb2RlKCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSB1bm9yZGVyZWQgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZSB0byB0aGUgc3RhY2tcbiAgICBpZiggc0RlZ3JlZU5vZGUgIT09IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICAgIGxldCBuZWlnaGJvcnMgPSBzRGVncmVlTm9kZS5nZXROZWlnaGJvcnNTb3J0ZWRCeURlZ3JlZSgpO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IG5laWdoYm9ycy5sZW5ndGggLSAxOyBpID49IDAgOyBpLS0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcblxuICAgICAgICAgICAgaWYoIW5laWdoYm9yLmlzT3JkZXJlZCgpKSAvLyBDaGVjayBoZXJlIGZvciBwb3NzaWJsZSBlcnJvclxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhY2sucHVzaChuZWlnaGJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc0RlZ3JlZU5vZGU7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGNhbGN1bGF0ZXMgdGhlIHJhZGl1cyBvZiB0aGlzIGNpcmNsZSB3aXRoIHJlc3BlY3QgdG8gdGhlIHNpemVzXG4vLyBvZiB0aGUgdmVydGljZXMgYW5kIHRoZSBub2RlIHNlcGFyYXRpb24gcGFyYW1ldGVyLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmNhbGN1bGF0ZVJhZGl1cyA9IGZ1bmN0aW9uKClcbntcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHRvdGFsRGlhZ29uYWwgPSAwO1xuXG4gICAgc2VsZi5nZXROb2RlcygpLmZvckVhY2goXG4gICAgICAgIChub2RlKSA9PiB0b3RhbERpYWdvbmFsICs9IE1hdGguc3FydChub2RlLmdldFdpZHRoKCkgKiBub2RlLmdldFdpZHRoKCkgKyBub2RlLmdldEhlaWdodCgpICogbm9kZS5nZXRIZWlnaHQoKSlcbiAgICApO1xuXG4gICAgc2VsZi5wZXJpbWV0ZXIgPSB0b3RhbERpYWdvbmFsICsgc2VsZi5nZXROb2RlcygpLmxlbmd0aCAqIHNlbGYubm9kZVNlcGFyYXRpb247XG4gICAgbGV0IHJhZGl1cyA9IHNlbGYucGVyaW1ldGVyIC8gKCAyICogTWF0aC5QSSk7XG5cbiAgICAvLyBDaGVjayBoZXJlIGZvciBwb3NzaWJsZSBlcnJvclxuXG4gICAgc2VsZi5nZXRQYXJlbnQoKS5zZXRXaWR0aCggMiAqIHJhZGl1cyApO1xuICAgIHNlbGYuZ2V0UGFyZW50KCkuc2V0SGVpZ2h0KCAyICogcmFkaXVzICk7XG4gICAgc2VsZi5nZXRQYXJlbnQoKS5zZXRDZW50ZXIoIHNlbGYuZ2V0UGFyZW50KCkuZ2V0V2lkdGgoKSwgc2VsZi5nZXRQYXJlbnQoKS5nZXRIZWlnaHQoKSApO1xuXG4gICAgc2VsZi5jZW50ZXJYID0gc2VsZi5nZXRQYXJlbnQoKS5nZXRDZW50ZXJYKCk7XG4gICAgc2VsZi5jZW50ZXJZID0gc2VsZi5nZXRQYXJlbnQoKS5nZXRDZW50ZXJZKCk7XG4gICAgc2VsZi5yYWRpdXMgPSBzZWxmLmdldFBhcmVudCgpLmdldEhlaWdodCgpIC8gMjtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gY2FsY3VsYXRlcyB0aGUgdG90YWwgbnVtYmVyIG9mIGNyb3NzaW5ncyBvZiBhbGwgdmVydGljZXMgb2Zcbi8vIHRoaXMgY2lyY2xlLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmNhbGN1bGF0ZUVkZ2VDcm9zc2luZ3NPZk5vZGVzID0gZnVuY3Rpb24oKVxue1xuICAgIHRoaXMuZ2V0Tm9kZXMoKS5mb3JFYWNoKCAobm9kZSkgPT4gbm9kZS5jYWxjdWxhdGVUb3RhbENyb3NzaW5nKCkpO1xufTtcblxuXG4vLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIGluZGV4IG9mIGVhY2ggdmVydGV4IHRvIGl0cyBwb3NpdGlvbiBpbiBpbk9yZGVyXG4vLyBhcnJheS4gTm90ZSB0aGF0IGluZGV4IG9mIGEgbm9kZSBjYW4gYmUgZGlmZmVyZW50IGZyb20gaXRzIHBsYWNlIGluIHRoZVxuLy8gYXJyYXkgZHVlIHRvIGNyb3NzaW5nIHJlZHVjdGlvbiBwaGFzZSBvZiB0aGUgQVZTREYgYWxnb3JpdGhtLiBJdCBsb2Fkc1xuLy8gb2xkIGluZGV4IHZhbHVlcyB0byB2ZXJ0aWNlcyBkdWUgdG8gYW4gaW5jcmVhc2UgaW4gdGhlIG51bWJlciBvZlxuLy8gY3Jvc3NpbmdzIHdpdGggdGhlIG5ldyBpbmRpY2VzLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmxvYWRPbGRJbmRpY2VzT2ZOb2RlcyA9IGZ1bmN0aW9uKClcbntcbiAgICAvL3RoaXMuaW5PcmRlci5mb3JFYWNoKCAobm9kZSxpbmRleCkgPT4gbm9kZS5zZXRJbmRleChpbmRleCkpO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5PcmRlci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHNlbGYuaW5PcmRlcltpXS5zZXRJbmRleChpKTtcbiAgICB9XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIHBvc2l0aW9uIG9mIGVhY2ggbm9kZSBpbiBpbk9yZGVyIGFycmF5IHRvIGl0cyBpbmRleC5cbi8vIE5vdGUgdGhhdCBpbmRleCBvZiBhIG5vZGUgY2FuIGJlIGRpZmZlcmVudCBmcm9tIGl0cyBwbGFjZSBpbiB0aGUgaW5PcmRlclxuLy8gYXJyYXkgZHVlIHRvIGNyb3NzaW5nIHJlZHVjdGlvbiBwaGFzZSBvZiB0aGUgQVZTREYgYWxnb3JpdGhtLiBUaGlzIGZ1bmN0aW9uXG4vLyBwdXRzIHRoZSBub2RlcyB0byB0aGVpciBuZXcgaW5kZXggdmFsdWVzIGluIGluT3JkZXIgYXJyYXkgZHVlIHRvIGFcbi8vIGRlY3JlYXNlIGluIHRoZSBudW1iZXIgb2YgY3Jvc3NpbmdzIHdpdGggdGhlIG5ldyBpbmRpY2VzLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLnJlT3JkZXJWZXJ0aWNlcyA9IGZ1bmN0aW9uKClcbntcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5nZXROb2RlcygpLmZvckVhY2goIChub2RlKSA9PiBzZWxmLmluT3JkZXJbbm9kZS5nZXRJbmRleCgpXSA9IG5vZGUgKTtcbn07XG5cblxuLy8gVGhpcyBmdW5jdGlvbiBmaW5kcyBhbmQgcmV0dXJucyB0aGUgdW5vcmRlcmVkIHNtYWxsZXN0IGRlZ3JlZSB2ZXJ0ZXggb25cbi8vIHRoaXMgY2lyY2xlLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmZpbmRVbm9yZGVyZWRTbWFsbGVzdERlZ3JlZU5vZGUgPSBmdW5jdGlvbigpXG57XG4gICAgbGV0IG1pbkRlZ3JlZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIGxldCBzRGVncmVlTm9kZTtcbiAgICBcbiAgICB0aGlzLmdldE5vZGVzKCkuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24obm9kZSl7XG4gICAgICAgICAgICBpZihub2RlLmdldERlZ3JlZSgpIDwgbWluRGVncmVlICYmICFub2RlLmlzT3JkZXJlZCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1pbkRlZ3JlZSA9IG5vZGUuZ2V0RGVncmVlKCk7XG4gICAgICAgICAgICAgICAgc0RlZ3JlZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBzRGVncmVlTm9kZTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBBVlNERkNpcmNsZTsiLCIvKipcbiAqIFRoaXMgY2xhc3MgaW1wbGVtZW50cyB0aGUgb3ZlcmFsbCBsYXlvdXQgcHJvY2VzcyBmb3IgdGhlIEFWU0RGIGFsZ29yaXRobVxuICogKENpcmN1bGFyIERyYXdpbmcgQWxnb3JpdGhtIGJ5IEhlIGFuZCBTeWtvcmEpLlxuICpcbiAqXG4gKiBDb3B5cmlnaHQ6IGktVmlzIFJlc2VhcmNoIEdyb3VwLCBCaWxrZW50IFVuaXZlcnNpdHksIDIwMDcgLSBwcmVzZW50XG4gKi9cblxubGV0IExheW91dCA9IHJlcXVpcmUoJ2xheW91dC1iYXNlJykuTGF5b3V0O1xubGV0IEFWU0RGQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9BVlNERkNvbnN0YW50cy5qcycpO1xubGV0IEFWU0RGQ2lyY2xlID0gcmVxdWlyZSgnLi9BVlNERkNpcmNsZS5qcycpO1xubGV0IEFWU0RGTm9kZSA9IHJlcXVpcmUoJy4vQVZTREZOb2RlLmpzJyk7XG5sZXQgQVZTREZFZGdlID0gcmVxdWlyZSgnLi9BVlNERkVkZ2UuanMnKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEluaXRpYWxpemF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQ29uc3RydWN0b3JcbmZ1bmN0aW9uIEFWU0RGTGF5b3V0KClcbntcbiAgICBMYXlvdXQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLm5vZGVTZXBhcmF0aW9uID0gQVZTREZDb25zdGFudHMuREVGQVVMVF9OT0RFX1NFUEFSQVRJT047XG59XG5cbkFWU0RGTGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTGF5b3V0LnByb3RvdHlwZSk7XG5cbmZvciAobGV0IHByb3BlcnR5IGluIExheW91dClcbntcbiAgICBBVlNERkxheW91dFtwcm9wZXJ0eV0gPSBMYXlvdXRbcHJvcGVydHldO1xufVxuXG5BVlNERkxheW91dC5wcm90b3R5cGUubmV3R3JhcGggPSBmdW5jdGlvbiAodk9iamVjdClcbntcbiAgICB0aGlzLmF2c2RmQ2lyY2xlID0gbmV3IEFWU0RGQ2lyY2xlKG51bGwsIHRoaXMuZ3JhcGhNYW5hZ2VyLCB2T2JqZWN0KTtcblxuICAgIHJldHVybiB0aGlzLmF2c2RmQ2lyY2xlO1xufTtcblxuQVZTREZMYXlvdXQucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbiAodk5vZGUpXG57XG4gICAgcmV0dXJuIG5ldyBBVlNERk5vZGUodGhpcy5ncmFwaE1hbmFnZXIsIHZOb2RlKTtcbn07XG5cbkFWU0RGTGF5b3V0LnByb3RvdHlwZS5uZXdFZGdlID0gZnVuY3Rpb24gKHZFZGdlKVxue1xuICAgIHJldHVybiBuZXcgQVZTREZFZGdlKG51bGwsIG51bGwsIHZFZGdlKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBBY2Nlc3NvciBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcG9zaXRpb24gZGF0YSBmb3IgYWxsIG5vZGVzXG5BVlNERkxheW91dC5wcm90b3R5cGUuZ2V0UG9zaXRpb25zRGF0YSA9IGZ1bmN0aW9uKClcbntcbiAgICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xuICAgIHZhciBwRGF0YSA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciByZWN0ID0gYWxsTm9kZXNbaV0ucmVjdDtcbiAgICAgICAgdmFyIGlkID0gYWxsTm9kZXNbaV0uaWQ7XG5cbiAgICAgICAgcERhdGFbaWRdID0ge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgeDogcmVjdC5nZXRDZW50ZXJYKCksXG4gICAgICAgICAgICB5OiByZWN0LmdldENlbnRlclkoKSxcbiAgICAgICAgICAgIHc6IHJlY3Qud2lkdGgsXG4gICAgICAgICAgICBoOiByZWN0LmhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBwRGF0YTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBMYXlvdXQgUmVsYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHBlcmZvcm1zIGxheW91dCBvbiBjb25zdHJ1Y3RlZCBsLWxldmVsIGdyYXBoLlxuICogSXQgcmV0dXJucyB0cnVlIG9uIHN1Y2Nlc3MsIGZhbHNlIG90aGVyd2lzZS5cbiAqIEltcG9ydGFudCE6IElmIHlvdSB3YW50IHRvIHNlZSB0aGUgcmVzdWx0cyBvZiB0aGlzIGZ1bmN0aW9uIHRoZW4sIGFmdGVyIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLCB5b3UgaGF2ZSB0byBjYWxjdWxhdGVcbiAqIGFuZCBzZXQgdGhlIHBvc2l0aW9ucyBvZiBldmVyeSBub2RlLiBUbyBkbyB0aGlzIGNhbGwgdXBkYXRlTm9kZUNvb3JkaW5hdGVzLiBIb3dldmVyLCB1cGRhdGVOb2RlQW5nbGVzIG9uIHRoZSBvdGhlclxuICogaGFuZCBpcyBub3QgbmVlZGVkIChyZWR1bmRhbnQpIGZvciB0aGlzIGZ1bmN0aW9uLlxuICovXG5BVlNERkxheW91dC5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKClcbntcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBDaGVjayBpZiBncmFwaCBjb250YWlucyBhbnkgY29tcG91bmQgc3RydWN0dXJlc1xuICAgIGlmIChzZWxmLmdyYXBoTWFuYWdlci5nZXRHcmFwaHMoKS5sZW5ndGggPiAxKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBjbHVzdGVyR3JhcGggPSB0aGlzLmF2c2RmQ2lyY2xlOyAvLyBGaXhlZCByZWZlcmVuY2UsIGJ1dCBub3cgaXQgaXMgYSBiaXQgcmVkdW5kYW50XG5cbiAgICBjbHVzdGVyR3JhcGguc2V0Tm9kZVNlcGFyYXRpb24odGhpcy5ub2RlU2VwYXJhdGlvbik7XG4gICAgY2x1c3RlckdyYXBoLmNhbGN1bGF0ZVJhZGl1cygpO1xuICAgIGNsdXN0ZXJHcmFwaC5pbml0T3JkZXJpbmcoKTtcblxuICAgIHdoaWxlICghY2x1c3RlckdyYXBoLmhhc0ZpbmlzaGVkT3JkZXJpbmcoKSlcbiAgICB7XG4gICAgICAgIGxldCBub2RlID0gY2x1c3RlckdyYXBoLmZpbmROb2RlVG9QbGFjZSgpO1xuICAgICAgICBjbHVzdGVyR3JhcGgucHV0SW5PcmRlcihub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyB0aGUgYW5nbGUgKGluIHJhZGlhbnMpIHByb3BlcnR5IG9mIEFWU0RGTm9kZSBlbGVtZW50cyBpbiB0aGUgY2lyY2xlXG5BVlNERkxheW91dC5wcm90b3R5cGUudXBkYXRlTm9kZUFuZ2xlcyA9IGZ1bmN0aW9uICgpe1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5jb3JyZWN0QW5nbGVzKCk7IC8vQVZTREZDaXJjbGUgb2JqZWN0XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHRyYXZlcnNlcyB0aGUgdmVydGljZXMgb2YgdGhlIGdyYXBoIGFuZCBzZXRzIHRoZWlyIGNvcnJlY3QgY29vcmRpbmF0ZXMgd2l0aCByZXNwZWN0IHRvIHRoZSBvd25lciBjaXJjbGUuXG5BVlNERkxheW91dC5wcm90b3R5cGUudXBkYXRlTm9kZUNvb3JkaW5hdGVzID0gZnVuY3Rpb24gKCl7XG4gICAgbGV0IGNsdXN0ZXJHcmFwaCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKTtcblxuICAgIGNsdXN0ZXJHcmFwaC5nZXROb2RlcygpLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBub2RlLnNldENlbnRlcihjbHVzdGVyR3JhcGguZ2V0Q2VudGVyWCgpICsgY2x1c3RlckdyYXBoLmdldFJhZGl1cygpICogTWF0aC5jb3Mobm9kZS5nZXRBbmdsZSgpKSwgY2x1c3RlckdyYXBoLmdldENlbnRlclkoKSArXG4gICAgICAgICAgICBjbHVzdGVyR3JhcGguZ2V0UmFkaXVzKCkgKiBNYXRoLnNpbihub2RlLmdldEFuZ2xlKCkpKTtcbiAgICB9KTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBQb3N0IFByb2Nlc3Npbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogVGhpcyBtZXRob2QgaW1wbGVtZW50cyB0aGUgcG9zdCBwcm9jZXNzaW5nIHN0ZXAgb2YgdGhlIGFsZ29yaXRobSwgd2hpY2hcbiAqIHRyaWVzIHRvIG1pbmltaXplIHRoZSBudW1iZXIgb2YgZWRnZXMgZnVydGhlciB3aXRoIHJlc3BlY3QgdG8gdGhlIGxvY2FsXG4gKiBhZGp1c3RpbmcgYWxnb3JpdGhtIGRlc2NyaWJlZCBieSBIZSBhbmQgU3lrb3JhLlxuICovXG5BVlNERkxheW91dC5wcm90b3R5cGUuaW5pdFBvc3RQcm9jZXNzID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmF2c2RmQ2lyY2xlLmNhbGN1bGF0ZUVkZ2VDcm9zc2luZ3NPZk5vZGVzKCk7XG5cbiAgICBsZXQgbGlzdCA9IHRoaXMuYXZzZGZDaXJjbGUuZ2V0Tm9kZXMoKTtcblxuICAgIGxpc3Quc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICByZXR1cm4gYi5nZXRUb3RhbENyb3NzaW5nT2ZFZGdlcygpIC0gYS5nZXRUb3RhbENyb3NzaW5nT2ZFZGdlcygpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpc3Q7XG59O1xuXG5BVlNERkxheW91dC5wcm90b3R5cGUub25lU3RlcFBvc3RQcm9jZXNzID0gZnVuY3Rpb24gKG5vZGUpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IGN1cnJlbnRDcm9zc2luZ051bWJlciA9IG5vZGUuZ2V0VG90YWxDcm9zc2luZ09mRWRnZXMoKTtcbiAgICBsZXQgbmV3Q3Jvc3NpbmdOdW1iZXI7XG5cbiAgICBsZXQgbmVpZ2hib3VycyA9IFtdO1xuICAgIG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpLmFkZEFsbFRvKG5laWdoYm91cnMpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZWlnaGJvdXJzLmxlbmd0aDsgaisrKVxuICAgIHtcbiAgICAgICAgbGV0IG5laWdoYm91ciA9IG5laWdoYm91cnNbal07XG5cbiAgICAgICAgbGV0IG9sZEluZGV4ID0gbm9kZS5nZXRJbmRleCgpO1xuICAgICAgICBsZXQgbmV3SW5kZXggPSAobmVpZ2hib3VyLmdldEluZGV4KCkgKyAxKSAlIHNlbGYuYXZzZGZDaXJjbGUuZ2V0U2l6ZSgpO1xuXG4gICAgICAgIGlmIChvbGRJbmRleCAhPT0gbmV3SW5kZXgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5vZGUuc2V0SW5kZXgobmV3SW5kZXgpO1xuXG4gICAgICAgICAgICBpZiAob2xkSW5kZXggPCBub2RlLmdldEluZGV4KCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2xkSW5kZXggKz0gc2VsZi5hdnNkZkNpcmNsZS5nZXRTaXplKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpbmRleCA9IG5vZGUuZ2V0SW5kZXgoKTtcblxuICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgb2xkSW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBzZWxmLmF2c2RmQ2lyY2xlLmdldE9yZGVyKClbaW5kZXggJSBzZWxmLmF2c2RmQ2lyY2xlLmdldFNpemUoKV07XG4gICAgICAgICAgICAgICAgdGVtcC5zZXRJbmRleCgodGVtcC5nZXRJbmRleCgpICsgMSkgJSBzZWxmLmF2c2RmQ2lyY2xlLmdldFNpemUoKSk7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZS5jYWxjdWxhdGVUb3RhbENyb3NzaW5nKCk7XG4gICAgICAgICAgICBuZXdDcm9zc2luZ051bWJlciA9IG5vZGUuZ2V0VG90YWxDcm9zc2luZ09mRWRnZXMoKTtcblxuICAgICAgICAgICAgaWYgKG5ld0Nyb3NzaW5nTnVtYmVyID49IGN1cnJlbnRDcm9zc2luZ051bWJlcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxmLmF2c2RmQ2lyY2xlLmxvYWRPbGRJbmRpY2VzT2ZOb2RlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGYuYXZzZGZDaXJjbGUucmVPcmRlclZlcnRpY2VzKCk7XG4gICAgICAgICAgICAgICAgY3VycmVudENyb3NzaW5nTnVtYmVyID0gbmV3Q3Jvc3NpbmdOdW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFWU0RGTGF5b3V0OyIsIi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGRhdGEgYW5kIGZ1bmN0aW9uYWxpdHkgcmVxdWlyZWQgZm9yIEFWU0RGIGxheW91dCBwZXJcbiAqIG5vZGUuXG4gKlxuICpcbiAqIENvcHlyaWdodDogaS1WaXMgUmVzZWFyY2ggR3JvdXAsIEJpbGtlbnQgVW5pdmVyc2l0eSwgMjAwNyAtIHByZXNlbnRcbiAqL1xuXG5sZXQgTE5vZGUgPSByZXF1aXJlKCdsYXlvdXQtYmFzZScpLkxOb2RlO1xubGV0IFF1aWNrc29ydCA9IHJlcXVpcmUoJ2xheW91dC1iYXNlJykuUXVpY2tzb3J0O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogSW5pdGlhbGl6YXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBBVlNERk5vZGUoZ20sIHZOb2RlLCBsb2MsIHNpemUpXG57XG4gICAgLy8gQ29uc3RydWN0b3IgMTogQVZTREZOb2RlKGdtLCB2Tm9kZSwgbG9jLCBzaXplKVxuICAgIGlmKGxvYyAhPT0gdW5kZWZpbmVkICYmIHNpemUgIT09IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICAgIExOb2RlLmNhbGwodGhpcywgZ20sIHZOb2RlLCBsb2MsIHNpemUpO1xuICAgIH1cbiAgICAvLyBDb25zdHJ1Y3RvciAyOiBBVlNERk5vZGUoZ20sIHZOb2RlKVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIExOb2RlLmNhbGwodGhpcywgZ20sIHZOb2RlKTtcbiAgICB9XG5cblx0Ly8gQW5nbGUgb2YgdGhpcyBub2RlIG9uIHRoZSBvd25lciBjaXJjbGUgaW4gcmFkaWFuc1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuXG4gICAgLy8gSW5kZXggb2YgdGhpcyBub2RlIG9uIHRoZSBvd25lciBjaXJjbGVcbiAgICB0aGlzLmNpcmNsZUluZGV4ID0gLTE7XG5cbiAgICAvLyBUb3RhbCBudW1iZXIgb2YgY3Jvc3NpbmdzIG9mIHRoZSBlZGdlcyB0aGlzIG5vZGUgaXMgaW5jaWRlbnQgdG9cbiAgICB0aGlzLnRvdGFsQ3Jvc3NpbmdPZkVkZ2VzID0gLTE7XG5cbiAgICAvLyBXaGV0aGVyIHRoZSBjdXJyZW50IGVkZ2UgY3Jvc3NpbmcgbnVtYmVyIGlzIHZhbGlkIG9yIGl0IG5lZWRzIHRvIGJlXG4gICAgLy8gcmVjYWxjdWxhdGVkXG4gICAgdGhpcy5pc0Nyb3NzaW5nTnVtYmVyVmFsaWQgPSBmYWxzZTtcblxufVxuXG5BVlNERk5vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMTm9kZS5wcm90b3R5cGUpO1xuZm9yIChsZXQgcHJvcGVydGllcyBpbiBMTm9kZSlcbntcbiAgICBBVlNERk5vZGVbcHJvcGVydGllc10gPSBMTm9kZVtwcm9wZXJ0aWVzXTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEFjY2Vzc29yIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBjaXJjbGUgdGhpcyBub2RlIGlzIG93bmVkIGJ5LlxuQVZTREZOb2RlLnByb3RvdHlwZS5nZXRDaXJjbGUgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMuZ2V0T3duZXIoKTtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gc2V0cyB0aGUgaW5kZXggb2YgdGhpcyBub2RlIG9uIHRoZSBjaXJjbGUsIGFuZCBzZXRzIHRoZVxuLy8gY3Jvc3NpbmcgbnVtYmVyIGludmFsaWQuIER1ZSB0byB0aGUgaW5kZXggY2hhbmdlIG9mIHRoZSBub2RlOyBpdCBuZWVkcyB0b1xuLy8gYmUgcmVjYWxjdWxhdGVkLlxuQVZTREZOb2RlLnByb3RvdHlwZS5zZXRJbmRleCA9IGZ1bmN0aW9uKGluZGV4KVxue1xuICAgIHRoaXMuY2lyY2xlSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmlzQ3Jvc3NpbmdOdW1iZXJWYWxpZCA9IGZhbHNlO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGlzIG5vZGUgaW4gdGhlIG9yZGVyaW5nIG9mIGl0cyBvd25lclxuLy8gY2lyY2xlLiBIZXJlIC0xIG1lYW5zIHRoYXQgdGhlIHZlcnRleCBpcyBub3QgeWV0IHBsYWNlZCBvbiBpdHMgb3duZXJcbi8vY2lyY2xlLlxuQVZTREZOb2RlLnByb3RvdHlwZS5nZXRJbmRleCA9IGZ1bmN0aW9uKClcbntcbiAgICByZXR1cm4gdGhpcy5jaXJjbGVJbmRleDtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgYXJyYXkgb2YgdGhlIG5laWdib3JzIG9mIHRoaXMgbm9kZSBzb3J0ZWQgaW5cbi8vIGFzY2VuZGluZyBvcmRlci5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0TmVpZ2hib3JzU29ydGVkQnlEZWdyZWUgPSBmdW5jdGlvbigpXG57XG4gICAgbGV0ICBzZWxmID0gdGhpcztcblxuICAgIGxldCBuZWlnaGJvcnNMaXN0ID0gW107XG4gICAgc2VsZi5nZXROZWlnaGJvcnNMaXN0KCkuYWRkQWxsVG8obmVpZ2hib3JzTGlzdCk7XG4gICAgbGV0IHJlc3VsdCA9IG5laWdoYm9yc0xpc3QuZmlsdGVyKCBub2RlID0+ICggbm9kZS5nZXRJbmRleCgpID09PSAtMSApICk7XG5cbiAgICByZXN1bHQuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICByZXR1cm4gYS5nZXREZWdyZWUoKSAtIGIuZ2V0RGVncmVlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBkZWdyZWUgb2YgdGhpcyBub2RlLlxuQVZTREZOb2RlLnByb3RvdHlwZS5nZXREZWdyZWUgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMuZ2V0RWRnZXMoKS5sZW5ndGg7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgd2hldGhlciBvciBub3QgdGhpcyBub2RlIGlzIGN1cnJlbnRseSBwbGFjZWQgb24gaXRzXG4vLyBvd25lciBjaXJjbGUuXG5BVlNERk5vZGUucHJvdG90eXBlLmlzT3JkZXJlZCA9ICBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuICh0aGlzLmdldEluZGV4KCkgPiAtMSk7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIGFuZ2xlIG9mIHRoaXMgbm9kZSB3LnIudC4gaXRzIG93bmVyIGNpcmNsZS4gSGVyZVxuLy8gdGhlIGFuZ2xlIHZhbHVlIGlzIGluIHJhZGlhbi5cbkFWU0RGTm9kZS5wcm90b3R5cGUuc2V0QW5nbGUgPSBmdW5jdGlvbihhbmdsZSlcbntcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGFuZ2xlIG9mIHRoaXMgbm9kZSB3LnIudC4gaXRzIG93bmVyIGNpcmNsZS4gSGVyZVxuLy8gdGhlIGFuZ2xlIHZhbHVlIGlzIGluIHJhZGlhbi5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0QW5nbGUgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMuYW5nbGU7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGluZGV4IGRpZmZlcmVuY2Ugb2YgdGhpcyBub2RlIHdpdGggdGhlIGlucHV0XG4vLyBub2RlLiBOb3RlIHRoYXQgdGhlIGluZGV4IGRpZmZlcmVuY2UgY2Fubm90IGJlIG5lZ2F0aXZlIGlmIGJvdGggbm9kZXMgYXJlXG4vLyBwbGFjZWQgb24gdGhlIGNpcmNsZS4gSGVyZSAtMSBtZWFucyBhdCBsZWFzdCBvbmUgb2YgdGhlIG5vZGVzIGFyZSBub3QgeWV0XG4vLyBwbGFjZWQgb24gdGhlIGNpcmNsZS5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0Q2lyY0Rpc3RXaXRoVGhlTm9kZSA9ICBmdW5jdGlvbihyZWZOb2RlKVxue1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgb3RoZXJJbmRleCA9IHJlZk5vZGUuZ2V0SW5kZXgoKTtcbiAgICBcbiAgICBpZihvdGhlckluZGV4ID09PSAtMSB8fCBzZWxmLmdldEluZGV4KCkgPT09IC0xKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGxldCBkaWZmID0gc2VsZi5nZXRJbmRleCgpIC0gb3RoZXJJbmRleDtcblxuICAgIGlmKGRpZmYgPCAwKVxuICAgIHtcbiAgICAgICAgZGlmZiArPSBzZWxmLmdldENpcmNsZSgpLmdldFNpemUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlmZjtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gZmluZHMgdGhlIG51bWJlciBvZiBlZGdlIGNyb3NzaW5ncyBiZXR3ZWVuIHRoZSBlZGdlcyBvZlxuLy8gdGhpcyBub2RlIGFuZCB0aGUgZWRnZXMgb2YgdGhlIGlucHV0IG9uZS5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0Q3Jvc3NpbmdOdW1iZXJXaXRoTm9kZSA9ICBmdW5jdGlvbihvdGhlck5vZGUpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCB0b3RhbENyb3NzaW5nID0gMDtcblxuICAgIHNlbGYuZ2V0RWRnZXMoKS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbihlZGdlKVxuICAgICAgICB7XG4gICAgICAgICAgICBvdGhlck5vZGUuZ2V0RWRnZXMoKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKG90aGVyRWRnZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ3Jvc3NpbmcgKz0gZWRnZS5jcm9zc2luZ1dpdGhFZGdlKG90aGVyRWRnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gdG90YWxDcm9zc2luZztcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIGVkZ2UgY3Jvc3NpbmdzLiBJZiB0aGUgcHJldmlvdXNseVxuLy8gY2FsY3VsYXRlZCB2YWx1ZSBpcyBub3QgdmFsaWQgZHVlIHRvIGFuIGluZGV4IGNoYW5nZSBvbiB0aGUgY2lyY2xlLCB0aGVuXG4vLyBhIHJlY2FsY3VsYXRpb24gaXMgcGVyZm9ybWVkLlxuQVZTREZOb2RlLnByb3RvdHlwZS5nZXRUb3RhbENyb3NzaW5nT2ZFZGdlcyA9IGZ1bmN0aW9uKClcbntcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgaWYoIXNlbGYuaXNDcm9zc2luZ051bWJlclZhbGlkKVxuICAgIHtcbiAgICAgICAgc2VsZi5jYWxjdWxhdGVUb3RhbENyb3NzaW5nKCk7XG4gICAgICAgIHNlbGYuaXNDcm9zc2luZ051bWJlclZhbGlkID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIHJldHVybiBzZWxmLnRvdGFsQ3Jvc3NpbmdPZkVkZ2VzO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogUmVtYWluaW5nIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhpcyBmdW5jdGlvbiBjYWxjdWxhdGVzIHRoZSB0b3RhbCBudW1iZXIgb2YgY3Jvc3NpbmdzIHRoZSBlZGdlcyBvZiB0aGlzXG4vLyBub2RlIGNhdXNlLlxuQVZTREZOb2RlLnByb3RvdHlwZS5jYWxjdWxhdGVUb3RhbENyb3NzaW5nID0gZnVuY3Rpb24oKVxue1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgdGVtcF9jcm9zc2luZ19jb3VudCA9IDA7XG4gICAgbGV0IHRlbXBfZWRnZV9saXN0ID0gW107XG4gICAgdGVtcF9lZGdlX2xpc3QucHVzaC5hcHBseSh0ZW1wX2VkZ2VfbGlzdCwgc2VsZi5nZXRDaXJjbGUoKS5nZXRFZGdlcygpKTtcbiAgICB0ZW1wX2VkZ2VfbGlzdCA9IHRlbXBfZWRnZV9saXN0LmZpbHRlciggKGVsZSkgPT4gc2VsZi5nZXRFZGdlcygpLmluZGV4T2YoZWxlKSA8IDApO1xuXG4gICAgc2VsZi5nZXRFZGdlcygpLmZvckVhY2goXG4gICAgICAgIChlZGdlKSA9PiB0ZW1wX2Nyb3NzaW5nX2NvdW50ICs9IGVkZ2UuY2FsY3VsYXRlVG90YWxDcm9zc2luZ1dpdGhMaXN0KHRlbXBfZWRnZV9saXN0KVxuICAgICk7XG5cbiAgICBzZWxmLnRvdGFsQ3Jvc3NpbmdPZkVkZ2VzID0gdGVtcF9jcm9zc2luZ19jb3VudDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQVZTREZOb2RlOyJdLCJzb3VyY2VSb290IjoiIn0=