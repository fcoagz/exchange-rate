const urlBase = 'https://pydolarvenezuela-api.vercel.app/'

let table = document.getElementById('tablaDolares')
let filtro = document.getElementById('filtro')

async function getMonitorsJSON(url) {
    const response = await axios.get(url)

    if (response.status == 200) {
        return response.data
    }
}

async function getValuesTable() {
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    var _monitors = await getMonitorsJSON(urlBase + 'api/v1/dollar/')
    _monitors = _monitors['monitors']

    if (filtro.value !== 'todos') {
        _monitors = await getMonitorsJSON(urlBase + 'api/v1/dollar/' + filtro.value)
    }

    for (let monitor in _monitors) {
        let row = document.createElement('tr')

        row.innerHTML = '<td>' + _monitors[monitor].title + '</td>' +
                        '<td>' + _monitors[monitor].price + '</td>' +
                        '<td style="color:' + _monitors[monitor].color + ';">' + _monitors[monitor].percent + '</td>' +
                        '<td style="color:' + _monitors[monitor].color + ';">' + _monitors[monitor].change + '</td>' +
                        '<td>' + _monitors[monitor].last_update + '</td>';
        table.appendChild(row)
    

    }
}

filtro.addEventListener('change', getValuesTable);
window.onload = getValuesTable;