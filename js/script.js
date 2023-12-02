const countriesList = document.getElementById('countries-list');

fetch('https://restcountries.com/v3/all')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Página no disponible');
      }
      return response.json();
    })
    .then((flags) => {
        const flagsModified = flags.map((flag) => {
            const newFlag = {
                ...flag,
            };
            return newFlag;
        });
        printFlags(flagsModified);
    })
    //país(name common),capital(capital 0),población(), lado carretera(car side) (flags 0 ó 1)
    ;const printFlags = (flagsModified) => {
        flagsModified.forEach((flag) => {
            const {name, capital, car, flags} = flag;
            const {common} = name;
            const {side} = car;
            countriesList.innerHTML += `
            <li>
            <div class="info-img-container">
                <div class="info-container">
                    <p><span>País:</span>${common}</p>
                    <p><span>Capital:</span>${capital}</p>
                    <p><span>Lado Conducción:</span>${side}</p>
                    <p><span>Lado Bandera:</span>${flags}</p>
                </div>
            </div>`})};
  