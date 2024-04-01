let path = require('path');
let exec = require('child_process').exec;

//validate
test('call validate without parameters should return 1', async () => {
    let result = await cli(['validate', ''], '.');
    expect(result.code).toBe(1);
})

test('call validate with 1 parameter should return 1', async () => {
    let result = await cli(['validate', '1'], '.');
    expect(result.code).toBe(1);
})

test('call validate with 2 parameters should return 1', async () => {
    let result = await cli(['validate', '1 2'], '.');
    expect(result.code).toBe(1);
})

test('call validate with 3 parameters should return 0', async () => {
    let result = await cli(['validate', '1 2 3'], '.');
    expect(result.code).toBe(0);
})

//area
test('call area without parameters should return 1', async () => {
    let result = await cli(['area', ''], '.');
    expect(result.code).toBe(1);
})

test('call validate with 1 area should return 1', async () => {
    let result = await cli(['area', '1'], '.');
    expect(result.code).toBe(1);
})

test('call validate with 2 parameters should return 0', async () => {
    let result = await cli(['area', '1 2'], '.');
    expect(result.code).toBe(0);
})

//perimeter
test('call perimeter without parameters should return 1', async () => {
    let result = await cli(['perimeter', ''], '.');
    expect(result.code).toBe(1);
})

test('call perimeter with 1 parameter should return 1', async () => {
    let result = await cli(['perimeter', '1'], '.');
    expect(result.code).toBe(1);
})

test('call perimeter with 2 parameters should return 1', async () => {
    let result = await cli(['perimeter', '1 2'], '.');
    expect(result.code).toBe(1);
})

test('call perimeter with 3 parameters should return 0', async () => {
    let result = await cli(['perimeter', '1 2 3'], '.');
    expect(result.code).toBe(0);
})

function cli(args, cwd) {
    return new Promise(resolve => {
        exec(`npm start ${args.join(' ')}`,
            { cwd },
            (error, stdout, stderr) => {
                resolve({
                    code: error && error.code ? error.code : 0,
                    error,
                    stdout,
                    stderr
                })
            })
    })
}