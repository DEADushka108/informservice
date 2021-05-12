export const users = {
  id: `n1`,
  name: `Petr Ivanov`,
  title: `CEO`,
  photo: `https://i.pravatar.cc/70?img=1`,
  children: [
    {
      id: `n2`,
      name: `Ivan Petrov`,
      title: `department manager`,
      photo: `https://i.pravatar.cc/70?img=2`,
    },
    {
      id: `n3`,
      name: `Sergey Alekseev`,
      title: `department manager`,
      photo: `https://i.pravatar.cc/70?img=3`,
      children: [
        {
          id: `n4`,
          name: `Aleksey Sergeev`,
          title: `senior engineer`,
          photo: `https://i.pravatar.cc/70?img=4`,
        },
        {
          id: `n5`,
          name: `Andrey Mihailov`,
          title: `senior engineer`,
          photo: `https://i.pravatar.cc/70?img=5`,
          children: [
            {
              id: `n6`,
              name: `Mihail Andreev`,
              title: `engineer`,
              photo: `https://i.pravatar.cc/70?img=6`,
            },
            {
              id: `n7`,
              name: `Anatoliy Petrov`,
              title: `engineer`,
              photo: `https://i.pravatar.cc/70?img=7`,
            }
          ]
        },
        {
          id: `n8`,
          name: `Petr Anatoliev`,
          title: `senior engineer`,
          photo: `https://i.pravatar.cc/70?img=8`,
        }
      ]
    },
    {
      id: `n9`,
      name: `Mark Grigoriev`,
      title: `department manager`,
      photo: `https://i.pravatar.cc/70?img=9`,
    },
    {
      id: `n10`,
      name: `Grigoriy Markov`,
      title: `department manager`,
      photo: `https://i.pravatar.cc/70?img=10`,
      children: [
        {
          id: `n11`,
          name: `Andrey Kuznetsov`,
          title: `senior engineer`,
          photo: `https://i.pravatar.cc/70?img=11`,
        }
      ]
    }
  ]
};
