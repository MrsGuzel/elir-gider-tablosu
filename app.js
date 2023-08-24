//* Selectors
const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

const gelirinizTd = document.getElementById("geliriniz")
const giderinizTd = document.getElementById("gideriniz")
const kalanTd = document.getElementById("kalan")

const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")

//* Veriables

let gelirler = 0

let harcamaListesi = []

const harcamaBody = document.getElementById("harcama-body")
const temizleBtn = document.getElementById("temizle-btn")

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


  harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || []

  harcamaListesi.forEach((harcama) => harcamayiDomaYaz(harcama))

  console.log(harcamaListesi);


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

hesaplaVeGuncelle()


harcamaFormu.reset()
tarihInput.valueAsDate = new Date()
})

const hesaplaVeGuncelle = () => {
    const giderler = harcamaListesi.reduce(
    (toplam, harcama) => toplam + Number(harcama.miktar),
     0
    )

    gelirinizTd.innerText = gelirler
    giderinizTd.innerText = giderler
    kalanTd.innerText = gelirler - giderler
}
// const harcamayiDomaYaz = (yeniHarcama) => {
    // const {id, miktar, tarih, alan } = yeniHarcama
    const harcamayiDomaYaz = ({id, miktar, tarih, alan }) => {
    harcamaBody.innerHTML += `
    
    <tr>
    <td>${tarih}</td>
    <td>${alan}</td>
    <td>${miktar}</td>
    <td> <i id=${id} class="fa-solid fa-trash-can text-danger" type="button"></i></td>
   </tr>
    
    `
}

harcamaBody.addEventListener("click", (e) => {

   if(e.target.classList.contains("fa-trash-can")) {

    e.target.parentElement.parentElement.remove()

    const id = e.target.id

    harcamaListesi = harcamaListesi.filter((harcama) => harcama.id !=id)

    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
    console.log(harcamaListesi);

    hesaplaVeGuncelle()
   }
})

temizleBtn.addEventListener("click", () => {
    harcamaListesi = []
    gelirler = 0
    localStorage.clear()
    harcamaBody.innerHTML = ""

    hesaplaVeGuncelle()
    
})
//* Functions
