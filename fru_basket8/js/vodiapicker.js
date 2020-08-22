
var characterList2 = [
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

var langArray = [];
characterList2.forEach(function(character){
  var imageName = character.substring(0, 3) + "T" + character.substring(4, 6);
  
  var item = '<li><img src="./images/character/' + imageName + '.png" value="' + imageName + '"/><span>'+ '' +'</span></li>';
  langArray.push(item);
})

$('#a').html(langArray);

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', '001TF6');

//change button stuff on click
$('#a li').click(function(){
   var img = $(this).find('img').attr("src");
   var value = $(this).find('img').attr('value');
   var text = this.innerText;
   var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  team1 = value;
  $(".b").toggle();
  //console.log(value);
});

$(".btn-select").click(function(){
        $(".b").toggle();
    });

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $('.btn-select').html(langArray[langIndex]);
  $('.btn-select').attr('value', sessionLang);
} else {
   var langIndex = langArray.indexOf('ch');
  console.log(langIndex);
  $('.btn-select').html(langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}


