export type FriendType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export enum QueryFriendKey {
  FRIEND = 'FRIEND',
}

export type UserCardType = {
  name: string;
  lastName: string;
  userPhrase: string;
  onDeleteUser: () => void;
  userPhoto: string;
  buttonName: string;
};
