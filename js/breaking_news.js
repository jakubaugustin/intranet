const SENTENCE_START = [
	  "Pozor, pozor"
	, "Mimořádné hlášení"
	, "Urgentní příjem"
];

const PATIENT_IDS = [
	  "muž ve věku " + (Math.floor(Math.random() * 60) + 18) + "let"
	, "žena ve věku " + (Math.floor(Math.random() * 60) + 18) + "let"
	, "geriatrický pacient"
	, "neidentifikovaná osoba"
	, "bezdomovec"
];

const PATIENT_INFO = [
	  "pod vlivem omamných látek"
	, "v silném šoku"
	, "bez známek života"
	, ""
	, ""
	, ""
	, ""
];

const INJURIES = [
	"poranění"
	, "uříznutí"
	, "pohmoždění"
	, "zlomeninu"
	, "průstřel"
	, "dislokaci"
	, "popálení"
];

const BODY_PARTS = [
	"hlavy"
	, "nohy"
	, "hrudníku"
	, "žeber"
	, "varlat"
	, "krku"
	, "zad"
	, "oka"
	, "ucha"
	, "lebky"
	, "stehenní kosti"
	, "ramenního kloubu"
	, "plic"
	, "jater"
];

const CIRCUMSTANCES = [
	"při procházke se psem"
	, "při rybaření"
	, "při vaření"
	, "po skoku z okna"
	, "při požáru"
	, "při výbuchu plynu"
	, "při útoku mimozemšťanů"
	, "po požití neznámé látky"
];

function getRandomWord(arr){
	return arr[Math.floor(Math.random() * arr.length)];
}


function getFullAlert() {
	diagnoseCount = Math.floor(Math.random() * 5) + 1;
	diagnosis = "";
	for (i = 0; i < diagnoseCount; i++) {
		if (i == 0){
			diagnosis = getRandomWord(INJURIES) + " " + getRandomWord(BODY_PARTS);
		}else{
			diagnosis = diagnosis + " a " + getRandomWord(INJURIES) + " " + getRandomWord(BODY_PARTS);
		}
	}
	msg = getRandomWord(SENTENCE_START) + ", " +  getRandomWord(PATIENT_IDS) + ", " + getRandomWord(PATIENT_INFO) + " " + " utrpěl/a: " + diagnosis + ", úraz nastal " + getRandomWord(CIRCUMSTANCES);
	return msg
}

function renderMessages() {
	var news = document.getElementById("news");
	for (newsCount = 0; newsCount < 100; newsCount++) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(getFullAlert()));
		news.appendChild(li);
	}
	createMarquee();
}
