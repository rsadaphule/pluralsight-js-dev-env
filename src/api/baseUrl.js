export default function getBaseUrl() {
    
    console.log('Is Mock: ' + getQueryStringParameterByName('useMockApi')); // eslint-disable-line no-console
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001' : 'http://localhost:3000';
  
}


function getQueryStringParameterByName(name)
{
   name = "";
   console.log('Is Mock: ' + name); // eslint-disable-line no-console
   return false;
    
}
