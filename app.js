//* Selectors
const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

const gelirinizTd = document.getElementById("geliriniz")

const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")

//* Veriables

let gelirler = 0

let harcamaListesi = []

const harcaaBody = document.getElementById("harcama-body")

//* Events

ekleFormu.addEventListener("submit", (e) => {
    e.preventDefault()
gelirler = gelirler +Number(gelirInput.value) 

localStorage.setItem("gelirler", gelirler)


ekleFormu.reset()

hesaplaVeGuncelle()
})

window.addEventListener("load", () => {
    gelirler = Number(localStorage.getItem("gelirler"))
    tarihInput.valueAsDate = new Date()

    hesaplaVeGuncelle()
})

harcamaFormu.addEventListener("submit", (e)=> {
    e.preventDefault()

    const yeniHarcama = { 
    id:new Date().getTime(), 
    tarih:tarihInput.value, 
    alan: harcamaAlaniInput.value, 
    miktar:miktarInput.value,
}

harcamaListesi.push(yeniHarcama)

localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))

harcamayiDomaYaz(yeniHarcama)


harcamaFormu.reset()
tarihInput.valueAsDate = new Date()
})

const hesaplaVeGuncelle = () => {

    gelirinizTd.innerText = gelirler
}
// const harcamayiDomaYaz = (yeniHarcama) => {
    // const {id, miktar, tarih, alan } = yeniHarcama
    const harcamayiDomaYaz = ({id, miktar, tarih, alan }) => {
    harcamaBody.innerHTML = `
    
    
    `
}

 <tr>
 <th scope="row">1</th>
 <td>Mark</td>
 <td>Otto</td>
 <td>@mdo</td>
</tr>


//* Functions
