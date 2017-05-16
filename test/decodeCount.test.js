/**
 * Created by LuckyDottie on 2017/5/14.
 */
var assert = require('assert');
var decodeCount = require('../src/decodeCount');
describe('decodeCount test cases', function(){
    it('should return 0', function(){
        assert.equal(0, decodeCount('aasda87897'));
    });
    it('should return 0', function(){
        assert.equal(0, decodeCount('9090cc5'));
    });
    it('should return 0', function(){
        assert.equal(0, decodeCount());
    });
    it('should return 1', function(){
        assert.equal(1, decodeCount(1));
    });
    it('should return 1', function(){
        assert.equal(1, decodeCount('1'));
    });
    it('should return 1', function(){
        assert.equal(1, decodeCount('2'));
    });
    it('should return 2', function(){
        assert.equal(2, decodeCount('12'));
    });
    it('should return 2', function(){
        assert.equal(2, decodeCount('18'));
    });
    it('should return 2', function(){
        assert.equal(2, decodeCount('26'));
    });
    it('should return 1', function(){
        assert.equal(1, decodeCount('27'));
    });
    it('should return 1', function(){
        assert.equal(1, decodeCount('333'));
    });
    it('should return 3', function(){
        assert.equal(3, decodeCount('1247'));
    });
    it('should return 2', function(){
        assert.equal(2, decodeCount('1277'));
    });
    it('should return 0', function(){
        assert.equal(0, decodeCount('90'));
    });
    it('should return 0', function(){
        assert.equal(0, decodeCount('190'));
    });
    it('should return 0', function(){
        assert.equal(0, decodeCount('100'));
    });
    it('should return 0', function(){
        assert.equal(0, decodeCount('0920'));
    });
});