type CardProps = {
  id: number;
  text: string;
  fullName: string;
  profession: string;
  avatar: string;
};

export const cards: CardProps[] = [
  {
    id: 1,
    text: '“ Thank you for dinner last night. It was amazing!! I have to say it’s the best meal I have had in quite some time. You will definitely be seeing more of me eating at your establishment. “',
    avatar:
      'https://images.unsplash.com/photo-1589198381011-10cd85761593?ixid=M3w1NjMwMDh8MHwxfGFsbHx8fHx8fHx8fDE3MDcwNDQ4NTV8&ixlib=rb-4.0.3',
    fullName: 'Alice Wonderland',
    profession: 'Bloger',
  },
  {
    id: 2,
    text: '“ My birthday party was better and even more “delicious” than I had hoped. Stephane and staff made everyone feel at home as soon as they walked in the door.Merci! “',
    avatar:
      'https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixid=M3w1NjMwMDh8MHwxfGFsbHx8fHx8fHx8fDE3MDcwNDcyMDJ8&ixlib=rb-4.0.3',
    fullName: 'John Doe',
    profession: 'Photographer',
  },
  {
    id: 3,
    text: ' “ We were at The FoodZero a few weeks ago with some clients from Texas . I am finally getting back to tell you that we had a wonderful evening! The food, the service, the host, EVERYTHING was perfect! “',
    avatar:
      'https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=M3w1NjMwMDh8MHwxfGFsbHx8fHx8fHx8fDE3MDcwNDcyNzB8&ixlib=rb-4.0.3',
    fullName: 'Lendsy Cooper',
    profession: 'Fashion',
  },
];
