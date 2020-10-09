
import LinkedDecisionNode from './LinkedDecisionNode';
import LockArray from './LockArray';

export default class LinkedDecisionTree {
    constructor() {
        this.nodesList = [];
        this.nodesList.push(this.createNodesFromLevel(LockArray.LockArrayObj));
        this.answers = [];
        this.end = false;
        this.toAskHere = this.nodesList[0].toAskHere;

        this.next = this.next.bind(this);
        this.getToAskHere = this.getToAskHere.bind(this);
        this.resetTree = this.resetTree.bind(this);
        this.selectedLock = '';
    }

    // Turn our LockArray into a big old list filled with LinkedNodes!
    createNodesFromLevel(currentObj) {
        if (currentObj.toAskHere == "END") {
            return currentObj;
        }
        var node = new LinkedDecisionNode(currentObj.toAskHere);
        for(var item in currentObj.next) {
            // Recursion! :) It calls itself with a smaller array (.next of current array) so it can get all the levels!
            node.addAnotherNext(this.createNodesFromLevel(currentObj.next[item]));
        }
        return node;
    }

    // Select an answer (starting at index 0) from the list of questions...
    // THIS HAS NO ERROR CHECKING IT WILL CRASH IF YOU TRY TO SELECT AN ANSWER THAT DOESNT EXIST
    next(answerNum) {
        // if we're already at the end, we don't want to re-do the work of searching through the array, we're already at the END! :D
        if (this.end) {
            return this.toAskHere;
        }
        // otherwise push this index onto our answer array, and traverse again with the new addition!
        this.answers.push(answerNum);
        this.toAskHere = this.traverseAnswersSoFar(this.nodesList[0], 0);
        return this.toAskHere;
    }

    // This recursive function (function that calls itself with a smaller problem) will chop a level of the tree off each
    // time it is called, the progress paramater is used to track how many levels deep we are (and how many places into our answer array we must search)
    traverseAnswersSoFar(poppable, progress) {
        // If toAskHere
        if (typeof(poppable.toAskHere[0]) == "string") {
            this.end = true;
            this.selectedLock=(poppable.toAskHere[0]);
            this.toAskHere = poppable.next;
            return poppable.next;
        } else if (this.answers.length == progress) {
            return poppable.toAskHere;
        }
        return this.traverseAnswersSoFar(poppable.next[this.answers[progress]], (progress+1));
    }

    resetTree() {
        this.end = false;
        this.answers = [];
        this.toAskHere = this.nodesList[0].toAskHere;
    }

    // function to get an internal variable from outside.... toAskHere is either ["A list", "of strings"] or a "string"
    getToAskHere() {
        return this.toAskHere;
    }

    printNodes() {
        console.log("Printing NodeList::::: "+JSON.stringify(this.nodesList));
    }

}