const { expect } = require('chai');

var chai = require('chai');

describe('Refund Unit Test', function () {
    before(async function () {
      Employer = await ethers.getContractFactory('RefundbyLocation');
      Employer = await Employer.deploy();
      await Employer.deployed();
    });

    // beforeEach(async function () {
      
    //   await Employer.setEmployee('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', 'emp','34.09', '98.43', '20', '3','4');
    //   await Employer.setEmployee('0x70997970C51812dc3A010C7d01b50e0d17dc79C8', 'emp','34.09', '98.43', '20', '3','4');

    // })
    it('storing a value', async function () {
      //  await Employer.setEmployee('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', 'emp1','34.09', '98.43', '20', '3','4');
      await Employer.setEmployee('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', 'emp','34.09', '98.43', '20', '3','4');
      //expect((await Employer.getEmployee('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')).toString()).to.equal('34.09', '98.43', '3:30');
    });

    it('get a value', async function () {
      //  await Employer.setEmployee('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', 'emp1','34.09', '98.43', '20', '3','4');
      expect((await Employer.getAllEmployees()).toString()).to.equal('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
      //expect((await Employer.getEmployee('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')).toString()).to.equal('34.09', '98.43', '3:30');
    });

    it('retrieve returns a value previously stored', async function () {
    //  await Employer.setEmployee('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', '34.09', '98.43', '3:30');
     expect((await Employer.getEmployee('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')).toString()).to.equal('emp,34.09,98.43,3,4,20');
    }); 

    it('retrieve returns a count of previously stored', async function () {
      //  await Employer.setEmployee('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', '34.09', '98.43', '3:30');
       expect((await Employer.countEmployees()).toNumber()).to.equal(1);
    }); 
    

    // it('calling the location contract', async function () {
    //   await Employer.contractCondition('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', '10','3');
    // });

    it('calling the contract balance', async function () {
     // expect(await Employer.getBalance()).to.be.within(0);
      expect((await Employer.getBalance()).toNumber()).to.equal(0); 
    });
  });