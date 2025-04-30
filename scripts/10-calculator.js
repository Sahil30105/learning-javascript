let calculation = localStorage.getItem('calculation') || '';
    calculation ? showCalculation() : null;
    function updateCalculation(inp) {
      calculation += inp;
      showCalculation();
      localStorage.setItem('calculation',calculation);
      return calculation;      
    }
    function Evaluation() {
      calculation = eval(calculation);
      showCalculation();
      localStorage.setItem('calculation',calculation);
    }
    function showCalculation(){
      document.querySelector('.js-calculation').innerHTML=calculation;
    }