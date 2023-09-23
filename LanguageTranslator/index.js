const language = {
    "am-ET": "Amharic",
    "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    "bem-ZM": "Bemba",
    "bi-VU": "Bislama",
    "bjs-BB": "Bajan",
    "bn-IN": "Bengali",
    "bo-CN": "Tibetan",
    "br-FR": "Breton",
    "bs-BA": "Bosnian",
    "ca-ES": "Catalan",
    "cop-EG": "Coptic",
    "cs-CZ": "Czech",
    "cy-GB": "Welsh",
    "da-DK": "Danish",
    "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "en-GB": "English",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fn-FNG": "Fanagalo",
    "fo-FO": "Faroese",
    "fr-FR": "French",
    "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    "ha-NE": "Hausa",
    "he-IL": "Hebrew",
    "hi-IN": "Hindi",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "kk-KZ": "Kazakh",
    "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    "ku-TR": "Kurdish",
    "ky-KG": "Kyrgyz",
    "la-VA": "Latin",
    "lo-LA": "Lao",
    "lv-LV": "Latvian",
    "men-SL": "Mende",
    "mg-MG": "Malagasy",
    "mi-NZ": "Maori",
    "ms-MY": "Malay",
    "mt-MT": "Maltese",
    "my-MM": "Burmese",
    "ne-NP": "Nepali",
    "niu-NU": "Niuean",
    "nl-NL": "Dutch",
    "no-NO": "Norwegian",
    "ny-MW": "Nyanja",
    "ur-PK": "Pakistani",
    "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    "ps-PK": "Pashto",
    "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sg-CF": "Sango",
    "si-LK": "Sinhala",
    "sk-SK": "Slovak",
    "sm-WS": "Samoan",
    "sn-ZW": "Shona",
    "so-SO": "Somali",
    "sq-AL": "Albanian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "sw-SZ": "Swahili",
    "ta-LK": "Tamil", 
    "te-IN": "Telugu",
    "tet-TL": "Tetum",
    "tg-TJ": "Tajik",
    "th-TH": "Thai",
    "ti-TI": "Tigrinya",
    "tk-TM": "Turkmen",
    "tl-PH": "Tagalog",
    "tn-BW": "Tswana",
    "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    "uz-UZ": "Uzbek",
    "vi-VN": "Vietnamese",
    "wo-SN": "Wolof",
    "xh-ZA": "Xhosa",
    "yi-YD": "Yiddish",
    "zu-ZA": "Zulu"
}
let langOpEl = document.querySelectorAll('select');
let fromTextEl = document.getElementById('fromText');
let transTextEl = document.getElementById('transText');
let fromVol1 = document.getElementById('fromVol');
let toVol2 = document.getElementById('toVol');
let copyEl = document.getElementById('copyIcon');

 

langOpEl.forEach((get,con)=>{
for(let countryCode in language){
    let selected;
    if(con== 1 && countryCode=="en-GB"){
         selected = 'selected';
    }else if(con==1 && countryCode == "bn-IN"){
        selected = 'selected';
    }
    let option = `<option value="${countryCode}">${language[countryCode]}</option>`
    get.insertAdjacentHTML('beforeend',option);
}
})
fromTextEl.addEventListener('input',function(){
    let content = fromTextEl.value;
    fromContent = langOpEl[0].value; 
    transContent = langOpEl[1].value; 
    
    let transLink = ` https://api.mymemory.translated.net/get?q=${content}!&langpair=${fromContent}|${transContent}`;

    fetch(transLink).then(translate => translate.json()).then(data =>{
       transTextEl.value = data.responseData.translatedText;
    });
    
})
fromVol1.addEventListener('click',()=>{
  let fromTalk;
  fromTalk = new SpeechSynthesisUtterance(fromTextEl.value);
  fromTalk.lang = langOpEl[0].value;
  speechSynthesis.speak(fromTalk); 
  console.log(fromTalk); 
});

toVol2.addEventListener('click',()=>{
 let toTalk;
 toTalk = new SpeechSynthesisUtterance(transTextEl.value);
 toTalk.lang = langOpEl[1].value;
 speechSynthesis.speak(toTalk);
 
});

copyEl.addEventListener('click',()=>{

    navigator.clipboard.writeText(transTextEl.value)
    
    
})