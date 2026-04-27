export type DriverStatus = 'full' | 'partial' | 'pending' | 'rejected';
export type TripStatus = 'active' | 'sos' | 'tracking' | 'completed';
export type ComplaintStatus = 'open' | 'reviewing' | 'resolved' | 'dismissed';
export type AnnouncementAudience = 'all' | 'passengers' | 'drivers';

export interface Driver {
  id: string;
  name: string;
  serial: string;
  phone: string;
  plate: string;
  status: DriverStatus;
  online: boolean;
  rating: number;
  completedTrips: number;
  violations: number;
  registeredDate: string;
}

export interface Trip {
  id: string;
  passengerName: string;
  driverName: string;
  driverSerial: string;
  status: TripStatus;
  location: string;
  startedAgo: string;
  hasSOS: boolean;
}

export interface Complaint {
  id: string;
  reason: string;
  emoji: string;
  againstSerial: string | null;
  filedBy: string;
  date: string;
  time: string;
  description: string;
  status: ComplaintStatus;
  hasPhoto: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  body: string;
  date: string;
  isPinned: boolean;
  audience: AnnouncementAudience;
  pushSent: boolean;
}

export interface FareTier {
  tier: 'regular' | 'student' | 'seniorPwd';
  label: string;
  baseFare: number;
  perKmRate: number;
  shortTripRate: number;
  discountPercent: number;
}

export const mockKPIs = {
  totalDrivers: 1042,
  activeTrips: 47,
  openComplaints: 8,
  pendingVerifications: 14,
};

export const mockDrivers: Driver[] = [
  { id: 'd1', name: 'Juan Dela Cruz', serial: 'CCM-0142', phone: '+63 917 888 1234', plate: 'ABC 123', status: 'full', online: true, rating: 4.8, completedTrips: 23, violations: 2, registeredDate: 'Jan 15, 2023' },
  { id: 'd2', name: 'Mario Santos', serial: 'CCM-0087', phone: '+63 918 777 5678', plate: 'DEF 456', status: 'full', online: true, rating: 4.5, completedTrips: 45, violations: 1, registeredDate: 'Mar 3, 2022' },
  { id: 'd3', name: 'Pedro Reyes', serial: 'CCM-0210', phone: '+63 920 666 3456', plate: 'GHI 789', status: 'partial', online: false, rating: 4.2, completedTrips: 12, violations: 3, registeredDate: 'Jun 20, 2023' },
  { id: 'd4', name: 'Carlos Bautista', serial: '—', phone: '+63 917 555 2345', plate: '—', status: 'pending', online: false, rating: 0, completedTrips: 0, violations: 0, registeredDate: 'Apr 22, 2026' },
  { id: 'd5', name: 'Jose Lim', serial: 'CCM-0303', phone: '+63 918 444 7890', plate: 'JKL 012', status: 'full', online: false, rating: 4.9, completedTrips: 67, violations: 0, registeredDate: 'Feb 10, 2022' },
  { id: 'd6', name: 'Ana Villanueva', serial: 'CCM-0442', phone: '+63 920 333 6789', plate: 'MNO 345', status: 'full', online: true, rating: 4.6, completedTrips: 34, violations: 1, registeredDate: 'Apr 5, 2023' },
  { id: 'd7', name: 'Roberto Torres', serial: 'CCM-0992', phone: '+63 917 222 5678', plate: 'PQR 678', status: 'partial', online: false, rating: 3.8, completedTrips: 8, violations: 4, registeredDate: 'Sep 12, 2023' },
  { id: 'd8', name: 'Alicia Santos', serial: '—', phone: '+63 918 111 4567', plate: '—', status: 'pending', online: false, rating: 0, completedTrips: 0, violations: 0, registeredDate: 'Apr 20, 2026' },
  { id: 'd9', name: 'Eduardo Mercado', serial: '—', phone: '+63 920 000 3456', plate: '—', status: 'rejected', online: false, rating: 0, completedTrips: 3, violations: 6, registeredDate: 'Jan 5, 2026' },
  { id: 'd10', name: 'Linda Ong', serial: 'CCM-0551', phone: '+63 917 999 2345', plate: 'STU 901', status: 'full', online: true, rating: 4.7, completedTrips: 28, violations: 0, registeredDate: 'Jul 15, 2022' },
];

export const mockTrips: Trip[] = [
  { id: 'TR-4821', passengerName: 'Maria Santos', driverName: 'Juan Dela Cruz', driverSerial: 'CCM-0142', status: 'sos', location: 'City Hall area', startedAgo: '8 min ago', hasSOS: true },
  { id: 'TR-4820', passengerName: 'Ana Reyes', driverName: 'Mario Santos', driverSerial: 'CCM-0087', status: 'active', location: 'Public Market', startedAgo: '12 min ago', hasSOS: false },
  { id: 'TR-4819', passengerName: 'Jose Cruz', driverName: 'Ana Villanueva', driverSerial: 'CCM-0442', status: 'active', location: 'Capitol area', startedAgo: '3 min ago', hasSOS: false },
  { id: 'TR-4818', passengerName: 'Linda Go', driverName: 'Jose Lim', driverSerial: 'CCM-0303', status: 'active', location: 'Port area', startedAgo: '18 min ago', hasSOS: false },
  { id: 'TR-4817', passengerName: 'Rosa Cruz', driverName: 'Linda Ong', driverSerial: 'CCM-0551', status: 'active', location: 'Hospital area', startedAgo: '5 min ago', hasSOS: false },
  { id: 'TR-4816', passengerName: 'Marco Tan', driverName: '—', driverSerial: '—', status: 'tracking', location: 'San Joaquin', startedAgo: '22 min ago', hasSOS: false },
  { id: 'TR-4810', passengerName: 'Cora Santos', driverName: 'Juan Dela Cruz', driverSerial: 'CCM-0142', status: 'completed', location: 'Market Area', startedAgo: '1 hr ago', hasSOS: false },
  { id: 'TR-4809', passengerName: 'Ben Reyes', driverName: 'Mario Santos', driverSerial: 'CCM-0087', status: 'completed', location: 'Sacred Heart', startedAgo: '1.5 hr ago', hasSOS: false },
];

export const mockComplaints: Complaint[] = [
  { id: 'C-001', reason: 'Colorum (Unregistered)', emoji: '🚷', againstSerial: null, filedBy: 'Maria Santos', date: 'Apr 21', time: '9:15 AM', description: 'Driver could not present any registration documents. Plate number was partially covered.', status: 'reviewing', hasPhoto: false },
  { id: 'C-002', reason: 'Overcharging', emoji: '💸', againstSerial: 'CCM-0142', filedBy: 'Jose Cruz', date: 'Apr 20', time: '3:45 PM', description: 'Driver charged ₱35 for a route that should cost ₱15 based on the official tariff.', status: 'open', hasPhoto: true },
  { id: 'C-003', reason: 'Unsafe Driving', emoji: '⚠️', againstSerial: 'CCM-0087', filedBy: 'Rosa Tan', date: 'Apr 19', time: '7:20 AM', description: 'Driver was using his phone while driving and nearly ran a red light near city hall.', status: 'open', hasPhoto: false },
  { id: 'C-004', reason: 'No Seat Available', emoji: '🚫', againstSerial: 'CCM-0210', filedBy: 'Ben Lim', date: 'Apr 18', time: '11:30 AM', description: 'Driver accepted two additional passengers when only one seat was available.', status: 'resolved', hasPhoto: false },
  { id: 'C-005', reason: 'Overcharging', emoji: '💸', againstSerial: 'CCM-0551', filedBy: 'Ana Go', date: 'Apr 17', time: '5:00 PM', description: 'Charged ₱40 instead of the metered rate for a short trip near the port.', status: 'dismissed', hasPhoto: true },
  { id: 'C-006', reason: 'Rude Behavior', emoji: '😤', againstSerial: 'CCM-0303', filedBy: 'Marco Santos', date: 'Apr 16', time: '2:15 PM', description: 'Driver was verbally aggressive when asked for change after a ₱20 fare.', status: 'reviewing', hasPhoto: false },
  { id: 'C-007', reason: 'Unsafe Driving', emoji: '⚠️', againstSerial: 'CCM-0992', filedBy: 'Cora Reyes', date: 'Apr 15', time: '8:45 AM', description: 'Driver was speeding through residential areas near Sacred Heart parish.', status: 'open', hasPhoto: false },
  { id: 'C-008', reason: 'Other', emoji: '📝', againstSerial: 'CCM-0442', filedBy: 'Linda Cruz', date: 'Apr 14', time: '1:00 PM', description: 'Driver refused to take the requested route and added extra distance to the trip.', status: 'open', hasPhoto: false },
];

export const mockAnnouncements: Announcement[] = [
  { id: 'A-001', title: 'Route 3 Suspension — Apr 18–25', body: 'All tricycles on Route 3 suspended due to road repairs in Barangay San Joaquin area. Please use alternate routes.', date: 'Apr 18', isPinned: true, audience: 'all', pushSent: true },
  { id: 'A-002', title: 'Fare Update Effective May 1', body: 'New LTFRB-approved fares take effect May 1. Base fare increases to ₱13. Students and seniors maintain their discounts.', date: 'Apr 17', isPinned: false, audience: 'all', pushSent: true },
  { id: 'A-003', title: 'Driver Registration Drive', body: 'All unregistered drivers encouraged to register before April 30 to avoid operational suspension.', date: 'Apr 12', isPinned: false, audience: 'drivers', pushSent: false },
  { id: 'A-004', title: 'Scheduled System Maintenance', body: 'SafeRide will undergo maintenance on April 28 from 2AM–5AM. Services may be intermittently unavailable.', date: 'Apr 10', isPinned: false, audience: 'all', pushSent: true },
];

export const mockFareTiers: FareTier[] = [
  { tier: 'regular', label: 'Regular Fare', baseFare: 12.00, perKmRate: 2.50, shortTripRate: 10.00, discountPercent: 0 },
  { tier: 'student', label: 'Student Fare', baseFare: 12.00, perKmRate: 2.50, shortTripRate: 10.00, discountPercent: 20 },
  { tier: 'seniorPwd', label: 'Senior / PWD Fare', baseFare: 12.00, perKmRate: 2.50, shortTripRate: 10.00, discountPercent: 20 },
];

export const mockTripsPerDay: number[] = [
  42, 38, 55, 61, 47, 33, 28, 44, 52, 60,
  71, 65, 58, 43, 37, 49, 56, 63, 72, 68,
  54, 47, 39, 45, 58, 64, 78, 83, 94, 67,
];

export const mockComplaintsPerWeek: number[] = [15, 22, 18, 31, 12];

export const mockDriverPerformance = [
  { name: 'Jose Lim', serial: 'CCM-0303', initials: 'JL', score: 95 },
  { name: 'Juan Dela Cruz', serial: 'CCM-0142', initials: 'JD', score: 92 },
  { name: 'Mario Santos', serial: 'CCM-0087', initials: 'MS', score: 87 },
  { name: 'Alicia Santos', serial: 'CCM-0442', initials: 'AS', score: 82 },
  { name: 'Carlos Bautista', serial: 'CCM-0078', initials: 'CB', score: 78 },
  { name: 'Eduardo Mercado', serial: 'CCM-0551', initials: 'EM', score: 73 },
  { name: 'Pedro Reyes', serial: 'CCM-0210', initials: 'PR', score: 61 },
  { name: 'Roberto Torres', serial: 'CCM-0992', initials: 'RT', score: 55 },
];

export const mockActivityFeed = [
  { type: 'trip', message: 'SOS triggered by Maria Santos (Trip #TR-4821)', time: '8 min ago' },
  { type: 'driver', message: 'Carlos Bautista submitted registration documents', time: '22 min ago' },
  { type: 'complaint', message: 'New complaint filed against CCM-0142 (Overcharging)', time: '45 min ago' },
  { type: 'trip', message: 'Trip #TR-4819 started — CCM-0442 active', time: '1 hr ago' },
  { type: 'doc', message: 'Fare update pending approval from LTFRB', time: '2 hr ago' },
  { type: 'driver', message: 'Eduardo Mercado registration rejected', time: '3 hr ago' },
];
