export const AppRoute = {
  ORGCHART: `/orgchart`,
  ROUTING: `/routing`,
  ROOT: `/`,
};

export const TabNames = {
  CREATE: `Create`,
  AGREEMENT: `Agreement`,
  NOTIFICATION: `Notification`,
  REGISTRATION: `Registartion`,
  CONFIRM: `Confirm`,
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
  {value: `none`, label: `None`},
  {value: `all`, label: `To all`},
  {value: `subdivision`, label: `Just for subdivision`},
  {value: `other`, label: `Just for other units`},
  {value: `recipient`, label: `Just for recipint`},
  {value: `sender`, label: `Just for sender`},
];

export const regOptions = [
  {value: `none`, label: `None`},
  {value: `all`, label: `Both side registration`},
  {value: `outgoing`, label: `Outgoing registration`},
  {value: `incoming`, label: `Incoming registration`},
];
