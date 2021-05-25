
var elem = document.getElementById("page");
$('.start_now').click(function () {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {  
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {  
        elem.msRequestFullscreen();
    }
})
var player = {
    position: 0,
}
// const base_Url = window.location.origin + '/ninja_warrior';
const base_Url = window.location.origin + '/';
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
let LAST_INDEX = 0;
let filterslot = {};
let GAIN_SCORE = 0;
let LOSE_SCORE = 0;
let DECREASE = false; 
const LEFT_PLACEMENT = 0;
RIGHT_PLACEMENT = 1;
const LEFT_CORNER = 0;
RIGHT_CORNER = 1;
 
const BLANK_COLOR = 0,
    ORANGE_COLOR = 1;
GREEN_COLOR = 2;
YELLOW_COLOR = 3;
WHITE_COLOR = 4;
const COLORS = ['', 'orange', 'green', 'yellow', 'white',]
 
const YELLOW_QU_ANS = [{
    id: 1,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/1.jpg',
    answer_text: "No, plastic  is not biodegradable."
},
{
    id: 2,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/2.jpg',
    answer_text: "No, metal is not biodegradable."
},
{
    id: 3,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 1,
    img: 'assets/images/yellow_card/3.jpg',
    answer_text: "Yes, paper is biodegradable."
},
{
    id: 4,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/4.jpg',
    answer_text: "No, glass is not biodegradable."
},
{
    id: 5,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 1,
    img: 'assets/images/yellow_card/5.jpg',
    answer_text: "Yes, food items are biodegradable."
},
{
    id: 6,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/6.jpg',
    answer_text: "No, tyres are not biodegradable."
},
{
    id: 7,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 1,
    img: 'assets/images/yellow_card/7.jpg',
    answer_text: "Yes, cloth is biodegradable."
},
{
    id: 8,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/8.jpg',
    answer_text: "No, plastic pens are not biodegradable."
},
{
    id: 9,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 1,
    img: 'assets/images/yellow_card/9.jpg',
    answer_text: "Yes, trees are biodegradable."
},
{
    id: 10,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/10.jpg',
    answer_text: "No, metal is not biodegradable."
},
{
    id: 11,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/11.jpg',
    answer_text: "No, plastic toys are not biodegradable."
},
{
    id: 12,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/12.jpg',
    answer_text: "No, rubber bands are not biodegradable."
},
{
    id: 13,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/14.jpg',
    answer_text: "No, metal is not biodegradable."
},
{
    id: 14,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 1,
    img: 'assets/images/yellow_card/14.jpg',
    answer_text: "Yes, tea bags without pins and tags are biodegradable."
},
{
    id: 15,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 1,
    img: 'assets/images/yellow_card/15.jpg',
    answer_text: "Yes, food items are biodegradable."
},
{
    id: 16,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/16.jpg',
    answer_text: "No, metal is not biodegradable."
},
{
    id: 17,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 1,
    img: 'assets/images/yellow_card/17.jpg',
    answer_text: "Yes, cloth is biodegradable."
},
{
    id: 18,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 1,
    img: 'assets/images/yellow_card/18.jpg',
    answer_text: "Yes, paper is biodegradable."
},
{
    id: 19,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/19.jpg',
    answer_text: "No, plastic cigarette filters are not biodegradable."
},
{
    id: 20,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 1,
    img: 'assets/images/yellow_card/20.jpg',
    answer_text: "Yes, food items are biodegradable."
},
{
    id: 21,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 1,
    img: 'assets/images/yellow_card/21.jpg',
    answer_text: "Yes, food items are biodegradable."
},
{
    id: 22,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 1,
    img: 'assets/images/yellow_card/22.jpg',
    answer_text: "Yes, bones are biodegradable."
},
{
    id: 23,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 1,
    img: 'assets/images/yellow_card/23.jpg',
    answer_text: "Yes, food  items are biodegradable."
},
{
    id: 24,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 1,
    img: 'assets/images/yellow_card/24.jpg',
    answer_text: "Yes, food items are biodegradable."
},
{
    id: 25,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/25.jpg',
    answer_text: "No, aluminium foil is not biodegradable."
},
{
    id: 26,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/26.jpg',
    answer_text: "No, polystyrene foam cups  are not biodegradable."
},
{
    id: 27,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/27.jpg',
    answer_text: "No, batteries are not biodegradable."
},
{
    id: 28,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/28.jpg',
    answer_text: "No, batteries are not biodegradable."
},
{
    id: 29,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 1,
    img: 'assets/images/yellow_card/29.jpg',
    answer_text: "Yes, wood is biodegradable."
},
{
    id: 30,
    question: "Is it biodegradable?",
    options: ["yes", "no"],
    answer: 2,
    img: 'assets/images/yellow_card/30.jpg',
    answer_text: "No, metal is not biodegradable."
},
]

const ORANGE_QU_ANS = [{
    id: 1,
    question: "Which type of waste is it?",
    options: ["Domestic Hazardous Waste", "Dry waste", "Electronic waste"],
    answer: 3,
    img: 'assets/images/orange/1.jpg',
    answer_text: "Electronic waste"
},
{
    id: 2,
    question: "Which type of waste is it?",
    options: ["Wet waste", "Dry waste", "Sanitary waste"],
    answer: 1,
    img: 'assets/images/orange/2.jpg',
    answer_text: "Wet waste"
},
{
    id: 3,
    question: "Which type of waste is it?",
    options: ["Dry waste", "Biomedical waste", "Domestic Hazardous Waste"],
    answer: 2,
    img: 'assets/images/orange/3.jpg',
    answer_text: "Biomedical waste"
},
{
    id: 4,
    question: "Which type of waste is it?",
    options: ["Domestic Hazardous Waste", "Biomedical waste", "Dry waste"],
    answer: 3,
    img: 'assets/images/orange/4.jpg',
    answer_text: "Dry waste"
},
{
    id: 5,
    question: "Which type of waste is it?",
    options: ["Wet waste", "Domestic Hazardous Waste", "Industrial waste"],
    answer: 2,
    img: 'assets/images/orange/5.jpg',
    answer_text: "Domestic Hazardous Waste"
},
{
    id: 6,
    question: "Which type of waste is it?",
    options: ["Biomedical waste", "Industrial waste", "Dry waste"],
    answer: 3,
    img: 'assets/images/orange/6.jpg',
    answer_text: "Dry waste"
},
{
    id: 7,
    question: "Which type of waste is it?",
    options: ["Domestic Hazardous Waste", "Electronic waste", "Dry waste"],
    answer: 2,
    img: 'assets/images/orange/7.jpg',
    answer_text: "Electronic waste"
},
{
    id: 8,
    question: "Which type of waste is it?",
    options: ["Dry waste", "Wet waste", "Biomedical waste"],
    answer: 2,
    img: 'assets/images/orange/8.jpg',
    answer_text: "Wet waste"
},
{
    id: 9,
    question: "Which type of waste is it?",
    options: ["Domestic Hazardous Waste", "Wet waste", "Dry waste"],
    answer: 2,
    img: 'assets/images/orange/9.jpg',
    answer_text: "Wet waste"
},
{
    id: 10,
    question: "Which type of waste is it?",
    options: ["Biomedical waste", "Industrial waste", "Domestic Hazardous Waste"],
    answer: 3,
    img: 'assets/images/orange/10.jpg',
    answer_text: "Domestic Hazardous Waste"
},
{
    id: 11,
    question: "Which type of waste is it?",
    options: ["Domestic Hazardous Waste", "Industrial Waste", "Biomedical Waste"],
    answer: 1,
    img: 'assets/images/orange/11.jpg',
    answer_text: "Domestic Hazardous Waste"
},
{
    id: 12,
    question: "Which type of waste is it?",
    options: ["Dry Waste", "Industrial Waste", "Wet Waste"],
    answer: 3,
    img: 'assets/images/orange/12.jpg',
    answer_text: "Wet Waste"
},
{
    id: 13,
    question: "Which type of waste is it?",
    options: ["Biomedical Waste", "Domestic Hazardous Waste", "Industrial Waste"],
    answer: 2,
    img: 'assets/images/orange/13.jpg',
    answer_text: "Domestic Hazardous Waste"
},
{
    id: 14,
    question: "Which type of waste is it?",
    options: ["Dry Waste", "Domestic Hazardous Waste", "Biomedical Waste"],
    answer: 3,
    img: 'assets/images/orange/14.jpg',
    answer_text: "Biomedical Waste"
},
{
    id: 15,
    question: "Which type of waste is it?",
    options: ["Biomedical Waste", "Dry Waste", "Domestic Hazardous Waste"],
    answer: 2,
    img: 'assets/images/orange/15.jpg',
    answer_text: "Dry Waste"
},
{
    id: 16,
    question: "Which type of waste is it?",
    options: ["Wet Waste", "Industrial Waste", "Dry Waste"],
    answer: 3,
    img: 'assets/images/orange/16.jpg',
    answer_text: "Dry Waste"
},
{
    id: 17,
    question: "Which type of waste is it?",
    options: ["Biomedical Waste", "Electronic Waste", "Industrial Waste"],
    answer: 2,
    img: 'assets/images/orange/17.jpg',
    answer_text: "Electronic Waste"
},
{
    id: 18,
    question: "Which type of waste is it?",
    options: ["Wet Waste", "Biomedical Waste", "Domestic Hazardous Waste"],
    answer: 1,
    img: 'assets/images/orange/18.jpg',
    answer_text: "Wet Waste"
},
{
    id: 19,
    question: "Which type of waste is it?",
    options: ["Dry Waste", "Domestic Hazardous Waste", "Sanitary Waste"],
    answer: 3,
    img: 'assets/images/orange/19.jpg',
    answer_text: "Sanitary Waste"
},
{
    id: 20,
    question: "Which type of waste is it?",
    options: ["Dry Waste", "Wet Waste", "Sanitary Waste"],
    answer: 2,
    img: 'assets/images/orange/20.jpg',
    answer_text: "Wet Waste"
},
{
    id: 21,
    question: "Which type of waste is it?",
    options: ["Dry Waste", "Domestic Hazardous Waste", "Industrial Waste"],
    answer: 1,
    img: 'assets/images/orange/21.jpg',
    answer_text: "Dry Waste"
},
{
    id: 22,
    question: "Which type of waste is it?",
    options: ["Biomedical Waste", "Electronic Waste", "Domestic Hazardous Waste"],
    answer: 2,
    img: 'assets/images/orange/22.jpg',
    answer_text: "Electronic Waste"
},
{
    id: 23,
    question: "Which type of waste is it?",
    options: ["Dry Waste", "Sanitary Waste", "Biomedical Waste"],
    answer: 3,
    img: 'assets/images/orange/23.jpg',
    answer_text: "Biomedical Waste"
},
{
    id: 24,
    question: "Which type of waste is it?",
    options: ["Industrial Waste", "Domestic Hazardous Waste", "Construction Waste"],
    answer: 3,
    img: 'assets/images/orange/24.jpg',
    answer_text: "Construction Waste"
},
{
    id: 25,
    question: "Which type of waste is it?",
    options: ["Dry Waste", "Biomedical Waste", "Wet Waste"],
    answer: 1,
    img: 'assets/images/orange/25.jpg',
    answer_text: "Dry Waste"
},
{
    id: 26,
    question: "Which type of waste is it?",
    options: ["Domestic Hazardous Waste", "Dry Waste", "Biomedical Waste"],
    answer: 2,
    img: 'assets/images/orange/26.jpg',
    answer_text: "Dry Waste"
},
{
    id: 27,
    question: "Which type of waste is it?",
    options: ["Dry Waste", "Wet Waste", "Construction Waste"],
    answer: 2,
    img: 'assets/images/orange/27.jpg',
    answer_text: "Wet Waste"
},
{
    id: 28,
    question: "Which type of waste is it?",
    options: ["Domestic Hazardous Waste", "Industrial Waste", "Electronic Waste"],
    answer: 3,
    img: 'assets/images/orange/28.jpg',
    answer_text: "Electronic Waste"
},
{
    id: 29,
    question: "Which type of waste is it?",
    options: ["Biomedical Waste", "Industrial Waste", "Electronic Waste"],
    answer: 3,
    img: 'assets/images/orange/29.jpg',
    answer_text: "Electronic Waste"
},
{
    id: 30,
    question: "Which type of waste is it?",
    options: ["Dry Waste", "Industrial Waste", "Wet Waste"],
    answer: 1,
    img: 'assets/images/orange/30.jpg',
    answer_text: "Dry Waste"
},
]

const GREEN_QU_ANS = [{
    id: 1,
    question: "Jasmine buys six small bottles of juice instead of a big one.",
    options: ["yes", "no"],
    answer: 2,
    answer_bold: "Not a green practice.",
    answer_text: "This generates more packaging waste that can’t be reused."
},
{
    id: 2,
    question: "Sana reuses the plastic bags she gets as packaging at least twice.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "Reusing plastic bags reduces waste."
},
{
    id: 3,
    question: "Ria uses disposable plastic cups to drink water at school",
    options: ["yes", "no"],
    answer: 2,
    answer_bold: "Not a green practice.",
    answer_text: "Disposable cups generate a lot of waste and also harm the environment. They are non- biodegradable."
},
{
    id: 4,
    question: "Jiya gifts saplings to her best friend instead of packed stationery items",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "It avoids the packaging waste, and plantation also benefits the environment."
},
{
    id: 5,
    question: "Chhotu uses a mobile phone for three to four years.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "Discarding mobile phones frequently generates electronic waste, which makes it difficult to process."
},
{
    id: 6,
    question: "Manas eats food as soon as it is prepared. He then throws the leftovers in the dustbin.",
    options: ["yes", "no"],
    answer: 2,
    answer_bold: "Not a green practice.",
    answer_text: "Food leftovers can be given away to the needy or cleaned and composted to generate natural fertiliser."
},
{
    id: 7,
    question: "Peter collects wet and dry waste in different bins.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "Segregating waste at source makes it easier to recycle and dispose of."
},
{
    id: 8,
    question: "Cheeku gets the waste badly dumped in front of his house removed by calling the concerned authorities.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "Our awareness of waste disposal around the house can help the whole community."
},
{
    id: 9,
    question: "Aarav burns the dry leaves collected in the garden to dispose of them.",
    options: ["yes", "no"],
    answer: 2,
    answer_bold: "Not a green practice.",
    answer_text: "Burning dry waste such as leaves creates air pollution."
},
{
    id: 10,
    question: "Chhaya carries her own steel mug to college and coffee shops.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "Carrying one’s own steel mug ensures that less plastic waste is created."
},
{
    id: 11,
    question: "Jhanvi buys fast fashion clothes and throws away the old clothes instead of donating them.",
    options: ["yes", "no"],
    answer: 2,
    answer_bold: "Not a green practice.",
    answer_text: "Fast fashion clothes are made by overexploiting natural resources. Jhanvi’s consumption is also very high."
},
{
    id: 12,
    question: "Raja disposes of spoiled food items in a separate bin and composts appropriate items.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "Composting is a green practice as it decreases the load on landfills + you get good quality manure, too!"
},
{
    id: 13,
    question: "Aditya prints all his documents on paper for easy reference.",
    options: ["yes", "no"],
    answer: 2,
    answer_bold: "Not a green practice.",
    answer_text: "If there is a digital alternative available, one should use as little paper as possible."
},
{
    id: 14,
    question: "Ranjan always carries a big cloth bag in his backpack.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "Carrying a reusable cloth bag ensures that one does not use single-use plastic bags to carry items."
},
{
    id: 15,
    question: "Arya loves new gadgets and buys all the latest ones as soon as they are launched.",
    options: ["yes", "no"],
    answer: 2,
    answer_bold: "Not a green practice.",
    answer_text: "Arya’s consumption is very high and will end up generating a lot of electronic waste."
},
{
    id: 16,
    question: "Vedic has stopped ordering food at home, which comes in disposable containers.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "Not ordering food online ensures that there is no extra packaging waste."
},
{
    id: 17,
    question: "Ayush dumps wet and dry waste together.",
    options: ["yes", "no"],
    answer: 2,
    answer_bold: "Not a green practice.",
    answer_text: "Waste segregation into wet and dry is the first step to effective waste management."
},
{
    id: 18,
    question: "Chitra uses paper towels to wipe her hands off at home.",
    options: ["yes", "no"],
    answer: 2,
    answer_bold: "Not a green practice.",
    answer_text: "Reusable cloth towels can be used instead of paper to avoid wastage."
},
{
    id: 19,
    question: "Shikha stocks fruits and vegetables in large quantities at home.",
    options: ["yes", "no"],
    answer: 2,
    answer_bold: "Not a green practice.",
    answer_text: "Stocking up perishables can lead to food wastage, which further results in toxic gas emissions."
},
{
    id: 20,
    question: "Karan prefers to shop online instead of buying from the market.",
    options: ["yes", "no"],
    answer: 2,
    answer_bold: "Not a green practice.",
    answer_text: "Shopping online generates extra packaging waste, which can be avoided by shopping locally."
},
{
    id: 21,
    question: "Suman collects all the plastic waste around the house every week and burns it.",
    options: ["yes", "no"],
    answer: 2,
    answer_bold: "Not a green practice.",
    answer_text: "Burning waste is extremely detrimental to the environment."
},
{
    id: 22,
    question: "Mona organises craft activity sessions regularly in her society where waste paper is used to make decoratives.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "Discarded items can be upcycled and reused to avoid waste."
},
{
    id: 23,
    question: "Shanu stores all electronic items in the house and gives it to the shopkeeper once every 15 days.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "Electronic waste must either be returned to the shop or given to an authorised dealer."
},
{
    id: 24,
    question: "Raunak and his friends collect waste from the nearby beach every Sunday and are also part of the cleaning drive in their city.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "Raunak and his friends help keep the surroundings clean by disposing of waste properly."
},
{
    id: 25,
    question: "Benny stores pickles and spices in glass jars instead of using jars made of plastic.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "Benny uses glass jars instead of plastic that can be reused and keeps the pickles and food fresh as well."
},
{
    id: 26,
    question: "Jeet has switched to e-reading this year instead of buying books.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "E-reading avoids excess waste and also saves trees in the process. But remember NOT to change your device frequently."
},
{
    id: 27,
    question: "Dhruv conducts a monthly ‘reuse reduce, recycle and recover’ drive in his neighbourhood.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "By initiating drives like these, Dhruv helps in segregation and better management of waste."
},
{
    id: 28,
    question: "Sana’s company manufactures plastic excessively.",
    options: ["yes", "no"],
    answer: 2,
    answer_bold: "Not a green practice.",
    answer_text: "Sana’s company manufactures plastic that adds to the already piling waste of non-biodegradable things. It eventually pollutes oceans and land."
},
{
    id: 29,
    question: "Diya and her friends have created an Eco Club to spread awareness in their school regarding littering.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "Diya’s initiative educates people about greener practice."
},
{
    id: 30,
    question: "Abdul only buys electronic items with a buy-back policy.",
    options: ["yes", "no"],
    answer: 1,
    answer_bold: "It is a green practice.",
    answer_text: "Buying products with a buy-back policy ensures that electronic waste is managed properly."
},
]
 
const GRID_DATA = [{
    id: 0,
    placement: null,
    corner: 0,
    direction: 0,
    data: {
        color: BLANK_COLOR,
        text: ''
    }
},
{
    id: 1,
    placement: null,
    direction: 0,
    data: {
        color: ORANGE_COLOR,
        text: ''
    }
},
{
    id: 2,
    placement: null,
    direction: 0,
    data: {
        color: GREEN_COLOR,
        text: ''
    }
},
{
    id: 3,
    placement: null,
    direction: 0,
    data: {
        color: YELLOW_COLOR,
        text: ''
    }
},
{
    id: 4,
    placement: null,
    direction: 0,
    data: {
        color: ORANGE_COLOR,
        text: ''
    }
},
{
    id: 5,
    placement: null,
    direction: 0,
    data: {
        color: GREEN_COLOR,
        text: ''
    }
},
{
    id: 6,
    placement: null,
    direction: -2,
    data: {
        color: WHITE_COLOR,
        text: 'Go Back Two Spaces'
    }
},
{
    id: 7,
    placement: null,
    direction: 0,
    data: {
        color: YELLOW_COLOR,
        text: ''
    }
},
{
    id: 8,
    placement: RIGHT_PLACEMENT,
    direction: 0,
    mover: 1,
    data: {
        color: GREEN_COLOR,
        text: ''
    }
},
{
    id: 16,
    placement: null,
    direction: 0,
    data: {
        color: ORANGE_COLOR,
        text: ''
    }
},
{
    id: 15,
    placement: null,
    direction: 0,
    data: {
        color: GREEN_COLOR,
        text: ''
    }
},
{
    id: 14,
    placement: null,
    direction: 0,
    data: {
        color: YELLOW_COLOR,
        text: ''
    }
},
{
    id: 13,
    placement: null,
    direction: 0,
    data: {
        color: ORANGE_COLOR,
        text: ''
    }
},
{
    id: 12,
    placement: null,
    direction: 2,
    data: {
        color: WHITE_COLOR,
        text: 'Move back two spaces'
    }
},
{
    id: 11,
    placement: null,
    direction: 0,
    data: {
        color: GREEN_COLOR,
        text: ''
    }
},
{
    id: 10,
    placement: null,
    direction: 0,
    data: {
        color: YELLOW_COLOR,
        text: ''
    }
},
{
    id: 9,
    placement: null,
    direction: 0,
    data: {
        color: ORANGE_COLOR,
        text: ''
    }
},
{
    id: 17,
    placement: LEFT_PLACEMENT,
    mover: 0,
    direction: -2,
    data: {
        color: WHITE_COLOR,
        text: 'Go back two spaces'
    }
},
{
    id: 18,
    placement: LEFT_PLACEMENT,
    direction: 0,
    data: {
        color: YELLOW_COLOR,
        text: ''
    }
},
{
    id: 19,
    placement: null,
    direction: 0,
    data: {
        color: GREEN_COLOR,
        text: ''
    }
},
{
    id: 20,
    placement: null,
    direction: 0,
    data: {
        color: ORANGE_COLOR,
        text: ''
    }
},
{
    id: 21,
    placement: null,
    direction: -18,
    data: {
        color: WHITE_COLOR,
        text: 'Go back to first yellow'
    }
},
{
    id: 22,
    placement: null,
    direction: 0,
    data: {
        color: YELLOW_COLOR,
        text: ''
    }
},
{
    id: 23,
    placement: null,
    direction: 0,
    data: {
        color: GREEN_COLOR,
        text: ''
    }
},
{
    id: 24,
    placement: null,
    direction: 0,
    data: {
        color: ORANGE_COLOR,
        text: ''
    }
},
{
    id: 25,
    placement: null,
    direction: 0,
    data: {
        color: YELLOW_COLOR,
        text: ''
    }
},
{
    id: 26,
    placement: RIGHT_PLACEMENT,
    direction: 0,
    mover: 1,
    data: {
        color: ORANGE_COLOR,
        text: ''
    }
},
{
    id: 34,
    placement: LEFT_PLACEMENT,
    direction: -2,
    data: {
        color: WHITE_COLOR,
        text: 'Go Back Two Spaces'
    }
},
{
    id: 33,
    placement: null,
    direction: 0,
    data: {
        color: GREEN_COLOR,
        text: ''
    }
},
{
    id: 32,
    placement: null,
    direction: 0,
    data: {
        color: YELLOW_COLOR,
        text: ''
    }
},
{
    id: 31,
    placement: null,
    direction: 0,
    data: {
        color: ORANGE_COLOR,
        text: ''
    }
},
{
    id: 30,
    placement: null,
    direction: -2,
    data: {
        color: WHITE_COLOR,
        text: 'Go Back Two Spaces'
    }
},
{
    id: 29,
    placement: null,
    direction: 0,
    data: {
        color: YELLOW_COLOR,
        text: ''
    }
},
{
    id: 28,
    placement: null,
    direction: 0,
    data: {
        color: GREEN_COLOR,
        text: ''
    }
},
{
    id: 27,
    placement: null,
    direction: -2,
    data: {
        color: WHITE_COLOR,
        text: 'Go Back Two Spaces'
    }
},
{
    id: 35,
    placement: LEFT_PLACEMENT,
    mover: 0,
    direction: 0,
    data: {
        color: ORANGE_COLOR,
        text: ''
    }
},
{
    id: 36,
    placement: LEFT_PLACEMENT,
    direction: 0,
    data: {
        color: YELLOW_COLOR,
        text: ''
    }
},
{
    id: 37,
    placement: null,
    direction: 0,
    data: {
        color: GREEN_COLOR,
        text: ''
    }
},
{
    id: 38,
    placement: null,
    direction: 0,
    data: {
        color: ORANGE_COLOR,
        text: ''
    }
},
{
    id: 39,
    placement: null,
    direction: -39,
    data: {
        color: WHITE_COLOR,
        text: 'Oops! Go back to START'
    }
},
{
    id: 40,
    placement: null,
    direction: 0,
    data: {
        color: YELLOW_COLOR,
        text: ''
    }
},
{
    id: 41,
    placement: null,
    direction: 0,
    data: {
        color: GREEN_COLOR,
        text: ''
    }
},
{
    id: 42,
    placement: null,
    direction: 0,
    data: {
        color: BLANK_COLOR,
        text: ''
    }
},
{
    id: 43,
    placement: null,
    corner: 1,
    direction: 0,
    data: {
        color: BLANK_COLOR,
        text: ''
    }
},
]

var WasteWarriorGame = (function () {



    function initUI() {
         
        const container1 = d3.select('.slot_container');
        container1.selectAll('.slot--item')
            .data(GRID_DATA)
            .enter()
            .append('div')
            .attr('class', d => d.placement === 1 ? 'float_end' : d.placement === 0 ? 'float_start' : null)
            .attr('id', d => 'cell_' + d.id)
            .classed('slot--item', true)
            .append('div')
            .attr('class', d => COLORS[d.data.color])
            .classed('box', true)
            .text(d => d.data.text)
        
        gsap.to('.page', { duration: 1, opacity: 1, y: -20, })
        gsap.to('#instruction_title', { duration: 1.5, y: -20 })
        gsap.to('.divider_show', { duration: 1.5, opacity: 1 })
        gsap.to('.start_now', { duration: 1, opacity: 1 });

    }
 
    function RandomizeDice() {
        var audio = new buzz.sound(`${base_Url}/assets/audios/dice.mp3`);
        audio.play()
        return Math.floor(Math.random() * 6) + 1; 
    }

    function RandomizeQuestionAns() {
        return Math.floor(Math.random() * 29);
    }

    var init = function () {
        initUI() 
    }


    var rollDice = function () {
        DECREASE = false
        $('#start_popup').slideUp("fast");
        $('#diceHandler').attr('disabled', 'disabled')
        var randm = RandomizeDice();
        console.log('player.position', player.position)
        var currentPosition = player.position;
        const previousPosition = player.position;
        localStorage.setItem('previousPosition', previousPosition)
        currentPosition += randm;

        if (currentPosition >= 42) {
            currentPosition = 42;
            $('#diceHandler').removeAttr('disabled', 'disabled')
        } else {
            if (currentPosition === 41) {
                sessionStorage.setItem('LAST_INDEX', 41)
            }
            var $cell = $("#cell_" + currentPosition);
            const slotObj = GRID_DATA.filter(e => e.id === currentPosition)[0];

            if (slotObj.data.color !== 4) {
                $cell.children().css({
                    'z-index': "99"
                })
            } else {
                $('#diceHandler').removeAttr('disabled', 'disabled')
            }

            move(slotObj, getItemAtId(previousPosition))
        }

        $('#dice-img').attr('src', 'assets/images/dice-' + randm + '.png')

    }

    const getItemAtId = (index) => {
        return GRID_DATA.find(item => item.id === index);
    }

    const isBetween = (left, right, index) => {
        return index >= left && index <= right
    }

    const move = (nextDataItem, currentDataItem) => {
        const cells = [];
        GRID_DATA.forEach((item) => {
            if (isBetween(currentDataItem.id, nextDataItem.id, item.id)) {
                if (item.mover === RIGHT_PLACEMENT) {
                    if (item.mover == 1) {
                        $('#mover img').css({ 'transform': 'rotateY(183deg)' })
                    } else {
                        $('#mover img').css({ 'transform': 'rotateY(2deg)' })
                    }
                } else if (item.mover === LEFT_PLACEMENT) {
                    if (item.mover == 0) {
                        $('#mover img').css({ 'transform': 'rotateY(2deg)' })
                    } else {
                        $('#mover img').css({ 'transform': 'rotateY(183deg)' })
                    }
                } else if (item.id === 39) {
                    $('#mover img').css({ 'transform': 'rotateY(2deg)' })
                }

                if (item.mover === LEFT_PLACEMENT || item.mover === RIGHT_PLACEMENT) {
                    const prevItemId = item.id - 1;
                    const nextItemId = item.id + 1;

                    if (isBetween(currentDataItem.id, nextDataItem.id, prevItemId)) {
                        cells.push(getItemAtId(prevItemId));
                    }
                    if (isBetween(currentDataItem.id, nextDataItem.id, nextItemId)) {
                        cells.push(getItemAtId(nextItemId));
                    }
                }
            }
        });
        cells.push(nextDataItem);

        const timeline = new gsap.timeline({

            onComplete: () => {
                if (nextDataItem.direction !== 0) {
                    DECREASE = true
                    const nextId = nextDataItem.id + nextDataItem.direction;
                    const newDataItem = GRID_DATA.find(item => item.id === nextId);
                    setTimeout(() => {
                        move(newDataItem, nextDataItem);
                        $('#mover').fadeOut()
                    }, 1000);
                    setTimeout(() => {
                        $('#mover').fadeIn()
                    }, 2500);

                } else {
                    if (nextDataItem.id !== 0) {
                        if (DECREASE == false) {
                            var $cell = $("#cell_" + player.position);
                            console.log('$cell', $cell)
                            $cell.children().css({
                                'z-index': "0"
                            })
                            if (nextDataItem.mover === RIGHT_PLACEMENT) {
                                if (nextDataItem.mover == 1) {
                                    $('#mover img').css({ 'transform': 'rotateY(183deg)' })
                                } else {
                                    $('#mover img').css({ 'transform': 'rotateY(2deg)' })
                                }
                            } else if (nextDataItem.mover === LEFT_PLACEMENT) {
                                if (nextDataItem.mover == 0) {
                                    $('#mover img').css({ 'transform': 'rotateY(2deg)' })
                                } else {
                                    $('#mover img').css({ 'transform': 'rotateY(183deg)' })
                                }
                            } else if (nextDataItem.id === 39) {
                                $('#mover img').css({ 'transform': 'rotateY(2deg)' })
                            }
                            var audio = new buzz.sound(`${base_Url}/assets/audios/Card-flip-sound-effect.mp3`);
                            audio.play()
                            setTimeout(() => {
                                $('.backdrop').css({
                                    'display': 'block',
                                    'opacity': 1
                                })
                                $('#modal').css({
                                    'transform': 'translate(-50%, -50%) rotateY(360deg)',
                                    'opacity': 1
                                }).addClass(COLORS[nextDataItem.data.color])
                            }, 1000);
                        }
                    }
                }
            }
        });
        const noOfItems = nextDataItem.id - currentDataItem.id;
        console.log(noOfItems);
        cells.forEach(cell => {
            const position = $(`#cell_${cell.id}`).position();
            timeline.to('#mover', {
                duration: 1.5,
                x: position.left - 0.5,
                y: position.top + 1.5,
                ease: Linear.easeNone
            });
        });
        if (DECREASE == false) {
            showQuestionAnswer(nextDataItem)
        }

        player.position = nextDataItem.id;
    }

    const showQuestionAnswer = (item) => {
        var modal_header = $('#modal_header');
        var modal_question = $('#modal_question');
        if (item.data.color === 1) {
            let random = RandomizeQuestionAns();
            console.log('random,', random)
            const getQuestion = ORANGE_QU_ANS[random];
            // modal_header.text('orange practice')
            filterslot = getQuestion;
            rendermodalData(getQuestion)
            $('#modal_img').attr('src', getQuestion.img)
        }
        if (item.data.color === 2) {
            let random = RandomizeQuestionAns();
            console.log('random,', random)
            const getQuestion = GREEN_QU_ANS[random];
            modal_header.text('green practice')
            filterslot = getQuestion;
            rendermodalData(getQuestion)
        }
        if (item.data.color === 3) {
            let random = RandomizeQuestionAns();
            console.log('random,', random)
            const getQuestion = YELLOW_QU_ANS[random];
            // modal_header.text('yellow practice')
            filterslot = getQuestion;
            rendermodalData(getQuestion)
            $('#modal_img').attr('src', getQuestion.img)
        }

        function rendermodalData(getQuestion) {
            modal_question.text(getQuestion.question)
            getQuestion.options.map((e, i) => {
                console.log(e)
                $('#actions').append(`<button class="ans_btn_${i + 1}" onclick=answerHandler(${i + 1})>${e}</button>`)
            })
        }

    }

    return {
        Init: init,
        RollDice: rollDice,
        Move: move
    }

})();

WasteWarriorGame.Init();

$('#diceHandler').click(function () {
    WasteWarriorGame.RollDice()
})


function answerHandler(e) {

    if (e == filterslot.answer) {
        var audio = new buzz.sound(`${base_Url}/assets/audios/mixkit-quick-win-video-game-notification-269.wav`);
        audio.play()
        GAIN_SCORE += 001
        $('.count_point').show().addClass('success');
        gsap.to('.count_point_gains', { duration: 1, opacity: 1, y: -65 })
        const lastindex = JSON.parse(sessionStorage.getItem("LAST_INDEX"))
        if (lastindex == 41) {
            sessionStorage.removeItem('LAST_INDEX')
            sessionStorage.setItem('end_game', true)

        }

    } else {
        DECREASE = true
        LOSE_SCORE += 001
        $('.count_point').show().addClass('error');
        gsap.to('.count_point_losse', { duration: 1, opacity: 1, y: -65 })
        var audio = new buzz.sound(`${base_Url}/assets/audios/zapsplat_multimedia_game_sound_retro_arcade_musical_positive_riff_001_63407.mp3`);
        audio.play()
        const previous = localStorage.getItem('previousPosition');
        console.log('previous', previous)
        const slotObj = GRID_DATA.filter(e => e.id == previous)[0];
        WasteWarriorGame.Move(slotObj, slotObj)
        $('#mover').fadeOut()
        setTimeout(() => {
            $('#mover').fadeIn()
        }, 1200);
    }
    $('button[class^="ans_btn_"]').css({ 'background': '#dc3030' })
    $(`.ans_btn_${filterslot.answer}`).addClass('active')
    $('#gain_score').text(GAIN_SCORE)
    $('#lose_score').text(LOSE_SCORE)
    setTimeout(() => {
        $('#content').fadeOut()
        $('#content1').fadeIn()
        $('#content1_text1').text(filterslot.answer_text)
        $('#content1_head').text(filterslot.answer_bold)
        $('#close').fadeIn()
    }, 2000);
}

$('#restart').click(function () {
    window.location.reload()
})

$('#close').click(function () {
    const IsEndGame = JSON.parse(sessionStorage.getItem('end_game')); 

    if (IsEndGame == true) {
        const position = $(`#cell_43`).position();
        const timeline = new gsap.timeline({

            onComplete: () => {
                setTimeout(() => {
                    var audio = new buzz.sound(`${base_Url}/assets/audios/game-win-sound-effect.mp3`);
                    audio.play()
                    $('.winner_popup').css({ 'transform': 'scale(1)' });
                }, 1000);

            }
        });
        timeline.to('#mover', {
            duration: 1.5,
            x: position.left - 10.5,
            y: position.top + 10.5,
            ease: Linear.easeNone
        });
        
        sessionStorage.removeItem('end_game')
    }

    var audio = new buzz.sound(`${base_Url}/assets/audios/mixkit-positive-interface-click-1112.wav`);
    audio.play();
    $('#close').fadeOut();
    gsap.to('.count_point_gains', { duration: 1, opacity: 0, y: 50 });
    gsap.to('.count_point_losse', { duration: 1, opacity: 0, y: 50 });
    $('#modal').css({
        'transform': 'translate(-50%, -50%) rotateY(270deg)',
        'opacity': 0
    });
    $('#content1').fadeOut();
    $('#content').fadeIn();
    $('.count_point').fadeOut().removeClass().addClass('count_point');
    $('#content1_text1').text('');
    $('#content1_head').text('');
    $('#modal_header').text('');
    $('#modal_question').text('');
    $('#modal_img').attr('src', '');
    $('button[class^="ans_btn_"]').removeClass('active');
    $('button[class^="ans_btn_"]').css({ 'background': '#fff' });
    $('#diceHandler').removeAttr('disabled', 'disabled');
    $('.slot--item').each(function () { $(this).children().css({ 'z-index': 0 }) });

    $('.backdrop').css({
        'display': 'none',
        'opacity': 0
    });
    $('#modal').css({
        'opacity': 0
    }).removeClass().addClass('modal');
    $('#actions button').remove();
});

$('#start_now').click(function () {
    var audio = new buzz.sound(`${base_Url}/assets/audios/mixkit-game-level-completed-2059.wav`);
    audio.play()
    gsap.to('.welcome_popup', { duration: 2, opacity: 0, })
    gsap.to('#instruction_title', { duration: .5, x: 400, opacity: 0 })
    gsap.to('.divider_show', { duration: .5, x: 400, opacity: 0 })
    gsap.to('.start_now', { duration: .5, x: 400, opacity: 0 });
    gsap.to('.description', { duration: .5, x: 400, opacity: 0 });
    gsap.to('.desc_instruction', { duration: .5, x: 400, opacity: 0 });
    setTimeout(() => {
        $('.welcome_popup').hide()
    }, 1000)
})

$(".start").click(function () {
    $('#start_popup').slideToggle("fast");
});

$('#instructor_title').click(function () {
    $('.welcome_popup').show().css({ 'opacity': 1 })
    gsap.to('#instruction_title', { duration: .5, x: 0, opacity: 1 })
    gsap.to('.divider_show', { duration: .5, x: 0, opacity: 1 })
    gsap.to('.start_now', { duration: .5, x: 0, opacity: 1 });
    gsap.to('.description', { duration: .5, x: 0, opacity: 1 });
    gsap.to('.desc_instruction', { duration: .5, x: 0, opacity: 1 });
    $('#close_now').show()
    $('#start_now').hide()
})

$('#close_now').click(function () {
    gsap.to('.welcome_popup', { duration: 2, opacity: 0, })
    gsap.to('#instruction_title', { duration: .5, x: 400, opacity: 0 })
    gsap.to('.divider_show', { duration: .5, x: 400, opacity: 0 })
    gsap.to('.start_now', { duration: .5, x: 400, opacity: 0 });
    gsap.to('.description', { duration: .5, x: 400, opacity: 0 });
    gsap.to('.desc_instruction', { duration: .5, x: 400, opacity: 0 });
    setTimeout(() => {
        $('.welcome_popup').hide()
    }, 1000)
})