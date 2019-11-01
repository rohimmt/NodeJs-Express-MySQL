'use strict';

module.exports = function (app) {
    var BarangController = require('./controllers/BarangController');
    var KategoriController = require('./controllers/KategoriController');

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

    app.route('/kategori')
        .get(KategoriController.kategori);

    app.route('/kategori')
        .post(KategoriController.tambahKategori);

    app.route('/kategori')
        .put(KategoriController.updateKategori);

    app.route('/kategori')
        .delete(KategoriController.hapusKategori);
};