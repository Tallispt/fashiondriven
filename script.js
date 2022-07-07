function lastOrders() {
    let promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
    promise
        .catch(err => console.log(err))
        .then(response => {
            let list = document.querySelector('.pedido ul')
            console.log(response.data)

            for (let i = 0; i < 10; i++) {
                list.innerHTML +=
                    `<li>
                        <img src="${response.data[i].image}">
                        <p><strong>Criador: </strong>${response.data[i].owner}</p>
                    </li>`
            }
        })
}

lastOrders()