/***************************** 
 * Psychopyfinalproject *
 *****************************/


// store info about the experiment session:
let expName = 'psychopyfinalproject';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
flowScheduler.add(ECR_SRoutineBegin());
flowScheduler.add(ECR_SRoutineEachFrame());
flowScheduler.add(ECR_SRoutineEnd());
flowScheduler.add(ECR_S_2RoutineBegin());
flowScheduler.add(ECR_S_2RoutineEachFrame());
flowScheduler.add(ECR_S_2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(Thank_youRoutineBegin());
flowScheduler.add(Thank_youRoutineEachFrame());
flowScheduler.add(Thank_youRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'emotions_and_text.xlsx', 'path': 'emotions_and_text.xlsx'},
    {'name': 'M_8_MichaelScott_Anxiety.mp4', 'path': 'M_8_MichaelScott_Anxiety.mp4'},
    {'name': 'M_11_MichaelScott_sadness.mp4', 'path': 'M_11_MichaelScott_sadness.mp4'},
    {'name': 'M_13_MichaelScott_Irritation.mp4', 'path': 'M_13_MichaelScott_Irritation.mp4'},
    {'name': 'M_4_MichaelScott_Pleasure.mp4', 'path': 'M_4_MichaelScott_Pleasure.mp4'},
    {'name': 'M_6_MichaelScott_Interest.mp4', 'path': 'M_6_MichaelScott_Interest.mp4'},
    {'name': 'M_1_MichaelScott_Pride.mp4', 'path': 'M_1_MichaelScott_Pride.mp4'},
    {'name': 'M_9_MichaelScott_Fear.mp4', 'path': 'M_9_MichaelScott_Fear.mp4'},
    {'name': 'M_2_MichaelScott_Joy.mp4', 'path': 'M_2_MichaelScott_Joy.mp4'},
    {'name': 'M_3_MichaelScott_Amusement.mp4', 'path': 'M_3_MichaelScott_Amusement.mp4'},
    {'name': 'M_7_MichaelScott_Surprise.mp4', 'path': 'M_7_MichaelScott_Surprise.mp4'},
    {'name': 'M_12_MichaelScott_Disgust.mp4', 'path': 'M_12_MichaelScott_Disgust.mp4'},
    {'name': 'M_10_MichaelScott_Despair.mp4', 'path': 'M_10_MichaelScott_Despair.mp4'},
    {'name': 'M_14_MichaelScott_Anger.mp4', 'path': 'M_14_MichaelScott_Anger.mp4'},
    {'name': 'M_5_MichaelScott_Relief.mp4', 'path': 'M_5_MichaelScott_Relief.mp4'},
    {'name': 'F_7_LeslieKnope_Suprise.mp4', 'path': 'F_7_LeslieKnope_Suprise.mp4'},
    {'name': 'F_9_LeslieKnope_Fear.mp4', 'path': 'F_9_LeslieKnope_Fear.mp4'},
    {'name': 'F_10_LeslieKnope_Despair.mp4', 'path': 'F_10_LeslieKnope_Despair.mp4'},
    {'name': 'F_6_LeslieKnope_Interest.mp4', 'path': 'F_6_LeslieKnope_Interest.mp4'},
    {'name': 'F_1_LeslieKnope_Pride.mp4', 'path': 'F_1_LeslieKnope_Pride.mp4'},
    {'name': 'F_12_LeslieKnope_Disgust.mp4', 'path': 'F_12_LeslieKnope_Disgust.mp4'},
    {'name': 'F_8_LeslieKnope_Anxiety.mp4', 'path': 'F_8_LeslieKnope_Anxiety.mp4'},
    {'name': 'F_2_LeslieKnope_Joy.mp4', 'path': 'F_2_LeslieKnope_Joy.mp4'},
    {'name': 'F_11_LeslieKnope_Sadness.mp4', 'path': 'F_11_LeslieKnope_Sadness.mp4'},
    {'name': 'F_4_LeslieKnope_Pleasure.mp4', 'path': 'F_4_LeslieKnope_Pleasure.mp4'},
    {'name': 'F_13_LeslieKnope_Irritation.mp4', 'path': 'F_13_LeslieKnope_Irritation.mp4'},
    {'name': 'F_14_LeslieKnope_Anger.mp4', 'path': 'F_14_LeslieKnope_Anger.mp4'},
    {'name': 'F_3_LeslieKnope_Amusement.mp4', 'path': 'F_3_LeslieKnope_Amusement.mp4'},
    {'name': 'F_5_LeslieKnope_Relief.mp4', 'path': 'F_5_LeslieKnope_Relief.mp4'},
    {'name': 'I_5_Kevin_Relief.mp4', 'path': 'I_5_Kevin_Relief.mp4'},
    {'name': 'I_4_Ann_Pleasure.mp4', 'path': 'I_4_Ann_Pleasure.mp4'},
    {'name': 'I_7_April_Surprise.mp4', 'path': 'I_7_April_Surprise.mp4'},
    {'name': 'I_2_Chris_Joy.mp4', 'path': 'I_2_Chris_Joy.mp4'},
    {'name': 'I_11_Dwight_Sadness.mp4', 'path': 'I_11_Dwight_Sadness.mp4'},
    {'name': 'I_6_Meredith_Interest.mp4', 'path': 'I_6_Meredith_Interest.mp4'},
    {'name': 'I_3_Phyllis_Amusement.mp4', 'path': 'I_3_Phyllis_Amusement.mp4'},
    {'name': 'I_8_Tom_Anxiety.mp4', 'path': 'I_8_Tom_Anxiety.mp4'},
    {'name': 'I_13_Angela_Irritation.mp4', 'path': 'I_13_Angela_Irritation.mp4'},
    {'name': 'I_14_AndyDwyer_Anger.mp4', 'path': 'I_14_AndyDwyer_Anger.mp4'},
    {'name': 'I_1_PamHalpert_Pride.mp4', 'path': 'I_1_PamHalpert_Pride.mp4'},
    {'name': 'I_10_Ron_Despair.mp4', 'path': 'I_10_Ron_Despair.mp4'},
    {'name': 'I_9_BenWyatt_Fear.mp4', 'path': 'I_9_BenWyatt_Fear.mp4'},
    {'name': 'I_12_Kelly_Disgust.mp4', 'path': 'I_12_Kelly_Disgust.mp4'},
    {'name': 'ECR_rating.jpg', 'path': 'ECR_rating.jpg'},
    {'name': 'ECR-S questions.jpg', 'path': 'ECR-S questions.jpg'},
    {'name': 'ECR-S questions 2.jpg', 'path': 'ECR-S questions 2.jpg'},
    {'name': 'GERT-S.jpg', 'path': 'GERT-S.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var text;
var key_resp_instructions;
var ECR_SClock;
var instruction_ecr_s;
var rating_scale;
var ECR_S_image;
var q1_slider;
var q2_slider;
var q3_slider;
var q4_slider;
var q5_slider;
var q6_slider;
var key_resp_space;
var ECR_S_2Clock;
var instruction_ecr_s_2;
var rating_scale_2;
var ECR_S_image_2;
var q1_slider_2;
var q2_slider_2;
var q3_slider_2;
var q4_slider_2;
var q5_slider_2;
var q6_slider_2;
var key_resp_space_2;
var Emotion_recognition_oneClock;
var text_prompt;
var emotion_recognitionClock;
var emotion_recognition;
var key_resp_2;
var emotion_selectionClock;
var text_choice_of_emotion;
var emotion_wheel;
var Text_box_response;
var key_resp;
var Thank_youClock;
var text_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Welcome to the Geneva Emotional Recognition-Short Experiment. This experiment involves short clips of actors expressing a specific emotion. You will watch the clip and then select which emotion the actor was expressing. You will press the space button once done with the selection to move to the next clip. There will be a total of fourteen emotions to go through. \u2028Press space to begin the experiment. ',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_instructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ECR_S"
  ECR_SClock = new util.Clock();
  instruction_ecr_s = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_ecr_s',
    text: 'Read the following statements on this page and the next, then indicate how much you agree or disagree by selecting a rating for each question. Press "space" to move to the next page.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  rating_scale = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rating_scale', units : undefined, 
    image : 'ECR_rating.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.19, 0.35], 
    draggable: false,
    size : [0.88, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  ECR_S_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ECR_S_image', units : undefined, 
    image : 'ECR-S questions.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.45), (- 0.04)], 
    draggable: false,
    size : [0.4, 0.65],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  q1_slider = new visual.Slider({
    win: psychoJS.window, name: 'q1_slider',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0.2, 0.24], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([1.0, 1.0, 1.0]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  q2_slider = new visual.Slider({
    win: psychoJS.window, name: 'q2_slider',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0.2, 0.13], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([1.0, 1.0, 1.0]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  q3_slider = new visual.Slider({
    win: psychoJS.window, name: 'q3_slider',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0.2, 0.02], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([1.0, 1.0, 1.0]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  q4_slider = new visual.Slider({
    win: psychoJS.window, name: 'q4_slider',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0.2, (- 0.08)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  q5_slider = new visual.Slider({
    win: psychoJS.window, name: 'q5_slider',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0.2, (- 0.18)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([1.0, 1.0, 1.0]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -7, 
    flip: false,
  });
  
  q6_slider = new visual.Slider({
    win: psychoJS.window, name: 'q6_slider',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0.2, (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([1.0, 1.0, 1.0]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  key_resp_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ECR_S_2"
  ECR_S_2Clock = new util.Clock();
  instruction_ecr_s_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_ecr_s_2',
    text: 'Read the following statements, then indicate how much you agree or disagree by selecting a rating for each question. Press "space" when you\'ve completed the ratings.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.44], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  rating_scale_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rating_scale_2', units : undefined, 
    image : 'ECR_rating.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.19, 0.35], 
    draggable: false,
    size : [0.88, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  ECR_S_image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ECR_S_image_2', units : undefined, 
    image : 'ECR-S questions 2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.45), (- 0.04)], 
    draggable: false,
    size : [0.4, 0.65],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  q1_slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'q1_slider_2',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0.2, 0.24], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([1.0, 1.0, 1.0]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  q2_slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'q2_slider_2',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0.2, 0.13], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([1.0, 1.0, 1.0]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  q3_slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'q3_slider_2',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0.2, 0.02], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([1.0, 1.0, 1.0]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  q4_slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'q4_slider_2',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0.2, (- 0.08)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([1.0, 1.0, 1.0]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  q5_slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'q5_slider_2',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0.2, (- 0.18)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([1.0, 1.0, 1.0]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -7, 
    flip: false,
  });
  
  q6_slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'q6_slider_2',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0.2, (- 0.3)], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.015, ticks: [],
    granularity: 1, style: ["RADIO"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color('Red'), lineColor: new util.Color([1.0, 1.0, 1.0]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  key_resp_space_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Emotion_recognition_one"
  Emotion_recognition_oneClock = new util.Clock();
  text_prompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_prompt',
    text: '',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  emotion_recognitionClock = new util.Clock();
  emotion_recognition = new visual.MovieStim({
    win: psychoJS.window,
    name: 'emotion_recognition',
    units: psychoJS.window.units,
    movie: undefined,
    pos: [0, 0],
    anchor: 'center',
    size: [0.65, 0.65],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: -1
    });
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "emotion_selection"
  emotion_selectionClock = new util.Clock();
  text_choice_of_emotion = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_choice_of_emotion',
    text: '',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0.35], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  emotion_wheel = new visual.ImageStim({
    win : psychoJS.window,
    name : 'emotion_wheel', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  Text_box_response = new visual.TextBox({
    win: psychoJS.window,
    name: 'Text_box_response',
    text: '',
    placeholder: 'undefined',
    font: 'Arial',
    pos: [0, (- 0.35)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 0.05,
    size: [0.7, 0.15],  units: undefined, 
    ori: 0.0,
    color: [(- 1.0), (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: [0.5059, 0.5059, 0.5059], borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Thank_you"
  Thank_youClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Thank you for participating in this experiment!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var InstructionsMaxDurationReached;
var _key_resp_instructions_allKeys;
var InstructionsMaxDuration;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    InstructionsClock.reset();
    routineTimer.reset();
    InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_instructions.keys = undefined;
    key_resp_instructions.rt = undefined;
    _key_resp_instructions_allKeys = [];
    psychoJS.experiment.addData('Instructions.started', globalClock.getTime());
    InstructionsMaxDuration = null
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(text);
    InstructionsComponents.push(key_resp_instructions);
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *key_resp_instructions* updates
    if (t >= 0.0 && key_resp_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instructions.tStart = t;  // (not accounting for frame time here)
      key_resp_instructions.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instructions.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instructions.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instructions.clearEvents(); });
    }
    
    if (key_resp_instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instructions.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instructions_allKeys = _key_resp_instructions_allKeys.concat(theseKeys);
      if (_key_resp_instructions_allKeys.length > 0) {
        key_resp_instructions.keys = _key_resp_instructions_allKeys[_key_resp_instructions_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instructions.rt = _key_resp_instructions_allKeys[_key_resp_instructions_allKeys.length - 1].rt;
        key_resp_instructions.duration = _key_resp_instructions_allKeys[_key_resp_instructions_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_instructions.corr, level);
    }
    psychoJS.experiment.addData('key_resp_instructions.keys', key_resp_instructions.keys);
    if (typeof key_resp_instructions.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_instructions.rt', key_resp_instructions.rt);
        psychoJS.experiment.addData('key_resp_instructions.duration', key_resp_instructions.duration);
        routineTimer.reset();
        }
    
    key_resp_instructions.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ECR_SMaxDurationReached;
var _key_resp_space_allKeys;
var ECR_SMaxDuration;
var ECR_SComponents;
function ECR_SRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ECR_S' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ECR_SClock.reset();
    routineTimer.reset();
    ECR_SMaxDurationReached = false;
    // update component parameters for each repeat
    q1_slider.reset()
    q2_slider.reset()
    q3_slider.reset()
    q4_slider.reset()
    q5_slider.reset()
    q6_slider.reset()
    key_resp_space.keys = undefined;
    key_resp_space.rt = undefined;
    _key_resp_space_allKeys = [];
    psychoJS.experiment.addData('ECR_S.started', globalClock.getTime());
    ECR_SMaxDuration = null
    // keep track of which components have finished
    ECR_SComponents = [];
    ECR_SComponents.push(instruction_ecr_s);
    ECR_SComponents.push(rating_scale);
    ECR_SComponents.push(ECR_S_image);
    ECR_SComponents.push(q1_slider);
    ECR_SComponents.push(q2_slider);
    ECR_SComponents.push(q3_slider);
    ECR_SComponents.push(q4_slider);
    ECR_SComponents.push(q5_slider);
    ECR_SComponents.push(q6_slider);
    ECR_SComponents.push(key_resp_space);
    
    ECR_SComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ECR_SRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ECR_S' ---
    // get current time
    t = ECR_SClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_ecr_s* updates
    if (t >= 0.0 && instruction_ecr_s.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_ecr_s.tStart = t;  // (not accounting for frame time here)
      instruction_ecr_s.frameNStart = frameN;  // exact frame index
      
      instruction_ecr_s.setAutoDraw(true);
    }
    
    
    // *rating_scale* updates
    if (t >= 0.0 && rating_scale.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rating_scale.tStart = t;  // (not accounting for frame time here)
      rating_scale.frameNStart = frameN;  // exact frame index
      
      rating_scale.setAutoDraw(true);
    }
    
    
    // *ECR_S_image* updates
    if (t >= 0.0 && ECR_S_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ECR_S_image.tStart = t;  // (not accounting for frame time here)
      ECR_S_image.frameNStart = frameN;  // exact frame index
      
      ECR_S_image.setAutoDraw(true);
    }
    
    
    // *q1_slider* updates
    if (t >= 0.0 && q1_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q1_slider.tStart = t;  // (not accounting for frame time here)
      q1_slider.frameNStart = frameN;  // exact frame index
      
      q1_slider.setAutoDraw(true);
    }
    
    
    // *q2_slider* updates
    if (t >= 0.0 && q2_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q2_slider.tStart = t;  // (not accounting for frame time here)
      q2_slider.frameNStart = frameN;  // exact frame index
      
      q2_slider.setAutoDraw(true);
    }
    
    
    // *q3_slider* updates
    if (t >= 0.0 && q3_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q3_slider.tStart = t;  // (not accounting for frame time here)
      q3_slider.frameNStart = frameN;  // exact frame index
      
      q3_slider.setAutoDraw(true);
    }
    
    
    // *q4_slider* updates
    if (t >= 0.0 && q4_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q4_slider.tStart = t;  // (not accounting for frame time here)
      q4_slider.frameNStart = frameN;  // exact frame index
      
      q4_slider.setAutoDraw(true);
    }
    
    
    // *q5_slider* updates
    if (t >= 0.0 && q5_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q5_slider.tStart = t;  // (not accounting for frame time here)
      q5_slider.frameNStart = frameN;  // exact frame index
      
      q5_slider.setAutoDraw(true);
    }
    
    
    // *q6_slider* updates
    if (t >= 0.0 && q6_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q6_slider.tStart = t;  // (not accounting for frame time here)
      q6_slider.frameNStart = frameN;  // exact frame index
      
      q6_slider.setAutoDraw(true);
    }
    
    
    // *key_resp_space* updates
    if (t >= 0.0 && key_resp_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_space.tStart = t;  // (not accounting for frame time here)
      key_resp_space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_space.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_space.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_space.clearEvents(); });
    }
    
    if (key_resp_space.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_space.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_space_allKeys = _key_resp_space_allKeys.concat(theseKeys);
      if (_key_resp_space_allKeys.length > 0) {
        key_resp_space.keys = _key_resp_space_allKeys[_key_resp_space_allKeys.length - 1].name;  // just the last key pressed
        key_resp_space.rt = _key_resp_space_allKeys[_key_resp_space_allKeys.length - 1].rt;
        key_resp_space.duration = _key_resp_space_allKeys[_key_resp_space_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ECR_SComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ECR_SRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ECR_S' ---
    ECR_SComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ECR_S.stopped', globalClock.getTime());
    psychoJS.experiment.addData('q1_slider.response', q1_slider.getRating());
    psychoJS.experiment.addData('q1_slider.rt', q1_slider.getRT());
    psychoJS.experiment.addData('q2_slider.response', q2_slider.getRating());
    psychoJS.experiment.addData('q2_slider.rt', q2_slider.getRT());
    psychoJS.experiment.addData('q3_slider.response', q3_slider.getRating());
    psychoJS.experiment.addData('q3_slider.rt', q3_slider.getRT());
    psychoJS.experiment.addData('q4_slider.response', q4_slider.getRating());
    psychoJS.experiment.addData('q4_slider.rt', q4_slider.getRT());
    psychoJS.experiment.addData('q5_slider.response', q5_slider.getRating());
    psychoJS.experiment.addData('q5_slider.rt', q5_slider.getRT());
    psychoJS.experiment.addData('q6_slider.response', q6_slider.getRating());
    psychoJS.experiment.addData('q6_slider.rt', q6_slider.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_space.corr, level);
    }
    psychoJS.experiment.addData('key_resp_space.keys', key_resp_space.keys);
    if (typeof key_resp_space.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_space.rt', key_resp_space.rt);
        psychoJS.experiment.addData('key_resp_space.duration', key_resp_space.duration);
        routineTimer.reset();
        }
    
    key_resp_space.stop();
    // the Routine "ECR_S" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ECR_S_2MaxDurationReached;
var _key_resp_space_2_allKeys;
var ECR_S_2MaxDuration;
var ECR_S_2Components;
function ECR_S_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ECR_S_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ECR_S_2Clock.reset();
    routineTimer.reset();
    ECR_S_2MaxDurationReached = false;
    // update component parameters for each repeat
    q1_slider_2.reset()
    q2_slider_2.reset()
    q3_slider_2.reset()
    q4_slider_2.reset()
    q5_slider_2.reset()
    q6_slider_2.reset()
    key_resp_space_2.keys = undefined;
    key_resp_space_2.rt = undefined;
    _key_resp_space_2_allKeys = [];
    psychoJS.experiment.addData('ECR_S_2.started', globalClock.getTime());
    ECR_S_2MaxDuration = null
    // keep track of which components have finished
    ECR_S_2Components = [];
    ECR_S_2Components.push(instruction_ecr_s_2);
    ECR_S_2Components.push(rating_scale_2);
    ECR_S_2Components.push(ECR_S_image_2);
    ECR_S_2Components.push(q1_slider_2);
    ECR_S_2Components.push(q2_slider_2);
    ECR_S_2Components.push(q3_slider_2);
    ECR_S_2Components.push(q4_slider_2);
    ECR_S_2Components.push(q5_slider_2);
    ECR_S_2Components.push(q6_slider_2);
    ECR_S_2Components.push(key_resp_space_2);
    
    ECR_S_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ECR_S_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ECR_S_2' ---
    // get current time
    t = ECR_S_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_ecr_s_2* updates
    if (t >= 0.0 && instruction_ecr_s_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_ecr_s_2.tStart = t;  // (not accounting for frame time here)
      instruction_ecr_s_2.frameNStart = frameN;  // exact frame index
      
      instruction_ecr_s_2.setAutoDraw(true);
    }
    
    
    // *rating_scale_2* updates
    if (t >= 0.0 && rating_scale_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rating_scale_2.tStart = t;  // (not accounting for frame time here)
      rating_scale_2.frameNStart = frameN;  // exact frame index
      
      rating_scale_2.setAutoDraw(true);
    }
    
    
    // *ECR_S_image_2* updates
    if (t >= 0.0 && ECR_S_image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ECR_S_image_2.tStart = t;  // (not accounting for frame time here)
      ECR_S_image_2.frameNStart = frameN;  // exact frame index
      
      ECR_S_image_2.setAutoDraw(true);
    }
    
    
    // *q1_slider_2* updates
    if (t >= 0.0 && q1_slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q1_slider_2.tStart = t;  // (not accounting for frame time here)
      q1_slider_2.frameNStart = frameN;  // exact frame index
      
      q1_slider_2.setAutoDraw(true);
    }
    
    
    // *q2_slider_2* updates
    if (t >= 0.0 && q2_slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q2_slider_2.tStart = t;  // (not accounting for frame time here)
      q2_slider_2.frameNStart = frameN;  // exact frame index
      
      q2_slider_2.setAutoDraw(true);
    }
    
    
    // *q3_slider_2* updates
    if (t >= 0.0 && q3_slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q3_slider_2.tStart = t;  // (not accounting for frame time here)
      q3_slider_2.frameNStart = frameN;  // exact frame index
      
      q3_slider_2.setAutoDraw(true);
    }
    
    
    // *q4_slider_2* updates
    if (t >= 0.0 && q4_slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q4_slider_2.tStart = t;  // (not accounting for frame time here)
      q4_slider_2.frameNStart = frameN;  // exact frame index
      
      q4_slider_2.setAutoDraw(true);
    }
    
    
    // *q5_slider_2* updates
    if (t >= 0.0 && q5_slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q5_slider_2.tStart = t;  // (not accounting for frame time here)
      q5_slider_2.frameNStart = frameN;  // exact frame index
      
      q5_slider_2.setAutoDraw(true);
    }
    
    
    // *q6_slider_2* updates
    if (t >= 0.0 && q6_slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q6_slider_2.tStart = t;  // (not accounting for frame time here)
      q6_slider_2.frameNStart = frameN;  // exact frame index
      
      q6_slider_2.setAutoDraw(true);
    }
    
    
    // *key_resp_space_2* updates
    if (t >= 0.0 && key_resp_space_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_space_2.tStart = t;  // (not accounting for frame time here)
      key_resp_space_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_space_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_space_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_space_2.clearEvents(); });
    }
    
    if (key_resp_space_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_space_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_space_2_allKeys = _key_resp_space_2_allKeys.concat(theseKeys);
      if (_key_resp_space_2_allKeys.length > 0) {
        key_resp_space_2.keys = _key_resp_space_2_allKeys[_key_resp_space_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_space_2.rt = _key_resp_space_2_allKeys[_key_resp_space_2_allKeys.length - 1].rt;
        key_resp_space_2.duration = _key_resp_space_2_allKeys[_key_resp_space_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ECR_S_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ECR_S_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ECR_S_2' ---
    ECR_S_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ECR_S_2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('q1_slider_2.response', q1_slider_2.getRating());
    psychoJS.experiment.addData('q1_slider_2.rt', q1_slider_2.getRT());
    psychoJS.experiment.addData('q2_slider_2.response', q2_slider_2.getRating());
    psychoJS.experiment.addData('q2_slider_2.rt', q2_slider_2.getRT());
    psychoJS.experiment.addData('q3_slider_2.response', q3_slider_2.getRating());
    psychoJS.experiment.addData('q3_slider_2.rt', q3_slider_2.getRT());
    psychoJS.experiment.addData('q4_slider_2.response', q4_slider_2.getRating());
    psychoJS.experiment.addData('q4_slider_2.rt', q4_slider_2.getRT());
    psychoJS.experiment.addData('q5_slider_2.response', q5_slider_2.getRating());
    psychoJS.experiment.addData('q5_slider_2.rt', q5_slider_2.getRT());
    psychoJS.experiment.addData('q6_slider_2.response', q6_slider_2.getRating());
    psychoJS.experiment.addData('q6_slider_2.rt', q6_slider_2.getRT());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_space_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_space_2.keys', key_resp_space_2.keys);
    if (typeof key_resp_space_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_space_2.rt', key_resp_space_2.rt);
        psychoJS.experiment.addData('key_resp_space_2.duration', key_resp_space_2.duration);
        routineTimer.reset();
        }
    
    key_resp_space_2.stop();
    // the Routine "ECR_S_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'emotions_and_text.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(Emotion_recognition_oneRoutineBegin(snapshot));
      trialsLoopScheduler.add(Emotion_recognition_oneRoutineEachFrame());
      trialsLoopScheduler.add(Emotion_recognition_oneRoutineEnd(snapshot));
      trialsLoopScheduler.add(emotion_selectionRoutineBegin(snapshot));
      trialsLoopScheduler.add(emotion_selectionRoutineEachFrame());
      trialsLoopScheduler.add(emotion_selectionRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Emotion_recognition_oneMaxDurationReached;
var _key_resp_2_allKeys;
var Emotion_recognition_oneMaxDuration;
var Emotion_recognition_oneComponents;
function Emotion_recognition_oneRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Emotion_recognition_one' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Emotion_recognition_oneClock.reset();
    routineTimer.reset();
    Emotion_recognition_oneMaxDurationReached = false;
    // update component parameters for each repeat
    text_prompt.setText(text_prompts);
    emotion_recognition.setMovie(video_link);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('Emotion_recognition_one.started', globalClock.getTime());
    Emotion_recognition_oneMaxDuration = null
    // keep track of which components have finished
    Emotion_recognition_oneComponents = [];
    Emotion_recognition_oneComponents.push(text_prompt);
    Emotion_recognition_oneComponents.push(emotion_recognition);
    Emotion_recognition_oneComponents.push(key_resp_2);
    
    Emotion_recognition_oneComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Emotion_recognition_oneRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Emotion_recognition_one' ---
    // get current time
    t = Emotion_recognition_oneClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_prompt* updates
    if (t >= 0.0 && text_prompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_prompt.tStart = t;  // (not accounting for frame time here)
      text_prompt.frameNStart = frameN;  // exact frame index
      
      text_prompt.setAutoDraw(true);
    }
    
    
    // *emotion_recognition* updates
    if (t >= 0.0 && emotion_recognition.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      emotion_recognition.tStart = t;  // (not accounting for frame time here)
      emotion_recognition.frameNStart = frameN;  // exact frame index
      
      emotion_recognition.setAutoDraw(true);
      emotion_recognition.play();
    }
    
    if (emotion_recognition.status === PsychoJS.Status.FINISHED) {  // force-end the Routine
        continueRoutine = false;
    }
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Emotion_recognition_oneComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Emotion_recognition_oneRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Emotion_recognition_one' ---
    Emotion_recognition_oneComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Emotion_recognition_one.stopped', globalClock.getTime());
    emotion_recognition.stop();  // ensure movie has stopped at end of Routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Emotion_recognition_one" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var emotion_selectionMaxDurationReached;
var _key_resp_allKeys;
var emotion_selectionMaxDuration;
var emotion_selectionComponents;
function emotion_selectionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'emotion_selection' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    emotion_selectionClock.reset();
    routineTimer.reset();
    emotion_selectionMaxDurationReached = false;
    // update component parameters for each repeat
    text_choice_of_emotion.setText("Choosing from the wheel of emotions, please type in the emotion viewed during the previous video.\nPress space once you've typed your selection.");
    emotion_wheel.setImage('GERT-S.jpg');
    Text_box_response.setText('');
    Text_box_response.refresh();
    Text_box_response.setText('');
    Text_box_response.setPlaceholder('Please Type Here...');
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('emotion_selection.started', globalClock.getTime());
    emotion_selectionMaxDuration = null
    // keep track of which components have finished
    emotion_selectionComponents = [];
    emotion_selectionComponents.push(text_choice_of_emotion);
    emotion_selectionComponents.push(emotion_wheel);
    emotion_selectionComponents.push(Text_box_response);
    emotion_selectionComponents.push(key_resp);
    
    emotion_selectionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function emotion_selectionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'emotion_selection' ---
    // get current time
    t = emotion_selectionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_choice_of_emotion* updates
    if (t >= 0.0 && text_choice_of_emotion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_choice_of_emotion.tStart = t;  // (not accounting for frame time here)
      text_choice_of_emotion.frameNStart = frameN;  // exact frame index
      
      text_choice_of_emotion.setAutoDraw(true);
    }
    
    
    // *emotion_wheel* updates
    if (t >= 0.0 && emotion_wheel.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      emotion_wheel.tStart = t;  // (not accounting for frame time here)
      emotion_wheel.frameNStart = frameN;  // exact frame index
      
      emotion_wheel.setAutoDraw(true);
    }
    
    
    // *Text_box_response* updates
    if (t >= 0.0 && Text_box_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_box_response.tStart = t;  // (not accounting for frame time here)
      Text_box_response.frameNStart = frameN;  // exact frame index
      
      Text_box_response.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    emotion_selectionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function emotion_selectionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'emotion_selection' ---
    emotion_selectionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('emotion_selection.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Text_box_response.text',Text_box_response.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "emotion_selection" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Thank_youMaxDurationReached;
var Thank_youMaxDuration;
var Thank_youComponents;
function Thank_youRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Thank_you' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Thank_youClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    Thank_youMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Thank_you.started', globalClock.getTime());
    Thank_youMaxDuration = null
    // keep track of which components have finished
    Thank_youComponents = [];
    Thank_youComponents.push(text_2);
    
    Thank_youComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function Thank_youRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Thank_you' ---
    // get current time
    t = Thank_youClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Thank_youComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Thank_youRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Thank_you' ---
    Thank_youComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Thank_you.stopped', globalClock.getTime());
    if (Thank_youMaxDurationReached) {
        Thank_youClock.add(Thank_youMaxDuration);
    } else {
        Thank_youClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
