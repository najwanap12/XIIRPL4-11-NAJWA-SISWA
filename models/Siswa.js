const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama_siswa: {
        type: String,
        required: [true, 'Silahkan isi nama siswa'], 
        unique: true
    },
    nis_siswa: {
        type: String,
        required: true,
        unique: true,
    },
    jenis_kelamin: {
        type: String,
        required: true,
    },
    tempat_tanggal_lahir:{
        type: String,
        required: true,
    },
    alamat:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Siswas', UserSchema)