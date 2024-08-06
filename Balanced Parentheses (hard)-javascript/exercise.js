

function generateParenthesis(N) {
    const result = [];
    const queue = [{current: '', open: 0, close: 0}];
    
    while (queue.length > 0) {
        const {current, open, close} = queue.shift();
        
        if (current.length === 2 * N) {
            result.push(current);
            continue;
        }
        
        if (open < N) {
            queue.push({current: current + '(', open: open + 1, close: close});
        }
        
        if (close < open) {
            queue.push({current: current + ')', open: open, close: close + 1});
        }
    }
    
    return result;
}

// Example usage:
console.log(generateParenthesis(2)); // Output: ["(())", "()()"]
// console.log(generateParenthesis(3)); // Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]


/*
function generateParenthesis(N) {
    const result = [];
    
    function backtrack(current, open, close) {
        if (current.length === 2 * N) {
            result.push(current);
            return;
        }
        
        if (open < N) {
            backtrack(current + '(', open + 1, close);
        }
        
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    }
    
    backtrack('', 0, 0);
    return result;
}

// Example usage:
console.log(generateParenthesis(2)); // Output: ["(())", "()()"]
// console.log(generateParenthesis(3)); // Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
*/