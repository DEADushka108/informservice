export const users = {
  id: `1`,
  name: `Petr Ivanov`,
  title: `CEO`,
  children: [
    {
      id: `2`,
      name: `Ivan Petrov`,
      title: `department manager`
    },
    {
      id: `3`,
      name: `Sergey Alekseev`,
      title: `department manager`,
      children: [
        {
          id: `4`,
          name: `Aleksey Sergeev`,
          title: `senior engineer`
        },
        {
          id: `5`,
          name: `Andrey Mihailov`,
          title: `senior engineer`,
          children: [
            {
              id: `6`,
              name: `Mihail Andreev`,
              title: `engineer`
            },
            {
              id: `7`,
              name: `Anatoliy Petrov`,
              title: `engineer`
            }
          ]
        },
        {
          id: `8`,
          name: `Petr Anatoliev`,
          title: `senior engineer`
        }
      ]
    },
    {
      id: `9`,
      name: `Mark Grigoriev`,
      title: `department manager`
    },
    {
      id: `10`,
      name: `Grigoriy Markov`,
      title: `department manager`,
      children: [
        {
          id: `11`,
          name: `Andrey Kuznetsov`,
          title: `senior engineer`
        }
      ]
    }
  ]
};
