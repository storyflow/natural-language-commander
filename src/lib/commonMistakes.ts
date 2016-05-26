const MISTAKES = {
  "accommodate": "(?:accommodate|accomodate)",
  "accommodation": "(?:accommodation|accomodation)",
  "achieve": "(?:achieve|acheive)",
  "across": "(?:across|accross)",
  "aggressive": "(?:aggressive|agressive)",
  "aggression": "(?:aggression|agression)",
  "apparently": "(?:apparently|apparantly)",
  "appearance": "(?:appearance|appearence)",
  "argument": "(?:argument|arguement)",
  "assassination": "(?:assassination|assasination)",
  "basically": "(?:basically|basicly)",
  "beginning": "(?:beginning|begining)",
  "believe": "(?:believe|beleive|belive)",
  "bizarre": "(?:bizarre|bizzare)",
  "business": "(?:business|buisness)",
  "calendar": "(?:calendar|calender)",
  "Caribbean": "(?:Caribbean|Carribean)",
  "cemetery": "(?:cemetery|cemetary)",
  "chauffeur": "(?:chauffeur|chauffer)",
  "colleague": "(?:colleague|collegue)",
  "coming": "(?:coming|comming)",
  "committee": "(?:committee|commitee)",
  "completely": "(?:completely|completly)",
  "conscious": "(?:conscious|concious)",
  "curiosity": "(?:curiosity|curiousity)",
  "definitely": "(?:definitely|definately)",
  "dilemma": "(?:dilemma|dilemna)",
  "disappear": "(?:disappear|dissapear)",
  "disappoint": "(?:disappoint|dissapoint)",
  "ecstasy": "(?:ecstasy|ecstacy)",
  "embarrass": "(?:embarrass|embarass)",
  "environment": "(?:environment|enviroment)",
  "existence": "(?:existence|existance)",
  "Fahrenheit": "(?:Fahrenheit|Farenheit)",
  "familiar": "(?:familiar|familar)",
  "finally": "(?:finally|finaly)",
  "fluorescent": "(?:fluorescent|florescent)",
  "foreign": "(?:foreign|foriegn)",
  "foreseeable": "(?:foreseeable|forseeable)",
  "forty": "(?:forty|fourty)",
  "forward": "(?:forward|foward)",
  "friend": "(?:friend|freind)",
  "further": "(?:further|futher)",
  "gist": "(?:gist|jist)",
  "glamorous": "(?:glamorous|glamourous)",
  "government": "(?:government|goverment)",
  "guard": "(?:guard|gaurd)",
  "happened": "(?:happened|happend)",
  "harass": "(?:harass|harrass)",
  "harassment": "(?:harassment|harrassment)",
  "honorary": "(?:honorary|honourary)",
  "humorous": "(?:humorous|humourous)",
  "idiosyncrasy": "(?:idiosyncrasy|idiosyncracy)",
  "immediately": "(?:immediately|immediatly)",
  "incidentally": "(?:incidentally|incidently)",
  "independent": "(?:independent|independant)",
  "interrupt": "(?:interrupt|interupt)",
  "irresistible": "(?:irresistible|irresistable)",
  "knowledge": "(?:knowledge|knowlege)",
  "liaise, liaison": "(?:liaise, liaison|liase|liason)",
  "lollipop": "(?:lollipop|lollypop)",
  "millennium": "(?:millennium|millenium)",
  "millennia": "(?:millennia|millenia)",
  "Neanderthal": "(?:Neanderthal|Neandertal)",
  "necessary": "(?:necessary|neccessary)",
  "noticeable": "(?:noticeable|noticable)",
  "occasion": "(?:occasion|ocassion|occassion)",
  "occurred, occurring": "(?:occurred, occurring|occured|occuring)",
  "occurrence": "(?:occurrence|occurance|occurence)",
  "pavilion": "(?:pavilion|pavillion)",
  "persistent": "(?:persistent|persistant)",
  "pharaoh": "(?:pharaoh|pharoah)",
  "piece": "(?:piece|peice)",
  "politician": "(?:politician|politican)",
  "Portuguese": "(?:Portuguese|Portugese)",
  "possession": "(?:possession|posession)",
  "preferred": "(?:preferred|prefered)",
  "preferring": "(?:preferring|prefering)",
  "propaganda": "(?:propaganda|propoganda)",
  "publicly": "(?:publicly|publically)",
  "really": "(?:really|realy)",
  "receive": "(?:receive|recieve)",
  "referred": "(?:referred|refered)",
  "referring": "(?:referring|refering)",
  "religious": "(?:religious|religous)",
  "remember": "(?:remember|rember|remeber)",
  "resistance": "(?:resistance|resistence)",
  "sense": "(?:sense|sence)",
  "separate": "(?:separate|seperate)",
  "siege": "(?:siege|seige)",
  "successful": "(?:successful|succesful)",
  "supersede": "(?:supersede|supercede)",
  "surprise": "(?:surprise|suprise)",
  "tattoo": "(?:tattoo|tatoo)",
  "tendency": "(?:tendency|tendancy)",
  "therefore": "(?:therefore|therefor)",
  "threshold": "(?:threshold|threshhold)",
  "tomorrow": "(?:tomorrow|tommorow|tommorrow)",
  "tongue": "(?:tongue|tounge)",
  "truly": "(?:truly|truely)",
  "unforeseen": "(?:unforeseen|unforseen)",
  "unfortunately": "(?:unfortunately|unfortunatly)",
  "until": "(?:until|untill)",
  "weird": "(?:weird|wierd)",
  "wherever": "(?:wherever|whereever)",
  "which": "(?:which|wich)"
};

/** 
 * Return a regex group of corrections if the word is commonly misspelled,
 * or undefined if it is not. 
 * @param word - The word to check.
 * @returns The regex to check for the word.
 */
export default function (word: string): string {
  return MISTAKES[word];
}