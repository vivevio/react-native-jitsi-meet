#import <JitsiMeet/JitsiMeet.h>

#import <React/RCTComponent.h>

@interface RNJitsiMeetView : JitsiMeetView
@property (nonatomic, copy) RCTBubblingEventBlock onConferenceJoined;
@property (nonatomic, copy) RCTBubblingEventBlock onConferenceTerminated;
@property (nonatomic, copy) RCTBubblingEventBlock onConferenceWillJoin;
@property (nonatomic, copy) RCTBubblingEventBlock onEnteredPip;
@property (nonatomic, copy) RCTBubblingEventBlock onVideoMuted;
@property (nonatomic, copy) RCTBubblingEventBlock onAudioMuted;
@end