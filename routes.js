'use strict';

module.exports = function(app) {
    var BarangController = require('./controllers/BarangController');

    app.route('/')
        .get(BarangController.index);

    app.route('/barang')
        .get(BarangController.barang);

    // app.route('/users/:user_id')
    //     .get(todoList.findUsers);

    app.route('/barang')
        .post(BarangController.tambahBarang);

    app.route('/barang')
        .put(BarangController.updateBarang);
    
    // app.route('/users')
    //     .delete(todoList.deleteUsers);
};