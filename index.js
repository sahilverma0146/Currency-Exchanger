const baseUrl="https://www.amdoren.com/api/currency.php?api_key=UqvwDPVyrxMnHXRzJYCd49RbmUrChx&from&from=&to="
const list = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

// for(let code in list){
//     console.log(code ,list[code]);
// }


const dropdown =document.querySelectorAll(".dropdown select");

const fromCur =document.querySelector(".from select");
const toCur =document.querySelector(".to select");




for(let select of dropdown){
    for(let code in list){
        console.log(code ,list[code]);
        let newOption =document.createElement("option");
        newOption.innerText=code;
        newOption.value=code;
        if(select.name==="from" && code==="USD"){
            newOption.selected= "selected";
        }else if(select.name==="To" && code==="INR"){

            newOption.selected="selected";
        }
            
        
        select.append(newOption);
        
    }

    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);

    })
}

const updateFlag =(Element)=>{
    console.log(Element);
    let code=Element.value;
    console.log(code);
    let countryCode = list[code];//IN
    console.log(countryCode);
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=Element.parentElement.querySelector("img");
    img.src=newSrc;

}
let btn=document.querySelector("#button3");
btn.addEventListener("click", async (evt)=>{
    evt.preventDefault(); //if any btn present in the form then it will work like the refrsh btn to stop this we use the this property of event 
    let amount = document.querySelector(".amount input");
    let amtValue =amount.value;
    console.log(amtValue);
    if(amtValue ==="" || amtValue<1){
        amtValue= 1;
        amount.value="1";
    }

    console.log(fromCur.value);

    console.log(toCur.value);

    const relNew =`${baseUrl}/${fromCur.value.toLowerCase()}/${toCur.value.toLowerCase()}.json`;
    // const relNew = " https://v6.exchangerate-api.com/v6/51e0a073851695696dea6098/latest/USD"
    let response = await fetch(relNew);
    let data =await response.json();
    // console.log(data);
    console.log(response.data);
});




