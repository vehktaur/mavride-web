export interface RegisteredDriver {
  id: number;
  name: string;
  image: string;
  status: 'Active' | 'Offline';
  rating: number;
  gender: 'Male' | 'Female';
  vehicle_color: string;
  license_plate: string;
  email: string;
}

export const registeredDrivers: RegisteredDriver[] = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://i.pravatar.cc/150?img=1',
    email: 'johndoe@example.com',
    rating: 2.8,
    gender: 'Male',
    vehicle_color: 'Black',
    license_plate: 'ABC-1234',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://i.pravatar.cc/150?img=2',
    email: 'janesmith@example.com',
    rating: 1.5,
    gender: 'Female',
    vehicle_color: 'Red',
    license_plate: 'XYZ-5678',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Samuel Green',
    image: 'https://i.pravatar.cc/150?img=3',
    email: 'samuelgreen@example.com',
    rating: 3.2,
    gender: 'Male',
    vehicle_color: 'White',
    license_plate: 'DEF-9101',
    status: 'Offline',
  },
  {
    id: 4,
    name: 'Emily Brown',
    image: 'https://i.pravatar.cc/150?img=4',
    email: 'emilybrown@example.com',
    rating: 4.9,
    gender: 'Female',
    vehicle_color: 'Blue',
    license_plate: 'GHI-3456',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Michael Johnson',
    image: 'https://i.pravatar.cc/150?img=5',
    email: 'michaeljohnson@example.com',
    rating: 4.3,
    gender: 'Male',
    vehicle_color: 'Silver',
    license_plate: 'JKL-7890',
    status: 'Offline',
  },
  {
    id: 6,
    name: 'Daniel Wan',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    email: 'daniel.wan@example.com',
    rating: 4.1,
    gender: 'Male',
    vehicle_color: 'Gray',
    license_plate: 'DRV-1001',
    status: 'Active',
  },
  {
    id: 7,
    name: 'Greg Walters',
    image: 'https://randomuser.me/api/portraits/men/20.jpg',
    email: 'greg.walters@example.com',
    rating: 3.7,
    gender: 'Male',
    vehicle_color: 'White',
    license_plate: 'DRV-1002',
    status: 'Offline',
  },
  {
    id: 8,
    name: 'Frank Murray',
    image: 'https://randomuser.me/api/portraits/men/30.jpg',
    email: 'frank.murray@example.com',
    rating: 4.0,
    gender: 'Male',
    vehicle_color: 'Silver',
    license_plate: 'DRV-1003',
    status: 'Active',
  },
  {
    id: 9,
    name: 'Franca Doe',
    image: 'https://randomuser.me/api/portraits/women/40.jpg',
    email: 'franca.doe@example.com',
    rating: 3.5,
    gender: 'Female',
    vehicle_color: 'Red',
    license_plate: 'DRV-1004',
    status: 'Offline',
  },
  {
    id: 10,
    name: 'Tim Eddy',
    image: 'https://randomuser.me/api/portraits/men/50.jpg',
    email: 'tim.eddy@example.com',
    rating: 3.9,
    gender: 'Male',
    vehicle_color: 'Black',
    license_plate: 'DRV-1005',
    status: 'Active',
  },
  {
    id: 11,
    name: 'Tina Brown',
    image: 'https://randomuser.me/api/portraits/women/60.jpg',
    email: 'tina.brown@example.com',
    rating: 3.4,
    gender: 'Female',
    vehicle_color: 'Green',
    license_plate: 'DRV-1006',
    status: 'Offline',
  },
];

export default registeredDrivers;
