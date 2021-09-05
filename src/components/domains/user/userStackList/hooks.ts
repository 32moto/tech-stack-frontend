interface Props {
  id: string
}

export const useGetUserStacks = ({id}: Props) => {
  return {
    stacks: [
      {
        id: '1',
        name: 'React',
        iconPath: 'https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png'
      },
      {
        id: '2',
        name: 'Next.js',
        iconPath: 'https://i2.wp.com/developers-book.com/wp-content/uploads/2021/04/next-js.jpg?fit=1280%2C1280&ssl=1'
      },
      {
        id: '3',
        name: 'React',
        iconPath: 'https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png'
      },
      {
        id: '4',
        name: 'Next.js',
        iconPath: 'https://i2.wp.com/developers-book.com/wp-content/uploads/2021/04/next-js.jpg?fit=1280%2C1280&ssl=1'
      },
      {
        id: '5',
        name: 'React',
        iconPath: 'https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png'
      },
      {
        id: '6',
        name: 'Next.js',
        iconPath: 'https://i2.wp.com/developers-book.com/wp-content/uploads/2021/04/next-js.jpg?fit=1280%2C1280&ssl=1'
      },
    ],
    loading: false,
    error: undefined
  }
}