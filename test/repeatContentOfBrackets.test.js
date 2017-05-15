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
    it('should return aaaaaaaaaaaa', function(){
        assert.equal('aaaaaaaaaaaa', repeatContentOfBrackets('12[a]'));
    });
    it('should return abcabcabcabcty', function(){
        assert.equal('abcabcabcabcty', repeatContentOfBrackets('4[abc]ty'));
    });
    it('should return ababcdcdcd', function(){
        assert.equal('ababcdcdcd', repeatContentOfBrackets('2[ab]3[cd]'));
    });
    it('should return abdddabddd', function(){
        assert.equal('abdddabddd', repeatContentOfBrackets('2[ab3[d]]'));
    });
    it('should return adadpfpfpfadadpfpfpfadadpfpfpfxyz', function(){
        assert.equal('adadpfpfpfadadpfpfpfadadpfpfpfxyz', repeatContentOfBrackets('3[2[ad]3[pf]]xyz'));
    });
    it('should return xtyxtyxty]', function(){
        assert.equal('xtyxtyxty]', repeatContentOfBrackets('3[xty]]'));
    });
});