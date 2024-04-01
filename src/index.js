const { program } = require('commander');
const { isValid, area, perimeter } = require('./triangle-rules.js');

program.description('A simple app about triangles');

program
    .command('validate')
    .description("Validate's a triangle's sides measures")
    .argument('<a>', "the first triangle's side")
    .argument('<b>', "the second triangle's side")
    .argument('<c>', "the third triangle's side")
    .action((a, b, c) => {
        console.log(`sides ${a}, ${b} and ${c} are ${isValid(a, b, c) ? 'valid' : 'invalid'}`);
    });

program
    .command('area')
    .description("Calculates's a triangle's area")
    .argument('<b>', "the triangle's base")
    .argument('<h>', "the triangle's height")
    .action((b, h) => {
        console.log(`area for base ${b} and height ${h} is ${area(b, h)}`);
    });

program
    .command('perimeter')
    .description("Calculate's a triangle's perimeter")
    .argument('<a>', "the first triangle's side")
    .argument('<b>', "the second triangle's side")
    .argument('<c>', "the third triangle's side")
    .action((a, b, c) => {
        console.log(`perimeter for sides ${a}, ${b} and ${c} is ${perimeter(a, b, c)}`);
    });

program.parse();