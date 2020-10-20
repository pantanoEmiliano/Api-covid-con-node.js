const api = require('novelcovid');
const nobelController = {

    root: async function (req, res) {

        const paises = await api.countries().then(paises => {

            return paises

        })

        api.countries().then(data => {

            res.render("nobel", {
                data: data,
                paises: paises
            })

        });


    },

    pais: async function (req, res) {

        const paises = await api.countries().then(paises => {

            return paises

        })
        const id = req.params.id
        console.log(id)
        api.countries({ country: id }).then(data => {

            res.render("nobelPais", { data,
            paises:paises })
        })



    },


    filter: async function (req, res) {

        const paises = await api.countries().then(paises => {

            return paises

        })

        const id = req.body.pais
        console.log(id)
        const id2 = req.body.val
        console.log(id2)
        api.countries({ country: id }).then(data => {

            res.render("nobelFilter", { data,
            paises:paises })
        })


    },

    val: (req, res) => {

        const id = req.body.pais
        console.log(id)
        const id2 = req.body.val
        console.log(id2)
        api.countries({ country: id2 }).then(data => {

            res.render("nobelVal", { data })
        })


    }





}


module.exports = nobelController