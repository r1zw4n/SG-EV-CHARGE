export type ConnectorType = 'CCS2' | 'Type 2' | 'CHAdeMO';

export type PointStatus = 'Available' | 'In Use' | 'Under Maintenance';

export interface ChargingPoint {
  id: string;
  bayNumber: string;
  connectorType: ConnectorType;
  speedKw: number;
  speedCategory: 'Ultra-Fast DC' | 'Rapid DC' | 'Fast AC' | 'Standard AC';
  status: PointStatus;
  timeToFullFrom20Percent: string;
  estimatedMinutesFrom20: number;
  ratePerKwh: string;
}

export interface ChargingStation {
  id: string;
  name: string;
  area: string;
  address: string;
  distanceKm: number;
  distanceDisplay: string;
  topSpeedKw: number;
  speedSummary: string;
  timeToFullFrom20Percent: string;
  fastestMinutesFrom20: number;
  totalPoints: number;
  availablePointsCount: number;
  parkingFeeInfo: string;
  points: ChargingPoint[];
}

export type FilterOption = 'nearest' | 'fastest';

export type ActiveScreen = 'stations' | 'points';
