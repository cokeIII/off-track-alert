"use strict";
class SoundInstruction {
    constructor(soundFileIndex, delay) {
        this.soundFileIndex = soundFileIndex;
        this.delay = delay;
    }
}
exports.SoundInstruction = SoundInstruction;
var Sound;
(function (Sound) {
    Sound[Sound["ONEKHZ_500MS_8K16BIT"] = 1] = "ONEKHZ_500MS_8K16BIT";
    Sound[Sound["ACTION_BURPING"] = 2] = "ACTION_BURPING";
    Sound[Sound["ACTION_DRINKING"] = 3] = "ACTION_DRINKING";
    Sound[Sound["ACTION_EATING"] = 4] = "ACTION_EATING";
    Sound[Sound["ACTION_FARTING_SHORT"] = 5] = "ACTION_FARTING_SHORT";
    Sound[Sound["ACTION_OUT_OF_BREATH"] = 6] = "ACTION_OUT_OF_BREATH";
    Sound[Sound["BOXING_PUNCHCONNECT_1"] = 7] = "BOXING_PUNCHCONNECT_1";
    Sound[Sound["BOXING_PUNCHCONNECT_2"] = 8] = "BOXING_PUNCHCONNECT_2";
    Sound[Sound["BOXING_PUNCHCONNECT_3"] = 9] = "BOXING_PUNCHCONNECT_3";
    Sound[Sound["FREESTYLE_TRACKING_1"] = 10] = "FREESTYLE_TRACKING_1";
    Sound[Sound["LET_1"] = 11] = "LET_1";
    Sound[Sound["LET_2"] = 12] = "LET_2";
    Sound[Sound["LET_3"] = 13] = "LET_3";
    Sound[Sound["MIP_APP"] = 14] = "MIP_APP";
    Sound[Sound["MIP_AWWW"] = 15] = "MIP_AWWW";
    Sound[Sound["MIP_BIG_SHOT"] = 16] = "MIP_BIG_SHOT";
    Sound[Sound["MIP_BLEH"] = 17] = "MIP_BLEH";
    Sound[Sound["MIP_BOOM"] = 18] = "MIP_BOOM";
    Sound[Sound["MIP_BYE"] = 19] = "MIP_BYE";
    Sound[Sound["MIP_CONVERSE_1"] = 20] = "MIP_CONVERSE_1";
    Sound[Sound["MIP_CONVERSE_2"] = 21] = "MIP_CONVERSE_2";
    Sound[Sound["MIP_DROP"] = 22] = "MIP_DROP";
    Sound[Sound["MIP_DUNNO"] = 23] = "MIP_DUNNO";
    Sound[Sound["MIP_FALL_OVER_1"] = 24] = "MIP_FALL_OVER_1";
    Sound[Sound["MIP_FALL_OVER_2"] = 25] = "MIP_FALL_OVER_2";
    Sound[Sound["MIP_FIGHT"] = 26] = "MIP_FIGHT";
    Sound[Sound["MIP_GAME"] = 27] = "MIP_GAME";
    Sound[Sound["MIP_GLOAT"] = 28] = "MIP_GLOAT";
    Sound[Sound["MIP_GO"] = 29] = "MIP_GO";
    Sound[Sound["MIP_GOGOGO"] = 30] = "MIP_GOGOGO";
    Sound[Sound["MIP_GRUNT_1"] = 31] = "MIP_GRUNT_1";
    Sound[Sound["MIP_GRUNT_2"] = 32] = "MIP_GRUNT_2";
    Sound[Sound["MIP_GRUNT_3"] = 33] = "MIP_GRUNT_3";
    Sound[Sound["MIP_HAHA_GOT_IT"] = 34] = "MIP_HAHA_GOT_IT";
    Sound[Sound["MIP_HI_CONFIDENT"] = 35] = "MIP_HI_CONFIDENT";
    Sound[Sound["MIP_HI_NOT_SURE"] = 36] = "MIP_HI_NOT_SURE";
    Sound[Sound["MIP_HI_SCARED"] = 37] = "MIP_HI_SCARED";
    Sound[Sound["MIP_HUH"] = 38] = "MIP_HUH";
    Sound[Sound["MIP_HUMMING_1"] = 39] = "MIP_HUMMING_1";
    Sound[Sound["MIP_HUMMING_2"] = 40] = "MIP_HUMMING_2";
    Sound[Sound["MIP_HURT"] = 41] = "MIP_HURT";
    Sound[Sound["MIP_HUUURGH"] = 42] = "MIP_HUUURGH";
    Sound[Sound["MIP_IN_LOVE"] = 43] = "MIP_IN_LOVE";
    Sound[Sound["MIP_IT"] = 44] = "MIP_IT";
    Sound[Sound["MIP_JOKE"] = 45] = "MIP_JOKE";
    Sound[Sound["MIP_K"] = 46] = "MIP_K";
    Sound[Sound["MIP_LOOP_1"] = 47] = "MIP_LOOP_1";
    Sound[Sound["MIP_LOOP_2"] = 48] = "MIP_LOOP_2";
    Sound[Sound["MIP_LOW_BATTERY"] = 49] = "MIP_LOW_BATTERY";
    Sound[Sound["MIP_MIPPEE"] = 50] = "MIP_MIPPEE";
    Sound[Sound["MIP_MORE"] = 51] = "MIP_MORE";
    Sound[Sound["MIP_MUAH_HA"] = 52] = "MIP_MUAH_HA";
    Sound[Sound["MIP_MUSIC"] = 53] = "MIP_MUSIC";
    Sound[Sound["MIP_OBSTACLE"] = 54] = "MIP_OBSTACLE";
    Sound[Sound["MIP_OHOH"] = 55] = "MIP_OHOH";
    Sound[Sound["MIP_OH_YEAH"] = 56] = "MIP_OH_YEAH";
    Sound[Sound["MIP_OOPSIE"] = 57] = "MIP_OOPSIE";
    Sound[Sound["MIP_OUCH_1"] = 58] = "MIP_OUCH_1";
    Sound[Sound["MIP_OUCH_2"] = 59] = "MIP_OUCH_2";
    Sound[Sound["MIP_PLAY"] = 60] = "MIP_PLAY";
    Sound[Sound["MIP_PUSH"] = 61] = "MIP_PUSH";
    Sound[Sound["MIP_RUN"] = 62] = "MIP_RUN";
    Sound[Sound["MIP_SHAKE"] = 63] = "MIP_SHAKE";
    Sound[Sound["MIP_SIGH"] = 64] = "MIP_SIGH";
    Sound[Sound["MIP_SINGING"] = 65] = "MIP_SINGING";
    Sound[Sound["MIP_SNEEZE"] = 66] = "MIP_SNEEZE";
    Sound[Sound["MIP_SNORE"] = 67] = "MIP_SNORE";
    Sound[Sound["MIP_STACK"] = 68] = "MIP_STACK";
    Sound[Sound["MIP_SWIPE_1"] = 69] = "MIP_SWIPE_1";
    Sound[Sound["MIP_SWIPE_2"] = 70] = "MIP_SWIPE_2";
    Sound[Sound["MIP_TRICKS"] = 71] = "MIP_TRICKS";
    Sound[Sound["MIP_TRIIICK"] = 72] = "MIP_TRIIICK";
    Sound[Sound["MIP_TRUMPET"] = 73] = "MIP_TRUMPET";
    Sound[Sound["MIP_WAAAAA"] = 74] = "MIP_WAAAAA";
    Sound[Sound["MIP_WAKEY"] = 75] = "MIP_WAKEY";
    Sound[Sound["MIP_WHEEE"] = 76] = "MIP_WHEEE";
    Sound[Sound["MIP_WHISTLING"] = 77] = "MIP_WHISTLING";
    Sound[Sound["MIP_WHOAH"] = 78] = "MIP_WHOAH";
    Sound[Sound["MIP_WOO"] = 79] = "MIP_WOO";
    Sound[Sound["MIP_YEAH"] = 80] = "MIP_YEAH";
    Sound[Sound["MIP_YEEESSS"] = 81] = "MIP_YEEESSS";
    Sound[Sound["MIP_YO"] = 82] = "MIP_YO";
    Sound[Sound["MIP_YUMMY"] = 83] = "MIP_YUMMY";
    Sound[Sound["MOOD_ACTIVATED"] = 84] = "MOOD_ACTIVATED";
    Sound[Sound["MOOD_ANGRY"] = 85] = "MOOD_ANGRY";
    Sound[Sound["MOOD_ANXIOUS"] = 86] = "MOOD_ANXIOUS";
    Sound[Sound["MOOD_BORING"] = 87] = "MOOD_BORING";
    Sound[Sound["MOOD_CRANKY"] = 88] = "MOOD_CRANKY";
    Sound[Sound["MOOD_ENERGETIC"] = 89] = "MOOD_ENERGETIC";
    Sound[Sound["MOOD_EXCITED"] = 90] = "MOOD_EXCITED";
    Sound[Sound["MOOD_GIDDY"] = 91] = "MOOD_GIDDY";
    Sound[Sound["MOOD_GRUMPY"] = 92] = "MOOD_GRUMPY";
    Sound[Sound["MOOD_HAPPY"] = 93] = "MOOD_HAPPY";
    Sound[Sound["MOOD_IDEA"] = 94] = "MOOD_IDEA";
    Sound[Sound["MOOD_IMPATIENT"] = 95] = "MOOD_IMPATIENT";
    Sound[Sound["MOOD_NICE"] = 96] = "MOOD_NICE";
    Sound[Sound["MOOD_SAD"] = 97] = "MOOD_SAD";
    Sound[Sound["MOOD_SHORT"] = 98] = "MOOD_SHORT";
    Sound[Sound["MOOD_SLEEPY"] = 99] = "MOOD_SLEEPY";
    Sound[Sound["MOOD_TIRED"] = 100] = "MOOD_TIRED";
    Sound[Sound["SOUND_BOOST"] = 101] = "SOUND_BOOST";
    Sound[Sound["SOUND_CAGE"] = 102] = "SOUND_CAGE";
    Sound[Sound["SOUND_GUNS"] = 103] = "SOUND_GUNS";
    Sound[Sound["SOUND_ZINGS"] = 104] = "SOUND_ZINGS";
    Sound[Sound["SHORT_MUTE_FOR_STOP"] = 105] = "SHORT_MUTE_FOR_STOP";
    Sound[Sound["FREESTYLE_TRACKING_2"] = 106] = "FREESTYLE_TRACKING_2";
    Sound[Sound["VOLUME_OFF"] = 107] = "VOLUME_OFF";
    Sound[Sound["VOLUME_1"] = 108] = "VOLUME_1";
    Sound[Sound["VOLUME_2"] = 109] = "VOLUME_2";
    Sound[Sound["VOLUME_3"] = 110] = "VOLUME_3";
    Sound[Sound["VOLUME_4"] = 111] = "VOLUME_4";
    Sound[Sound["VOLUME_5"] = 112] = "VOLUME_5";
    Sound[Sound["VOLUME_6"] = 113] = "VOLUME_6";
    Sound[Sound["VOLUME_7"] = 114] = "VOLUME_7";
})(Sound = exports.Sound || (exports.Sound = {}));
var Position;
(function (Position) {
    Position[Position["OnBack"] = 0] = "OnBack";
    Position[Position["FaceDown"] = 1] = "FaceDown";
})(Position = exports.Position || (exports.Position = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Forward"] = 0] = "Forward";
    Direction[Direction["Backward"] = 1] = "Backward";
})(Direction = exports.Direction || (exports.Direction = {}));
var TurnDirection;
(function (TurnDirection) {
    TurnDirection[TurnDirection["Left"] = 0] = "Left";
    TurnDirection[TurnDirection["Right"] = 1] = "Right";
})(TurnDirection = exports.TurnDirection || (exports.TurnDirection = {}));
var GameMode;
(function (GameMode) {
    GameMode[GameMode["App"] = 1] = "App";
    GameMode[GameMode["Cage"] = 2] = "Cage";
    GameMode[GameMode["Tracking"] = 3] = "Tracking";
    GameMode[GameMode["Dance"] = 4] = "Dance";
    GameMode[GameMode["Default"] = 5] = "Default";
    GameMode[GameMode["Stack"] = 6] = "Stack";
    GameMode[GameMode["TrickProgramming"] = 7] = "TrickProgramming";
    GameMode[GameMode["RoamMode"] = 8] = "RoamMode";
})(GameMode = exports.GameMode || (exports.GameMode = {}));
class SoftwareVersion {
    constructor(year, month, day, version) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.version = version;
    }
}
exports.SoftwareVersion = SoftwareVersion;
var PositionStatus;
(function (PositionStatus) {
    PositionStatus[PositionStatus["OnBack"] = 0] = "OnBack";
    PositionStatus[PositionStatus["FaceDown"] = 1] = "FaceDown";
    PositionStatus[PositionStatus["Upright"] = 2] = "Upright";
    PositionStatus[PositionStatus["PickedUp"] = 3] = "PickedUp";
    PositionStatus[PositionStatus["Handstand"] = 4] = "Handstand";
    PositionStatus[PositionStatus["FaceDownOnTray"] = 5] = "FaceDownOnTray";
    PositionStatus[PositionStatus["OnBackWithKickstand"] = 6] = "OnBackWithKickstand";
})(PositionStatus = exports.PositionStatus || (exports.PositionStatus = {}));
class Status {
    /**
     * The battery level in Volt, with the precision of one digit after comma
     */
    get batteryLevel() {
        // value is recorded in steps of 0.052 Volt
        return Math.round(this._batteryLevel * 0.52) / 10;
    }
    constructor(batteryLevel, position) {
        this._batteryLevel = batteryLevel;
        this.position = position;
    }
    toString() {
        return "Position:" + PositionStatus[this.position] + "\nBattery level:" + this.batteryLevel + "V";
    }
}
exports.Status = Status;
class WeightStatus {
    constructor(code) {
        // BYTE 1 : 0xD3(-45 degree) - 0x2D(+45 degree)	
        // 0x00(min)~0x2D(max) is holding the weight on the back
        if (code < 0x2e) {
            this.degree = code;
        }
        else if (code > 0xd2) {
            this.degree = code - 0xff;
        }
        else {
            this.degree = 0;
        }
    }
}
exports.WeightStatus = WeightStatus;
class ChestLedInfo {
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
}
exports.ChestLedInfo = ChestLedInfo;
var HeadLightState;
(function (HeadLightState) {
    HeadLightState[HeadLightState["Off"] = 0] = "Off";
    HeadLightState[HeadLightState["On"] = 1] = "On";
    HeadLightState[HeadLightState["SlowBlink"] = 2] = "SlowBlink";
    HeadLightState[HeadLightState["FastBlink"] = 3] = "FastBlink";
})(HeadLightState = exports.HeadLightState || (exports.HeadLightState = {}));
class HeadLedInfo {
    constructor(light1, light2, light3, light4) {
        this.light1 = light1;
        this.light2 = light2;
        this.light3 = light3;
        this.light4 = light4;
    }
}
exports.HeadLedInfo = HeadLedInfo;
//# sourceMappingURL=mip-types.js.map