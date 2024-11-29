#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.2.4),
    on Fri Nov 29 16:54:20 2024
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

import psychopy
psychopy.useVersion('2024.2.4')


# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2024.2.4'
expName = 'psychopyfinalproject'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = False
_winSize = [1440, 900]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/vincentsaxon/Documents/Psyc_43030/psychopyfinalproject.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('info')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=True, allowStencil=True,
            monitor='testMonitor', color=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [1.0000, 1.0000, 1.0000]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    win.hideMessage()
    # show a visual indicator if we're in piloting mode
    if PILOTING and prefs.piloting['showPilotingIndicator']:
        win.showPilotingIndicator()
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    # Setup iohub experiment
    ioConfig['Experiment'] = dict(filename=thisExp.dataFileName)
    
    # Start ioHub server
    ioServer = io.launchHubServer(window=win, **ioConfig)
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='iohub'
        )
    if deviceManager.getDevice('key_resp_instructions') is None:
        # initialise key_resp_instructions
        key_resp_instructions = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_instructions',
        )
    if deviceManager.getDevice('key_resp_space') is None:
        # initialise key_resp_space
        key_resp_space = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_space',
        )
    if deviceManager.getDevice('key_resp_space_2') is None:
        # initialise key_resp_space_2
        key_resp_space_2 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_space_2',
        )
    if deviceManager.getDevice('key_resp_2') is None:
        # initialise key_resp_2
        key_resp_2 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_2',
        )
    if deviceManager.getDevice('key_resp') is None:
        # initialise key_resp
        key_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='ioHub',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ioHub'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "Instructions" ---
    text = visual.TextStim(win=win, name='text',
        text='Welcome to the Geneva Emotional Recognition-Short Experiment. This experiment involves short clips of actors expressing a specific emotion. You will watch the clip and then select which emotion the actor was expressing. You will press the space button once done with the selection to move to the next clip. There will be a total of fourteen emotions to go through. \u2028Press space to begin the experiment. ',
        font='Times New Roman',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_instructions = keyboard.Keyboard(deviceName='key_resp_instructions')
    
    # --- Initialize components for Routine "ECR_S" ---
    instruction_ecr_s = visual.TextStim(win=win, name='instruction_ecr_s',
        text='Read the following statements on this page and the next, then indicate how much you agree or disagree by selecting a rating for each question. Press "space" to move to the next page.',
        font='Arial',
        pos=(0, 0.44), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    rating_scale = visual.ImageStim(
        win=win,
        name='rating_scale', 
        image='ECR_rating.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.19, 0.35), draggable=False, size=(0.88, 0.08),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    ECR_S_image = visual.ImageStim(
        win=win,
        name='ECR_S_image', 
        image='ECR-S questions.jpg', mask=None, anchor='center',
        ori=0.0, pos=(-0.45, -0.04), draggable=False, size=(0.4, 0.65),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    q1_slider = visual.Slider(win=win, name='q1_slider',
        startValue=None, size=(0.8, 0.05), pos=(0.2, 0.24), units=win.units,
        labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=0.0,
        style='choice', styleTweaks=(), opacity=None,
        labelColor=[-1.0000, -1.0000, -1.0000], markerColor='Red', lineColor=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-3, readOnly=False)
    q2_slider = visual.Slider(win=win, name='q2_slider',
        startValue=None, size=(0.8, 0.05), pos=(0.2, 0.13), units=win.units,
        labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=0.0,
        style='choice', styleTweaks=(), opacity=None,
        labelColor=[-1.0000, -1.0000, -1.0000], markerColor='Red', lineColor=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-4, readOnly=False)
    q3_slider = visual.Slider(win=win, name='q3_slider',
        startValue=None, size=(0.8, 0.05), pos=(0.2, 0.02), units=win.units,
        labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=0.0,
        style='choice', styleTweaks=(), opacity=None,
        labelColor=[-1.0000, -1.0000, -1.0000], markerColor='Red', lineColor=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-5, readOnly=False)
    q4_slider = visual.Slider(win=win, name='q4_slider',
        startValue=None, size=(0.8, 0.05), pos=(0.2, -0.08), units=win.units,
        labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=0.0,
        style='choice', styleTweaks=(), opacity=None,
        labelColor=[-1.0000, -1.0000, -1.0000], markerColor='Red', lineColor=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-6, readOnly=False)
    q5_slider = visual.Slider(win=win, name='q5_slider',
        startValue=None, size=(0.8, 0.05), pos=(0.2, -0.18), units=win.units,
        labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=0.0,
        style='choice', styleTweaks=(), opacity=None,
        labelColor=[-1.0000, -1.0000, -1.0000], markerColor='Red', lineColor=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-7, readOnly=False)
    q6_slider = visual.Slider(win=win, name='q6_slider',
        startValue=None, size=(0.8, 0.05), pos=(0.2, -0.3), units=win.units,
        labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=0.0,
        style='choice', styleTweaks=(), opacity=None,
        labelColor=[-1.0000, -1.0000, -1.0000], markerColor='Red', lineColor=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-8, readOnly=False)
    key_resp_space = keyboard.Keyboard(deviceName='key_resp_space')
    
    # --- Initialize components for Routine "ECR_S_2" ---
    instruction_ecr_s_2 = visual.TextStim(win=win, name='instruction_ecr_s_2',
        text='Read the following statements, then indicate how much you agree or disagree by selecting a rating for each question. Press "space" when you\'ve completed the ratings.',
        font='Arial',
        pos=(0, 0.44), draggable=False, height=0.025, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    rating_scale_2 = visual.ImageStim(
        win=win,
        name='rating_scale_2', 
        image='ECR_rating.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0.19, 0.35), draggable=False, size=(0.88, 0.08),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    ECR_S_image_2 = visual.ImageStim(
        win=win,
        name='ECR_S_image_2', 
        image='ECR-S questions 2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(-0.45, -0.04), draggable=False, size=(0.4, 0.65),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    q1_slider_2 = visual.Slider(win=win, name='q1_slider_2',
        startValue=None, size=(0.8, 0.05), pos=(0.2, 0.24), units=win.units,
        labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=0.0,
        style='choice', styleTweaks=(), opacity=None,
        labelColor=[-1.0000, -1.0000, -1.0000], markerColor='Red', lineColor=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-3, readOnly=False)
    q2_slider_2 = visual.Slider(win=win, name='q2_slider_2',
        startValue=None, size=(0.8, 0.05), pos=(0.2, 0.13), units=win.units,
        labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=0.0,
        style='choice', styleTweaks=(), opacity=None,
        labelColor=[-1.0000, -1.0000, -1.0000], markerColor='Red', lineColor=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-4, readOnly=False)
    q3_slider_2 = visual.Slider(win=win, name='q3_slider_2',
        startValue=None, size=(0.8, 0.05), pos=(0.2, 0.02), units=win.units,
        labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=0.0,
        style='choice', styleTweaks=(), opacity=None,
        labelColor=[-1.0000, -1.0000, -1.0000], markerColor='Red', lineColor=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-5, readOnly=False)
    q4_slider_2 = visual.Slider(win=win, name='q4_slider_2',
        startValue=None, size=(0.8, 0.05), pos=(0.2, -0.08), units=win.units,
        labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=0.0,
        style='choice', styleTweaks=(), opacity=None,
        labelColor=[-1.0000, -1.0000, -1.0000], markerColor='Red', lineColor=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-6, readOnly=False)
    q5_slider_2 = visual.Slider(win=win, name='q5_slider_2',
        startValue=None, size=(0.8, 0.05), pos=(0.2, -0.18), units=win.units,
        labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=0.0,
        style='choice', styleTweaks=(), opacity=None,
        labelColor=[-1.0000, -1.0000, -1.0000], markerColor='Red', lineColor=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-7, readOnly=False)
    q6_slider_2 = visual.Slider(win=win, name='q6_slider_2',
        startValue=None, size=(0.8, 0.05), pos=(0.2, -0.3), units=win.units,
        labels=(1, 2, 3, 4, 5, 6, 7), ticks=(1, 2, 3, 4, 5, 6, 7), granularity=0.0,
        style='choice', styleTweaks=(), opacity=None,
        labelColor=[-1.0000, -1.0000, -1.0000], markerColor='Red', lineColor=[1.0000, 1.0000, 1.0000], colorSpace='rgb',
        font='Open Sans', labelHeight=0.015,
        flip=False, ori=0.0, depth=-8, readOnly=False)
    key_resp_space_2 = keyboard.Keyboard(deviceName='key_resp_space_2')
    
    # --- Initialize components for Routine "Emotion_recognition_one" ---
    text_prompt = visual.TextStim(win=win, name='text_prompt',
        text='',
        font='Times New Roman',
        pos=(0, 0.4), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    emotion_recognition = visual.MovieStim(
        win, name='emotion_recognition',
        filename=None, movieLib='ffpyplayer',
        loop=False, volume=1.0, noAudio=False,
        pos=(0, 0), size=(0.65, 0.65), units=win.units,
        ori=0.0, anchor='center',opacity=None, contrast=1.0,
        depth=-1
    )
    key_resp_2 = keyboard.Keyboard(deviceName='key_resp_2')
    
    # --- Initialize components for Routine "emotion_selection" ---
    text_choice_of_emotion = visual.TextStim(win=win, name='text_choice_of_emotion',
        text='',
        font='Times New Roman',
        pos=(0, 0.35), draggable=False, height=0.03, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    emotion_wheel = visual.ImageStim(
        win=win,
        name='emotion_wheel', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(0.5, 0.5),
        color=[1.0000, 1.0000, 1.0000], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    Text_box_response = visual.TextBox2(
         win, text=None, placeholder='', font='Arial',
         ori=0.0, pos=(0, -0.35), draggable=False,      letterHeight=0.05,
         size=(0.7, 0.15), borderWidth=2.0,
         color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=0.05, speechPoint=None,
         padding=0.0, alignment='center',
         anchor='center', overflow='visible',
         fillColor=[0.5059, 0.5059, 0.5059], borderColor=[-1.0000, -1.0000, -1.0000],
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=True,
         name='Text_box_response',
         depth=-2, autoLog=True,
    )
    key_resp = keyboard.Keyboard(deviceName='key_resp')
    
    # --- Initialize components for Routine "Thank_you" ---
    text_2 = visual.TextStim(win=win, name='text_2',
        text='Thank you for participating in this experiment!',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "Instructions" ---
    # create an object to store info about Routine Instructions
    Instructions = data.Routine(
        name='Instructions',
        components=[text, key_resp_instructions],
    )
    Instructions.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp_instructions
    key_resp_instructions.keys = []
    key_resp_instructions.rt = []
    _key_resp_instructions_allKeys = []
    # store start times for Instructions
    Instructions.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    Instructions.tStart = globalClock.getTime(format='float')
    Instructions.status = STARTED
    thisExp.addData('Instructions.started', Instructions.tStart)
    Instructions.maxDuration = None
    # keep track of which components have finished
    InstructionsComponents = Instructions.components
    for thisComponent in Instructions.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Instructions" ---
    Instructions.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        
        # if text is starting this frame...
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text.started')
            # update status
            text.status = STARTED
            text.setAutoDraw(True)
        
        # if text is active this frame...
        if text.status == STARTED:
            # update params
            pass
        
        # *key_resp_instructions* updates
        waitOnFlip = False
        
        # if key_resp_instructions is starting this frame...
        if key_resp_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_instructions.frameNStart = frameN  # exact frame index
            key_resp_instructions.tStart = t  # local t and not account for scr refresh
            key_resp_instructions.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_instructions, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_instructions.started')
            # update status
            key_resp_instructions.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_instructions.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_instructions.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_instructions.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_instructions.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_instructions_allKeys.extend(theseKeys)
            if len(_key_resp_instructions_allKeys):
                key_resp_instructions.keys = _key_resp_instructions_allKeys[-1].name  # just the last key pressed
                key_resp_instructions.rt = _key_resp_instructions_allKeys[-1].rt
                key_resp_instructions.duration = _key_resp_instructions_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            Instructions.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Instructions.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Instructions" ---
    for thisComponent in Instructions.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for Instructions
    Instructions.tStop = globalClock.getTime(format='float')
    Instructions.tStopRefresh = tThisFlipGlobal
    thisExp.addData('Instructions.stopped', Instructions.tStop)
    # check responses
    if key_resp_instructions.keys in ['', [], None]:  # No response was made
        key_resp_instructions.keys = None
    thisExp.addData('key_resp_instructions.keys',key_resp_instructions.keys)
    if key_resp_instructions.keys != None:  # we had a response
        thisExp.addData('key_resp_instructions.rt', key_resp_instructions.rt)
        thisExp.addData('key_resp_instructions.duration', key_resp_instructions.duration)
    thisExp.nextEntry()
    # the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "ECR_S" ---
    # create an object to store info about Routine ECR_S
    ECR_S = data.Routine(
        name='ECR_S',
        components=[instruction_ecr_s, rating_scale, ECR_S_image, q1_slider, q2_slider, q3_slider, q4_slider, q5_slider, q6_slider, key_resp_space],
    )
    ECR_S.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    q1_slider.reset()
    q2_slider.reset()
    q3_slider.reset()
    q4_slider.reset()
    q5_slider.reset()
    q6_slider.reset()
    # create starting attributes for key_resp_space
    key_resp_space.keys = []
    key_resp_space.rt = []
    _key_resp_space_allKeys = []
    # store start times for ECR_S
    ECR_S.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    ECR_S.tStart = globalClock.getTime(format='float')
    ECR_S.status = STARTED
    thisExp.addData('ECR_S.started', ECR_S.tStart)
    ECR_S.maxDuration = None
    # keep track of which components have finished
    ECR_SComponents = ECR_S.components
    for thisComponent in ECR_S.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "ECR_S" ---
    ECR_S.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instruction_ecr_s* updates
        
        # if instruction_ecr_s is starting this frame...
        if instruction_ecr_s.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruction_ecr_s.frameNStart = frameN  # exact frame index
            instruction_ecr_s.tStart = t  # local t and not account for scr refresh
            instruction_ecr_s.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruction_ecr_s, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instruction_ecr_s.started')
            # update status
            instruction_ecr_s.status = STARTED
            instruction_ecr_s.setAutoDraw(True)
        
        # if instruction_ecr_s is active this frame...
        if instruction_ecr_s.status == STARTED:
            # update params
            pass
        
        # *rating_scale* updates
        
        # if rating_scale is starting this frame...
        if rating_scale.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rating_scale.frameNStart = frameN  # exact frame index
            rating_scale.tStart = t  # local t and not account for scr refresh
            rating_scale.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rating_scale, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'rating_scale.started')
            # update status
            rating_scale.status = STARTED
            rating_scale.setAutoDraw(True)
        
        # if rating_scale is active this frame...
        if rating_scale.status == STARTED:
            # update params
            pass
        
        # *ECR_S_image* updates
        
        # if ECR_S_image is starting this frame...
        if ECR_S_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            ECR_S_image.frameNStart = frameN  # exact frame index
            ECR_S_image.tStart = t  # local t and not account for scr refresh
            ECR_S_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(ECR_S_image, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'ECR_S_image.started')
            # update status
            ECR_S_image.status = STARTED
            ECR_S_image.setAutoDraw(True)
        
        # if ECR_S_image is active this frame...
        if ECR_S_image.status == STARTED:
            # update params
            pass
        
        # *q1_slider* updates
        
        # if q1_slider is starting this frame...
        if q1_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            q1_slider.frameNStart = frameN  # exact frame index
            q1_slider.tStart = t  # local t and not account for scr refresh
            q1_slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(q1_slider, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'q1_slider.started')
            # update status
            q1_slider.status = STARTED
            q1_slider.setAutoDraw(True)
        
        # if q1_slider is active this frame...
        if q1_slider.status == STARTED:
            # update params
            pass
        
        # *q2_slider* updates
        
        # if q2_slider is starting this frame...
        if q2_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            q2_slider.frameNStart = frameN  # exact frame index
            q2_slider.tStart = t  # local t and not account for scr refresh
            q2_slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(q2_slider, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'q2_slider.started')
            # update status
            q2_slider.status = STARTED
            q2_slider.setAutoDraw(True)
        
        # if q2_slider is active this frame...
        if q2_slider.status == STARTED:
            # update params
            pass
        
        # *q3_slider* updates
        
        # if q3_slider is starting this frame...
        if q3_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            q3_slider.frameNStart = frameN  # exact frame index
            q3_slider.tStart = t  # local t and not account for scr refresh
            q3_slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(q3_slider, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'q3_slider.started')
            # update status
            q3_slider.status = STARTED
            q3_slider.setAutoDraw(True)
        
        # if q3_slider is active this frame...
        if q3_slider.status == STARTED:
            # update params
            pass
        
        # *q4_slider* updates
        
        # if q4_slider is starting this frame...
        if q4_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            q4_slider.frameNStart = frameN  # exact frame index
            q4_slider.tStart = t  # local t and not account for scr refresh
            q4_slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(q4_slider, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'q4_slider.started')
            # update status
            q4_slider.status = STARTED
            q4_slider.setAutoDraw(True)
        
        # if q4_slider is active this frame...
        if q4_slider.status == STARTED:
            # update params
            pass
        
        # *q5_slider* updates
        
        # if q5_slider is starting this frame...
        if q5_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            q5_slider.frameNStart = frameN  # exact frame index
            q5_slider.tStart = t  # local t and not account for scr refresh
            q5_slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(q5_slider, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'q5_slider.started')
            # update status
            q5_slider.status = STARTED
            q5_slider.setAutoDraw(True)
        
        # if q5_slider is active this frame...
        if q5_slider.status == STARTED:
            # update params
            pass
        
        # *q6_slider* updates
        
        # if q6_slider is starting this frame...
        if q6_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            q6_slider.frameNStart = frameN  # exact frame index
            q6_slider.tStart = t  # local t and not account for scr refresh
            q6_slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(q6_slider, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'q6_slider.started')
            # update status
            q6_slider.status = STARTED
            q6_slider.setAutoDraw(True)
        
        # if q6_slider is active this frame...
        if q6_slider.status == STARTED:
            # update params
            pass
        
        # *key_resp_space* updates
        waitOnFlip = False
        
        # if key_resp_space is starting this frame...
        if key_resp_space.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_space.frameNStart = frameN  # exact frame index
            key_resp_space.tStart = t  # local t and not account for scr refresh
            key_resp_space.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_space, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_space.started')
            # update status
            key_resp_space.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_space.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_space.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_space.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_space.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_space_allKeys.extend(theseKeys)
            if len(_key_resp_space_allKeys):
                key_resp_space.keys = _key_resp_space_allKeys[-1].name  # just the last key pressed
                key_resp_space.rt = _key_resp_space_allKeys[-1].rt
                key_resp_space.duration = _key_resp_space_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            ECR_S.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ECR_S.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ECR_S" ---
    for thisComponent in ECR_S.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for ECR_S
    ECR_S.tStop = globalClock.getTime(format='float')
    ECR_S.tStopRefresh = tThisFlipGlobal
    thisExp.addData('ECR_S.stopped', ECR_S.tStop)
    thisExp.addData('q1_slider.response', q1_slider.getRating())
    thisExp.addData('q1_slider.rt', q1_slider.getRT())
    thisExp.addData('q2_slider.response', q2_slider.getRating())
    thisExp.addData('q2_slider.rt', q2_slider.getRT())
    thisExp.addData('q3_slider.response', q3_slider.getRating())
    thisExp.addData('q3_slider.rt', q3_slider.getRT())
    thisExp.addData('q4_slider.response', q4_slider.getRating())
    thisExp.addData('q4_slider.rt', q4_slider.getRT())
    thisExp.addData('q5_slider.response', q5_slider.getRating())
    thisExp.addData('q5_slider.rt', q5_slider.getRT())
    thisExp.addData('q6_slider.response', q6_slider.getRating())
    thisExp.addData('q6_slider.rt', q6_slider.getRT())
    # check responses
    if key_resp_space.keys in ['', [], None]:  # No response was made
        key_resp_space.keys = None
    thisExp.addData('key_resp_space.keys',key_resp_space.keys)
    if key_resp_space.keys != None:  # we had a response
        thisExp.addData('key_resp_space.rt', key_resp_space.rt)
        thisExp.addData('key_resp_space.duration', key_resp_space.duration)
    thisExp.nextEntry()
    # the Routine "ECR_S" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "ECR_S_2" ---
    # create an object to store info about Routine ECR_S_2
    ECR_S_2 = data.Routine(
        name='ECR_S_2',
        components=[instruction_ecr_s_2, rating_scale_2, ECR_S_image_2, q1_slider_2, q2_slider_2, q3_slider_2, q4_slider_2, q5_slider_2, q6_slider_2, key_resp_space_2],
    )
    ECR_S_2.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    q1_slider_2.reset()
    q2_slider_2.reset()
    q3_slider_2.reset()
    q4_slider_2.reset()
    q5_slider_2.reset()
    q6_slider_2.reset()
    # create starting attributes for key_resp_space_2
    key_resp_space_2.keys = []
    key_resp_space_2.rt = []
    _key_resp_space_2_allKeys = []
    # store start times for ECR_S_2
    ECR_S_2.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    ECR_S_2.tStart = globalClock.getTime(format='float')
    ECR_S_2.status = STARTED
    thisExp.addData('ECR_S_2.started', ECR_S_2.tStart)
    ECR_S_2.maxDuration = None
    # keep track of which components have finished
    ECR_S_2Components = ECR_S_2.components
    for thisComponent in ECR_S_2.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "ECR_S_2" ---
    ECR_S_2.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instruction_ecr_s_2* updates
        
        # if instruction_ecr_s_2 is starting this frame...
        if instruction_ecr_s_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruction_ecr_s_2.frameNStart = frameN  # exact frame index
            instruction_ecr_s_2.tStart = t  # local t and not account for scr refresh
            instruction_ecr_s_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruction_ecr_s_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'instruction_ecr_s_2.started')
            # update status
            instruction_ecr_s_2.status = STARTED
            instruction_ecr_s_2.setAutoDraw(True)
        
        # if instruction_ecr_s_2 is active this frame...
        if instruction_ecr_s_2.status == STARTED:
            # update params
            pass
        
        # *rating_scale_2* updates
        
        # if rating_scale_2 is starting this frame...
        if rating_scale_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            rating_scale_2.frameNStart = frameN  # exact frame index
            rating_scale_2.tStart = t  # local t and not account for scr refresh
            rating_scale_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(rating_scale_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'rating_scale_2.started')
            # update status
            rating_scale_2.status = STARTED
            rating_scale_2.setAutoDraw(True)
        
        # if rating_scale_2 is active this frame...
        if rating_scale_2.status == STARTED:
            # update params
            pass
        
        # *ECR_S_image_2* updates
        
        # if ECR_S_image_2 is starting this frame...
        if ECR_S_image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            ECR_S_image_2.frameNStart = frameN  # exact frame index
            ECR_S_image_2.tStart = t  # local t and not account for scr refresh
            ECR_S_image_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(ECR_S_image_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'ECR_S_image_2.started')
            # update status
            ECR_S_image_2.status = STARTED
            ECR_S_image_2.setAutoDraw(True)
        
        # if ECR_S_image_2 is active this frame...
        if ECR_S_image_2.status == STARTED:
            # update params
            pass
        
        # *q1_slider_2* updates
        
        # if q1_slider_2 is starting this frame...
        if q1_slider_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            q1_slider_2.frameNStart = frameN  # exact frame index
            q1_slider_2.tStart = t  # local t and not account for scr refresh
            q1_slider_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(q1_slider_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'q1_slider_2.started')
            # update status
            q1_slider_2.status = STARTED
            q1_slider_2.setAutoDraw(True)
        
        # if q1_slider_2 is active this frame...
        if q1_slider_2.status == STARTED:
            # update params
            pass
        
        # *q2_slider_2* updates
        
        # if q2_slider_2 is starting this frame...
        if q2_slider_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            q2_slider_2.frameNStart = frameN  # exact frame index
            q2_slider_2.tStart = t  # local t and not account for scr refresh
            q2_slider_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(q2_slider_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'q2_slider_2.started')
            # update status
            q2_slider_2.status = STARTED
            q2_slider_2.setAutoDraw(True)
        
        # if q2_slider_2 is active this frame...
        if q2_slider_2.status == STARTED:
            # update params
            pass
        
        # *q3_slider_2* updates
        
        # if q3_slider_2 is starting this frame...
        if q3_slider_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            q3_slider_2.frameNStart = frameN  # exact frame index
            q3_slider_2.tStart = t  # local t and not account for scr refresh
            q3_slider_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(q3_slider_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'q3_slider_2.started')
            # update status
            q3_slider_2.status = STARTED
            q3_slider_2.setAutoDraw(True)
        
        # if q3_slider_2 is active this frame...
        if q3_slider_2.status == STARTED:
            # update params
            pass
        
        # *q4_slider_2* updates
        
        # if q4_slider_2 is starting this frame...
        if q4_slider_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            q4_slider_2.frameNStart = frameN  # exact frame index
            q4_slider_2.tStart = t  # local t and not account for scr refresh
            q4_slider_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(q4_slider_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'q4_slider_2.started')
            # update status
            q4_slider_2.status = STARTED
            q4_slider_2.setAutoDraw(True)
        
        # if q4_slider_2 is active this frame...
        if q4_slider_2.status == STARTED:
            # update params
            pass
        
        # *q5_slider_2* updates
        
        # if q5_slider_2 is starting this frame...
        if q5_slider_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            q5_slider_2.frameNStart = frameN  # exact frame index
            q5_slider_2.tStart = t  # local t and not account for scr refresh
            q5_slider_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(q5_slider_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'q5_slider_2.started')
            # update status
            q5_slider_2.status = STARTED
            q5_slider_2.setAutoDraw(True)
        
        # if q5_slider_2 is active this frame...
        if q5_slider_2.status == STARTED:
            # update params
            pass
        
        # *q6_slider_2* updates
        
        # if q6_slider_2 is starting this frame...
        if q6_slider_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            q6_slider_2.frameNStart = frameN  # exact frame index
            q6_slider_2.tStart = t  # local t and not account for scr refresh
            q6_slider_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(q6_slider_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'q6_slider_2.started')
            # update status
            q6_slider_2.status = STARTED
            q6_slider_2.setAutoDraw(True)
        
        # if q6_slider_2 is active this frame...
        if q6_slider_2.status == STARTED:
            # update params
            pass
        
        # *key_resp_space_2* updates
        waitOnFlip = False
        
        # if key_resp_space_2 is starting this frame...
        if key_resp_space_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_space_2.frameNStart = frameN  # exact frame index
            key_resp_space_2.tStart = t  # local t and not account for scr refresh
            key_resp_space_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_space_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_space_2.started')
            # update status
            key_resp_space_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_space_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_space_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_space_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_space_2.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_space_2_allKeys.extend(theseKeys)
            if len(_key_resp_space_2_allKeys):
                key_resp_space_2.keys = _key_resp_space_2_allKeys[-1].name  # just the last key pressed
                key_resp_space_2.rt = _key_resp_space_2_allKeys[-1].rt
                key_resp_space_2.duration = _key_resp_space_2_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            ECR_S_2.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ECR_S_2.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ECR_S_2" ---
    for thisComponent in ECR_S_2.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for ECR_S_2
    ECR_S_2.tStop = globalClock.getTime(format='float')
    ECR_S_2.tStopRefresh = tThisFlipGlobal
    thisExp.addData('ECR_S_2.stopped', ECR_S_2.tStop)
    thisExp.addData('q1_slider_2.response', q1_slider_2.getRating())
    thisExp.addData('q1_slider_2.rt', q1_slider_2.getRT())
    thisExp.addData('q2_slider_2.response', q2_slider_2.getRating())
    thisExp.addData('q2_slider_2.rt', q2_slider_2.getRT())
    thisExp.addData('q3_slider_2.response', q3_slider_2.getRating())
    thisExp.addData('q3_slider_2.rt', q3_slider_2.getRT())
    thisExp.addData('q4_slider_2.response', q4_slider_2.getRating())
    thisExp.addData('q4_slider_2.rt', q4_slider_2.getRT())
    thisExp.addData('q5_slider_2.response', q5_slider_2.getRating())
    thisExp.addData('q5_slider_2.rt', q5_slider_2.getRT())
    thisExp.addData('q6_slider_2.response', q6_slider_2.getRating())
    thisExp.addData('q6_slider_2.rt', q6_slider_2.getRT())
    # check responses
    if key_resp_space_2.keys in ['', [], None]:  # No response was made
        key_resp_space_2.keys = None
    thisExp.addData('key_resp_space_2.keys',key_resp_space_2.keys)
    if key_resp_space_2.keys != None:  # we had a response
        thisExp.addData('key_resp_space_2.rt', key_resp_space_2.rt)
        thisExp.addData('key_resp_space_2.duration', key_resp_space_2.duration)
    thisExp.nextEntry()
    # the Routine "ECR_S_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler2(
        name='trials',
        nReps=1.0, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('emotions_and_text.xlsx'), 
        seed=None, 
    )
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            globals()[paramName] = thisTrial[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisTrial in trials:
        currentLoop = trials
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                globals()[paramName] = thisTrial[paramName]
        
        # --- Prepare to start Routine "Emotion_recognition_one" ---
        # create an object to store info about Routine Emotion_recognition_one
        Emotion_recognition_one = data.Routine(
            name='Emotion_recognition_one',
            components=[text_prompt, emotion_recognition, key_resp_2],
        )
        Emotion_recognition_one.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        text_prompt.setText(text_prompts)
        emotion_recognition.setMovie(video_link)
        # create starting attributes for key_resp_2
        key_resp_2.keys = []
        key_resp_2.rt = []
        _key_resp_2_allKeys = []
        # store start times for Emotion_recognition_one
        Emotion_recognition_one.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        Emotion_recognition_one.tStart = globalClock.getTime(format='float')
        Emotion_recognition_one.status = STARTED
        thisExp.addData('Emotion_recognition_one.started', Emotion_recognition_one.tStart)
        Emotion_recognition_one.maxDuration = None
        # keep track of which components have finished
        Emotion_recognition_oneComponents = Emotion_recognition_one.components
        for thisComponent in Emotion_recognition_one.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "Emotion_recognition_one" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        Emotion_recognition_one.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_prompt* updates
            
            # if text_prompt is starting this frame...
            if text_prompt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_prompt.frameNStart = frameN  # exact frame index
                text_prompt.tStart = t  # local t and not account for scr refresh
                text_prompt.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_prompt, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_prompt.started')
                # update status
                text_prompt.status = STARTED
                text_prompt.setAutoDraw(True)
            
            # if text_prompt is active this frame...
            if text_prompt.status == STARTED:
                # update params
                pass
            
            # *emotion_recognition* updates
            
            # if emotion_recognition is starting this frame...
            if emotion_recognition.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                emotion_recognition.frameNStart = frameN  # exact frame index
                emotion_recognition.tStart = t  # local t and not account for scr refresh
                emotion_recognition.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(emotion_recognition, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'emotion_recognition.started')
                # update status
                emotion_recognition.status = STARTED
                emotion_recognition.setAutoDraw(True)
                emotion_recognition.play()
            
            # if emotion_recognition is stopping this frame...
            if emotion_recognition.status == STARTED:
                if bool(False) or emotion_recognition.isFinished:
                    # keep track of stop time/frame for later
                    emotion_recognition.tStop = t  # not accounting for scr refresh
                    emotion_recognition.tStopRefresh = tThisFlipGlobal  # on global time
                    emotion_recognition.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'emotion_recognition.stopped')
                    # update status
                    emotion_recognition.status = FINISHED
                    emotion_recognition.setAutoDraw(False)
                    emotion_recognition.stop()
            if emotion_recognition.isFinished:  # force-end the Routine
                continueRoutine = False
            
            # *key_resp_2* updates
            waitOnFlip = False
            
            # if key_resp_2 is starting this frame...
            if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_2.frameNStart = frameN  # exact frame index
                key_resp_2.tStart = t  # local t and not account for scr refresh
                key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_2.started')
                # update status
                key_resp_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_2.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_2.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_2_allKeys.extend(theseKeys)
                if len(_key_resp_2_allKeys):
                    key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                    key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                    key_resp_2.duration = _key_resp_2_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[emotion_recognition]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                Emotion_recognition_one.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Emotion_recognition_one.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "Emotion_recognition_one" ---
        for thisComponent in Emotion_recognition_one.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for Emotion_recognition_one
        Emotion_recognition_one.tStop = globalClock.getTime(format='float')
        Emotion_recognition_one.tStopRefresh = tThisFlipGlobal
        thisExp.addData('Emotion_recognition_one.stopped', Emotion_recognition_one.tStop)
        emotion_recognition.stop()  # ensure movie has stopped at end of Routine
        # check responses
        if key_resp_2.keys in ['', [], None]:  # No response was made
            key_resp_2.keys = None
        trials.addData('key_resp_2.keys',key_resp_2.keys)
        if key_resp_2.keys != None:  # we had a response
            trials.addData('key_resp_2.rt', key_resp_2.rt)
            trials.addData('key_resp_2.duration', key_resp_2.duration)
        # the Routine "Emotion_recognition_one" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "emotion_selection" ---
        # create an object to store info about Routine emotion_selection
        emotion_selection = data.Routine(
            name='emotion_selection',
            components=[text_choice_of_emotion, emotion_wheel, Text_box_response, key_resp],
        )
        emotion_selection.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        text_choice_of_emotion.setText("Choosing from the wheel of emotions, please type in the emotion viewed during the previous video.\nPress space once you've typed your selection.")
        emotion_wheel.setImage('GERT-S.jpg')
        Text_box_response.reset()
        Text_box_response.setText('')
        Text_box_response.setPlaceholder('Please Type Here...')
        # create starting attributes for key_resp
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        # store start times for emotion_selection
        emotion_selection.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        emotion_selection.tStart = globalClock.getTime(format='float')
        emotion_selection.status = STARTED
        thisExp.addData('emotion_selection.started', emotion_selection.tStart)
        emotion_selection.maxDuration = None
        # keep track of which components have finished
        emotion_selectionComponents = emotion_selection.components
        for thisComponent in emotion_selection.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "emotion_selection" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        emotion_selection.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_choice_of_emotion* updates
            
            # if text_choice_of_emotion is starting this frame...
            if text_choice_of_emotion.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_choice_of_emotion.frameNStart = frameN  # exact frame index
                text_choice_of_emotion.tStart = t  # local t and not account for scr refresh
                text_choice_of_emotion.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_choice_of_emotion, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_choice_of_emotion.started')
                # update status
                text_choice_of_emotion.status = STARTED
                text_choice_of_emotion.setAutoDraw(True)
            
            # if text_choice_of_emotion is active this frame...
            if text_choice_of_emotion.status == STARTED:
                # update params
                pass
            
            # *emotion_wheel* updates
            
            # if emotion_wheel is starting this frame...
            if emotion_wheel.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                emotion_wheel.frameNStart = frameN  # exact frame index
                emotion_wheel.tStart = t  # local t and not account for scr refresh
                emotion_wheel.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(emotion_wheel, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'emotion_wheel.started')
                # update status
                emotion_wheel.status = STARTED
                emotion_wheel.setAutoDraw(True)
            
            # if emotion_wheel is active this frame...
            if emotion_wheel.status == STARTED:
                # update params
                pass
            
            # *Text_box_response* updates
            
            # if Text_box_response is starting this frame...
            if Text_box_response.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Text_box_response.frameNStart = frameN  # exact frame index
                Text_box_response.tStart = t  # local t and not account for scr refresh
                Text_box_response.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Text_box_response, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Text_box_response.started')
                # update status
                Text_box_response.status = STARTED
                Text_box_response.setAutoDraw(True)
            
            # if Text_box_response is active this frame...
            if Text_box_response.status == STARTED:
                # update params
                pass
            
            # *key_resp* updates
            waitOnFlip = False
            
            # if key_resp is starting this frame...
            if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp.frameNStart = frameN  # exact frame index
                key_resp.tStart = t  # local t and not account for scr refresh
                key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp.started')
                # update status
                key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp.status == STARTED and not waitOnFlip:
                theseKeys = key_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_allKeys.extend(theseKeys)
                if len(_key_resp_allKeys):
                    key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                    key_resp.rt = _key_resp_allKeys[-1].rt
                    key_resp.duration = _key_resp_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                emotion_selection.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in emotion_selection.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "emotion_selection" ---
        for thisComponent in emotion_selection.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for emotion_selection
        emotion_selection.tStop = globalClock.getTime(format='float')
        emotion_selection.tStopRefresh = tThisFlipGlobal
        thisExp.addData('emotion_selection.stopped', emotion_selection.tStop)
        trials.addData('Text_box_response.text',Text_box_response.text)
        # check responses
        if key_resp.keys in ['', [], None]:  # No response was made
            key_resp.keys = None
        trials.addData('key_resp.keys',key_resp.keys)
        if key_resp.keys != None:  # we had a response
            trials.addData('key_resp.rt', key_resp.rt)
            trials.addData('key_resp.duration', key_resp.duration)
        # the Routine "emotion_selection" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'trials'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "Thank_you" ---
    # create an object to store info about Routine Thank_you
    Thank_you = data.Routine(
        name='Thank_you',
        components=[text_2],
    )
    Thank_you.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for Thank_you
    Thank_you.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    Thank_you.tStart = globalClock.getTime(format='float')
    Thank_you.status = STARTED
    thisExp.addData('Thank_you.started', Thank_you.tStart)
    Thank_you.maxDuration = None
    # keep track of which components have finished
    Thank_youComponents = Thank_you.components
    for thisComponent in Thank_you.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Thank_you" ---
    Thank_you.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 3.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2* updates
        
        # if text_2 is starting this frame...
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_2.started')
            # update status
            text_2.status = STARTED
            text_2.setAutoDraw(True)
        
        # if text_2 is active this frame...
        if text_2.status == STARTED:
            # update params
            pass
        
        # if text_2 is stopping this frame...
        if text_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_2.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                text_2.tStop = t  # not accounting for scr refresh
                text_2.tStopRefresh = tThisFlipGlobal  # on global time
                text_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_2.stopped')
                # update status
                text_2.status = FINISHED
                text_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            Thank_you.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Thank_you.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Thank_you" ---
    for thisComponent in Thank_you.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for Thank_you
    Thank_you.tStop = globalClock.getTime(format='float')
    Thank_you.tStopRefresh = tThisFlipGlobal
    thisExp.addData('Thank_you.stopped', Thank_you.tStop)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if Thank_you.maxDurationReached:
        routineTimer.addTime(-Thank_you.maxDuration)
    elif Thank_you.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-3.000000)
    thisExp.nextEntry()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
