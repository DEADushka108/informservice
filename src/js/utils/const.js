export const AppRoute = {
  ORGCHART: `/orgchart`,
  ROUTING: `/routing`,
  ROOT: `/`,
};

export const TabNames = {
  CREATE: `Create`,
  AGREEMENT: `Agreement`,
  NOTIFICATION: `Notification`,
  SUBSCRIBE: `Subscribe`,
  REGISTRATION: `Registartion`,
};

export const options = [
  {value: `agreement`, label: `Agreement document`},
  {value: `inform`, label: `Inform message`},
  {value: `order`, label: `Order message`},
];

export const subOptions = [
  {value: `necessary`, label: `Agreement necessary`},
  {value: `unnecessary`, label: `Agreement unnecessary`},
];

export const unitOptions = [
  {value: `lawyer`, label: `Lawyer Unit`},
  {value: `economy`, label: `Economy Unit`},
  {value: `safety`, label: `Safety Unit`},
  {value: `common`, label: `Common Unit`},
];

export const messageOptions = [
  {value: `all`, label: `To all`},
  {value: `subdivision`, label: `Just for subdivision`},
  {value: `other`, label: `Just for other units`},
];
