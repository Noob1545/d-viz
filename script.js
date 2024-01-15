const buton = document.getElementsByTagName("button")[0]
async function fetchExchangeRate(){
    try {
          const inputValue = document.getElementsByTagName("input")[0].value.trim()
          if(Number(inputValue)){
            const apiKey = '74b876cc770a7e4a5b1ab605'
          const selectValue = document.getElementsByTagName("select")[0]
          const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${selectValue.value}`
          const response = await fetch(apiUrl);
          const data = await response.json();
          const dolarKuruAl = data.conversion_rates.TRY * inputValue
          const arrayDolarKuru = dolarKuruAl.toString().split("")
          let dolarkuru = ""
          arrayDolarKuru.pop()
          arrayDolarKuru.pop()
          arrayDolarKuru.forEach((item) => dolarkuru+=item)
          if(selectValue.value == "USD"){
            document.getElementsByTagName("p")[0].textContent = inputValue+" dolar "+" "+dolarkuru+"TL ye eşittir"
          }
          else if(selectValue.value == "EUR"){
            document.getElementsByTagName("p")[0].textContent = inputValue+" euro "+" "+dolarkuru+"TL ye eşittir"
          }
          document.getElementsByTagName("select")[0].onchange = function(){
            if(selectValue.value == "USD"){
              document.getElementsByTagName("p")[0].textContent = inputValue+" dolar "+" "+dolarkuru+"TL ye eşittir"
              buton.click()
            }
            else if(selectValue.value == "EUR"){
              document.getElementsByTagName("p")[0].textContent = inputValue+" euro "+" "+dolarkuru+"TL ye eşittir"
              buton.click()
            }
          }
          }
          else{
            alert("lütfen düzgün bir değer giriniz. '"+inputValue+" istediğimiz bir değer değil.")
          }
    } catch (error) {
      console.error('API hatası:', error);
    }
  }
  buton.onclick = fetchExchangeRate
  fetchExchangeRate()
  buton.click()