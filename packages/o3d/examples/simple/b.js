(function () {
	'use strict';

	/**
	 * @author alteredq / http://alteredqualia.com/
	 * @author mrdoob / http://mrdoob.com/
	 */

	var _Math = {

		DEG2RAD: Math.PI / 180,
		RAD2DEG: 180 / Math.PI,

		generateUUID: function () {

			// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136

			var lut = [];

			for (var i = 0; i < 256; i++) {

				lut[i] = (i < 16 ? '0' : '') + i.toString(16);
			}

			return function generateUUID() {

				var d0 = Math.random() * 0xffffffff | 0;
				var d1 = Math.random() * 0xffffffff | 0;
				var d2 = Math.random() * 0xffffffff | 0;
				var d3 = Math.random() * 0xffffffff | 0;
				var uuid = lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];

				// .toUpperCase() here flattens concatenated strings to save heap memory space.
				return uuid.toUpperCase();
			};
		}(),

		clamp: function clamp(value, min, max) {

			return Math.max(min, Math.min(max, value));
		},

		// compute euclidian modulo of m % n
		// https://en.wikipedia.org/wiki/Modulo_operation

		euclideanModulo: function euclideanModulo(n, m) {

			return (n % m + m) % m;
		},

		// Linear mapping from range <a1, a2> to range <b1, b2>

		mapLinear: function mapLinear(x, a1, a2, b1, b2) {

			return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
		},

		// https://en.wikipedia.org/wiki/Linear_interpolation

		lerp: function lerp(x, y, t) {

			return (1 - t) * x + t * y;
		},

		// http://en.wikipedia.org/wiki/Smoothstep

		smoothstep: function smoothstep(x, min, max) {

			if (x <= min) return 0;
			if (x >= max) return 1;

			x = (x - min) / (max - min);

			return x * x * (3 - 2 * x);
		},

		smootherstep: function smootherstep(x, min, max) {

			if (x <= min) return 0;
			if (x >= max) return 1;

			x = (x - min) / (max - min);

			return x * x * x * (x * (x * 6 - 15) + 10);
		},

		// Random integer from <low, high> interval

		randInt: function randInt(low, high) {

			return low + Math.floor(Math.random() * (high - low + 1));
		},

		// Random float from <low, high> interval

		randFloat: function randFloat(low, high) {

			return low + Math.random() * (high - low);
		},

		// Random float from <-range/2, range/2> interval

		randFloatSpread: function randFloatSpread(range) {

			return range * (0.5 - Math.random());
		},

		degToRad: function degToRad(degrees) {

			return degrees * _Math.DEG2RAD;
		},

		radToDeg: function radToDeg(radians) {

			return radians * _Math.RAD2DEG;
		},

		isPowerOfTwo: function isPowerOfTwo(value) {

			return (value & value - 1) === 0 && value !== 0;
		},

		ceilPowerOfTwo: function ceilPowerOfTwo(value) {

			return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
		},

		floorPowerOfTwo: function floorPowerOfTwo(value) {

			return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
		}

	};

	/**
	 * @author mikael emtinger / http://gomo.se/
	 * @author alteredq / http://alteredqualia.com/
	 * @author WestLangley / http://github.com/WestLangley
	 * @author bhouston / http://clara.io
	 */

	function Quaternion(x, y, z, w) {

		this._x = x || 0;
		this._y = y || 0;
		this._z = z || 0;
		this._w = w !== undefined ? w : 1;
	}

	Object.assign(Quaternion, {

		slerp: function slerp(qa, qb, qm, t) {

			return qm.copy(qa).slerp(qb, t);
		},

		slerpFlat: function slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {

			// fuzz-free, array-based Quaternion SLERP operation

			var x0 = src0[srcOffset0 + 0],
			    y0 = src0[srcOffset0 + 1],
			    z0 = src0[srcOffset0 + 2],
			    w0 = src0[srcOffset0 + 3],
			    x1 = src1[srcOffset1 + 0],
			    y1 = src1[srcOffset1 + 1],
			    z1 = src1[srcOffset1 + 2],
			    w1 = src1[srcOffset1 + 3];

			if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {

				var s = 1 - t,
				    cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
				    dir = cos >= 0 ? 1 : -1,
				    sqrSin = 1 - cos * cos;

				// Skip the Slerp for tiny steps to avoid numeric problems:
				if (sqrSin > Number.EPSILON) {

					var sin = Math.sqrt(sqrSin),
					    len = Math.atan2(sin, cos * dir);

					s = Math.sin(s * len) / sin;
					t = Math.sin(t * len) / sin;
				}

				var tDir = t * dir;

				x0 = x0 * s + x1 * tDir;
				y0 = y0 * s + y1 * tDir;
				z0 = z0 * s + z1 * tDir;
				w0 = w0 * s + w1 * tDir;

				// Normalize in case we just did a lerp:
				if (s === 1 - t) {

					var f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);

					x0 *= f;
					y0 *= f;
					z0 *= f;
					w0 *= f;
				}
			}

			dst[dstOffset] = x0;
			dst[dstOffset + 1] = y0;
			dst[dstOffset + 2] = z0;
			dst[dstOffset + 3] = w0;
		}

	});

	Object.defineProperties(Quaternion.prototype, {

		x: {

			get: function get() {

				return this._x;
			},

			set: function set(value) {

				this._x = value;
				this.onChangeCallback();
			}

		},

		y: {

			get: function get() {

				return this._y;
			},

			set: function set(value) {

				this._y = value;
				this.onChangeCallback();
			}

		},

		z: {

			get: function get() {

				return this._z;
			},

			set: function set(value) {

				this._z = value;
				this.onChangeCallback();
			}

		},

		w: {

			get: function get() {

				return this._w;
			},

			set: function set(value) {

				this._w = value;
				this.onChangeCallback();
			}

		}

	});

	Object.assign(Quaternion.prototype, {

		isQuaternion: true,

		set: function set(x, y, z, w) {

			this._x = x;
			this._y = y;
			this._z = z;
			this._w = w;

			this.onChangeCallback();

			return this;
		},

		clone: function clone() {

			return new this.constructor(this._x, this._y, this._z, this._w);
		},

		copy: function copy(quaternion) {

			this._x = quaternion.x;
			this._y = quaternion.y;
			this._z = quaternion.z;
			this._w = quaternion.w;

			this.onChangeCallback();

			return this;
		},

		setFromEuler: function setFromEuler(euler, update) {

			if (!(euler && euler.isEuler)) {

				throw new Error('THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.');
			}

			var x = euler._x,
			    y = euler._y,
			    z = euler._z,
			    order = euler.order;

			// http://www.mathworks.com/matlabcentral/fileexchange/
			// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
			//	content/SpinCalc.m

			var cos = Math.cos;
			var sin = Math.sin;

			var c1 = cos(x / 2);
			var c2 = cos(y / 2);
			var c3 = cos(z / 2);

			var s1 = sin(x / 2);
			var s2 = sin(y / 2);
			var s3 = sin(z / 2);

			if (order === 'XYZ') {

				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
			} else if (order === 'YXZ') {

				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
			} else if (order === 'ZXY') {

				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
			} else if (order === 'ZYX') {

				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
			} else if (order === 'YZX') {

				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
			} else if (order === 'XZY') {

				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
			}

			if (update !== false) this.onChangeCallback();

			return this;
		},

		setFromAxisAngle: function setFromAxisAngle(axis, angle) {

			// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

			// assumes axis is normalized

			var halfAngle = angle / 2,
			    s = Math.sin(halfAngle);

			this._x = axis.x * s;
			this._y = axis.y * s;
			this._z = axis.z * s;
			this._w = Math.cos(halfAngle);

			this.onChangeCallback();

			return this;
		},

		setFromRotationMatrix: function setFromRotationMatrix(m) {

			// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

			// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

			var te = m.elements,
			    m11 = te[0],
			    m12 = te[4],
			    m13 = te[8],
			    m21 = te[1],
			    m22 = te[5],
			    m23 = te[9],
			    m31 = te[2],
			    m32 = te[6],
			    m33 = te[10],
			    trace = m11 + m22 + m33,
			    s;

			if (trace > 0) {

				s = 0.5 / Math.sqrt(trace + 1.0);

				this._w = 0.25 / s;
				this._x = (m32 - m23) * s;
				this._y = (m13 - m31) * s;
				this._z = (m21 - m12) * s;
			} else if (m11 > m22 && m11 > m33) {

				s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);

				this._w = (m32 - m23) / s;
				this._x = 0.25 * s;
				this._y = (m12 + m21) / s;
				this._z = (m13 + m31) / s;
			} else if (m22 > m33) {

				s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);

				this._w = (m13 - m31) / s;
				this._x = (m12 + m21) / s;
				this._y = 0.25 * s;
				this._z = (m23 + m32) / s;
			} else {

				s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);

				this._w = (m21 - m12) / s;
				this._x = (m13 + m31) / s;
				this._y = (m23 + m32) / s;
				this._z = 0.25 * s;
			}

			this.onChangeCallback();

			return this;
		},

		setFromUnitVectors: function setFromUnitVectors(vFrom, vTo) {

			// assumes direction vectors vFrom and vTo are normalized

			var EPS = 0.000001;

			var r = vFrom.dot(vTo) + 1;

			if (r < EPS) {

				r = 0;

				if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {

					this._x = -vFrom.y;
					this._y = vFrom.x;
					this._z = 0;
					this._w = r;
				} else {

					this._x = 0;
					this._y = -vFrom.z;
					this._z = vFrom.y;
					this._w = r;
				}
			} else {

				// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

				this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
				this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
				this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
				this._w = r;
			}

			return this.normalize();
		},

		angleTo: function angleTo(q) {

			return 2 * Math.acos(Math.abs(_Math.clamp(this.dot(q), -1, 1)));
		},

		rotateTowards: function rotateTowards(q, step) {

			var angle = this.angleTo(q);

			if (angle === 0) return this;

			var t = Math.min(1, step / angle);

			this.slerp(q, t);

			return this;
		},

		inverse: function inverse() {

			// quaternion is assumed to have unit length

			return this.conjugate();
		},

		conjugate: function conjugate() {

			this._x *= -1;
			this._y *= -1;
			this._z *= -1;

			this.onChangeCallback();

			return this;
		},

		dot: function dot(v) {

			return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
		},

		lengthSq: function lengthSq() {

			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
		},

		length: function length() {

			return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
		},

		normalize: function normalize() {

			var l = this.length();

			if (l === 0) {

				this._x = 0;
				this._y = 0;
				this._z = 0;
				this._w = 1;
			} else {

				l = 1 / l;

				this._x = this._x * l;
				this._y = this._y * l;
				this._z = this._z * l;
				this._w = this._w * l;
			}

			this.onChangeCallback();

			return this;
		},

		multiply: function multiply(q, p) {

			if (p !== undefined) {

				console.warn('THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.');
				return this.multiplyQuaternions(q, p);
			}

			return this.multiplyQuaternions(this, q);
		},

		premultiply: function premultiply(q) {

			return this.multiplyQuaternions(q, this);
		},

		multiplyQuaternions: function multiplyQuaternions(a, b) {

			// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

			var qax = a._x,
			    qay = a._y,
			    qaz = a._z,
			    qaw = a._w;
			var qbx = b._x,
			    qby = b._y,
			    qbz = b._z,
			    qbw = b._w;

			this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
			this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
			this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
			this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

			this.onChangeCallback();

			return this;
		},

		slerp: function slerp(qb, t) {

			if (t === 0) return this;
			if (t === 1) return this.copy(qb);

			var x = this._x,
			    y = this._y,
			    z = this._z,
			    w = this._w;

			// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

			var cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

			if (cosHalfTheta < 0) {

				this._w = -qb._w;
				this._x = -qb._x;
				this._y = -qb._y;
				this._z = -qb._z;

				cosHalfTheta = -cosHalfTheta;
			} else {

				this.copy(qb);
			}

			if (cosHalfTheta >= 1.0) {

				this._w = w;
				this._x = x;
				this._y = y;
				this._z = z;

				return this;
			}

			var sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

			if (sqrSinHalfTheta <= Number.EPSILON) {

				var s = 1 - t;
				this._w = s * w + t * this._w;
				this._x = s * x + t * this._x;
				this._y = s * y + t * this._y;
				this._z = s * z + t * this._z;

				return this.normalize();
			}

			var sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
			var halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
			var ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta,
			    ratioB = Math.sin(t * halfTheta) / sinHalfTheta;

			this._w = w * ratioA + this._w * ratioB;
			this._x = x * ratioA + this._x * ratioB;
			this._y = y * ratioA + this._y * ratioB;
			this._z = z * ratioA + this._z * ratioB;

			this.onChangeCallback();

			return this;
		},

		equals: function equals(quaternion) {

			return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
		},

		fromArray: function fromArray(array, offset) {

			if (offset === undefined) offset = 0;

			this._x = array[offset];
			this._y = array[offset + 1];
			this._z = array[offset + 2];
			this._w = array[offset + 3];

			this.onChangeCallback();

			return this;
		},

		toArray: function toArray(array, offset) {

			if (array === undefined) array = [];
			if (offset === undefined) offset = 0;

			array[offset] = this._x;
			array[offset + 1] = this._y;
			array[offset + 2] = this._z;
			array[offset + 3] = this._w;

			return array;
		},

		onChange: function onChange(callback) {

			this.onChangeCallback = callback;

			return this;
		},

		onChangeCallback: function onChangeCallback() {}

	});

	/**
	 * @author mrdoob / http://mrdoob.com/
	 * @author kile / http://kile.stravaganza.org/
	 * @author philogb / http://blog.thejit.org/
	 * @author mikael emtinger / http://gomo.se/
	 * @author egraether / http://egraether.com/
	 * @author WestLangley / http://github.com/WestLangley
	 */

	function Vector3(x, y, z) {

		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
	}

	Object.assign(Vector3.prototype, {

		isVector3: true,

		set: function set(x, y, z) {

			this.x = x;
			this.y = y;
			this.z = z;

			return this;
		},

		setScalar: function setScalar(scalar) {

			this.x = scalar;
			this.y = scalar;
			this.z = scalar;

			return this;
		},

		setX: function setX(x) {

			this.x = x;

			return this;
		},

		setY: function setY(y) {

			this.y = y;

			return this;
		},

		setZ: function setZ(z) {

			this.z = z;

			return this;
		},

		setComponent: function setComponent(index, value) {

			switch (index) {

				case 0:
					this.x = value;break;
				case 1:
					this.y = value;break;
				case 2:
					this.z = value;break;
				default:
					throw new Error('index is out of range: ' + index);

			}

			return this;
		},

		getComponent: function getComponent(index) {

			switch (index) {

				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				default:
					throw new Error('index is out of range: ' + index);

			}
		},

		clone: function clone() {

			return new this.constructor(this.x, this.y, this.z);
		},

		copy: function copy(v) {

			this.x = v.x;
			this.y = v.y;
			this.z = v.z;

			return this;
		},

		add: function add(v, w) {

			if (w !== undefined) {

				console.warn('THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.');
				return this.addVectors(v, w);
			}

			this.x += v.x;
			this.y += v.y;
			this.z += v.z;

			return this;
		},

		addScalar: function addScalar(s) {

			this.x += s;
			this.y += s;
			this.z += s;

			return this;
		},

		addVectors: function addVectors(a, b) {

			this.x = a.x + b.x;
			this.y = a.y + b.y;
			this.z = a.z + b.z;

			return this;
		},

		addScaledVector: function addScaledVector(v, s) {

			this.x += v.x * s;
			this.y += v.y * s;
			this.z += v.z * s;

			return this;
		},

		sub: function sub(v, w) {

			if (w !== undefined) {

				console.warn('THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.');
				return this.subVectors(v, w);
			}

			this.x -= v.x;
			this.y -= v.y;
			this.z -= v.z;

			return this;
		},

		subScalar: function subScalar(s) {

			this.x -= s;
			this.y -= s;
			this.z -= s;

			return this;
		},

		subVectors: function subVectors(a, b) {

			this.x = a.x - b.x;
			this.y = a.y - b.y;
			this.z = a.z - b.z;

			return this;
		},

		multiply: function multiply(v, w) {

			if (w !== undefined) {

				console.warn('THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.');
				return this.multiplyVectors(v, w);
			}

			this.x *= v.x;
			this.y *= v.y;
			this.z *= v.z;

			return this;
		},

		multiplyScalar: function multiplyScalar(scalar) {

			this.x *= scalar;
			this.y *= scalar;
			this.z *= scalar;

			return this;
		},

		multiplyVectors: function multiplyVectors(a, b) {

			this.x = a.x * b.x;
			this.y = a.y * b.y;
			this.z = a.z * b.z;

			return this;
		},

		applyEuler: function () {

			var quaternion = new Quaternion();

			return function applyEuler(euler) {

				if (!(euler && euler.isEuler)) {

					console.error('THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.');
				}

				return this.applyQuaternion(quaternion.setFromEuler(euler));
			};
		}(),

		applyAxisAngle: function () {

			var quaternion = new Quaternion();

			return function applyAxisAngle(axis, angle) {

				return this.applyQuaternion(quaternion.setFromAxisAngle(axis, angle));
			};
		}(),

		applyMatrix3: function applyMatrix3(m) {

			var x = this.x,
			    y = this.y,
			    z = this.z;
			var e = m.elements;

			this.x = e[0] * x + e[3] * y + e[6] * z;
			this.y = e[1] * x + e[4] * y + e[7] * z;
			this.z = e[2] * x + e[5] * y + e[8] * z;

			return this;
		},

		applyMatrix4: function applyMatrix4(m) {

			var x = this.x,
			    y = this.y,
			    z = this.z;
			var e = m.elements;

			var w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);

			this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
			this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
			this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
			this.w = w;
			return this;
		},

		applyQuaternion: function applyQuaternion(q) {

			var x = this.x,
			    y = this.y,
			    z = this.z;
			var qx = q.x,
			    qy = q.y,
			    qz = q.z,
			    qw = q.w;

			// calculate quat * vector

			var ix = qw * x + qy * z - qz * y;
			var iy = qw * y + qz * x - qx * z;
			var iz = qw * z + qx * y - qy * x;
			var iw = -qx * x - qy * y - qz * z;

			// calculate result * inverse quat

			this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
			this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
			this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

			return this;
		},

		project: function project(camera) {

			return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix);
		},

		unproject: function unproject(camera) {

			return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld);
		},

		transformDirection: function transformDirection(m) {

			// input: THREE.Matrix4 affine matrix
			// vector interpreted as a direction

			var x = this.x,
			    y = this.y,
			    z = this.z;
			var e = m.elements;

			this.x = e[0] * x + e[4] * y + e[8] * z;
			this.y = e[1] * x + e[5] * y + e[9] * z;
			this.z = e[2] * x + e[6] * y + e[10] * z;

			return this.normalize();
		},

		divide: function divide(v) {

			this.x /= v.x;
			this.y /= v.y;
			this.z /= v.z;

			return this;
		},

		divideScalar: function divideScalar(scalar) {

			return this.multiplyScalar(1 / scalar);
		},

		min: function min(v) {

			this.x = Math.min(this.x, v.x);
			this.y = Math.min(this.y, v.y);
			this.z = Math.min(this.z, v.z);

			return this;
		},

		max: function max(v) {

			this.x = Math.max(this.x, v.x);
			this.y = Math.max(this.y, v.y);
			this.z = Math.max(this.z, v.z);

			return this;
		},

		clamp: function clamp(min, max) {

			// assumes min < max, componentwise

			this.x = Math.max(min.x, Math.min(max.x, this.x));
			this.y = Math.max(min.y, Math.min(max.y, this.y));
			this.z = Math.max(min.z, Math.min(max.z, this.z));

			return this;
		},

		clampScalar: function clampScalar(minVal, maxVal) {

			this.x = Math.max(minVal, Math.min(maxVal, this.x));
			this.y = Math.max(minVal, Math.min(maxVal, this.y));
			this.z = Math.max(minVal, Math.min(maxVal, this.z));

			return this;
		},

		clampLength: function clampLength(min, max) {

			var length = this.length();

			return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
		},

		floor: function floor() {

			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);
			this.z = Math.floor(this.z);

			return this;
		},

		ceil: function ceil() {

			this.x = Math.ceil(this.x);
			this.y = Math.ceil(this.y);
			this.z = Math.ceil(this.z);

			return this;
		},

		round: function round() {

			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			this.z = Math.round(this.z);

			return this;
		},

		roundToZero: function roundToZero() {

			this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
			this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
			this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);

			return this;
		},

		negate: function negate() {

			this.x = -this.x;
			this.y = -this.y;
			this.z = -this.z;

			return this;
		},

		dot: function dot(v) {

			return this.x * v.x + this.y * v.y + this.z * v.z;
		},

		// TODO lengthSquared?

		lengthSq: function lengthSq() {

			return this.x * this.x + this.y * this.y + this.z * this.z;
		},

		length: function length() {

			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
		},

		manhattanLength: function manhattanLength() {

			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
		},

		normalize: function normalize() {

			return this.divideScalar(this.length() || 1);
		},

		setLength: function setLength(length) {

			return this.normalize().multiplyScalar(length);
		},

		lerp: function lerp(v, alpha) {

			this.x += (v.x - this.x) * alpha;
			this.y += (v.y - this.y) * alpha;
			this.z += (v.z - this.z) * alpha;

			return this;
		},

		lerpVectors: function lerpVectors(v1, v2, alpha) {

			return this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);
		},

		cross: function cross(v, w) {

			if (w !== undefined) {

				console.warn('THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.');
				return this.crossVectors(v, w);
			}

			return this.crossVectors(this, v);
		},

		crossVectors: function crossVectors(a, b) {

			var ax = a.x,
			    ay = a.y,
			    az = a.z;
			var bx = b.x,
			    by = b.y,
			    bz = b.z;

			this.x = ay * bz - az * by;
			this.y = az * bx - ax * bz;
			this.z = ax * by - ay * bx;

			return this;
		},

		projectOnVector: function projectOnVector(vector) {

			var scalar = vector.dot(this) / vector.lengthSq();

			return this.copy(vector).multiplyScalar(scalar);
		},

		projectOnPlane: function () {

			var v1 = new Vector3();

			return function projectOnPlane(planeNormal) {

				v1.copy(this).projectOnVector(planeNormal);

				return this.sub(v1);
			};
		}(),

		reflect: function () {

			// reflect incident vector off plane orthogonal to normal
			// normal is assumed to have unit length

			var v1 = new Vector3();

			return function reflect(normal) {

				return this.sub(v1.copy(normal).multiplyScalar(2 * this.dot(normal)));
			};
		}(),

		angleTo: function angleTo(v) {

			var theta = this.dot(v) / Math.sqrt(this.lengthSq() * v.lengthSq());

			// clamp, to handle numerical problems

			return Math.acos(_Math.clamp(theta, -1, 1));
		},

		distanceTo: function distanceTo(v) {

			return Math.sqrt(this.distanceToSquared(v));
		},

		distanceToSquared: function distanceToSquared(v) {

			var dx = this.x - v.x,
			    dy = this.y - v.y,
			    dz = this.z - v.z;

			return dx * dx + dy * dy + dz * dz;
		},

		manhattanDistanceTo: function manhattanDistanceTo(v) {

			return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
		},

		setFromSpherical: function setFromSpherical(s) {

			return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
		},

		setFromSphericalCoords: function setFromSphericalCoords(radius, phi, theta) {

			var sinPhiRadius = Math.sin(phi) * radius;

			this.x = sinPhiRadius * Math.sin(theta);
			this.y = Math.cos(phi) * radius;
			this.z = sinPhiRadius * Math.cos(theta);

			return this;
		},

		setFromCylindrical: function setFromCylindrical(c) {

			return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
		},

		setFromCylindricalCoords: function setFromCylindricalCoords(radius, theta, y) {

			this.x = radius * Math.sin(theta);
			this.y = y;
			this.z = radius * Math.cos(theta);

			return this;
		},

		setFromMatrixPosition: function setFromMatrixPosition(m) {

			var e = m.elements;

			this.x = e[12];
			this.y = e[13];
			this.z = e[14];

			return this;
		},

		setFromMatrixScale: function setFromMatrixScale(m) {

			var sx = this.setFromMatrixColumn(m, 0).length();
			var sy = this.setFromMatrixColumn(m, 1).length();
			var sz = this.setFromMatrixColumn(m, 2).length();

			this.x = sx;
			this.y = sy;
			this.z = sz;

			return this;
		},

		setFromMatrixColumn: function setFromMatrixColumn(m, index) {

			return this.fromArray(m.elements, index * 4);
		},

		equals: function equals(v) {

			return v.x === this.x && v.y === this.y && v.z === this.z;
		},

		fromArray: function fromArray(array, offset) {

			if (offset === undefined) offset = 0;

			this.x = array[offset];
			this.y = array[offset + 1];
			this.z = array[offset + 2];

			return this;
		},

		toArray: function toArray(array, offset) {

			if (array === undefined) array = [];
			if (offset === undefined) offset = 0;

			array[offset] = this.x;
			array[offset + 1] = this.y;
			array[offset + 2] = this.z;

			return array;
		},

		fromBufferAttribute: function fromBufferAttribute(attribute, index, offset) {

			if (offset !== undefined) {

				console.warn('THREE.Vector3: offset has been removed from .fromBufferAttribute().');
			}

			this.x = attribute.getX(index);
			this.y = attribute.getY(index);
			this.z = attribute.getZ(index);

			return this;
		}

	});

	/**
	 * @author mrdoob / http://mrdoob.com/
	 * @author supereggbert / http://www.paulbrunt.co.uk/
	 * @author philogb / http://blog.thejit.org/
	 * @author jordi_ros / http://plattsoft.com
	 * @author D1plo1d / http://github.com/D1plo1d
	 * @author alteredq / http://alteredqualia.com/
	 * @author mikael emtinger / http://gomo.se/
	 * @author timknip / http://www.floorplanner.com/
	 * @author bhouston / http://clara.io
	 * @author WestLangley / http://github.com/WestLangley
	 */

	function Matrix4() {

		this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

		if (arguments.length > 0) {

			console.error('THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.');
		}
	}

	Matrix4.getProjection = function (angle, a, zMin, zMax) {
		var ang = Math.tan(angle * .5 * Math.PI / 180); //angle*.5
		return new Matrix4().set(0.5 / ang, 0, 0, 0, 0, 0.5 * a / ang, 0, 0, 0, 0, -(zMax + zMin) / (zMax - zMin), -2 * zMax * zMin / (zMax - zMin), 0, 0, -1, 0);
	};

	Matrix4.lookAt = function (out, eye, center, up) {
		var x0,
		    x1,
		    x2,
		    y0,
		    y1,
		    y2,
		    z0,
		    z1,
		    z2,
		    len,
		    eyex = eye[0],
		    eyey = eye[1],
		    eyez = eye[2],
		    upx = up[0],
		    upy = up[1],
		    upz = up[2],
		    centerx = center[0],
		    centery = center[1],
		    centerz = center[2];

		z0 = eyex - centerx;
		z1 = eyey - centery;
		z2 = eyez - centerz;

		len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
		z0 *= len;
		z1 *= len;
		z2 *= len;

		x0 = upy * z2 - upz * z1;
		x1 = upz * z0 - upx * z2;
		x2 = upx * z1 - upy * z0;
		len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
		if (!len) {
			x0 = 0;
			x1 = 0;
			x2 = 0;
		} else {
			len = 1 / len;
			x0 *= len;
			x1 *= len;
			x2 *= len;
		}

		y0 = z1 * x2 - z2 * x1;
		y1 = z2 * x0 - z0 * x2;
		y2 = z0 * x1 - z1 * x0;

		len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
		if (!len) {
			y0 = 0;
			y1 = 0;
			y2 = 0;
		} else {
			len = 1 / len;
			y0 *= len;
			y1 *= len;
			y2 *= len;
		}

		out[0] = x0;
		out[1] = y0;
		out[2] = z0;
		out[3] = 0;
		out[4] = x1;
		out[5] = y1;
		out[6] = z1;
		out[7] = 0;
		out[8] = x2;
		out[9] = y2;
		out[10] = z2;
		out[11] = 0;
		out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
		out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
		out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
		out[15] = 1;

		// return out;
		return new Matrix4().set(out[0], out[4], out[8], out[12], out[1], out[5], out[9], out[13], out[2], out[6], out[10], out[14], out[3], out[7], out[11], out[15]);
	};

	Object.assign(Matrix4.prototype, {

		isMatrix4: true,

		set: function set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {

			var te = this.elements;

			te[0] = n11;te[4] = n12;te[8] = n13;te[12] = n14;
			te[1] = n21;te[5] = n22;te[9] = n23;te[13] = n24;
			te[2] = n31;te[6] = n32;te[10] = n33;te[14] = n34;
			te[3] = n41;te[7] = n42;te[11] = n43;te[15] = n44;

			return this;
		},

		identity: function identity() {

			this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

			return this;
		},

		clone: function clone() {

			return new Matrix4().fromArray(this.elements);
		},

		copy: function copy(m) {

			var te = this.elements;
			var me = m.elements;

			te[0] = me[0];te[1] = me[1];te[2] = me[2];te[3] = me[3];
			te[4] = me[4];te[5] = me[5];te[6] = me[6];te[7] = me[7];
			te[8] = me[8];te[9] = me[9];te[10] = me[10];te[11] = me[11];
			te[12] = me[12];te[13] = me[13];te[14] = me[14];te[15] = me[15];

			return this;
		},

		copyPosition: function copyPosition(m) {

			var te = this.elements,
			    me = m.elements;

			te[12] = me[12];
			te[13] = me[13];
			te[14] = me[14];

			return this;
		},

		extractBasis: function extractBasis(xAxis, yAxis, zAxis) {

			xAxis.setFromMatrixColumn(this, 0);
			yAxis.setFromMatrixColumn(this, 1);
			zAxis.setFromMatrixColumn(this, 2);

			return this;
		},

		makeBasis: function makeBasis(xAxis, yAxis, zAxis) {

			this.set(xAxis.x, yAxis.x, zAxis.x, 0, xAxis.y, yAxis.y, zAxis.y, 0, xAxis.z, yAxis.z, zAxis.z, 0, 0, 0, 0, 1);

			return this;
		},

		extractRotation: function () {

			var v1 = new Vector3();

			return function extractRotation(m) {

				// this method does not support reflection matrices

				var te = this.elements;
				var me = m.elements;

				var scaleX = 1 / v1.setFromMatrixColumn(m, 0).length();
				var scaleY = 1 / v1.setFromMatrixColumn(m, 1).length();
				var scaleZ = 1 / v1.setFromMatrixColumn(m, 2).length();

				te[0] = me[0] * scaleX;
				te[1] = me[1] * scaleX;
				te[2] = me[2] * scaleX;
				te[3] = 0;

				te[4] = me[4] * scaleY;
				te[5] = me[5] * scaleY;
				te[6] = me[6] * scaleY;
				te[7] = 0;

				te[8] = me[8] * scaleZ;
				te[9] = me[9] * scaleZ;
				te[10] = me[10] * scaleZ;
				te[11] = 0;

				te[12] = 0;
				te[13] = 0;
				te[14] = 0;
				te[15] = 1;

				return this;
			};
		}(),

		makeRotationFromEuler: function makeRotationFromEuler(euler) {

			if (!(euler && euler.isEuler)) {

				console.error('THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.');
			}

			var te = this.elements;

			var x = euler.x,
			    y = euler.y,
			    z = euler.z;
			var a = Math.cos(x),
			    b = Math.sin(x);
			var c = Math.cos(y),
			    d = Math.sin(y);
			var e = Math.cos(z),
			    f = Math.sin(z);

			if (euler.order === 'XYZ') {

				var ae = a * e,
				    af = a * f,
				    be = b * e,
				    bf = b * f;

				te[0] = c * e;
				te[4] = -c * f;
				te[8] = d;

				te[1] = af + be * d;
				te[5] = ae - bf * d;
				te[9] = -b * c;

				te[2] = bf - ae * d;
				te[6] = be + af * d;
				te[10] = a * c;
			} else if (euler.order === 'YXZ') {

				var ce = c * e,
				    cf = c * f,
				    de = d * e,
				    df = d * f;

				te[0] = ce + df * b;
				te[4] = de * b - cf;
				te[8] = a * d;

				te[1] = a * f;
				te[5] = a * e;
				te[9] = -b;

				te[2] = cf * b - de;
				te[6] = df + ce * b;
				te[10] = a * c;
			} else if (euler.order === 'ZXY') {

				var ce = c * e,
				    cf = c * f,
				    de = d * e,
				    df = d * f;

				te[0] = ce - df * b;
				te[4] = -a * f;
				te[8] = de + cf * b;

				te[1] = cf + de * b;
				te[5] = a * e;
				te[9] = df - ce * b;

				te[2] = -a * d;
				te[6] = b;
				te[10] = a * c;
			} else if (euler.order === 'ZYX') {

				var ae = a * e,
				    af = a * f,
				    be = b * e,
				    bf = b * f;

				te[0] = c * e;
				te[4] = be * d - af;
				te[8] = ae * d + bf;

				te[1] = c * f;
				te[5] = bf * d + ae;
				te[9] = af * d - be;

				te[2] = -d;
				te[6] = b * c;
				te[10] = a * c;
			} else if (euler.order === 'YZX') {

				var ac = a * c,
				    ad = a * d,
				    bc = b * c,
				    bd = b * d;

				te[0] = c * e;
				te[4] = bd - ac * f;
				te[8] = bc * f + ad;

				te[1] = f;
				te[5] = a * e;
				te[9] = -b * e;

				te[2] = -d * e;
				te[6] = ad * f + bc;
				te[10] = ac - bd * f;
			} else if (euler.order === 'XZY') {

				var ac = a * c,
				    ad = a * d,
				    bc = b * c,
				    bd = b * d;

				te[0] = c * e;
				te[4] = -f;
				te[8] = d * e;

				te[1] = ac * f + bd;
				te[5] = a * e;
				te[9] = ad * f - bc;

				te[2] = bc * f - ad;
				te[6] = b * e;
				te[10] = bd * f + ac;
			}

			// bottom row
			te[3] = 0;
			te[7] = 0;
			te[11] = 0;

			// last column
			te[12] = 0;
			te[13] = 0;
			te[14] = 0;
			te[15] = 1;

			return this;
		},

		makeRotationFromQuaternion: function () {

			var zero = new Vector3(0, 0, 0);
			var one = new Vector3(1, 1, 1);

			return function makeRotationFromQuaternion(q) {

				return this.compose(zero, q, one);
			};
		}(),

		lookAt: function () {

			var x = new Vector3();
			var y = new Vector3();
			var z = new Vector3();

			return function lookAt(eye, target, up) {

				var te = this.elements;

				z.subVectors(eye, target);

				if (z.lengthSq() === 0) {

					// eye and target are in the same position

					z.z = 1;
				}

				z.normalize();
				x.crossVectors(up, z);

				if (x.lengthSq() === 0) {

					// up and z are parallel

					if (Math.abs(up.z) === 1) {

						z.x += 0.0001;
					} else {

						z.z += 0.0001;
					}

					z.normalize();
					x.crossVectors(up, z);
				}

				x.normalize();
				y.crossVectors(z, x);

				te[0] = x.x;te[4] = y.x;te[8] = z.x;
				te[1] = x.y;te[5] = y.y;te[9] = z.y;
				te[2] = x.z;te[6] = y.z;te[10] = z.z;

				return this;
			};
		}(),

		multiply: function multiply(m, n) {

			if (n !== undefined) {

				console.warn('THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.');
				return this.multiplyMatrices(m, n);
			}

			return this.multiplyMatrices(this, m);
		},

		premultiply: function premultiply(m) {

			return this.multiplyMatrices(m, this);
		},

		multiplyMatrices: function multiplyMatrices(a, b) {

			var ae = a.elements;
			var be = b.elements;
			var te = this.elements;

			var a11 = ae[0],
			    a12 = ae[4],
			    a13 = ae[8],
			    a14 = ae[12];
			var a21 = ae[1],
			    a22 = ae[5],
			    a23 = ae[9],
			    a24 = ae[13];
			var a31 = ae[2],
			    a32 = ae[6],
			    a33 = ae[10],
			    a34 = ae[14];
			var a41 = ae[3],
			    a42 = ae[7],
			    a43 = ae[11],
			    a44 = ae[15];

			var b11 = be[0],
			    b12 = be[4],
			    b13 = be[8],
			    b14 = be[12];
			var b21 = be[1],
			    b22 = be[5],
			    b23 = be[9],
			    b24 = be[13];
			var b31 = be[2],
			    b32 = be[6],
			    b33 = be[10],
			    b34 = be[14];
			var b41 = be[3],
			    b42 = be[7],
			    b43 = be[11],
			    b44 = be[15];

			te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
			te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
			te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
			te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

			te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
			te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
			te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
			te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

			te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
			te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
			te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
			te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

			te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
			te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
			te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
			te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

			return this;
		},

		multiplyScalar: function multiplyScalar(s) {

			var te = this.elements;

			te[0] *= s;te[4] *= s;te[8] *= s;te[12] *= s;
			te[1] *= s;te[5] *= s;te[9] *= s;te[13] *= s;
			te[2] *= s;te[6] *= s;te[10] *= s;te[14] *= s;
			te[3] *= s;te[7] *= s;te[11] *= s;te[15] *= s;

			return this;
		},

		applyToBufferAttribute: function () {

			var v1 = new Vector3();

			return function applyToBufferAttribute(attribute) {

				for (var i = 0, l = attribute.count; i < l; i++) {

					v1.x = attribute.getX(i);
					v1.y = attribute.getY(i);
					v1.z = attribute.getZ(i);

					v1.applyMatrix4(this);

					attribute.setXYZ(i, v1.x, v1.y, v1.z);
				}

				return attribute;
			};
		}(),

		determinant: function determinant() {

			var te = this.elements;

			var n11 = te[0],
			    n12 = te[4],
			    n13 = te[8],
			    n14 = te[12];
			var n21 = te[1],
			    n22 = te[5],
			    n23 = te[9],
			    n24 = te[13];
			var n31 = te[2],
			    n32 = te[6],
			    n33 = te[10],
			    n34 = te[14];
			var n41 = te[3],
			    n42 = te[7],
			    n43 = te[11],
			    n44 = te[15];

			//TODO: make this more efficient
			//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

			return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
		},

		transpose: function transpose() {

			var te = this.elements;
			var tmp;

			tmp = te[1];te[1] = te[4];te[4] = tmp;
			tmp = te[2];te[2] = te[8];te[8] = tmp;
			tmp = te[6];te[6] = te[9];te[9] = tmp;

			tmp = te[3];te[3] = te[12];te[12] = tmp;
			tmp = te[7];te[7] = te[13];te[13] = tmp;
			tmp = te[11];te[11] = te[14];te[14] = tmp;

			return this;
		},

		setPosition: function setPosition(x, y, z) {

			var te = this.elements;

			if (x.isVector3) {

				te[12] = x.x;
				te[13] = x.y;
				te[14] = x.z;
			} else {

				te[12] = x;
				te[13] = y;
				te[14] = z;
			}

			return this;
		},

		getInverse: function getInverse(m, throwOnDegenerate) {

			// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
			var te = this.elements,
			    me = m.elements,
			    n11 = me[0],
			    n21 = me[1],
			    n31 = me[2],
			    n41 = me[3],
			    n12 = me[4],
			    n22 = me[5],
			    n32 = me[6],
			    n42 = me[7],
			    n13 = me[8],
			    n23 = me[9],
			    n33 = me[10],
			    n43 = me[11],
			    n14 = me[12],
			    n24 = me[13],
			    n34 = me[14],
			    n44 = me[15],
			    t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
			    t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
			    t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
			    t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

			var det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

			if (det === 0) {

				var msg = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";

				if (throwOnDegenerate === true) {

					throw new Error(msg);
				} else {

					console.warn(msg);
				}

				return this.identity();
			}

			var detInv = 1 / det;

			te[0] = t11 * detInv;
			te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
			te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
			te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;

			te[4] = t12 * detInv;
			te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
			te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
			te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;

			te[8] = t13 * detInv;
			te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
			te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
			te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;

			te[12] = t14 * detInv;
			te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
			te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
			te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;

			return this;
		},

		scale: function scale(v) {

			var te = this.elements;
			var x = v.x,
			    y = v.y,
			    z = v.z;

			te[0] *= x;te[4] *= y;te[8] *= z;
			te[1] *= x;te[5] *= y;te[9] *= z;
			te[2] *= x;te[6] *= y;te[10] *= z;
			te[3] *= x;te[7] *= y;te[11] *= z;

			return this;
		},

		getMaxScaleOnAxis: function getMaxScaleOnAxis() {

			var te = this.elements;

			var scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
			var scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
			var scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];

			return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
		},

		makeTranslation: function makeTranslation(x, y, z) {

			this.set(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1);

			return this;
		},

		makeRotationX: function makeRotationX(theta) {

			var c = Math.cos(theta),
			    s = Math.sin(theta);

			this.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);

			return this;
		},

		makeRotationY: function makeRotationY(theta) {

			var c = Math.cos(theta),
			    s = Math.sin(theta);

			this.set(c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1);

			return this;
		},

		makeRotationZ: function makeRotationZ(theta) {

			var c = Math.cos(theta),
			    s = Math.sin(theta);

			this.set(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

			return this;
		},

		makeRotationAxis: function makeRotationAxis(axis, angle) {

			// Based on http://www.gamedev.net/reference/articles/article1199.asp

			var c = Math.cos(angle);
			var s = Math.sin(angle);
			var t = 1 - c;
			var x = axis.x,
			    y = axis.y,
			    z = axis.z;
			var tx = t * x,
			    ty = t * y;

			this.set(tx * x + c, tx * y - s * z, tx * z + s * y, 0, tx * y + s * z, ty * y + c, ty * z - s * x, 0, tx * z - s * y, ty * z + s * x, t * z * z + c, 0, 0, 0, 0, 1);

			return this;
		},

		makeScale: function makeScale(x, y, z) {

			this.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);

			return this;
		},

		makeShear: function makeShear(x, y, z) {

			this.set(1, y, z, 0, x, 1, z, 0, x, y, 1, 0, 0, 0, 0, 1);

			return this;
		},

		compose: function compose(position, quaternion, scale) {

			var te = this.elements;

			var x = quaternion._x,
			    y = quaternion._y,
			    z = quaternion._z,
			    w = quaternion._w;
			var x2 = x + x,
			    y2 = y + y,
			    z2 = z + z;
			var xx = x * x2,
			    xy = x * y2,
			    xz = x * z2;
			var yy = y * y2,
			    yz = y * z2,
			    zz = z * z2;
			var wx = w * x2,
			    wy = w * y2,
			    wz = w * z2;

			var sx = scale.x,
			    sy = scale.y,
			    sz = scale.z;

			te[0] = (1 - (yy + zz)) * sx;
			te[1] = (xy + wz) * sx;
			te[2] = (xz - wy) * sx;
			te[3] = 0;

			te[4] = (xy - wz) * sy;
			te[5] = (1 - (xx + zz)) * sy;
			te[6] = (yz + wx) * sy;
			te[7] = 0;

			te[8] = (xz + wy) * sz;
			te[9] = (yz - wx) * sz;
			te[10] = (1 - (xx + yy)) * sz;
			te[11] = 0;

			te[12] = position.x;
			te[13] = position.y;
			te[14] = position.z;
			te[15] = 1;

			return this;
		},

		decompose: function () {

			var vector = new Vector3();
			var matrix = new Matrix4();

			return function decompose(position, quaternion, scale) {

				var te = this.elements;

				var sx = vector.set(te[0], te[1], te[2]).length();
				var sy = vector.set(te[4], te[5], te[6]).length();
				var sz = vector.set(te[8], te[9], te[10]).length();

				// if determine is negative, we need to invert one scale
				var det = this.determinant();
				if (det < 0) sx = -sx;

				position.x = te[12];
				position.y = te[13];
				position.z = te[14];

				// scale the rotation part
				matrix.copy(this);

				var invSX = 1 / sx;
				var invSY = 1 / sy;
				var invSZ = 1 / sz;

				matrix.elements[0] *= invSX;
				matrix.elements[1] *= invSX;
				matrix.elements[2] *= invSX;

				matrix.elements[4] *= invSY;
				matrix.elements[5] *= invSY;
				matrix.elements[6] *= invSY;

				matrix.elements[8] *= invSZ;
				matrix.elements[9] *= invSZ;
				matrix.elements[10] *= invSZ;

				quaternion.setFromRotationMatrix(matrix);

				scale.x = sx;
				scale.y = sy;
				scale.z = sz;

				return this;
			};
		}(),

		makePerspective: function makePerspective(left, right, top, bottom, near, far) {

			if (far === undefined) {

				console.warn('THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.');
			}

			var te = this.elements;
			var x = 2 * near / (right - left);
			var y = 2 * near / (top - bottom);

			var a = (right + left) / (right - left);
			var b = (top + bottom) / (top - bottom);
			var c = -(far + near) / (far - near);
			var d = -2 * far * near / (far - near);

			te[0] = x;te[4] = 0;te[8] = a;te[12] = 0;
			te[1] = 0;te[5] = y;te[9] = b;te[13] = 0;
			te[2] = 0;te[6] = 0;te[10] = c;te[14] = d;
			te[3] = 0;te[7] = 0;te[11] = -1;te[15] = 0;

			return this;
		},

		makeOrthographic: function makeOrthographic(left, right, top, bottom, near, far) {

			var te = this.elements;
			var w = 1.0 / (right - left);
			var h = 1.0 / (top - bottom);
			var p = 1.0 / (far - near);

			var x = (right + left) * w;
			var y = (top + bottom) * h;
			var z = (far + near) * p;

			te[0] = 2 * w;te[4] = 0;te[8] = 0;te[12] = -x;
			te[1] = 0;te[5] = 2 * h;te[9] = 0;te[13] = -y;
			te[2] = 0;te[6] = 0;te[10] = -2 * p;te[14] = -z;
			te[3] = 0;te[7] = 0;te[11] = 0;te[15] = 1;

			return this;
		},

		equals: function equals(matrix) {

			var te = this.elements;
			var me = matrix.elements;

			for (var i = 0; i < 16; i++) {

				if (te[i] !== me[i]) return false;
			}

			return true;
		},

		fromArray: function fromArray(array, offset) {

			if (offset === undefined) offset = 0;

			for (var i = 0; i < 16; i++) {

				this.elements[i] = array[i + offset];
			}

			return this;
		},

		toArray: function toArray(array, offset) {

			if (array === undefined) array = [];
			if (offset === undefined) offset = 0;

			var te = this.elements;

			array[offset] = te[0];
			array[offset + 1] = te[1];
			array[offset + 2] = te[2];
			array[offset + 3] = te[3];

			array[offset + 4] = te[4];
			array[offset + 5] = te[5];
			array[offset + 6] = te[6];
			array[offset + 7] = te[7];

			array[offset + 8] = te[8];
			array[offset + 9] = te[9];
			array[offset + 10] = te[10];
			array[offset + 11] = te[11];

			array[offset + 12] = te[12];
			array[offset + 13] = te[13];
			array[offset + 14] = te[14];
			array[offset + 15] = te[15];

			return array;
		}

	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Group = function () {
	  function Group() {
	    _classCallCheck(this, Group);

	    this.children = [];
	  }

	  Group.prototype.add = function add(child) {
	    this.children.push(child);
	  };

	  Group.prototype.render = function render(ctx) {
	    var list = this.children.slice();
	    for (var i = 0, l = list.length; i < l; i++) {
	      var child = list[i];
	      if (!child.isVisible()) {
	        continue;
	      }

	      // draw the child:
	      ctx.save();
	      child.updateContext(ctx);
	      child.render(ctx);
	      ctx.restore();
	    }
	    return true;
	  };

	  return Group;
	}();

	function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Stage = function (_Group) {
	  _inherits(Stage, _Group);

	  function Stage(option) {
	    _classCallCheck$1(this, Stage);

	    var _this = _possibleConstructorReturn(this, _Group.call(this));

	    _this.renderTo = typeof option.renderTo === 'string' ? document.querySelector(option.renderTo) : option.renderTo;
	    _this.canvas = document.createElement('canvas');
	    _this.canvas.width = option.width;
	    _this.canvas.height = option.height;
	    _this.ctx = _this.canvas.getContext('2d');

	    _this.camera = option.camera;
	    return _this;
	  }

	  Stage.prototype.update = function update() {
	    var _this2 = this;

	    this.children.forEach(function (child) {
	      child.render(_this2.ctx, _this2.camera);
	    });
	  };

	  return Stage;
	}(Group);

	function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Cube = function () {
	  function Cube(position, length, width, height) {
	    _classCallCheck$2(this, Cube);

	    this.position = position;
	    this.length = length;
	    this.width = width;
	    this.height = height;

	    this.rotation = {
	      x: 0,
	      y: 0,
	      z: 0
	      //w 0.001694915254237288 10
	      //w 0.0018181818181818182 50
	      //w0.002               100
	      //w0.0033333333333333335  300
	      //w 0.01  500
	    };this.testP = new Vector3(100, 100, 500);

	    this.pv = new Matrix4();
	  }

	  Cube.prototype.render = function render(ctx, camera) {
	    this.pv.multiplyMatrices(camera.p_matrix, camera.v_matrix);
	    //p*v*m
	    //face z-sort !!! w-sort !!
	    //render
	    this.testP.applyMatrix4(this.pv);

	    console.log(this.testP.w);
	  };

	  return Cube;
	}();

	function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Camera = function () {
	  function Camera(option) {
	    _classCallCheck$3(this, Camera);

	    //http://blog.csdn.net/lyx2007825/article/details/8792475
	    //http://www.cnblogs.com/yiyezhai/archive/2012/09/12/2677902.html
	    this._createProp('x', option.x, this._update);
	    this._createProp('y', option.y, this._update);
	    this._createProp('z', option.z, this._update);

	    //(vertical field of view(FOV))
	    this.fov = option.fov || 75;
	    this.ratio = option.ratio || 1920 / 1080;
	    this.front = option.front || 1;
	    this.back = option.back || 10000;
	    this.target = [0, 0, 0];
	    this._update();
	  }

	  Camera.prototype._update = function _update() {
	    //http://webglfactory.blogspot.com/2011/06/how-to-create-view-matrix.html
	    //http://4.bp.blogspot.com/_ltmZpULxXtI/TSn3hwEQuZI/AAAAAAAAAes/H93UF8OT1sE/s1600/gimballock_camera.png
	    this.v_matrix = Matrix4.lookAt([], [this.x, this.y, this.z], this.target, [0, 1, 0]);
	    this.p_matrix = Matrix4.getProjection(this.fov, this.ratio, this.front, this.back);
	    this.un_p_matrix = new Matrix4().getInverse(this.p_matrix);
	    this.un_v_matrix = new Matrix4().getInverse(this.v_matrix);
	  };

	  Camera.prototype.lookAt = function lookAt(target) {
	    this.target = target;
	    this._update();
	  };

	  Camera.prototype.createRay = function createRay(rotioX, ratioY) {
	    var v3 = Vector3;

	    var pl = [this.x, this.y, this.z];
	    var m = new Matrix4().multiplyMatrices(this.un_v_matrix, this.un_p_matrix);

	    var p2 = v3.applyProjection([rotioX, ratioY, 0], m);

	    var v = v3.sub([], p2, pl);
	    return {
	      dir: v3.normalize(v, v),
	      pt: pl
	    };
	  };

	  Camera.prototype._createProp = function _createProp(name, defaultValue, setterCallback) {
	    this['_' + name] = defaultValue;
	    Object.defineProperty(this, name, {
	      get: function get() {
	        return this['_' + name];
	      },
	      set: function set(value) {
	        this['_' + name] = value;
	        setterCallback.call(this, value);
	      }
	    });
	  };

	  return Camera;
	}();

	var stage = new Stage({
	  camera: new Camera({
	    x: 0,
	    y: 0,
	    z: 600,
	    rotateX: 0,
	    rotateY: 0,
	    fov: 60,
	    ratio: 600 / 600,
	    front: 1,
	    back: 1000
	  }),
	  renderTo: '#root',
	  width: 600,
	  height: 400,
	  renderer: 'canvas'
	});

	var cube = new Cube({
	  x: 0,
	  y: 0,
	  z: 0
	}, 100, 100, 100);

	stage.add(cube);

	stage.update();

	//animate();

	// function animate() {
	//   requestAnimationFrame(animate);
	//   cube.rotation.x += 0.01;
	//   cube.rotation.y += 0.02;
	//   stage.update()
	// }

}());
//# sourceMappingURL=b.js.map
