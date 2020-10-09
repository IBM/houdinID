export default class LinkedDecisionNode {
    constructor(toAskHere) {
        this.toAskHere = toAskHere;
        this.next = [];
    }

    addAnotherNext(toAdd) {
        this.next.push(toAdd);
    }

}