var Assert = require('assert');
var bigIntegerSum = require('../src/sum');
describe('strAdd test cases', function(){
    it('should return 0', function(){
        Assert.equal('0', bigIntegerSum('-0','+0'));
    });
    it('should return 246', function(){
        Assert.equal('246', bigIntegerSum('123','123'));
    });
    it('should return 246', function(){
        Assert.equal('246', bigIntegerSum('+123','123'));
    });
    it('should return 246', function(){
        Assert.equal('246', bigIntegerSum('+123','+123'));
    });
    it('should return -246', function(){
        Assert.equal('-246', bigIntegerSum('-123','-123'));
    });
    it('should return 246', function(){
        Assert.equal('246', bigIntegerSum('0000123','0123'));
    });
    it('should return -246', function(){
        Assert.equal('-246', bigIntegerSum('-0000123','-0123'));
    });
    it('should return 121', function(){
        Assert.equal('121', bigIntegerSum('98','23'));
    });
    it('should return -121', function(){
        Assert.equal('-121', bigIntegerSum('-98','-23'));
    });
    it('should return 121', function(){
        Assert.equal('121', bigIntegerSum('98','00023'));
    });
    it('should return 1079', function(){
        Assert.equal('1079', bigIntegerSum('123','+956'));
    });
    it('should return 0', function(){
        Assert.equal('0', bigIntegerSum('98','-00098'));
    });
    it('should return 0', function(){
        Assert.equal('0', bigIntegerSum('00098','-98'));
    });
    it('should return 3', function(){
        Assert.equal('3', bigIntegerSum('15','-12'));
    });
    it('should return 3', function(){
        Assert.equal('3', bigIntegerSum('-12','15'));
    });
    it('should return -3', function(){
        Assert.equal('-3', bigIntegerSum('-15','12'));
    });
    it('should return 205', function(){
        Assert.equal('205', bigIntegerSum('234','-29'));
    });
    it('should return 195', function(){
        Assert.equal('195', bigIntegerSum('234','-39'));
    });
    it('should return 95', function(){
        Assert.equal('95', bigIntegerSum('124','-29'));
    });
    it('should return 1', function(){
        Assert.equal('1', bigIntegerSum('999999999999999999','-999999999999999998'));
    });
    it('should return 185', function(){
        Assert.equal('185', bigIntegerSum('239','-54'));
    });
    it('should return undefined', function(){
        Assert.equal(undefined, bigIntegerSum('233s9','-54'));
    });
    it('should return undefined', function(){
        Assert.equal(undefined, bigIntegerSum('2339','-5a4'));
    });
    it('should return undefined', function(){
        Assert.equal(undefined, bigIntegerSum('-54'));
    });
    it('should return undefined', function(){
        Assert.equal(undefined, bigIntegerSum());
    });
});