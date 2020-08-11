/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent, NativeEventEmitter } from 'react-native';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const JitsiMeetModule = NativeModules.RNJitsiMeetView;
const call = JitsiMeetModule.call;
const audioCall = JitsiMeetModule.audioCall;
const sendEvent = JitsiMeetModule.sendCommand;

JitsiMeetModule.call = (url, userInfo) => {
  userInfo = userInfo || {};
  call(url, userInfo);
}
JitsiMeetModule.audioCall = (url, userInfo) => {
  userInfo = userInfo || {};
  audioCall(url, userInfo);
}
JitsiMeetModule.muteAudio = () => {
  sendEvent("setAudioMuted");
}
JitsiMeetModule.muteVideo = () => {
  sendEvent("setVideoMuted");
}

export default JitsiMeetModule;


