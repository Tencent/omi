;(function () {
    // The base Class implementation (does nothing)
    var Class = function () { };

    // Create a new Class that inherits from this class
    Class.extend = function (prop) {
        var _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)

        var prototype = Object.create(this.prototype);

        // Copy the properties over onto the new prototype
        for (var name in prop) {
                // Check if we're overwriting an existing function
                prototype[name] =
                typeof _super[name] == "ctor"  ?
                    (function (name, fn) {
                        return function () {
                            var tmp = this._super;

                            // Add a new ._super() method that is the same method
                            // but on the super-class
                            this._super = _super[name];

                            // The method only need to be bound temporarily, so we
                            // remove it when we're done executing
                            var ret = fn.apply(this, arguments);
                            this._super = tmp;

                            return ret;
                        };
                    })(name, prop[name]) :
                    prop[name];

        }

        // The dummy class constructor
        function _Class() {
            // All construction is actually done in the init method
            this.ctor.apply(this, arguments);
        }

        // Populate our constructed prototype object
        _Class.prototype = prototype;

        _Class.prototype._super= Object.create(this.prototype);

        // Enforce the constructor to be what we expect
        _Class.prototype.constructor = _Class;

        // And make this class extendable
        _Class.extend = Class.extend;


        return _Class;
    };


    Nuclear.Class = Class;
})()