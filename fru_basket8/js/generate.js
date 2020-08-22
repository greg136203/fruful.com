
var characterList = [
"001EF6","002EZS","003E93","004E5V","005ES5","006EHB","007E25","008ETU","009EXO","010EWS",
"011EPS","012EC8","013EO5","014EYL","015E2O","016E67","017E90","018E29","019EIR","020EFA",
"021E36","022E31","023EGI","024E37","025ER3","026E48","027EX3","028E9L","029E59","030E6F",
"031E34","032E8L","033EK0","034EPL","035E7M","036E9H","037E79","038EFS","039E3B","040E66",
"041EF0","042E2N","043EEP","044E9E","045E5H","046E80","047EFQ","048ET8","049EL7","050ELM",
"051E0K","052ECR","053E5B","054ENG","055E5O","056ERK","057E92","058EQ5","059EM3","060EPP",
"061E31","062EI4","063E5G","064E98","065EIN","066ENK","067E9T","068EU9","069E0L","070E96",
"071E26","072E21","073E22","074ELI","075EZ9","076E6D","077E39","078E7Z","079E1B","080E3H",
"081EMC","082E4J","083E64","084EM3","085EW2","086E42","087E0M","088E5Y","089E6Q","090E7Q",
"091EA3","092EIE","093EK2","094EDZ","095E7S","096EEK","097E4E","098E62","099EHN","100E9Q",
"101E20","102EA7","103E4G","104EC1","105EPG","106EPQ","107E2Q","108E0U","109E80","110ECT",
"111E1H","112E29","113EP6","114E6D","115E8G","116E2U","117E9J","118E5U","119E0B","120E87",
"121EBT","122E53","123EBX","124ETP","125E2F","126EKS","127E46","128EG0","129EN1","130EAN",
"131E0I","132EB2","133E93","134E61","135E9V","136ER8","137E85","138E0S","139E6F","141EV4",
"142EX9","143E1I","145EA1","148E71","149E47","150E80","151E6N","152E16","153EI1","154EIH",
"155E67","156E5E","157EQ9","158EQ7","159E63","160E44","161ED0","162E0S","163EV8","164EBA",
"165E7J","166E28","167E83","168EKS","169EAI","170EE0","171E26","172E58","173EA3","174EEX",
"175E01","176E62","177E7Q","178ENJ","179ED1","180EKD","181E38","185EZA","186EB8","187EM1",
"188EO4","189EME","207E0J","208E6Z","209EH5"];

var playerList = [
"-save-LIAR","ドラグンドール","白","Wino","HARUKA",
"Kaerucon","輝夜星","蒼","赦天琴箕","hairface",
"阿冠","tomsam121","K","BTHunter","Gary",
"Akatsuki","プルタブ","レアの油場げ	","Parish","ひむる",
"Neo饅頭","墨","樹の君","CDBJ","非洲雄",
"フェニックス","修耐達","ShiHao","嘎肉","薇塔 克洛提德",
]

var team1,team2,team3,team4,team5;
$(document).ready(function() {

	var appendPlayer = "";
	playerList.forEach(function(player) {
		appendPlayer += "<option value='" + player + "'>" + player + "</option>"
	});
	$("#player").append(appendPlayer);

	var appendOption = "";
	var appendOption2 = "";
	var count = 0;
	characterList.forEach(function(character) {
		var imageName = character.substring(0, 3) + "T" + character.substring(4, 6);

		appendOption += "<option value='" + imageName + "' style='background-image:url(./images/character/" + imageName + ".png);'>" + imageName + "</option>";
		
		appendOption2 += "<img src='./images/character/" + imageName + ".png' title='" + imageName + "' />&nbsp;"
		count++;
		if(count % 10 == 0){
			appendOption2 += "<br />";
		}
	});
	$("#team1").append(appendOption);
	$("#team2").append(appendOption);
	$("#team3").append(appendOption);
	$("#team4").append(appendOption);
	$("#team5").append(appendOption);
	
	$("#characterList").append(appendOption2);
});

function generateData() {
	
	var boss = $("#boss").val();
	var bossColor = "";
	if(boss == "1"){
		bossColor = "e_2";
	}else if(boss == "2"){
		bossColor = "e_5";
	}else if(boss == "3"){
		bossColor = "e_6";
	}else if(boss == "4"){
		bossColor = "e_1";
	}else if(boss == "5"){
		bossColor = "e_4";
	}
	
	var result = 
	"<tr class='" + bossColor + "'>" + 
		"<td>" + $("#time").val() + "</td>" + 
		"<td>" + boss + "王</td>" + 
		"<td>" + $("#player").val() + "</td>" + 
		"<td>" + 
			"<img src='./images/character/" + $("#team1").val() + ".png'>" +
			"<img src='./images/character/" + $("#team2").val() + ".png'>" +
			"<img src='./images/character/" + $("#team3").val() + ".png'>" +
			"<img src='./images/character/" + $("#team4").val() + ".png'>" +
			"<img src='./images/character/" + $("#team5").val() + ".png'>" +
		"</td>" + 
		"<td>" + $("#damage").val() + "</td>" + 
	"</tr>";
	
	$("#result").text(result);
}















