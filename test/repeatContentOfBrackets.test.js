/**
 * Created by LuckyDottie on 2017/5/14.
 */
var assert = require('assert');
var repeatContentOfBrackets = require('../src/repeatContentOfBrackets');
describe('repeatContentOfBrackets test cases', function(){
    it('should return 3xy', function(){
        assert.equal('3xy', repeatContentOfBrackets('3xy'));
    });
    it('should return xy2', function(){
        assert.equal('xy2', repeatContentOfBrackets('xy2'));
    });
    it('should return xy', function(){
        assert.equal('xy', repeatContentOfBrackets('xy'));
    });
    it('should return abcaaa', function(){
        assert.equal('abcaaa', repeatContentOfBrackets('abc3[a]'));
    });
    it('should return abcaaa', function(){
        assert.equal('abcabcabcabcty', repeatContentOfBrackets('4[abc]ty'));
    });
    it('should return abcaaa', function(){
        assert.equal('adadpfpfpfadadpfpfpfadadpfpfpfxyz', repeatContentOfBrackets('3[2[ad]3[pf]]xyz'));
    });
});