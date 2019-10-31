'use strict';

var response = require('../config/res');
var connection = require('../config/conn');

exports.barang = function(req, res) {
    connection.query('SELECT * FROM barang', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Load success", res)
};

// exports.findUsers = function(req, res) {
    
//     var user_id = req.params.user_id;

//     connection.query('SELECT * FROM person where id = ?',
//     [ user_id ], 
//     function (error, rows, fields){
//         if(error){
//             console.log(error)
//         } else{
//             response.ok(rows, res)
//         }
//     });
// };

exports.tambahBarang = function(req, res) {
    
    var kode_barang = req.body.kode_barang;
    var nama_barang = req.body.nama_barang;
    var id_kategori = req.body.id_kategori;
    var stok = req.body.stok;
    var satuan = req.body.satuan;
    var id_keterangan = req.body.id_keterangan;
    
    connection.query('INSERT INTO barang (kode_barang, nama_barang, id_kategori, stok, satuan, id_keterangan) values (?,?,?,?,?,?)',
    [ kode_barang, nama_barang , id_kategori, stok, satuan, id_keterangan], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan barang!", res)
        }
    });
};

exports.updateBarang = function(req, res) {
    
    var kode_lama = req.body.kode_lama;
    var kode_barang = req.body.kode_barang;
    var nama_barang = req.body.nama_barang;
    var id_kategori = req.body.id_kategori;
    var stok = req.body.stok;
    var satuan = req.body.satuan;
    var id_keterangan = req.body.id_keterangan;

    connection.query('UPDATE barang SET kode_barang = ?, nama_barang = ?, id_kategori = ?, stok = ?, satuan = ?, id_keterangan = ? WHERE kode_barang = ?',
    [ kode_barang, nama_barang, id_kategori, stok, satuan, id_keterangan, kode_lama], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah data barang!", res)
        }
    });
};

// exports.deleteUsers = function(req, res) {
    
//     var user_id = req.body.user_id;

//     connection.query('DELETE FROM person WHERE id = ?',
//     [ user_id ], 
//     function (error, rows, fields){
//         if(error){
//             console.log(error)
//         } else{
//             response.ok("Berhasil menghapus user!", res)
//         }
//     });
// };