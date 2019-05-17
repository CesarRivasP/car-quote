export const getYearDifference = (year) => {
  return new Date().getFullYear() - year;
}

export const calculateBrand = (model) => {
  let increment;

  switch(model){
    case 'Alfa Romeo':
      increment = 1.35;
      break;
    case 'BMW':
      increment = 1.25;
      break;
    case 'Mercedes Benz':
      increment = 1.25;
      break;
    case 'Porsche':
      increment = 1.10;
      break;
    case 'Lexus':
      increment = 1.05;
      break;
    case 'Subaru':
      increment = 1.05;
      break;
    case 'Toyota':
      increment = 1.05;
      break;
      default:
        break;
  }

  return increment;
}

export const getPlan = (plan) => {
  return (plan === 'basic') ? 1.20 : 1.50;
}

export const firstMayus = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
