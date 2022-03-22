function Ship(currentPort) {

    this.currentPort = currentPort;

    Ship.prototype.setSail = function () {

    this.currentPort = false;
    }
}

module.exports = Ship;