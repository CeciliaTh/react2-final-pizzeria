const totalCompra = (listaPizzas) => {
let totalaPagar = 0;
listaPizzas.map((lp) => {
    totalaPagar = totalaPagar + (lp.precio * lp.cantidad)
})
return totalaPagar
}

export { totalCompra } 