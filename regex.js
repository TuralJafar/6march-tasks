let fincodeStr = ["76GEEMK","7TY78HX", "TR67GH3"];
const regex = new RegExp('[(A-Z|0-9)]{7}');
let bool = true;
do{
    let fincode = window.prompt("Fin kodunuzu daxil edin: ");
    if (regex.test(fincode)) {
        for (let i = 0; i < fincodeStr.length; i++) {
            if (fincode == fincodeStr[i]) {
                window.alert("Istifadeci tapildi.Istifadeci indeksi:" + i);
                bool = false;
                break;
            }
            else {
                window.alert("wrong format.Please again enter")
            }
        }
    }
    else {
        window.alert("fincode not found!please again.");
    }
} while (bool);