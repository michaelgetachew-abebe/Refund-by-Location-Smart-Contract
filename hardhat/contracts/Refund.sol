// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract RefundbyLocation {

    event Deposit(address sender, uint amount, uint balance);
    event Withdraw(uint amount, uint balance);
    event Transfer(address to, uint amount, uint balance);
    // Payable constructor can receive Ether

    address payable public owner;
    address payable public _to;

    constructor() payable {
        owner = payable(msg.sender);
    }

    struct Employee {
        string employeeName;
        string longtiude; // these value is set by the employer
        string latitude;  // these value is set by the employer
        string requiredDistance; // these value is set by the employer
        string distance; // the final calculated distance
        string startHour;
        string endHour;
        string fetchedHour; // the time of the hour the employee was at the location
    }

    struct Output {
        string status;
    }
    
    mapping (address => Employee) employees;
    mapping (address => Output) outputs;

    address[] public employeeAccts;

    modifier onlyEmployer() {
        require(msg.sender == owner);
        _;
    }
    

    function setEmployee(address _address, string memory _employeeName, string memory _longtiude, string memory _latitude, string memory _requiredDistance, string memory _startHour, string memory _endHour) public onlyEmployer{
      
        employees[_address].employeeName = _employeeName;
        employees[_address].longtiude = _longtiude;
        employees[_address].latitude = _latitude;
        employees[_address].requiredDistance = _requiredDistance;
        employees[_address].startHour = _startHour;
        employees[_address].endHour = _endHour;
        employeeAccts.push(_address);
    }

    function getAllEmployees() view public returns (address[] memory) {
        return employeeAccts;
    }

    function getEmployee(address _address) public view returns (string memory, string memory, string memory, string memory, string memory, string memory) {
        return (employees[_address].employeeName, employees[_address].longtiude, employees[_address].latitude, employees[_address].startHour, employees[_address].endHour, employees[_address].requiredDistance);
    }

    function countEmployees() view public returns (uint) {
        return employeeAccts.length;
    }

    function getResults(address _address) external view returns (Output memory) {
        return (outputs[_address]);
    }

    function contractCondition(address _address, string memory distance, string memory fetchedHour) public {
    
        string memory result = setContract(_address, distance, fetchedHour);
        if(keccak256(abi.encodePacked(result)) == keccak256(abi.encodePacked('Approved'))){
           
            outputs[_address].status = 'Accepted!!!';
            uint256 _amount = 88270000000000;
            _to = payable(_address);
            transfer(_to, _amount);

        } else if(keccak256(abi.encodePacked(result)) == keccak256(abi.encodePacked('Out of compliance'))){
           
           outputs[_address].status = 'Out of compliance';

        } else if(keccak256(abi.encodePacked(result)) == keccak256(abi.encodePacked('Time is up'))){
            
           outputs[_address].status = 'Time is up!';
        }
    }

    function stnum(string memory numString) public pure returns(uint) {
       
        uint  val=0;
        bytes   memory stringBytes = bytes(numString);
        for (uint  i =  0; i<stringBytes.length; i++) {
            uint exp = stringBytes.length - i;
            bytes1 ival = stringBytes[i];
            uint8 uval = uint8(ival);
           uint jval = uval - uint(0x30);
   
           val +=  (uint(jval) * (10**(exp-1))); 
        }
        return val;
    }

    function setContract(address _address,string memory distance, string memory fetchedHour) public view returns (string memory) {
       
        uint dist = stnum(distance);
        uint hour = stnum(fetchedHour);
        uint start = stnum(employees[_address].startHour);
        uint end = stnum(employees[_address].endHour);
        uint reqdist = stnum(employees[_address].requiredDistance);
           
        //require(end >= hour && hour >= start, "out of time");
        if(end >= hour && hour >= start){
            if(reqdist >= dist){
                return 'Approved';
            }
            else {
                return 'Out of compliance';
            }
        } 
        else {
            return 'Time is up';
        }
    }

    function deposit() public payable {
        emit Deposit(msg.sender, msg.value, address(this).balance);
    }

    function notPayable() public {}
    
    // Function to transfer Ether from this contract to address from input
    function transfer(address payable _too, uint _amount) public {
        _too.transfer(_amount);
        emit Transfer(_too, _amount, address(this).balance);
    }

    function getBalance () public view returns (uint) {
        return address(this).balance;
    }

}