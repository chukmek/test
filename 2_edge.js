/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['oswald']='<link href=\'http://fonts.googleapis.com/css?family=Oswald:400,300,700\' rel=\'stylesheet\' type=\'text/css\'>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg',
                type: 'image',
                rect: ['0px', '0px','1700px','723px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
            },
            {
                id: '_2_size',
                type: 'image',
                rect: ['0px', '0px','1700px','723px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"2_size.jpg",'0px','0px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['387px', '147px','344px','240px','auto', 'auto'],
                text: "TELLING AN ENGAGING BRAND STORY ACROSS MULTIPLE SOCIAL SERVICES IS A SHOT <br>IN THE DARK.",
                align: "left",
                font: ['oswald', 38, "rgba(255,255,255,1.00)", "300", "none", "normal"]
            },
            {
                id: 'Text2Copy',
                type: 'text',
                rect: ['387px', '69px','344px','240px','auto', 'auto'],
                text: "WE GET IT.",
                align: "left",
                font: ['oswald', 48, "rgba(255,255,255,1.00)", "500", "none", "normal"]
            },
            {
                id: 'box_twitt',
                type: 'image',
                rect: ['843px', '93px','193px','151px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"box_twitt.png",'0px','0px']
            },
            {
                id: 'box_tube',
                type: 'image',
                rect: ['759px', '250px','193px','151px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"box_tube.png",'0px','0px']
            },
            {
                id: 'box_inst',
                type: 'image',
                rect: ['1241px', '280px','155px','121px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"box_inst.png",'0px','0px']
            },
            {
                id: 'box_face',
                type: 'image',
                rect: ['1095px', '69px','174px','136px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"box_face.png",'0px','0px']
            },
            {
                id: 'box_fliptu',
                type: 'image',
                rect: ['965px', '177px','265px','205px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"box_fliptu.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_box_inst}": [
                ["style", "left", '1243px'],
                ["style", "top", '-125px']
            ],
            "${_box_tube}": [
                ["style", "left", '759px'],
                ["style", "top", '-156px']
            ],
            "${_box_twitt}": [
                ["style", "left", '843px'],
                ["style", "top", '-178px']
            ],
            "${_box_face}": [
                ["style", "left", '1095px'],
                ["style", "top", '-136px']
            ],
            "${_bg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text2Copy}": [
                ["style", "line-height", '48px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '387px'],
                ["style", "font-size", '48px'],
                ["style", "top", '69px'],
                ["style", "font-family", 'oswald'],
                ["style", "word-spacing", '0px'],
                ["style", "width", '344px']
            ],
            "${__2_size}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_Text2}": [
                ["style", "line-height", '48px'],
                ["style", "letter-spacing", '1px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '387px'],
                ["style", "font-size", '38px'],
                ["style", "top", '147px'],
                ["style", "font-family", 'oswald'],
                ["style", "word-spacing", '0px'],
                ["style", "width", '344px']
            ],
            "${_box_fliptu}": [
                ["style", "top", '-205px'],
                ["style", "opacity", '1'],
                ["style", "left", '962px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1700px'],
                ["style", "height", '723px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2036,
            autoPlay: true,
            timeline: [
                { id: "eid16", tween: [ "style", "${_box_inst}", "top", '280px', { fromValue: '-125px'}], position: 0, duration: 1250, easing: "easeOutBounce" },
                { id: "eid18", tween: [ "style", "${_box_face}", "top", '69px', { fromValue: '-136px'}], position: 0, duration: 1106, easing: "easeOutBounce" },
                { id: "eid14", tween: [ "style", "${_box_tube}", "top", '250px', { fromValue: '-156px'}], position: 0, duration: 1311, easing: "easeOutBounce" },
                { id: "eid8", tween: [ "style", "${_box_fliptu}", "top", '177px', { fromValue: '-205px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid6", tween: [ "style", "${_box_fliptu}", "left", '965px', { fromValue: '962px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid30", tween: [ "style", "${_box_inst}", "left", '1243px', { fromValue: '1243px'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_box_twitt}", "top", '93px', { fromValue: '-178px'}], position: 0, duration: 1214, easing: "easeOutBounce" },
                { id: "eid24", tween: [ "style", "${__2_size}", "opacity", '0.043296392276423', { fromValue: '0'}], position: 646, duration: 340 },
                { id: "eid25", tween: [ "style", "${__2_size}", "opacity", '1', { fromValue: '0.043296392276423'}], position: 986, duration: 1049 },
                { id: "eid19", tween: [ "style", "${_box_fliptu}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_box_fliptu}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-461678432");
