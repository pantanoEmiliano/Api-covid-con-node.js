const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)
const banderas = document.querySelector('#banderas')
console.log(value)

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    fetchData()
});

const fetchData = async () => {
    try {
        const covid = `https://corona.lmao.ninja/v2/countries/${item.country}?yesterday=true&strict=true&query`
        const res = await fetch(covid)
        const data = await res.json()
        banderillas(data)
        filtrarDatos(data)
        formularioReal(data)
        console.log(covid)
        
    } catch (error) {
        console.log(error)
    }
}

const banderillas = (data) => {

    let elementos = ''

    
            // console.log(item)
            elementos += 
            
           ` <div class="card text-white bg-primary mb-3 col-" >
            <div class="row no-gutters">
              <div class="col-md-4"><img src=${item.countryInfo.flag} class="card-img" ></div><div class="col-md-8">
                <div class="card-body">
                  <h2 class="card-title text-center">${item.country}</h2>
                  <p class="card-text text-center bg-danger text-white" > Casos: ${item.cases}</p>
                  <p class="card-text text-center bg-dark text-white"> Fallecidos:  ${item.deaths}</p>
                  <p class="card-text text-center bg-success text-white"> Recuperados:  ${item.recovered}</p>
                  <a href="/pais/${item.country}">${item.country}</a> 
                </div>
              </div>
            </div>
          </div>`
        }
  
    banderas.innerHTML = elementos

