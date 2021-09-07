import Shape from '../shape';

class Object {

    /**
     * Object class constructor
     * @param {number} x default position of origin x
     * @param {number} y default position of origin y
     * @param {Shape} shape shape of object
     */
    constructor(x, y, shape) {
        this.x = x;
        this.y = y;
        this.shape = shape;
    }

}

export default Object;
