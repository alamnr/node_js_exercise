var test = require('tap').test;

test("addition of 2 and 2 ", function(t) {
    t.equal(2 + 2, 4, '2+2 should be 4');
    t.end();
});


test('truthyness of numbers', function(t) {
    t.ok(1, '1 should be truthy');
    t.notok(0, '0 should not be truthy');
    t.end();
});

test("sum works", function(t) {
    var a = 2 + 2;
    t.equal(a, 4, '2 + 2 should be equal to 4');
    t.notEqual(a, '4', '2 + 2 should not be equal to the string "4"');
    t.end();
});

test("object equality", function(t) {
    var a = { a: 1 };
    t.equal(a, { a: 1 });
    t.end();
});

test("object equivalency", function(t) {
    var a = { a: 1, b: 2 };
    t.equivalent(a, { b: 2, a: 1 });
    t.end();
});

test("object similarity", function(t) {
    a = { a: 1, b: 2 };
    t.similar(a, { a: 1 });
    t.similar('abc', 'abc');
    t.similar(10, 10);
    t.end();
});

test("object similarity", function(t) {
    t.similar('abc', 'abc');
    t.similar(10, 10);
    t.end();
});

test("object type", function(t) {
    t.type(1, "number");
    t.type('abc', 'string');
    t.type({}, Object);
    var EventEmitter = require('events').EventEmitter;
    var ee = new EventEmitter();
    t.type(ee, EventEmitter);
    t.type(ee, Object);
    t.end();
});

test('sums 5 and -2', function(t) {
  sum(5, -2, function(err, result) {
    t.notOk(err, 'no error');
    t.equal(result, 3, '5 + -2 should be equal to 3');
    t.end();
  });
});