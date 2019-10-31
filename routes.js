'use strict';

module.exports = function(app) {
    var BarangController = require('./controllers/BarangController');

    app.route('/')
        .get(BarangController.index);

    app.route('/barang')
        .get(BarangController.barang);

    app.route('/barang/:parameter')
        .get(BarangController.cariBarang);

    app.route('/barang')
        .post(BarangController.tambahBarang);

    app.route('/barang')
        .put(BarangController.updateBarang);
    
    app.route('/barang')
        .delete(BarangController.hapusBarang);
};