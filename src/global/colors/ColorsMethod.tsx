 
const ColorsMethod = (result:any)=>{
 
 
  const colors = {
  textWhite: result=='false' ? '#ffffff' : '#050003',
  textWhiteInput: result=='false' ? '#ffffff' : '#45607d',
  textPrimary: result=='false' ? '#0091ff' : '#007bff',
  textSecondary: result=='false' ? '#45607d' : '#cdcfd1',
  textSuccess: result=='false' ? '#a000fc' : '#ffffff',
  textWarning: result=='false' ? '#ccb808' : '#ffe600',
  textDanger: result=='false' ? '#ff0062' : '#ff6200',
  textDark: result=='false' ? '#262524' : '#ffffff',
  textLight: result=='false' ? '#736f6c' : '#f0edeb',
};

  const background = {
    bgWhite: result=='false' ? '#ffffff': '#050003',
    bgPrimary: result=='false' ? '#0a3d78': '#021224',
    bgSecondary: result=='false' ? '#9f00e8': '#1f002e',
    bgSuccess: result=='false' ? '#0894ff': '#032740',
    bgWarning: result=='false' ? '#ffc800': '#3b2f03',
    bgDanger: result=='false' ? '#ed0037': '#33000c',
    bgDark: result=='false' ? '#131414': '#f5fafa',
    bgLight: result=='false' ? '#dedede': '#373a3b',
}


return {colors, background}
 
 
}

export default ColorsMethod;