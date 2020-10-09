var LockArrayObj = {
  //Level 0: Is this lock mechanical, electronic, or a hybrid?
  toAskHere: {
    question: "Is this lock mechanical, electronic, or a hybrid?", answers: 
    ["Mechanical", "Electronic", "Hybrid"]
  },
  next: [
    {
      // Level 1: If answer is Mechanical, ask: Is this lock keyed or a combination lock?
      toAskHere: {
        question: "Is this lock keyed or a combination lock?", answers: 
        ["Keyed", "Combination"],
      },
      next: [
        {
          // Level 2: If answer is Keyed, ask: Is this lock a cylinder, lever, or warded lock?
          toAskHere: {
            question: "Is this lock a cylinder, lever, or warded lock?", answers: 
            ["Cylinder", "Lever", "Warded"],
          },
          next: [
            {
              // Level 3: If answer is Cylinder, ask: Is this lock a pin-tumbler, disc-detainer, wafer, or slider lock?
              toAskHere: {
                question: "Is this lock a pin-tumbler, disc-detainer, wafer, or slider lock?", answers: 
                ["Pin-Tumbler", "Disc-Detainer", "Wafer", "Slider"],
              },
              next: [
                {
                  // Level 4: If answer is Pin-Tumbler, ask: What kind of pin-tumbler lock is this?
                  toAskHere: { question: "What kind of pin-tumbler lock is this?", answers: ["Traditional", "Dimple", "Tubular"] },
                  next: [
                    {
                      // Level 5: If answer is Traditional, ask: Which brand does this appear to be?
                      toAskHere: { question: "Which brand does this appear to be?", answers: ["ABUS", "ASSA", "Kwikset", "Medeco", "Schlage", "Yale"]},
                      next: [
                        // Level 6: If answer is ABUS, ask: Is it one of these?
                        {
                          toAskHere: { question: "Is it one of these?", answers: ["ABUS Diskus 28", "ABUS Diskus 26"]},
                          next: [
                            {
                              // Level 7: If answer is ABUS Diskus 28, end and go to lock
                              toAskHere: ["END"],
                              next: "ABUS Diskus 28",
                            },
                            // Level 7: If answer is ABUS Diskus 26, end and go to lock
                            {
                              toAskHere: ["END"],
                              next: "ABUS Diskus 26",

                            },
                          ],
                        },
                        {
                          // Level 6: If answer is ASSA, ask: Is it one of these?
                          toAskHere: { question: "Is it one of these?", answers: ["ASSA 700", "ASSA 10450", "ASSA d12"] },
                          next: [
                            // Level 7: If answer is ASSA 700, end and go to lock
                            {
                              toAskHere: ["END"],
                              next: "ASSA 700",
                            },
                            // Level 7: If answer is ASSA 10450, end and go to lock
                            {
                              toAskHere: ["END"],
                              next: "ASSA 10450",
                            },
                            // Level 7: If answer is ASSA d12, end and go to lock
                            {
                              toAskHere: ["END"],
                              next: "ASSA d12",
                            },

                          ],
                        },
                        {
                          // Level 6: If answer is Kwikset, ask: Is it one of these?
                          toAskHere: { question: "Is it one of these?", answers: ["Kwikset Classic", "Kwikset Titan"] },
                          next: [
                            // Level 7: If answer is Kwikset Classic, end and go to lock
                            {
                              toAskHere: ["END"],
                              next: "Kwikset Classic"
                            },
                            // Level 7: If answer is Kwikset Titan, end and go to lock
                            {
                              toAskHere: ["END"],
                              next: "Kwikset Titan"
                            },
                          ],
                        },
                        {
                          // Level 6: If answer is Medeco, ask: Is it one of these?
                          toAskHere: { question: "Is it one of these?", answers: ["Medeco Original"] },
                          next: [
                            // Level 7: If answer is Medeco Original, end and go to lock
                            {
                              toAskHere: ["END"],
                              next: "Medeco Original"
                            },
                          ],
                        },
                        {
                          // Level 6: If answer is Schlage, ask: Is it one of these?
                          toAskHere: { question: "Is it one of these?", answers: ["Schlage Everest", "Schlage Primus"] },
                          next: [
                            // Level 7: If answer is Schlage Everest, end and go to lock
                            {
                              toAskHere: ["END"],
                              next: "Schlage Everest"
                            },
                            // Level 7: If answer is Schlage Primus, end and go to lock
                            {
                              toAskHere: ["END"],
                              next: "Schlage Primus"
                            },
                          ],
                        },
                        {
                          // Level 6: If answer is Yale, ask: Is it one of these?
                          toAskHere: { question: "Is it one of these?", answers: ["Yale USN Electric", "Yale 850"] },
                          next: [
                            // Level 7: If answer is Yale USN Electric, end and go to lock
                            {
                              toAskHere: ["END"],
                              next: "Yale USN Electric"
                            },
                            // Level 7: If answer is Yale 850, end and go to lock
                            {
                              toAskHere: ["END"],
                              next: "Yale 850"
                            },
                          ],
                        },
                      ],
                    },
                    {
                      // Level 5: If answer is Dimple, ask: Which brand does this appear to be?
                      toAskHere: { question: "Which brand does this appear to be?", answers: ["ABUS"] },
                      next: [
                        {
                          // Level 6: If answer is ABUS, ask: Is it one of these?
                          toAskHere: { question: "Is it one of these?", answers: ["Abus Diskus 25"] },
                          next: [
                            { // Level 7: If answer is Abus Diskus 25, end and go to lock
                              toAskHere: ["END"],
                              next: "Abus Diskus 25"
                            },
                          ],
                        },

                      ],
                    },
                    { // Level 5: If answer is Tubular, ask: Which brand does this appear to be?
                      toAskHere: { question: "Which brand does this appear to be?", answers: ["Ace"] },
                      next: [
                        { // Level 6: If answer is Ace, ask: Is it one of these? 
                          toAskHere: { question: "Is it one of these?", answers: ["Ace II"] },
                          next: [
                            { // Level 7: If answer is Ace II, end and go to lock
                              toAskHere: ["END"],
                              next: "Ace II"
                            },
                          ],
                        },

                      ],
                    },
                  ],
                },
                {
                  // Level 4: If answer is Disc-Detainer, ask: Which brand does this appear to be?
                  toAskHere: { question: "Which brand does this appear to be?", answers: ["ABUS", "Abloy"] },
                  next: [
                    {
                      // Level 5: If answer is ABUS, ask: Is it one of these?
                      toAskHere: { question: "Is it one of these?", answers: ["ABUS Diskus 20"] },
                      next: [
                        {
                          //Level 6: If answer is ABUS Diskus 20, end and go to lock
                          toAskHere: ["END"],
                              next: "ABUS Diskus 20"
                        },
                      ],
                    },
                    {
                      // Level 5: If answer is Abloy, ask: Is it one of these?
                      toAskHere: { question: "Is it one of these?", answers: ["Abloy Classic", "Abloy Profile/High Profile", "Abloy Protec 2"] }, // missing 3 choices
                      next: [
                        {
                          //Level 6: If answer is Abloy Classic, end and go to lock
                          toAskHere: ["END"],
                              next: "Abloy Classic"
                        },
                        {
                          //Level 6: If answer is Abloy Profile/High Profile, end and go to lock
                          toAskHere: ["END"],
                              next: "Abloy Profile/High Profile"
                        },
                        {
                          //Level 6: If answer is Abloy Protec 2, end and go to lock
                          toAskHere: ["END"],
                              next: "Abloy Protec 2"
                        },
                      ],
                    },
                  ],
                },
                {
                  // Level 4: If answer is Wafer, ask: Which brand does this appear to be?
                  toAskHere: { question: "Which brand does this appear to be?", answers: ["Ilco", "Kwikset"] },
                  next: [
                    {
                      // Level 5: If answer is Ilco, ask: Is it one of these?
                      toAskHere: { question: "Is it one of these?", answers: ["Ilco Wafer Padlock"] },
                      next: [
                        {
                          //Level 6: If answer is Ilco Wafer Padlock, end and go to lock
                          toAskHere: ["END"],
                              next: "Ilco Wafer Padlock"
                        },
                      ],
                    },
                    {
                      // Level 5: If answer is Kwikset, ask: Is it one of these?
                      toAskHere: { question: "Is it one of these?", answers: ["Kwikset SmartKey"] }, 
                      next: [
                        {
                          //Level 6: If answer is Kwikset SmartKey, end and go to lock
                          toAskHere: ["END"],
                              next: "Kwikset SmartKey"
                        },
                        
                      ],
                    },
                  ],
                },
                {
                  // Level 4: If answer is Slider, ask: Which brand does this appear to be?
                  toAskHere: { question: "Which brand does this appear to be?", answers: ["Schlage"] },
                  next: [
                    {
                      // Level 5: If answer is Schlage, ask: Is it one of these?
                      toAskHere: { question: "Is it one of these?", answers: ["Schlage SecureKey"] },
                      next: [
                        {
                          //Level 6: If answer is Schlage SecureKey, end and go to lock
                          toAskHere: ["END"],
                              next: "Schlage SecureKey"
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              // Level 3: If the answer is Lever, ask: Which brand does it appear to be?
              toAskHere: { question: "Which brand does it appear to be?", answers: ["Abloy", "ASSA"] },
              next: [
                {
                  // Level 4: If answer is Abloy, ask: Is it one of these?
                  toAskHere: { question: "Is it one of these?", answers: ["Abloy Bodaguard"] },
                  next: [
                    {
                      // Level 5: If answer is Abloy Bodaguard, end and go to lock
                      toAskHere: ["END"],
                      next: "Abloy Bodaguard"
                    },
                  ],
                },
              ],
            },
            {
              // Level 3: If the answer is Warded, ask: Which brand does it appear to be?
              toAskHere: { question: "Which brand does it appear to be?", answers: ["Yale"] },
              next: [
                {
                  // Level 4: If answer is Yale, ask: Is it one of these?
                  toAskHere: { question: "Is it one of these?", answers: ["Yale 324"] },
                  next: [
                    {
                      // Level 5: If answer is Yale 324, end and go to lock
                      toAskHere: ["END"],
                      next: "Yale 324"
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          // Level 2: If answer is Combination, ask: Is it Rotary/Single Dial, Multiple Dial, or Push Button?
          toAskHere: { question: "Is it Rotary/Single Dial, Multiple Dial, or Push Button?", answers: ["Rotary/Single Dial", "Multiple Dial", "Push Button"], },
          next: [
            {
              // Level 3: If answer is Rotary/Single Dial, ask: What brand does it appear to be?
              toAskHere: { question: "What brand does it appear to be?", answers: ["Masterlock"] },
              next: [
                {
                  // Level 4: If the answer is Masterlock, ask: Is it one of these?
                  toAskHere: { question: "Is it one of these?", answers: ["Masterlock 1500"] },
                  next: [
                    {
                      // Level 5: If the answer is Masterlock 1500, end and go to lock
                      toAskHere: ["END"],
                      next: "Masterlock 1500"
                    },
                  ],
                },
              ],
            },
            {
              // Level 3: If answer is Multiple Dial, ask: What brand does it appear to be?
              toAskHere: { question: "What brand does it appear to be?", answers: ["Masterlock"] },
              next: [
                {
                  // Level 4: If the answer is Masterlock, ask: Is it one of these?
                  toAskHere: { question: "Is it one of these?", answers: ["Masterlock 175"] },
                  next: [
                    {
                      // Level 5: If the answer is Masterlock 175, end and go to lock
                      toAskHere: ["END"],
                      next: "Masterlock 175"
                    },
                  ],
                },
              ],
            },
            {
              // Level 3: If answer is Push Button, ask: What brand does it appear to be?
              toAskHere: { question: "What brand does it appear to be?", answers: ["Masterlock"] },
              next: [
                {
                  // Level 4: If the answer is Masterlock, ask: Is it one of these?
                  toAskHere: { question: "Is it one of these?", answers: ["Masterlock 5422D"] },
                  next: [
                    {
                      // Level 5: If the answer is Masterlock 5422D, end and go to lock
                      toAskHere: ["END"],
                      next: "Masterlock 5422D"
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      // Level 1: If answer is Electonic, ask: What is normally used to open this lock?
      toAskHere: { question: "What is normally used to open this lock?", answers: ["Electronic Key", "Combination", "Card", "Biometric", "Fob or Phone"] },
      next: [
        {
          // Level 2: If answer is Electronic Key, ask: What brand does it appear to be?
          toAskHere: { question: "What brand does it appear to be?", answers: ["Medeco"] },
          next: [
            {
              // Level 3: If answer is Medeco, ask: Is it one of these?
              toAskHere: { question: "Is it one of these?", answers: ["Medeco XT"] },
              next: [
                {
                  // Level 4: If answer is Medeco XT, end and go to lock
                  toAskHere: ["END"],
                  next: "Medeco XT",
                },
              ],
            },
          ],
        },
        {
          // Level 2: If answer is Combination, ask: Is it Rotary/Single Dial, Multiple Dial, or Push Button?
          toAskHere: { question: "What brand does it appear to be?", answers: ["Rotary/Single Dial", "Multiple Dial", "Push Button"] },
          next: [
            {
              // Level 3: If answer is Rotary/Single Dial, ask: What brand does it appear to be?
              toAskHere: { question: "What brand does it appear to be?", answers: ["Masterlock"] },
              next: [
                {
                  // Level 4: If answer is Masterlock, ask: Is it one of these?
                  toAskHere: { question: "Is it one of these?", answers: ["Masterlock 1500"] },
                  next: [
                    {
                      //Level 5: If the answer is Masterlock 1500, end and go to lock
                      toAskHere: ["END"],
                      next: "Masterlock 1500",

                    },
                  ],
                },
              ],
            },
            {
              // Level 3: If answer is Multiple Dial, ask: What brand does it appear to be?
              toAskHere: { question: "What brand does it appear to be?", answers: ["Masterlock"] },
              next: [
                {
                  // Level 4: If answer is Masterlock, ask: Is it one of these?
                  toAskHere: { question: "Is it one of these?", answers: ["Masterlock 175"] },
                  next: [
                    {
                      //Level 5: If the answer is Masterlock 1500, end and go to lock
                      toAskHere: ["END"],
                      next: "Masterlock 175",

                    },
                  ],
                },
              ],
            },
            {
              // Level 3: If answer is Push Button, ask: What brand does it appear to be?
              toAskHere: { question: "What brand does it appear to be?", answers: ["Masterlock"] },
              next: [
                {
                  // Level 4: If answer is Masterlock, ask: Is it one of these?
                  toAskHere: { question: "Is it one of these?", answers: ["Masterlock 5422D"] },
                  next: [
                    {
                      //Level 5: If the answer is Masterlock 5422D, end and go to lock
                      toAskHere: ["END"],
                      next: "Masterlock 5422D",

                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          // Level 2: If answer is Card, ask: What brand does it appear to be?
          toAskHere: { question: "What brand does it appear to be?", answers: ["METechs"] },
          next: [
            {
              // Level 3: If answer is METechs, ask: Is it one of these?
              toAskHere: { question: "Is it one of these?", answers: ["METechs MID300"] },
              next: [
                {
                  // Level 4: If answer is METechs MID300, end and go to lock
                  toAskHere: ["END"],
                  next: "METechs MID300",
                },
              ],
            },
          ],
        },
        {
          // Level 2: If answer is Fob or Phone, ask: What brand does it appear to be?
          toAskHere: { question: "What brand does it appear to be?", answers: ["Kwikset"] },
          next: [
            {
              // Level 3: If answer is Kwikset, ask: Is it one of these?
              toAskHere: { question: "Is it one of these?", answers: ["Kwikset Kevo"] },
              next: [
                {
                  // Level 4: If answer is Kwikset Kevo, end and go to lock
                  toAskHere: ["END"],
                  next: "Kwikset Kevo",
                },
              ],
            },
          ],
        },
        {
          // Level 2: If answer is Biometric, ask: What biometrics does it use?
          toAskHere: { question: "What biometrics does it use?", answers: ["Fingerprint", "Retina Scan"] },
          next: [
            {
              // Level 3: If answer is Fingerprint, ask: What brand does it appear to be? 
              toAskHere: { question: "What brand does it appear to be?", answers: ["Brand 1"] },
              next: [
                {
                  // Level 4: If answer is Brand 1, ask: Is it one of these?
                  toAskHere: { question: "Is it one of these?", answers: ["Lock 1"] },
                  next: [
                    {
                      // Level 5: If answer is Lock 1, end and go to lock
                      toAskHere: ["END"],
                      next: "Lock 1",
                    },
                  ],
                }
              ],
            },
            {
              // Level 3: If answer is Retina Scan, ask: What brand does it appear to be?
              toAskHere: { question: "What brand does it appear to be?", answers: ["eyeLock", "IRIS"] },
              next: [
                {
                  // Level 4: If answer is eyeLock, ask: Is it one of these?
                  toAskHere: { question: "Is it one of these?", answers: ["eyeLock Nano NXT"] },
                  next: [
                    {
                      // Level 5: If answer is eyeLock Nano NXT, end and go to lock
                      toAskHere: ["END"],
                      next: "eyeLock Nano NXT",
                    },
                  ],
                },
                {
                  // Level 4: If answer is IRIS, ask: Is it one of these?
                  toAskHere: { question: "Is it one of these?", answers: ["IRIS iCAM D1000"] },
                  next: [
                    {
                      // Level 5: If answer is IRIS iCAM D1000, end and go to lock
                      toAskHere: ["END"],
                      next: "IRIS iCAM D1000",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      // Level 1: If answer is Hybrid, ask: What brand does it appear to be?
      toAskHere: { question: "What brand does it appear to be?", answers: ["Kwikset", "Medeco"] },
      next: [
        {
          // Level 2: If answer is Kwikset, ask: Is it one of these?
          toAskHere: { question: "Is it one of these?", answers: ["Kwikset Aura", "Kwikset SmartCode", "Kwikset Halo Touch", "Kwikset Halo"] },
          next: [
            {
              // Level 3: If answer is Kwikset Aura, end and go to lock
              toAskHere: ["END"],
              next: "Kwikset Aura",
            },
            {
              // Level 3: If answer is Kwikset SmartCode, end and go to lock
              toAskHere: ["END"],
              next: "Kwikset SmartCode",
            },
            {
              // Level 3: If answer is Kwikset Halo Touch, end and go to lock
              toAskHere: ["END"],
              next: "Kwikset Halo Touch",
            },
            {
              // Level 3: If answer is Kwikset Halo, end and go to lock
              toAskHere: ["END"],
              next: "ENDYBOI2",
            },
          ],
        },
        {
          // Level 2: If answer is Medeco, ask: Is it one of these?
          toAskHere: { question: "Is it one of these?", answers: ["Medeco CLIQ"] },
          next: [
            {
              // Level 3: If answer is Medeco CLIQ, end and go to lock
              toAskHere: ["END"],
              next: "Kwikset Halo",
            },
          ],
        },
      ],
    },
  ],  
};

export default {
    LockArrayObj,
}