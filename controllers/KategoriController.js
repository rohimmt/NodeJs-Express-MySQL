'use strict';

var response = require('../config/res');
var connection = require('../config/conn');

exports.kategori = function(req, res) {
    connection.query('SELECT * FROM kategori', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.tambahKategori = function(req, res) {
    
    var kategori = req.body.kategori;
    
    connection.query('INSERT INTO kategori (kategori) values (?)',
    [ kategori ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan kategori barang!", res)
        }
    });
};

exports.updateKategori = function(req, res) {
    
    var id_kategori = req.body.id_kategori;
    var kategori = req.body.kategori;

    connection.query('UPDATE kategori SET kategori = ? WHERE id_kategori = ?',
    [ kategori, id_kategori ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah data kategori!", res)
        }
    });
};

exports.hapusKategori = function(req, res) {
    
    var id_kategori = req.body.id_kategori;

    connection.query('DELETE FROM kategori WHERE id_kategori = ?',
    [ id_kategori ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus barang!", res)
        }
    });
};
