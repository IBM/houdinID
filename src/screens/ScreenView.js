import React, { Component } from "react";
import { Text, View, } from 'react-native';

import HomeScreenComponent from "./components/HomeScreenComponent";
import EndScreenComponent from "./components/EndScreenComponent";
import QuestionComponent from "./components/QuestionComponent";
import BypassMethodsComponent from "./components/BypassMethodsComponent";
import LockDetail from "./components/LockDetail";
import AllLocksComponent from "./components/AllLocksComponent";
import BypassDetailComponent from "./components/BypassDetailComponent";
import CustomizeComponent from "./components/CustomizeComponent";
import ReconModeComponent from "./components/ReconModeComponent";
import TopBarComponent from "./components/TopBarComponent";
import MoreComponent from "./components/MoreComponent";
import AboutComponent from "./components/AboutComponent";
import DifficultyComponent from "./components/DifficultyComponent";
import ContributeComponent from "./components/ContributeComponent";
import GlossaryComponent from "./components/GlossaryComponent";



let PossibleLocks = [
{
  Name:  "Abloy Bodaguard", 
  commonAttributes: [ "Abloy", "Mechanical", "Key", "Lever", ], 
  image: require("../../assets/abloyBodaguard.jpg"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["vuln1", "vuln2", "vuln3"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Abloy Classic", 
  commonAttributes: [ "Abloy", "Mechanical", "Key", "Cylinder", "Disc-detainer",  ], 
  image: require("../../assets/abloyClassic.jpg"),

  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Impressioning", "Decoding"], 
  about: "The Abloy Classic is a disc-detainer lock made by Abloy. The Classic uses between 5 and 11 discs that interface with a sidebar. Designed in 1907 by Emil Henriksson, it is distinguished as being the first disc-detainer lock design. Classic models are easily identified because they use a half circle ('D' shape) keyway. The Classic has since been superseded by many other models, the latest of which is the Abloy Protec.", 
  attack: "If a round sidebar is used the front of the cylinder can be drilled and sidebar removed to unlock the lock. For lockpicking, a front-tensioned Classic will only rotate the first disc 90°. Others will be tensioned elsewhere and will the first disc will rotate freely.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Abloy Disklock / Disklock Pro", 
  commonAttributes: [ "Abloy", "Mechanical", "Key", "Cylinder", "Disc-detainer", ], 
  image: require("../../assets/abloyDisklock.jpg"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Impressioning", "Decoding"],  
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Abloy Exec", 
  commonAttributes: [ "Abloy", "Mechanical", "Key", "Cylinder", "Disc-detainer", ], 
  image: require("../../assets/abloyExec.jpg"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Impressioning", "Decoding"],  
  about: "The Exec is a disc-detainer lock made by Abloy. The Exec uses between 9 and 11 discs that interface with a sidebar. It is a modified version of the Abloy Disklock that includes a Disk Steering System (DSS) designed to protect against lockpicking. Unlike the Disklock, the Exec only allows the key to be turned one direction. As such, it is primarily used in padlocks and cam locks. The Exec model uses an 'H' shaped keyway. The Exec is a newer form of the Abloy Profile and Abloy Disklock. It has since been superceded by the Abloy Protec.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Abloy Profile / High Profile", 
  commonAttributes: [ "Abloy", "Mechanical", "Key", "Cylinder", "Disc-detainer", ], 
  image: require("../../assets/abloyProfile.jpg"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Impressioning", "Decoding"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Abloy Protec 2", 
  commonAttributes: [ "Abloy", "Mechanical", "Key", "Cylinder", "Disc-detainer", ], 
  image: require("../../assets/abloyProtec.jpg"),
  rating: require("../../assets/difficultyRatingHard2.png"),
  knownBypass: "No",
  easilyDestroyed: "No",
  antiPicking: "Disc Blocking System",
  pins: "9 or 11 discs",
  vulnerableTo: ["Lockpicking", "Impressioning", "Decoding"], 
  about: "The Profile (or High Profile) is a disc-detainer lock made by Abloy. The Profile uses between 5 and 14 discs that interface with a sidebar. The High Profile is a modified version of the standard Profile that allows for extended master keying capabilities. Profile models are easily identified because they use a 'C' shape keyway. The Profile and High Profile are a newer form of the Abloy Classic, and both have since been superceded by many other models, the latest of which is the Abloy Protec.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "ABUS Diskus 20", 
  commonAttributes: [ "ABUS", "Mechanical", "Key", "Cylinder", "Disc-detainer", "nope", "nope", "nope"  ], 
  image: require("../../assets/abusDiskus2070.jpg"),
  rating: require("../../assets/difficultyRatingMedium2.png"),
  knownBypass: "No",
  easilyDestroyed: "No",
  antiPicking: "Spool Pins",
  pins: "5",
  vulnerableTo: ["Lockpicking"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "ABUS Diskus 25", 
  commonAttributes: [ "ABUS", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Dimple", "nope", "nope"  ], 
  image: require("../../assets/abusDiskus25.jpg"),
  rating: require("../../assets/difficultyRatingMedium2.png"),
  knownBypass: "No",
  easilyDestroyed: "No",
  antiPicking: "Spool Pins",
  pins: "5",
  vulnerableTo: ["Lockpicking"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "ABUS Diskus 26", 
  commonAttributes: [ "ABUS", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Traditional", "nope", "nope"  ], 
  image: require("../../assets/abusDiskus26.jpg"),
  rating: require("../../assets/difficultyRatingMedium2.png"),
  knownBypass: "No",
  easilyDestroyed: "No",
  antiPicking: "Spool Pins",
  pins: "5",
  vulnerableTo: ["Lockpicking"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
},
{
  Name:  "ABUS Diskus 28", 
  commonAttributes: [ "ABUS", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Traditional", "nope", "nope"  ], 
  image: require("../../assets/abusDiskus2870.jpg"),
  rating: require("../../assets/difficultyRatingMedium2.png"),
  knownBypass: "No",
  easilyDestroyed: "No",
  antiPicking: "Spool Pins",
  pins: "5",
  vulnerableTo: ["Lockpicking"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "ABUS ZB", 
  commonAttributes: [ "ABUS", "Mechanical", "Combination", "n/a", "n/a", "n/a", "Multiple Dial", "nope"  ], 
  image: require("../../assets/abusZB.jpg"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["TBD"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "ASSA 10450", 
  commonAttributes: [ "ASSA", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Traditional", "nope", "nope"  ], 
  image: require("../../assets/assa10450.jpeg"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Key Bumping", "Impressioning", "Decoding"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "ASSA 700", 
  commonAttributes: [ "ASSA", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Traditional", "nope", "nope"  ], 
  image: require("../../assets/assa700.jpeg"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Key Bumping", "Impressioning", "Decoding"], 
  about: "The 700 is a series of pin-tumbler locks made by ASSA. 700 cylinders feature a single shear line designed for domestic environments with high use. All models have seven pin stacks and use security pins. Cylinders are available in mortise, rim, and Scandinavian profiles and can be fitted in specialized padlock housings.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "ASSA 7241", 
  commonAttributes: [ "ASSA", "Mechanical", "Key", "Lever", "n/a", "n/a", "nope", "nope"  ], 
  image: require("../../assets/assa7241.jpg"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Impressioning", "Decoding", "Bypass"], 
  about: "The 7241 is a lever lock made by ASSA. It features seven levers and a rotating curtain. The lock features seven spring-loaded levers which must be slid to the correct position to allow the probe to enter the gates on each lever. The levers are serrated in order to cause false sets and the keyway is closed off by a rotating curtain to prevent manipulation and decoding. The probe is not connected directly to the bolt but rather to a separate lever which blocks the bolt from moving unless it can enter the gates. The fence lever and bolt is connected mechanically to the curtain and their movement is powered by the key-turning action. This key mechanism derives ultimately from Strutt's lever lock of 1819 — the first to use end-gated levers.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "ASSA d12", 
  commonAttributes: [ "ASSA", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Traditional", "nope", "nope"  ], 
  image: require("../../assets/assaD12.jpg"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Decoding", "Impressioning", "Key Bumping"], 
  about: "The d12 is a medium security pin tumbler made by ASSA for residential or commercial use. It is intended as a successor to the ASSA 700 series which dates back to 1948. It features six pins and numerous security improvements over the original cylinder, including a paracentric keyway and patented key profiles.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Ace II", 
  commonAttributes: [ "Chicago", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Tubular", "nope", "nope"  ], 
  image: require("../../assets/aceII.jpg"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["TBD"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "eyeLock Nano NXT", 
  commonAttributes: [ "eyeLock", "Electronic", "Biometric", "nope", "nope", "nope", "nope", "Retina Scan"  ], 
  image: require("../../assets/eyeLockNano.jpg"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["TBD"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Ilco Wafer Padlock", 
  commonAttributes: [ "Ilco", "Mechanical", "Key", "Cylinder", "Wafer", "nope", "nope", ""  ], 
  image: require("../../assets/ilcoWaferLock.png"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["TBD"],  
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "IRIS iCAM D1000", 
  commonAttributes: [ "IRIS", "Electronic", "Biometric", "nope", "nope", "nope", "nope", "Retina Scan"  ], 
  image: require("../../assets/irisICAMD1000.png"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["TBD"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Kwikset Aura", 
  commonAttributes: [ "Kwikset", "Hybrid", "nope", "nope", "nope", "nope", "nope", "nope"  ], 
  image: require("../../assets/kwiksetAura.jpg"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["TBD"],  
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Kwikset Classic", 
  commonAttributes: [ "Kwikset", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Traditional", "nope", "nope" ], 
  image: require("../../assets/placeholder.png"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Impressioning", "Decoding", "Bumping"], 
  about: "The Classic is a pin-tumbler lock made by Kwikset. It is one of the most common cylinders used in residential door locks in the United States. The KW1 keyway used by the Classic is extremely popular in North America, with many other companies providing interoperable locks and keys. The Classic is slowly being phased out by the Kwikset SmartKey due to concerns over key bumping.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Kwikset Halo", 
  commonAttributes: [ "Kwikset", "Hybrid", "nope", "nope", "nope", "nope", "Push Button", "n/a" ], 
  image: require("../../assets/kwiksetHalo.png"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["TBD"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Kwikset Halo Touch", 
  commonAttributes: [ "Kwikset", "Hybrid", "n/a", "nope", "nope", "nope", "nope", "nope" ], 
  image: require("../../assets/kwiksetHaloTouch.png"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["TBD"],  
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Kwikset Kevo", 
  commonAttributes: [ "Kwikset", "Electronic", "Fob or Phone", "nope", "nope", "nope", "nope", "nope" ], 
  image: require("../../assets/kwiksetKevo.png"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["TBD"],  
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Kwikset SmartCode", 
  commonAttributes: [ "Kwikset", "Hybrid", "nope", "nope", "nope", "nope", "nope", "nope" ], 
  image: require("../../assets/kwiksetSmartCode.jpg"), 
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["TBD"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Kwikset SmartKey", 
  commonAttributes: [ "Kwikset", "Mechanical", "Key", "Cylinder", "Wafer", "nope", "nope", "nope"  ], 
  image: require("../../assets/kwiksetSmartKey.jpg"), 
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Tryout Keys", "Decoding", "Impressioning", "Bypass", "Destructive Entry"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "The Smart Key (or SmartKey) is a user-rekeyable wafer lock made by Kwikset and Weiser (Canada). It uses five wafers that interact with a sidebar to provide protection against lockpicking and key bumping. The Smart Key was Kwikset's response to the media frenzy concerning key bumping, specifically to address the weaknesses of their traditional pin-tumbler cylinders. Though it has succeeded in providing resistance to bumping, vulnerabilities in the Smart Key design have shown it can be attacked in a variety of ways. The Smart Key is easily identified by the small, rectangular hole to the left of the keyway. The Smart Key uses five wafers that can be set to six positions each, giving it a total of 7,776 (65) key differs. This number is drastically reduced because of poor tolerances that accept half cuts at every position, reducing the number of real differs to 243 (35). Unlike traditional wafer locks, the Smart Key's user-rekeying ability heavily modifies the internals of the lock. Instead of the key directly interacting with the wafers, it interacts with a series of guide pins. The guide pins hook into the wafers at different levels (depending on the bitting of each wafer) to raise them to the proper position. Wafers provide pick resistance in the form of serrations on the side of the wafer that engages the sidebar. Because the lock is not pin-tumbler based, it is also not subject to key bumping attacks. When the user wants to rekey the lock, the working key is used to rotate the plug 90° clockwise. A special tool known as the 'Smart Key' is used on the small hole to the left of the keyway. This physically disengages the sidebar and wafers from the guide pins and allows the working key to be removed. A new key can be inserted and the plug rotated back to the default position. When this is done, the sidebar and wafers slide back onto the new position of the guide pins, and rekeys the lock.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Kwikset Titan", 
  commonAttributes: [ "Kwikset", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Traditional", "nope", "nope" ], 
  image: require("../../assets/kwiksetTitan.jpg"), 
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Bumping", "Impressioning", "Decoding"],  
  about: "The Titan is a pin-tumbler lock made by Kwikset. It is a modified version of the Kwikset Classic that uses six pins instead of five, and has a slightly different key to accommodate this. The KW10 keyway used by the Titan is nearly identical to the KW1 keyway; but it has an additional slot at the top, allowing for the insertion of the longer KW10 key. The Titan is slowly being phased out(?) by the Kwikset SmartKey due to concerns over key bumping. The Titan is a traditional pin-tumbler that uses six pin stacks. To open the lock, all pin stacks must be aligned at the shear line to allow the plug to rotate. There are six key pin heights and seven key cut depths with the use of master pins. The Titan has a MACS of 4. Many Classic cylinders come with construction keying dimples on the plug. The Titan uses the same Classic key pins that are slightly tapered on both ends. Neither Classic nor Titan cylinders require the use of security pins but often contain a couple of spool drivers.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Masterlock 1500", 
  commonAttributes: [ "Masterlock", "Mechanical", "Combination", "nope", "nope", "nope", "Rotary/Single Dial", "nope" ], 
  image: require("../../assets/masterlock1500.jpg"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet", 
  vulnerableTo: [""],  
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Masterlock 175", 
  commonAttributes: [ "Masterlock", "Mechanical", "Combination", "nope", "nope", "nope", "Multiple Dial", "nope" ], 
  image: require("../../assets/masterlock175.jpg"),
  rating: require("../../assets/difficultyRatingEasy2.png"),
  knownBypass: "Yes",
  easilyDestroyed: "Yes",
  antiPicking: "NA",
  pins: "NA",
  vulnerableTo: ["Decoding", "Bypass"], 
  about: "Master Lock No 175 is a resettable combination padlock made by Master Lock. It has four dials with the digits 0-9. This results in total of 10,000 theoretical permutations. The Master Lock No 175 series includes solid brass bodied locks. Master now makes the same lock in steel as the M176 and a model of M175 that has a different style of internals. The locks described below take a change key, the M175 combination is designed to be changed by specific manipulation of the shackle(like the Master Lock No 975).", 
  attack: "Decoding - The combination can discovered by using a piece of feeler gauge or other thin metal to feel for the flat on the wheel. Test at .5 of every number. The flat should be positioned -2.5 from the center of the flat. Bypass - Multiple tools exist to bypass the inputting the correct combination. Push the shackle in. Insert a Mini Knife or EZ Decoder is inserted next to the wheels, pushed toward the top of the lock, and levered upward to lift the actuator. Then release the shackle. In earlier versions(and possibly still) a hook pick could also be inserted at the top of any dial while the shackle is depressed. Swept in either direction the tip of the pick moves over the fingers of the actuator. While the tip of the pick is over the fingers release the shackle and the lock will open.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Masterlock 5422D", 
  commonAttributes: [ "Masterlock", "Mechanical", "Combination", "nope", "nope", "nope", "Push Button", "nope" ], 
  image: require("../../assets/masterlock5422D.jpg"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet", 
  vulnerableTo: ["TBD"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.",
  source: "www.lockwiki.com",
},
{
  Name:  "Medeco BiLevel", 
  commonAttributes: [ "Medeco", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Traditional", "nope", "nope" ], 
  image: require("../../assets/medecoBilevel.jpg"), 
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Key Bumping", "Impressioning", "Decoding"], 
  about: "The BiLevel (or Medeco3 BiLevel) is a pin-tumbler lock manufactured by Medeco. Unlike Medeco's other systems which use axial rotation, the BiLevel uses pin-tumblers and a traditional shear line as the primary locking mechanisms. Medeco advertises the BiLevel for key control rather than security against picking and destructive entry. The BiLevel is a lower security form of the Medeco M3. It is easily identified by the 'm3' logo to the left of the keyway. Unlike Medeco's other systems that use axial rotation to properly position pin-tumblers with sidebar legs, the BiLevel uses a sidebar that only interfaces with the M3 slider component. The BiLevel is marketted as a lower security (and cheaper) version of the M3 that can be integrated into existing M3 systems.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.",
  source: "www.lockwiki.com",
},
{
  Name:  "Medeco CLIQ", 
  commonAttributes: [ "Medeco", "Hybrid", "nope", "nope", "nope", "nope", "nope", "nope" ], 
  image: require("../../assets/medecoCLIQ.png"),
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet", 
  vulnerableTo: ["TBD"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.",
  source: "www.lockwiki.com",
},
{
  Name:  "Medeco KeyMark", 
  commonAttributes: [ "Medeco", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Traditional", "nope", "nope" ], 
  image: require("../../assets/medecoKeymark.jpg"), 
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Key Bumping", "Impressioning", "Decoding"],  
  about: "The KeyMark is a pin-tumbler lock made by Medeco. The KeyMark is designed for installations where key control is more imporant than resistance to physical attacks, but it does offer basic defenses against picking and destructive entry. KeyMark is best known for its restrictive keyway, marketed as the 'Security Leg'. The KeyMark is a standard pin-tumbler lock that uses six pin stacks. The key raises all pin pairs to the correct height and the plug can be rotated. KeyMark models that use interchangeable cores have a dual shear line mechanism similar to those found in BEST locks. No security pins are used in the Keymark.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.",
  source: "www.lockwiki.com",
},
{
  Name:  "Medeco M3", 
  commonAttributes: [ "Medeco", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Traditional", "nope", "nope" ], 
  image: require("../../assets/medecoM3.jpg"), 
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Decoding", "Bypass", "Key Bumping", "Key Simulation"], 
  about: "The M3 (or m3) is a UL 437 rated pin-tumbler lock made by Medeco. The pin tumblers use axial rotation to interface with a sidebar located at 3 o'clock in the plug. It also features a spring biased slider that restricts movement of the sidebar until properly positioned. The M3 is easily identified by the 'm3' logo to the left of the keyway. It is called the M3 because it is the third generation of Medeco's axial rotation system, following the Medeco Original and Medeco Biaxial designs. The M3 provides enhanced master keying capabilities when compared with previous models, but does not provide a significant security increase. The M3 slider component is also used in the Medeco Bilevel. The M3 uses five or six pin-tumblers that provide axial rotation to interface with a sidebar. The M3 sidebar differs from previous models because it has small grooves cut out where the slider arms fit into. Functionally, it is the same as other Medeco sidebars; pin tumblers are properly rotated by the correct key and the sidebar legs can interface with the gates on each pin-tumbler. The M3 slider is a spring-biased component located under the sidebar. In its default state, the slider arms block the sidebar from retracting. A protrusion on the right side of the key pushes the slider into the correct position and allows the sidebar to retract. Sliders and M3 keys may be master keyed to allow a variety of protrusions to properly position the slider, but the final resting position of the slider is always the same.", 
  attack: "Lockpicking - The M3 slider can be easily compromised with a paper clip, lockpick, or similar object. For this reason it is not considered an effective security enhancement. The Medecoder tool can be used to properly rotate bottom pins once the slider has been compromised. Decoding - The Medecoder tool (among others) can be used to decode the sidebar bitting code of non-ARX pins. Bypass - Widening of the M3 keyway to accomodate the slider allowed for various bypass attacks on M3 locks produced before 2008.",
  source: "www.lockwiki.com",
},
{
  Name:  "Medeco Original", 
  commonAttributes: [ "Medeco", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Traditional", "nope", "nope" ], 
  image: require("../../assets/medecoOriginal.jpg"), 
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Decoding", "Impressioning", "Key Bumping"], 
  about: "The Original is a UL 437 rated pin-tumbler lock made by Medeco. It is well known for the use of rotating bottom (key) pins that interface with a sidebar. The Original has the distinction of being the first pin-tumbler lock to use axial rotation, and is the basis for most other Medeco mechanical locks since. It was previously thought to be one of the most secure locks available, but continued research from the locksport community has proven a variety of attacks are possible, including key bumping. The Original has since been superceded by the Medeco Biaxial and Medeco M3. The Medeco Original uses five or six pin-tumblers that provide axial rotation to interface with a sidebar located at 3 o'clock. Pin-tumblers must be properly raised to the shear line as well as rotated so that the sidebar arms can fall into notches on the side of each pin-tumbler. Axial rotation is provided by the design of the bottom (key) pins and angled bitting cuts on the key. There are 6 depths available for pin-tumblers, allowing 7,776 (65) theoretical key differs in a five pin Original (excluding the sidebar). The sidebar interfaces with notches on the bottom pins. Bottom pins must be properly rotated so that their true notches interface with the sidebar arms. The Original uses three different rotations: [] This allows for 243 (35) and 729 (36) sidebar differs in five and six pin Originals, respectively. The Original uses 2-3 mushroom top pins in each cylinder to provide manipulation resistance to traditional lockpicking. The sidebar notches on the sides of the bottom pins may also have false notches to resist manipulation by rotation. In addition, 'ARX' pins are used to protect against manipulation by rotation. ARX pins close the sidebar notches before they reach the end of the pin, making it so they cannot be readily grabbed by a tool. Resistance to forced entry is provided in the form of hardened steel rods and discs. In the plug rods are in the 3, 9, and 12 o'clock positions. In the cylinder, two crescent shaped discs are placed at the 12 and 3 o'clock positions to protect the pin-chambers and the sidebar. As a secondary locking mechanism, the sidebar itself also helps to protect against a variety of forced entry techniques. Bottom pins may also have a hardened steel core to resist drilling.", 
  attack: "The validity of key bumping attacks against Medeco cylinders has been debated between Medeco and the locksport community. Research done by Marc Weber Tobias and Tobias Bluzmanis has shown these systems are vulnerable to a wide variety of attacks, including bumping. Lockpicking attacks against this lock were previously thought extremely difficult due to axial rotation. A tool called the 'Medecoder', developed by Jon King, made this process much easier and at the same time allowed for decoding of the sidebar code.",
  source: "www.lockwiki.com",
},
{
  Name:  "Medeco XT", 
  commonAttributes: [ "Medeco", "Electronic", "Key", "nope", "nope", "nope", "nope", "nope" ], 
  image: require("../../assets/medecoXT.png"), 
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["TBD"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "METechs MID300", 
  commonAttributes: [ "METechs", "Electronic", "Card", "nope", "nope", "nope", "nope", "nope" ], 
  image: require("../../assets/metechsMID300.png"), 
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["TBD"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio." ,
  source: "www.lockwiki.com",
},
{
  Name:  "Schlage Everest", 
  commonAttributes: [ "Schlage", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Traditional", "nope", "nope" ], 
  image: require("../../assets/schlageEverest.jpg"), 
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Decoding", "Impressioning", "Key Bumping"], 
  about: "The Everest is a pin-tumbler lock made by Schlage. It uses six pin-tumblers and a single side pin as locking components. The Everest is notable because of the security implications of the side pin. It is commonly referenced in locksport literature as an example of defeating the security of auxilliary locking mechanisms. It is easily identified by the Everest logo on the face of the plug. The Everest has since been superseded by the Schlage Primus. The Everest functions much like a traditional pin-tumbler cylinder, but with the addition of the side pin. There are 6 pin-tumblers with 10 depths each, a total of 1,000,000 (106) theoretical key differs. The side pin is on the bottom of the plug in the 5 o'clock position. It is spring biased into the cylinder, and prevents rotation of the plug in this position. The side pin is a static size and all Everest keys will lift the side pin to the correct position. The side pin does not check to see if it was overlifted, much like the early Egyptian pin-tumbler locks.", 
  attack: "All Everest keys have the same side pin bitting. Any key blank with the proper keyway profile can be used to make a working key or a bump key. This also means that any Everest key may be filed in half and used to neutralize the side pin. The modified key can also be used to provide tension. The side pin can also be picked manually, if need be.",
  source: "www.lockwiki.com",
},
{
  Name:  "Schlage Primus", 
  commonAttributes: [ "Schlage", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Traditional", "nope", "nope" ], 
  image: require("../../assets/schlagePrimus.jpg"), 
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: [""], 
  about: "The Primus (or Classic Primus, Primus XP) is a UL 437 rated pin-tumbler lock made by Schlage. It uses six pin-tumblers and a sidebar that requires finger pins to be raised and rotated properly. The Primus is functionally identical to the ASSA Twin Combi lock, but it does not include as many anti-lockpicking and key control mechanisms. The patent protection on Primus keys ended in 2007. The Primus is an updated version of the Schlage Everest. The Schlage Everest Primus is an alternate version of the Primus that enhances key control capabilities. The Primus uses six pin-tumblers and fix sidebar finger pins. Unlike its ASSA counterpart, the Primus does not provide any security pins by default. There are 10 depths available for bottom (key) pins. Key pins are numbered 0-9 sized .165'' to .300 with a step of .015''. There are eight master pins numbered 2-8 sized 0.030'' to 0.135'' with a step of .015''. Driver pins come in three sizes (1-3) from .235'' to .165'' with a step of .035''. These drivers provide pseudo-balanced pin stacks; a 1 driver is used if the size of the key and master pin stack is 0-3, 2 if 4-6, and 3 if 7-9. Any key/master pin stack larger than 9 is invalid (the master pin would not drop down far enough to align at the shear line. In total, there are 1,000,000 (106) theoretical key differs for the pin-tumbler portion of the lock. The sidebar, located in the 8 o'clock position, is pushed out by two springs. The sidebar bitting on the key raises finger pins which interface with the sidebar. Sidebar finger pins must be raised and rotated properly for the sidebar to retract. When both the sidebar pins and the pin-tumbler are aligned the plug can rotate.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Schlage SecureKey", 
  commonAttributes: [ "Schlage", "Mechanical", "Key", "Cylinder", "Slider", "nope", "nope", "nope" ], 
  image: require("../../assets/schlageSecureKey.jpg"), 
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["Lockpicking", "Decoding", "Impressioning", "Key Bumping", "Destructive Entry"], 
  about: "The SecureKey is a user-rekeyable lock made by Schlage. It uses five sliders that interact with a sidebar to provide protection against lockpicking and key bumping. The SecureKey is similar in design, functionality, and name to the Kwikset SmartKey. The rekeying mechanisms of both locks have considerable differences, however. The SecureKey can be identified by the traditional Schlage C keyway warding and the non-pin components visible at the front of the plug. On August 1, 2011 Schlage announced that it will stop production and sale of the SecureKey by December 31, 2011. This comes after a lawsuit filed by Kwikset claiming that the SecureKey was falsely advertised and infringed on the Kwikset SmartKey patent. The SecureKey features five sliders which need to be aligned properly to allow a single sidebar to retract. It is user-rekeyable, meaning that it can be rekeyed by users of the system without disassembly or special skills. This is done through the use of modified 'Reset' keys. Unlike traditional slider locks, SecureKey sliders are a two part design featuring a guide pin and a slider. Guide pins are small components that resemble pin-tumblers with a protrusion along one side which connects into each slider. Guide pins have a concave top which acts as a retainer for a spring in each chamber. Each slider has one true gate on the sidebar facing side, and ten slots on the opposite side which mate with the protrustions on guide pins. All sliders must be positioned at the same level, but the mating between guide pins and sliders controls how far a given bitting cut on the key will raise each slider. There are ten bitting positions for each slider, allowing for a total of 100,000 (105) theoretical key differs. The sliders themselves offer minimal lockpicking protection via a ledge on the top of the slider which acts as a crude anti-picking mechanism. The design of the cylinder also acts to prevent rotation of the plug when sliders are positioned too high or too low. The sliders and sidebar are housed in the plug directly, but the guide pins reside in a separate housing in the upper right quadrant of the plug. During the reset procedure this housing physically disconnects from the plug and disengages the guide pins from the sliders but holds the sliders in place at the unlocked position. The blue reset key features a protrusion on the right-hand side which depresses a spring-loaded blocking mechanism in the plug. When this is depressed and the plug is rotated to the 11 o'clock position the guide pin housing disengages, separating the two halves. Once separated, inserting a new reset key and returning the plug back to 12 o'clock re-positions the guide pins and mates them with the sliders at their new position. In the reset position the keyway is narrowed by the displacement of the guide pin housing. The reset keys have a thinner profile which allows them to be removed and inserted in this position.", 
  attack: "Various decoding and destructive attacks against the Kwikset SmartKey also work against the SecureKey. Key bumping can be used to open the lock when a bump key is made using a reset key blank. This is technically different from traditional key bumping because of the lack of pin-tumblers. Instead, this attack exploits poor sidebar tolerances and the lack of false gates on each slider.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Yale 324", 
  commonAttributes: [ "Yale", "Mechanical", "Key", "Warded", "nope", "nope", "nope", "nope" ], 
  image: require("../../assets/yale324.jpg"), 
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["TBD"], 
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
{
  Name:  "Yale 850", 
  commonAttributes: [ "Yale", "Mechanical", "Key", "Cylinder", "Pin-Tumbler", "Traditional", "nope", "nope" ], 
  image: require("../../assets/yale850.jpg"), 
  rating: require("../../assets/ratingNoData.png"),
  knownBypass: "no data yet",
  easilyDestroyed: "no data yet",
  antiPicking: "no data yet",
  pins: "no data yet",
  vulnerableTo: ["TBD"], 
  about: "The Yale 850 Padlock is a pin-tumbler padlock made by Yale. It is a solid body padlock with an inner cylinder. This padlock cylinder is a pin-tumbler lock. The key only turns clockwise to open the lock.", 
  attack: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut imperdiet est. Morbi in lorem mauris. Fusce volutpat commodo dui ac efficitur. Duis posuere egestas nunc, et consectetur diam hendrerit eget. Mauris quis arcu justo. Nam molestie mi in leo dapibus fringilla. Quisque in augue ac est elementum venenatis vitae at justo. Curabitur condimentum pharetra finibus. Donec faucibus tortor eu efficitur tincidunt. Nulla quis lacinia odio.", 
  source: "www.lockwiki.com",
},
];

// confirmed attributes - ARRAY
let confirmedAttributes = [];

let BypassArray = [
  {
    method: "Shim Tool", 
    image: require("../../assets/padlockShim.jpg"),
    summary: [],
    useOn: [],
    toolsNeeded: [],
    detail: "Spring loaded bolts or latches are subject to an attack known as shimming. In shimming, a wedge is used to separate the bolt from the spring, or the bolt from the recess (such as in a door). The classic credit card trick to open doors is a popular example of this technique. Low-security padlocks are also commonly susceptible to shimming of the shackle. Shimming against doors is also known as loiding. Padlock shimming is perhaps the most ubiquitous method of bypass. It involves taking a small piece of metal and separating the locking bolt from the shackle in a padlock. Many low to medium security padlocks are vulnerable to this technique. Shims are available commercially, but can be made quickly with aluminum cans or, surprisingly, sufficiently strong paper. Higher security padlocks typically use techniques that make shimming impossible. The most common being the use of ball bearings instead of a spring-loaded catch, noticeable because the indentations on the shackle are round instead of wedge-shaped. Handcuffs may be shimmed in a similar manner to padlocks. It involves using a small piece of metal and directly retracting the ratchet or interefering with the ratchet's ability to detain the pawl arm. This bypasses the lock mechanism entirely and is the reason that most handcuffs have a double lock mechanism. " 
  },
  // {method: "Actuator Attack", image: require("../../assets/actuatorAttack.png"), detail: "Flaws in the design and placement of the locking actuator for the cylinder may allow a bypass tool to retract the locking bolt without the proper key inserted, or even internal components being in the proper positions. Various lock manufacturers have suffered from this vulnerability in the past. Attacks against the cam or actuator are a class of bypass that is surprisingly effective. In this attack, a poorly designed cam or actuator may be manipulated without affecting components. This vulnerability is somewhat uncommon, but extremely effective and easy to do when present. Because tools must generate a mild amount of torque as well as travel through the plug, they leave distinct tool marks. The Code Lock (4000 series) electromechanical lock is subject to a bypass attack that manipulates the bolt actuator." },
  {
    method: "Underdoor Tool", 
    image: require("../../assets/underdoorTool.png"), 
    detail: "The underdoor tool is comprised of 2 parts, and designed to open lever handle doors from the outside via reaching under the door. To meet commercial building codes lever handles are installed, in place of round handles. This insures that during an emergency situation the inside door remains unlocked while the outside door lever is locked. An under door tool is slipped underneath the door, given a wide enough gap,  and then rotated so that the loop on the end slips over the lever handle. Once the loop is on the handle, the tool is pulled, applying pressure on the lever handle and opening the door. An over-the-door variant on this involves using a strip of film to do the same thing, but from above." 
  },
  {
    method: "Crash Bar Tool", 
    image: require("../../assets/jTool.jpg"), 
    detail: "Many doors in businesses and offices can be locked from the ourside, but can be easily pushed open by a crash bar on the inside. This is to ensure that egress is easily possible for all occupants, regardless of physical ability. A crash bar tool is designed to slip between the gap in the doors, rotate to come into contact with the crash bar, and then be pulled against the crash bar, opening the door. Crash bar tools can be bought or made, but they have to be stiff enough to apply adequate pressure against the crash bar." 
  },
  {
    method: "Thumb Latch Tool", 
    image: require("../../assets/thumbLatchTool2.png"), 
    detail: "Locks that use a thumb-turn or lever handle on the inside of the door may be vulnerable to bypass. In this attack a tool is slipped under the door and attempts to swing and catch onto the thumb-turn or lever. The tool is used to turn or pull until the door is opened. This may or may not have forensic evidence, depending on the material of the tool, handle, and how many attempts are necessary to gain entry." 
  },
  {
    method: "Can of Air", 
    image: require("../../assets/canOfAir.jpg"), 
    detail: "Many external doors in businesses and offices can be locked from the outside, but are triggered to opened by a motion sensor from the inside. This is to ensure that egress is easily possible for all occupants, regardless of physical ability. These sensors, which are often PIR (Passive Infrared) motion sensors, are often designed to detect temperature differences, and extrapolate motion from that. Thus, when a human approaches the sensor, it will detect an increase in temperature with respect to the space around the person, and be triggered to open. However, many of these sensors do not differentiate between a relative increase and decrease in temperature. This can be exploited using an air duster, i.e. a can of compressed air. If you hold a can of compressed air upside down, cold gas will collect at the bottom/near the nozzle, and the air you spray out will be cold. So, to trigger a motion sensor from the outside (locked side), if there is a small gap in the door, you can stick the can's straw through the door and spray the gas at the motion sensor. It will percieve the cold temperature, interpret this as motion, and be triggered to unlock.." 
  },
  {
    method: "Air Wedge", 
    image: require("../../assets/airWedge.jpg"), 
    detail: "An air wedge is used in cases where there is not enough gap around a door to enact another attack. The air wedge is used essentially as intended: insert between door and frame, or between two doors, and inflate. This will force the planes apart, leaving a gap through which other tools may be put." 
  },
  //{method: "Loiding", image: require("../../assets/canOfAir.jpg"), detail: "Loiding (or carding) is a bypass technique that uses a flat object, such as some, e.g. a US, credit card, to retract inward-opening spring-supported latches. The flat object, referred to as a shim or 'loid, is slid between the latch and strike plate and used to push back (i.e retract) the latch. Some modern spring-latch doors use a deadlatch or dead locking plunger to prevent loiding. Loiding may also be referred to as 'slipping' or shimming, though that is a more generic technique used to open various types of locking mechanisms. The term loiding comes from celluloid, used for early photographic and cinematic film, strips or sheets of which were cut to size and used for entry. It became known amongst many British criminals as a loid. Loiding is generally a surreptitious attack but certain tools and techniques might leave behind forensic evidence. " },
];

let lockMatches = [];

export default class ScreenView extends Component {
  constructor(props) {
    super(props);
    this.state = {appState: "home", selectedLockDetail: ""};

    this.changeStateTo = this.changeStateTo.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.endQuestionsAndSelectLock = this.endQuestionsAndSelectLock.bind(this);
    this.chooseLockDetail = this.chooseLockDetail.bind(this);
    this.chooseBypassDetail = this.chooseBypassDetail.bind(this);
  }

  changeStateTo(toState, optionalCallback) {
    this.setState({appState: toState}, optionalCallback);
  };

//_callback 
  nextQuestion(choiceIndex) {
    this.decisionTree.next(choiceIndex);
  }

  searchForLocks () {
    console.log("[ScreenView:] searchForLocks called!");
  }

  // how we get from EndScreen to LockDetail
  endQuestionsAndSelectLock(selectedLock, resetTree) {
    this.setState({selectedLockDetail: selectedLock}, function() {
      this.setState({appState:"lockDetail"}, resetTree());
    });
  }

  // how we get from AllLocks to LockDetail
  chooseLockDetail (currentLock) {
    //console.log("[ScreenView] chooseLockDetail has been called!")
    //console.log("[ScreenView] currentLock from AllLocks: " + currentLock);
    this.setState({selectedLockDetail: currentLock}, function() {
      //console.log("[ScreenView]: selectedLockDetail: " + this.state.selectedLockDetail);
      // this.setState({appState:"lockDetail"}, function() { console.log("[ScreenView] appState: " + this.state.appState) } );
      this.setState({appState:"lockDetail"});
    });
  }

  // how we get from BypassMethods to BypassDetail
  chooseBypassDetail (currentMethod) {
    this.setState({selectedBypassDetail: currentMethod}, function () {
        this.setState({appState:"bypassDetail"});
    });
  }


  render() {
    console.log("[ScreenView] appState: " + this.state.appState);
    if (this.state.appState == 'home') {
      return (
        <HomeScreenComponent changeParentState={this.changeStateTo}></HomeScreenComponent>
      );

    } else if (this.state.appState == 'question') {
      return (
        <QuestionComponent
          changeParentState={this.changeStateTo}
          endQuestions={this.endQuestionsAndSelectLock}
        >
        </QuestionComponent>
      );

    } else if (this.state.appState == 'end') {
      return (
        <EndScreenComponent 
          changeParentState={this.changeStateTo}
          lockMatches={lockMatches}
          confirmedAttributes={confirmedAttributes}
        >
        </EndScreenComponent>
      );
    
    } else if (this.state.appState == 'lockDetail') {
      // console.log("[from ScreenView]: " + this.state.selectedLock);
    return (
      <LockDetail
        changeParentState={this.changeStateTo}
        selectedLock={this.state.selectedLockDetail}
        PossibleLocks={PossibleLocks}
      >
      </LockDetail>
    );

    } else if (this.state.appState == 'search') {
      return (
        <AllLocksComponent 
          changeParentState={this.changeStateTo}
          allLocks={PossibleLocks}
          callLockDetail={this.chooseLockDetail}
        >
        </AllLocksComponent>
      );
    
    } else if (this.state.appState == 'bypass') {
      return (
        <BypassMethodsComponent 
          changeParentState={this.changeStateTo}
          callBypassDetail={this.chooseBypassDetail}
          bypassArray={BypassArray}
        >
        </BypassMethodsComponent>
      );
    
    } else if (this.state.appState == 'bypassDetail') {
        return (
          <BypassDetailComponent 
            changeParentState={this.changeStateTo}
            selectedMethod={this.state.selectedBypassDetail}
            bypassArray={BypassArray}
          >
          </BypassDetailComponent>
        );
    } else if (this.state.appState == 'more') {
      return (
        <MoreComponent
          changeParentState={this.changeStateTo}
        >
        </MoreComponent>
      );
    } else if (this.state.appState == 'about') {
      return (
        <AboutComponent
          changeParentState={this.changeStateTo}
        >
        </AboutComponent>
      );
    } else if (this.state.appState == 'difficulty') {
      return (
        <DifficultyComponent
          changeParentState={this.changeStateTo}
        >
        </DifficultyComponent>
      );
    } else if (this.state.appState == 'contribute') {
      return (
        <ContributeComponent
          changeParentState={this.changeStateTo}
        >
        </ContributeComponent>
      );
    } else if (this.state.appState == 'glossary') {
      return (
        <GlossaryComponent
          changeParentState={this.changeStateTo}
        >
        </GlossaryComponent>
      );

    } else {
      return (
        <View>
          <TopBarComponent changeParentState={this.changeStateTo}></TopBarComponent>
          <Text style={{fontSize: 14, marginLeft: 16, color: 'red', shadowColor: 'black'}}>Uh Oh! Looks like that page doesn't exist yet... :)</Text>
        </View>
        );
      };
    }
  }
