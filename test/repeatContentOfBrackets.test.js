/**
 * Created by LuckyDottie on 2017/5/14.
 */
var Assert = require('assert');
var repeatContentOfBrackets = require('../src/repeatContentOfBrackets');
describe('repeatContentOfBrackets test cases', function(){
    it('should return undefined', function(){
        Assert.equal(undefined, repeatContentOfBrackets('3xy'));
    });
    it('should return undefined', function(){
        Assert.equal(undefined, repeatContentOfBrackets('xy2'));
    });
    it('should return xy', function(){
        Assert.equal('xy', repeatContentOfBrackets('xy'));
    });
    it('should return abcaaa', function(){
        Assert.equal('abcaaa', repeatContentOfBrackets('abc3[a]'));
    });
    it('should return abcaaa', function(){
        Assert.equal('abcabcabcabcty', repeatContentOfBrackets('4[abc]ty'));
    });
    it('should return abcaaa', function(){
        Assert.equal('adadpfpfpfadadpfpfpfadadpfpfpfxyz', repeatContentOfBrackets('3[2[ad]3[pf]]xyz'));
    });
});