const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc' , JSON.stringify (itens))

function loadItens() {
    itens=getItensBD()
    tbody.innerHTML - ''
    itens.forEach((item, index) => {
        incert(item, index)
        
    })
}

loadItens()

function incertItem(item, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = 
    <td>${item.nome}</td>
    <td>${item.funcao}</td>
    <td>R$ ${item.salario}</td>
    <td class="acao">
        <button onclick="editItem(${index}")><i class='bx bx-edit' ></i> button</td>
        <td class="acao">
            <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
        </td>

tbody.appendChild(tr)

}

function editItem(index) {
    openModal(true, index)
    
}

