const Siswa = require('../models/Siswa')

module.exports = {
    //get all users
    show: async (req, res) => {
        try {
            const user = await Siswa.findById(req.params.id)
            res.json({
                status: true, 
                data: user,
                method: req.method, 
                url: req.url,
                message: "Data berhasil didapat"
            })

        } catch (error) {
            res.status(400).json({success: false})
        }

      },
    index: async (req, res) => {
        try{
            const users = await Siswa.find()
            if(users.length > 0){
                res.status(200).json({
                    status: true, 
                    data: users,
                    method: req.method, 
                    url: req.url,
                })
            }else{
                res.json({
                    status: false,
                    message: "Data masih kosong"
                })
            }
        }   catch (error) {
            res.status(400).json({success: false})
        }
       
      },
      //get a user
      store: async (req, res) => {
        try {
            const siswa = await Siswa.create(req.body)
            res.status(200).json({
                status: true, 
                data: siswa,
                method: req.method, 
                url: req.url,
                message: "Data berhasil didapat"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }

      },
      update: async (req, res) => {
        try {
            const user = await Siswa.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.json({
                status: true, 
                data: user,
                method: req.method, 
                url: req.url,
                message: "Data berhasil diubah"
            })

        } catch (error) {
            res.status(400).json({success: false})
        }
        
        
      },
      delete: async (req, res) =>{
        try {
            await Siswa.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method, 
                url: req.url,
                message: "Data berhasil dihapus"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }

      },

}
