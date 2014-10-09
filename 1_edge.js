/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
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
                rect: ['0px', '0px','1287px','669px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
            },
            {
                id: 'pack',
                type: 'image',
                rect: ['15px', '108px','391px','487px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pack.png",'0px','0px']
            },
            {
                id: 'holst',
                type: 'image',
                rect: ['317px', '-390px','277px','375px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"holst.png",'0px','0px']
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['465px', '68px','368px','97px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: 'text',
                type: 'image',
                rect: ['644px', '213px','430px','350px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"text.png",'0px','0px']
            },
            {
                id: 'header',
                type: 'image',
                rect: ['0px', '0px','1287px','50px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"header.jpg",'0px','0px']
            },
            {
                id: 'header_drop',
                type: 'image',
                rect: ['0px', '0px','1287px','302px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"header_drop.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_bg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_logo}": [
                ["style", "top", '68px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '465px']
            ],
            "${_header}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_pack}": [
                ["style", "top", '-487px'],
                ["style", "opacity", '0'],
                ["style", "left", '-195px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '669px'],
                ["style", "width", '1287px']
            ],
            "${_text}": [
                ["style", "top", '213px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '644px']
            ],
            "${_holst}": [
                ["style", "top", '-396px'],
                ["style", "opacity", '0'],
                ["style", "left", '317px']
            ],
            "${_header_drop}": [
                ["style", "left", '0px'],
                ["style", "top", '-302px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5500,
            autoPlay: true,
            timeline: [
                { id: "eid20", tween: [ "style", "${_pack}", "opacity", '1', { fromValue: '0'}], position: 325, duration: 2675, easing: "easeInQuad" },
                { id: "eid9", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0.000000'}], position: 2250, duration: 1126 },
                { id: "eid28", tween: [ "style", "${_header_drop}", "top", '0px', { fromValue: '-302px'}], position: 3376, duration: 2124, easing: "easeInOutElastic" },
                { id: "eid26", tween: [ "style", "${_header}", "opacity", '1', { fromValue: '0.000000'}], position: 2250, duration: 1678 },
                { id: "eid29", tween: [ "style", "${_header}", "opacity", '0', { fromValue: '1'}], position: 3928, duration: 1572 },
                { id: "eid16", tween: [ "style", "${_pack}", "top", '165px', { fromValue: '-487px'}], position: 325, duration: 2675, easing: "easeInQuad" },
                { id: "eid13", tween: [ "style", "${_holst}", "top", '207px', { fromValue: '-396px'}], position: 500, duration: 2500, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_pack}", "left", '43px', { fromValue: '-195px'}], position: 325, duration: 2675, easing: "easeInQuad" },
                { id: "eid22", tween: [ "style", "${_holst}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 2500, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_text}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 2500 }            ]
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
})(jQuery, AdobeEdge, "EDGE-481188409");
