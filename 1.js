/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let costGap = [];

    for (let i = 0; i < gas.length; i++) {
        costGap.push(gas[i] - cost[i]);
    }

    let remain = 0;
    let startRemain = 0;
    let res = -1;
    for (let i = 0; i < costGap.length; i++) {
        let gap = costGap[i];
        if (gap >= 0) {
            if (startRemain <= 0) {
                res = i;
                startRemain = 0;
            }


        }
        startRemain += gap;
        remain += gap;
    }

    return remain >= 0 ? res : -1;
};


canCompleteCircuit([2],[2])