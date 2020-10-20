const api = require('novelcovid');
const covid = "https://corona.lmao.ninja/v2/countries?yesterday&sort"

const indexController = {


    root: async (req, res) => {

        const paises = await api.countries().then(paises => {

            return paises

        })

        res.render("index", {paises: paises})

    },


    continentes: async (req, res) => {
        const paises = await api.countries().then(paises => {

            return paises

        })
        const continentes = await api.continents().then(continentes => {
            
            return continentes
        }) 

       // console.log(continentes);
        res.render("continentes", { paises: paises,
        continentes: continentes })
    },


    resume: async (req, res) => {
        const paises = await api.countries().then(paises => {

            return paises

        })
        const todos = await api.all().then(todos => {

            return todos

        })
        res.render("all", {
            todos: todos,
            paises: paises
        })
        
    },

    
}




module.exports = indexController